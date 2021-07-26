import React from 'react'
import { Row, Spinner, Col } from 'react-bootstrap'

import "./Loader.css"

const FullScreenLoader: React.FC = () => {
    return (
        <div className="spinner_full_page">
            <Row>
                <Col>
                    <LoaderComponent />
                </Col>
            </Row>
        </div>
    )
}

const LoaderComponent: React.FC = () => {
    return (
        <Spinner animation="grow" role="status" className="spinner_color">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export {
    FullScreenLoader,
    LoaderComponent
}