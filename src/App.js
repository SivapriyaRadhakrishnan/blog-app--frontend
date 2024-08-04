import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SigIn from './components/SigIn';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SigIn/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/createPost' element={<CreatePost/>}/>
      <Route path='/view' element={<Viewall/>} />
      <Route path='/viewmy' element={<ViewMy/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
