import SimpleComponent from './components/simpleComponent/SimpleComponent';
import Timer from './components/timerComponent/Timer';
import ToDoList from './components/todoComponent/ToDoList';
import Element from './components/element/Element';
import FormatName from './components/formatName/FormatName';
import Attributes from './components/attributes/Attributes';
import TimeElement from './components/timeElement/TimeElement';
import Clock from './components/clock/Clock';

function App() {
  return (
    <>
      <SimpleComponent name='Ahmed' />
      <Timer />
      <ToDoList />
      <Element />
      <FormatName />
      <Attributes />
      <TimeElement />
      <Clock />
      <Clock />
      <Clock />
    </>
  );
}

export default App;
