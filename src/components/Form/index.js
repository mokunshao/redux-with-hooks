import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updateTel } from './aciton';

export const Form = () => {
  const state = useSelector(state => state);
  const { form } = state;
  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={form.name}
        onChange={e => dispatch(updateName(e.target.value))}
      />
      <input
        value={form.tel}
        onChange={e => dispatch(updateTel(e.target.value))}
      />
    </div>
  );
};

export default Form;
