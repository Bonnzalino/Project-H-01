import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from 'react-bootstrap/Button';
import SignInSide from './MuiSigninSide'
import SignIn from './MUISignin';
import BootstrapDashboard from './BootstrapDashboard';
function App() {
  
  return (
    <div className="App">
      <div>
        
        <SignIn />
        {/* <SignInSide /> */}
        {/* <BootstrapDashboard /> */}

      </div>
    </div>
  )
}

export default App
