import React from 'react';

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
                List........
                <ul>
                    <li>
                    {/* <Link to="/list">List</Link> */}
                    </li>
                </ul>
            </div>
        )
    }
}

export default List