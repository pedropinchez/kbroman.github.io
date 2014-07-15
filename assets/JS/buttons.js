// Generated by CoffeeScript 1.7.1
(function() {
  var color, div, fontsize, h, hicolor, labels, links, pad, rect, svgs, text, toth, totw, urls, w;

  labels = ['github', 'blog', '@kwbroman'];

  urls = {
    'github': 'http://github.com/kbroman',
    'blog': 'http://kbroman.wordpress.com',
    '@kwbroman': 'https://twitter.com/kwbroman'
  };

  h = 27;

  w = 90;

  pad = 6;

  toth = h + 2 * pad;

  totw = w + 2 * pad;

  color = "darkslateblue";

  hicolor = "slateblue";

  fontsize = "18px";

  div = d3.select("div#karl_buttons");

  svgs = div.selectAll("empty").data(labels).enter().append("svg").attr("height", toth).attr("width", totw).attr("id", function(d, i) {
    return "button" + i;
  });

  links = svgs.append("a").attr("xlink:href", function(lab) {
    return urls[lab];
  });

  rect = links.append("rect").attr("x", pad).attr("y", pad).attr("rx", pad).attr("ry", pad).attr("height", h).attr("width", w).attr("fill", color).attr("stroke", "none").style("opacity", "0.8").on("mouseover", function() {
    return d3.select(this).attr("fill", hicolor);
  }).on("mouseout", function() {
    return d3.select(this).attr("fill", color);
  });

  text = svgs.append("text").text(function(lab) {
    return lab;
  }).attr("x", pad + w / 2).attr("y", pad + h / 2).style("dominant-baseline", "middle").style("text-anchor", "middle").style("pointer-events", "none").attr("fill", "white").style("font-size", "fontsize");

}).call(this);
