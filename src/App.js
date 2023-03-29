
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Authentication from './components/Authentication';
import Inbox from './components/Inbox';
import InboxMessage from './components/InboxMessage';
import SentBox from './components/SentBox';
import SentboxMessage from './components/SentboxMessage';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const isAuthentic=useSelector((state)=>state.authReducer.isAuthenticate)

  return (
    <div className="App">
    <Switch>
      <Route path='/' exact>{!isAuthentic ? <Authentication /> : <WelcomeScreen />}</Route>
      <Route path='/Inbox' exact >{!isAuthentic ? <Authentication /> : <Inbox />}</Route>
      <Route path='/SentBox' exact >{!isAuthentic ? <Authentication /> : <SentBox />}</Route>
      <Route path='/Inbox/:Identifier' >{!isAuthentic ? <Authentication /> : <InboxMessage />}</Route>
      <Route path='/Sentbox/:Identifier'>{!isAuthentic ? <Authentication /> : <SentboxMessage />}</Route>
    </Switch>
      
      
    </div>
  );
}

export default App;