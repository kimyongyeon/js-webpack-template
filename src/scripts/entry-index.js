// entry-index.js

if (process.env.NODE_ENV !== 'production') {
  require('../index.html');
}

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';

import '../styles/style.css';
import '../styles/style.scss'; 
import {ab} from './module-a';
import {a} from './module-b';
import {b} from './module-c';  
console.log(ab); // "나는 a, a를 외부에 노출시키지 않고 변수 a를 활용!"
console.log(a); // "모듈 a에 존재하는 변수 a와는 다른 스코프를 가짐"