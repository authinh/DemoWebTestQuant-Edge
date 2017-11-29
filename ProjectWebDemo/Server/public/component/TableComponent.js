var tableComponent;
var list;
var TableComponent = React.createClass({
  updateListRows(){
    this.state.listRows = list;
    this.setState(this.state);
  },
  getInitialState(){
    tableComponent = this;
    return {listRows: list};
  },
  render: function() {

    return (
       <table >
        <tr>
         <th>Code</th>
         <th>Company</th>
         <th>Price</th>
         <th>Value</th>
         <th>Change</th>
         <th>%Change</th>
        </tr>
        {
          list.map(function(row){
            console.log(row);
            return <RowComponent code={row.code} company={row.company} price={row.curPrice} volume={row.volume} changeStyle= "downStatus"/>
          })
        }
        <RowComponent code="QES" company="Quant-edge" price="listRows" volume="23130" changeStyle= "downStatus"/>
        <RowComponent code="QES" company="Quant-edge" price="2000" volume="23130" changeStyle= "upStatus"/>
        <RowComponent />
        <RowComponent />
      </table>
    );
  }
});


var socket = io("http://localhost:3000");

socket.on("Server-send-data", function(data) {
  //$("#output").value(data);
  list=data;
  //tableComponent.updateListRows();
  ReactDOM.render( < TableComponent /> , document.getElementById('table'));
})
