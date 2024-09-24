import React from 'react';

function UserCard({ user }) {
    return (
        <div className="card">
            <img src={user.imageUrl} alt={user.name} />
            <h3>{user.name}</h3>
            <h5>{user.email}</h5>
        </div>
    );
}

export default UserCard;
