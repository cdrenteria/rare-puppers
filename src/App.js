import NavBar  from './components/NavBar';
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './components/data'
import './App.css';

function App() {
  console.log(Data)
  const cards = Data.map(property => {
    return(
      <Card 
        img={property.img}
        milesAway ={property.milesAway}
        country={property.country}
        disability={property.disability}
        cost={property.cost}
      /> 
    )
  })
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="cards-list">
        {cards}
      </div>
    </div>
  );
}

export default App;
