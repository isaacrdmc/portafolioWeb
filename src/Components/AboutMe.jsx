export default function AboutMe() {
    return (
        <div className="container">
        {/* <div> */}
            <div 
                className="row justify-content-center"

            >
                {/* <div className="col-md-8 col-lg-6"> */}
                <div>
                    {/* Fila principal de AboutMe */}
                    
                    
                    
                    <div className="row align-items-center ">
                        {/* Columna izquierda (foto) */}
                        <div className="col-md-4 text-center mb-3 mb-md-0">
                            <img
                                src="https://avatars.githubusercontent.com/u/55609604?v=4"
                                // src="blob:https://web.whatsapp.com/dd6c3094-e798-4416-89b7-4416b2b30e56"
                                alt="Isaac"
                                className="img-fluid rounded-circle"
                                style={{ maxWidth: "150px" }}
                            />
                        </div>

                        {/* Columna derecha (texto) */}
                        <div className="col-md-8 text-center text-md-start">
                            <h1 className="fw-bold mb-1">Isaac Ramírez De María y Campos</h1>
                            <h2 className="h5 text-info mb-1">Desarrollador de software</h2>
                            <h4 className="h6 text-info mb-1">León, Guanajuato</h4>

                            {/* <h1 className="fw-bold mb-1">Pepe</h1>
                            <h2 className="h5 text-success mb-1">Ing.DMS</h2>
                            <h4 className="h6 text-muted">León, Guanajuato</h4> */}
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}
