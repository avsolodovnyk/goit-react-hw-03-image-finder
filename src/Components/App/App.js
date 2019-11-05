import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ReactModal from 'react-modal';
import picturesAPI from '../../Servises/pictures-api';
import SearchForm from '../SearchForm';
import Gallery from '../Gallery';
import Loader from '../Loader';
import 'react-toastify/dist/ReactToastify.min.css';
import 'material-icons/iconfont/material-icons.css';
import styles from './App.module.css';

ReactModal.setAppElement('#root');
const INITIAL_STATE = {
  searhQuery: '',
  modalUrl: '',
  pageNum: 1,
  results: [],
  error: null,
  isLoading: false,
  showModal: false,
};
export default class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidUpdate(prevProps, prevState) {
    const { searhQuery, pageNum, error } = this.state;
    if (prevState.searhQuery !== searhQuery) {
      this.fetchPictures();
    }
    if (prevState.pageNum !== pageNum) {
      window.scrollTo({
        top: pageNum * 1000,
        behavior: 'smooth',
      });
    }
    if (error) {
      toast.error(`${error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  onSearch = query => {
    this.setState({ searhQuery: query, pageNum: 1, results: [] });
  };

  fetchPictures = () => {
    const { searhQuery, pageNum } = this.state;
    this.setState({ isLoading: true });
    picturesAPI
      .fetchPictures(searhQuery, pageNum)
      .then(data => {
        this.setState(state => {
          return {
            results: [...state.results, ...data],
            pageNum: state.pageNum + 1,
          };
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleLoadMorePic = () => {
    const { searhQuery, pageNum } = this.state;
    this.fetchPictures(searhQuery, pageNum + 1);
  };

  handleOpenModal = e => {
    const { largeImageURL: modalUrl } = this.state.results.find(
      item => item.id === Number(e.currentTarget.id),
    );
    this.setState({ modalUrl, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { results, isLoading, showModal, modalUrl } = this.state;
    return (
      <div className={styles.app}>
        {isLoading && <Loader />}
        <ReactModal isOpen={showModal} onRequestClose={this.closeModal}>
          <div className={styles.modal}>
            <img src={modalUrl} alt={modalUrl} />
          </div>
        </ReactModal>
        <ToastContainer />
        <SearchForm onSearchSubmit={this.onSearch} />
        {results.length > 0 && (
          <Gallery
            items={results}
            loadMore={this.handleLoadMorePic}
            handleModal={this.handleOpenModal}
          />
        )}
      </div>
    );
  }
}
