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
  };
  render() {
    return (
      <li>{this.props.groceryItem}</li>
    );
  };
}

var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      {props.groceryItems.map(groceryItem =>
        <GroceryListItem groceryItem = {groceryItem} />
      )}
      {/* <GroceryListItem groceryItems = {['牛乳4本', '半熟卵2パック']}/> */}
    </ul>
  </div>
);

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryListItem groceryItems = {['牛乳4本', '半熟卵2パック']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

