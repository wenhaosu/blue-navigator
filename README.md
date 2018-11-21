# blue-navigator
> Find your destination classroom in UM!

## Folder Structure and File List

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── sql
│   ├── blue_navigator_db.sqlite3
│   ├── buildings.json
│   ├── import_data.py
│   ├── locations.json
│   └── room.csv
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── common.css
    ├── common.js
    ├── components
    │   ├── entrance-box.css
    │   ├── entrance-box.js
    │   ├── footer.css
    │   ├── footer.js
    │   ├── intro-box.css
    │   ├── intro-box.js
    │   ├── locations.json
    │   ├── map-with-direction.js
    │   ├── map-with-marker.js
    │   ├── navbar-mobile.css
    │   ├── navbar-mobile.js
    │   ├── navbar.css
    │   ├── navbar.js
    │   ├── searchbox.css
    │   └── searchbox.js
    ├── fonts
    │   └── fonts.css
    ├── home
    │   ├── data.json
    │   ├── home.css
    │   ├── home.js
    │   ├── library-card.css
    │   ├── library-card.js
    │   ├── pitch-card.css
    │   ├── pitch-card.js
    │   ├── pitch.css
    │   ├── pitch.js
    │   ├── slide.js
    │   ├── slides.css
    │   └── slides.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── room.xlsx
    ├── search
    │   ├── entrance-page.css
    │   ├── entrance-page.js
    │   ├── intro-page.css
    │   ├── intro-page.js
    │   ├── nav-page.css
    │   ├── nav-page.js
    │   ├── room-page.css
    │   ├── room-page.js
    │   ├── search.css
    │   └── search.js
    ├── serviceWorker.js
    └── static
        ├── building-intro-info.json
        ├── demo.png
        ├── entrance-info.json
        ├── img
        │   └── floors.psd
        ├── locations.json
        ├── logo-white-frame.png
        └── logo-white-frame.svg

9 directories, 66 files
```

## Getting Started
### Download this project
```
git clone https://github.com/WenhaoSu/blue-navigator.git
cd blue-navigator
```
### Install Node.js and npm
```
sudo apt update
sudo apt install nodejs npm
```
### Run Blue Navigator
```
npm install
npm start
```
## Usage
1. On our home page, select (or text enter) your destination building and classroom, then press the enter icon. We currently only support Bob and Betty Beyster Building.

2. The first page on the result html is a brief introduction of your selected building. Scroll down to the second page.

3. The second page is our first navigation step: navigate from your current location to the destination building. You may need to turn on authorization of your current location in the pop-up balloon. The accuracy of your current location depends on internet and your device.

4. The third page asks user to select their entrance when they reached the building. Users could also select the room which is closest to them if they are already in this building.

5. The fourth page is our second navigation step: navigate to your destination room. Green mark denotes the start position and red mark denotes target position.

## Features
* Use HTML, CSS, Javascript
* Use React and Bootstrap
* Use Amazon S3 to store image and font
* Optimize experience for pad and mobile phone users
* The BGM in our Demo video is a not a function of our website
