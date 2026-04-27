// import "./App.css"

// import { Header } from "./components/Header"
// import { Set } from "./components/Set"

// function App(){
//   return (
//     <div className="App">
//       <Header />
//       <Set />
//     </div>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageViewSet } from "./components/pages/PageViewSet";
import { PageCreateSet } from "./components/pages/PageCreateSet";

import { PageSelectSet } from "./components/pages/PageSelectSet";

import './App.css';

import { FormCreateSet } from "./components/FormCreateSet";
import { FormCreateCard } from "./components/FormCreateCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet />} />
        <Route path="/set/:id" element={<PageViewSet />} />
        <Route path="/admin" element={<PageCreateSet />}>
          <Route path="createset" element={<FormCreateSet/>} />
          <Route path="createcard" element={<FormCreateCard/>} />
        </Route>
        <Route path="*" element={<PageSelectSet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;