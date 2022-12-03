import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
