import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import LoginNav from './components/LoginNav';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import View from './pages/View';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();

  const isLoginRegister = location.pathname === '/login';

  return (
    <>
      {isLoginRegister ? <LoginNav /> : <NavigationBar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
