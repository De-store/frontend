import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { ApiData, PublishAppData } from '../../../constants/Interfaces';
import AppDetails from './AppDetails';

interface State { }

interface Props {
    data: ApiData
}

export class Home extends Component<Props, State> {

    state = {}

    componentDidMount() { }

    setData = (): PublishAppData => {
        const { data } = this.props

        let publishData: PublishAppData = data

        return publishData

    }

    render() {

        const appData: PublishAppData = this.setData()
        return (
            <Card className="my_10 border radius_8">
                <Card.Body>
                    <AppDetails
                        showButtons={false}
                        appDetails={appData}
                        submitDetails={() => { }}
                        editDetails={() => { }} />
                </Card.Body>
            </Card>
        )
    }
}

export default Home
