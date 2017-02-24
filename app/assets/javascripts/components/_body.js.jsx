//rendering body component

var Body = React.createClass({
  // gettig inital state
  getInitialState() {
    return { items: [] }
  },

  componentDidMount() {
    // getting json
    $.getJSON('/api/v1/items', (response) => {
      // console.log(response)})
      this.setState({ items: response }) });
  },

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  },

  // Deleting item
  handleDelete(id) {
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE',
      success: ()=> {
        this.removeItemClient(id);
      }
    });
  },

  // updating state after removing item
  removeItemClient(id) {
    var newItems = this.state.items.filter( (item) => {
      return item.id != id;
    })
    this.setState({ items: newItems });
  },
  handleUpdate(item) {
      console.log('handling update');
      console.log(item);
      $.ajax({
        url: `/api/v1/items/${item.id}`,
        type: 'PUT',
        data: {item: item},
        success: () => {
          console.log('Item is updated')
          this.updateItems(item);
        },
        complete: ()=>console.log('hello'),
        error: (error)=>{console.log(error)}

    })
  },

  updateItems(item) {
      var items = this.state.items.filter((i) => {return i.id != item.id });
      items.push(item);

      this.setState({ items: items })
  },
  render() {
    return (
      <div>
        {/* rendering new item */}
        <NewItem handleSubmit={this.handleSubmit} />
        {/*rendering all items  */}
        <AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} />
      </div>
    )
  }
});
