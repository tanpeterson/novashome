import './App.css';
import Navbar from './Navbar';
import About from './About';
import Intro from './Intro';
import Links from './Links'
import Footer from './Footer';
import CreatedBy from './CreatedBy';
import Demo from './Demo';
import InstallCode from './InstallCode';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div id='page-container'>
          <div id='content-wrap'>
            <Navbar/>
            <Intro/>
            <About/>
            <InstallCode/>
            <Demo/>
            <Links />
            {/* <hr/> */}
            <CreatedBy/>
          </div>
          <Footer/>
        </div>
      </body>
    </div>
  );
}

export default App;
