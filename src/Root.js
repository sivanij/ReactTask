import React from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import App from './App';
import List from './List';

class Root extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Router>
                <div>
                    <Route path={`/`} exact render={App} />
                    <Switch>
                        <Route path={`/list`}>
                            <List />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Root