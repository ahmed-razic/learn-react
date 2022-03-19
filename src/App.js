import SimpleComponent from './components/simpleComponent/SimpleComponent';
import Timer from './components/timerComponent/Timer';
import ToDoList from './components/todoComponent/ToDoList';
import Element from './components/element/Element';
import FormatName from './components/formatName/FormatName';

function App() {
  return (
    <>
      <SimpleComponent name='Ahmed' />
      <Timer />
      <ToDoList />
      <Element />
      <FormatName />
    </>
  );
}

export default App;
