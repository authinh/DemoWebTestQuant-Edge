var tableComponent;
var list;
var TableComponent = React.createClass({
  render: function() {
    return (
       <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
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
            return <RowComponent code={row.code} company={row.company} price={row.curPrice} volume={row.volume} change={row.change}  changeStyle={row.status} />
          })
        }
      </table>
    );
  }
});


var socket = io("http://localhost:3000");

socket.on("Server-send-data", function(data) {
  //$("#output").value(data);
  list=data;
  //tableComponent.updateListRows();
  if($('#gainer').hasClass('is-active'))
  ReactDOM.render( < TableComponent /> , document.getElementById('tagGainer'));
    else
    {list.reverse();
  ReactDOM.render( < TableComponent /> , document.getElementById('tagLoser'));}
})
