import logo from './logo.svg';
import './common.scss';
import Write from './comp/Write'
import List from './comp/List'
import Item from './comp/Item'


function App() {
  return (
    <div className="todolist">
      <h1>TO DO LIST</h1>
      <Write />
      <p>할일 1개 남음</p>
      <List />
    </div>
  );
}

export default App;
