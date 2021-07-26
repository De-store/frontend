import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PublishAppData } from '../../constants/Interfaces';
import { publishApp } from '../../modules/actions/Publish/Publish';
import { APP_NAME, APP_TAG_LINE, APP_DESCRIPTION, APP_ICON, APK, APP_IMAGES } from "../../constants/constants"
import CardComponent from './CardComponent';
import "./Publish.css";
import AppDetails from '../common/AppCard/AppDetails';
import { emptyPublishAppData } from '../../constants/EmptyInterfaces';
import { FullScreenLoader } from '../common/Loader/Loader';
import { validAppData } from '../../utils/CheckInterfaceInstance';
import { ProfilePage } from '../../constants/Routes';

const mapStateToProps = (state: any) => ({
    publish: state.publish
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

interface State {
    data: PublishAppData,
    currentScreen: number
}
interface OwnProps {
    callApi: Function,
    pushToHistory: Function
}

type Props = PropsFromRedux & OwnProps

export class Publish extends Component<Props, State> {

    state = {
        data: emptyPublishAppData,
        currentScreen: 0
    }

    componentDidMount() { }

    onFormSubmit = (e: any) => {
        e.preventDefault()
        const { data } = this.state

        this.props.callApi(publishApp, data)
    }

    setAndHandleNext = (keyName: string, value: File | string) => {
        const { data, currentScreen } = this.state
        let tempData: State["data"] = { ...data }

        if (validAppData(keyName)) {
            let temp: any = tempData
            temp[`${keyName}`] = value
            tempData = temp
            this.setState({
                data: tempData,
                currentScreen: currentScreen + 1
            })
        }
    }

    handleBack = () => {
        const { currentScreen } = this.state
        this.setState({
            currentScreen: currentScreen - 1
        })
    }

    editDetails = () => {
        this.setState({
            currentScreen: 0
        })
    }

    submitDetails = () => {
        this.props.callApi(publishApp, this.state.data)
    }

    gotoProfile = () => {
        this.props.pushToHistory(ProfilePage)
    }
    render() {
        const { publish } = this.props
        const { currentScreen, data } = this.state
        return (
            <Container>
                {publish && publish.loading && <FullScreenLoader />}
                <Row className={publish && publish.loading ? ` pointer_events_none ` : ``}>
                    <Col lg="3" md="2" ></Col>
                    <Col xs={12}>
                        <Card className="card_center">
                            <Card.Body className="card_body_center">
                                {currentScreen === 0 &&
                                    <CardComponent title={"App name"}
                                        onSubmit={this.setAndHandleNext}
                                        onBack={() => { }}
                                        currentScreen={currentScreen} stateName={APP_NAME} inputValue={data.name} />}
                                {currentScreen === 1 &&
                                    <CardComponent title={"Tagline"}
                                        onSubmit={this.setAndHandleNext}
                                        onBack={this.handleBack}
                                        currentScreen={currentScreen} stateName={APP_TAG_LINE} inputValue={data.tagLine} />}
                                {currentScreen === 2 &&
                                    <CardComponent title={"Description"}
                                        onSubmit={this.setAndHandleNext}
                                        onBack={this.handleBack}
                                        currentScreen={currentScreen} stateName={APP_DESCRIPTION} inputValue={data.description} />}
                                {currentScreen === 3 &&
                                    <CardComponent title={"App icon"}
                                        onSubmit={this.setAndHandleNext}
                                        onBack={this.handleBack}
                                        currentScreen={currentScreen} stateName={APP_ICON} inputValue={data.icon} />}
                                {currentScreen === 4 &&
                                    <CardComponent title={"APK file"}
                                        onSubmit={this.setAndHandleNext}
                                        onBack={this.handleBack}
                                        currentScreen={currentScreen} stateName={APK} inputValue={data.apk} />}
                                {currentScreen === 5 &&
                                    <CardComponent title={"Add images"}
                                        onSubmit={this.setAndHandleNext}
                                        onBack={this.handleBack}
                                        currentScreen={currentScreen} stateName={APP_IMAGES} inputValue={data.images} />}

                                {currentScreen === 6 &&
                                    <AppDetails showButtons={true} appDetails={data} submitDetails={() => { publish.data.transactionHash ? this.gotoProfile() : this.submitDetails() }} editDetails={this.editDetails} isPublished={publish.data.transactionHash ? true : false} />}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="3" md="2"></Col>
                </Row>
            </Container>
        )
    }
}

export default connector(Publish)
