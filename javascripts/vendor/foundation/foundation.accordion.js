!function(e){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.0",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > .accordion-navigation > a",function(r){var i=n(this).closest("["+t.attr_name()+"]"),o=t.attr_name()+"="+i.attr(t.attr_name()),a=i.data(t.attr_name(!0)+"-init")||t.settings,s=n("#"+this.href.split("#")[1]),u=e("> .accordion-navigation",i),c=u.children("."+a.content_class),l=c.filter("."+a.active_class);return r.preventDefault(),i.attr(t.attr_name())&&(c=c.add("["+o+"] dd > ."+a.content_class),u=u.add("["+o+"] .accordion-navigation")),a.toggleable&&s.is(l)?(s.parent(".accordion-navigation").toggleClass(a.active_class,!1),s.toggleClass(a.active_class,!1),a.callback(s),s.triggerHandler("toggled",[i]),void i.triggerHandler("toggled",[s])):(a.multi_expand||(c.removeClass(a.active_class),u.removeClass(a.active_class)),s.addClass(a.active_class).parent().addClass(a.active_class),a.callback(s),s.triggerHandler("toggled",[i]),void i.triggerHandler("toggled",[s]))})},off:function(){},reflow:function(){}}}(jQuery,window,window.document);