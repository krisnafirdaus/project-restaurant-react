import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Header from "./components/Header";
import ContentOne from "./components/ContentOne";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <Container>
      <Navbar />
      <Header />
      <ContentOne />
      {/* <Menu /> */}
    </Container>
  );
}

export default App;
