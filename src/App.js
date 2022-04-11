
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
    <div className="App">
      {/* nesting the navba component */}
      <Navbar/>
      <div className="content">
        {/* switch route only ensures that one router is used */}
      <Switch>
         {/* //routte for homepage */}

         <Route exact path = "/">
           {/* nest the component */}
           <Home/>
           </Route>

           {/* create component */}
           <Route path = "/create">
           {/* nest the component */}
           <Create/>
           </Route>
           <Route path = "/blogs/:id">
             <BlogDetails/>
           </Route>
           {/* //catching any other route */}
           <Route path = "*">
             <NotFound/>
           </Route>
        </Switch>

        {/* /* <p>Liked { likes } times</p>
        <p>{780}</p>
        <p>{true ? 'True' : 'False'}</p>
        <p>{ Math.random() *12 }</p>
        <p>{" hello ninjas"}</p> */ }
        </div>
    </div>
    </Router>
  );
}

export default App;
