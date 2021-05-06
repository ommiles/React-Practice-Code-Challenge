import React from 'react';

const IncreaseBalance = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add $$ to Your Balance Below:</h1>
        <input name='amount' type='number' placeholder='Enter Amount' />
        <br />
        <button typs='submit'>Submit</button>
        <h3>
          More sushi on the way!{' '}
          <span role='img' aria-label='Right Arrow Emoji'>
            ➡️{' '}
          </span>
        </h3>
      </form>
    </div>
  )
}

export default IncreaseBalance;
