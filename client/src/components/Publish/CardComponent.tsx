import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import IonIcon from '@reacticons/ionicons';
import { APP_ICON, APK, APP_IMAGES } from "../../constants/constants"

import "./Publish.css";
import { Form } from 'react-bootstrap';
import { emptyFile } from '../../constants/EmptyInterfaces';
import { ApiDataFile } from '../../constants/Interfaces';

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>


interface State {
    value: File | string | ApiDataFile
}
interface OwnProps {
    onSubmit: Function
    onBack: Function
    title: string
    currentScreen: number
    inputValue:  File | string | ApiDataFile
    stateName: string
}

type Props = PropsFromRedux & OwnProps

export class CardComponent extends Component<Props, State> {

    state = {
        value: ""
    }

    componentDidMount() {
        const { inputValue } = this.props
        this.setState({
            value: inputValue
        })
    }


    handleInput = (e: React.ChangeEvent<HTMLInputElement & EventTarget>) => {
        e.preventDefault()
        const value = e.target.value
        const files = e.target.files

        this.setState({
            value: files ? files[0] : value
        })
    }

    render() {
        const { onSubmit, onBack, title, currentScreen, stateName } = this.props
        const { value } = this.state
        let v: any = value
        return (
            <>
                <div className="input-block">
                    <div className="label">{title}</div>
                    <div className="input-control">

                        {currentScreen === 3 && stateName === APP_ICON ?
                            <Form.File
                                id="custom-file"
                                label={v && v !== "" && v !== emptyFile ? typeof (v) === 'object' ? `${v.name}` : `${v}` : " Choose file "}
                                custom
                                onChange={this.handleInput}
                                accept=".jpg,.gif,.png"
                            />
                            // <div className="custom-file">
                            //     <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={this.handleInput} />
                            //     <label className="custom-file-label" >{value && value !== "" ? `${value}` : " Choose file "}</label>
                            // </div>
                            :
                            (currentScreen === 4 && stateName === APK ?
                                <Form.File
                                    id="custom-file"
                                    label={v && v !== "" ? typeof (v) === 'object' ? `${v.name}` : `${v}` : " Choose file "}
                                    custom
                                    onChange={this.handleInput}
                                    accept=".apk"
                                />
                                // <div className="custom-file">
                                //     <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={this.handleInput} />
                                //     <label className="custom-file-label" >{value && value !== "" ? `${value}` : " Choose file "}</label>
                                // </div> 
                                :
                                (currentScreen === 5 && stateName === APP_IMAGES ?
                                    <Form.File
                                        id="custom-file"
                                        label={v && v !== "" ? typeof (v) === 'object' ? `${v.name}` : `${v}` : " Choose file "}
                                        custom
                                        onChange={this.handleInput}
                                        accept=".jpg,.gif,.png"
                                    />
                                    // <div className="custom-file">
                                    //     <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={this.handleInput} />
                                    //     <label className="custom-file-label" >{value && value !== "" ? `${value}` : " Choose file "}</label>
                                    // </div> 
                                    : <input type="text" className="required" onChange={this.handleInput} value={value}></input>
                                )
                            )
                        }
                    </div>
                </div>

                {/* <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Upload</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={this.handleInput} />
                        <label className="custom-file-label" >{value && value !== "" ? `${value}` : " Choose file "}</label>
                    </div>
                </div> */}

                <div className="next-buttom-block">
                    <p className={`cursor-pointer  ${value && value !== "" && v !== emptyFile ? " active " : " disabled "}`} onClick={() => value && value !== "" && v !== emptyFile ? onSubmit(stateName, value) : {}}>Submit&nbsp;<span>
                        < IonIcon name="chevron-forward" /></span>
                    </p>&nbsp;&nbsp;&nbsp;&nbsp;

                    {currentScreen ?
                        <p className={`pr_10 cursor-pointer active `} onClick={() => onBack()}>
                            <span>< IonIcon name="chevron-back" /></span>&nbsp;Back</p> : <></>}

                </div>
            </>
        )
    }
}

export default connector(CardComponent)
