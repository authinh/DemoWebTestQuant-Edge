var RowComponent = React.createClass({
    getInitialState(){
      return{code :this.props.code,company: this.props.company,price: this.props.price,value: this.props.price*this.props.volume,change: 14,changePersent: 10,changeStyle: this.props.changeStyle};
    },
    render: function(){
      return(
        <tr>
          <td>{this.state.code}</td>
          <td>{this.state.company}</td>
          <td>{this.state.price}</td>
          <td>{this.state.value}</td>
          <td className={this.state.changeStyle} >{this.state.change}%</td>
          <td className={this.state.changeStyle} >{this.state.changePersent}%</td>
        </tr>
      );
    }
});
