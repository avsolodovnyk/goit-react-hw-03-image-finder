import React, { PureComponent } from 'react';
import T from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends PureComponent {
  static propTypes = {
    onSearchSubmit: T.func.isRequired,
  };

  state = { inputedText: '' };

  handleChange = e => this.setState({ inputedText: e.currentTarget.value });

  handleSubmit = e => {
    e.preventDefault();
    const { inputedText } = this.state;
    const { onSearchSubmit } = this.props;
    onSearchSubmit(inputedText);
    this.setState({ inputedText: '' });
  };

  render() {
    const { inputedText } = this.state;
    return (
      <form className={styles['search-form']} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={inputedText}
          placeholder="Search images..."
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
