import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/NavBari';

const InsuranceProviderProfile: React.FC = () => {
  // Sample insurance provider data (replace with actual data)
  const [providerData, setProviderData] = useState({
    companyName: 'ABC Insurance',
    email: 'info@abcinsurance.com',
    mobile: '+1234567890',
    contactPersonName: 'John Smith',
  });

  // State to track whether the profile is in edit mode
  const [editMode, setEditMode] = useState(false);

  // Function to handle changes in profile data
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProviderData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle saving changes
  const handleSave = () => {
    // Perform save action (e.g., make API call to update provider data)
    console.log('Saving changes:', providerData);
    // For demo purposes, we'll just toggle edit mode off
    setEditMode(false);
  };

  return (
    <main>
      <Header />
      
      {/* Insurance Provider Profile section */}
      <section className="py-8" style={{background: "#d5c6e0"}}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Insurance Provider Profile</h2>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 mt-5">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-4">Provider Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold">Company Name:</p>
              {editMode ? (
                <input
                  type="text"
                  name="companyName"
                  value={providerData.companyName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{providerData.companyName}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Email:</p>
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={providerData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{providerData.email}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Mobile:</p>
              {editMode ? (
                <input
                  type="tel"
                  name="mobile"
                  value={providerData.mobile}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{providerData.mobile}</p>
              )}
            </div>
            <div>
              <p className="text-lg font-semibold">Contact Person Name:</p>
              {editMode ? (
                <input
                  type="text"
                  name="contactPersonName"
                  value={providerData.contactPersonName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <p>{providerData.contactPersonName}</p>
              )}
            </div>
          </div>
          {/* Render Save and Edit buttons based on edit mode */}
          <div className="mt-6">
            {editMode ? (
              <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
                Save
              </button>
            ) : (
              <button onClick={() => setEditMode(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
                Edit
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default InsuranceProviderProfile;
