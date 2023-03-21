import 'bulma/css/bulma.css';
import './App.css';
import Course  from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course 
            image={Angular}
            title="Angular"
            description="Lorem"
          />
          </div>
          <div className='column'>
          <Course 
            image={Bootstrap}
            title="Bootstrap5" 
            description="Lorem"
          />
          </div>
          <div className='column'>
          <Course 
            image={KompleWeb}
            title="Komple Web" 
            description="Lorem"
          />
          </div>
          <div className='column'>
          <Course 
            image={Csharp}
            title="Frontend" 
            description="Lorem"
          />
          </div>
        </div>
        </section>
      </div>     
    </div>
  );
}

export default App;
