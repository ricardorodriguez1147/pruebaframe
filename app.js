const Saludo = () =>{
    const divFrame = document.getElementById('id_frame');
    const divBtn = document.getElementById('btn_salir');

    divFrame.style.width = "100vw";
    divFrame.style.height = "100vh";
    divFrame.style.position = "fixed";
    divFrame.style.top = "0";
    divFrame.style.left = "0";
    divBtn.style.display = "flex";

}

const Salir = () =>{
    const divFrame = document.getElementById('id_frame');
    const divBtn = document.getElementById('btn_salir');

    divFrame.style.width = "30rem";
    divFrame.style.height = "30rem";
    divFrame.style.position = "";
    divFrame.style.top = "";
    divFrame.style.left = "";
    divBtn.style.display = "none";

    console.log('Hola Mundo');

}