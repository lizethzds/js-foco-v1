window.addEventListener('load', function(){
   foco();


});

function foco(){
    document.querySelector('body').classList.add('oscuridad');
    const titulo = document.createElement("h1");
    titulo.classList.add("titulo")
    const anio = new Date().getFullYear;
    titulo.innerText = `Demostraciones de desarrollo web ${anio}`;
    document.body.appendChild(titulo);

    const img = document.createElement("img");
    img.classList.add('foco');
    img.setAttribute('src', 'images/foco-apagado.jpg');

    img.addEventListener('click', () => {
        if(img.src.indexOf("apagado") > 0) {
            img.setAttribute('src','images/foco-prendido.jpg');
            document.body.classList.remove('oscuridad');
            document.body.classList.add('luz');
        }else{
        
            img.setAttribute('src', 'images/foco-apagado.jpg');
            documento.body.classList.remove('luz');
            documento.body.classList.add('oscuridad');

        }
    
    });

    document.body.appendChild(img);
}


