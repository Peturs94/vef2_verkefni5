import React, { Component } from 'react';

import { getLectureList } from '../../api';

import Header from '../../components/header/Header';
import Filter from '../../components/filter/Filter';
import Lectures from '../../components/lectures/Lectures';

export default class Home extends Component {

  state = {
    lectures: getLectureList(),
  }

  onFilter = (active) => {
    console.log(active, 'Home state');
    this.setState({ lectures: getLectureList(active) });
  }

  render() {
    const { lectures } = this.state;

    console.log(lectures);

    return (
      <React.Fragment>
        <Header category="Vefforritun" title="Fyrirlestrar" />
        <Filter onFilter={this.onFilter}/>
        <Lectures lectures= {lectures}/>
      </React.Fragment>
    );
  }
}
