module.exports =
{
  randomRenderData: function(size){
  var list = [];

  for (i = 0; i < size; i++){
    var price = randomNumber(0.01,99.99,2);
    var row = {
      code: "AAA.XA",
      company: "company1",
      startPrice: price,
      curPrice: price,
      volume: randomNumber(1000,1000000),
      status: 0
    };

    list.push(row);
  }
  return sortList(list);
},
  randomChangeData: function(data){
    var index;
    for(index in data){
      var row = data[index];
      // get value older value of row
      row.curPrice = randomChangePrice(row.curPrice);
      row.volume = randomChangeVolume(row.volume);
      // get value older value of row
      // if newValue > olderValue then status = 1 else status =0;
      row.status = (row.curPrice - row.startPrice>0)? 1:-1;
      row.change = row.curPrice - row.startPrice;
      data[index] = row;
    }
    return data;
  }
};

var randomNumber = function(min,max,fixed){
  console.log("min: "+min);
  console.log("max: "+max);
  console.log(Math.random() * (min - max) + max);
    return (Math.random() * (min - max) + max).toFixed(fixed);

}

var randomChangePrice = function(value){
    // ramdom +/- [1%-5%] in price
    value = (value*randomNumber(-0.05,0.05,2)+ parseFloat(value));
    value = (value <0.01)? 0.01: value;
    return (value > 99.99)? 99.99: value.toFixed(2);
}

var randomChangeVolume = function(value){
  // inc [10-30] in Volume
    console.log("value: "+value);
    value = (parseInt(randomNumber(10,30,0))+ parseInt(value));
    return (value > 1000000)? 1000000: value.toFixed(0);
}
// sort list by ASC
var sortList = function(list){
  list.sort(function(rowA,rowB){
    var valueA = rowA.curPrice * rowA.volume;
    var valueB = rowB.curPrice * rowB.volume;
    return (valueA - valueB)
  })

  return list;
}
