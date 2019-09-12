import React from 'react';

class Gifs extends React.Component {

  state = {
    gifs: null,
    isLoaded : false
  }

componentDidMount(){
  //Calls te getGids method, takes results and sets to state
  this.getGifs()
  .then(res => this.setState({gifs:res.results, isLoaded: true}))
  .catch(err => console.log(err))
}

//Calls the backend route, receives API payload from Node/Express
getGifs = async () => {
  const response = await fetch('/express/gifs')
  const body = await response.json();

  if (response.status !== 200){
    throw Error(body.message)
  } return body;
}

//Builds gifs into page
showGif = (gifs) => {
  return gifs.map((gif)=>{
    return <img src={gif.media[0].gif.url} />
  })
}

  render(){
    const {isLoaded, gifs} = this.state
    return(
      <div>
        <h1>Gifs Below Here!</h1>
          {isLoaded ? this.showGif(gifs) : ''}
      </div>
    )
  }
}

export default Gifs