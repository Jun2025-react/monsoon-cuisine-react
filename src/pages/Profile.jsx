import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import ViewCard from '../components/Profile/ViewCard';
import UpdateCard from '../components/Profile/UpdateCard';
import CONFIG from '../config';

const STRIPE_KEY = CONFIG.STRIPE_KEY;
const stripePromise = loadStripe(STRIPE_KEY);

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
        <Elements stripe={stripePromise}>
          <ViewCard buttonClick={handleMode} />
        </Elements>
      ) : (
        <UpdateCard buttonClick={handleMode} cancelUpdate={cancelUpdate} />
      )}
    </div>
  );
};

export default Profile;
