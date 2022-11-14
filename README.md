# Smart-TV-Application responsive

 ### CreateProblem Statement & Instructions
`Read the problem statement, code a working solution in JavaScript or TypeScript using React.
Be prepared to explain your solution during a review.`

 ### The Problem
`We want you to create a production ready, Smart TV Application that will allow you to navigate
through a number of photos from different topics (e.g wallpapers, nature, etc) using the
Unsplash API, and when a menu item (topic) is selected, it retrieves topic photos from an API
and displays it in a horizontally scrolling grid.`

 ### Guidelines
The goal of this test is not to give you step by step guidance on how the app should function in
every aspect. We are giving you base requirements and mockups, so be creative in your
approach.

Columns in the grid should shift left or right ONE column at a time. 

To get information about the API Endpoints that you are required to pull data from, you can go
to: 
`
https://unsplash.com/developers `


(You will need to register as a developer on unsplash and add an “App”) 

 To get a list of available topics:`
https://api.unsplash.com/topics `

To get a list of related topic photos per topic :`
https://api.unsplash.com/topics/<topic_name>/photos
Platform Support `

This will be run in a Smart TV environment, for the purposes of this test you can assume that if
the app runs in latest versions of Safari, Firefox and Chrome it will run on the TV. The app will
run at a screen resolution of 1920 x 1080. (This can be fixed, but our preference is responsive) 

# How to Run The resolution tests
  1. firstly download the zip folder and run `npm i` to install the node package
  2. run `npm run dev` to start the project 
  3. This project is running on port `5173`