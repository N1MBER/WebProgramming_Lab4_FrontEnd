import React,{Component} from "react";
import {connect} from 'react-redux';
import {Header} from "../components/Header";
import {Clock} from "../components/Clock";
import Login from "./Login";
import {Sign} from "../components/Sign";
import {Redirect} from "react-router";

class FirstPage extends Component{

    render() {
        const {header,style,page,user} = this.props;
        return(
            <div className="firstPage">
                {user.isLogin && <Redirect to={"/~s250651/main"}/>}
                <Header
                    topic={header.topic}
                    firstName={header.firstName}
                    secondName={header.secondName}
                    variant={header.variant}
                    style={style}/>
                <Clock canvasSize={page.clockSiz3} style={style}/>
                <Login style={style}/>
                <Sign style={style} />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        header: store.header,
        user: store.user,
        style: store.style,
        page: store.page
    }
};

export default connect(mapStateToProps)(FirstPage)
