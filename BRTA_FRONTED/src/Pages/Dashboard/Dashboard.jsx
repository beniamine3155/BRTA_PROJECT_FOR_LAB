import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { BASE_URL } from '../../api/api';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [licenses, setLicenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const email = user.email;

    useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}licenses/email/${encodeURIComponent(email)}`);
                const data = await response.json();

                // Ensure data is an array before setting state
                if (Array.isArray(data)) {
                    setLicenses(data);
                } else {
                    setLicenses([]); // Set licenses to an empty array if data is not an array
                }

                setLoading(false); // Set loading to false once data is loaded
            } catch (error) {
                console.error('Error fetching data:', error);
                setLicenses([]); // Set licenses to an empty array in case of an error
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div className='h-screen'>
            <div className='flex justify-center'>
                {loading ? (
                    // Show loader while data is being loaded
                    <span className="loading loading-dots loading-lg"></span>
                ) : (
                    // Show data once it's loaded or display a message if there is no data
                    <div>
                        {licenses.length === 0 ? (
                            <p>You didn't apply for any license yet!</p>
                        ) : (
                            <div className="grid lg:grid-cols-3 lg:gap-3 lg:my-5 my-2">
                                {licenses.map((license) => (
                                    <div key={license.id} className="card w-96 bg-base-100 shadow-md">
                                        <div className="card-body">
                                            <h2 className="card-title">{license.name}</h2>
                                            <p>Vehicle No: {license.vehicleNo}</p>
                                            <div className="card-actions justify-end">
                                                <Link to={`/license/${license._id}`}>
                                                    <button className="btn bg-blue-400">View Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
