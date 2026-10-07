import './App.css';
import Table from './Componets/Table/Table';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
        <Table/>
      </header>
    </div>
  );
}

export default App;

