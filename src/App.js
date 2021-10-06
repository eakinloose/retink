import Navbar from "./components/Navbar/Navbar";
import Services from "./pages/Services";
import { Route } from "react-router-dom";
import Globalstyles from "./Globalstyles";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
   return (
      <div>
         <Globalstyles />
         <Navbar />
         <Route exact path="/" component={Home} />
         <Route exact path="/sercices" component={Services} />
         <Route exact path="/login" component={Login} />
      </div>
   );
}

export default App;
