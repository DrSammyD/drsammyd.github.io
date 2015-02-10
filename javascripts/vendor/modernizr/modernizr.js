window.Modernizr=function(e,t,n){function i(e){b.cssText=e}function r(e,t){return i(k.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var i in e){var r=e[i];if(!o(r,"-")&&b[r]!==n)return"pfx"==t?r:!0}return!1}function l(e,t,i){for(var r in e){var o=t[e[r]];if(o!==n)return i===!1?e[r]:a(o,"function")?o.bind(i||t):o}return!1}function u(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+C.join(i+" ")+i).split(" ");return a(t,"string")||a(t,"undefined")?s(r,t):(r=(e+" "+T.join(i+" ")+i).split(" "),l(r,t,n))}function c(){h.input=function(n){for(var i=0,r=n.length;r>i;i++)O[n[i]]=!!(n[i]in x);return O.list&&(O.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),O}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var i,r,a,o=0,s=e.length;s>o;o++)x.setAttribute("type",r=e[o]),i="text"!==x.type,i&&(x.value=_,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&x.style.WebkitAppearance!==n?(g.appendChild(x),a=t.defaultView,i=a.getComputedStyle&&"textfield"!==a.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?x.checkValidity&&x.checkValidity()===!1:x.value!=_)),N[e[o]]=!!i;return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.7.2",h={},m=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),_=":)",w={}.toString,k=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",C=S.split(" "),T=S.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},D={},N={},O={},j=[],A=j.slice,F=function(e,n,i,r){var a,o,s,l,u=t.createElement("div"),c=t.body,d=c||t.createElement("body");if(parseInt(i,10))for(;i--;)s=t.createElement("div"),s.id=r?r[i]:v+(i+1),u.appendChild(s);return a=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(c?u:d).innerHTML+=a,d.appendChild(u),c||(d.style.background="",d.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),o=n(u,e),c?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=l),!!o},M=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var i;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),i},P=function(){function e(e,r){r=r||t.createElement(i[e]||"div"),e="on"+e;var o=e in r;return o||(r.setAttribute||(r=t.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(e,""),o=a(r[e],"function"),a(r[e],"undefined")||(r[e]=n),r.removeAttribute(e))),r=null,o}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),I={}.hasOwnProperty;f=a(I,"undefined")||a(I.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return I.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=A.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=t.prototype;var a=new r,o=t.apply(a,n.concat(A.call(arguments)));return Object(o)===o?o:a}return t.apply(e,n.concat(A.call(arguments)))};return i}),D.flexbox=function(){return u("flexWrap")},D.flexboxlegacy=function(){return u("boxDirection")},D.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},D.canvastext=function(){return!(!h.canvas||!a(t.createElement("canvas").getContext("2d").fillText,"function"))},D.webgl=function(){return!!e.WebGLRenderingContext},D.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",k.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},D.geolocation=function(){return"geolocation"in navigator},D.postmessage=function(){return!!e.postMessage},D.websqldatabase=function(){return!!e.openDatabase},D.indexedDB=function(){return!!u("indexedDB",e)},D.hashchange=function(){return P("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},D.history=function(){return!(!e.history||!history.pushState)},D.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},D.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},D.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),o(b.backgroundColor,"rgba")},D.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),o(b.backgroundColor,"rgba")||o(b.backgroundColor,"hsla")},D.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},D.backgroundsize=function(){return u("backgroundSize")},D.borderimage=function(){return u("borderImage")},D.borderradius=function(){return u("borderRadius")},D.boxshadow=function(){return u("boxShadow")},D.textshadow=function(){return""===t.createElement("div").style.textShadow},D.opacity=function(){return r("opacity:.55"),/^0.55$/.test(b.opacity)},D.cssanimations=function(){return u("animationName")},D.csscolumns=function(){return u("columnCount")},D.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((e+"-webkit- ".split(" ").join(t+e)+k.join(n+e)).slice(0,-e.length)),o(b.backgroundImage,"gradient")},D.cssreflections=function(){return u("boxReflect")},D.csstransforms=function(){return!!u("transform")},D.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},D.csstransitions=function(){return u("transition")},D.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,i){var r=t.getElementById("smodernizr"),a=r.sheet||r.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(o)&&0===o.indexOf(i.split(" ")[0])}),e},D.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',_,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},D.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},D.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},D.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},D.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},D.webworkers=function(){return!!e.Worker},D.applicationcache=function(){return!!e.applicationCache},D.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect},D.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==E.svg},D.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(E.svg,"animate")))},D.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(E.svg,"clipPath")))};for(var R in D)f(D,R)&&(d=R.toLowerCase(),h[d]=D[R](),j.push((h[d]?"":"no-")+d));return h.input||c(),h.addTest=function(e,t){if("object"==typeof e)for(var i in e)f(e,i)&&h.addTest(i,e[i]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(g.className+=" "+(t?"":"no-")+e),h[e]=t}return h},i(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=v[e[m]];return t||(t={},g++,e[m]=g,v[g]=t),t}function a(e,n,i){if(n||(n=t),c)return n.createElement(e);i||(i=r(n));var a;return a=i.cache[e]?i.cache[e].cloneNode():h.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!a.canHaveChildren||p.test(e)||a.tagUrn?a:i.frag.appendChild(a)}function o(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||r(e);for(var a=n.frag.cloneNode(),o=0,s=i(),l=s.length;l>o;o++)a.createElement(s[o]);return a}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var i=r(e);return!y.shivCSS||u||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||s(e,i),e}var u,c,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,c=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:c,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:o};e.html5=y,l(t)}(this,t),h._version=p,h._prefixes=k,h._domPrefixes=T,h._cssomPrefixes=C,h.mq=M,h.hasEvent=P,h.testProp=function(e){return s([e])},h.testAllProps=u,h.testStyles=F,h.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+j.join(" "):""),h}(this,this.document);