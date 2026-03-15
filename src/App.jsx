import { useEffect } from "react" ;
import AOS from "aos"
import Home from "./pages/Home";


function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return <Home />;
}

export default App;