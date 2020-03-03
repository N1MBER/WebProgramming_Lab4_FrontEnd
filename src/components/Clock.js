import React from "react";

export class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.newTime(),
            10
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    newTime(){
        this.setState({
            date: new Date()
        });
        this.drawClock();
    }

    drawClock() {
        const clock = this.refs.canvas.getContext('2d');

        let width = this.refs.canvas.width;
        let height = this.refs.canvas.height;
        this.setState({
            date: new Date()
        });
        // let plot = document.getElementById("areas");
        // let clock = plot.getContext('2d');
        // const clock = this.refs.canvas.getContext('2d');
        let now = this.state.date;
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let miliSeconds = now.getMilliseconds();
        clock.clearRect(0,0,width,height);
        clock.fillStyle = "#101010"
        clock.fillRect(0,0,width,height);
        clock.fillStyle="#FFF";
        clock.strokeStyle="#fff";
        clock.lineWidth = width*0.03;
        //=========
        // MINUTES
        //=========
        clock.beginPath();
        clock.arc( width/2, height/2, 10*width/25, 3*Math.PI/2, 3*Math.PI/2 + (hours+minutes/60)*Math.PI/12 );
        clock.stroke();
        //=========
        // SECONDS
        //=========
        clock.lineWidth = width*0.02;
        clock.beginPath();
        clock.arc( width/2, height/2, 9*width/25, 3*Math.PI/2, 3*Math.PI/2 + (minutes+seconds/60)*Math.PI/30 );
        clock.stroke();
        //=======
        // HOURS
        //=======
        clock.lineWidth = 0.01*width;
        clock.beginPath();
        clock.arc( width/2, height/2, 8*width/25, 3*Math.PI/2, 3*Math.PI/2 + (seconds+ miliSeconds/1000)*Math.PI/30 );
        clock.stroke();
        // clock.font = "30px Colibri bold white";
        clock.strokeStyle = "#fff";
        clock.font = 3*width/50 + "px Arial";
        // clock.font="Arial ";
        clock.fillText( hours + ":" + minutes  +":" + seconds,19*width/50,26*width/50);
        // clock.fillText( hours + ":" + minutes  +":" + seconds,19*width/50,height/2);
    }

    render() {
        const {canvasSize, style} = this.props
        return(
            <canvas ref="canvas" style={style} className={"clockCanvas"} style={style.style.clock} width={canvasSize} height={canvasSize}/>
        )

    }
}

//=========================================
// That's a my old code for another project
//=========================================
// let canvas;
//
// $(document).ready(function() {
//     drawClock();
//     setInterval(function () {
//         drawClock();
//     },50);
//     // for (let j=37.5;j<=412.5;j+=37.5){
//     //     context.moveTo(j,217);
//     //     context.lineTo(j,234);
//     //     context.moveTo(217,j);
//     //     context.lineTo(234,j);
//     // }
//     // context.stroke();
//     // context.font = " bold 20px Arial black";
//     // context.fillText("x",435,255);
//     // context.fillText("y",245,15);
//     //
//     // context.stroke(255);
//
//
// });
//
// function drawClock() {
//     let plot = document.getElementById("areas");
//     let clock = plot.getContext('2d');
//     let now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let miliSeconds = now.getMilliseconds();
//     clock.clearRect(0,0,500,500);
//     clock.fillStyle="#FFF";
//     clock.strokeStyle="#fff";
//     clock.lineWidth = 15;
//     clock.beginPath();
//     clock.arc( 250, 250, 200, 3*Math.PI/2, 3*Math.PI/2 + (hours+minutes/60)*Math.PI/12 );
//     clock.stroke();
//     // MINUTES
//     clock.lineWidth = 10;
//     clock.beginPath();
//     clock.arc( 250, 250, 180, 3*Math.PI/2, 3*Math.PI/2 + (minutes+seconds/60)*Math.PI/30 );
//     clock.stroke();
//
//     // SECONDS
//     clock.lineWidth = 5;
//     clock.beginPath();
//     clock.arc( 250, 250, 160, 3*Math.PI/2, 3*Math.PI/2 + (seconds+ miliSeconds/1000)*Math.PI/30 );
//     clock.stroke();
//     // clock.font = "30px Colibri bold white";
//     clock.font="30px Arial ";
//     clock.fillText( hours + ":" + minutes  +":" + seconds,190,260);
// }
//
//
//
//
