// import React from 'react';
// var axios= require('axios');
// export default class Main extends React.Component{

//   handleformSubmit= () =>{
//     console.log('submit')
//   }

  
//   state={
//     file : {},
//   }

//   handleFile = (e) =>{
//     this.state.file = e.target.files;
//    // console.log(this.state.file);
//   // axios.post('/add', {
//   //   file: this.state.file,
//   // })
//   // .then(function (response) {
//   //   console.log(response);
//   // })
//   // .catch(function (error) {
//   //   console.log(error.response);
//   // });

//   }

//   handleClick=() =>{
//     console.log(this.state.file);
//       axios.post('/users/add', {
//     file: this.state.file,
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error.response);
//    });
//   }
//   render(){
//     return (
//       <div>
//         <input type="file" onChange={this.handleFile}/>
//         <button  onClick={this.handleClick} >Upload File</button>
//       </div>
//       )
//   }
// 

import React from 'react';

export default class Main extends React.Component{
  state={
    file : {}
  }

  handleformSubmit= () =>{
    console.log('submit')
  }

  handleFile = (e) =>{
    this.setState({file : e.target.files});
  }

  handleClick=() =>{
    console.log(this.state.file);
    axios.post('/users/add', {
      file: this.state.file,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  render(){
    return (
      <div>
        <input type="file" onChange={this.handleFile}/>
        <button  onClick={this.handleClick} >Upload File</button>
      </div>
      )
  }
}