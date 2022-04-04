/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSocket from '../../hooks/useSocket';
import './Create.css';

function Create() {
  const navigate = useNavigate();
  const [socket] = useSocket();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (socket) {
      socket.on('connect', handleNavigation);
    }
  }, [socket]);

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleCreate = () => {
    socket.auth = { userName };
    socket.connect();
  };

  const handleNavigation = () => {
    navigate(`/game/${socket.id}`);
  };

  return (
    <form className="create-form">
      <div>
        <label className="m-10" htmlFor="userName">
          Name
        </label>
        <input
          className="m-10 input-field"
          id="userName"
          type="text"
          onChange={handleChange}
          value={userName}
        />
      </div>
      <button
        disabled={userName.length < 1}
        className="m-10 create-button"
        onClick={handleCreate}
        type="button"
      >
        Create
      </button>
    </form>
  );
}

export default Create;
