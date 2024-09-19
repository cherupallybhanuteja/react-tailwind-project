import React from 'react';

function DataDisplay({ formEntries }) {
  return (
    <div className="container mx-auto mt-10 p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Submitted Forms</h2>
      {formEntries.length === 0 ? (
        <p className="text-xl text-gray-500">No form entries yet. Go to the form page and submit data.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formEntries.map((entry, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition">
              <h3 className="text-xl font-bold mb-4">Entry {index + 1}</h3>
              <p><strong>Name:</strong> {entry.name}</p>
              <p><strong>Email:</strong> {entry.email}</p>
              <p><strong>Phone:</strong> {entry.phone}</p>
              <p><strong>Message:</strong> {entry.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DataDisplay;
