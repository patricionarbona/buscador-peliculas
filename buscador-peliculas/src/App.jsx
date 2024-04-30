import { useEffect, useState } from 'react'
import Pelicula from './components/pelicula/Pelicula.jsx'
import './App.css'


    

function App() {


  const API_KEY = "3bc1c142"
  // const titulo = "garfield"
  
  // const { data, setData } = useState()
  
  // useEffect(() => {
    
  //   fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${titulo}&y=2024`)
  //   .then(res => { return res.json(); })
  //   .then(res => { console.log(res)})
  // }, [])
  
  // function listarPeliculas(data) {
  //   const peliculas = data?.Search || []
  // }


  return (
    <>
    <div className=''>
      <h1>Buscador de peliculas</h1>
      <div>
        <input type="text" />
        <button>
          Search
        </button>
      </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-4 grid-rows-1 auto-cols-fr gap-6 gap-y-14 md:gap-y-24 w-screen justify-items-center'>
      <Pelicula year={"2024"} titulo={"Garfield: la película"} rutaFoto={"https://m.media-amazon.com/images/M/MV5BNGQ2MTc1MGUtNTIxZS00ZmIwLTkyYWUtMzViM2U5NmEyOWE2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"}/>
      <Pelicula year={"2024"} titulo={"Garfield: la película"} rutaFoto={"https://m.media-amazon.com/images/M/MV5BNGQ2MTc1MGUtNTIxZS00ZmIwLTkyYWUtMzViM2U5NmEyOWE2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"}/>
      <Pelicula year={"2024"} titulo={"Garfield: la película"} rutaFoto={"https://m.media-amazon.com/images/M/MV5BNGQ2MTc1MGUtNTIxZS00ZmIwLTkyYWUtMzViM2U5NmEyOWE2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"}/>
      <Pelicula year={"2024"} titulo={"Garfield: la película"} rutaFoto={"https://m.media-amazon.com/images/M/MV5BNGQ2MTc1MGUtNTIxZS00ZmIwLTkyYWUtMzViM2U5NmEyOWE2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"}/>
      <Pelicula year={"2024"} titulo={"Garfield: la película"} rutaFoto={"https://m.media-amazon.com/images/M/MV5BNGQ2MTc1MGUtNTIxZS00ZmIwLTkyYWUtMzViM2U5NmEyOWE2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"}/>
      <Pelicula year={"2024"} titulo={"Garfield: la película"} rutaFoto={"https://m.media-amazon.com/images/M/MV5BNGQ2MTc1MGUtNTIxZS00ZmIwLTkyYWUtMzViM2U5NmEyOWE2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"}/>
      <Pelicula year={"2024"} titulo={"Garfield: la película"} rutaFoto={"https://m.media-amazon.com/images/M/MV5BNGQ2MTc1MGUtNTIxZS00ZmIwLTkyYWUtMzViM2U5NmEyOWE2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"}/>
      <Pelicula year={"2024"} titulo={"Garfield: la película"} rutaFoto={"https://m.media-amazon.com/images/M/MV5BNGQ2MTc1MGUtNTIxZS00ZmIwLTkyYWUtMzViM2U5NmEyOWE2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"}/>
      <Pelicula year={"2024"} titulo={"Garfield: la película"} rutaFoto={"https://m.media-amazon.com/images/M/MV5BNGQ2MTc1MGUtNTIxZS00ZmIwLTkyYWUtMzViM2U5NmEyOWE2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"}/>
    </div>
    </>
  )
}

export default App
