import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from './redux/messagesSlice';

export default function Greeting() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);

  return (
    <div>
      <p>{greeting}</p>
    </div>
  );
}
