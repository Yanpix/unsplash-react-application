import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ urls, user }) => {
  const { small } = urls;
  const { name, bio } = user;

  return (
    <li className='list-item'>
      <img src={small} alt="preview"/>
      <div className='content'>
        <div className="author">
          <span>Author:</span>
          {name}
        </div>
        <div className='bio'>
          {bio || 'There is no description.'}
        </div>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  urls: PropTypes.objectOf(PropTypes.string).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ListItem;