!function(){"use strict";var n=document.querySelector(".nav-container"),t=document.querySelector(".nav-toggle");t.addEventListener("click",function(e){if(t.classList.contains("is-active"))return v(e);document.documentElement.classList.add("is-clipped--nav"),t.classList.add("is-active"),n.classList.add("is-active"),window.addEventListener("click",v),f(e)}),n.addEventListener("click",f);var e=n.querySelector("[data-panel=menu]");if(e){var i,a,s,c,o,r=(i=window.sessionStorage.getItem("nav-state"))&&"1"===(i=JSON.parse(i)).__version__?i:{__version__:"1"},l=(a=r,s=n.dataset.component,c=n.dataset.version,a[o=c+"@"+s]||(a[o]={}));n.querySelector(".context").addEventListener("click",function(){var e=n.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),n.querySelector("[data-panel="+t+"]").classList.toggle("is-active")}),g(".nav-item-toggle",e).forEach(function(e){var t=e.parentElement;e.addEventListener("click",function(){t.classList.toggle("is-active"),l.expandedItems=m(),p()});var n=function(e,t){var n;if("nextElementSibling"in e)n=e.nextElementSibling;else for(n=e;(n=n.nextSibling)&&1!==n.nodeType;);return n&&t?n[n.matches?"matches":"msMatchesSelector"](t)&&n:n}(e,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",function(){t.classList.toggle("is-active"),l.expandedItems=m(),p()}))}),g(".nav-item",e).forEach(function(e,t){e.setAttribute("data-id","menu-"+e.dataset.depth+"-"+t)});var d=l.expandedItems||(l.expandedItems=[]);d.length&&g(d.map(function(e){return'.nav-item[data-id="'+e+'"]'}).join(","),e).forEach(function(e){e.classList.add("is-active")});var u=e.querySelector(".is-current-page");u&&function(e){var t,n=[e.dataset.id],i=e.parentNode;for(;!(t=i.classList).contains("nav-menu");)"LI"===i.tagName&&t.contains("nav-item")&&(t.add("is-active","is-current-path"),n.push(i.dataset.id)),i=i.parentNode;return e.classList.add("is-active"),n}(u).forEach(function(e){d.indexOf(e)<0&&d.push(e)}),p(),function(e,t,n){if(!n)return t.scrollTop=e;var i=n.offsetTop;i<e?t.scrollTop=i-10:i-t.offsetHeight+n.offsetHeight>e?t.scrollTop=i-t.offsetHeight+n.offsetHeight+10:t.scrollTop=e}(l.scroll||0,e,u&&u.querySelector(".nav-link")),e.addEventListener("scroll",function(){l.scroll=Math.round(e.scrollTop),p()})}function v(e){3!==e.which&&2!==e.button&&(document.documentElement.classList.remove("is-clipped--nav"),t.classList.remove("is-active"),n.classList.remove("is-active"),window.removeEventListener("click",v),f(e))}function f(e){e.stopPropagation()}function m(){return g(".is-active",e).map(function(e){return e.dataset.id})}function p(){window.sessionStorage.setItem("nav-state",JSON.stringify(r))}function g(e,t){return[].slice.call((t||document).querySelectorAll(e))}}();
!function(){"use strict";var o=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function i(e){e&&(window.location.hash="#"+this.id,e.preventDefault()),window.scrollTo(0,function e(t,n){return o.contains(t)?e(t.offsetParent,t.offsetTop+n):n}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var n,o;(n=window.location.hash)&&(o=document.getElementById(n.slice(1)))&&(i.bind(o)(),setTimeout(i.bind(o),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,n;(t=e.hash.slice(1))&&(n=document.getElementById(t))&&e.addEventListener("click",i.bind(n))})}();
!function(){"use strict";var e=document.querySelector(".page-versions .version-menu-toggle");if(e){var t=document.querySelector(".page-versions");e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),window.addEventListener("click",function(){t.classList.remove("is-active")})}}();
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==t.length&&t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})});