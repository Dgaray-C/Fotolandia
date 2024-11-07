import React from 'react'
import './ItemListContainer.css';

function ItemListContainer(props) {
    return (
        <div>
            <h2 className='mt-5 text-secondary'> {props.greeting} </h2>

            <div className="container text-center mt-4">
                <div className="row g-2 justify-content-center">
                    <div className="col-4 d-flex justify-content-center">
                        <div className="card" style={{ width: '18rem' }} >
                            <img src="/src/assets/camaras.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Camaras</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" classNames="btn btn-primary">Ver aqui</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div className="card" style={{ width: '18rem' }} >
                            <img src="/src/assets/lentes.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lentes</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" classNames="btn btn-primary">Ver aqui</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div className="card" style={{ width: '18rem' }} >
                            <img src="/src/assets/iluminacion.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Iluminacion</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" classNames="btn btn-primary">Ver aqui</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemListContainer