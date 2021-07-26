import React, { Component } from 'react'
import { connect } from 'react-redux'
import Publish from '../components/Publish/Publish';

export class PublishPage extends Component<any, any> {

    callApi = (action: any, payload: any) => {
        if (payload != null) this.props.sendAction(action, payload);
        else this.props.sendAction(action);
    };

    pushToHistory = (path: string) => {
        this.props.history.push(path)
    }

    render() {
        return (
            <div className="PublishPage">
                <div className="page-component">
                    <Publish callApi={this.callApi} pushToHistory={this.pushToHistory} />
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = (dispatch: Function) => ({
    sendAction: (action: Function, payload?: any) => dispatch(payload ? action(payload) : action())
})

export default connect(mapStateToProps, mapDispatchToProps)(PublishPage)
