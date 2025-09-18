import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import { SubscriptIcon, Upload } from "lucide-react";
import MyFiles from "./pages/MyFiles";
import Subscription from "./pages/Subscription";
import Transactions from "./pages/Transactions";
import { RedirectToSignIn, SignedIn,SignedOut} from "@clerk/clerk-react";

const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/Dashboard" element={
        <>
        <SignedIn><Dashboard/></SignedIn>
        <SignedOut><RedirectToSignIn/></SignedOut>
        </>
      } />
      <Route path="/Upload" element={
        <>
        <SignedIn><Upload/></SignedIn>
        <SignedOut><RedirectToSignIn/></SignedOut>
        </>
      } />
      <Route path="/MyFiles" element={
        <>
        <SignedIn><MyFiles/></SignedIn>
        <SignedOut><RedirectToSignIn/></SignedOut>
        </>
      } />
      <Route path="/Subscription" element={
        <>
        <SignedIn><Subscription/></SignedIn>
        <SignedOut><RedirectToSignIn/></SignedOut>
        </>
      } />
      <Route path="/Transactions" element={
        <>
        <SignedIn><Transactions/></SignedIn>
        <SignedOut><RedirectToSignIn/></SignedOut>
        </>
      } />
      <Route path="/*" element={<RedirectToSignIn/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;