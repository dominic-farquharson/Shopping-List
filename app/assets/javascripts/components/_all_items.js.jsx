// All Items view

var AllItems = React.createClass({
  // delete button
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render(){
    // iterating through items array
    var items = this.props.items.map((item)=>{
      return(
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.quantity}</p>
          <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
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
