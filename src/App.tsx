import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from "./components/Status";
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
 
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
        <Oscar>
          <Heading>Placeholder text</Heading>
        </Oscar>
    </div>
  );
}

export default App;
