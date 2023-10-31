import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import RecipeList from './recipes/RecipeList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/" element={<RecipeList/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
