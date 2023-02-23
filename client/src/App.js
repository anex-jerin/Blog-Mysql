import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import Layout from './components/Layout';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/post/:id' element={<Single />} />
            <Route path='/write' element={<Write />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
