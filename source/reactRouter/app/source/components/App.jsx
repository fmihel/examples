import React from 'react';
import { flex } from 'fmihel-lib';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink as Link,
} from 'react-router-dom';
import pages from './pages';


export class App extends React.Component {
    constructor(p) {
        super(p);
    }


    render() {
        return (
            <Router>
                <div id='app' style={{ ...flex('stretch vert') }}>

                    <div id="panel" style={{ ...flex('fixed'), padding: 5 }} className="box">
                        <nav>
                            <Link to ="/">Main</Link>
                            <Link to ="/page1">Page1</Link>
                            <Link to ="/page2">Page2</Link>
                        </nav>
                    </div>

                    <div id="content" style={{ ...flex('stretch'), padding: 5 }} className = "box">
                        <Switch>
                            <Route exact path="/" component={pages.Main} />
                            <Route path="/page1" component={pages.Page1} />
                            <Route path="/page2" component={pages.Page2} />

                        </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}
