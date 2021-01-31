// import React from 'react';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

// const MyComponent = ({name, favorityNumber, children}) => {
//     // const {name, children} = props;
//     return (
//     <div>안녕하세요. 제이름은 {name} 입니다 <br/>
//     children  값은 {children}
//     입니다.<br/>
//     제가 가장 좋아하는 숫자는 {favorityNumber} 입니다.
//     </div>
//     );
// };

/* Class형 컴포넌트에서 props 사용 */
class MyComponent extends Component{
    //props 기본 값 설정(Class 내부에서 설정)
    static defaultProps = {
        name : "기본 이름",
        favorityNumber : 50
    }

    static propTypes = {
        name : PropTypes.string,
        favorityNumber: PropTypes.number.isRequired
    }
    
    render(){
        const {name, favorityNumber, children} = this.props; //비구조화 할당
        return(
            <div>안녕하세요. 제이름은 {name} 입니다 <br/>
            children  값은 {children}
            입니다.<br/>
            제가 가장 좋아하는 숫자는 {favorityNumber} 입니다.
            </div>
        )
    }
}

//props 기본 값 설정(Class 외부에서 설정)
// MyComponent.defaultProps = {
//     name : "기본 이름",
//     favorityNumber : 50
// }

// MyComponent.propTypes = {
//     name : PropTypes.string,
//     favorityNumber: PropTypes.number.isRequired
// }


/* 모듈 내보내기 */
export default MyComponent;