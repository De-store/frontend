import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { Container } from 'react-bootstrap'
import { PublishPage } from '../../constants/Routes'
import {HOME_IMAGE} from '../../constants/constants'
import Developers from './Developers'
import Users from './Users'

import { createIpfsUrl } from '../../utils/IpfsUrl'

const mapStateToProps = (state: any) => ({
    contract: state.contract
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

interface State { }
interface OwnProps {
    callApi: Function,
    pushToHistory: Function
}

type Props = PropsFromRedux & OwnProps

export class Home extends Component<Props, State> {

    componentDidMount() {
        console.log("INSIDE DID MOUNT ")
    }

    gotoPage = async (path: string) => {
        const { pushToHistory } = this.props
        // if (contract.contract === emptyContract) {

        // } else {
        //     const acc = await contract.contract.web3.eth.getAccounts()
        //     console.log("acc ", acc)
        pushToHistory(path)
        // }
    }

    downloadApk = (url: string) => {
        window.open(
            url,
            '_blank' // <- This is what makes it open in a new window.
        );
    }

    render() {
        const app: any = process.env.REACT_APP_DE_STORE_APP_IPFS ? process.env.REACT_APP_DE_STORE_APP_IPFS : ""
        return (
            <Container className="py_40">
                <h1>DeStore</h1>
                <img src={HOME_IMAGE} className="App-logo" alt="logo" />
                <hr className="line-style" id="developers"/>
                <Developers publishApp={() => this.gotoPage(PublishPage)} />
                <hr className="line-style" id="users"/>
                <Users downloadApp={() => this.downloadApk(createIpfsUrl(app))} />
                <hr className="line-style"/>
            </Container>

        )
    }
}

export default connector(Home)
