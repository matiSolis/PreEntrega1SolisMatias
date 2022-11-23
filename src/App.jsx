
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Encuentra todo en un solo lugar.'/>
      <div class="m-20 flex flex-row justify-around">
        <Cards item='Equipo 1'/>
        <Cards item='Equipo 2'/>
        <Cards item='Equipo 3'/>
        <Cards item='Equipo 4'/>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
