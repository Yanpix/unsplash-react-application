import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../list-item';

const List = ({ data }) => {

  const items = data.map(item => {
    const { id, urls, user } = item;
    return (
      <ListItem urls={urls} id={id} user={user} key={id}/>
    );
  });

  return (
    <ul className='list'>
      {items}
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;