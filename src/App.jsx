import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1>1ST MERN PROJECT</h1>

        <ul className="p-2 border rounded mt-8">
          <li className="text-center mb-2">NAME CARD</li>
          <li>ID: User ID</li>
          <li>
            NAME: <span>First Name</span>
            <span> Last Name</span>
          </li>
          <li>EMAIL: Email Address</li>
          <li>GENDER: Gender</li>
        </ul>
      </div>
    </>
  );
}

export default App;
