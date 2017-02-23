// All Items view

const AllItems = React.createClass({
  // gettig inital state
  getInitalState() {
    return { items: [] }
  }

  componentDidMount() {
    console.log('component mounted');
  }

  render(){
    return(
      <div>
        <h1>All items</h1>
      </div>
    )
  }
})
