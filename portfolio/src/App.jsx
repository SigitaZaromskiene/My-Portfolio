
import './UI/App.scss';
import { GlobalProvider } from './components/Global';
import Home from './components/Home';

function App() {
  return (
    <GlobalProvider>
    <div className="app_container">
      <Home/>
    </div>
    </GlobalProvider>
  );
}

export default App;
