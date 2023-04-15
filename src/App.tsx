import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from "./components/Status";
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Container } from './components/Container';
 
function App() {

  const personName = {
    name:"Mahdi",
    lastName: "Hassani"
  }

  const nameLists = [
    {
      first: "Mahdi",
      last: "Hassani"
    },
    {
      first: "Masooma",
      last: "Amini"
    }
  ];

  return (
    <div className="App">
        <Button handleClick={() => console.log("Clicking")} />
        <Container styles={{ border: '1px solid red', padding: '1rem' }} />
    </div>
  );
}

export default App;
