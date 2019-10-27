// Submit Button handler
function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  var text1 =document.getElementById("selDataset").value
  console.log(text1);
  
  // clear the input value
  d3.select("selDataset").node().value = "";

  // Build the plot with the new stock
  buildCharts(text1);
}



//grab the use sample from the drop down menu creating constant variable 
var text1 =document.getElementById("selDataset").value
//create function to build the meta data

function buildMetadata() {
  //grab the use sample from the drop down menu 
   var text1 =document.getElementById("selDataset").value
  
  //create url for d3.json to go to using f print with the value the user selects
  var defaulturl = `trackfeatures/${text1}`;
  
  //use d3.json to go to the url, grab the data and then console log it out
  d3.json(defaulturl).then(function(response) {
    console.log(response);

    // Grab values from the response json object to build the plots
    var Artist = response.Artist;
    var Song = response.Song;
    var Danceability = response.danceability;
    var Energy = response.energy;
    var Key = response.key;
    var Loudness = response.loudness;
    var Mode = response.mode;
    var Speechiness = response.speechiness;
    var Acousticness = response.acousticness;
    var Instrumentalness = response.instrumentalness;
    var Liveness = response.liveness;
    var Valence = response.valence;
    var Tempo = response.tempo;
    var Type = response.type;
    var Id = response.id;
    var Uri = response.uri;
    var Track_href = response.track_href;
    var Analysis_url = response.analysis_url;
    var Duration_ms = response.duration_ms;
    var Time_signature = response.time_signature;
    //console log a variable to ensure it is working
    console.log(Time_signature);
    
  
    var data = response;

    // Use d3 to select the panel with id of `#sample-metadata`
    var panel = d3.select(".panel-body");
    // Use `.html("") to clear any existing metadata
      panel.html("")
      //for loop down the panel 1 time, each time adding a row with data, then another row with 1 piece of data
      for (var i = 0; i < 1; i++) {
      trow = panel.append("tr");
      trow.append("td").text(`Artist:${Artist}`);
      trow = panel.append("tr");
      trow.append("td").text(`Song:${Song}`);
      trow = panel.append("tr");
      trow.append("td").text(`Danceability:${Danceability}`);
      trow = panel.append("tr");
      trow.append("td").text(`Energy:${Energy}`);
      trow = panel.append("tr");
      trow.append("td").text(`Key:${Key}`);
      trow = panel.append("tr");
      trow.append("td").text(`Loudness:${Loudness}`);
      trow = panel.append("tr");
      trow.append("td").text(`Mode:${Mode}`);
      trow = panel.append("tr");
      trow.append("td").text(`Speechiness:${Speechiness}`);
      trow = panel.append("tr");
      trow.append("td").text(`Acousticness:${Acousticness}`);
      trow = panel.append("tr");
      trow.append("td").text(`Instrumentalness:${Instrumentalness}`);
      trow = panel.append("tr");
      trow.append("td").text(`Liveness:${Liveness}`);
      trow = panel.append("tr");
      trow.append("td").text(`Valence:${Valence}`);
      trow = panel.append("tr");
      trow.append("td").text(`Tempo:${Tempo}`);
      trow = panel.append("tr");
      trow.append("td").text(`Duration Ms:${Duration_ms}`);
      trow = panel.append("tr");
      trow.append("td").text(`Time Signature:${Time_signature}`);}
   }); 
   
   
   var text2 =document.getElementById("selDataset1").value
  
   //create url for d3.json to go to using f print with the value the user selects
   var defaultur1 = `trackfeatures/${text2}`;
   
   //use d3.json to go to the url, grab the data and then console log it out
   d3.json(defaultur1).then(function(response) {
     console.log(response);
 
     // Grab values from the response json object to build the plots
     var Artist = response.Artist;
     var Song = response.Song;
     var Danceability = response.danceability;
     var Energy = response.energy;
     var Key = response.key;
     var Loudness = response.loudness;
     var Mode = response.mode;
     var Speechiness = response.speechiness;
     var Acousticness = response.acousticness;
     var Instrumentalness = response.instrumentalness;
     var Liveness = response.liveness;
     var Valence = response.valence;
     var Tempo = response.tempo;
     var Type = response.type;
     var Id = response.id;
     var Uri = response.uri;
     var Track_href = response.track_href;
     var Analysis_url = response.analysis_url;
     var Duration_ms = response.duration_ms;
     var Time_signature = response.time_signature;
     //console log a variable to ensure it is working
     console.log(Time_signature);
     
   
     var data = response;
 
     // Use d3 to select the panel with id of `#sample-metadata`
     var panel = d3.select(".panel-body1");
     // Use `.html("") to clear any existing metadata
       panel.html("")
       //for loop down the panel 1 time, each time adding a row with data, then another row with 1 piece of data
       for (var i = 0; i < 1; i++) {
       trow = panel.append("tr");
       trow.append("td").text(`Artist:${Artist}`);
       trow = panel.append("tr");
       trow.append("td").text(`Song:${Song}`);
       trow = panel.append("tr");
       trow.append("td").text(`Danceability:${Danceability}`);
       trow = panel.append("tr");
       trow.append("td").text(`Energy:${Energy}`);
       trow = panel.append("tr");
       trow.append("td").text(`Key:${Key}`);
       trow = panel.append("tr");
       trow.append("td").text(`Loudness:${Loudness}`);
       trow = panel.append("tr");
       trow.append("td").text(`Mode:${Mode}`);
       trow = panel.append("tr");
       trow.append("td").text(`Speechiness:${Speechiness}`);
       trow = panel.append("tr");
       trow.append("td").text(`Acousticness:${Acousticness}`);
       trow = panel.append("tr");
       trow.append("td").text(`Instrumentalness:${Instrumentalness}`);
       trow = panel.append("tr");
       trow.append("td").text(`Liveness:${Liveness}`);
       trow = panel.append("tr");
       trow.append("td").text(`Valence:${Valence}`);
       trow = panel.append("tr");
       trow.append("td").text(`Tempo:${Tempo}`);
       trow = panel.append("tr");
       trow.append("td").text(`Duration Ms:${Duration_ms}`);
       trow = panel.append("tr");
       trow.append("td").text(`Time Signature:${Time_signature}`);}
    });   

}

