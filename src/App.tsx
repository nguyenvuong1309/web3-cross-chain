import BlockchainExplorer from './pages/getAllBlock'
import AllAddress from './pages/getAllAddress'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="transactions" element={<BlockchainExplorer providerUrl={"http://localhost:8500/1"}/>} />
        <Route path="addresses" element={<AllAddress/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
