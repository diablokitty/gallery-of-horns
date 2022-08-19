import React from "react";
import './Main.css';
import HornedBeast from "./HornedBeast";
import HornSortForm from "./HornSortForm";

class Main extends React.Component {

  
  constructor(props){
    super(props); 
    this.state = {
      hornNum: 0,
      unfilteredBeast: this.props.data,
      filteredBeast: this.props.data
      }  
    }
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    if(!isNaN(this.state.hornNum)){
    let filteredBeast = this.state.unfilteredBeast.filter(beast => beast.horns === this.state.hornNum);
    console.log(filteredBeast);
    this.setState({
      filteredBeast: filteredBeast
    }) 
  }
  else{
    this.setState({
      filteredBeast: this.state.unfilteredBeast
    }) 
  }

  }
    

//   if (this.state.howToSort === 'even') {
//     let newData = data.filter(num => num % 2 === 0);
//     this.setState({filteredData: newData});
//   } else if (this.state.howToSort === 'odd') {
//     let newData = data.filter(num => num % 2 !== 0);
//     this.setState({filteredData: newData});
//   } else {
//     this.setState({filteredData: data});
//   }
// };
  handleSelect = (e) => {
    let hornNum = parseInt(e.target.value);
    this.setState({
      hornNum: hornNum
    })
  }

  render() {
    console.log(this.state.hornNum);
    console.log( typeof(this.state.hornNum));
    let beastArr = this.state.filteredBeast.map((beast, idx) => {
      return <HornedBeast 
        key={idx}
        name={beast.keyword}
        picture={beast.image_url}
        alttxt={beast.keyword}
        titletxt={beast.title}
        text={beast.description} 
        handleHearts={this.props.handleHearts}
        handleShowModal={this.props.handleShowModal}
        
        />});

    

    return (
      <main>
        <HornSortForm 
          submit={this.handleSubmit}
          select={this.handleSelect}
        />
        {beastArr}
        
      
      </main>

    )
  }

}

export default Main;