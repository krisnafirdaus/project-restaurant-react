import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ContentOne from "./components/ContentOne";
import Menu from "./components/Menu";
import Portofolio from "./components/Portofolio";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <Container>
      <Navbar />
      <Header />
      <ContentOne />
      <Menu />
      <Portofolio />
    </Container>
  );
}

export default App;
