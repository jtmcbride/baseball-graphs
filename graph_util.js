const setUpGraph = function(data, type, y, x=null) {

  let dataset = JSON.parse(data);

  //get maximums from dataset
  let xMax = d3.max(dataset, function(d) {
    return d[0];
  });
  let yMax = d3.max(dataset, function(d) {
    return d[1];
  });
  let xMin = d3.min(dataset, function(d) {
    return d[0];
  });
  // find the means for trend line
  let xMean = d3.mean(dataset, function(d) {
    return d[0];
  });
  let yMean = d3.mean(dataset, function(d) {
    return d[1];
  });

  let mTop = 0;
  let mBot = 0;
  let rTop = 0;
  let rBot = 0;
  for (dat in dataset) {
    //console.log(dataset[dat]);
    mTop += ((dataset[dat][0] - xMean) * (dataset[dat][1] - yMean));
    let mB = dataset[dat][0] - xMean;
    mBot += Math.pow(mB, 2);
  }

  // find the least squares slope and intercept
  m = mTop / mBot;
  b = yMean - m * xMean;

  // remove old graph and then create new
  d3.select('svg').remove();

  svg = d3.select('#graph-container').append('svg')
        .attr('width', '90%')
        .attr('height', 400)
        .attr('id', 'graph');

  wid = $('#graph').width();



  //create d3 scales and axes
  if (type === "player") {
    xScale = d3.time.scale()
        .domain( [new Date(xMin - 1,0,1) , new Date(xMax,0,1)] )
        .range([30,wid-60])
        .nice( d3.time.year );
  } else {
    xScale = d3.scale.linear()
      .domain([0, xMax])
      .range([30,wid-60])
  }

  yScale = d3.scale.linear()
          .domain([0, yMax])
          .range([400 - 30, 30])
          .nice();

  xAxis = d3.svg.axis()
          .scale(xScale)
          .orient("bottom")
          .ticks(5);

  yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left')
        .ticks(5);

  trendLine = d3.svg.line()
    .x(function(d) { return d[0]})
    .y(function(d) { return d[1]})
    .interpolate('linear');


  leastSquares = function() {
    if (b < 0) {
      let xStart = xScale(-1 * b / m);
      let yStart = yScale(0);
    } else {
      let xStart = xScale(0);
      let yStart = yScale(b);
    }
    xEnd = xScale(xMax);
    yEnd = yScale(m * xMax + b);

    return [[xStart, yStart], [xEnd, yEnd]];
  };
  // console.log([xMax, xEnd, m , b, m * xMax + b, yEnd, yStart, xStart])

  // leastSquares = leastSquares();


  // bind data to svg circles as datapoints
  circles = svg.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle");

  // apply data to position on scatterplot
  if (type === "player") {
    circles.attr("cx", function(d) {
      return xScale(new Date(d[0],0,1));
    })
      .attr("cy", function(d) {
        return yScale(d[1]);
      })
      .attr("r", 3)
  } else {
    circles.attr("cx", function(d) {
      return xScale(d[0]);
    })
      .attr("cy", function(d) {
        return yScale(d[1]);
      })
      .attr("r", 3)
      .attr("id", function(d) {
        return d[2];
      })
      .attr("data-playerid", function(d){
        return d[3]
      })
      .on("mouseenter", function(d) {
        circleId = d[2];
        circleX = d[0];
        circleY = d[1];
        console.log(circleId);
        c = $('#' + circleId);
        c.parent().append("<text class='datatext' fill='red' font-size='20px' x='" +
         xScale(circleX) + "' y='" + yScale(circleY) + "'>"+ circleId + circleX + ","+ circleY + "</text>")
      })
      .on("mouseleave", function(d){

      })
      .on("click", function(d) {
        window.location.href = "players/" + d[3] + "?year=" + $('#year').val() +
          "&ystat=" + y + '&xstat=' + x
      })
      .append("title")
        // append a tooltip title to each point
        .text(function(d) {
          return d[2] + "\nx:" + d[0] + ", y:" + d[1];
        });
    }

  // add and position axes and add titles
  if (type === "player") {
    svg.append('g')
      .attr("class", "x axis")
      .attr('transform', 'translate(0,' + 370 +')')
      .call(xAxis)
      .append("text")
      .attr("y", -10)
      .attr("x", wid - 60)
      .attr("id", "x-label")
      .style("text-anchor", "middle")
      .text("Year");
  } else {
    svg.append('g')
      .attr("class", "x axis")
      .attr('transform', 'translate(0,' + 370 +')')
      .call(xAxis)
      .append("text")
      .attr("y", -10)
      .attr("x", wid - 60)
      .attr("id", "x-label")
      .style("text-anchor", "middle")
      .text(statDict[x]);
  }

  svg.append('g')
    .attr("class", "y axis")
    .attr('transform', 'translate('+ 30 +', 0)')
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 12)
    .attr("x", -23)
    .style("text-anchor", "end")
    .text(statDict[y]);

  svg.append("path")
    .attr('d', trendLine(leastSquares()))
    .attr("stroke", "red")
        .attr("stroke-width", 2)
        .attr("fill", "none")
        .attr("class", "line");
};