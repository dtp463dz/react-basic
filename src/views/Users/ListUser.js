import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListUser.scss';
import { useNavigate } from 'react-router-dom';
// class ListUser extends React.Component {
//     state = {
//         listUsers: []
//     }

//     navigate = useNavigate();


//     // componentDidMount() {
//     //     axios.get('https://reqres.in/api/users?page=1')
//     //         .then(res => {
//     //             console.log('>> check res', res.data.data)
//     //         })
//     // }

//     async componentDidMount() {
//         let res = await axios.get('https://reqres.in/api/users?page=1');
//         this.setState({
//             listUsers: res && res.data && res.data.data ? res.data.data : []
//         })
//     }
//     handleViewDetailUser = (user) => {
//         navigate(`/user/${user.id}`);
//     };

//     render() {
//         let { listUsers } = this.state;
//         return (
//             <div className="list-user-container">
//                 <div className="title">
//                     Fetch all list user
//                 </div>
//                 <div className="list-user-content">
//                     {listUsers && listUsers.length > 0 &&
//                         listUsers.map((item, index) => {
//                             return (
//                                 <div className="child" key={item.id}
//                                     onClick={() => this.handleViewDetailUser(item)}
//                                 >
//                                     {index + 1} - {item.first_name} {item.last_name}
//                                 </div>
//                             )
//                         })
//                     }

//                 </div>
//             </div>
//         )
//     }
// }

// export default ListUser;

const ListUser = () => {
    const [listUsers, setListUsers] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fetch data khi component mount
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://reqres.in/api/users?page=1');
                setListUsers(res.data.data || []);
            } catch (err) {
                setError("Failed to fetch users. Please try again later.");
            }
        };

        fetchUsers();
    }, []);

    // Chuyển hướng đến trang chi tiết người dùng
    const handleViewDetailUser = (user) => {
        navigate(`/user/${user.id}`);
    };

    return (
        <div className="list-user-container">
            <div className="title">
                Fetch All Users
            </div>
            <div className="list-user-content">
                {error ? (
                    <div className="error">{error}</div>
                ) : (
                    listUsers.length > 0 ? (
                        listUsers.map((item, index) => (
                            <div
                                className="child"
                                key={item.id}
                                onClick={() => handleViewDetailUser(item)}
                            >
                                {index + 1} - {item.first_name} {item.last_name}
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )
                )}
            </div>
        </div>
    );
};

export default ListUser;


