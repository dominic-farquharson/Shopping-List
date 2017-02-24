// Item component
const Item =React.createClass({
  getInitialState() {
    return {editable: false}
  },

  // handle edit
  handleEdit() {
    // rendering if editable state is true
    if(this.state.editable) {
      let quantity = this.refs.quantity.value;
      let description = this.refs.description.value;
      let name = this.refs.name.value;
      let id = this.props.item.id;
      let item = {id: id, name: name, description: description, quantity: quantity};
      console.log('handle update')
      
      this.props.handleUpdate(item);
    }
    this.setState({ editable: !this.state.editable })
  },
  render() {
    // conditional rendering
    let name = this.state.editable ? <input type="text" ref="name" defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
    let description = this.state.editable ? <input type="text" ref="description" defaultValue = {this.props.item.description} /> : <p>{this.props.item.description} </p>;
    let quantity = this.state.editable ? <input type="number" ref="quantity" defaultValue = {this.props.item.quantity} /> : <p>{this.props.item.quantity} </p>;

  return (
      <div>
        {name}
        {description}
        {quantity}
        {/* Delete Button */}
        <button onClick={this.props.handleDelete}>Delete</button>
        {/* Edit Button - Conditional rendering */}
        <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit'} </button>
     </div>

   )
  }
})
