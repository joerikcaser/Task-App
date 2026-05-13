import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { useTasks } from './hooks/useTasks';

function App() {
  const { tasks, addTask, toggleTask, removeTask, clearDone } = useTasks();
  const remaining = tasks.filter((t) => !t.done).length;
  const completed = tasks.length - remaining;

  return (
    <main className="container">
      <header>
        <h1>Task App</h1>
        <p className="subtitle">
          {remaining} pendientes · {completed} completadas
        </p>
      </header>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
      {completed > 0 && (
        <footer>
          <button className="btn-clear" onClick={clearDone}>Limpiar completadas</button>
        </footer>
      )}
    </main>
  );
}

export default App;