function buildCharts(text1) {


    //create event handler to campute the users selection 
    var text2 =document.getElementById("selDataset").value
    //console log to ensure we are getting a value
    console.log(text2)
    //create a new url taking the sample selected- change the route to sample api
    var defaulturl1 = `/alltrackfeatures`;
    //console log to ensure we are getting an accurate api url
    console.log(defaulturl1)
    //use d3.json to go to the api url to gather the data- print the data
    d3.json(defaulturl1).then(function(response){
      var song_keys = [];
      var song_names = [];
      var song_energy = [];
      var song_dance = [];
      for (i=0; i<response.length; i++){
        song_keys.push(response[i].key);
        song_names.push(response[i].Song);
        song_energy.push(response[i].energy);
        song_dance.push(response[i].danceability);
      }

    


    // @TODO: Build a Bubble Chart to populate the field when the app is first initiated. 
    //create a trace first 
   //Build a Scatter Plot to populate the field when the app is first initiated
   var trace_scatter = {
    x: song_energy,
    y: song_dance,
    text: song_names,
    mode: 'markers',
    type: 'scatter'
  };
  var data_scatter = [trace_scatter];
  var layout_scatter = {
    title: "Energy vs. Danceability"
  };
  Plotly.newPlot("scatter", data_scatter, layout_scatter);



  
     var values = [];
     var bin1_count = 0;
     var bin2_count = 0;
     var bin3_count = 0;
     var bin4_count = 0;
     for (i=0; i<song_keys.length; i++){
       if (song_keys[i] < 3) {
         bin1_count++;
       } else if (song_keys[i]<6 && song_keys[i]>2) {
         bin2_count++;
       } else if (song_keys[i]<9 && song_keys[i]>5) {
         bin3_count++;
       } else {
         bin4_count++;
       }
     }
     values.push(bin1_count);
     values.push(bin2_count);
     values.push(bin3_count);
     values.push(bin4_count);
     var trace2 = {
       labels: ["0 to 2", "3 to 5", "6 to 8", "9 to 11"],
       values: values,
       type: 'pie',
     };
     var data2 = [trace2];
     var layout2 = {
       title: "Songs by Key"
     }
    Plotly.newPlot("pie", data2, layout2);
    });




//Build radar chart




    let songone = document.getElementById("selDataset").value;
    let songtwo = document.getElementById("selDataset1").value;
    var songone_url = `/trackfeatures/${songone}`;
    var songtwo_url = `/trackfeatures/${songtwo}`;
    

    

    d3.json(songone_url).then(function(response){
      var Song = response.Song;
      var Danceabilityradar = response.danceability;
      var Energyradar = response.energy;
      var Speechinessradar = response.speechiness;
      var Acousticnessradar = response.acousticness;
      var Livenessradar = response.liveness;
      var Valenceradar = response.valence;
      
      d3.json(songtwo_url).then(function(response){
        var Song2 = response.Song;
        var Danceabilityradar2 = response.danceability;
        var Energyradar2 = response.energy;
        var Speechinessradar2 = response.speechiness;
        var Acousticnessradar2 = response.acousticness;
        var Livenessradar2 = response.liveness;
        var Valenceradar2 = response.valence;
     
        
    let myChart = document.getElementById('myChart').getContext('2d');
    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontsize = 18;
    Chart.defaults.global.defaultFontColor = '#777';
    let PrPopChart = new Chart(myChart, {
    type:'radar', 
    data:{
        labels:['Danceability', 'Energy', 'Speechiness', 'Acousticness', 'Liveness	', 'Valence'],
        datasets:[{
          label: `${Song}`,
          backgroundColor: 'rgba(250, 0, 0, 0.5)',
          borderColor: "white",
          pointBackgroundColor: "white",
          data: [
            Danceabilityradar,
            Energyradar,
            Speechinessradar,
            Acousticnessradar,
            Livenessradar,
            Valenceradar
          ]
      },
      {
        label: `${Song2}`,
        backgroundColor: 'rgba(0, 0, 300, 0.5)',
        borderColor: "white",
        pointBackgroundColor: "white",
        data: [
          Danceabilityradar2,
          Energyradar2,
          Speechinessradar2,
          Acousticnessradar2,
          Livenessradar2,
          Valenceradar2
        ]
    } ]
        
    },
    options:{
        title:{
        display: true,
        text: 'Radar Chart',
        fontSize:25
        },
        legend:{
        display:false,
        position:'right',
        labels:{
            fontColor: '#000'
        }
        },
        layout:{
        padding:{
            left:0,
            right:0,
            bottom:0,
            top:0
        }
        },
        tooltips:{
        enabled:true
        }
    }
    
    })})});

    
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");
  
  // Use the list of sample names to populate the select options
  d3.json("/tracks").then((Song) => {
    Song.forEach((song) => {
      selector
        .append("option")
        .text(song)
        .property("value", song);
    });

    // Use the first sample from the list to build the initial plots
    const firstsong = Song[0];
    buildCharts(firstsong);
    buildMetadata(firstsong);
  });

  var selector1 = d3.select("#selDataset1");
  d3.json("/tracks").then((Song) => {
    Song.forEach((song) => {
      selector1
        .append("option")
        .text(song)
        .property("value", song);
    });

    // Use the first sample from the list to build the initial plots
    const firstsong1 = Song[0];
    buildCharts(firstsong1);
    buildMetadata(firstsong1);
  });
}

function optionChanged(newSong) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSong);
  buildMetadata(newSong);
}

// Initialize the dashboard
init();
