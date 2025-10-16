import { useState } from "react";
import cv from "../assets/cv.png";
import github from "../assets/Github.png";
import linkedin from "../assets/Linkedin.png";




export default function Contacto() {

    // * Creamos los estados para la funcionalidad:
    const [correo, setCorreo] = useState("isaacrdmc@gmail.com");
    const [mensaje, setMensaje] = useState("");


    // ^ Creamos las funciones para la interacción de cada boton:
    
    // * Funcio para copiar y pegar:
    const copiarCorreo = () => {
        navigator.clipboard.writeText(correo)       // ? Copiamos el correo en el portapapeles
        .then(() => {
            setMensaje('Correo copiado!');      // Mostramos el mensaje de copiado
            setTimeout(() => setMensaje(''), 3000);     // Limpiamos el mensajes
        })
        .catch(err => {
            console.log('Error al copiar: ', err);
        })
    }


    // * Funcion para abrir el CV en una nueva pestaña:
    const abrirCv = () => {
        window.open();
    }
    
    return(
        <div className="container">
            <div className="column justify-content-align-start">
                
                {/* boton del correo */}
                <button 
                    className="btn btn-outline-info"
                    onClick={copiarCorreo}
                >
                    Correo
                </button>               


                {/* boton del CV */}
                <button className="btn btn-outline-info">
                    <img 
                        src={cv} 
                        style={{ maxWidth: "25px" }}
                        alt="CV" 
                    />
                    
                </button>


                {/* boton de GitHub */}
                <button className="btn btn-outline-info">
                    <img 
                        src={github} 
                        style={{ 
                            maxWidth: "25px",
                        }}
                        alt="GitHub" 
                    />
                </button>


                {/* boton de Linkedin */}
                <button className="btn btn-outline-info">
                    <img 
                        src={linkedin} 
                        style={{ maxWidth: "25px" }}
                        alt="Linkedin" 
                    />
                </button>


            </div>
        </div>
    );
}