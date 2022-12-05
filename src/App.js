import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Habit from "./pages/Habit";
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
  box-shadow: 0px 0px 63px -14px rgba(0,0,0,0.75);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Habit />
        <Footer />
      </div>
    </>
  );
}

export default App;
