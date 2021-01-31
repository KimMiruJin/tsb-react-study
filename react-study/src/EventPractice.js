import React, { Component, useState } from 'react';

/* 함수형 컴포넌트 구현 */
const EventPractice = () => {
    const [form, setForm] = useState({
        username : '',
        message : ''
    });
    const [username,message] = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }

    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onhandleUserName = e => setUsername(e.target.value);
    // const onhandleMessage = e => setMessage(e.target.value);

    // const onClick = () => {
    //     alert(username + ":" + message);
    //     setUsername('');
    //     setMessage('');
    // }
    const onClick = () => {
        alert(username + ":" + message);
        setForm({
            username : '',
            message : ''
        });
    };

    const onKeyPress = e => {
        if(e.key === "Enter"){
            onClick();
        }
    };

        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자 명"
                    value={this.state.username}
                    // onChange = {this.handleChange}
                    onChange = {onChange}
                    />
                <input
                    type="test"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    // onChange={this.handleChange}
                    onChange = {onChange}
                    // onKeyPress={this.handleKeyPress}
                    onKeyPress={onKeyPress}
                    />
                <button
                    // onClick = {this.handleClick}
                    onClick = {onClick}

                >
                    확인
                </button>
            </div>
        )
}


/* Class형 컴포넌트 구현 */
// class EventPractice extends Component {
//     state = {
//         username : '',
//         message:''
//     }

//     handleChange = (e) =>{
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//     }

//     handleClick = () => {
//         alert(this.state.username + ":" + this.state.message);
//         this.setState({
//             username : '',
//             message : ''
//         });
//     }

//     handleKeyPress = (e) =>{
//         if(e.key === "Enter"){
//             this.handleClick();
//         }
//     }

//     render(){
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="사용자 명"
//                     value={this.state.username}
//                     onChange = {this.handleChange}
//                     />
//                 <input
//                     type="test"
//                     name="message"
//                     placeholder="아무거나 입력해보세요"
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                     />
//                 <button
//                     onClick = {this.handleClick}
//                 >
//                     확인
//                 </button>
//             </div>
//         )
//     }
// }

export default EventPractice;