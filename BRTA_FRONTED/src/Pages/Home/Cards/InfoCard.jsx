import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../api/api';

const InfoCard = () => {
    const [licenses, setLicenses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}licenses`);
                const data = await response.json();
                setLicenses(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <>
            {loading ? (
                <span className="loading loading-dots loading-lg"></span>
            ) : (
                <>
                    {licenses.map((license) => (
                        <div key={license.id} className="card bg-base-100 shadow-md border border-gray-300">
                            <div className="card-body">
                                <h2 className="card-title">{license.name}</h2>
                                <p>Vehicle No: {license.vehicleNo}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/license/${license._id}`}>
                                    <button className="btn btn-sm bg-blue-400">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );
};

export default InfoCard;
