import logo from './logo.svg';
import './App.scss';
import NewRelease from './component/NewRelease/NewRelease';
import PreviousEdition from './component/PreviousEdition/PreviousEdition';

function App() {
  return (
    <>
      <NewRelease />
      <PreviousEdition />
    </>
  );
}

export default App;
