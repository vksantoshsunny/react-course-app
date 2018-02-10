'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var appobject = {
    title: 'Mission Impossible',
    subtitle: 'part 5',
    options: ['part 1', 'part 2', 'part 3']
};
function getList(options) {
    if (options.length > 0) {
        return '';
    }
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appobject.title
    ),
    appobject.subtitle && React.createElement(
        'p',
        null,
        appobject.subtitle
    ),
    appobject && appobject.options && appobject.options.length > 0 && React.createElement(
        'ol',
        null,
        'Here is the list'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
