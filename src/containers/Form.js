import React from "react";
import {connect} from 'react-redux';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {getTable, sendPoint, setMessageR, setMessageX, setMessageY, setR, setX, setY} from "../actions/pageActions";
import {Checkbox} from "primereact/checkbox";
import {Result} from "../components/Table";
import {logout} from "../actions/userActions";

class InputField extends React.Component{
    constructor(props){
        super(props);
        this.chooseX = this.chooseX.bind(this);
        this.chooseY = this.chooseY.bind(this);
        this.chooseR = this.chooseR.bind(this);
        this.goFuckingBack = this.goFuckingBack.bind(this);
        this.submitPoint = this.submitPoint.bind(this);
        this.setOffX = this.setOffX.bind(this);
    }

    chooseX(e){
        this.props.setX(e.target.value);
        this.props.setMessageX("");

    }

    chooseY(e){
        this.props.setMessageY("");
        this.props.setY(e.target.value);
    }

    chooseR(e){
        this.props.setMessageR("");
        this.props.setR(e.target.value);
        document.getElementById('r5').checked = 'true';
    }

    sendPoint(x,y,r){
        console.log("X: "+ x + "\nY: " + y + "\nR: " +r);
        let butch = {
            x: x,
            y: y,
            r: r,
        };
        this.props.sendPoint(butch);
    }

    submitPoint(e){
        this.props.setMessageX("");
        this.props.setMessageY("");
        this.props.setMessageR("");
        let flag = true;
        if(this.props.page.x==null){
            this.props.setMessageX("Please choose X");
            flag = false;
        }
        let y = this.props.page.y;
        if(y=="" || y==null){
            this.props.setMessageY("Please enter Y");
            flag = false;
        } else {
            if(!/^(-?\d+)([.,]\d+)?$/.test(y)) {
                this.props.setMessageY("Y must be a number");
            } else {
                y = y.replace(',','.');
                y = Number(y);
                if (!(y > -5 && y < 3)) {
                    flag = false;
                    this.props.setMessageY("Y must be in the range (-5;3)");
                }
            }
        }
        if(this.props.page.r==0){
            flag = false;
            this.props.setMessageR("Please choose R");
        }
        console.log(flag);
        if(flag){
            this.sendPoint(this.props.page.x, this.props.page.y, this.props.page.r)
        }
    }

    goFuckingBack(e){
        this.props.logout()
    }

    setOffX(){
        this.setState({
            cbm3: false,
            cbm2: false,
            cbm1: false,
            cb0: false,
            cb1: false,
            cb2: false,
            cb3: false,
            cb4: false,
            cb5: false,
        })
    }

