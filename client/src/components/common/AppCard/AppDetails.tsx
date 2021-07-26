import React, { Component } from 'react'
import { PublishAppData } from '../../../constants/Interfaces';
import IonIcon from '@reacticons/ionicons';

import { createIpfsUrl } from '../../../utils/IpfsUrl'

import "./AppDetails.css";
import { Col, Container, Row, Button, Image, Carousel } from 'react-bootstrap';
import { TYPE_APK } from '../../../constants/constants';


interface State { }
interface Props {
    appDetails: PublishAppData,
    editDetails: Function
    submitDetails: Function,
    showButtons: boolean,
    isPublished?: boolean
}

export class AppDetails extends Component<Props, State> {

    state = {}

    componentDidMount() { }

    downloadApk = (url: string) => {
        window.open(
            url,
            '_blank' // <- This is what makes it open in a new window.
        );
    }

    render() {
        const { appDetails, editDetails, submitDetails, showButtons, isPublished } = this.props
        const { name, icon, tagLine, description, images, apk } = appDetails
        let iconApiData: any = icon
        let imageApiData: any = images
        let apkApiData: any = apk
        console.log("apkApiData ", apkApiData)
        const iconImg: string = iconApiData.hash ? createIpfsUrl(iconApiData.hash) : URL.createObjectURL(icon)
        const imageImg: string = imageApiData.hash ? createIpfsUrl(imageApiData.hash) : URL.createObjectURL(images)
        return (
            <Container>
                <Row>
                    <Col xs={4} md={3}>
                        <Image className="icon_image" src={iconImg} roundedCircle />
                    </Col>
                    <Col >
                        <Row><p className="m_0 heading pb_5 text_grey_700 text-transform-capital">{name}</p></Row>
                        <Row><p className="m_0 f14_l17 text_grey_400 text-transform-capital">{tagLine}</p></Row>
                    </Col>
                </Row>
                <Row className="my_16">
                    <Col>
                        <p className="text-left f16_l19 text_grey_700 text-transform-capital">{description}</p>
                    </Col>
                    {/* {apkApiData.hash &&
                        <a href={`${createIpfsUrl(apkApiData.hash)}`} >CLICK </a>} */}
                    <Col xs={4} sm={4} md={3} lg={4}>
                        {apk.type === TYPE_APK && apkApiData.hash &&
                            <div className="border radius_8 p_10 apk_button" onClick={() => this.downloadApk(createIpfsUrl(apkApiData.hash))}>
                                <IonIcon name="logo-android" className="apk_icon" />
                                <p className="m_0 font-weight-700 f14_l17 text-center apk-text-319">APK</p>
                            </div>
                        }
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <Carousel interval={5000} controls={false} slide={true} touch={true}>
                            {[imageImg, iconImg].map((img: string) =>
                                <Carousel.Item>
                                    <Image
                                        className="w_100 carousel-item-size" src={img} rounded />
                                </Carousel.Item>
                            )}
                        </Carousel>

                    </Col>
                </Row>
                {isPublished &&
                    <Row className="mt_16">
                        <Col>
                            <Button className="width_90 " onClick={() => submitDetails()}>Published!!! Goto your apps</Button>
                        </Col>
                    </Row>
                }
                {!isPublished && showButtons &&
                    <Row className="mt_16">
                        <Col>
                            <Button className="width_90 " onClick={() => editDetails()}>Edit</Button>
                        </Col>
                        <Col>
                            <Button className="width_90" onClick={() => submitDetails()}>Submit</Button>
                        </Col>
                    </Row>}
            </Container>
        )
    }
}

export default AppDetails
