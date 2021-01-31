import React, {Component} from 'react'

class Counter extends Component{
    //state 초기값을 지정하기위해 constructor을 사용하여 초기값 지정
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         //state의 초깃값 설정
    //         number : 0,
    //         fixedNumber : 0
    //     }
    // }
    //state 초기값을 지정하기위해 constructor을 사용하지 않고 초기값 지정
    state = {
        number :0,
        fixedNumber:0
    }
    render(){
        const {number, fixedNumber} = this.state;
        return(
            <div>
                <h1>{number}</h1>
                <h1>{fixedNumber}</h1>
                <button
                // onClick = {()=>{
                //     this.setState({number: number + 1});
                //     this.setState({number: this.state.number + 1});
                // }}

                onClick={()=>{
                    this.setState({ 
                        number: number + 1
                    },
                    ()=>{
                        console.log("방금 setState가 호출되었습니다.");
                        console.log(this.state);
                    }
                    );
                }}
                >
                +1
                </button>
            </div>
        )
    }
}

export default Counter;