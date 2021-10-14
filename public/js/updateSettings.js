/* eslint-disable */
import { showAlert } from './alert';

// type is either password or data
export const updateSettings = async (dat, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';

    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(dat),
    });
    const data = await res.json();
    if (data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} Updated Successfully`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
