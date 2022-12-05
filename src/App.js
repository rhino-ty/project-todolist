import "./App.css";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
  margin: auto;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
