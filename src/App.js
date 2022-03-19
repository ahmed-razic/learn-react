import SimpleComponent from './components/simpleComponent/SimpleComponent';
import Timer from './components/timerComponent/Timer';
import ToDoList from './components/todoComponent/ToDoList';

function App() {
  return (
    <>
      <SimpleComponent name='Ahmed' />
      <Timer />
      <ToDoList />
    </>
  );
}

export default App;
