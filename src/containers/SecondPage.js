import React from "react";
import {Header} from "../components/Header";
import Canvas from "./Canvas";
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {
    getTable,
    setMessageR,
    setMessageX,
    setMessageY,
    setR,
    setX,
    setY
} from "../actions/pageActions";
import {logout} from "../actions/userActions";
import InputField from "./Form";
import {Sign} from "../components/Sign";



class SecondPage extends React.Component{
    constructor(props){
        super(props);
        this.props.setMessageX("");
        this.props.setMessageY("");
        this.props.setMessageR("");
        this.props.setX(null);
        this.props.setY(null);
        this.props.setR(0);
    }


    getTable(){
        this.props.getTable();
    }

    componentDidMount() {
        this.getTable()
    }

    render() {
        const {header,style,page,user} = this.props;
        return(
            <div>
                {/*{!user.isLogin && <Redirect to={"/~s250651/"}/>}*/}
                <Header
                    topic={header.topic}
                    firstName={header.firstName}
                    secondName={header.secondName}
                    variant={header.variant}
                    style={style}/>
                    <Canvas />
                    <InputField />
                <Sign style={style} />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        header: store.header,
        page: store.page,
        style: store.style,
        user: store.user,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(logout()),
        setR: r => dispatch(setR(r)),
        setX: x => dispatch(setX(x)),
        setY: y => dispatch(setY(y)),
        setMessageR: messageR => dispatch(setMessageR(messageR)),
        setMessageX: messageX => dispatch(setMessageX(messageX)),
        setMessageY: messageY => dispatch(setMessageY(messageY)),
        getTable: () => dispatch(getTable()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SecondPage)

