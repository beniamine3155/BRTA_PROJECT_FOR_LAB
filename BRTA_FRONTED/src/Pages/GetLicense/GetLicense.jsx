// GetLicense.js
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../api/api';

const GetLicense = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        id: '',
        vehicleNo: '',
        chessNo: '',
        photo: null,
        nidCopy: null,
        presentAddress: '',
        permanentAddress: '',
      });
      
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const apiEndpoint = `${BASE_URL}submit-license`;
      
        // Create FormData object to handle file uploads
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if (key === 'photo' || key === 'nidCopy') {
            formDataToSend.append(key, value);
          } else {
            formDataToSend.append(key, value);
          }
        });
      
        try {
          const response = await fetch(apiEndpoint, {
            method: 'POST',
            body: formDataToSend,
          });
      
          if (response.ok) {
            console.log('Form submitted successfully!');
            // Add any additional logic you need on successful form submission
            Swal.fire({
              title: "Submitted Successfully!",
              text: "Your application was successfully submitted",
              icon: "success"
            });
          } else {
            console.error('Form submission failed:', response.statusText);
            // Handle the error as needed
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          // Handle the error as needed
        }
      };

    return (
        <div className="container mx-auto my-8">
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <h2 className='text-2xl font-bold mb-3'>Apply For A License</h2>
                <div className="divider"></div>
                <div className="grid lg:grid-cols-2 lg:gap-4">
                    <div>
                        {/* Name */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>

                        {/* ID */}
                        <div className="mb-4">
                            <label htmlFor="id" className="block text-sm font-medium text-gray-600">
                                ID
                            </label>
                            <input
                                type="text"
                                id="id"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>

                        {/* Vehicle No */}
                        <div className="mb-4">
                            <label htmlFor="vehicleNo" className="block text-sm font-medium text-gray-600">
                                Vehicle No
                            </label>
                            <input
                                type="text"
                                id="vehicleNo"
                                name="vehicleNo"
                                value={formData.vehicleNo}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>

                        {/* Chess No */}
                        <div className="mb-4">
                            <label htmlFor="chessNo" className="block text-sm font-medium text-gray-600">
                                Chess No
                            </label>
                            <input
                                type="text"
                                id="chessNo"
                                name="chessNo"
                                value={formData.chessNo}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        {/* Passport Size Photo */}
                        <div className="mb-4">
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-600">
                                Passport Size Photo
                            </label>
                            <input
                                type="file"
                                id="photo"
                                name="photo"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        {/* NID Soft Copy */}
                        <div className="mb-4">
                            <label htmlFor="nidCopy" className="block text-sm font-medium text-gray-600">
                                NID Soft Copy
                            </label>
                            <input
                                type="file"
                                id="nidCopy"
                                name="nidCopy"  // Update the name attribute to a unique name, for example, "nidCopyFile"
                                accept="application/pdf, image/*"
                                onChange={handleFileChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>


                        {/* Present Address */}
                        <div className="mb-4">
                            <label htmlFor="presentAddress" className="block text-sm font-medium text-gray-600">
                                Present Address
                            </label>
                            <textarea
                                id="presentAddress"
                                name="presentAddress"
                                value={formData.presentAddress}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>

                        {/* Permanent Address */}
                        <div className="mb-4">
                            <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-600">
                                Permanent Address
                            </label>
                            <textarea
                                id="permanentAddress"
                                name="permanentAddress"
                                value={formData.permanentAddress}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>



            </form>
        </div>
    );
};

export default GetLicense;
