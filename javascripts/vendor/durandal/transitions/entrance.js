define(["durandal/system","durandal/composition","jquery"],function(e,t,n){function i(e,t){e.classList.remove(t?"entrance-in-fade":"entrance-in"),e.classList.remove("entrance-out")}var r=100,a={left:"0px",opacity:1},o={left:"",top:"",right:"",bottom:"",position:"",opacity:""},s=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/),u=!1,l="Webkit Moz O ms Khtml".split(" "),c=document.createElement("div");if(void 0!==c.style.animationName&&(u=!0),!u)for(var f=0;f<l.length;f++)if(void 0!==c.style[l[f]+"AnimationName"]){u=!0;break}e.log(u?s?"Using CSS3/jQuery mixed animations.":"Using CSS3 animations.":"Using jQuery animations.");var d=function(t){return e.defer(function(e){function l(){e.resolve()}function c(){t.keepScrollPosition||n(document).scrollTop(0)}function f(){c(),t.triggerAttach(),u?(i(t.child,h),t.child.classList.add(h?"entrance-in-fade":"entrance-in"),setTimeout(function(){i(t.child,h),t.activeView&&i(t.activeView,h),p.css(o),l()},d)):p.animate(a,{duration:d,easing:"swing",always:function(){p.css(o),l()}})}if(t.child){var d=t.duration||500,p=n(t.child),h=!!t.fadeOnly,m={display:"block",opacity:0,position:"absolute",left:h||u?"0px":"20px",right:0,top:0,bottom:0};p.css(m),t.activeView?u&&!s?(i(t.activeView,h),t.activeView.classList.add("entrance-out"),setTimeout(f,r)):n(t.activeView).fadeOut({duration:r,always:f}):f()}else n(t.activeView).fadeOut(r,l)}).promise()};return d});