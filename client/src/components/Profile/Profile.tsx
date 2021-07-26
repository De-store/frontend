import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { getFileData } from '../../modules/actions/Profile/Profile'
import { Col, Container, Row } from 'react-bootstrap';
import { PublishPage } from '../../constants/Routes';
import { FullScreenLoader } from '../common/Loader/Loader';
import AppCard from '../common/AppCard/AppCard';
import { ApiData } from '../../constants/Interfaces';
import { instanceOfAppData } from '../../utils/CheckInterfaceInstance';
import EmptyAppList from '../common/EmptyAppList/EmptyAppList';

const mapStateToProps = (state: any) => ({
    profile: state.profile,
    contract: state.contract
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

interface State {
    apps: Array<ApiData>
}
interface OwnProps {
    callApi: Function,
    pushToHistory: Function
}

type Props = PropsFromRedux & OwnProps

export class Profile extends Component<Props, State> {

    state = {
        apps: []
    }

    componentDidMount() {
        console.log("APPLE ")
        this.props.callApi(getFileData)
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        const { profile: prevProfile, contract: prevContract } = prevProps
        const { profile: thisProfile, contract: thisContract } = this.props
        if (Object.keys(thisContract.contract.instance).length && Object.keys(thisContract.contract.web3).length && !thisContract.loading && prevContract.contract.instance !== thisContract.contract.instance && prevContract.contract.web3 !== thisContract.contract.web3) {
            this.props.callApi(getFileData)
        }
        else if (prevProfile.files.length !== thisProfile.files.length || prevProfile.loading !== thisProfile.loading) {

            let apps: Array<ApiData> = []
            for (let i in thisProfile.files) {
                // const { data } = thisProfile.files[i]
                // let dataNew: ApiData = { ...data.data }
                let dataNew: ApiData = { ...thisProfile.files[i] }
                if (instanceOfAppData(dataNew)) {
                    apps.push(dataNew)
                }
            }
            this.setState({
                apps
            })
        }
    }

    gotoPublishPage = () => {
        this.props.pushToHistory(PublishPage)
    }

    render() {
        const { profile } = this.props
        const { apps } = this.state

        return (
            <Container>
                {profile && profile.loading && <FullScreenLoader />}
                {
                    profile && profile.loading ? <> </> :
                        apps.length ?
                            <Row className={profile && profile.loading ? ` pointer_events_none ` : ``}>
                                {apps.map((value: any, key: number) => {
                                    return (
                                        <Col key={key} lg={6}>
                                            <AppCard data={value} />
                                        </Col>
                                    )
                                })
                                }
                            </Row> :
                            <Row className=" w_100 d-flex justify_content_center slign-items-center">
                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <EmptyAppList gotoPublish={() => this.gotoPublishPage()} />
                                </Col>
                            </Row>
                }
            </Container>
        )
    }
}

export default connector(Profile)
