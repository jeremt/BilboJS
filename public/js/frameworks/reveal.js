/**
    Head JS     The only script in your <HEAD>
    Copyright   Tero Piirainen (tipiirai)
    License     MIT / http://bit.ly/mit-license
    Version     0.96

    http://headjs.com
*/(function(a){function z(){d||(d=!0,s(e,function(a){p(a)}))}function y(c,d){var e=a.createElement("script");e.type="text/"+(c.type||"javascript"),e.src=c.src||c,e.async=!1,e.onreadystatechange=e.onload=function(){var a=e.readyState;!d.done&&(!a||/loaded|complete/.test(a))&&(d.done=!0,d())},(a.body||b).appendChild(e)}function x(a,b){if(a.state==o)return b&&b();if(a.state==n)return k.ready(a.name,b);if(a.state==m)return a.onpreload.push(function(){x(a,b)});a.state=n,y(a.url,function(){a.state=o,b&&b(),s(g[a.name],function(a){p(a)}),u()&&d&&s(g.ALL,function(a){p(a)})})}function w(a,b){a.state===undefined&&(a.state=m,a.onpreload=[],y({src:a.url,type:"cache"},function(){v(a)}))}function v(a){a.state=l,s(a.onpreload,function(a){a.call()})}function u(a){a=a||h;var b;for(var c in a){if(a.hasOwnProperty(c)&&a[c].state!=o)return!1;b=!0}return b}function t(a){return Object.prototype.toString.call(a)=="[object Function]"}function s(a,b){if(!!a){typeof a=="object"&&(a=[].slice.call(a));for(var c=0;c<a.length;c++)b.call(a,a[c],c)}}function r(a){var b;if(typeof a=="object")for(var c in a)a[c]&&(b={name:c,url:a[c]});else b={name:q(a),url:a};var d=h[b.name];if(d&&d.url===b.url)return d;h[b.name]=b;return b}function q(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return d!=-1?c.substring(0,d):c}function p(a){a._done||(a(),a._done=1)}var b=a.documentElement,c,d,e=[],f=[],g={},h={},i=a.createElement("script").async===!0||"MozAppearance"in a.documentElement.style||window.opera,j=window.head_conf&&head_conf.head||"head",k=window[j]=window[j]||function(){k.ready.apply(null,arguments)},l=1,m=2,n=3,o=4;i?k.js=function(){var a=arguments,b=a[a.length-1],c={};t(b)||(b=null),s(a,function(d,e){d!=b&&(d=r(d),c[d.name]=d,x(d,b&&e==a.length-2?function(){u(c)&&p(b)}:null))});return k}:k.js=function(){var a=arguments,b=[].slice.call(a,1),d=b[0];if(!c){f.push(function(){k.js.apply(null,a)});return k}d?(s(b,function(a){t(a)||w(r(a))}),x(r(a[0]),t(d)?d:function(){k.js.apply(null,b)})):x(r(a[0]));return k},k.ready=function(b,c){if(b==a){d?p(c):e.push(c);return k}t(b)&&(c=b,b="ALL");if(typeof b!="string"||!t(c))return k;var f=h[b];if(f&&f.state==o||b=="ALL"&&u()&&d){p(c);return k}var i=g[b];i?i.push(c):i=g[b]=[c];return k},k.ready(a,function(){u()&&s(g.ALL,function(a){p(a)}),k.feature&&k.feature("domloaded",!0)});if(window.addEventListener)a.addEventListener("DOMContentLoaded",z,!1),window.addEventListener("load",z,!1);else if(window.attachEvent){a.attachEvent("onreadystatechange",function(){a.readyState==="complete"&&z()});var A=1;try{A=window.frameElement}catch(B){}!A&&b.doScroll&&function(){try{b.doScroll("left"),z()}catch(a){setTimeout(arguments.callee,1);return}}(),window.attachEvent("onload",z)}!a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",handler=function(){a.removeEventListener("DOMContentLoaded",handler,!1),a.readyState="complete"},!1)),setTimeout(function(){c=!0,s(f,function(a){a()})},300)})(document)
/*!
 * reveal.js 2.1 r35
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2011-2012 Hakim El Hattab, http://hakim.se
 */
var Reveal=(function(){var l=".reveal .slides>section",b=".reveal .slides>section.present>section",R={controls:true,progress:true,history:false,keyboard:true,overview:true,loop:false,autoSlide:0,mouseWheel:true,rollingLinks:true,theme:null,transition:"default",dependencies:[]},Y=R.autoSlide,m=0,e=0,y,G,ak=[],f={},T="WebkitPerspective" in document.body.style||"MozPerspective" in document.body.style||"msPerspective" in document.body.style||"OPerspective" in document.body.style||"perspective" in document.body.style,n="WebkitTransform" in document.body.style||"MozTransform" in document.body.style||"msTransform" in document.body.style||"OTransform" in document.body.style||"transform" in document.body.style,z=0,k=0,D=0,ac={startX:0,startY:0,startSpan:0,startCount:0,handled:false,threshold:80};
function i(al){if((!n&&!T)){document.body.setAttribute("class","no-transforms");return;}t(R,al);d();V();}function P(){f.theme=document.querySelector("#theme");
f.wrapper=document.querySelector(".reveal");if(!f.wrapper.querySelector(".progress")&&R.progress){var ao=document.createElement("div");ao.classList.add("progress");
ao.innerHTML="<span></span>";f.wrapper.appendChild(ao);}if(!f.wrapper.querySelector(".controls")&&R.controls){var an=document.createElement("aside");an.classList.add("controls");
an.innerHTML='<a class="left" href="#">&#x25C4;</a><a class="right" href="#">&#x25BA;</a><a class="up" href="#">&#x25B2;</a><a class="down" href="#">&#x25BC;</a>';
f.wrapper.appendChild(an);}if(!f.wrapper.querySelector(".state-background")){var am=document.createElement("div");am.classList.add("state-background");
f.wrapper.appendChild(am);}if(!f.wrapper.querySelector(".pause-overlay")){var al=document.createElement("div");al.classList.add("pause-overlay");f.wrapper.appendChild(al);
}f.progress=document.querySelector(".reveal .progress");f.progressbar=document.querySelector(".reveal .progress span");if(R.controls){f.controls=document.querySelector(".reveal .controls");
f.controlsLeft=document.querySelector(".reveal .controls .left");f.controlsRight=document.querySelector(".reveal .controls .right");f.controlsUp=document.querySelector(".reveal .controls .up");
f.controlsDown=document.querySelector(".reveal .controls .down");}}function d(){if(navigator.userAgent.match(/(iphone|ipod|android)/i)){document.documentElement.style.overflow="scroll";
document.body.style.height="120%";window.addEventListener("load",ad,false);window.addEventListener("orientationchange",ad,false);}}function V(){var am=[],aq=[];
for(var an=0,al=R.dependencies.length;an<al;an++){var ao=R.dependencies[an];if(!ao.condition||ao.condition()){if(ao.async){aq.push(ao.src);}else{am.push(ao.src);
}if(typeof ao.callback==="function"){head.ready(ao.src.match(/([\w\d_\-]*)\.?[^\\\/]*$/i)[0],ao.callback);}}}function ap(){head.js.apply(null,aq);H();}if(am.length){head.ready(ap);
head.js.apply(null,am);}else{ap();}}function H(){P();E();K();J();O();r("ready",{indexh:m,indexv:e,currentSlide:G});}function K(){if(T===false){R.transition="linear";
}if(R.controls&&f.controls){f.controls.style.display="block";}if(R.progress&&f.progress){f.progress.style.display="block";}if(R.transition!=="default"){f.wrapper.classList.add(R.transition);
}if(R.mouseWheel){document.addEventListener("DOMMouseScroll",o,false);document.addEventListener("mousewheel",o,false);}if(R.rollingLinks){N();}if(R.theme&&f.theme){var an=f.theme.getAttribute("href");
var al=/[^\/]*?(?=\.css)/;var am=an.match(al)[0];if(R.theme!==am){an=an.replace(al,R.theme);f.theme.setAttribute("href",an);}}}function E(){document.addEventListener("touchstart",A,false);
document.addEventListener("touchmove",af,false);document.addEventListener("touchend",W,false);window.addEventListener("hashchange",w,false);if(R.keyboard){document.addEventListener("keydown",ah,false);
}if(R.progress&&f.progress){f.progress.addEventListener("click",q(ai),false);}if(R.controls&&f.controls){f.controlsLeft.addEventListener("click",q(B),false);
f.controlsRight.addEventListener("click",q(j),false);f.controlsUp.addEventListener("click",q(u),false);f.controlsDown.addEventListener("click",q(F),false);
}}function U(){document.removeEventListener("keydown",ah,false);document.removeEventListener("touchstart",A,false);document.removeEventListener("touchmove",af,false);
document.removeEventListener("touchend",W,false);window.removeEventListener("hashchange",w,false);if(R.progress&&f.progress){f.progress.removeEventListener("click",q(ai),false);
}if(R.controls&&f.controls){f.controlsLeft.removeEventListener("click",q(B),false);f.controlsRight.removeEventListener("click",q(j),false);f.controlsUp.removeEventListener("click",q(u),false);
f.controlsDown.removeEventListener("click",q(F),false);}}function t(am,al){for(var an in al){am[an]=al[an];}}function S(an,al){var ao=an.x-al.x,am=an.y-al.y;
return Math.sqrt(ao*ao+am*am);}function q(al){return function(am){am.preventDefault();al.call(null,am);};}function ad(){setTimeout(function(){window.scrollTo(0,1);
},0);}function r(am,al){var an=document.createEvent("HTMLEvents",1,2);an.initEvent(am,true,true);t(an,al);f.wrapper.dispatchEvent(an);}function N(){if(T&&!("msPerspective" in document.body.style)){var am=document.querySelectorAll(".reveal .slides section a:not(.image)");
for(var an=0,al=am.length;an<al;an++){var ao=am[an];if(ao.textContent&&!ao.querySelector("img")&&(!ao.className||!ao.classList.contains(ao,"roll"))){ao.classList.add("roll");
ao.innerHTML='<span data-title="'+ao.text+'">'+ao.innerHTML+"</span>";}}}}function I(){if(R.overview){f.wrapper.classList.add("overview");var al=document.querySelectorAll(l);
for(var aq=0,ao=al.length;aq<ao;aq++){var an=al[aq],av="translateZ(-2500px) translate("+((aq-m)*105)+"%, 0%)";an.setAttribute("data-index-h",aq);an.style.display="block";
an.style.WebkitTransform=av;an.style.MozTransform=av;an.style.msTransform=av;an.style.OTransform=av;an.style.transform=av;if(!an.classList.contains("stack")){an.addEventListener("click",C,true);
}var au=an.querySelectorAll("section");for(var ap=0,am=au.length;ap<am;ap++){var at=au[ap],ar="translate(0%, "+((ap-(aq===m?e:0))*105)+"%)";at.setAttribute("data-index-h",aq);
at.setAttribute("data-index-v",ap);at.style.display="block";at.style.WebkitTransform=ar;at.style.MozTransform=ar;at.style.msTransform=ar;at.style.OTransform=ar;
at.style.transform=ar;at.addEventListener("click",C,true);}}}}function ae(){if(R.overview){f.wrapper.classList.remove("overview");var ao=Array.prototype.slice.call(document.querySelectorAll(".reveal .slides section"));
for(var an=0,al=ao.length;an<al;an++){var am=ao[an];am.style.WebkitTransform="";am.style.MozTransform="";am.style.msTransform="";am.style.OTransform="";
am.style.transform="";am.removeEventListener("click",C);}a();}}function X(al){if(typeof al==="boolean"){al?I():ae();}else{L()?ae():I();}}function L(){return f.wrapper.classList.contains("overview");
}function ab(){var al=document.body;var am=al.requestFullScreen||al.webkitRequestFullScreen||al.mozRequestFullScreen||al.msRequestFullScreen;if(am){am.apply(al);
}}function c(){f.wrapper.classList.add("paused");}function p(){f.wrapper.classList.remove("paused");}function aa(){if(ag()){p();}else{c();}}function ag(){return f.wrapper.classList.contains("paused");
}function a(ar,aw){y=G;var ao=ak.concat();ak.length=0;var av=m,am=e;m=aj(l,ar===undefined?m:ar);e=aj(b,aw===undefined?e:aw);stateLoop:for(var ap=0,at=ak.length;
ap<at;ap++){for(var an=0;an<ao.length;an++){if(ao[an]===ak[ap]){ao.splice(an,1);continue stateLoop;}}document.documentElement.classList.add(ak[ap]);r(ak[ap]);
}while(ao.length){document.documentElement.classList.remove(ao.pop());}if(R.progress&&f.progress){f.progressbar.style.width=(m/(document.querySelectorAll(l).length-1))*window.innerWidth+"px";
}if(L()){I();}s();clearTimeout(D);D=setTimeout(h,1500);var al=document.querySelectorAll(l);var au=al[m],aq=au.querySelectorAll("section");G=aq[e]||au;if(m!==av||e!==am){r("slidechanged",{indexh:m,indexv:e,previousSlide:y,currentSlide:G});
}else{y=null;}if(y){y.classList.remove("present");}}function aj(ao,au){var am=Array.prototype.slice.call(document.querySelectorAll(ao)),at=am.length;if(at){if(R.loop){au%=at;
if(au<0){au=at+au;}}au=Math.max(Math.min(au,at-1),0);for(var aq=0;aq<at;aq++){var ar=am[aq];if(L()===false){var al=Math.abs((au-aq)%(at-3))||0;ar.style.display=al>3?"none":"block";
}am[aq].classList.remove("past");am[aq].classList.remove("present");am[aq].classList.remove("future");if(aq<au){am[aq].classList.add("past");}else{if(aq>au){am[aq].classList.add("future");
}}if(ar.querySelector("section")){am[aq].classList.add("stack");}}am[au].classList.add("present");var an=am[au].getAttribute("data-state");if(an){ak=ak.concat(an.split(" "));
}var ap=am[au].getAttribute("data-autoslide");if(ap){Y=parseInt(ap);}else{Y=R.autoSlide;}}else{au=0;}return au;}function s(){if(R.controls&&f.controls){var al=g();
[f.controlsLeft,f.controlsRight,f.controlsUp,f.controlsDown].forEach(function(am){am.classList.remove("enabled");});if(al.left){f.controlsLeft.classList.add("enabled");
}if(al.right){f.controlsRight.classList.add("enabled");}if(al.up){f.controlsUp.classList.add("enabled");}if(al.down){f.controlsDown.classList.add("enabled");
}}}function g(){var al=document.querySelectorAll(l),am=document.querySelectorAll(b);return{left:m>0,right:m<al.length-1,up:e>0,down:e<am.length-1};}function J(){var aq=window.location.hash;
var ap=aq.slice(2).split("/"),am=aq.replace(/#|\//gi,"");if(isNaN(parseInt(ap[0],10))&&am.length){var an=document.querySelector("#"+am);if(an){var ar=Reveal.getIndices(an);
a(ar.h,ar.v);}else{a(m,e);}}else{var ao=parseInt(ap[0],10)||0,al=parseInt(ap[1],10)||0;a(ao,al);}}function h(){if(R.history){var al="/";if(m>0||e>0){al+=m;
}if(e>0){al+="/"+e;}window.location.hash=al;}}function M(al){var ap=m,an=e;if(al){var aq=!!al.parentNode.nodeName.match(/section/gi);var ao=aq?al.parentNode:al;
var am=Array.prototype.slice.call(document.querySelectorAll(l));ap=Math.max(am.indexOf(ao),0);if(aq){an=Math.max(Array.prototype.slice.call(al.parentNode.children).indexOf(al),0);
}}return{h:ap,v:an};}function v(){if(document.querySelector(b+".present")){var am=document.querySelectorAll(b+".present .fragment:not(.visible)");if(am.length){am[0].classList.add("visible");
r("fragmentshown",{fragment:am[0]});return true;}}else{var al=document.querySelectorAll(l+".present .fragment:not(.visible)");if(al.length){al[0].classList.add("visible");
r("fragmentshown",{fragment:al[0]});return true;}}return false;}function Q(){if(document.querySelector(b+".present")){var am=document.querySelectorAll(b+".present .fragment.visible");
if(am.length){am[am.length-1].classList.remove("visible");r("fragmenthidden",{fragment:am[am.length-1]});return true;}}else{var al=document.querySelectorAll(l+".present .fragment.visible");
if(al.length){al[al.length-1].classList.remove("visible");r("fragmenthidden",{fragment:al[al.length-1]});return true;}}return false;}function O(){clearTimeout(k);
if(Y){k=setTimeout(x,Y);}}function B(){if(L()||Q()===false){a(m-1,0);}}function j(){if(L()||v()===false){a(m+1,0);}}function u(){if(L()||Q()===false){a(m,e-1);
}}function F(){if(L()||v()===false){a(m,e+1);}}function Z(){if(Q()===false){if(g().up){u();}else{var al=document.querySelector(".reveal .slides>section.past:nth-child("+m+")");
if(al){e=(al.querySelectorAll("section").length+1)||0;m--;a();}}}}function x(){if(v()===false){g().down?F():j();}O();}function ah(am){if(document.querySelector(":focus")!==null||am.shiftKey||am.altKey||am.ctrlKey||am.metaKey){return;
}var al=true;switch(am.keyCode){case 80:case 33:Z();break;case 78:case 34:x();break;case 72:case 37:B();break;case 76:case 39:j();break;case 75:case 38:u();
break;case 74:case 40:F();break;case 36:a(0);break;case 35:a(Number.MAX_VALUE);break;case 32:L()?ae():x();break;case 13:L()?ae():al=false;break;case 66:case 190:aa();
break;case 70:ab();break;default:al=false;}if(al){am.preventDefault();}else{if(am.keyCode===27&&T){X();am.preventDefault();}}O();}function A(al){ac.startX=al.touches[0].clientX;
ac.startY=al.touches[0].clientY;ac.startCount=al.touches.length;if(al.touches.length===2&&R.overview){ac.startSpan=S({x:al.touches[1].clientX,y:al.touches[1].clientY},{x:ac.startX,y:ac.startY});
}}function af(aq){if(!ac.handled){var ao=aq.touches[0].clientX;var an=aq.touches[0].clientY;if(aq.touches.length===2&&ac.startCount===2&&R.overview){var ap=S({x:aq.touches[1].clientX,y:aq.touches[1].clientY},{x:ac.startX,y:ac.startY});
if(Math.abs(ac.startSpan-ap)>ac.threshold){ac.handled=true;if(ap<ac.startSpan){I();}else{ae();}}aq.preventDefault();}else{if(aq.touches.length===1&&ac.startCount!==2){var am=ao-ac.startX,al=an-ac.startY;
if(am>ac.threshold&&Math.abs(am)>Math.abs(al)){ac.handled=true;B();}else{if(am<-ac.threshold&&Math.abs(am)>Math.abs(al)){ac.handled=true;j();}else{if(al>ac.threshold){ac.handled=true;
u();}else{if(al<-ac.threshold){ac.handled=true;F();}}}}aq.preventDefault();}}}else{if(navigator.userAgent.match(/android/gi)){aq.preventDefault();}}}function W(al){ac.handled=false;
}function o(al){clearTimeout(z);z=setTimeout(function(){var am=al.detail||-al.wheelDelta;if(am>0){x();}else{Z();}},100);}function ai(am){var al=Array.prototype.slice.call(document.querySelectorAll(l)).length;
var an=Math.floor((am.clientX/f.wrapper.offsetWidth)*al);a(an);}function w(al){J();}function C(al){if(L()){al.preventDefault();ae();m=this.getAttribute("data-index-h");
e=this.getAttribute("data-index-v");a();}}return{initialize:i,slide:a,left:B,right:j,up:u,down:F,prev:Z,next:x,navigateTo:a,navigateLeft:B,navigateRight:j,navigateUp:u,navigateDown:F,navigatePrev:Z,navigateNext:x,toggleOverview:X,addEventListeners:E,removeEventListeners:U,getIndices:M,getPreviousSlide:function(){return y;
},getCurrentSlide:function(){return G;},getQueryHash:function(){var al={};location.search.replace(/[A-Z0-9]+?=(\w*)/gi,function(am){al[am.split("=").shift()]=am.split("=").pop();
});return al;},addEventListener:function(am,an,al){if("addEventListener" in window){(f.wrapper||document.querySelector(".reveal")).addEventListener(am,an,al);
}},removeEventListener:function(am,an,al){if("addEventListener" in window){(f.wrapper||document.querySelector(".reveal")).removeEventListener(am,an,al);
}}};})();