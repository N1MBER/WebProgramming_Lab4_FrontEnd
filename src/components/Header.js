import React from 'react'

export class Header extends React.Component{
    render() {
        const {topic,firstName,secondName,variant,style} = this.props;
        return(
            <table className="header" width={"100%"} style={style.style.header.table} >
                <tbody>
                <tr>
                    <td className={"info"} width={"50%"} style={style.style.header.info}>
                        <p>Student: {secondName + " " + firstName} </p>
                        <p>Variant: {variant}</p>
                    </td>
                    <td className={"topic"} width={"50%"} style={style.style.header.topic}>
                        {topic}
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}
// style={style.style.header.main}
// defaultStatus