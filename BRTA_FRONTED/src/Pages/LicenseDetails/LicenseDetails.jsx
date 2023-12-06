import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/api';

const LicenseDetails = () => {
    const { id } = useParams();
    const [license, setLicense] = useState({});

    useEffect(() => {
        fetch(`${BASE_URL}licenses/${id}`)
            .then((response) => response.json())
            .then((data) => setLicense(data))
            .catch((error) => console.log(error));
    }, [id]);
    return (
        <div className="max-w-2xl mx-auto lg:my-10 my-2 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4">License Details</h2>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="lg:col-span-1">
            <p className="text-gray-600">Name:</p>
            <p className="font-semibold">{license.name}</p>
          </div>
          <div className="lg:col-span-1">
            <p className="text-gray-600">Email:</p>
            <p className="font-semibold">{license.email}</p>
          </div>
          <div className="lg:col-span-1">
            <p className="text-gray-600">ID:</p>
            <p className="font-semibold">{license.id}</p>
          </div>
          <div className="lg:col-span-1">
            <p className="text-gray-600">Vehicle No:</p>
            <p className="font-semibold">{license.vehicleNo} (Chess No: {license.chessNo})</p>
          </div>
          <div className="lg:col-span-1">
            <p className="text-gray-600">Passport Size Photo:</p>
            <img src={`data:image/png;base64,${license.photo}`} className="w-28 h-auto rounded" />
          </div>
          <div className="lg:col-span-1">
            <p className="text-gray-600">NID Soft Copy:</p>
            <img src={`data:image/png;base64,${license.nidCopy}`} alt="nid-soft-copy" className="w-28 h-auto rounded" />
          </div>
          <div className="lg:col-span-1">
            <p className="text-gray-600">Present Address:</p>
            <p className="font-semibold">{license.presentAddress}</p>
          </div>
          <div className="lg:col-span-1">
            <p className="text-gray-600">Permanent Address:</p>
            <p className="font-semibold">{license.permanentAddress}</p>
          </div>
        </div>
      </div>
      
      
    );
};

export default LicenseDetails;