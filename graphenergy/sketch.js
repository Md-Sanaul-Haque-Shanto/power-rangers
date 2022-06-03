var makeGraph2 = function(){

  var trace1 = {
    x: [0,1,2,3],
    y: [10, 5, 3, 3.3],
    text: ['10% diesel', '5% coal', '3% heavy oil','3.3% renewable sources'],
    mode: 'markers',
    type: 'bar',
    marker: {

    color: 'rgb(142,124,195)'

  }
  };

  var data = [ trace1 ];

  var layout = {
    xaxis: {
      title: 'State (i.e. 62.9% of Bangladeshi generated electricity)',
    },
    yaxis: {
      title: 'Number of Arrangements'
    },
    title:'Ways to Arrange Energy Among Four Objects'
  };

  Plotly.plot('graphenergy', data, layout);

}

Plotly.d3.select(window).on('resize.two', function () {
  Plotly.deleteTraces('graphenergy', 0);
  makeGraph2();
});
