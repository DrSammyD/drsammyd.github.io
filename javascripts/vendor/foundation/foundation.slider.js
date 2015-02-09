!function(t,e){"use strict";Foundation.libs.slider={name:"slider",version:"5.5.0",settings:{start:0,end:100,step:1,precision:null,initial:null,display_selector:"",vertical:!1,trigger_input_change:!1,on_change:function(){}},cache:{},init:function(t,e,i){Foundation.inherit(this,"throttle"),this.bindings(e,i),this.reflow()},events:function(){var i=this;t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+i.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(e){i.cache.active||(e.preventDefault(),i.set_active_slider(t(e.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(n){if(i.cache.active)if(n.preventDefault(),t.data(i.cache.active[0],"settings").vertical){var a=0;n.pageY||(a=e.scrollY),i.calculate_position(i.cache.active,i.get_cursor_position(n,"y")+a)}else i.calculate_position(i.cache.active,i.get_cursor_position(n,"x"))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(){i.remove_active_slider()}).on("change.fndtn.slider",function(){i.settings.on_change()}),i.S(e).on("resize.fndtn.slider",i.throttle(function(){i.reflow()},300))},get_cursor_position:function(t,e){var i,n="page"+e.toUpperCase(),a="client"+e.toUpperCase();return"undefined"!=typeof t[n]?i=t[n]:"undefined"!=typeof t.originalEvent[a]?i=t.originalEvent[a]:t.originalEvent.touches&&t.originalEvent.touches[0]&&"undefined"!=typeof t.originalEvent.touches[0][a]?i=t.originalEvent.touches[0][a]:t.currentPoint&&"undefined"!=typeof t.currentPoint[e]&&(i=t.currentPoint[e]),i},set_active_slider:function(t){this.cache.active=t},remove_active_slider:function(){this.cache.active=null},calculate_position:function(e,i){var n=this,a=t.data(e[0],"settings"),r=(t.data(e[0],"handle_l"),t.data(e[0],"handle_o"),t.data(e[0],"bar_l")),s=t.data(e[0],"bar_o");requestAnimationFrame(function(){var t;t=Foundation.rtl&&!a.vertical?n.limit_to((s+r-i)/r,0,1):n.limit_to((i-s)/r,0,1),t=a.vertical?1-t:t;var o=n.normalized_value(t,a.start,a.end,a.step,a.precision);n.set_ui(e,o)})},set_ui:function(e,i){var n=t.data(e[0],"settings"),a=t.data(e[0],"handle_l"),r=t.data(e[0],"bar_l"),s=this.normalized_percentage(i,n.start,n.end),o=s*(r-a)-1,l=100*s,c=e.parent(),u=e.parent().children("input[type=hidden]");Foundation.rtl&&!n.vertical&&(o=-o),o=n.vertical?-o+r-a+1:o,this.set_translate(e,o,n.vertical),n.vertical?e.siblings(".range-slider-active-segment").css("height",l+"%"):e.siblings(".range-slider-active-segment").css("width",l+"%"),c.attr(this.attr_name(),i).trigger("change").trigger("change.fndtn.slider"),u.val(i),n.trigger_input_change&&u.trigger("change"),e[0].hasAttribute("aria-valuemin")||e.attr({"aria-valuemin":n.start,"aria-valuemax":n.end}),e.attr("aria-valuenow",i),""!=n.display_selector&&t(n.display_selector).each(function(){this.hasOwnProperty("value")?t(this).val(i):t(this).text(i)})},normalized_percentage:function(t,e,i){return Math.min(1,(t-e)/(i-e))},normalized_value:function(t,e,i,n,a){var r=i-e,s=t*r,o=(s-s%n)/n,l=s%n,c=l>=.5*n?n:0;return(o*n+c+e).toFixed(a)},set_translate:function(e,i,n){n?t(e).css("-webkit-transform","translateY("+i+"px)").css("-moz-transform","translateY("+i+"px)").css("-ms-transform","translateY("+i+"px)").css("-o-transform","translateY("+i+"px)").css("transform","translateY("+i+"px)"):t(e).css("-webkit-transform","translateX("+i+"px)").css("-moz-transform","translateX("+i+"px)").css("-ms-transform","translateX("+i+"px)").css("-o-transform","translateX("+i+"px)").css("transform","translateX("+i+"px)")},limit_to:function(t,e,i){return Math.min(Math.max(t,e),i)},initialize_settings:function(e){var i,n=t.extend({},this.settings,this.data_options(t(e).parent()));null===n.precision&&(i=(""+n.step).match(/\.([\d]*)/),n.precision=i&&i[1]?i[1].length:0),n.vertical?(t.data(e,"bar_o",t(e).parent().offset().top),t.data(e,"bar_l",t(e).parent().outerHeight()),t.data(e,"handle_o",t(e).offset().top),t.data(e,"handle_l",t(e).outerHeight())):(t.data(e,"bar_o",t(e).parent().offset().left),t.data(e,"bar_l",t(e).parent().outerWidth()),t.data(e,"handle_o",t(e).offset().left),t.data(e,"handle_l",t(e).outerWidth())),t.data(e,"bar",t(e).parent()),t.data(e,"settings",n)},set_initial_position:function(e){var i=t.data(e.children(".range-slider-handle")[0],"settings"),n="number"!=typeof i.initial||isNaN(i.initial)?Math.floor(.5*(i.end-i.start)/i.step)*i.step+i.start:i.initial,a=e.children(".range-slider-handle");this.set_ui(a,n)},set_value:function(e){var i=this;t("["+i.attr_name()+"]",this.scope).each(function(){t(this).attr(i.attr_name(),e)}),t(this.scope).attr(i.attr_name())&&t(this.scope).attr(i.attr_name(),e),i.reflow()},reflow:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var i=t(this).children(".range-slider-handle")[0],n=t(this).attr(e.attr_name());e.initialize_settings(i),n?e.set_ui(t(i),parseFloat(n)):e.set_initial_position(t(this))})}}}(jQuery,window,window.document);