module.exports =
{
  randomRenderData: function(size){
  var list = [];

  for (i = 10; i < size+10; i++){
    var price = randomNumber(0.01,99.99,2);
    var row = {
      code: "A"+i+".XA",
      company: "company"+i,
      startPrice: price,
      curPrice: price,
      volume: randomNumber(1000,1000000),
      change: 0
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
      row.change = row.curPrice - row.startPrice;
      data[index] = row;
    }
    return sortList(data);
  }
};

var randomNumber = function(min,max,fixed){
    return (Math.random() * (min - max) + max);

}

var randomChangePrice = function(value){
    // ramdom +/- [1%-5%] in price
    value = value*randomNumber(-0.05,0.05,2)+ parseFloat(value);
    value = (value <0.01)? 0.01: value;
    return (value > 99.99)? 99.99: value;
}

var randomChangeVolume = function(value){
  // inc [10-30] in Volume
    value = (parseInt(randomNumber(10,30,0))+ parseInt(value));
    return (value > 1000000)? 1000000: value;
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
