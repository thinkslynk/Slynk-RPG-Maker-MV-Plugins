# Slynk-RPG-Maker-MV-Plugins

## Core Menus
### Introduction
This plugin should greatly reduce the complexity for displaying simple menus.
If you want to show just a list of options, it shouldn't take 40 lines of code.
That's ridiculous...

There are also some quality of life enhancements:

1. There's simply no reason that you should only be able to have one background
snapshot. Now you may call SceneManager.snapForBackground() as often as you'd
like, and it will store a stack of background images to display as you change scenes.

2. There's an annoy bug with columned windows in which if you try to move the cursor
down when there's nothing directly below your cursor, it won't scroll, even if there's
another row still! I have applied the fix to the Window_Selectable definition so it
should be fixed for everything.

### Command Maps - A simpler way to construct menus

A command map is constructed via a simple object with string to function
mapping. The string will be the option displayed in the menu that is
displayed and the function will be called when that option is selected.

Example:
```javascript
    SceneManager.pushSimple({
        "Remove One": function () {
            var item = $gameParty.lastItem();
            $gameParty.loseItem(item, 1, true);

            SceneManager.pop();
        },

        "Remove All": function () {
            var item = $gameParty.lastItem();
            var count = $gameParty.numItems(item);

            $gameParty.setLastItem(item);
            $gameParty.loseItem(item, count, true);

            SceneManager.pop();
        },
        "Cancel": function () {
            SceneManager.pop();
        }
        }, 'center|top');
```
The following anchors are available for aligning the command map:
center|left|right|top|bottom

You can combine anchors by separating them with a pipe '|' e.g.:
'top|left' or 'center|bottom'

## Image Menu
### Introduction

A script that turns your item menu in to a list of pictures. 

### Parameters
//=============================================================================
/*:
@plugindesc v1.0 A manageable item menu with pictures.
@author Slynk

@param ItemColumns
@desc How many columns?
@default 8

@param WindowWidthScale
@desc 1.0 is 100% width, .1 is 10% etc?
@default 0.5

@param WindowHeightScale
@desc 1.0 is 100% height, .1 is 10% etc?
@default 0.8

@param Padding
@desc How much padding?
@default 0.35

@param ShowItemCount
@desc Show how many items the player is carrying?
@default false

@param ShowItemNameBelow
@desc Show the item name below the item?
@default false

@param ShowItemNameWithDescription
@desc Show the item name along side the description?
@default false
*/

## Simple Escape Menu
### Introduction
Just a simpler escape menu. Not much to see really.
