import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css'
import { Header } from './components/common/Header/Header';
// import WalletSelect from './components/common/WalletSelect/WalletSelect';
import * as ROUTES from './constants/Routes';
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage';
import PublishPage from './pages/PublishPage';

import { completeSelectWallet } from '../src/modules/actions/WalletSelect'

class RoutingComponent extends Component<any, any> {
    state = {
        isOnline: true,
    }

    networkListener: any
    unreadMessageFetchedFlag = false

    componentDidMount() {
        console.log("WALLET ", this.props.wallet)
    }

    componentWillUnmount() {
        if (this.networkListener) this.networkListener.remove()
        this.unreadMessageFetchedFlag = false
    }

    componentDidUpdate(prevProps: any, prevState: any) { }

    walletUpdate = (wallet: string = "") => {
        console.log("WAALET ", wallet)
        this.props.chooseWallet(wallet)
    }

    render() {
        // const { wallet } = this.props
        return (
            <div className="App">
                <Header />
                {/* <WalletSelect show={wallet.selectingWallet} chooseWallet={this.walletUpdate}/> */}
                <Switch >
                    <Route exact path={ROUTES.HomePage} component={HomePage} />
                    <Route exact path={ROUTES.PublishPage} component={PublishPage} />
                    <Route exact path={ROUTES.ProfilePage} component={ProfilePage} />
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Function) => ({
    chooseWallet: (wallet: string) => dispatch(completeSelectWallet(wallet))
})

const mapStateToProps = (state: any) => ({
    wallet: state.wallet
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RoutingComponent))
