import React from 'react';

function VanCard({ image, name, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-medium">{name}</h2>
      <p className="text-gray-600">{price}/day</p>
    </div>
  );
}

export default VanCard;
