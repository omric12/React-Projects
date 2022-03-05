import './addTransaction.css';

import React from 'react';

const AddTransaction = () => {
  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlFor='label'>Label</label>
          <input type='text' placeholder='Enter Label' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            (<b> -</b> / <b>+ </b>) Amount &nbsp;&nbsp; [-expense,+income]
          </label>
          <input type='number' placeholder='Enter Amount' />
        </div>
        <button className='btn'>Add</button>
      </form>
    </>
  );
};

export default AddTransaction;
