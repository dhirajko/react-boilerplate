import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

// Import custom components
import RegisterPage from '../../components/Auth/RegisterPage';


class RegisterPageContainer extends Component {
    register(){
        
    }

    render() {
        return (
            <RegisterPage
                {...this.props}
            />
        );
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        goToDashboard: () => dispatch(push({ pathname: '/dashboard' })),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegisterPageContainer);
