function Pelicula({rutaFoto, titulo, year}) {

    const notFound = "https://i.kym-cdn.com/photos/images/original/000/091/881/tumblr_le3iimRqBr1qe91wdo1_500.jpg"

    // const notFound = "https://prestashop.com/sites/default/files/wysiwyg/404_not_found.png"

    return (
        <>
            <div className="relative flex flex-col items-center w-60 h-96 group shadow-lg shadow-yellow-200">
                <h3 className="py-4 ">{year}</h3>
                <img className="w-56 mb-1" src={rutaFoto === "N/A" ? notFound : rutaFoto} alt="" />
                <div className="absolute bottom-0 w-56 bg-blue-800 bg-opacity-45 pb-2 line-clamp-2 group-hover:line-clamp-none group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="uppercase ">{titulo}</h2>
                </div>
            </div>
        </>
    )

}

export default Pelicula