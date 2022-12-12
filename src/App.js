import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Habit from "./pages/Habit";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Daily from "./pages/Daily";

const GlobalStyle = createGlobalStyle`
  body {
  background-color: #eaeaea;
  }
  .App {
  color: #fff;
  background-color: #1b262c;
  width: 428px;
  height: 738px;
  border-radius: 10px;
  box-shadow: 0px 0px 63px -14px rgba(0,0,0,0.75);
  position: absolute;
  top: 5vh;
  left: calc(50vw - 200px);
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Habit />} />
          <Route exact path="/daily" element={<Daily />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
