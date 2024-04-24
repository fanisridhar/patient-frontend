import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/NavBari';

const InsuranceProviderdb: React.FC = () => {
  // Sample data for demonstration
  const statsData = {
    totalCustomers: 500,
    mostValuablePlan: 'Premium Plan',
    totalRevenue: '$100,000',
    totalClaims: '$20,000',
  };

  // Sample data for patient claims
  const patientClaims = [
    { id: 1, name: 'John Doe', claimedAmount: '$500' },
    { id: 2, name: 'Jane Smith', claimedAmount: '$750' },
    { id: 3, name: 'Alice Johnson', claimedAmount: '$300' },
    { id: 1, name: 'John Doe', claimedAmount: '$500' },
    { id: 2, name: 'Jane Smith', claimedAmount: '$750' },
    { id: 3, name: 'Alice Johnson', claimedAmount: '$300' },
    { id: 3, name: 'Alice Johnson', claimedAmount: '$300' },
    { id: 1, name: 'John Doe', claimedAmount: '$500' },
    { id: 2, name: 'Jane Smith', claimedAmount: '$750' },
    { id: 3, name: 'Alice Johnson', claimedAmount: '$300' },
    { id: 3, name: 'Alice Johnson', claimedAmount: '$300' },
    { id: 1, name: 'John Doe', claimedAmount: '$500' },
    { id: 2, name: 'Jane Smith', claimedAmount: '$750' },
    { id: 3, name: 'Alice Johnson', claimedAmount: '$300' },
    { id: 3, name: 'Alice Johnson', claimedAmount: '$300' },
    { id: 1, name: 'John Doe', claimedAmount: '$500' },
    { id: 2, name: 'Jane Smith', claimedAmount: '$750' },
    { id: 3, name: 'Alice Johnson', claimedAmount: '$300' },
    // Add more sample data as needed
  ];

  return (
    <main>
      <Header />
      <div className="flex justify-center">
        <div className="w-3/4 flex justify-between my-8">
          {/* Graphs or Stats Section */}
          <div className="w-2/3 mr-4">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>Total Customers: {statsData.totalCustomers}</p>
                </div>
                <div>
                  <p>Most Valuable Plan: {statsData.mostValuablePlan}</p>
                </div>
                <div>
                  <p>Total Revenue: {statsData.totalRevenue}</p>
                </div>
                <div>
                  <p>Total Claims: {statsData.totalClaims}</p>
                </div>
              </div>
            </div>
            {/* Add more graphs or stats components here */}
          </div>
          {/* Patient Claims Section */}
          <div className="w-1/3 bg-white rounded-lg shadow-md p-6 max-h-[75vh] overflow-y-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Patient Claims</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2">No.</th>
                  <th className="py-2">Patient Name</th>
                  <th className="py-2">Claimed Amount</th>
                </tr>
              </thead>
              <tbody>
                {patientClaims.map((claim) => (
                  <tr key={claim.id}>
                    <td className="py-2">{claim.id}</td>
                    <td className="py-2">{claim.name}</td>
                    <td className="py-2">{claim.claimedAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default InsuranceProviderdb;
