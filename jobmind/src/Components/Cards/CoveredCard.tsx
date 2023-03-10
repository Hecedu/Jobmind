import React from 'react'
import { Link } from 'react-router-dom';
import { containerStyle } from '../../Presets/Bootstrap/DefaultStyles';

export default function CoveredCard() {
    return (
        <div className={containerStyle} style={{ background: "linear-gradient(45deg, rgb(44, 60, 148), rgb(44, 148, 123))" }}>
            <div className="row p-4">
                <div className="container text-center text-light">
                    <img className="img-fluid shadow" src={`${process.env.PUBLIC_URL}/images/Covered.png`} style={{ width: "20vh" }} alt="Covered logo" />
                    <div className="d-flex justify-content-center align-items-bottom">
                        <h5 className="my-1 display-5 fw-bold h-auto px-2 w-auto">Covered</h5>
                    </div>
                    <p>AI Powered Cover Letter Generation</p>
                    <hr></hr>
                    <p className="lead">
                        <a href="https://hecedu.github.io/Covered/" className='btn btn-info btn-lg shadow'>
                            Create a Cover Letter
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
