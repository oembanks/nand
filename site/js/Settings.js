// set Home document.title
let doc = `n@nd`


// initial theme
let set = `Light`;

/*
    backgroundImage [array]

      Applications
        main, container

      Result
        set background
        element: container / main

*/

// backgroundImage path can be
// overwritten in themes files, see Example.js

let backgroundImage = [
  {
    // note: path begins in index.html folder
    path: "site/images/Belgin_London-Clock.png",
    element: "container",
    position: "center",
    size: "auto",
  },
];

//  {
//    obFn: `Object Function (in example file in js/themes)`,
//    class: `class click Event (generated from this array)`,
//    icon: https://fontawesome.com/cheatsheet
//  }

let themes = [
  { obFn: `Light`, class: `Light`, icon: `fa-terminal` },
  { obFn: `Night`, class: `Night`, icon: `fa-code` },
  { obFn: `Gentoo`, class: `Gentoo`, icon: `fa-users` },
];

const favorites = [
  `Reddit/iPhone`,
  `Reddit/Desktop`,
  `Reddit/Wallpaper`,
  `Reddit/Wallpapers`,
  `Reddit/Los Angeles`,
  `Reddit/San Francisco`,
]

/*
    bootup [boolean/integer]

      Applications
        Init.js

      Result
        app bootup animation

*/

let bootup = false;

/*
    topBar [boolean/integer]

      Applications
        sideBarDisplay

      Result
        toggle hidden in guide

*/

let topBar = true;

/*
    display [boolean/integer]

      Applications
        display/Legacy
        display/Flex

      Result
        `flexBox`,
        `legacy`

*/

let display = `flexBox`;

/*
    Reader [boolean/integer]

      Applications
        main/Events
        xml/Events

      Result
        scroll call anyRandomMenuObject

*/

let Reader = false;

/*
    readPrevious [boolean/integer]

      Applications
        main/Helpers
        xml/Request

      Result
        random array reset category switch

*/

let readPrevious = false;

/*
    onScreen [boolean/integer]

      Applications
        sideBar/Display
        xml/Append
        main/Init

      Result
        show sideBar

*/

let onScreen = false;


/*
    sideBarDock [boolean/integer]

      Applications
        sideBar/Display

      Result
        dock sideBar

*/

let sideBarDock = false;

/*
    sideBarLock [boolean/integer]

      Applications
        sideBar/Display
        sideBar/Events

      Result
        lock sideBar onScreen

*/

let sideBarLock = false;

/*
    expand [boolean/integer]

      Applications
        css/Class
        group

      Result
        false `blocks`
        true `list`

*/

let expand = true;

/*
    showSplash [boolean/integer]

      Applications
        display
        group
        xml

      Result
        Show Loading Splash.

*/

let showSplash = false;

/*
    sideBarCenter [boolean/integer]

      Applications
        Init

      Result
        center sidebar

*/

let sideBarCenter = true;

/*
    sideBarBackdrop [boolean/integer]

      Applications
        Init

      Result
        add backdrop sidebar

*/

let sideBarBackdrop = true;

/*
    sideBarMousewheel [boolean/integer]

      Applications
        sidebar/Events

      Result
        display sideBar with Mouse.

*/

let sideBarMouse = true;

/*
    sideBarMousewheel [boolean/integer]

      Applications
        sideBar/Events

      Result
        display sideBar with Mousewheel.

*/

let sideBarMousewheel = false;

/*
    toggleBorders [boolean/integer]

      Applications
        build/xmlHTMLBuild

      Result
        toggle border.

*/

let toggleBorders = true;

/*
    onlySearch [boolean/integer]

      Applications
        Init

      Result
        only display page visit search bar

*/

let onlySearch = false;

/*
    quickFeeds [boolean/integer]

      Applications
        Init

      Result
        toggle quickFeedDisplay

*/

let quickFeeds = true;

/*
    scrollIntoView [boolean/integer]

      Applications
        Progress

      Result
        adds padding-top and animates out

*/

let scrollIntoView = true;

/*
    imageLoader [boolean/integer]

      Applications
        xmlHTMLBuild

      Result
        `double-circle`
        `ring-circle`
        `loading`
        `v-bars`
        false

*/

let imageLoader = `loading`;

/*
    cropImages [boolean/integer]

      Applications
        image/Dimensions

      Result
        crop images to center

*/

let cropImages = false;

/*
    fadeIntoView [boolean/integer]

      Applications
        build/xmlHTMLBuild
        Progress

      Result
        fades img in with scaling

*/

let fadeIntoView = false;

/*
    loading [string]

      Applications
        Progress
        Helpers

      Result
        `dots`
        `percent`

*/

let loading = `percent`;

/*
    titleTruncate [integer]

      Applications
        xml/Request

      Result
        trim xhr title

*/

let titleTruncate = 125;

/*
    category [translations/legacy]

      Applications
        none

      Result
        legacy feature

*/

let category = `Local`;

/*
    onlyImages [boolean/integer]

      Applications
        helpers
        group
        xml

      Result
        display only images

*/

let onlyImages = false;

/*
    feedImages [boolean/integer]

      Applications
        build/xmlHTMLBuild

      Result
        display images

*/

let feedImages = true;

/*
    youtubeMedia [boolean/integer]

      Applications
      image/Attributes
        xml/Request

      Result
        false = Images
        true = Videos

*/

let youtubeMedia = false;

/*
    suggestionBuffer [integer]

      Applications
        input/Input

      Result
        input response buffered to [integer]

*/

let suggestionBuffer = 12;

/*
    contentStatusBuffer [integer]

      Applications
        xml/Suggest

      Result
        generated suggestions

*/

let contentStatusBuffer = 7;

