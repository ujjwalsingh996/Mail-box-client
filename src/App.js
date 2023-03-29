import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import MailBox from "./components/MailBox";
import SignUp from "./components/SignUp";


function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <SignUp />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/mailbox">
        <MailBox/>
      </Route>
      </Switch>
  );
}

export default App;
