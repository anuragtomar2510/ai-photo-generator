import React, {useState} from 'react'
import './App.css'
import axios from 'axios'
const apiKey = process.env.REACT_APP_API_KEY
const url = `https://api.generated.photos/api/v1/faces?api_key=${apiKey}&order_by=random`
function App() {

  const [image, setImage] = useState('')

  const clickHandler = () => {

      axios.get(url)
        .then(response => {
            
            const imgSrc = response.data.faces[0].urls[4][512]

            if(imgSrc) {

                setImage(imgSrc)

            }
        })
        .catch(error => alert('There is some error!'))
  }
  return (
        <div className="App">
          <h1>AI Photo Generator</h1>
          {image && <img src={image} alt="AI Faces" />}
          <button type="button" onClick={clickHandler}>New Image</button>
        </div>
     
  )

}

export default App
