import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

export const UserView = () => {
  const dispatch = useDispatch();
  const user = useSelector((state => state.user));

  useEffect(() => {
    dispatch(fetchUsers());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users ? (
        <ul>
          {user.users.results.map(user => (
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
