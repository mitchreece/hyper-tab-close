# hyper-tab-close

[![npm version](https://badge.fury.io/js/hyper-tab-close.svg)](https://badge.fury.io/js/hyper-tab-close)

A [hyper](https://hyper.is/) plugin that allows you to alt+click on tabs to close them. 

![plugin demo](https://media.giphy.com/media/xUNd9ETJMURAoYQNYk/giphy.gif)

***I should note that hyper ships with the ability to close tabs using a middle button mouse click.***

## Installation

To install and use, simply add 'hyper-tab-close' to your list of plugins in '~/.hyper.js':

```javascript
    plugins: [ 'hyper-tab-close' ],
```

## Customisation

You can also customise the behaviour of this plugin by adding the following to your config object within '~/.hyper.js':

```javascript
    hyperCloseTab: {
        
        // PREVENT ABILITY TO CLOSE ACTIVE TABS
        stopActiveClose: true, //default = false

    }
```