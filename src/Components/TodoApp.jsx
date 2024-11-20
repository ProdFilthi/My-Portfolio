import { useState, useEffect } from "react";
import { BiBook, BiTrash } from "react-icons/bi";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => setTask(e.target.value);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleKeyDown = (e) => e.key === "Enter" && addTask();

  const toggleCompletion = (index) =>
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const deleteTask = (index) => setTodos(todos.filter((_, i) => i !== index));

  return (
    <div className="bg-neutral-100 w-96 min-h-24 max-w-full shadow-md shadow-[#3322E5] rounded-md p-4">
      <div className="flex items-center justify-between text-xl">
        <h1>Todo App</h1>
        <BiBook />
      </div>
      <div className="my-4 flex justify-center items-center">
        <input
          value={task}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          type="text"
          placeholder="Add Task..."
          className="py-4 rounded-l-md w-60 cursor-pointer pl-2"
        />
        <button
          onClick={addTask}
          className="bg-[#3322E5] text-white py-4 w-24 rounded-r-md"
        >
          Add Task
        </button>
      </div>
      <div>
        {todos.map((todo, i) => (
          <div
            key={i}
            className={`flex items-center justify-between py-2 px-4 ${
              todo.completed ? "line-through text-[#3322E5]" : ""
            }`}
          >
            <span
              onClick={() => toggleCompletion(i)}
              className="cursor-pointer"
            >
              {todo.text}
            </span>
            <BiTrash onClick={() => deleteTask(i)} className="cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
