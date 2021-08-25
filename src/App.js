import './App.css';
import { Link, Route } from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';

function App() {

  return (
    <div className="App">
      <nav>
        <Link to='/page1/10'>Page1</Link>
        <Link to='/page2'>Page2</Link>
      </nav>
      <Route path='/page1/:data' exact={true} component={Page1} />
      <Route path='/page2' exact={true} component={Page2} />
    </div>
  );
}

export default App;
