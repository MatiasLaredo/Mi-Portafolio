const Porfolio = () => {
return(
                < div id="Porfolio" className="containter  my-5">        
            
            <h1 className="text-center  po">Mis Proyectos</h1>
            <div className="row justify-content-center gap-4">
                <div className="col-md-3 ">
                    <div className="card bg-dark text-white ">
                        <img src="/public/rickymorty.jpg"className="car-img-top" alt="Proyecto 1" />
                        <div className="card-body text-center ">
                            <h5 className="card-title">Rick and Morty</h5>
                            <p className="card-text">Tecnologias:HTML, CSS, JavaScript, React y Bootstrap</p>
                            <a href="https://github.com/MatiasLaredo/Proyecto-Rick---Morty" target="_blank" rel="noopener noreferrer" className="btn btn-danger">Ver en Github
                            </a>
                    </div>
                </div>
            </div>
                 {/* Tarjeta 2 */}
            <div className="col-md-3">
            <div className="card bg-dark text-white">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Proyecto en desarrollo" />
            <div className="card-body text-center">
                        <h5 className="card-title">Nombre del Proyecto</h5>
                        <p className="card-text">Tecnologías: HTML, CSS, JavaScript</p>
                        <a href="URL_GITHUB" target="_blank" rel="noopener noreferrer" className="btn btn-danger">Ver en GitHub</a>
            </div>
            </div>
            </div>
            {/* Tarjeta 3 */}
            <div className="col-md-3">
            <div className="card bg-dark text-white">
                        <img src="URL_DE_TU_IMAGEN" className="card-img-top" alt="Proyecto en desarrollo" />
            <div className="card-body text-center">
                        <h5 className="card-title">Nombre del Proyecto</h5>
                        <p className="card-text">Tecnologías: HTML, CSS, JavaScript</p>
                        <a href="URL_GITHUB" target="_blank" rel="noopener noreferrer" className="btn btn-danger">Ver en GitHub</a>
            </div>
            </div>
            </div>
                </div> 
                </div>
            
)   
} 

export default Porfolio