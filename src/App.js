
import {Home} from './Component/pages/Home'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Navbar } from './Component/Layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import  AddUser  from './users/AddUser';
import EditUsers  from './Component/Layout/EditUsers';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    
      <Switch>
        <Route exact path="/" component={Home}/>
      
        <Route exact path="/users/add" component={AddUser}/>
        <Route exact path="/users/edit/:id" component={EditUsers}/>
      </Switch>
    
    
      
    </div>
    </Router>
  );
}

export default App;
