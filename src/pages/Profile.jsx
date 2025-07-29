import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ViewCard from '../components/Profile/ViewCard';
import UpdateCard from '../components/Profile/UpdateCard';

const Profile = () => {
  const [isModifying, setIsModifying] = useState(false);

  const handleMode = () => {
    setIsModifying(!isModifying);
  };
  const cancelUpdate = () => {
    setIsModifying(false);
  }

  return (
    <div
      className="d-flex justify-content-center align-items-start py-5"
      style={{
        minHeight: isModifying ? 900 : 700,
        backgroundColor: '#f2f2f2',
      }}
    >
      {!isModifying ? (
        <ViewCard buttonClick={handleMode} />
      ) : (
        <UpdateCard buttonClick={handleMode} cancelUpdate={cancelUpdate} />
      )}
    </div>
  );
};

export default Profile;
