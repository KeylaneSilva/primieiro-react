import Item from './components/item/index';
import Card from './components/card/index';


function App(props) {
  return (
    <div>
      <h1>Primeiro projeto com Components</h1>
        <Item p={'item 1'}/>
        <Item p={'item 2'}/>
        <Item p={'item 3'}/>
      <Card/>
    </div>
  );
}

export default App;


