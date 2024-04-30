import { useEffect, useState } from 'react'
import Pelicula from './components/pelicula/Pelicula.jsx'
import './App.css'


    

function App() {


  const API_KEY = "3bc1c142"
  const [ titulo, setTitulo ] = useState("garfield")
  
  // const { data, setData } = useState()
  
  // useEffect(() => {
    
  //   fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${titulo}&y=2024`)
  //   .then(res => { return res.json(); })
  //   .then(res => { console.log(res)})
  // }, [])
  
  // function listarPeliculas(data) {
  //   const peliculas = data?.Search || []
  // }


  const handleChange = (event) => {
    console.log(event.target.value)
    setTitulo(event.target.value)
  }


  return (
    <>
    <div className=' flex flex-col items-center gap-4 mb-8 mx-auto w-screen py-6'>
      <h1 className='text-2xl'>Buscador de peliculas</h1>
      <div className='flex gap-2 items-center'>
        <span className='text-slate-200'>Buscar:</span>
        <input onChange={handleChange} className='bg-slate-300 text-slate-800 w-28 md:w-56' type="text" />
        <button className='bg-slate-300 text-slate-800 hover:bg-slate-100 w-8'>
        <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        </button>
      </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-4 grid-rows-1 auto-cols-fr gap-2 gap-y-14 md:gap-y-24 w-screen justify-items-center'>
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
