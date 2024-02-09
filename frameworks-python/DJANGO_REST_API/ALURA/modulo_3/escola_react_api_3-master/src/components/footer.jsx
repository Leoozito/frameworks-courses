import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <footer className="page-footer font-small teal pt-4">
                    <div className="col-md-12 mt-md-2 mt-3">
                        <h6 className="text-uppercase font-weight-bold">Django Rest Framework/React Js</h6>
                        <p>Consumindo uma API desenvolvida em Django Rest Framework</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;