import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard/Dashboard';
import {fetchProduct} from '../../service/product'

class DashboardContainer extends Component {

    render() {
        return (
            <Dashboard
                {...this.props}
            />
        );
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({                             // middle products is form root reducer
    products : state.products.products,
    error: state.products.error,
    pending: state.products.pending
  });

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
       action: fetchProduct(dispatch) 
      };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DashboardContainer);
