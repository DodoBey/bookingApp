import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Main from './components/Main';
import Provider from './context/Context';


function App() {
  return (
    <Provider>
    <div className="App">
      <Main/>
    </div>
    </Provider>
  );
}

export default App;
