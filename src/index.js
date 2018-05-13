import 'babel-polyfill';
import map from './js/map.js'
 
let app = document.getElementById('app');
let width = window.innerWidth, height = window.innerHeight;
app.style.height = window.height + 'px';
map.setSize([width,height]);

document.body.onresize = function(){
    let width = window.innerWidth, height = window.innerHeight;
    app.style.height = height + 'px';
    map.setSize([width,height]);
}

window.map = map;