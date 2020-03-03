import React from 'react';
import {connect} from 'react-redux';
import {setMessageR,sendPoint} from "../actions/pageActions";

class Canvas extends React.Component{
    constructor(props){
        super(props);
        this.clickCanvas = this.clickCanvas.bind(this);
    }

    drawCanvas(){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        drawBase(ctx,this.props.page.r,this.refs.canvas.width);
        makeDots(ctx,this.props.page.table,this.props.page.r, this.refs.canvas.width)

    }

    sendPoint(x,y,r){
        console.log("X: "+ x + "\nY: " + y + "\nR: " +r);
        let butch = {
            x: x,
            y: y,
            r: r
        };
        this.props.sendPoint(butch);
    }

    componentDidMount() {
        this.drawCanvas();
    }

    componentDidUpdate() {
        this.drawCanvas();
    }

    clickCanvas(e){
        this.props.setMessageR("");
        if (this.props.page.r === 0){
            this.props.setMessageR('Please choose R');
        }else {
            let width = this.refs.canvas.width;
            let r = this.props.page.r;
            let x = ((e.pageX - this.props.page.mL)-width/2)/(width/12);
            // let x = (e.offsetX - width/2)/(width/12);
            let y = -((e.pageY-this.props.page.mT)-width/2)/(width/12);
            // let y = -(e.offsetY - width/2)/(width/12);
            // console.log("X: "+x+ "\nY: " + y +"\n R:" +r)
            this.sendPoint(x,y,r);
        }
    }


    render() {
        const {style,page} = this.props;
        return(
            <div>
                <canvas ref='canvas' onClick={this.clickCanvas} width={page.canvasWidth} height={page.canvasWidth} style={style.style.canvas}/>
            </div>
        )
    }
}

function drawBase(ctx,R,width){
    R=width*R/12;
    // console.log("Draw...");
    ctx.lineWidth = 2/450*width;
    ctx.fillStyle = "rgba(255,255,255,1)"
    // ctx.fillStyle = "#FF0";

    ctx.fillRect(0,0,width,width);

    ctx.fillStyle="#6c4480";
    ctx.fillRect(width/2-R/2,width/2-R,R/2,R);

    ctx.beginPath();
    ctx.arc(width/2+1,width/2+1,R/2,Math.PI*0,Math.PI*0.5,false);
    ctx.lineTo(width/2+1,width/2+1);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(width/2 +0.5,width/2+1);
    ctx.lineTo(width/2 +0.5 +R/2,width/2+1);
    ctx.lineTo(width/2+0.5,width/2+1-R/2);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(width/2+1,width);
    ctx.lineTo(width/2+1,0);
    ctx.moveTo(22*width/45,width/30);
    ctx.lineTo(width/2+1,0);
    ctx.lineTo(77*width/150,width/30);

    ctx.moveTo(0,width/2+1);
    ctx.lineTo(width,width/2+1);
    ctx.moveTo(29*width/30,22*width/45);
    ctx.lineTo(width,width/2+1);
    ctx.lineTo(29*width/30,77*width/150);
    for (let i=width/12; i<=(11*width/12);i+=width/24){
        ctx.moveTo(i,22*width/45);
        ctx.lineTo(i,77*width/150);
        ctx.moveTo(22*width/45,i);
        ctx.lineTo(77*width/150,i);
    }
    for (let j=width/12;j<=(11*width/12);j+=width/12){
        ctx.moveTo(j,217*width/450);
        ctx.lineTo(j,234*width/450);
        ctx.moveTo(217*width/450,j);
        ctx.lineTo(234*width/450,j);
    }
    ctx.stroke();
    ctx.font = 40/450*width;
    ctx.font = " bold Arial black";
    ctx.fillText("x",11*width/12,17*width/30);
    ctx.fillText("y",49*width/90,width/30);
}

function makeDots(ctx, table, r, width) {
    // console.log("Draw points")
    for(const dot of table){

        let flag = false;
        if(dot.x>=0 && dot.y>=0){
           flag =dot.y <= -dot.x + r/2;
        }
        if(dot.x>=0 && dot.y<=0){
            flag = Math.pow(dot.x, 2) + Math.pow(dot.y,2) <= Math.pow(r/2, 2);
        }
        if(dot.x<=0 && dot.y>=0){
            flag = -dot.x<=r/2 && dot.y<=r;
        }
        // console.log("point" + flag)
        if (flag){
            paintPoint(ctx,Number(dot.x),Number(dot.y),'pink',width);
        }
        else
            paintPoint(ctx,Number(dot.x),Number(dot.y),'#2A2A2A',width);
    }
}


function paintPoint(ctx, x, y, color, width){
    // console.log("suka")
    ctx.fillStyle = color;
    let xPoint = x*width/12 + width/2;
    let yPoint = -y*width/12+width/2;
    // console.log(xPoint + " " + yPoint + " " + width)
    ctx.beginPath();
    ctx.arc(xPoint, yPoint, 3, 0, Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
}

const  mapStateToProps = store =>{
    return{
        page: store.page,
        style: store.style
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setMessageR: messageR => dispatch(setMessageR(messageR)),
        sendPoint: butch => dispatch(sendPoint(butch))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Canvas)