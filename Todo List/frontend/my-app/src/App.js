import {Browser, Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import AddTodo from './pages/AddTodo';
import Home from './pages/Home';



function App() {



  return (
    
    <div className="App">
      <BrowserRouter>
            
      <Navbar/>

      <Routes>
            <Route 
                  path='/'
                  element={<Home/>}
                />
              
              <Route 
                  path='/newTodo'
                  element={<AddTodo/>}
                />
        </Routes>



      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
