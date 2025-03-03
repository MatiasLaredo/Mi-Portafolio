import { FaGraduationCap, FaLaptopCode, FaLanguage } from 'react-icons/fa';

const Educacion = () => {
    return(
        <div id="Educacion" className='edu container '>
            <h1 className='text-danger text-center po'>Mis Estudios</h1>
            <div className='row mt-5 '>

                <div className='col-md-4 '>
                    <div className="car estudio bg-dark text-white"> 
                        <div className='card-body text-center '>
                            <FaGraduationCap className="PEPE" size={30} />
                            <h3>Secundario</h3>
                            <p>Nuestra Señora de Luján de los Patriots (2014-2018)</p>
                            <p>Bachiller con orientación en Artes Visuales</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className="car estudio bg-dark text-white">
                        <div className='card-body text-center'>
                            <FaLaptopCode className="PEPE" size={30} />
                            <h3>Diplomatura</h3>
                            <p>Instituto superior de la carrera (2024)</p>
                            <p>Programación Web Full Stack</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className="car estudio bg-dark text-white">
                        <div className="card-body text-center">
                            <FaLanguage className="PEPE" size={30} />
                            <h3>Idiomas</h3>
                            <p>Centro Universitario de Idiomas (2024)</p>
                            <p>Nivel 2 de Inglés</p>
                        </div>
                    </div>

                </div>
                        
            </div>
        </div>
    );
}

export default Educacion;