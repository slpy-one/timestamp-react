import { Router } from "./Router";
import { NavBar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-bg text-text">
      <NavBar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