    render() {
        const {page,style} = this.props;
        return(
            <div className="form" width={ page.pageWidth} style={style.style.formView.block}>
                <br/>
                <Button label={"Logout"} onClick={this.goFuckingBack} style={style.style.formView.logout}/>
                <p style={style.style.formView.p}>Entry field</p>
                <div style={style.style.formView.xField}>
                    <p style={style.style.formView.description}>Please choose X:</p>
                    <table className="inputX" >
                        <tbody>
                        <tr>
                            <td>
                                <Checkbox inputId='cb-3' value={-3} onChange={this.chooseX}style={style.style.formView.checkboxX} checked={page.x == -3 ? true : false}/>
                            </td>
                            <td>
                                <label htmlFor="cb-3" className="cblabel" style={style.style.formView.label}>-3</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox inputId='cb-2' value={-2} onChange={this.chooseX} style={style.style.formView.checkboxX} checked={page.x == -2 ? true : false}/>
                            </td>
                            <td>
                                <label htmlFor="cb-2" className="cblabel" style={style.style.formView.label}>-2</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox inputId='cb-1' value={-1} onChange={this.chooseX} style={style.style.formView.checkboxX} checked={page.x == -1 ? true : false}/>
                            </td>
                            <td>
                                <label htmlFor="cb-1" className="cblabel" style={style.style.formView.label}>-1</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox inputId='cb0' value={0} onChange={this.chooseX} style={style.style.formView.checkboxX} checked={page.x == 0 ? true : false}/>
                            </td>
                            <td>
                                <label htmlFor="cb0" className="cblabel" style={style.style.formView.label}> 0</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox inputId='cb1' value={1} onChange={this.chooseX} style={style.style.formView.checkboxX} checked={page.x == 1 ? true : false}/>
                            </td>
                            <td>
                                <label htmlFor="cb1" className="cblabel" style={style.style.formView.label}> 1</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox inputId='cb2' value={2} onChange={this.chooseX} style={style.style.formView.checkboxX} checked={page.x == 2 ? true : false}/>
                            </td>
                            <td>
                                <label htmlFor="cb2" className="cblabel" style={style.style.formView.label}> 2</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox inputId='cb3' value={3} onChange={this.chooseX}  style={style.style.formView.checkboxX} checked={page.x == 3 ? true : false}/>
                            </td>
                            <td>
                                <label htmlFor="cb3" className="cblabel" style={style.style.formView.label}> 3</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox inputId='cb4' value={4} onChange={this.chooseX} style={style.style.formView.checkboxX} checked={page.x == 4 ? true : false}/>
                            </td>
                            <td>
                                <label htmlFor="cb4" className="cblabel" style={style.style.formView.label}> 4</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox inputId='cb5' value={5} onChange={this.chooseX} style={style.style.formView.checkboxX} checked={page.x == 5 ? true : false}/>
                            </td>
                            <td>
                                <label htmlFor="cb5" className="cblabel" style={style.style.formView.label}> 5</label>

                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className={"messageX"} style={style.style.formView.message}>
                        {page.x == "" ? <br/> : page.messageX}
                    </div>
                </div>

                <div style={style.style.formView.lol}>
                    <p style={style.style.formView.description}>Please enter Y:</p>
                    <InputText maxLength={10} style={style.style.formView.fieldY} onChange={this.chooseY} id={"Y"}/>
                    <div className={"messageY"} style={style.style.formView.message}>
                        {page.y == "" ? <br/> : page.messageY}
                    </div>
                </div>

                <div style={style.style.formView.rad}>
                    <p style={style.style.formView.description}>Please choose R:</p>
                    <div className="enterR">
                        <table >
                            <tbody>
                            <tr>
                                <td>
                                    <Checkbox inputId='r1' value="1" onChange={this.chooseR} style={style.style.formView.checkboxR} checked={page.r == 1 ? true : false}/>
                                </td>
                                <td>
                                    <label htmlFor="r1" style={style.style.formView.labelR} className="cblabel">1</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Checkbox inputId='r2' value="2" onChange={this.chooseR} style={style.style.formView.checkboxR} checked={page.r == 2 ? true : false}/>
                                </td>
                                <td>
                                    <label htmlFor="r2" style={style.style.formView.labelR} className="cblabel">2</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Checkbox inputId='r3' value="3" onChange={this.chooseR} style={style.style.formView.checkboxR} checked={page.r == 3 ? true : false}/>
                                </td>
                                <td>
                                    <label htmlFor="r3" style={style.style.formView.labelR} className="cblabel">3</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Checkbox inputId='r4' checked={page.r == 4 ? true : false} value="4" onChange={this.chooseR} style={style.style.formView.checkboxR} />
                                </td>
                                <td>
                                    <label htmlFor="r4" style={style.style.formView.labelR} className="cblabel">4</label>
                                </td>
                            </tr>
                            <tr >
                                <td>
                                    <Checkbox inputId='r5' value="5"  onChange={this.chooseR} style={style.style.formView.checkboxR} checked={page.r == 5 ? true : false}/>
                                </td>
                                <td>
                                    <label htmlFor="r5" style={style.style.formView.labelR} className="cblabel">5</label>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={"messageR"} style={style.style.formView.message}>
                    {page.messageR == "" ? <br/> : page.messageR}
                    </div>
                </div>
                <Button label="Send" type={"submit"} onClick={this.submitPoint} style={style.style.formView.send} />
                <Result table={page.table} style={style} />
            </div>
        )
    }
}

const mapStateToProps = store => {
     return{
         page: store.page,
         style: store.style
     }
}

const mapDispatchToProps = dispatch => {
    return{
        setR: r => dispatch(setR(r)),
        setX: x => dispatch(setX(x)),
        setY: y => dispatch(setY(y)),
        setMessageX: message => dispatch(setMessageX(message)),
        setMessageY: message => dispatch(setMessageY(message)),
        setMessageR: message => dispatch(setMessageR(message)),
        getTable: () => dispatch(getTable()),
        logout: () => dispatch(logout()),
        sendPoint: butch => dispatch(sendPoint(butch))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(InputField)