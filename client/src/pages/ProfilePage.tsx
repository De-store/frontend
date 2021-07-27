import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile/Profile'
import { emptyContract } from '../constants/EmptyInterfaces';
import { setContract } from '../modules/actions/SetContract';

export class ProfilePage extends Component<any, any> {

    componentDidMount() {
        const { contract, setNewContract } = this.props;
        if (contract.contract === emptyContract && !contract.loading)
            setNewContract()
    }

    callApi = (action: any, payload: any) => {
        if (payload != null) this.props.sendAction(action, payload);
        else this.props.sendAction(action);
    };

    pushToHistory = (path: string) => {
        this.props.history.push(path)
    }

    render() {
        return (
            <div className="ProfilePage custom-scrollbar">
                <div className="page-component">
                    <Profile callApi={this.callApi} pushToHistory={this.pushToHistory} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    contract: state.contract
})

const mapDispatchToProps = (dispatch: Function) => ({
    sendAction: (action: Function, payload?: any) => dispatch(payload ? action(payload) : action()),
    setNewContract: () => dispatch(setContract())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
