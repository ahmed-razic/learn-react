import SimpleComponent from './components/simpleComponent/SimpleComponent';
import Timer from './components/timerComponent/Timer';
import ToDoList from './components/todoComponent/ToDoList';
import Element from './components/element/Element';
import FormatName from './components/formatName/FormatName';
import Attributes from './components/attributes/Attributes';

function App() {
  return (
    <>
      <SimpleComponent name='Ahmed' />
      <Timer />
      <ToDoList />
      <Element />
      <FormatName />
      <Attributes />
    </>
  );
}

export default App;
