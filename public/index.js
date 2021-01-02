'use strict'
 let cajaPeliculas=document.querySelector('#peliculas');
 let listaPeliculas=[];
fetch('http://localhost:3000/peliculas')
.then(data => data.json())
.then(peliculas =>  {
    
    listaPeliculas = peliculas
    printPelis();

})
    function printPelis(){
        listaPeliculas.forEach(pelicula =>{
            const rowPeli = document.createElement("tr");

            const idPeli = document.createElement("td");
            idPeli.innerHTML = pelicula.id;
            rowPeli.appendChild(idPeli);

            const titlePeli = document.createElement("td");
            titlePeli.innerHTML = pelicula.nombre;
            rowPeli.appendChild(titlePeli);

            const directorPeli = document.createElement("td");
            directorPeli.innerHTML = pelicula.director;
            rowPeli.appendChild(directorPeli);
            
            const classPeli = document.createElement("td");
            classPeli.innerHTML = pelicula.clasificacion;
            rowPeli.appendChild(classPeli);
            
            cajaPeliculas.appendChild(rowPeli);
            console.log(pelicula);
        
        })
};