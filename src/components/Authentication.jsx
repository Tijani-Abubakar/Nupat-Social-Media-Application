import React, { useState } from 'react'
import LoginModal from '../components/LoginModal';
import PasswordRecoveryModal from '../components/PasswordRecoveryModal';
import Nupat from '../assets/nupat.jpg'


const Authentication = () => {
    const [ isLoginModalOpen, setLoginModalOpen ] = useState (false);
    const [ isPasswordRecoveryModalOpen, setPasswordRecoveryModalOpen] = useState (false);

    const openLoginModal = () => {
        setLoginModalOpen(true);
        setPasswordRecoveryModalOpen(false);
    }

    const closeLoginModal = () => {
        setLoginModalOpen(false);
    } 
    const openPasswordRecoveryModal = () => {
        setPasswordRecoveryModalOpen(true);
        setLoginModalOpen(false);
    };
    const closePasswordRecoveryModal = () => {
        setPasswordRecoveryModalOpen(false);
    }

    return (
        <div className='w-full bg-white py-20 px-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className='w-28 pb-20 sm:w-40 sm:pb-20 md:w-60 lg:w-72 xl:w-80 mx-5 animate-pulse' src={Nupat} alt="NUPAT LOGO" />
                <div className=''>
                    <div className='w-[90%] max-w-sm mx-7'>
                        <h1 className='text-4xl font-bold'>Tech around the world</h1>
                        <p className='py-4 text-2xl font-semibold'>Join today,</p>

                        <button className='flex w-full py-2 my-4 px-8 font-bold border-2 border-black rounded-md items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.3524 10.5415H21.5469V10.5H12.5469V14.5H18.1984C17.3739 16.8285 15.1584 18.5 12.5469 18.5C9.23338 18.5 6.54688 15.8135 6.54688 12.5C6.54688 9.1865 9.23338 6.5 12.5469 6.5C14.0764 6.5 15.4679 7.077 16.5274 8.0195L19.3559 5.191C17.5699 3.5265 15.1809 2.5 12.5469 2.5C7.02437 2.5 2.54688 6.9775 2.54688 12.5C2.54688 18.0225 7.02437 22.5 12.5469 22.5C18.0694 22.5 22.5469 18.0225 22.5469 12.5C22.5469 11.8295 22.4779 11.175 22.3524 10.5415Z" fill="#FFC107" />
                                <path d="M3.70312 7.8455L6.98862 10.255C7.87762 8.054 10.0306 6.5 12.5501 6.5C14.0796 6.5 15.4711 7.077 16.5306 8.0195L19.3591 5.191C17.5731 3.5265 15.1841 2.5 12.5501 2.5C8.70913 2.5 5.37812 4.6685 3.70312 7.8455Z" fill="#FF3D00" />
                                <path d="M12.5431 22.5C15.1261 22.5 17.4731 21.5115 19.2476 19.904L16.1526 17.285C15.1149 18.0742 13.8469 18.501 12.5431 18.5C9.94213 18.5 7.73362 16.8415 6.90162 14.527L3.64062 17.0395C5.29562 20.278 8.65663 22.5 12.5431 22.5Z" fill="#4CAF50" />
                                <path d="M22.3524 10.5415H21.5469V10.5H12.5469V14.5H18.1984C17.804 15.6082 17.0936 16.5766 16.1549 17.2855L16.1564 17.2845L19.2514 19.9035C19.0324 20.1025 22.5469 17.5 22.5469 12.5C22.5469 11.8295 22.4779 11.175 22.3524 10.5415Z" fill="#1976D2" />
                            </svg>

                            Google
                        </button>

                        <button className='flex w-full py-2 px-8 my-4 font-bold border-2 border-black rounded-md items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.598 20.78C16.618 21.73 15.548 21.58 14.518 21.13C13.428 20.67 12.428 20.65 11.278 21.13C9.83802 21.75 9.07802 21.57 8.21802 20.78C3.33802 15.75 4.05802 8.09 9.59802 7.81C10.948 7.88 11.888 8.55 12.678 8.61C13.858 8.37 14.988 7.68 16.248 7.77C17.758 7.89 18.898 8.49 19.648 9.57C16.528 11.44 17.268 15.55 20.128 16.7C19.558 18.2 18.818 19.69 17.588 20.79L17.598 20.78ZM12.578 7.75C12.428 5.52 14.238 3.68 16.318 3.5C16.608 6.08 13.978 8 12.578 7.75Z" fill="black" />
                            </svg>

                            Sign in with Apple
                        </button>

                        <div className="flex items-center my-4 w-full max-w-sm mx-auto">
                            <div className="flex-grow border-t-2 border-gray-300"></div>
                            <span className="mx-4">Or</span>
                            <div className="flex-grow border-t-2 border-gray-300"></div>
                        </div>

                        <button className='flex w-full py-2 px-8 my-4 font-bold border-2 border-black bg-[#131f45] text-white rounded-md items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
                            Sign Up
                        </button>
                        <p>
                            By signing up, you agree to the <span className='text-[#163390]'>Terms of service</span> and <span className='text-[#163390]'>Privacy Policy,</span> including <span className='text-[#163390]'>Cookie</span> Use.
                        </p>

                        <h2 className='pt-9'>
                            Already have an account?
                        </h2>
                        <button className='flex w-full py-2 px-8 my-4 font-bold border-2 border-black rounded-md items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'
                        
                        onClick={openLoginModal}
                        >
                            Login
                        </button>
                    </div>
                    <LoginModal show={isLoginModalOpen} onClose = {closeLoginModal} onForgetPassword={openPasswordRecoveryModal} />
                    <PasswordRecoveryModal show={isPasswordRecoveryModalOpen} onClose = {closePasswordRecoveryModal} />
                </div>
                  
            </div>
        </div>
    )
}

export default Authentication
