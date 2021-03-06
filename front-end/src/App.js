import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import New from "./Pages/New";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="/snacks/new" element={<New />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
