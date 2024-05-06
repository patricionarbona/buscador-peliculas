function Pelicula({ rutaFoto, titulo, year }) {

    const notFound = "https://i.kym-cdn.com/photos/images/original/000/091/881/tumblr_le3iimRqBr1qe91wdo1_500.jpg"

    return (
        <>
            <div className="relative flex flex-col items-center w-52 h-96 group shadow-lg shadow-yellow-200 ">
                <h3 className="py-4 ">{year}</h3>
                <img className="w-56 h-full mb-1 max-h-80" src={rutaFoto === "N/A" ? notFound : rutaFoto} alt="" />
                <div className="absolute bottom-0 w-52 bg-blue-800 bg-opacity-45 pb-2 line-clamp-2 group-hover:line-clamp-none group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="uppercase ">{titulo}</h2>
                </div>
            </div>
        </>
    )

}

export default Pelicula