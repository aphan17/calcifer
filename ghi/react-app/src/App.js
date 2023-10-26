import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
