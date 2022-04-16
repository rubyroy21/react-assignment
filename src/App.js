// import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar'
import { AllRoutes } from './components/Routes';
import {Tables} from './components/Tables'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Tables/>
      <AllRoutes/>
    </div>
  );
}

export default App;
