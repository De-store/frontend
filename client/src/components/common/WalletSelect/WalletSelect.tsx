import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { METAMASK_WALLET, PORTIS_WALLET } from '../../../constants/constants'

interface State { }
interface Props {
    show: boolean,
    chooseWallet: Function
}

export class WalletSelect extends Component<Props, State> {
    render() {
        const { show, chooseWallet } = this.props
        return (
            <Modal show={show} onHide={() => { chooseWallet("") }}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Button variant="secondary" onClick={() => { chooseWallet(PORTIS_WALLET) }}>PORTIS</Button>
                    <Button variant="primary" onClick={() => { chooseWallet(METAMASK_WALLET) }}>META MASK</Button>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { chooseWallet("") }}>Close</Button>
                    <Button variant="primary" onClick={() => { chooseWallet("") }}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default WalletSelect
