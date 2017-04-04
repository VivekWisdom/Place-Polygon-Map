# Place Heat Map App

This is sample place search app built in Angular 2, MongoDB, NodeJS and Express with google maps places search API.

Client App Tech Stack:

1. Angular JS 2 RC 6
2. TypeScript 2.0.2
3. Bootstrap V4
4. Webpack
5. CSS
6. HTML
7. Google Maps API.


Place Heat Map App Development Approach:

I started by understanding requirements, and then I kept note of them on my notebook.
I broke all requirements in below small focus areas.

1. Takes in the location and food item as input (say; biryani in kormangala, Bangalore) - This was easy part of plan. Thought for 2 mins and moved to second requirement
2. Populates a heat-map showing nearby areas which satisfy the same — Went on to research more about ways to get place search in google API’s. Found Nearby search, Text Search, Geocode, Radar Search API’s.
3. After some thought process decided to use text search, using query parameter.
4. User login and signup was also easy part, took care to mask the password field using MD5
hashing technique.
5. Finally approached Account Edit.
Development Tools Used :
• Angular 2.0
• Bootstrap version 4. • MongoDB
• NodeJS
Dependencies:
This app needs MongoDB 3+ installed and running on client machine.
How to Run the App:
1. run npm install in place-heatmap-app hereby main project directory
2. run npm run build in main project directory
3. run npm start in main project directory
Further Improvement Scenarios:
1. More refinement in API call can be made for accurate results. Like sending location data, using Radar Search API, using type of establishment we are focussing.
2. UI can be improved by incorporating flat and/or material design techniques and color schemes.
3. Icons can be used for better visual effect.
Requirements Missed:
User must be able to delete account: I could have implemented the self account delete and then redirected that user to login screen.
Note: Google HeatMap Visualization API was not available for Angular 2. So I implemented Google Map Polygon Visualization to present the Idea. Again having some more time custom Heat Map visualization wrapper can be developed.


#Screenshots

1. Sign Up Page
![Login Page](https://github.com/vivekwisdom/Place-Polygon-Map/blob/master/screenshots/Place-heat-map-signup.jpeg)

2. Login Page
![Login Page](https://github.com/vivekwisdom/Place-Polygon-Map/blob/master/screenshots/Place-heat-map-login.jpeg)

3. Home Screen 
![Home Screen](https://github.com/vivekwisdom/Place-Polygon-Map/blob/master/screenshots/home-screen.jpeg)

4. Account Edit Page 
![Account Edit Page](https://github.com/vivekwisdom/Place-Polygon-Map/blob/master/screenshots/account-edit-page.jpeg)

5. Search Example 1 for Shopping Malls 
![Search Example 1](https://github.com/vivekwisdom/Place-Polygon-Map/blob/master/screenshots/search-example-1.jpeg)

6. Search Example 2 for for Specific Restaurants
![Search Example 2](https://github.com/vivekwisdom/Place-Polygon-Map/blob/master/screenshots/search-example-2.jpeg)