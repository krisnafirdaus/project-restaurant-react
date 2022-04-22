import Navbar from "./components/Navbar";
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
    </Container>
  );
}

export default App;
