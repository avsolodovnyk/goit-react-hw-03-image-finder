import React from 'react';
import T from 'prop-types';
import PhotoCard from '../PhotoCard';
import LoadMore from '../LoadMore';
import styles from './Gallery.module.css';

export default function Gallery({ items, loadMore, handleModal }) {
  return (
    <>
      <ul className={styles.gallery}>
        {items.map(
          ({
            webformatURL,
            largeImageURL,
            likes,
            views,
            comments,
            downloads,
            id,
          }) => (
            <li key={id} className={styles['gallery-item']}>
              <PhotoCard
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                likes={likes}
                views={views}
                comments={comments}
                downloads={downloads}
                onClickModal={handleModal}
                id={id}
              />
            </li>
          ),
        )}
      </ul>
      {items.length > 0 && <LoadMore loadMore={loadMore} />}
    </>
  );
}

Gallery.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.number.isRequired,
      webformatURL: T.string.isRequired,
      largeImageURL: T.string.isRequired,
      likes: T.number.isRequired,
      views: T.number.isRequired,
      comments: T.number.isRequired,
      downloads: T.number.isRequired,
    }),
  ).isRequired,
  loadMore: T.func.isRequired,
  handleModal: T.func.isRequired,
};
