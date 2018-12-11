# blue-navigator
> Find your destination classroom in UM!

## Folder Structure and File List

```
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
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
    │   ├── navbar.css
    │   ├── navbar.js
    │   ├── navbar-mobile.css
    │   ├── navbar-mobile.js
    │   ├── searchbox.css
    │   └── searchbox.js
    ├── fonts
    │   └── fonts.css
    ├── home
    │   ├── data.json
    │   ├── home.css
    │   ├── home.js
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

9 directories, 63 files
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
1. On our home page, select (or text enter) your destination building and classroom. The dropbox options would be filtered based on user input. If the current input is not a valid result (either not exist or not supported by our system), no result will be shown in the dropbox. Then press the enter icon. An alert will be shown on the website. We currently only support Bob and Betty Beyster Building.

2. The first page on the result html is a brief introduction of your selected building. Scroll down to the second page.

3. The second page is our first navigation step: navigate from your current location to the destination building. You may need to turn on authorization of your current location in the pop-up notification window. The accuracy of your current location depends on the current internet connection and your device. Scroll down to the third page.

4. The third page asks user to select their entrance when they reached the building. Users could also select the room which is closest to them if they are already in this building. Scroll down to the fourth page.

5. The fourth page is our second navigation step: navigate to your destination room. Green mark denotes the start position and red mark denotes target position. If the start position and the target room are on the same floor, the map will be shown on only one tab. Otherwise there will be multiple tabs.

## Features
* Use HTML, CSS, Javascript
* Use React and Bootstrap
* Use Amazon S3 to store image and font
* Optimize experience for pad and mobile phone users
* The BGM in our Demo video is a not a function of our website
