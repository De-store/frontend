import React, { Component } from 'react'
import { Button, Modal, Row, Col, Image } from 'react-bootstrap'
import IonIcon from '@reacticons/ionicons';
import { METAMASK_WALLET, PORTIS_WALLET, PORTIS_WALLET_IMAGE, METAMASK_WALLET_IMAGE } from '../../../constants/constants'

import './WalletSelect.css'

interface State { }
interface Props {
    show: boolean,
    chooseWallet: Function,
    closeWalletSelect: Function,
    logoutWallet: Function
}

export class WalletSelect extends Component<Props, State> {
    render() {
        const { show, chooseWallet, closeWalletSelect, logoutWallet } = this.props
        return (
            <Modal show={show} onHide={() => { closeWalletSelect() }} backdrop='static' contentClassName="wallet-select-modal">
                <Modal.Header className="text-center justify_content_center">
                    <Modal.Title className="text-center">
                        Select wallet
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col xs={6}>
                            <div className="d-flex flex-column justify_content_center align-items-center p_20 border border_blue_900 radius_8 cursor-pointer wallet-tile" onClick={() => { chooseWallet(PORTIS_WALLET) }}>
                                <Image src={PORTIS_WALLET_IMAGE} className="w_50" />
                                <Button variant="secondary" className="w_100 fs_15 font-weight-700 p_5 my_5" disabled>Portis</Button>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className="d-flex flex-column justify_content_center align-items-center p_20 border border_blue_900 radius_8 cursor-pointer wallet-tile" onClick={() => { chooseWallet(METAMASK_WALLET) }}>
                                <Image src={METAMASK_WALLET_IMAGE} className="w_50" />
                                <Button variant="secondary" className="w_100 fs_15 font-weight-700 p_5 my_5" disabled>Metamask</Button>
                            </div>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer className="w_100 justify_content_center">
                <Button variant="primary" className="w_25 fs_15 font-weight-700 p_5 my_5" onClick={() => { closeWalletSelect() }}>
                < IonIcon name="close-outline" />&nbsp;Close
                    </Button>
                <Button variant="primary" className="w_25 fs_15 font-weight-700 p_5 my_5" onClick={() => { logoutWallet() }}>
                < IonIcon name="log-out-outline" />&nbsp;Logout
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default WalletSelect
