import React from 'react';
import { flex } from 'fmihel-browser-lib';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink as Link,
} from 'react-router-dom';

import Row from './bs/Row.jsx';
import Col from './bs/Col.jsx';
import Container from './bs/Container.jsx';
import 'bootstrap';
import pages from './pages';

export class App extends React.Component {
    constructor(p) {
        super(p);
    }

    render() {
        return (
            <Router>
                <Container>
                    <Row>
                        <Col>
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <a className="navbar-brand" href="#">Navbar</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                        <li>
                                            <Link to ="/" className="nav-link" >Main</Link>
                                        </li>
                                        <li>
                                            <Link to ="/page1" className="nav-link" >Page1</Link>
                                        </li>
                                        <li>
                                            <Link to ="/page2" className="nav-link" >Page2</Link>
                                        </li>
                                    </ul>

                                </div>
                            </nav>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Switch>
                                <Route exact path="/" component={pages.Main} />
                                <Route path="/page1" component={pages.Page1} />
                                <Route path="/page2" component={pages.Page2} />

                            </Switch>

                        </Col>
                    </Row>
                </Container>
            </Router>
        );
    }
}
