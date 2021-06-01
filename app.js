// var 牛乳 = () => (
//   <li>牛乳4本</li>
// );

// var 半熟卵 = () => (
//   <li>半熟卵2パック</li>
// );

// var GroceryListItem = (reactDefaultParam) => {
//   var onListItemClick = (click) => {
//     console.log('I got clicked!', reactDefaultParam);
//   };
//   return (
//     <ul>
//       <li onClick = {onListItemClick}>{reactDefaultParam.groceryItems[0]}</li>
//       <li>{reactDefaultParam.groceryItems[1]}</li>
//     </ul>
//   )
// };

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  };

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  };

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onListItemClick.bind(this)} onMouseLeave={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
    );
  };
}

var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      {props.groceryItems.map((groceryItem, key) =>
        <GroceryListItem groceryItem={groceryItem} key={key}/>
      )}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList groceryItems = {['牛乳4本', '半熟卵2パック']}/>, document.getElementById('app'));
