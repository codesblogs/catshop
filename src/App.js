import './App.css';
import BottomNav from './components/bottomNav/BottomNav';
import Center from './components/center/Center';
import LeftNav from './components/leftNav/LeftNav';
import RightNav from './components/rightNav/RightNav';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
      <LeftNav />
      
      <Center />
      <RightNav />
      <BottomNav />
      </div>
    </div>
  );
}

export default App;
