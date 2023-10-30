import React from 'react';
import axios from 'axios';

function DataHandler() {
  const handleChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    axios.post('https://fota.onrender.com/upload', formData)

      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <form>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange}/>
        {/* <button type="submit">Upload</button> */}
      </form>
    </div>
  );
}

export default DataHandler;
