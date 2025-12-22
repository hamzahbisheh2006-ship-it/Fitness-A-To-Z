import { Routes, Route, Navigate } from "react-router-dom";
import Exercises from "./containers/Exercises_page/Exercises";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/exercises" replace />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
