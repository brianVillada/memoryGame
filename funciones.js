const d = document;
let tablero = d.querySelector(".tablero");
let imagenNombre = [];
let imagenID = [];
let aciertos = 0;
let intentos = 0;
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos= d.querySelector(".aciertos");
let mostrarEfectividad = d.querySelector(".efectividad");
let mostrarTiempo = d.querySelector(".tiempo");
let tiempo = 30;
let tiempoTranscurrido;
let btn_iniciar = d.querySelector(".btn-iniciar");
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel");



btn_iniciar.addEventListener("click",function(){
    tiempoTranscurrido = setInterval(()=>{

        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if(tiempo==0){
            clearInterval(tiempoTranscurrido);
            alert("se acabó el tiempo");
            location.reload();
        }
    },1000);
    agregarImagenes();
    mostrarNivel.textContent = nivel;
});

let imgN1 = [
   {nombre:"robot1",url:"imagenes/robot1.png"},
   {nombre:"robot2",url:"imagenes/robot2.png"},
   {nombre:"robot3",url:"imagenes/robot3.png"},
   {nombre:"robot4",url:"imagenes/robot4.png"},
   {nombre:"robot5",url:"imagenes/robot5.png"},
   {nombre:"robot6",url:"imagenes/robot6.png"},
   {nombre:"robot1",url:"imagenes/robot1.png"},
   {nombre:"robot2",url:"imagenes/robot2.png"},
   {nombre:"robot3",url:"imagenes/robot3.png"},
   {nombre:"robot4",url:"imagenes/robot4.png"},
   {nombre:"robot5",url:"imagenes/robot5.png"},
   {nombre:"robot6",url:"imagenes/robot6.png"}
];

let imgN2 = [
    {nombre:"robot1",url:"imagenes/robot1.png"},
    {nombre:"robot2",url:"imagenes/robot2.png"},
    {nombre:"robot3",url:"imagenes/robot3.png"},
    {nombre:"robot4",url:"imagenes/robot4.png"},
    {nombre:"robot5",url:"imagenes/robot5.png"},
    {nombre:"robot6",url:"imagenes/robot6.png"},
    {nombre:"robot1",url:"imagenes/robot1.png"},
    {nombre:"robot2",url:"imagenes/robot2.png"},
    {nombre:"robot3",url:"imagenes/robot3.png"},
    {nombre:"robot4",url:"imagenes/robot4.png"},
    {nombre:"robot5",url:"imagenes/robot5.png"},
    {nombre:"robot5",url:"imagenes/robot6.png"},
    {nombre:"robot5",url:"imagenes/robot7.png"},
    {nombre:"robot5",url:"imagenes/robot8.png"},
    {nombre:"robot5",url:"imagenes/robot7.png"},
    {nombre:"robot6",url:"imagenes/robot8.png"}
 ];



// agregar imagenes al tablero
function agregarImagenes(){
    imgN1.forEach((imagen,i)=>{
        let div = d.createElement("div");
        div.className = "col-3";
        let img = d.createElement("img");
        img.className = "img-fluid altura-img border border-3";
        img.id = i;
        img.src ="imagenes/oculto.png";
        img.addEventListener("click",mostrarImg);
        div.appendChild(img);
        tablero.appendChild(div);
    });
}



function mostrarImg(){
    let imgID = this.getAttribute("id");
    this.src = imgN1[imgID].url;
    imagenNombre.push(imgN1[imgID].nombre);
    imagenID.push(imgID);
    // console.log(imagenNombre + " / " + imagenID );
    if(imagenNombre.length ==2){
        setTimeout(compararImg,700);
    }
}

function compararImg(){
    let imagenesTablero = d.querySelectorAll(".tablero  div  img");
    //console.log(imagenesTablero);

    if(imagenNombre[0]==imagenNombre[1] && imagenID[0] !=imagenID[1]){

        imagenesTablero[imagenID[0]].src = "imagenes/correcto.png";
        imagenesTablero[imagenID[0]].removeEventListener("click",mostrarImg);
        imagenesTablero[imagenID[1]].src = "imagenes/correcto.png";
        imagenesTablero[imagenID[1]].removeEventListener("click",mostrarImg);
        aciertos++;
        mostrarAciertos.textContent=aciertos;
    }else{

        imagenesTablero[imagenID[0]].src = "imagenes/oculto.png";
        imagenesTablero[imagenID[1]].src = "imagenes/oculto.png";
    }
    intentos++;
    mostrarEfectividad.textContent = (aciertos /intentos).toFixed(2)*100+"%" ;
    mostrarIntentos.textContent = intentos;

    imagenNombre = [];
    imagenID = [];
    if(aciertos==6 && nivel==1){
        alert("Felicitaciones pasaste de nivel");
        intentos = 0;
        nivel++;
        aciertos = 0;
        clearInterval(tiempoTranscurrido);
        tiempo = 20;
        mostrarIntentos.textContent = intentos;
        mostrarNivel.textContent = nivel;
        mostrarAciertos.textContent= aciertos;
        mostrarTiempo.textContent = tiempo;
    }else if(nivel == 2 && aciertos ==8){
        alert("Felicitaciones pasaste de nivel");
        intentos = 0;
        nivel++;
        aciertos = 0;
        clearInterval(tiempoTranscurrido);
        tiempo = 20;
    }


}