/*
    omitGuide [boolean/integer]

      Applications
        xml/Append

      Result
        Guide Posts not in feed

*/

let omitGuide = false;

/*
    hash [boolean/integer]

      Applications
        xml/Request
        xml/Hash

      Result
        `long`
        `short`
        `title`

*/

let hash = `short`;

/*
    safeSearch [string]

      Applications
        image/Attributes

      Result
        greater than string filtered [unused]

*/
let safeSearchScore = `0.013473876751959324`;

/*
    safeSearchIDs [array]

      Applications
        image/Attributes

      Result
        ids applied searchSearch

*/

let safeSearchIDs = [

];

/*
    exclude [array]

      Applications
        xml/Request
        xml/Append
        init

      Result
        filter titles excluded

*/

let exclude = [`Buy`, `Sale`, `Save`, `Price`, `Shop`, `Directions`, `Coupon`, `Travel`, `Videos`, `Media`, `Movies`, `Detail`];

/*
    cors [string]

      Applications
        image/Attributes
        xml/Request

      Result
        ty heroku (cors-anywhere instance)

*/

const cors = `https://oembanks-1615a0956a22.herokuapp.com/`;
//const cors = `https://cors-anywhere.herokuapp.com/` url;
//const cors = `https://corsproxy.io/?` url;

/*  translations [array]

      Applications
        build/Build

      Result
        menu array filtered and shown

      Option
        Reorder.

*/

const translations = [
  `Reddit`,
  `Local`,
  `Global`,
  `Sports`,
  `Technology`,
  `World`,
  `Youtube`,
];

/* Feel free to edit the above. */

let verticalbars;
let doublecircle;
let loaderfalse;
let loadinganim;
let ringcircle;
let Dots;
let Percent;
let Blocks;
let List;

if (imageLoader == `v-bars`) {
  circleloader = false;
  ringloader = false;
  verticalbars = true;
  loadinganim = false;
  loaderfalse = false;
} else if (imageLoader == `double-circle`){
  verticalbars = false;
  ringloader = false;
  circleloader = true;
  loadinganim = false;
  loaderfalse = false;
} else if (imageLoader == `ring-circle`){
  circleloader = false;
  verticalbars = false;
  ringloader = true;
  loadinganim = false;
  loaderfalse = false;
} else if (imageLoader == `loading`){
  circleloader = false;
  verticalbars = false;
  loaderfalse = false;
  ringloader = false;
  loadinganim = true;
} else if (imageLoader == false){
  circleloader = false;
  verticalbars = false;
  ringloader = false;
  loaderfalse = true;
  loadinganim = false;
}

if (loading == `percent`) {
  Dots = false;
  Percent = true;
} else {
  Dots = true;
  Percent = false;
}
if (expand == true) {
  Blocks = false;
  List = true;
} else {
  Blocks = true;
  List = false;
}

let expandAnimations = false;
let expandBackground = false;
let expandFavorites = false;
let expandSettings = false;
let expandVisual = false;
let expandFilter = false;
let cycleViewport // display viewport index
let viewport = ['legacy', 'flexBox']
let quit; // xmlRequestParsing pub length
if (Reader == false) quit = 30;
else quit = 16;
let post; //from init.js global timestamp for guide
let id; //feed indexOf menu
let tap = 0; //used in mainEvents.js for images
let httpRequest; //uri xml httpRequest
let random = []; //core.js random feed in category
let filter = []; //response array for menu objects
let first = true; //reader append feed center channel
let count = []; //progressBackdrop init calls
let pub = []; //raw html of publication
let local; //copy of post in base36
let index; //copy of id used in guide
let offset; //touchmove scroll reader
let adj = []; //menu randomized
let complete; //progressBar interval
let images = []; //array of images in request
let onlyImagesBuffer = onlyImages; // used in Reader
let touchmove = false; // scrollToElements
let touchendY = 0; // handleSwip, handleGuide
let touchstartY = 0; // handleSwip, handleGuide
let touchendX = 0; // handleSwip, handleGuide
let touchstartX = 0; // swipe variables
let contrast = false; //opposite of op +1
let sideBarFirst = true; //first click show
let imageDuplicate = []; //image src duplicate catch
let randomDuplicate = []; //core.js random duplicate xml
let guideOnScreen; //temporarly store onScreen for guide

const animations = [
  { name: `Ring`, class: `ringloader` },
  { name: `Bars`, class: `verticalbars` },
  { name: `Blink`, class: `loaderfalse` },
  { name: `Loading`, class: `loadinganim` },
  { name: `Circles`, class: `circleloader` },
  { name: `Percent`, class: `Percent` },
  { name: `Progress`, class: `Progress` }
]

const settings = [
  { name: `List`, class: `List` },
  { name: `Blocks`, class: `Blocks` },
  { name: `Only Images`, class: `onlyImages` },
  { name: `Only Search`, class: `onlySearch` },
  { name: `Fade in Images`, class: `fadeIntoView` },
  { name: `Scroll Into View`, class: `scrollIntoView` },
  { name: `Sidebar Backdrop`, class: `sideBarBackdrop` },
  { name: `Sidebar Dock`, class: `sideBarDock` },
];

const background = [
  { name: `Fit Container`, class: `fitBackground`, icon: `fa-crop-alt` },
  { name: `Set Background`, class: `setBackground`, icon: `fa-user` },
  { name: `Save Path`, class: `saveBackground`, icon: `fa-download` },
  { name: `Layer Group`, class: `containerBackground`, icon: `fa-layer-group` },
  { name: `Cover Background`, class: `coverBackground`, icon: `fa-expand` },
  { name: `Reset Path`, class: `resetBackground`, icon: `fa-cloud` },
  { name: `Remove`, class: `removeBackground`, icon: `fa-certificate` },
];
