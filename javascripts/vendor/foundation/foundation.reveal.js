!function(t,e,n,i){"use strict";function r(t){var e=/fade/i.test(t),n=/pop/i.test(t);return{animate:e||n,pop:n,fade:e}}Foundation.libs.reveal={name:"reveal",version:"5.5.0",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},bg:t(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(e,n,i){t.extend(!0,this.settings,n,i),this.bindings(n,i)},events:function(){var t=this,e=t.S;return e(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(n){if(n.preventDefault(),!t.locked){var i=e(this),r=i.data(t.data_attr("reveal-ajax"));if(t.locked=!0,"undefined"==typeof r)t.open.call(t,i);else{var a=r===!0?i.attr("href"):r;t.open.call(t,i,{url:a})}}}),e(n).on("click.fndtn.reveal",this.close_targets(),function(n){if(n.preventDefault(),!t.locked){var i=e("["+t.attr_name()+"].open").data(t.attr_name(!0)+"-init")||t.settings,r=e(n.target)[0]===e("."+i.bg_class)[0];if(r){if(!i.close_on_background_click)return;n.stopPropagation()}t.locked=!0,t.close.call(t,r?e("["+t.attr_name()+"].open"):e(this).closest("["+t.attr_name()+"]"))}}),e("["+t.attr_name()+"]",this.scope).length>0?e(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):e(this.scope).on("open.fndtn.reveal","["+t.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+t.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.close_video),!0},key_up_on:function(){var t=this;return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(e){var n=t.S("["+t.attr_name()+"].open"),i=n.data(t.attr_name(!0)+"-init")||t.settings;i&&27===e.which&&i.close_on_esc&&!t.locked&&t.close.call(t,n)}),!0},key_up_off:function(){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(n,i){var r,a=this;n?"undefined"!=typeof n.selector?r=a.S("#"+n.data(a.data_attr("reveal-id"))).first():(r=a.S(this.scope),i=n):r=a.S(this.scope);var s=r.data(a.attr_name(!0)+"-init");if(s=s||this.settings,r.hasClass("open")&&n.attr("data-reveal-id")==r.attr("id"))return a.close(r);if(!r.hasClass("open")){var o=a.S("["+a.attr_name()+"].open");if("undefined"==typeof r.data("css-top")&&r.data("css-top",parseInt(r.css("top"),10)).data("offset",this.cache_offset(r)),this.key_up_on(r),r.on("open.fndtn.reveal").trigger("open.fndtn.reveal"),o.length<1&&this.toggle_bg(r,!0),"string"==typeof i&&(i={url:i}),"undefined"!=typeof i&&i.url){var l="undefined"!=typeof i.success?i.success:null;t.extend(i,{success:function(e,n,i){if(t.isFunction(l)){var c=l(e,n,i);"string"==typeof c&&(e=c)}r.html(e),a.S(r).foundation("section","reflow"),a.S(r).children().foundation(),o.length>0&&a.hide(o,s.css.close),a.show(r,s.css.open)}}),t.ajax(i)}else o.length>0&&this.hide(o,s.css.close),this.show(r,s.css.open)}a.S(e).trigger("resize")},close:function(t){var t=t&&t.length?t:this.S(this.scope),e=this.S("["+this.attr_name()+"].open"),n=t.data(this.attr_name(!0)+"-init")||this.settings;e.length>0&&(this.locked=!0,this.key_up_off(t),t.trigger("close").trigger("close.fndtn.reveal"),this.toggle_bg(t,!1),this.hide(e,n.css.close,n))},close_targets:function(){var t="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?t+", ."+this.settings.bg_class:t},toggle_bg:function(e,n){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=t("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var r=this.settings.bg.filter(":visible").length>0;n!=r&&((n==i?r:!n)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(n,i){if(i){var a=n.data(this.attr_name(!0)+"-init")||this.settings,s=a.root_element;if(0===n.parent(s).length){var o=n.wrap('<div style="display: none;" />').parent();n.on("closed.fndtn.reveal.wrapped",function(){n.detach().appendTo(o),n.unwrap().unbind("closed.fndtn.reveal.wrapped")}),n.detach().appendTo(s)}var l=r(a.animation);if(l.animate||(this.locked=!1),l.pop){i.top=t(e).scrollTop()-n.data("offset")+"px";var c={top:t(e).scrollTop()+n.data("css-top")+"px",opacity:1};return setTimeout(function(){return n.css(i).animate(c,a.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),a.animation_speed/2)}if(l.fade){i.top=t(e).scrollTop()+n.data("css-top")+"px";var c={opacity:1};return setTimeout(function(){return n.css(i).animate(c,a.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),a.animation_speed/2)}return n.css(i).show().css({opacity:1}).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")}var a=this.settings;return r(a.animation).fade?n.fadeIn(a.animation_speed/2):(this.locked=!1,n.show())},hide:function(n,i){if(i){var a=n.data(this.attr_name(!0)+"-init");a=a||this.settings;var s=r(a.animation);if(s.animate||(this.locked=!1),s.pop){var o={top:-t(e).scrollTop()-n.data("offset")+"px",opacity:0};return setTimeout(function(){return n.animate(o,a.animation_speed,"linear",function(){this.locked=!1,n.css(i).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),a.animation_speed/2)}if(s.fade){var o={opacity:0};return setTimeout(function(){return n.animate(o,a.animation_speed,"linear",function(){this.locked=!1,n.css(i).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),a.animation_speed/2)}return n.hide().css(i).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")}var a=this.settings;return r(a.animation).fade?n.fadeOut(a.animation_speed/2):n.hide()},close_video:function(e){var n=t(".flex-video",e.target),i=t("iframe",n);i.length>0&&(i.attr("data-src",i[0].src),i.attr("src",i.attr("src")),n.hide())},open_video:function(e){var n=t(".flex-video",e.target),r=n.find("iframe");if(r.length>0){var a=r.attr("data-src");if("string"==typeof a)r[0].src=r.attr("data-src");else{var s=r[0].src;r[0].src=i,r[0].src=s}n.show()}},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},cache_offset:function(t){var e=t.show().height()+parseInt(t.css("top"),10);return t.hide(),e},off:function(){t(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document);