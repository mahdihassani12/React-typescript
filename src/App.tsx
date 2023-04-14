import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList'
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
      <Greet name="Mahdi" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameLists} />
    </div>
  );
}

export default App;
