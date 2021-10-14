/* eslint-disable */
//import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    const res = await fetch('api/v1/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        //'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
      //mode: 'no-cors',
    });
    const data = await res.json();
    if (data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    alert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await fetch('api/v1/users/logout');
    const data = await res.json();
    if (data.status === 'success') {
      location.reload(true);
    }
  } catch (err) {
    showAlert('error', 'Error loggin out! Try it again');
  }
};
