import react, { useState } from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import './css/index.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const style = {
    backgroundColor: darkMode ? '#28292e' : "",
    minHeight: "100vh"
  }

  return (
    <div style={style}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main darkMode={darkMode} />
    </div >
  );
}

export default App;
