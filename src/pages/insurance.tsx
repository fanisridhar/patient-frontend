import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/NavBar';

const InsuranceProviderSearchPage: React.FC = () => {
  // State variables to store search inputs and search results
  const [companyName, setCompanyName] = useState('');
  const [price, setPrice] = useState('');
  const [medicalIncluded, setMedicalIncluded] = useState('');
  const [dentalIncluded, setDentalIncluded] = useState('');
  const [visionIncluded, setVisionIncluded] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]); // Array to store search results

  // Function to handle search
  const handleSearch = () => {
    // Simulating API call to fetch search results
    // Replace this with your actual API request
    const searchParams = {
      companyName,
      price,
      medicalIncluded,
      dentalIncluded,
      visionIncluded,
    };
    // Simulated search results
    const results = [
      {
        companyName: 'Company A',
        planName: 'Plan 1',
        planDescription: 'This is Plan 1 description.',
        dentalIncluded: true,
        visionIncluded: false,
        medicalIncluded: true,
        price: '$100',
      },
      {
        companyName: 'Company B',
        planName: 'Plan 2',
        planDescription: 'This is Plan 2 description.',
        dentalIncluded: false,
        visionIncluded: true,
        medicalIncluded: false,
        price: '$150',
      },
      // Add more simulated search results here if needed
    ];

    // Filter results based on search criteria
    const filteredResults = results.filter(result => {
      let include = true;
      if (companyName && result.companyName.toLowerCase() !== companyName.toLowerCase()) {
        include = false;
      }
      if (price && result.price !== price) {
        include = false;
      }
      if (medicalIncluded && result.medicalIncluded.toString() !== medicalIncluded) {
        include = false;
      }
      if (dentalIncluded && result.dentalIncluded.toString() !== dentalIncluded) {
        include = false;
      }
      if (visionIncluded && result.visionIncluded.toString() !== visionIncluded) {
        include = false;
      }
      return include;
    });

    setSearchResults(filteredResults);
  };

  return (
    <main>
      <Header />
      
      {/* Insurance Provider Search section */}
      <section className="py-8"  style={{background: "#d5c6e0"}}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4" style={{marginLeft: '-62px'}}>Find Insurance Providers</h2>
          <div className="flex flex-col md:flex-row md:space-x-4 justify-center">
            {/* Company Name input */}
            <div className="flex flex-col flex-1">
              <label htmlFor="companyName" className="mb-2">Company Name</label>
              <input
                id="companyName"
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              />
            </div>
            {/* Price input */}
            <div className="flex flex-col flex-1">
              <label htmlFor="price" className="mb-2">Price</label>
              <input
                id="price"
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              />
            </div>
            {/* Medical Included dropdown */}
            <div className="flex flex-col flex-1">
              <label htmlFor="medicalIncluded" className="mb-2">Medical Included</label>
              <select
                id="medicalIncluded"
                value={medicalIncluded}
                onChange={(e) => setMedicalIncluded(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              >
                <option value="">Medical Included</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            {/* Dental Included dropdown */}
            <div className="flex flex-col flex-1">
              <label htmlFor="dentalIncluded" className="mb-2">Dental Included</label>
              <select
                id="dentalIncluded"
                value={dentalIncluded}
                onChange={(e) => setDentalIncluded(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              >
                <option value="">Dental Included</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            {/* Vision Included dropdown */}
            <div className="flex flex-col flex-1">
              <label htmlFor="visionIncluded" className="mb-2">Vision Included</label>
              <select
                id="visionIncluded"
                value={visionIncluded}
                onChange={(e) => setVisionIncluded(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              >
                <option value="">Vision Included</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          {/* Search button */}
          <div className="flex justify-center">
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Display search results */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Search Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((result, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold mb-2">{result.companyName}</h3>
                <p className="text-gray-600 mb-2">{result.planName}</p>
                <p className="text-gray-600 mb-2">{result.planDescription}</p>
                <p className="text-gray-600 mb-2">Price: {result.price}</p>
                <p className="text-gray-600 mb-2">Include Dental: {result.dentalIncluded ? 'Yes' : 'No'}</p>
                <p className="text-gray-600 mb-2">Include Vision: {result.visionIncluded ? 'Yes' : 'No'}</p>
                <p className="text-gray-600 mb-2">Include Medical: {result.medicalIncluded ? 'Yes' : 'No'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default InsuranceProviderSearchPage;
