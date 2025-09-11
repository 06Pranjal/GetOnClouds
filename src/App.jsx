import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import { SubscriptIcon, Upload } from "lucide-react";
import MyFiles from "./pages/MyFiles";
import Subscription from "./pages/Subscription";
import Transactions from "./pages/Transactions";

const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Upload" element={<Upload/>} />
      <Route path="/MyFiles" element={<MyFiles/>} />
      <Route path="/Subscription" element={<Subscription/>} />
      <Route path="/Transactions" element={<Transactions/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;