import React, { createContext } from 'react'; // Import React and createContext
import './App.css';
import ChildA from './components/ChildA';

// Create a context
const DataContext = createContext();


function App() {
  const name = "Yoshita";
  const gender="female"

  return (
    <>
      <DataContext.Provider value={{name,gender}}>
        <ChildA />
      </DataContext.Provider>
    </>
  );
}

export default App;
export { DataContext }; // Export the DataContext
