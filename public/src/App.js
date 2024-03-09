import './App.css';
import axios from 'axios'

function App() {

  const basePath = 'http://localhost:3001/'
  const getSample = async () => {
    try{
      const jsonSample = await axios.get(basePath);
      console.log(jsonSample);
    } catch (error) {
      console.error(error);
    }
  }

  const createObject = async () => {
    const objectToCreate = {
      id: 2,
      title: 'create test',
      description: 'test post for creating an object'
    };

    try {
      await axios.post(basePath, objectToCreate);
    } catch (error) {
      console.error(error);
    }
  }

  const updateObject = async () => {
    const infoToUpdate = {
      id: 2,
      title: 'update test',
      description: 'test put for updatind object'
    };
    try {
      await axios.put(`${basePath}${infoToUpdate.id}`, infoToUpdate);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteObject = async () => {
    const id = 2
    try {
      await axios.delete(`${basePath}${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <button onClick={getSample}>
          Get Sample
        </button>
      </div>
      <div>
        <button onClick={createObject}>
          Create Object
        </button>
      </div>
      <div>
        <button onClick={updateObject}>
          Update Object
        </button>
      </div>
      <div>
        <button onClick={deleteObject}>
          Delete Object
        </button>
      </div>
    </div>
  );
}

export default App;
