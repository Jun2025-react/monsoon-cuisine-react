import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ViewCard from '../components/Profile/ViewCard';
import UpdateCard from '../components/Profile/UpdateCard';

const Profile = () => {
  const { user } = useAuth();
  const [ isModifying, setIsModifying ] = useState(false);
  
  const handleMode = () => {
    setIsModifying(!isModifying);
  }
  console.log("Profile user:", user);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: isModifying ? 900 : 700, backgroundColor: '#f2f2f2' }}>
     {!isModifying? <ViewCard buttonClick={handleMode} /> : <UpdateCard buttonClick={handleMode}/>} 
    </div>
  );
}

export default Profile;