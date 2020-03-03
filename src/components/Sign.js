import React from "react";

export class Sign extends React.Component{
    render() {
        const {style} = this.props;
        return(
            <p style={style.style.sign}>Designed by N1MBER in Saint-Petersburg</p>
        )
    }
}