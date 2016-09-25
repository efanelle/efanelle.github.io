// start slingin' some d3 here.
var log = console.log;
var currScore = 0;
var highScore = 0;
var crashes = 0;
var highScores = [];
var h = 500;
var w = 800;

var board = d3.select('.board')
  .append('svg:svg')
  .attr('height', 600)
  .attr('width', 900)
  .style({'background-color': 'white', 'margin': '250 25%', 'border': '5px solid black'});

var background = board.selectAll('image').data([0])
  .enter()
  .append('svg:image')
  .attr('xlink:href', 'images/background.png')
  .attr('width', '100%')
  .attr('height', '100%');


var myHammers = d3.range(0, 20);
var hammers;
var update = function (items) {
  hammers = board.selectAll('img')
  .data(myHammers).enter().append('svg:image');


  hammers.attr('class', 'enemy')
  .attr('xlink:href', 'images/hammer.png')
  .attr('x', function() { return w * Math.random(); })
  .attr('y', function() { return h * Math.random(); })
  .attr('height', 50)
  .attr('width', 50);
};

update(myHammers);

setInterval(function() {
  d3.selectAll('.enemy')
  .transition()
  .duration(1000)
  .attr('x', function() { return w * Math.random(); })
  .attr('y', function() { return h * Math.random(); });

  hammerTime();
}, 1000);


d3.timer(function () {
  d3.select('.current span').text(currScore++);
}, 1000);

var mcX;
var mcY;

var drag = d3.behavior.drag()
             .on('dragstart', function() { mcHammer.style('opacity', '.3'); })
             .on('drag', function() {
               mcHammer.attr('x', function() { mcX = d3.event.x; return mcX; })
              .attr('y', function() { mcY = d3.event.y; return mcY; }); })
              .on('dragend', function() { mcHammer.style('opacity', '.7'); });


var mcHammer = board.selectAll('img')
  .data([0]).enter().append('svg:image')
  .attr('class', 'player')
  .attr('xlink:href', 'images/mc.png')
  .attr('x', function() { mcX = 500 * Math.random(); return  mcX; })
  .attr('y', function() { mcY = 500 * Math.random(); return mcY; })
  .attr('height', 50)
  .attr('width', 50)
  .call(drag);

var hammerTime = function() {
  var collision = false;
  hammers.each( function() {
    var hammer = d3.select(this);
    var x = Math.abs(hammer.attr('x') - mcHammer.attr('x'));
    var y = Math.abs(hammer.attr('y') - mcHammer.attr('y'));
    var distance = Math.sqrt((x * x) + (y * y));
    if (distance < 100) {
      collision = true;
    }
  });
  if (collision) {
    if (currScore > highScore) {
      highScore = currScore;
    }
    currScore = 0;
    d3.select('.highscore span').text(highScore);
    d3.select('.collisions span').text(crashes++);
  }
};