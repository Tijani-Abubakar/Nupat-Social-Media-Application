import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import PasswordRecoveryModal from './PasswordRecoveryModal';

Modal.setAppElement('#root');

const LoginModal = ({ show, onClose, onForgetPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPasswordRecoveryModalOpen, setPasswordRecoveryModalOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (validateInput(email, password)) {
      const isAuthenticated = fakeAuth(email, password);
      if (isAuthenticated) {
        onClose();
      } else {
        setError('Invalid email or password');
      }
    }
  };

  const validateInput = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return false;
    }
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one digit');
      return false;
    }
    setError('');
    return true;
  };

  const fakeAuth = (email, password) => {
    return email === 'test@example.com' && password === 'Password123';
  };

  const openPasswordRecoveryModal = () => {
    setPasswordRecoveryModalOpen(true);
  };

  const closePasswordRecoveryModal = () => {
    setPasswordRecoveryModalOpen(false);
  };

  if (!show) return null;

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className='bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative'>
        <button className='absolute top-7 right-4 text-gray-600' onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
        <h1 className='text-2xl font-bold mb-'>Log In</h1>
        <p className='mb-6'>It's quick and easy.</p>
        <div className='border-b border-gray-500 mb-6'></div>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full p-2 mb-4 border border-gray-300 rounded'
        />
        <input
          type="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-2 mb-4 border border-gray-300 rounded'
        />
        <p className='flex justify-end mb-4'>
          <span className='text-[#163390] cursor-pointer' onClick={onForgetPassword}>
            Forgeta Password?
          </span>
        </p>
        <div className='flex items-center justify-center'>
          <button
            onClick={handleLogin}
            className='w-[50%] bg-[#163390] font-bold text-white p-2 rounded'
          >
            Log In
          </button>
        </div>
        <PasswordRecoveryModal show={isPasswordRecoveryModalOpen} onClose={closePasswordRecoveryModal} />
      </div>
    </Modal>
  );
};

export default LoginModal;
