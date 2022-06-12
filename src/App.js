import Container from "./components/Container/Container";
import CircleLoader from "./components/CircleLoader/CircleLoader";
import Hovers from "./components/Hovers/Hovers";
import CutCornerButton from './components/CutCornerButton/CutCornerButton'


function App() {
  return (
    <div className="App">
      <h1 className="title">Animations</h1>
      <div className="grid-container">
      <Container><CircleLoader/></Container>
      <Container><Hovers/></Container>
      <Container><CutCornerButton/></Container>
      </div>
    </div>
  );
}

export default App;
