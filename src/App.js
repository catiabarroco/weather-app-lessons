import "./App.css";
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
       
        <Weather defaultCity="New York"/>
        <footer>
          {" "}
          This project was coded by{" "}
          <a href="https://github.com/catiabarroco" target="_blank" rel="noreferrer">Cátia Barroco</a> and is
          <a
            href="https://github.com/catiabarroco/weather-app-lessons"
            target="_blank" rel="noreferrer"
          >
            {" "}
            open-soureced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
