
// // 轮播图逻辑
// console.log('实现轮播图的业务逻辑')
// // tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑')

import "./banner.js";
import "./tabs.js";

import $ from "jquery";
$("#swiper").css("background-color", "red");

import imgUrl from "./assets/1.gif";

let img = document.createElement("img");
img.src = imgUrl;
document.body.appendChild(img);