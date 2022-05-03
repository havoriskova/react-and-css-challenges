import React, {useState} from 'react';
import './App.css';
import Grid from "./Grid";
import ActualLoader from "./ActualLoader";

function App() {

  let [isLoading, setLoading] = useState(true);

  setTimeout(() => {setLoading(false)}, 3000); 
 // useEffect ?? 
// lehce snížit opacity před úplným zmizením? Renderovat <App/> a <ActualLoader /> současně,
// a pak jen prohodit opacity ??

function randomPastelColor() {
     //  funkce na random barvu, co bude různě v elementech, 
    // a to přes CSS custom property  --root-random-color
      let h = Math.floor(Math.random() * 360);
      let s = Math.floor(Math.random() * 20) + 50;
      let l = Math.floor(Math.random() * 15) + 70;

       let color = `hsl(${h}, ${s}%, ${l}%)`;

        document.querySelector(":root").style.setProperty("--root-random-color", color);
      }

      // randomPastelColor(); // initial call, but it is rendering 2x


if (!isLoading) {
  return (
    <div className="App">
      <header className="App-header" onClick={randomPastelColor}>
    <h1>Galery of my CSS &#38; React challenges</h1> 
      </header>

      <main className="App-main">
     <Grid />
      </main>
      <footer className="App-footer">
        <p>2022 | Coded by <a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US">Hana Voříšková</a></p>
        <p>You can check the code on <a href="https://github.com/havoriskova/react-and-css-challenges">Github</a></p>
      </footer>
    </div>
  );
} else {
  return <ActualLoader />
}
}

export default App;
