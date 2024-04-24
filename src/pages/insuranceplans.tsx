import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/NavBari';

const InsurancePlans: React.FC = () => {
  // Sample insurance plans data (replace with actual data)
  const [plans, setPlans] = useState([
    {
      id: 1,
      planName: 'Standard Plan',
      planDescription: 'Basic health coverage',
      cost: '$50/month',
      includesDental: false,
      includesVision: false,
      includesMedical: true,
    },
    {
      id: 2,
      planName: 'Medium Plan',
      planDescription: 'Medium health coverage',
      cost: '$75/month',
      includesDental: false,
      includesVision: true,
      includesMedical: true,
    },
    {
      id: 3,
      planName: 'Premium Plan',
      planDescription: 'Comprehensive health coverage',
      cost: '$100/month',
      includesDental: true,
      includesVision: true,
      includesMedical: true,
    },
  ]);

  // State to track modal visibility
  const [showModal, setShowModal] = useState(false);

  // State to track form data for creating a new plan
  const [newPlanData, setNewPlanData] = useState({
    planName: '',
    planDescription: '',
    cost: '',
    includesDental: false,
    includesVision: false,
    includesMedical: false,
  });

  // Function to handle changes in new plan form data
  const handleNewPlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNewPlanData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Function to handle creating a new plan
  const handleCreatePlan = () => {
    // Perform create plan action (e.g., make API call to add new plan)
    console.log('Creating new plan:', newPlanData);
    // For demo purposes, we'll just add the new plan to the list and close the modal
    const newPlan = { ...newPlanData, id: plans.length + 1 };
    setPlans(prevPlans => [...prevPlans, newPlan]);
    setShowModal(false);
    // Reset form data
    setNewPlanData({
      planName: '',
      planDescription: '',
      cost: '',
      includesDental: false,
      includesVision: false,
      includesMedical: false,
    });
  };

  return (
    <main>
      <Header />
      
      {/* Insurance Plans section */}
      <section className="py-8" style={{ background: "#d5c6e0" }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-4xl font-bold">Insurance Plans</h2>
            <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Create New Plan
            </button>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 mt-5 max-h-[65vh] overflow-y-auto">
        {/* Modal for creating a new plan */}
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Create New Insurance Plan</h3>
                      <div className="mt-2">
                        <div className="mb-4">
                          <label htmlFor="planName" className="block text-sm font-medium text-gray-700">Plan Name</label>
                          <input
                            type="text"
                            name="planName"
                            id="planName"
                            value={newPlanData.planName}
                            onChange={handleNewPlanChange}
                            className="mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 block w-full shadow-sm sm:text-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="planDescription" className="block text-sm font-medium text-gray-700">Plan Description</label>
                          <textarea
                            name="planDescription"
                            id="planDescription"
                            value={newPlanData.planDescription}
                            onChange={handleNewPlanChange}
                            rows={3}
                            className="mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 block w-full shadow-sm sm:text-sm"
                          ></textarea>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="cost" className="block text-sm font-medium text-gray-700">Cost</label>
                          <input
                            type="text"
                            name="cost"
                            id="cost"
                            value={newPlanData.cost}
                            onChange={handleNewPlanChange}
                            className="mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 block w-full shadow-sm sm:text-sm"
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
                          <div className="flex items-center">
                            <input
                              id="includesDental"
                              name="includesDental"
                              type="checkbox"
                              checked={newPlanData.includesDental}
                              onChange={handleNewPlanChange}
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <label htmlFor="includesDental" className="ml-2 block text-sm font-medium text-gray-700">Includes Dental</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="includesVision"
                              name="includesVision"
                              type="checkbox"
                              checked={newPlanData.includesVision}
                              onChange={handleNewPlanChange}
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <label htmlFor="includesVision" className="ml-2 block text-sm font-medium text-gray-700">Includes Vision</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="includesMedical"
                              name="includesMedical"
                              type="checkbox"
                              checked={newPlanData.includesMedical}
                              onChange={handleNewPlanChange}
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <label htmlFor="includesMedical" className="ml-2 block text-sm font-medium text-gray-700">Includes Medical</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button onClick={handleCreatePlan} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Create
                  </button>
                  <button onClick={() => setShowModal(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Display list of insurance plans */}
        {plans.map(plan => (
          <div key={plan.id} className="bg-white rounded-lg shadow-md p-8 mt-4">
            <h3 className="text-2xl font-semibold mb-4">{plan.planName}</h3>
            <p className="text-lg font-semibold mb-2">Description:</p>
            <p className="mb-4">{plan.planDescription}</p>
            <p className="text-lg font-semibold mb-2">Cost:</p>
            <p className="mb-4">{plan.cost}</p>
            <div className="grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-3">
              <div className="flex items-center">
                <input
                  id={`includesDental-${plan.id}`}
                  name={`includesDental-${plan.id}`}
                  type="checkbox"
                  checked={plan.includesDental}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  disabled
                />
                <label htmlFor={`includesDental-${plan.id}`} className="ml-2 block text-sm font-medium text-gray-700">Includes Dental</label>
              </div>
              <div className="flex items-center">
                <input
                  id={`includesVision-${plan.id}`}
                  name={`includesVision-${plan.id}`}
                  type="checkbox"
                  checked={plan.includesVision}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  disabled
                />
                <label htmlFor={`includesVision-${plan.id}`} className="ml-2 block text-sm font-medium text-gray-700">Includes Vision</label>
              </div>
              <div className="flex items-center">
                <input
                  id={`includesMedical-${plan.id}`}
                  name={`includesMedical-${plan.id}`}
                  type="checkbox"
                  checked={plan.includesMedical}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  disabled
                />
                <label htmlFor={`includesMedical-${plan.id}`} className="ml-2 block text-sm font-medium text-gray-700">Includes Medical</label>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}

export default InsurancePlans;
