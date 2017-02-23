var NewItem = React.createClass({
  // handling clicks
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    var quantity = this.refs.quantity.value;

    $.ajax({
      url:'/api/v1/items',
      type:'POST',
      data: {item: {name:name,description:description, quantity:quantity} },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },
  render() {
    return (
      <div>
        {/* Name field */}
        <input ref="name" placeholder="Enter the name of the item" />
        {/* Description field */}
        <input ref="description" placeholder="Enter a description" />
        {/* Quantity field */}
        <input ref="quantity" type="number" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
