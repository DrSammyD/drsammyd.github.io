!function(t,e,n,r){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.5.0",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(t,e,n){var r=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(e,n),r.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(r.S("li",this.scope)):r.S("["+this.attr_name()+"]",this.scope).each(function(){r.assemble(r.S("li",this))})},events:function(r){var i=this,o=i.S,a=t(".scroll-container");a.length>0&&(this.scope=a),o(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(t,e,n){var e=e||o(this),n=n||e,r=e.next("li"),a=e.closest("["+i.attr_name()+"]").data(i.attr_name(!0)+"-init"),s=o(t.target);t.preventDefault(),a||(i.init(),a=e.closest("["+i.attr_name()+"]").data(i.attr_name(!0)+"-init")),n.hasClass("visible")&&e[0]===n[0]&&r.length>0&&i.is_open(e)&&(n=r,s=o("img",n)),i.open(s,e,n),i.update_paddles(n)}).on("click.fndtn.clearing",".clearing-main-next",function(t){i.nav(t,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(t){i.nav(t,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(t){Foundation.libs.clearing.close(t,this)}),t(n).on("keydown.fndtn.clearing",function(t){i.keydown(t)}),o(e).off(".clearing").on("resize.fndtn.clearing",function(){i.resize()}),this.swipe_events(r)},swipe_events:function(){var t=this,e=t.S;e(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(t){t.touches||(t=t.originalEvent);var n={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};e(this).data("swipe-transition",n),t.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(n){if(n.touches||(n=n.originalEvent),!(n.touches.length>1||n.scale&&1!==n.scale)){var r=e(this).data("swipe-transition");if("undefined"==typeof r&&(r={}),r.delta_x=n.touches[0].pageX-r.start_page_x,Foundation.rtl&&(r.delta_x=-r.delta_x),"undefined"==typeof r.is_scrolling&&(r.is_scrolling=!!(r.is_scrolling||Math.abs(r.delta_x)<Math.abs(n.touches[0].pageY-r.start_page_y))),!r.is_scrolling&&!r.active){n.preventDefault();var i=r.delta_x<0?"next":"prev";r.active=!0,t.nav(n,i)}}}).on("touchend.fndtn.clearing",".visible-img",function(t){e(this).data("swipe-transition",{}),t.stopPropagation()})},assemble:function(e){var n=e.parent();if(!n.parent().hasClass("carousel")){n.after('<div id="foundationClearingHolder"></div>');var r=n.detach(),i="";if(null!=r[0]){i=r[0].outerHTML;var o=this.S("#foundationClearingHolder"),a=n.data(this.attr_name(!0)+"-init"),s={grid:'<div class="carousel">'+i+"</div>",viewing:a.templates.viewing},u='<div class="clearing-assembled"><div>'+s.viewing+s.grid+"</div></div>",l=this.settings.touch_label;Modernizr.touch&&(u=t(u).find(".clearing-touch-label").html(l).end()),o.after(u).remove()}}},open:function(e,r,i){function o(){setTimeout(function(){this.image_loaded(f,function(){1!==f.outerWidth()||p?a.call(this,f):o.call(this)}.bind(this))}.bind(this),100)}function a(e){var n=t(e);n.css("visibility","visible"),u.css("overflow","hidden"),l.addClass("clearing-blackout"),c.addClass("clearing-container"),d.show(),this.fix_height(i).caption(s.S(".clearing-caption",d),s.S("img",i)).center_and_label(e,h).shift(r,i,function(){i.closest("li").siblings().removeClass("visible"),i.closest("li").addClass("visible")}),d.trigger("opened.fndtn.clearing")}var s=this,u=t(n.body),l=i.closest(".clearing-assembled"),c=s.S("div",l).first(),d=s.S(".visible-img",c),f=s.S("img",d).not(e),h=s.S(".clearing-touch-label",c),p=!1;t("body").on("touchmove",function(t){t.preventDefault()}),f.error(function(){p=!0}),this.locked()||(d.trigger("open.fndtn.clearing"),f.attr("src",this.load(e)).css("visibility","hidden"),o.call(this))},close:function(e,r){e.preventDefault();var i,o,a=function(t){return/blackout/.test(t.selector)?t:t.closest(".clearing-blackout")}(t(r)),s=t(n.body);return r===e.target&&a&&(s.css("overflow",""),i=t("div",a).first(),o=t(".visible-img",i),o.trigger("close.fndtn.clearing"),this.settings.prev_index=0,t("ul["+this.attr_name()+"]",a).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),i.removeClass("clearing-container"),o.hide(),o.trigger("closed.fndtn.clearing")),t("body").off("touchmove"),!1},is_open:function(t){return t.parent().prop("style").length>0},keydown:function(e){var n=t(".clearing-blackout ul["+this.attr_name()+"]"),r=this.rtl?37:39,i=this.rtl?39:37,o=27;e.which===r&&this.go(n,"next"),e.which===i&&this.go(n,"prev"),e.which===o&&this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")},nav:function(e,n){var r=t("ul["+this.attr_name()+"]",".clearing-blackout");e.preventDefault(),this.go(r,n)},resize:function(){var e=t("img",".clearing-blackout .visible-img"),n=t(".clearing-touch-label",".clearing-blackout");e.length&&(this.center_and_label(e,n),e.trigger("resized.fndtn.clearing"))},fix_height:function(t){var e=t.parent().children(),n=this;return e.each(function(){var t=n.S(this),e=t.find("img");t.height()>e.outerHeight()&&t.addClass("fix-height")}).closest("ul").width(100*e.length+"%"),this},update_paddles:function(t){t=t.closest("li");var e=t.closest(".carousel").siblings(".visible-img");t.next().length>0?this.S(".clearing-main-next",e).removeClass("disabled"):this.S(".clearing-main-next",e).addClass("disabled"),t.prev().length>0?this.S(".clearing-main-prev",e).removeClass("disabled"):this.S(".clearing-main-prev",e).addClass("disabled")},center_and_label:function(t,e){return e.css(!this.rtl&&e.length>0?{marginLeft:-(e.outerWidth()/2),marginTop:-(t.outerHeight()/2)-e.outerHeight()-10}:{marginRight:-(e.outerWidth()/2),marginTop:-(t.outerHeight()/2)-e.outerHeight()-10,left:"auto",right:"50%"}),this},load:function(t){var e;return e="A"===t[0].nodeName?t.attr("href"):t.closest("a").attr("href"),this.preload(t),e?e:t.attr("src")},preload:function(t){this.img(t.closest("li").next()).img(t.closest("li").prev())},img:function(t){if(t.length){var e=new Image,n=this.S("a",t);e.src=n.length?n.attr("href"):this.S("img",t).attr("src")}return this},caption:function(t,e){var n=e.attr("data-caption");return n?t.html(n).show():t.text("").hide(),this},go:function(t,e){var n=this.S(".visible",t),r=n[e]();this.settings.skip_selector&&0!=r.find(this.settings.skip_selector).length&&(r=r[e]()),r.length&&this.S("img",r).trigger("click",[n,r]).trigger("click.fndtn.clearing",[n,r]).trigger("change.fndtn.clearing")},shift:function(t,e,n){var r,i=e.parent(),o=this.settings.prev_index||e.index(),a=this.direction(i,t,e),s=this.rtl?"right":"left",u=parseInt(i.css("left"),10),l=e.outerWidth(),c={};e.index()===o||/skip/.test(a)?/skip/.test(a)&&(r=e.index()-this.settings.up_count,this.lock(),r>0?(c[s]=-(r*l),i.animate(c,300,this.unlock())):(c[s]=0,i.animate(c,300,this.unlock()))):/left/.test(a)?(this.lock(),c[s]=u+l,i.animate(c,300,this.unlock())):/right/.test(a)&&(this.lock(),c[s]=u-l,i.animate(c,300,this.unlock())),n()},direction:function(t,e,n){var r,i=this.S("li",t),o=i.outerWidth()+i.outerWidth()/4,a=Math.floor(this.S(".clearing-container").outerWidth()/o)-1,s=i.index(n);return this.settings.up_count=a,r=this.adjacent(this.settings.prev_index,s)?s>a&&s>this.settings.prev_index?"right":s>a-1&&s<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=s,r},adjacent:function(t,e){for(var n=e+1;n>=e-1;n--)if(n===t)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(e).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document);