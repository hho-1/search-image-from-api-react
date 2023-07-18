
import './App.css'
import Header from './header/Header'
import searchImages from './api'
import { useState } from 'react'
import ImageList from './components/imageList.jsx'

function App() {
  
  const [images, setImages] = useState([])

  const handleSubmit = async (item) => {
    
    const results = await searchImages(item);
    setImages(results)
  }

  return (
    <div className='app'>
      <Header search = {handleSubmit}/>
      <ImageList imagesPlaceholder = {images}/>
    </div>
  )
}

export default App
