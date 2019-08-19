# Contributing 

## Mirror Software:
To contribute to WizardMirror its important to understand how the software works. WizardMirror uses [Electronjs](https://electronjs.org), as an HTML rendering library. The main script is [`main.js`](main.js), which uses [Electronjs](https://electronjs.org) to convert main.html into a desktop application. [`main.html`](main.html) uses a [black background](main.css#L2), and displays in [white text](main.css#L3), to give it the mirror effect, while still displaying text. All Application processes occur in [`main.html`](main.html). [`main.html`](main.html) has a [script](main.html#L47), which attaches scripts and css from apps.json to the document. Electronjs allows you to use node modules in html scripts, so you will not need browserify or any client side-implementation.

## Improving WizardMirror
You can make pull requests to improve WizardMirror. While improving WizardMirror make sure that if you change any file like [`main.js`](main.js) or [`main.html`](main.html), which have line numbers cited in this readme then make sure to also include those changes in the readme and if you need help doing so, then tell me so in the pull request. If I have not seen your pull request, you can email me, and I'll try to get back asap, usually once I'm free from school work :).


## Making Apps
The time app is a great example for making apps. WizardMirror has some guidelines for App development, and some example links to the time app, for clarifiction:
- Only [one funciton](apps/time/time.js#L2) should be used in a script, which should be [called at the begining](apps/time/time.js#L1) of the script. 
- All other functions and variables should be [enclosed inside the funciton](apps/time/time.js#L14)
- The apps should [read for config or user settings](apps/time/time.js#L4) from [apps.json](appsSample.json#L27).
- If your app displays content on the screen then you should have a [div option](appsSample.json#L31) in the apps.json, which allows users to easily manage where they place their apps.
- Each [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) element should have a [className](apps/time/time.js#L25), so that you can write CSS for it, but no ids, otherwise there may be conflicting ID's.
- Since other apps may have [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) elements with the same class names, while writing CSS, make sure that you do not just use class names or element tags. Use a [combination of the div position ID and the class name](apps/time/time.css#L1) to define CSS. Here is a list of [positions](#positions) on your WizardMirror.
- Test your app on a fresh install of WizardMirror, just to be sure.

The javascript file of the app that will be defined in the [apps.json](appsSample.json#L28) is injected in [`main.html`](mian.html) by this [script](mian.html#L47). So you can write js for WizardMirror similar to the way you would write js for an HTML document. The only difference is since electron is rendering the js, you can use your favourite [node](https://nodejs.org/en/about/) modules. This setting is defined [here](main.js#L16). I'll create a page soon where all 3<sup>rd</sup> party apps can be 
displayed.
### Positions
Here is a list of positions, where you can place your apps
![Positions](positions.png)
