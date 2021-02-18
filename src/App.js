import { Navbar } from "./Components/Navbar.js";
import { Home } from "./pages/Home.js";
import { About } from "./pages/About.js";
import { Profile } from "./pages/Profile.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Alert } from "./Components/Alert.js";
import { AlertState } from "./context/alert/alertState.js";
import { GithubState } from "./context/github/githubState.js";

function App() {
  
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className='container pt-4'>
            <Alert alert={{text: 'test alert'}}/>
            <Switch> 
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/profile/:name" component={Profile}/>
            </Switch>        
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
