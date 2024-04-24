import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/NavBar';

const Dashboard: React.FC = () => {
  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="max-w-4xl w-full px-8 py-12 bg-gray-100 rounded-lg shadow-md">
          {/* First div for common guidelines */}
          <div className="mb-8 bg-red-100 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Common Guidelines and Precautions</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Carefully review the terms and conditions of both the doctor's appointment and insurance coverage.</li>
              <li>Before booking an appointment with a doctor or selecting an insurance provider, conduct thorough research to ensure their credentials, reputation, and reliability.</li>
              <li>Look for board certification, patient reviews, and accreditation for healthcare facilities.</li>
            </ul>
          </div>

          {/* Second div for finding insurance provider and doctor */}
          <div className="flex flex-col md:flex-row">
            {/* Div for finding a doctor */}
            <div className="md:w-1/2 md:pr-4 mb-8 md:mb-0 bg-blue-100 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Find a Doctor</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Search by specialty</li>
                <li>Compare reviews</li>
                <li>Check availability</li>
                <li>Book appointments with your trusted ones !</li>
              </ul>
              <Link href="/search"
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Find a Doctor
              </Link>
            </div>

            <div className="hidden md:block w-4"></div>

            {/* Div for finding an insurance provider */}
            <div className="md:w-1/2 md:pl-4 bg-green-100 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Find an Insurance Provider</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Compare plans</li>
                <li>Choose coverage that suits your needs</li>
                <li>Ensure peace of mind for you and your loved ones</li>
              </ul>
              <Link href="/insurance"
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Find Insurance Provider
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Dashboard;
