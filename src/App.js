import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <SignUp />
      </Route>
      </Switch>
  );
}

export default App;
