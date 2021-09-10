import './App.css';
import Nav from './Components/Nav';
import Logout from './Components/Logout';
import Routes from './Routes'

const App = () => {
  return (
    <div id='main'>
      <Nav />
      <Logout />
      <Routes />
    </div>
  );
}

export default App;
