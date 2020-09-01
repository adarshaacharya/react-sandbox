import React, { useState, useRef, useEffect } from 'react';
import socket from '../socketConfig';

const Form = ({ isOpen, isOver, gameID }) => {
  const [userInput, setuserInput] = useState('');
  const textInput = useRef();

  useEffect(() => {
    if (!isOpen) {
      textInput.current.focus();
    }
  }, [isOpen]);

  const resetForm = () => setuserInput('');

  const handleChange = (e) => {
    let val = e.target.value;
    let lastChar = val.charAt(val.length - 1);
    if (lastChar === ' ') {
      socket.emit('user-input', { userInput, gameID });
      resetForm();
    } else {
      setuserInput(e.target.value);
    }
  };

  return (
    <>
      <div className="row my-3">
        <div className="col-sm"></div>
        <div className="col-sm-4">
          <form>
            <div className="form-group">
              <input
                type="text"
                readOnly={isOpen || isOver}
                onChange={handleChange}
                value={userInput}
                className="form-control"
                ref={textInput}
              />
            </div>
          </form>
        </div>
        <div className="col-sm"></div>
      </div>
    </>
  );
};

export default Form;
