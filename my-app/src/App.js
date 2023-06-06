import './App.css';
import Add from './components/Add';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Search from './components/Search';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header title="Todo List ! " />
      <Add/>
      <Search />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
