import { useEffect, useState } from "react";

function Pelicula({rutaFoto, titulo, year}) {

    
    return (
        <>
            <div className="relative z-10 h-56 md:h-48 w-40">
                <img className="h-52 w-36 md:h-48" src={rutaFoto} alt="" />
                <div className="absolute z-10 -bottom-5 md:-bottom-10 bg-slate-500 bg-opacity-10 w-36 ">
                    <h2 className="uppercase">{titulo}</h2>
                    <p>{year}</p>
                </div>
            </div>
        </>
    )

}

export default Pelicula