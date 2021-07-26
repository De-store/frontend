import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

import './EmptyAppList.css'

interface State { }
interface Prop {
    gotoPublish: Function
}

export class EmptyAppList extends Component<Prop, State> {
    render() {
        return (
            <Card className="my_10 border radius_8 text_grey_700">
                <Card.Body>
                    <div className="fs_30 font-weight-900 py_15">
                        No app published by you.
                    </div>
                    <hr className="empty-card-line-style my_10"/>
                    <div className="font-weight-500 text-left p_10">
                        <span className="publish-text text_blue_700 cursor-pointer" onClick={() => this.props.gotoPublish()}>Publish </span>your first app and show it to your friends all around the globe.
                        </div>

                </Card.Body>
            </Card>
        )
    }
}

export default EmptyAppList
