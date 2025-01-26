import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ListUser.scss'

const DetailUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`https://reqres.in/api/users/${id}`);
                setUser(res.data.data);
            } catch (err) {
                setError("Could not fetch user data. Please try again later.");
            }
        };

        if (id) fetchUser();
    }, [id]);

    const handleBackButton = () => {
        navigate('/user');
    };

    return (
        <div className="detail-user">
            <h1>User Detail</h1>
            {error ? (
                <div className="error">{error}</div>
            ) : user ? (
                <div>
                    <p>User's name: {user.first_name} {user.last_name}</p>
                    <p>User's email: {user.email}</p>
                    <img src={user.avatar} alt="User Avatar" />
                    <div>
                        <button type="button" onClick={handleBackButton}>Back</button>
                    </div>
                </div>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
};

export default DetailUser;
