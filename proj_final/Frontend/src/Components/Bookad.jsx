import { useState } from 'react';
import axios from 'axios';
import './Bookad.css'; 
import { useNavigate } from 'react-router-dom';

const ResponsiveForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        boathousename: '',
        location: '',
        phonenumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:8080/add/', formData, {
            headers: {
                Authorization:`Bearer ${token}`,
            },
        })
        .then(response => {
            console.log('Data added successfully:', response.data);
            // Clear form fields after successful submission
            setFormData({
                name: '',
                boathousename: '',
                location: '',
                phonenumber: '',
            });
            navigate('/adminhome');
        })
        .catch(error => {
            console.error('Error adding data:', error);
        });
    };

    return (
        <div className="container7">
            <div className="form-container7">
                <h2>Add Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="boathousename">BoatHouse Name:</label>
                        <input
                            type="text"
                            id="boathousename"
                            name="boathousename"
                            value={formData.boathousename}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phonenumber">Contact Number:</label>
                        <input
                            type="text"
                            id="phonenumber"
                            name="phonenumber"
                            value={formData.phonenumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResponsiveForm;