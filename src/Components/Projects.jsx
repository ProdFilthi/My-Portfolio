import TodoApp from "./TodoApp";

const Projects = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl font-bold">Projects</h1>
      <div className="flex items-center justify-center flex-col py-4">
        <TodoApp />
        <h1 className="py-4 text-2xl font-semibold cursor-pointer">Todo App</h1>
      </div>
    </div>
  );
};

export default Projects;
