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
  handleDelete() {
    console.log('in handle delete')
  },
  render() {
    return (
      <div>
        {/* rendering new item */}
        <NewItem handleSubmit={this.handleSubmit} />
        {/*rendering all items  */}
        <AllItems items={this.state.items} handleDelete={this.handleDelete} />
      </div>
    )
  }
});
