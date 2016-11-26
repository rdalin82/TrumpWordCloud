  var width = 800;
  var height = 440;
  var frequency_list = [{'text': 'country', 'size': '48'}, {'text': 'immigration', 'size': '45'}, {'text': 'America', 'size': '36'}, {'text': 'illegal', 'size': '36'}, {'text': 'new', 'size': '34'}, {'text': 'Hillary', 'size': '33'}, {'text': 'one', 'size': '33'}, {'text': 'American', 'size': '33'}, {'text': 'people', 'size': '30'}, {'text': 'Clinton', 'size': '27'}, {'text': 'going', 'size': '27'}, {'text': 'system', 'size': '27'}, {'text': 'also', 'size': '25'}, {'text': 'Americans', 'size': '25'}, {'text': 'law', 'size': '23'}, {'text': 'immigrants', 'size': '23'}, {'text': 'border', 'size': '19'}, {'text': 'time', 'size': '18'}, {'text': 'laws', 'size': '18'}, {'text': 'United', 'size': '18'}, {'text': 'plan', 'size': '18'}, {'text': '$', 'size': '18'}, {'text': 'States', 'size': '18'}, {'text': 'military', 'size': '17'}, {'text': 'years', 'size': '17'}, {'text': 'jobs', 'size': '17'}, {'text': 'Administration', 'size': '17'}, {'text': 'never', 'size': '16'}, {'text': 'must', 'size': '16'}, {'text': 'work', 'size': '16'}, {'text': 'President', 'size': '16'}, {'text': 'year', 'size': '16'}, {'text': 'office', 'size': '15'}, {'text': 'world', 'size': '15'}, {'text': 'enforcement', 'size': '15'}, {'text': 'defense', 'size': '15'}, {'text': 'protect', 'size': '15'}, {'text': 'want', 'size': '14'}, {'text': 'countries', 'size': '14'}, {'text': 'make', 'size': '14'}, {'text': 'Obama', 'size': '14'}, {'text': 'citizens', 'size': '14'}, {'text': 'put', 'size': '14'}, {'text': 'criminal', 'size': '14'}, {'text': 'nation', 'size': '13'}, {'text': 'federal', 'size': '13'}, {'text': 'workers', 'size': '13'}, {'text': 'life', 'size': '12'}, {'text': 'billion', 'size': '12'}, {'text': 'million', 'size': '12'}, {'text': 'many', 'size': '12'}, {'text': 'policies', 'size': '12'}, {'text': 'violence', 'size': '12'}, {'text': 'opponent', 'size': '12'}, {'text': 'government', 'size': '12'}, {'text': 'like', 'size': '12'}, {'text': 'every', 'size': '11'}, {'text': 'security', 'size': '11'}, {'text': 'ISIS', 'size': '11'}, {'text': 'change', 'size': '11'}, {'text': 'today', 'size': '11'}, {'text': 'policy', 'size': '11'}, {'text': 'take', 'size': '11'}, {'text': 'come', 'size': '11'}, {'text': 'Clinton\xe2\x80\x99s', 'size': '11'}, {'text': 'ask', 'size': '11'}, {'text': 'trade', 'size': '11'}, {'text': 'issue', 'size': '11'}, {'text': 'back', 'size': '11'}, {'text': 'great', 'size': '11'}, {'text': 'terrorism', 'size': '11'}, {'text': 'Congress', 'size': '10'}, {'text': 'stop', 'size': '10'}, {'text': 'much', 'size': '10'}, {'text': 'support', 'size': '10'}, {'text': 'first', 'size': '10'}, {'text': 'crime', 'size': '10'}, {'text': 'children', 'size': '10'}, {'text': 'officers', 'size': '10'}, {'text': 'politicians', 'size': '10'}, {'text': 'day', 'size': '10'}, {'text': 'foreign', 'size': '10'}, {'text': 'amnesty', 'size': '10'}, {'text': 'ever', 'size': '9'}, {'text': 'would', 'size': '9'}, {'text': 'families', 'size': '9'}, {'text': 'dollars', 'size': '9'}, {'text': 'open', 'size': '9'}, {'text': 'released', 'size': '9'}, {'text': 'rebuild', 'size': '9'}, {'text': 'media', 'size': '9'}, {'text': 'needs', 'size': '9'}, {'text': 'number', 'size': '9'}, {'text': 'failed', 'size': '9'}, {'text': 'last', 'size': '9'}, {'text': 'budget', 'size': '9'}, {'text': 'us', 'size': '9'}, {'text': 'State', 'size': '9'}, {'text': 'special', 'size': '9'}, {'text': 'thousands', 'size': '9'}]





    var color = d3.scaleLinear()
            .domain([9, 11, 12, 14, 15, 16, 17, 23, 25, 30, 33, 36, 45, 48])
            .range(["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000" ]);

    d3.layout.cloud().size([width, height])
            .words(frequency_list)
            .rotate(0)
            .fontSize(function(d) { return d.size; })
            .on("end", draw)
            .start();

    function draw(words) {
        d3.select("div#cloud").append("svg")
                .attr("width", width-20)
                .attr("height", height-20)
                .attr("class", "wordcloud")
                .style("background-color", "#d3d3d3")
                .append("g")
                // without the transform, words words would get cutoff to the left and top, they would
                // appear outside of the SVG area
                .attr("transform", "translate(350,200)")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-size", function(d) { return d.size*1.1 + "px"; })
                .style("fill", function(d, i) { return color(i); })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function(d) { return d.text; });
    }