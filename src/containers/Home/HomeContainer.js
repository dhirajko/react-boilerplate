import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Home from '../../components/Home';

export class HomeContainer extends Component {

    render() {
        return (
            <Home
                {...this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeContainer);
