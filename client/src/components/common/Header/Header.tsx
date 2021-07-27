import React from "react";
import { Container, Row, Col, Nav, Navbar, Button, OverlayTrigger, Tooltip } from "react-bootstrap";


import { PORTIS_WALLET, METAMASK_WALLET, METAMASK_WALLET_IMAGE, PORTIS_WALLET_IMAGE } from '../../../constants/constants'

import "./Header.css"
import { useDispatch, useSelector } from "react-redux";
import { selectWallet } from "../../../modules/actions/SetContract";

interface P {
  wallet: string
}

export const Header: React.FC<P> = (props) => {

  const wallet: string = props.wallet

  const contract = useSelector((state: any) => state.contract)

  const dispatch = useDispatch()

  const changeWallet = () => {
    dispatch(selectWallet())
  }

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props} className="p_10">
      <Container>
        <Row>
          <Col >
            <div className="fs_20 font-weight-700 m_10">
              {contract.contract.accounts}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="fs_15 font-weight-700 p_20 m_10" variant="primary" onClick={changeWallet}>Change wallet</Button>
          </Col>
        </Row>
      </Container>
    </Tooltip>
  );


  return (
    <Navbar bg="light" expand="sm" sticky="top">
      <Navbar.Brand href="/">DeStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#developers">Developers</Nav.Link>
          <Nav.Link href="/#users">Users</Nav.Link>
          <Nav.Link href="/profile">Your Apps</Nav.Link>
          <Nav.Link>
            {
              !wallet || wallet === "" ?
                <div className="header-no-wallet-select" onClick={changeWallet}></div>
                :
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 5000 }}
                  overlay={renderTooltip}
                >
                  <img src={wallet === PORTIS_WALLET ? PORTIS_WALLET_IMAGE : wallet === METAMASK_WALLET ? METAMASK_WALLET_IMAGE : ''} width="30" height="30" className={`d-inline-block align-top ${wallet === '' ? 'display_none' : ''}`} alt="" />
                </OverlayTrigger>
            }
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
