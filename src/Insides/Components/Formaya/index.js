import React from 'react';
import axios from 'axios';

function DataHandler() {
  const handleChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    axios.post('https://flaskproject-404121.wl.r.appspot.com/upload', formData)

      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }


  const handleSubmitting = (event) => {
    event.preventDefault();
    axios.get('https://flaskproject-404121.wl.r.appspot.com/GetFileData')
    .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

//pip3 freeze > requirements.txt

  return (
    <div className="App">
      <form>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange} disabled/>
        <button onClick={handleSubmitting}>Upload</button>
      </form>
    </div>
  );
}

export default DataHandler;
