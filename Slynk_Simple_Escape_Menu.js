//=============================================================================
// Slynk - Simple Escape Menu
// Slynk_Simple_Escape_Menu.js
//=============================================================================

var Imported = Imported || {};
Imported.Slynk_Simple_Escape_Menu = true;

var Slynk = Slynk || {};
Slynk.SimpleEscapeMenu = Slynk.SimpleEscapeMenu || {};

//=============================================================================
/*:
 @plugindesc v1.0 A simpler escape menu.
 @author Slynk
 */


//-----------------------------------------------------------------------------
// Scene_Menu
//
// Override scene menu to customize the options.
Scene_Menu.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_MenuCommand(0, 0);
    this._commandWindow.x = 308;
    this._commandWindow.y = Graphics.height / 2 - 100;
    this._commandWindow.opacity = 255;
    this._commandWindow.setHandler('item',      this.commandItem.bind(this));
    this._commandWindow.setHandler('options',   this.commandOptions.bind(this));
    this._commandWindow.setHandler('save',      this.commandSave.bind(this));
    this._commandWindow.setHandler('load',      this.commandLoad.bind(this));
    this._commandWindow.setHandler('gameEnd',   this.commandGameEnd.bind(this));
    this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_Menu.prototype.commandLoad = function() {
    SceneManager.push(Scene_Load);
};

Scene_Menu.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
};

Scene_Menu.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
};

//-----------------------------------------------------------------------------
// Window_MenuCommand
//
// Override scene menu to customize the options.

Window_MenuCommand.prototype.makeCommandList = function() {
    this.addMainCommands();
    this.addOptionsCommand();
    this.addSaveCommand();
    this.addLoadCommand();
    this.addGameEndCommand();
};

Window_MenuCommand.prototype.addMainCommands = function() {
    var enabled = this.areMainCommandsEnabled();
    if (this.needsCommand('item')) {
        this.addCommand('Items', 'item', enabled);
    }
};

Window_MenuCommand.prototype.addGameEndCommand = function() {
    var enabled = this.isGameEndEnabled();
    this.addCommand('Quit', 'gameEnd', enabled);
};


Window_MenuCommand.prototype.addLoadCommand = function() {
    this.addCommand('Load', 'load', true);
};