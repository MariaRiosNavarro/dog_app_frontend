import { useState } from "react";
import Landingpage from "./pages/Landingpage";
import FavoritesDog from "./pages/FavoritesDog";
import AddDog from "./pages/AddDog";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/favorites" element={<FavoritesDog />} />
          <Route path="/add" element={<AddDog />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// <BrowserRouter>
// <div className="bg-bgColor_darkgreen min-w-[100vw]">
//   <Header movies={movies} loading={loading} />
//   <Routes>
//     <Route
//       path="/"
//       element={<Home movies={movies} loading={loading} />}
//     />
//     <Route path="/movie/:id" element={<Details />} />
//     <Route path="/add" element={<Add />} />
//     <Route path="/favorites" element={<Favorites />} />
//   </Routes>
//   <Footer />
// </div>
// </BrowserRouter>
