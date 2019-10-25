import React from 'react';
import Tablelist from './table';

class List extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount = () => {

    }

    componentDidMount = () => {
        let loginDetails = localStorage.getItem(`loginDetails`);
        if(loginDetails) {
            loginDetails = JSON.parse(loginDetails)
        }
        console.log(loginDetails)
    }

    componentWillUnmount = () => {
        
    }

    render(){
        return(
            <div>
               <Tablelist />
            </div>
        )
    }
}

export default List