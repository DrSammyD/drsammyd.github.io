!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){function t(t){var e=+t;return e!==e?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e}function e(t){var e=typeof t;return null===t||"undefined"===e||"boolean"===e||"number"===e||"string"===e}function n(t){var n,i,r;if(e(t))return t;if(i=t.valueOf,h(i)&&(n=i.call(t),e(n)))return n;if(r=t.toString,h(r)&&(n=r.call(t),e(n)))return n;throw new TypeError}var i=Array.prototype,r=Object.prototype,a=Function.prototype,o=String.prototype,s=Number.prototype,l=i.slice,u=i.splice,c=i.push,d=i.unshift,f=a.call,p=r.toString,h=function(t){return"[object Function]"===p.call(t)},g=function(t){return"[object RegExp]"===p.call(t)},m=function(t){return"[object Array]"===p.call(t)},v=function(t){return"[object String]"===p.call(t)},y=function(t){var e=p.call(t),n="[object Arguments]"===e;return n||(n=!m(t)&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&h(t.callee)),n},b=function(t){var e,n=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}();return e=n?function(t,e,n,i){!i&&e in t||Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:n})}:function(t,e,n,i){!i&&e in t||(t[e]=n)},function(n,i,r){for(var a in i)t.call(i,a)&&e(n,a,i[a],r)}}(r.hasOwnProperty),_={ToObject:function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return Object(t)},ToUint32:function(t){return t>>>0}},x=function(){};b(a,{bind:function(t){var e=this;if(!h(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var n,i=l.call(arguments,1),r=function(){if(this instanceof n){var r=e.apply(this,i.concat(l.call(arguments)));return Object(r)===r?r:this}return e.apply(t,i.concat(l.call(arguments)))},a=Math.max(0,e.length-i.length),o=[],s=0;a>s;s++)o.push("$"+s);return n=Function("binder","return function ("+o.join(",")+"){ return binder.apply(this, arguments); }")(r),e.prototype&&(x.prototype=e.prototype,n.prototype=new x,x.prototype=null),n}});var w=f.bind(r.hasOwnProperty),k=function(){var t=[1,2],e=t.splice();return 2===t.length&&m(e)&&0===e.length}();b(i,{splice:function(){return 0===arguments.length?[]:u.apply(this,arguments)}},!k);var T=function(){var t={};return i.splice.call(t,0,0,1),1===t.length}();b(i,{splice:function(e,n){if(0===arguments.length)return[];var i=arguments;return this.length=Math.max(t(this.length),0),arguments.length>0&&"number"!=typeof n&&(i=l.call(arguments),i.length<2?i.push(this.length-e):i[1]=t(n)),u.apply(this,i)}},!T);var C=1!==[].unshift(0);b(i,{unshift:function(){return d.apply(this,arguments),this.length}},C),b(Array,{isArray:m});var S=Object("a"),D="a"!==S[0]||!(0 in S),j=function(t){var e=!0,n=!0;return t&&(t.call("foo",function(t,n,i){"object"!=typeof i&&(e=!1)}),t.call([1],function(){"use strict";n="string"==typeof this},"x")),!!t&&e&&n};b(i,{forEach:function(t){var e=_.ToObject(this),n=D&&v(this)?this.split(""):e,i=arguments[1],r=-1,a=n.length>>>0;if(!h(t))throw new TypeError;for(;++r<a;)r in n&&t.call(i,n[r],r,e)}},!j(i.forEach)),b(i,{map:function(t){var e=_.ToObject(this),n=D&&v(this)?this.split(""):e,i=n.length>>>0,r=Array(i),a=arguments[1];if(!h(t))throw new TypeError(t+" is not a function");for(var o=0;i>o;o++)o in n&&(r[o]=t.call(a,n[o],o,e));return r}},!j(i.map)),b(i,{filter:function(t){var e,n=_.ToObject(this),i=D&&v(this)?this.split(""):n,r=i.length>>>0,a=[],o=arguments[1];if(!h(t))throw new TypeError(t+" is not a function");for(var s=0;r>s;s++)s in i&&(e=i[s],t.call(o,e,s,n)&&a.push(e));return a}},!j(i.filter)),b(i,{every:function(t){var e=_.ToObject(this),n=D&&v(this)?this.split(""):e,i=n.length>>>0,r=arguments[1];if(!h(t))throw new TypeError(t+" is not a function");for(var a=0;i>a;a++)if(a in n&&!t.call(r,n[a],a,e))return!1;return!0}},!j(i.every)),b(i,{some:function(t){var e=_.ToObject(this),n=D&&v(this)?this.split(""):e,i=n.length>>>0,r=arguments[1];if(!h(t))throw new TypeError(t+" is not a function");for(var a=0;i>a;a++)if(a in n&&t.call(r,n[a],a,e))return!0;return!1}},!j(i.some));var E=!1;i.reduce&&(E="object"==typeof i.reduce.call("es5",function(t,e,n,i){return i})),b(i,{reduce:function(t){var e=_.ToObject(this),n=D&&v(this)?this.split(""):e,i=n.length>>>0;if(!h(t))throw new TypeError(t+" is not a function");if(!i&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var r,a=0;if(arguments.length>=2)r=arguments[1];else for(;;){if(a in n){r=n[a++];break}if(++a>=i)throw new TypeError("reduce of empty array with no initial value")}for(;i>a;a++)a in n&&(r=t.call(void 0,r,n[a],a,e));return r}},!E);var F=!1;i.reduceRight&&(F="object"==typeof i.reduceRight.call("es5",function(t,e,n,i){return i})),b(i,{reduceRight:function(t){var e=_.ToObject(this),n=D&&v(this)?this.split(""):e,i=n.length>>>0;if(!h(t))throw new TypeError(t+" is not a function");if(!i&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var r,a=i-1;if(arguments.length>=2)r=arguments[1];else for(;;){if(a in n){r=n[a--];break}if(--a<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>a)return r;do a in n&&(r=t.call(void 0,r,n[a],a,e));while(a--);return r}},!F);var A=Array.prototype.indexOf&&-1!==[0,1].indexOf(1,2);b(i,{indexOf:function(e){var n=D&&v(this)?this.split(""):_.ToObject(this),i=n.length>>>0;if(!i)return-1;var r=0;for(arguments.length>1&&(r=t(arguments[1])),r=r>=0?r:Math.max(0,i+r);i>r;r++)if(r in n&&n[r]===e)return r;return-1}},A);var O=Array.prototype.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);b(i,{lastIndexOf:function(e){var n=D&&v(this)?this.split(""):_.ToObject(this),i=n.length>>>0;if(!i)return-1;var r=i-1;for(arguments.length>1&&(r=Math.min(r,t(arguments[1]))),r=r>=0?r:i-Math.abs(r);r>=0;r--)if(r in n&&e===n[r])return r;return-1}},O);var M=!{toString:null}.propertyIsEnumerable("toString"),I=function(){}.propertyIsEnumerable("prototype"),P=!w("x","0"),N=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],R=N.length;b(Object,{keys:function(t){var e=h(t),n=y(t),i=null!==t&&"object"==typeof t,r=i&&v(t);if(!i&&!e&&!n)throw new TypeError("Object.keys called on a non-object");var a=[],o=I&&e;if(r&&P||n)for(var s=0;s<t.length;++s)a.push(String(s));if(!n)for(var l in t)o&&"prototype"===l||!w(t,l)||a.push(String(l));if(M)for(var u=t.constructor,c=u&&u.prototype===t,d=0;R>d;d++){var f=N[d];c&&"constructor"===f||!w(t,f)||a.push(f)}return a}});var q=Object.keys&&function(){return 2===Object.keys(arguments).length}(1,2),H=Object.keys;b(Object,{keys:function(t){return H(y(t)?i.slice.call(t):t)}},!q);var $=-621987552e5,z="-000001",L=Date.prototype.toISOString&&-1===new Date($).toISOString().indexOf(z);b(Date.prototype,{toISOString:function(){var t,e,n,i,r;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(i=this.getUTCFullYear(),r=this.getUTCMonth(),i+=Math.floor(r/12),r=(r%12+12)%12,t=[r+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],i=(0>i?"-":i>9999?"+":"")+("00000"+Math.abs(i)).slice(i>=0&&9999>=i?-4:-6),e=t.length;e--;)n=t[e],10>n&&(t[e]="0"+n);return i+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}},L);var W=!1;try{W=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date($).toJSON().indexOf(z)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(B){}W||(Date.prototype.toJSON=function(){var t,e=Object(this),i=n(e);if("number"==typeof i&&!isFinite(i))return null;if(t=e.toISOString,"function"!=typeof t)throw new TypeError("toISOString property is not callable");return t.call(e)});var V=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),Y=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z")),G=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));(!Date.parse||G||Y||!V)&&(Date=function(t){function e(n,i,r,a,o,s,l){var u=arguments.length;if(this instanceof t){var c=1===u&&String(n)===n?new t(e.parse(n)):u>=7?new t(n,i,r,a,o,s,l):u>=6?new t(n,i,r,a,o,s):u>=5?new t(n,i,r,a,o):u>=4?new t(n,i,r,a):u>=3?new t(n,i,r):u>=2?new t(n,i):u>=1?new t(n):new t;return c.constructor=e,c}return t.apply(this,arguments)}function n(t,e){var n=e>1?1:0;return a[e]+Math.floor((t-1969+n)/4)-Math.floor((t-1901+n)/100)+Math.floor((t-1601+n)/400)+365*(t-1970)}function i(e){return Number(new t(1970,0,1,0,0,0,e))}var r=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),a=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var o in t)e[o]=t[o];return e.now=t.now,e.UTC=t.UTC,e.prototype=t.prototype,e.prototype.constructor=e,e.parse=function(e){var a=r.exec(e);if(a){var o,s=Number(a[1]),l=Number(a[2]||1)-1,u=Number(a[3]||1)-1,c=Number(a[4]||0),d=Number(a[5]||0),f=Number(a[6]||0),p=Math.floor(1e3*Number(a[7]||0)),h=Boolean(a[4]&&!a[8]),g="-"===a[9]?1:-1,m=Number(a[10]||0),v=Number(a[11]||0);return(d>0||f>0||p>0?24:25)>c&&60>d&&60>f&&1e3>p&&l>-1&&12>l&&24>m&&60>v&&u>-1&&u<n(s,l+1)-n(s,l)&&(o=60*(24*(n(s,l)+u)+c+m*g),o=1e3*(60*(o+d+v*g)+f)+p,h&&(o=i(o)),o>=-864e13&&864e13>=o)?o:0/0}return t.parse.apply(this,arguments)},e}(Date)),Date.now||(Date.now=function(){return(new Date).getTime()});var U=s.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0)),X={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(t,e){for(var n=-1;++n<X.size;)e+=t*X.data[n],X.data[n]=e%X.base,e=Math.floor(e/X.base)},divide:function(t){for(var e=X.size,n=0;--e>=0;)n+=X.data[e],X.data[e]=Math.floor(n/t),n=n%t*X.base},numToString:function(){for(var t=X.size,e="";--t>=0;)if(""!==e||0===t||0!==X.data[t]){var n=String(X.data[t]);""===e?e=n:e+="0000000".slice(0,7-n.length)+n}return e},pow:function se(t,e,n){return 0===e?n:e%2===1?se(t,e-1,n*t):se(t*t,e/2,n)},log:function(t){for(var e=0;t>=4096;)e+=12,t/=4096;for(;t>=2;)e+=1,t/=2;return e}};b(s,{toFixed:function(t){var e,n,i,r,a,o,s,l;if(e=Number(t),e=e!==e?0:Math.floor(e),0>e||e>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(n=Number(this),n!==n)return"NaN";if(-1e21>=n||n>=1e21)return String(n);if(i="",0>n&&(i="-",n=-n),r="0",n>1e-21)if(a=X.log(n*X.pow(2,69,1))-69,o=0>a?n*X.pow(2,-a,1):n/X.pow(2,a,1),o*=4503599627370496,a=52-a,a>0){for(X.multiply(0,o),s=e;s>=7;)X.multiply(1e7,0),s-=7;for(X.multiply(X.pow(10,s,1),0),s=a-1;s>=23;)X.divide(1<<23),s-=23;X.divide(1<<s),X.multiply(1,1),X.divide(2),r=X.numToString()}else X.multiply(0,o),X.multiply(1<<-a,0),r=X.numToString()+"0.00000000000000000000".slice(2,2+e);return e>0?(l=r.length,r=e>=l?i+"0.0000000000000000000".slice(0,e-l+2)+r:i+r.slice(0,l-e)+"."+r.slice(l-e)):r=i+r,r}},U);var K=o.split;2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var t="undefined"==typeof/()??/.exec("")[1];o.split=function(e,n){var i=this;if("undefined"==typeof e&&0===n)return[];if("[object RegExp]"!==p.call(e))return K.call(this,e,n);var r,a,o,s,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":""),d=0;for(e=new RegExp(e.source,u+"g"),i+="",t||(r=new RegExp("^"+e.source+"$(?!\\s)",u)),n="undefined"==typeof n?-1>>>0:_.ToUint32(n),a=e.exec(i);a&&(o=a.index+a[0].length,!(o>d&&(l.push(i.slice(d,a.index)),!t&&a.length>1&&a[0].replace(r,function(){for(var t=1;t<arguments.length-2;t++)"undefined"==typeof arguments[t]&&(a[t]=void 0)}),a.length>1&&a.index<i.length&&c.apply(l,a.slice(1)),s=a[0].length,d=o,l.length>=n)));)e.lastIndex===a.index&&e.lastIndex++,a=e.exec(i);return d===i.length?(s||!e.test(""))&&l.push(""):l.push(i.slice(d)),l.length>n?l.slice(0,n):l}}():"0".split(void 0,0).length&&(o.split=function(t,e){return"undefined"==typeof t&&0===e?[]:K.call(this,t,e)});var Z=o.replace,Q=function(){var t=[];return"x".replace(/x(.)?/g,function(e,n){t.push(n)}),1===t.length&&"undefined"==typeof t[0]}();Q||(o.replace=function(t,e){var n=h(e),i=g(t)&&/\)[*?]/.test(t.source);if(n&&i){var r=function(n){var i=arguments.length,r=t.lastIndex;t.lastIndex=0;var a=t.exec(n)||[];return t.lastIndex=r,a.push(arguments[i-2],arguments[i-1]),e.apply(this,a)};return Z.call(this,t,r)}return Z.call(this,t,e)});var J=o.substr,te="".substr&&"b"!=="0b".substr(-1);b(o,{substr:function(t,e){return J.call(this,0>t&&(t=this.length+t)<0?0:t,e)}},te);var ee="	\n\f\r   ᠎             　\u2028\u2029﻿",ne="​",ie="["+ee+"]",re=new RegExp("^"+ie+ie+"*"),ae=new RegExp(ie+ie+"*$"),oe=o.trim&&(ee.trim()||!ne.trim());b(o,{trim:function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(re,"").replace(ae,"")}},oe),(8!==parseInt(ee+"08")||22!==parseInt(ee+"0x16"))&&(parseInt=function(t){var e=/^0[xX]/;return function(n,i){return n=String(n).trim(),Number(i)||(i=e.test(n)?16:10),t(n,i)}}(parseInt))});