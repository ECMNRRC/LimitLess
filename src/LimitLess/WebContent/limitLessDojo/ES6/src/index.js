require("@babel/register");
import _ from 'lodash';

console.warn('limitLess V2');

var jQ= require('jquery');
global.window.jQuery= global.window.jquery= global.window.$= jQ;

require('jquery-ui');
require("jquery-ui/ui/widgets/draggable");
require("jquery-ui/ui/widgets/sortable");
require("jquery-ui/ui/widgets/menu");
require("jquery-ui/ui/widgets/resizable");
require("jquery-ui/ui/widgets/autocomplete");

require('jquery-contextmenu/dist/jquery.contextMenu');
require('jquery-contextmenu/dist/jquery.ui.position');


global.window.FileSaver = require('file-saver');

import DOMPurify from 'node_modules/dompurify';
global.window.DOMPurify = DOMPurify;

import * as html2canvas from 'node_modules/html2canvas';
global.window.html2canvas= html2canvas;

import ApexCharts from 'node_modules/apexcharts'
global.window.ApexCharts= ApexCharts;

import Select2 from 'node_modules/select2/dist/js/select2.full.min'
global.window.Select2= Select2;

// import ClassicEditor from 'node_modules/@ckeditor/ckeditor5-build-classic';
// global.window.ClassicEditor= ClassicEditor;

import * as downloadjs from 'node_modules/downloadjs'
global.window.downloadjs = downloadjs;

global.window.ExcelJS = require('node_modules/exceljs');

import * as FlipClock from 'node_modules/flipclock';
global.window.FlipClock= FlipClock;



global.window.CryptoJS = require("crypto-js");



import SignaturePad from 'signature_pad';
global.window.SignaturePad= SignaturePad;


// Style
import './style/style.scss';


window['adrum-start-time'] = new Date().getTime();
(function(config){
    config.appKey = 'EUM-AAB-AVP';
    config.adrumExtUrlHttp = 'http://cdn.appdynamics.com';
    config.adrumExtUrlHttps = 'https://cdn.appdynamics.com';
    config.beaconUrlHttp = 'http://apmeum.hrsd.gov.sa:80';
    config.beaconUrlHttps = 'https://apmeum.hrsd.gov.sa:443';
    config.xd = {enable : false};
})(window['adrum-config'] || (window['adrum-config'] = {}));

var script1 = document.createElement('script');
script1.setAttribute('src', '//cdn.appdynamics.com/adrum/adrum-20.12.0.3360.js');
script1.onload = function(){ console.log("done load external script");}
document.head.appendChild(script1);

