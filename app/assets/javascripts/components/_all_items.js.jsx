// All Items view

var AllItems = React.createClass({
  // delete button
  handleDelete(id) {
    this.props.handleDelete(id);
  },
  onUpdate(item) {
    console.log('on update - all items')
    this.props.onUpdate(item);
  },
  render(){
    // iterating through items array
    var items = this.props.items.map((item)=>{
      return(
        <div key={item.id}>
          <Item item={item}
            handleDelete={this.handleDelete.bind(this, item.id)}
            handleUpdate = {this.onUpdate} />
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
