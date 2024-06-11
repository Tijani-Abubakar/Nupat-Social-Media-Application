import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const PasswordRecoveryModal = ({ show, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordRecovery = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      setMessage('A password recovery link has been sent to your email!');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
        <h1 className="text-xl font-bold mb-4 text-center">Password Recovery</h1>
        <p className='text-md font-semibold mb-4'>Please enter the Email address linked to this account</p>
        <form onSubmit={handlePasswordRecovery} className="space-y-4">
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">Email:</label> */}
            <input
              type="email"
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#163390] text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </form>
        {message && <p className="mt-4 text-[#163390]">{message}</p>}
      </div>
    </div>
  );
};

export default PasswordRecoveryModal;