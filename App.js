import './App.css';
import Header from './components/Header';
import { Modal,Button } from 'react-bootstrap'
import Galleries from './components/Galleries';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Venue from './components/Venue';
import Services from './components/Services';
import Menu from './components/Menu';
import News from './components/News';
import Contact from './components/Contact';
import About from './components/About';
import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

function App() {
  return (
   <div className="App">
  
  <Router>
   <main>
    <section>
    <Header />
        <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path="/about" exact component={About}/> */}
      
        <Route path="/galleries" exact component={Galleries}/>
     
        <Route path="/venue" exact component={Venue}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/menu" exact component={Menu}/>
        <Route path="/news" exact component={News}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/about" exact component={About}/>
        <Route exact path='/' component={CreateStudent} />
        <Route path="/create-student" component={CreateStudent} />
        <Route path="/edit-student/:id" component={EditStudent} />
                <Route path="/student-list" component={StudentList} />
</Switch>
        
    </section>
    </main>
    </Router>
  <Footer /> 
</div>
  );
}

export default App;
