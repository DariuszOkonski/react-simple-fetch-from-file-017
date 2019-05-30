import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ButtonsController from './ButtonsControler';
import DisplayResults from './DisplayResults';

class App extends Component {
  randomTime = 0;
  intervalIndex = null;
  dataToSend = null;

  state = {
    downloadingTime: this.randomTime,
    isFetched: false,
    data: [],
  }

  handleFetch = () => {
    if (!this.state.isFetched) {
      this.loadData();
    } else {
      return alert('First Reset data');
    }
  }

  handleReset = () => {
    this.setState({
      isFetched: false,
      data: [],
    })
    this.dataToSend = null;
  }

  componentDidUpdate() {
    if (this.state.isFetched && this.dataToSend === null) {
      this.updateDateToSend();
    }
  }

  updateDateToSend() {
    this.dataToSend = [...this.state.data];
    const index = Math.floor(Math.random() * this.dataToSend.length);
    this.dataToSend = this.dataToSend[index];

    this.setState({
      data: [...this.dataToSend]
    })
  }

  countDownloadingTime = () => {
    this.intervalIndex = setInterval(() => {
      if (this.state.downloadingTime > 0) {
        this.setState(prevState => ({
          downloadingTime: prevState.downloadingTime - 100
        }))
      } else {
        clearInterval(this.intervalIndex);
        this.setState({
          downloadingTime: 0
        })
      }
    }, 100);
  }

  fetchData() {
    fetch('data/data.json')
      .then(response => {
        if (response.status === 200) {
          return response;
        }
        throw new Error('Something went wrong');
      })
      .then(data => data.json())
      .then(res => {
        setTimeout(() => {
          this.setState({
            data: res,
            isFetched: true,
          })
        }, this.randomTime);
      })
      .catch(err => console.log(err));
  }

  loadData() {
    //generate random time
    this.randomTime = Math.floor((Math.random() * 3000) + 2000);

    this.setState({
      downloadingTime: this.randomTime
    })

    this.countDownloadingTime();

    this.fetchData();
  }


  render() {
    return (
      <div className="App">
        <Header
          downloadingTime={this.state.downloadingTime}
        />

        <ButtonsController
          handleFetchClick={this.handleFetch}
          handleResetClick={this.handleReset}
        />

        <DisplayResults
          data={this.state.data}
          isFetched={this.state.isFetched}
        />
      </div>
    );
  }
}

export default App;



