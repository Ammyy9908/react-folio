import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Work from './pages/Work';
import BlogDetail from './pages/BlogDetail';
import Blog from './pages/Blog';
import WorkDetail from './pages/WorkDetail';

function App() {
  return  (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Home/>
    </Route>

    <Route exact path="/work">
    <Work/>
    </Route>

    <Route exact path="/blog">
    <Blog/>
    </Route>
  

        <Route
        exact
            path="/blog/:bid"
            render={(props) => {
              const bid = props.match.params.bid;
              return <BlogDetail id={bid && bid} />;
            }}
            
          />
          <Route
           exact
            path="/work/:wid"
            render={(props) => {
              const wid = props.match.params.wid;
              return <WorkDetail wid={wid && wid} />;
            }}
           
          />
          

   
   
  </Switch>
</div>
</Router>
  );
}

export default App;
