function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pickColors() {
  var colorSchemes = [
    ['#896978', '#839791', '#aac0af', '#ffd4ca'],
    ['#0F4C5C', '#E36414', '#FB8B24', '#9A031E'],
    ['#49C6E5', '#00BD9D', '#54DEFD', '#8BD7D2'],
    ['#2B2D42', '#D80032', '#EF233C', '#8D99AE'],
    ['#067BC2', '#D56062', '#F37748', '#84BCDA']
  ];
  var scheme = getRandomInt(colorSchemes.length);
  console.log(scheme);
  var svg = document.getElementById('NextArtSVG');

  document.documentElement.style.setProperty(
    '--dark-color',
    colorSchemes[scheme][0]
  );
  document.documentElement.style.setProperty(
    '--accent-color',
    colorSchemes[scheme][1]
  );
  svg.style.setProperty('--svg-one', colorSchemes[scheme][2]);
  svg.style.setProperty('--svg-two', colorSchemes[scheme][3]);
}

window.onload = function() {
  pickColors();

  document.addEventListener(
    'keydown',
    function(event) {
      if (lastDownTarget == canvas) {
        alert('keydown');
      }
    },
    false
  );
};
