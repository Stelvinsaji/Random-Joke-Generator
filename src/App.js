import { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = e => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value)
    setLastName(lastNameRef.current.value)
  }

  return (
    <div className="app">
      <center>
        <h1>Random Joke Generator</h1>
        <h2>{joke}</h2>
        <form>
          <input placeholder="Your First Name" ref={firstNameRef} />
          <input placeholder="Your Last Name" ref={lastNameRef} />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;
