// All Items view

var AllItems = React.createClass({


  render(){
    // iterating through items array
    var items = this.props.items.map((item)=>{
      return(
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.quantity}</p>
        </div>
      )
    })
    return(
      <div>
        {items}
      </div>
    )
  }
})
