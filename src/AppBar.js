import './AppBar.css';
import logo from './CI_nobg.png';
import LogAlert from './LogAlert';
import TabAddBtn from './TabAddBtn';
const AppBar=()=> {
    return (<header className="App-header">
     <img src={logo} alt="logo" className='logo_img' />
  <LogAlert/>
  <TabAddBtn/>    
  </header>);
  }
export default AppBar;  