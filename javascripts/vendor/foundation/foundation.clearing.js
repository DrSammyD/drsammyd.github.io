!function(e,t,n,r){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.5.0",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(e,t,n){var r=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(t,n),r.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(r.S("li",this.scope)):r.S("["+this.attr_name()+"]",this.scope).each(function(){r.assemble(r.S("li",this))})},events:function(r){var i=this,o=i.S,a=e(".scroll-container");a.length>0&&(this.scope=a),o(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(e,t,n){var t=t||o(this),n=n||t,r=t.next("li"),a=t.closest("["+i.attr_name()+"]").data(i.attr_name(!0)+"-init"),s=o(e.target);e.preventDefault(),a||(i.init(),a=t.closest("["+i.attr_name()+"]").data(i.attr_name(!0)+"-init")),n.hasClass("visible")&&t[0]===n[0]&&r.length>0&&i.is_open(t)&&(n=r,s=o("img",n)),i.open(s,t,n),i.update_paddles(n)}).on("click.fndtn.clearing",".clearing-main-next",function(e){i.nav(e,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(e){i.nav(e,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(e){Foundation.libs.clearing.close(e,this)}),e(n).on("keydown.fndtn.clearing",function(e){i.keydown(e)}),o(t).off(".clearing").on("resize.fndtn.clearing",function(){i.resize()}),this.swipe_events(r)},swipe_events:function(){var e=this,t=e.S;t(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(e){e.touches||(e=e.originalEvent);var n={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};t(this).data("swipe-transition",n),e.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(n){if(n.touches||(n=n.originalEvent),!(n.touches.length>1||n.scale&&1!==n.scale)){var r=t(this).data("swipe-transition");if("undefined"==typeof r&&(r={}),r.delta_x=n.touches[0].pageX-r.start_page_x,Foundation.rtl&&(r.delta_x=-r.delta_x),"undefined"==typeof r.is_scrolling&&(r.is_scrolling=!!(r.is_scrolling||Math.abs(r.delta_x)<Math.abs(n.touches[0].pageY-r.start_page_y))),!r.is_scrolling&&!r.active){n.preventDefault();var i=r.delta_x<0?"next":"prev";r.active=!0,e.nav(n,i)}}}).on("touchend.fndtn.clearing",".visible-img",function(e){t(this).data("swipe-transition",{}),e.stopPropagation()})},assemble:function(t){var n=t.parent();if(!n.parent().hasClass("carousel")){n.after('<div id="foundationClearingHolder"></div>');var r=n.detach(),i="";if(null!=r[0]){i=r[0].outerHTML;var o=this.S("#foundationClearingHolder"),a=n.data(this.attr_name(!0)+"-init"),s={grid:'<div class="carousel">'+i+"</div>",viewing:a.templates.viewing},u='<div class="clearing-assembled"><div>'+s.viewing+s.grid+"</div></div>",c=this.settings.touch_label;Modernizr.touch&&(u=e(u).find(".clearing-touch-label").html(c).end()),o.after(u).remove()}}},open:function(t,r,i){function o(){setTimeout(function(){this.image_loaded(f,function(){1!==f.outerWidth()||p?a.call(this,f):o.call(this)}.bind(this))}.bind(this),100)}function a(t){var n=e(t);n.css("visibility","visible"),u.css("overflow","hidden"),c.addClass("clearing-blackout"),l.addClass("clearing-container"),d.show(),this.fix_height(i).caption(s.S(".clearing-caption",d),s.S("img",i)).center_and_label(t,h).shift(r,i,function(){i.closest("li").siblings().removeClass("visible"),i.closest("li").addClass("visible")}),d.trigger("opened.fndtn.clearing")}var s=this,u=e(n.body),c=i.closest(".clearing-assembled"),l=s.S("div",c).first(),d=s.S(".visible-img",l),f=s.S("img",d).not(t),h=s.S(".clearing-touch-label",l),p=!1;e("body").on("touchmove",function(e){e.preventDefault()}),f.error(function(){p=!0}),this.locked()||(d.trigger("open.fndtn.clearing"),f.attr("src",this.load(t)).css("visibility","hidden"),o.call(this))},close:function(t,r){t.preventDefault();var i,o,a=function(e){return/blackout/.test(e.selector)?e:e.closest(".clearing-blackout")}(e(r)),s=e(n.body);return r===t.target&&a&&(s.css("overflow",""),i=e("div",a).first(),o=e(".visible-img",i),o.trigger("close.fndtn.clearing"),this.settings.prev_index=0,e("ul["+this.attr_name()+"]",a).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),i.removeClass("clearing-container"),o.hide(),o.trigger("closed.fndtn.clearing")),e("body").off("touchmove"),!1},is_open:function(e){return e.parent().prop("style").length>0},keydown:function(t){var n=e(".clearing-blackout ul["+this.attr_name()+"]"),r=this.rtl?37:39,i=this.rtl?39:37,o=27;t.which===r&&this.go(n,"next"),t.which===i&&this.go(n,"prev"),t.which===o&&this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")},nav:function(t,n){var r=e("ul["+this.attr_name()+"]",".clearing-blackout");t.preventDefault(),this.go(r,n)},resize:function(){var t=e("img",".clearing-blackout .visible-img"),n=e(".clearing-touch-label",".clearing-blackout");t.length&&(this.center_and_label(t,n),t.trigger("resized.fndtn.clearing"))},fix_height:function(e){var t=e.parent().children(),n=this;return t.each(function(){var e=n.S(this),t=e.find("img");e.height()>t.outerHeight()&&e.addClass("fix-height")}).closest("ul").width(100*t.length+"%"),this},update_paddles:function(e){e=e.closest("li");var t=e.closest(".carousel").siblings(".visible-img");e.next().length>0?this.S(".clearing-main-next",t).removeClass("disabled"):this.S(".clearing-main-next",t).addClass("disabled"),e.prev().length>0?this.S(".clearing-main-prev",t).removeClass("disabled"):this.S(".clearing-main-prev",t).addClass("disabled")},center_and_label:function(e,t){return t.css(!this.rtl&&t.length>0?{marginLeft:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10}:{marginRight:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10,left:"auto",right:"50%"}),this},load:function(e){var t;return t="A"===e[0].nodeName?e.attr("href"):e.closest("a").attr("href"),this.preload(e),t?t:e.attr("src")},preload:function(e){this.img(e.closest("li").next()).img(e.closest("li").prev())},img:function(e){if(e.length){var t=new Image,n=this.S("a",e);t.src=n.length?n.attr("href"):this.S("img",e).attr("src")}return this},caption:function(e,t){var n=t.attr("data-caption");return n?e.html(n).show():e.text("").hide(),this},go:function(e,t){var n=this.S(".visible",e),r=n[t]();this.settings.skip_selector&&0!=r.find(this.settings.skip_selector).length&&(r=r[t]()),r.length&&this.S("img",r).trigger("click",[n,r]).trigger("click.fndtn.clearing",[n,r]).trigger("change.fndtn.clearing")},shift:function(e,t,n){var r,i=t.parent(),o=this.settings.prev_index||t.index(),a=this.direction(i,e,t),s=this.rtl?"right":"left",u=parseInt(i.css("left"),10),c=t.outerWidth(),l={};t.index()===o||/skip/.test(a)?/skip/.test(a)&&(r=t.index()-this.settings.up_count,this.lock(),r>0?(l[s]=-(r*c),i.animate(l,300,this.unlock())):(l[s]=0,i.animate(l,300,this.unlock()))):/left/.test(a)?(this.lock(),l[s]=u+c,i.animate(l,300,this.unlock())):/right/.test(a)&&(this.lock(),l[s]=u-c,i.animate(l,300,this.unlock())),n()},direction:function(e,t,n){var r,i=this.S("li",e),o=i.outerWidth()+i.outerWidth()/4,a=Math.floor(this.S(".clearing-container").outerWidth()/o)-1,s=i.index(n);return this.settings.up_count=a,r=this.adjacent(this.settings.prev_index,s)?s>a&&s>this.settings.prev_index?"right":s>a-1&&s<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=s,r},adjacent:function(e,t){for(var n=t+1;n>=t-1;n--)if(n===e)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(t).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document);