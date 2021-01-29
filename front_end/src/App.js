
import './App.css'
import Frontpage from './components/Frontpage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Addmechanic from './components/add_mechanic/layout_form.js'

function App() {
  return (
   <Router>
  <Switch>
   
   <Route path='/addmechanic' component={Addmechanic} />
   <Route path='/' exact  component={Frontpage}/>
   </Switch>
   </Router>
    );
}

export default App;
