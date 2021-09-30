import './App.css';
import {generateUsers} from "./generateUsers";
import {FormEvent} from "react";

function App() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const users = generateUsers(5);

    console.log(users);
  }

  return (
    <div className="main">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="submitButton">
          Generate 10000 users
        </button>
      </form>
    </div>
  );
}

export default App;
