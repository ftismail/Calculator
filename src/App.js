import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProfider from './context/CalcContext';
const btnValues = [
  ["C","+-",'%','/'],
  [7,8,9,'x'],
  [4,5,6,'-'],
  [1,2,3,'+'],
  [0,'.','=']
]
function App() {
  return (
  <CalcProfider>
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {btnValues.flat().map((btn,indx)=>{
            return <Button value={btn} key={indx} />
          })}
        </ButtonBox>
      </Wrapper>
  </CalcProfider>
    
  );
}

export default App;
