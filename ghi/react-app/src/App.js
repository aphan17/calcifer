import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import RecipeList from './recipes/RecipeList';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/recipes" element={<RecipeList/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
