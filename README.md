<h1 align="center">
  MAPI
</h1>

<p align="center">MAPI is an app that lets users <b>create</b> and <b>share maps</b>. Users can create a map with a title and description, pin different locations on the map, and can share it. Users can see the maps created by others.</p>

<p><b>Front End:</b> Redux, Redux toolkit, React JS, React router, Storybook</p>
<p><b>Back End:</b> Node JS, express server, Knex.js, Passport</p>
<p><b>DB:</b> PostgreSQL</p>
<p><b>Third-party API integration:</b> mapbox</p>

## 💻Local Setup

### Server

clone (https://github.com/archa-agrawal/mapi-server) and install dependencies

```
npm install
```

Create a .env file with the following:

```
DB_URL=
SECRET_KEY=
UI_SERVER=
```

Initialize the Postgres database

```
npm install knex -g
knex migration:latest
```

Start the development server

```
npm start
```

### Client

Clone this repository (https://github.com/archa-agrawal/mapi-ui) onto your local device.

Install dependencies

```
npm install
```

Start the react application

```
npm start
```

Go to <http://localhost:3000/> in your browser.

## ⭐️Features

### Create a Map

The home page is where you will view all your maps, and on the navbar there is a <b>add new map</b> button which lets you create a new map with a given heading, theme, and description. This map will be displayed on your home page once you create it.

<img src="https://github.com/archa-agrawal/mapi-ui/blob/main/document/Screen%20Shot%202022-09-03%20at%201.03.40%20PM.png?raw=true" alt="add new map" />

### Add locations to Map

When user clicks and opens a owned map, they can add/delete a location from the map. To add a new location to map, user can search a location, click on a location pin, give it a name and description and hit the add button.

<img src="https://github.com/archa-agrawal/mapi-ui/blob/main/document/Screen%20Shot%202022-09-03%20at%201.10.34%20PM.png?raw=true" alt="add-location" />

### Share a map

On a home page, user can click on a share icon on any map that user wishes to share. It copies the link to that map that can be shared and viewed by anyone.

<img src="https://github.com/archa-agrawal/mapi-ui/blob/main/document/Screen%20Shot%202022-09-03%20at%201.03.24%20PM.png?raw=true" alt="home-page" />
