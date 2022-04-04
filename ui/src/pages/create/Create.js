/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import './Create.css';

function Create() {
  const [roomName, setRoomName] = useState('');

  const handleChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleCreate = () => {
    console.log('clicked', roomName);
  };
  return (
    <form className="create-form">
      <div>
        <label className="m-10" htmlFor="roomName">
          Room name
        </label>
        <input
          className="m-10 input-field"
          id="roomName"
          type="text"
          onChange={handleChange}
          value={roomName}
        />
      </div>
      <button className="m-10 create-button" onClick={handleCreate} type="button">
        Create
      </button>
    </form>
  );
}

export default Create;
