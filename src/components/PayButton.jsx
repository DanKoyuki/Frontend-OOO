import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { url } from '../features/api';

const PayButton = ({cartItem}) => {

  const user = useSelector((state) => state.auth);

  const handleCheckOut = () => {
    console.log(cartItem);
    axios.post(`${url}/stripe/create-checkout-session`, {
      cartItem,
      userID: user._id,
    }).then((res) => {
      if (res.data.url){
        window.location.href = res.data.url;
      }
    }).catch((err) => console.log(err.message)
    );
  }

  return (
    <>
    <button onClick={() => handleCheckOut()}>Check Out</button>
    </>
  );
};

export default PayButton;

