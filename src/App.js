import './App.css';
import Grid from "./Grid";

function App() {

function randomColor() {
        {/*funkce na random barvu, co bude různě v elementech, 
        a to přes CSS custom property  --root-random-color,
        jen bacha na to, že to bude vždy tmavší barva */}
        
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let color = `rgb(${r}, ${g}, ${b})`;

        document.querySelector(":root").style.setProperty("--root-random-color", color);
      }

      randomColor(); // initial call

  return (
    <div className="App">
      <header className="App-header" onClick={randomColor}>
    <h1>Galery of my CSS &#38; React challenges</h1> 
      </header>

      <main className="App-main">
     <Grid />
      </main>
      <footer className="App-footer">
        <p>2022 | Coded by <a href="/">Hana Voříšková</a></p>
        <p>You can check the code on <a href="/">Github</a></p>
      </footer>
    </div>
  );
}

export default App;
