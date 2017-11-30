var RowComponent = React.createClass({
    getClassName(){
       if (parseFloat(this.props.change) > 0.0) return ('upStatus')
          else if(parseFloat(this.props.change) <0.0 ) return ('downStatus')
    },
    render: function(){
      return(
        <tr>
          <td className="codeStyle">{this.props.code}</td>
          <td>{this.props.company}</td>
          <td>{this.props.price}</td>
          <td>{Math.floor(this.props.price* this.props.volume)}</td>
          <td className={this.getClassName()} >{this.props.change}</td>
          <td className={this.getClassName()} >{((this.props.change/this.props.price)*100).toFixed(2)}%</td>
        </tr>
      );
    }
});
