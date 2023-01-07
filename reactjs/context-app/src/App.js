import './App.css';
import Parentcomp from './components/Parentcomp';
import { Userprovider } from './components/User';

function App() {
  return (
    <Userprovider value="Srinivas">
      <Parentcomp/>
     </Userprovider>
    
  );
}

export default App;
