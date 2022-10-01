import {ScoreSection} from './components/ScoreSection'
import {RulesButton} from './components/RulesButton'
import {GameSection} from './components/GameSection'
import { ModalRules } from './components/ModalRules';

function App() {
  return (
    <div className="App">
      {/* <ModalRules/> */}
      <ScoreSection/>
      <GameSection/>
      <RulesButton/>
    </div>
  );
}
export default App;
