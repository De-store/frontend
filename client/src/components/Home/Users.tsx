import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import "./Home.css"

import IonIcon from '@reacticons/ionicons';

interface State { }
interface Props {
    downloadApp: Function
}

export class Users extends Component<Props, State> {
    render() {
        return (
            <Container className="text-left my_40">
                <Row>
                    <Col md={12} lg={8}>
                        <Row>
                            <Col>
                                <div className="fs_36 font-weight-700 pb_10">For Users</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="heading font-weight-400 py_10">Download DeStore mobile application and explore your favourite mobile Apps.</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} lg={4} className="d-flex justify_content_center align-items-center flex-column p_10">
                        <Row className="p_5 text-center w_100">
                            <Col className="p_5" xs={12} sm={4} md={4} lg={12}>
                                <Button size="lg" className="w_100 download_button_size fs_15 font-weight-700" variant="primary" onClick={() => this.props.downloadApp()}>
                                    <div className="android-text"><IonIcon name="logo-android" />&nbsp; Android</div>
                                    <span className=" condition_justify_content_center fs_10 extra-line">Coming soon</span>
                                </Button>
                            </Col>
                            <Col className="p_5" xs={12} sm={4} md={4} lg={12}>
                                <Button size="lg" className="w_100 download_button_size fs_15 font-weight-700" variant="primary" onClick={() => this.props.downloadApp()} disabled>
                                    <div><IonIcon name="logo-apple" />&nbsp; IOS</div>
                                    <span className="d-flex condition_justify_content_center fs_10">Coming soon</span>
                                </Button>
                            </Col>
                            <Col className="p_5" xs={12} sm={4} md={4} lg={12}>
                                <Button size="lg" className="w_100 download_button_size fs_15 font-weight-700" variant="primary" onClick={() => this.props.downloadApp()} disabled>
                                    <div><IonIcon name="logo-windows" />&nbsp; Desktop</div>
                                    <span className=" d-flex condition_justify_content_center fs_10">Coming soon</span>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Users
