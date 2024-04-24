import React from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const Login: React.FC = () => {
  return (
    <main>
      <nav className="flex justify-between bg-gray-800 h-16 w-screen align-center text-milk text-slate-100 px-8">
          <Logo />
          <div className="flex items-center mr-1">
            <Link className="font-black pr-14 text-2xl" href="/faq">FAQ</Link>
            <Link className="font-black pr-14 text-2xl" href="/about">About Us</Link>
            <Link className="font-black pr-14 text-2xl" href="/login">Register</Link>
          </div>
        </nav>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl mt-2 text-blue-800">
            Welcome to Medilink!
          </h1>
          <div className="mt-8 max-w-md w-full">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold mb-4 text-blue-800">I am a:</h2>
              <div className="flex justify-center">
                <Link href="/patientsignup">
                  <button 
                  className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 transform hover:scale-105"
                  style={{ marginRight: '10px',boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    Patient
                  </button>
                </Link>
                <Link href="/doctorsignup">
                  <button 
                  className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 transform hover:scale-105"
                  style={{ marginRight: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    Doctor
                  </button>
                </Link>
                <Link href="/insurancesignup">
                  <button 
                  className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 transform hover:scale-105"
                  style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    Insurance Provider
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Login;
