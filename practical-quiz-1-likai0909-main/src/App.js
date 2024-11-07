import "./App.css";


// Main App Component
function App() {
  const tasks = [
    {
      name: "Design Homepage",
      description: "Create the initial homepage design",
      priority: "Low",
    },
    {
      name: "Set Up Database",
      description: "Configure the database for user data",
      priority: "Medium",
    },
    {
      name: "Build API",
      description: "Develop the API endpoints",
      priority: "High",
    },
  ];

function Task({ name, description, priority }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Priority: {priority}</p>
    </div>
  );
}

// ProjectStatus Component for conditional rendering
function ProjectStatus({ isActive }) {
  return (
    <div>
      {isActive ? (
        <>
          <p>The project is in progress.</p>
          <button>View Progress</button>
        </>
      ) : (
        <p>The project is not active.</p>
      )}
    </div>
  );
}


  // Determine if the project is active based on the current time
  // const currentHour = new Date().getHours();
  // const isActive = currentHour >= 8 && currentHour < 17;
  const currentHourUTC = new Date().getUTCHours();
  const isActive = currentHourUTC >= 0 && currentHourUTC < 9; // 8 AM to 5 PM SGT in UTC

  return (
    <div className="app">
      <h1>Project Task Manager</h1>
      <ProjectStatus isActive={isActive} />   
      <div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            description={task.description}
            priority={task.priority}
          />
        ))}
      </div>
    </div>
  );
}


export default App;