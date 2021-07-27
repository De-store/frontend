import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import "./Home.css"

import IonIcon from '@reacticons/ionicons';

interface State {
    loading: boolean
}
interface Props {
    downloadApp: Function
}
export class Users extends Component<Props, State> {

    state = {
        loading: false
    }

    DOWNLOAD = async () => {

        this.setState({
            loading: true
        })
        try {
            const response: any = await fetch('https://gateway.ipfs.io/ipns/QmYDK8VDTYZYHmww3wBZBiSyGAPdzpxNKEfozmL4SiriMe', {
                method: 'GET'
            })
            console.log("RESPONSE ", response)
            if (response.status !== 200)
                throw new Error("Network error, try again later")
            const blob: any = await response.blob()
            console.log("blob ", blob)

            const url: any = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link: any = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                `de-store.apk`,
            );

            // Append to html link element page
            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);
            this.setState({
                loading: false
            })
        } catch (err: any) {
            alert("Network error, try again later")
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { loading } = this.state
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
                                <Button size="lg" className="w_100 download_button_size fs_15 font-weight-700" variant="primary"
                                    onClick={this.DOWNLOAD}
                                >
                                    <div className="android-text"><IonIcon name="logo-android" />&nbsp; {loading ? `. . . . .` : `Android`}</div>
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
