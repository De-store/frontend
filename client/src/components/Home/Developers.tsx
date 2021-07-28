import React, { Component } from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap'

import "./Home.css"

interface State { }
interface Props {
    publishApp: Function
}

export class Developers extends Component<Props, State> {
    render() {
        return (
            <Container className="text-left my_40">
                <Row>
                    <Col md={12} lg={8}>
                        <Row>
                            <Col>
                                <div className="fs_36 font-weight-700 pb_10">For developers</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="heading font-weight-400 py_10">Pulish your applications for any platform without any boundaries.</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} lg={4} className="d-flex justify_content_center align-items-center p_10">
                        <Row>
                            <Col>
                                <Button size="lg" className="fs_15 font-weight-700" variant="primary" onClick={() => this.props.publishApp()} >Publish your app</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        )
    }
}


export default Developers
