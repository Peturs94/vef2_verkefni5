import React, { Component } from 'react'
import Helmet from 'react-helmet';

class NotFound extends Component {
    render () {
        return (
            <div>
                <Helmet title="Síða fannst ekki" />
                <p>Síða fannst ekki</p>
            </div>
        )
    }
}

export default NotFound;
