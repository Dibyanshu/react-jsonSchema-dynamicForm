
import './App.css'
import DynamicForm from './DynamicForm';
import { formSchema } from './formSchema';

function App() {

  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
};

  return (
    <>
      <header>REACT JSON Schema Based Dynamic Form</header>
      <h1>React Dynamic Form</h1>
      <div className="card">
        <DynamicForm schema={formSchema} onSubmit={handleFormSubmit} />  
      </div>
    </>
  )
}

export default App
