import './App.css'
import './index.css'
import Page from './components/Page'
import GameApp from "./game/GameApp";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
    <Routes>
      <Route path="/" element={<Page/>} />
       <Route path="/game" element={<GameApp/>} /> 

      {/* <Route path="/home" element={<AppHome/>} /> */}
    </Routes>
</Router>
    </>
  )
}

export default App
