# Spotify-Top-100


![Alt text](images/image.PNG?raw=true "Optional Title")



1-Webscraping
Using spotify’s website, scrape the top 100 streamed songs of all time.
https://open.spotify.com/playlist/2YRe7HRKNRvXdJBp9nXFza
Songs were stored based in a div class
Looped through the beautiful soup object, found all the div classes and stored into a python list.
Did the same for both the songs and artists. Store both lists in a Dataframes


--------------------------------------------------------------------------------------------------
2-Api Calls.
Realized that Spotify’s documentation was written CURL and not python. Took us way too long to realize we were not reading python
Used spotipy python library to make successive API calls to Spotify’s API endpoint.
This API required a client id and client secret.
After many challenges, we were able to pull down song features for every song in our list.
We joined these song results with our prior dataframe for a master list.
Using SQLite2, we were able to push both data frames to a SQLite file.

--------------------------------------------------------------------------------------------------
3-Flask APP.
Created a flask app with four separate routes.
A-    Home route- Used to render index.html
B-    /tracks- used to render song track titles in json format
C-    /trackfeatures/<song>- used to render track features when the user selects a song
D-    /alltrackfeatures- used to render all track features for all songs.
The most difficult part of the creation of the flask app were.
A-    Realizing you cannot auto map a database table that did not have a primary key. Workaround was to created a class to access each table.
B-    Returning the data in a usable json format because the API calls already returned in a nest list of list of dictionaries.
  
  
  --------------------------------------------------------------------------------------------------
4- Visualization
We decided to create an interactive dash board featuring 3 views and a couple of drop down menus.
The drop downs show each songs respective metadata(go over definitions) and allow the user to combine each song on a radar chart to compare their qualities.
We also created a scatter plot comparing song energy vs danceability. Lastly, we created a pie chart showing the percentages of the top 100 songs in every key.
The visualization was created using D3 and Charts.JS.
Visualization challenges-
Scatter plot- Chart.js wanted a list of x,y dictionaries/coordinates which did not match our back end data format. We had to substitute plotly which was more forgiving to the data format.
Pie Chart- In order the create the required pie chart, we needed to learn javascript binning in order to bin the api results in their respective key before they could be charted.
Radar Chart- Challenges arose trying to make two separate d3.json calls to our flask app. Since the user is passing in two separate songs, two separate calls needed to be made to the /trackfeatures/<song> end point. We had issues with scoping since we could not call the first song variables, in the second d3.json call. We had to create a work around by nesting the d3.json functions inside of one another so the variables from both songs were available when plotting the radar chart.
  
  --------------------------------------------------------------------------------------------------
5-IF WE HAD MORE TIME
Add functionality to swap between x and y variables on the scatter plot to let the user select which variables to compare between the top 100 charts
Customize the radar chart and map the color to the color of the drop down menus for each respective song
Create functionality to play each song when the user selects it.
Publish to Heroku
