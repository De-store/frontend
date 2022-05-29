import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { Container } from 'react-bootstrap'
import { PublishPage } from '../../constants/Routes'
import { HOME_IMAGE } from '../../constants/constants'
import Developers from './Developers'
import Users from './Users'

import { FullScreenLoader } from '../common/Loader/Loader'

const mapStateToProps = (state: any) => ({
    contract: state.contract
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

interface State {
    loading: boolean
}
interface OwnProps {
    callApi: Function,
    pushToHistory: Function
}

type Props = PropsFromRedux & OwnProps

export class Home extends Component<Props, State> {

    state = {
        loading: false
    }

    componentDidMount() { }

    gotoPage = async (path: string) => {
        const { pushToHistory } = this.props
        pushToHistory(path)
    }

    // downloadApk = (url: string) => {
    //     window.open(
    //         url,
    //         '_blank' // <- This is what makes it open in a new window.
    //     );
    // }

    downloadApk = async () => {

        this.setState({
            loading: true
        })
        try {
            // const app: any = process.env.REACT_APP_DE_STORE_APP_IPFS ? process.env.REACT_APP_DE_STORE_APP_IPFS : ""

            // const response: any = await fetch('https://gateway.ipfs.io/ipns/QmYDK8VDTYZYHmww3wBZBiSyGAPdzpxNKEfozmL4SiriMe', {
            //     method: 'GET'
            // })

            const response: any = await fetch("https://slate.host/api/v3/get", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${process.env.REACT_APP_SLATE_API}`,
                },
            })
            if (response.status !== 200)
                throw new Error("Network error  while fetching data, try again later")
            const json: any = await response.json()

            let data: any = json.collections[1].objects[0]

            const apkResponse: any =
                // await fetchFromIPFS(data.cid)
                await fetch(`https://gateway.ipfs.io/ipfs/${data.cid}`, {
                    method: "GET",

                })

            if (apkResponse.status !== 200)
                throw new Error("Network error while fetching the APK, try again later")

            const blob: any = await apkResponse.blob()
            // const blob: any = apkResponse
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
            console.log("ERR ", err)
            alert("Network error, try again later")
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { loading } = this.state
        return (
            <>
                {this.state.loading && <FullScreenLoader />}
                <Container className={`py_40 ${loading ? ' noScroll noClick ' : ''}`}>
                    <h1>DeStore</h1>
                    <img src={HOME_IMAGE} className="App-logo" alt="logo" />
                    <hr className="line-style" id="developers" />
                    <Developers publishApp={() => this.gotoPage(PublishPage)} />
                    <hr className="line-style" id="users" />
                    <Users downloadApp={() => this.downloadApk()} />
                    <hr className="line-style" />
                </Container>
            </>

        )
    }
}

export default connector(Home)
