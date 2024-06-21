import React, { useState } from 'react';
import './App.css';
import { ScaleLoader } from 'react-spinners';
import Swal from 'sweetalert'; // Import SweetAlert

const App = () => {
  const [nama, setNama] = useState('');
  const [submittedNama, setSubmittedNama] = useState(''); 
  const [alias, setAlias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [images] = useState({
    badut: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.cL_p2PAEtSftNlNr44k4-QHaDn%26pid%3DApi&f=1&ipt=9f9cfd4500374a974ebc9fab3ebeae88e45cbd5875600dbeba77e51be3db5a5f&ipo=images',
    kampaskopling: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4W6lecESK5Zg5mGRzpjRegHaE8%26pid%3DApi&f=1&ipt=77e5652fcf71a098825f4f986a4184531b29b8977e7200d514693422998a319c&ipo=images',
    dedeinoen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.8zSDDaO28Eb4OKbiWeXmJgHaFh%26pid%3DApi&f=1&ipt=a32aa73522466fa0206a0701036ce9c3dc6e9e9b55a999656f2a1c2d5753fd0c&ipo=images',
    kiarjuna: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hlnxK0uMWEbBsf-mBfvY3gHaFj%26pid%3DApi&f=1&ipt=86f1e217eb92c8fc8e711686faaf3b87b3cb950d9c4f335f24e9f9fe176b41fa&ipo=images',
    pascol: 'https://exp.itemku.com/wp-content/uploads/2023/02/pascol-mobile-legends-1.jpg',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi jika nama kosong
    if (nama.trim() === '') {
      Swal('Peringatan!', 'Silakan masukkan nama sebelum submit!', 'warning');
      return;
    }
    
    setLoading(true);

    setTimeout(() => {
      const newAlias = generateAlias(nama);
      const newAliasItem = { alias: newAlias, image: images[newAlias.toLowerCase()] };
      setAlias([newAliasItem]);
      setSubmittedNama(nama);
      setNama('');
      setLoading(false);
    }, 1000);
  };

  const generateAlias = (nama) => {
    const aliasList = ['badut', 'kampaskopling', 'dedeinoen', 'kiarjuna', 'pascol'];
    const randomIndex = Math.floor(Math.random() * aliasList.length);
    return `${aliasList[randomIndex]}`;
  };

  return (
    <div className="App">
      <div className="form-card">
        <h1>🅲🅴🅺 🅺🅷🅾🅳🅰🅼</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Masukkan nama kalian' value={nama} onChange={(e) => setNama(e.target.value)} />
          <button type="submit" disabled={loading}>
            {loading ? <ScaleLoader color="#ff0000"  size={8} /> : 'Submit'}
          </button>
        </form>
      </div>

      {alias.length > 0 && (
        <div className="alias-container">
          <div className="alias-card">
          <p>{submittedNama} Kodam kamu adalah</p>
            <img src={alias[0].image} alt="Gambar Acak" />
            <p>{alias[0].alias}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
