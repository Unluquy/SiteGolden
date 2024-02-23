import { useState } from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  const [password, setPassword] = useState('');

  const handleConfirm = () => {
    // Check password here
    if (password === 'er8iws3;qf') {
      onConfirm();
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div style={{ display: isOpen ? 'flex' : 'none', flexDirection: 'column' }}  > 
      <div className=" justify-center items-center flex flex-col mt-3 [&>*]:m-1" >
        <h2>Mot de passe</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=' text-black rounded-md'
        />
        <div className='[&>*]:m-2'>
            <button onClick={handleConfirm}>Confirmer</button>
            <button onClick={onClose}>Annuler</button>
        </div>

      </div>
    </div>
  );
};

export default Modal;