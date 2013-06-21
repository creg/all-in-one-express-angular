'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ExpressangularGenerator = module.exports = function ExpressangularGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ExpressangularGenerator, yeoman.generators.Base);
/*
ExpressangularGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};*/

ExpressangularGenerator.prototype.app = function app() {
  this.copy('package.json', 'package.json');
  this.copy('Gruntfile.js', 'Gruntfile.js');
};


ExpressangularGenerator.prototype.client = function client() {
  this.mkdir('client');
  this.directory('client', 'client');
};

ExpressangularGenerator.prototype.server = function server() {
  this.mkdir('server');
  this.mkdir('server/public');
  this.mkdir('server/routes');


  this.copy('server/.bowerrc', 'server/.bowerrc');
  this.copy('server/app.js', 'server/app.js');
  this.copy('server/bower.json', 'server/bower.json');
  this.copy('server/Gruntfile.js', 'server/Gruntfile.js');
  this.copy('server/package.json', 'server/package.json');
  this.copy('server/routes/user.js', 'server/routes/user.js');
};

ExpressangularGenerator.prototype.node = function node() {
  this.mkdir('node');
  this.directory('node', 'node');
};

ExpressangularGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
