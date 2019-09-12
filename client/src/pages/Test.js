import React, { Component } from 'react';
import Person from './Person'

class Test extends Component {
  state={
    data: null,
    isLoaded: false
  };

  componentDidMount(){

    this.getPage()
    .then(res => this.setState({data: res, isLoaded: true}))
    .catch(err => console.log(err))
  }

  //Used to fetch data from Backend
  getPage = async () => {
    const response = await fetch('/express/test');
    const body = await response.json()

    if(response.status !==200){
      throw Error(body.message)
    }
    return body;
  };

  showPerson(data){
    return data.map((person, ind) => {
      return <Person info={person} key={ind} />;
  })
}

  render(){
    const { isLoaded, data } = this.state
    return(
      <div>
      <h1>Data goes below here</h1>
        {isLoaded ? this.showPerson(data) : 'test'}
      </div>
    )
  }
}

export default Test