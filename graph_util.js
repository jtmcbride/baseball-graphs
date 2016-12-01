import * as d3 from 'd3';

export const setUpGraph = function(data, type, y, x=null, svgNode) {

  d3.select(window).on('resize', resize);

  d3.select('#graph').remove()

  // let data = JSON.parse(data);
  let xScale;
  let yScale;

  //get maximums from data
  let xMax = d3.max(data, function(d) {
    return d[x];
  });

  let yMax = d3.max(data, function(d) {
    return d[y];
  });

  let xMin = d3.min(data, function(d) {
    return d[x];
  });

  // find the means for trend line
  let xMean = d3.mean(data, function(d) {
    return d[x];
  });
  let yMean = d3.mean(data, function(d) {
    return d[y];
  });
  let mTop = 0;
  let mBot = 0;
  let mB;
  // let rTop = 0;
  // let rBot = 0;
  for (let dat in data) {
    mTop += ((data[dat][x] - xMean) * (data[dat][y] - yMean));
    mB = data[dat][x] - xMean;
    mBot += Math.pow(mB, 2);
  }

  // find the least squares slope and intercept
  let m = mTop / mBot;
  let b = yMean - m * (xMean - xMin);

  // remove old graph and then create new
  // d3.select('svg').remove();

  let svg = d3.select(svgNode).append('svg')
        .attr('width', '90%')
        .attr('height', 400)
        .attr('id', 'graph');

  let wid = svg.node().getBoundingClientRect().width;



  //create d3 scales and axes
  if (type === "player") {
    let timeMin = xMin-1 + ""
    xScale = d3.scaleTime()
        .domain( [new Date(xMin - 1 ,0,1) , new Date(xMax, 0, 1)] )
        .range([30,wid-60])
        .nice( d3.timeYear );
  } else {
    xScale = d3.scaleLinear()
      .domain([0, xMax])
      .range([30,wid-60])
  }

  yScale = d3.scaleLinear()
          .domain([0, yMax])
          .range([400 - 30, 30])
          .nice();

  let xAxis = d3.axisBottom(xScale)
          .ticks(5);

  let yAxis = d3.axisLeft(yScale)
        .ticks(5);

  let trendLine = d3.line()
    .x(function(d) { return d[0]})
    .y(function(d) { return d[1]})
    // .interpolate('linear');


  const leastSquares = function() {
    let xStart, yStart;
    if (b < 0) {
      xStart = xScale(-1 * b / m);
      yStart = yScale(0);
    } else {
      xStart = xScale(0);
      yStart = yScale(b);
    }
    let xEnd = xScale(xMax);
    let yEnd = yScale(m * xMax + b);
    if (type === "player") {xStart = xScale(new Date(xMin-1, 0, 1)); xEnd = xScale(new Date(xMax+1000, 0,1))}
    

    return [[xStart, yStart], [xEnd, yEnd]];
  };
  // console.log([xMax, xEnd, m , b, m * xMax + b, yEnd, yStart, xStart])

  // leastSquares = leastSquares();


  // bind data to svg circles as datapoints
  let circles = svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle");

  // apply data to position on scatterplot
  if (type === "player") {
    circles.attr("cx", function(d) {
      return xScale(new Date(d[x],0,1));
    })
      .attr("cy", function(d) {
        return yScale(d[y]);
      })
      .attr("r", 3)
  } else {
    circles.attr("cx", function(d) {
      return xScale(d[x]);
    })
      .attr("cy", function(d) {
        return yScale(d[y]);
      })
      .attr("r", 3)
      .attr("id", function(d) {
        return d['playerid'];
      })
      .attr("data-playerid", function(d){
        return d['playerid']
      })
      .on("mouseenter", function(d) {
        let circleId = d['playerid_id'];
        let circleX = d[x];
        let circleY = d[y];
        let c = $('#' + circleId);
        c.parent().append("<div class='datatext' fill='red' font-size='20px' x='" +
                xScale(circleX) + "' y='" + yScale(circleY) + "'>"+ circleId + circleX + ","+ circleY + "</div>")
      })
      .on("mouseleave", function(d){

      })
      .on("click", function(d) {
        // window.location.href = "players/" + d['playerid'] + "?year=" + $('#year').val() +
        //   "&ystat=" + y + '&xstat=' + x

      })
      .append("title")
        // append a tooltip title to each point
        .text(function(d) {
          return d['yearid'] + "\nx:" + d[x] + ", y:" + d[y];
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
      // .text(statDict[x]);
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
    // .text(statDict[y]);

  // svg.append("path")
  //   .attr('d', trendLine(leastSquares()))
  //   .attr("stroke", "red")
  //       .attr("stroke-width", 2)
  //       .attr("fill", "none")
  //       .attr("class", "line");

  const resize = () => {
    debugger

    let width = parseInt(d3.select("#graph").style("width")) - 60;
    let height = parseInt(d3.select("#graph").style("height")) - 30;

    // Update the range of the scale with new width/height
    xScale.range([30, width]).nice(d3.time.year);

    // Update the axis with the new scale
    svg.select('.x')
      .call(xAxis);

    svg.select('.y')
      .call(yAxis);

    let x = svg.select('#x-label')
      .attr('x', width)

    // Recalculate the positions of datapoints
    if (x.text() === "Year")
      circles.attr("cx", function(d) {
      return xScale(new Date(d[0],0,1));
    })
    .attr("cy", function(d) {
      return yScale(d[1]);
    })
    else {
      circles.attr("cx", function(d) {
        return xScale(d[0]);
      })
      .attr("cy", function(d) {
        return yScale(d[1]);
      })

    }
    svg.select('.line')
      .attr('d', trendLine(leastSquares()))

  }

};
