import React from 'react';
import T from 'prop-types';
import styles from './LoadMore.module.css';

export default function LoadMore({ loadMore }) {
  return (
    <button className={styles.button} type="button" onClick={loadMore}>
      Load more
    </button>
  );
}
LoadMore.propTypes = {
  loadMore: T.func.isRequired,
};
