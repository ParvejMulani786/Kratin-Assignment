import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Registration from './components/pages/Registration/registration';
import LogIn from './components/pages/LogIn/logIn';
import Layout  from './components/Inc/Layout';
import Profile from './components/pages/Dashboard/profile';
import NewsApi from './components/pages/NewsApi/newsapi';
function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          
          <Route  path="/" element={<Layout></Layout>} >
          <Route  index element={<Home />} />
          <Route  path="/registration" element={<Registration />} />
          <Route  path="/logIn" element={<LogIn />} />
          <Route  path="/Dashboard/profile" element={<Profile/>}/>
          <Route  path="/liveNews" element={<NewsApi/>}/>
          

          
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
