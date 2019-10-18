import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import Spinner from '../spinner';
import List from '../list';
import fetchData from '../../actions';
import withUnsplashApiService from '../hoc/withUnsplashApiService';

class ListContainer extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { data, loading, error } = this.props;

    if (loading) {
      return <Spinner/>;
    }

    if (error) {
      return <div>Oops! {error.toString()}</div>;
    }

    return <List data={data}/>;
  }
}

ListContainer.defaultProps = {
  error: null,
};

ListContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ data, loading, error }) => ({
  data,
  loading,
  error,
});

const mapDispatchToProps = (dispatch, { unsplashApiService }) => {
  return bindActionCreators({
    fetchData: fetchData(unsplashApiService),
  }, dispatch);
};

export default compose(withUnsplashApiService(), connect(mapStateToProps, mapDispatchToProps))(ListContainer);
