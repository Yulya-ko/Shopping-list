import imageOne from './assets/imageOne.jpg';
import imageTwo from './assets/imageTwo.jpg';
import './App.css';
import { Buy } from './components/Buy';

function App() {
  return (
    <>
    <div className='app'>
      <div className='container'>
        <img className='image' src={imageOne} width='160px' alt='Shop'/>
      </div>
      <div className='container'>
        <h1>Let's to buy something!</h1>
      </div>
      <Buy />
      <div className='container'>
        <img className='image' src={imageTwo} width='160px' alt='Shopping'/>
      </div>
    </div>
    </>
  )
}

export default App
