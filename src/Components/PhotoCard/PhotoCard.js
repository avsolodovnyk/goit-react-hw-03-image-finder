import React from 'react';
import T from 'prop-types';
import styles from './PhotoCard.module.css';

export default function PhotoCard({
  webformatURL,
  likes,
  views,
  comments,
  downloads,
  onClickModal,
  id,
}) {
  return (
    <div className={styles['photo-card']}>
      <img src={webformatURL} alt={webformatURL} />
      <div className={styles.stats}>
        <p className={styles['stats-item']}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={styles['stats-item']}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={styles['stats-item']}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={styles['stats-item']}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>
      <button
        type="button"
        id={id}
        className={styles['fullscreen-button']}
        onClick={onClickModal}
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  );
}

PhotoCard.propTypes = {
  webformatURL: T.string.isRequired,
  likes: T.number.isRequired,
  views: T.number.isRequired,
  comments: T.number.isRequired,
  downloads: T.number.isRequired,
  onClickModal: T.func.isRequired,
  id: T.number.isRequired,
};
