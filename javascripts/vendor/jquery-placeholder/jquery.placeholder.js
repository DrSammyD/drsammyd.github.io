!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e){var n={},i=/^jQuery\d+$/;return t.each(e.attributes,function(t,e){e.specified&&!i.test(e.name)&&(n[e.name]=e.value)}),n}function n(e,n){var i=this,r=t(i);if(i.value==r.attr("placeholder")&&r.hasClass("placeholder"))if(r.data("placeholder-password")){if(r=r.hide().nextAll('input[type="password"]:first').show().attr("id",r.removeAttr("id").data("placeholder-id")),e===!0)return r[0].value=n;r.focus()}else i.value="",r.removeClass("placeholder"),i==a()&&i.select()}function i(){var i,a=this,r=t(a),o=this.id;if(""===a.value){if("password"===a.type){if(!r.data("placeholder-textinput")){try{i=r.clone().attr({type:"text"})}catch(s){i=t("<input>").attr(t.extend(e(this),{type:"text"}))}i.removeAttr("name").data({"placeholder-password":r,"placeholder-id":o}).bind("focus.placeholder",n),r.data({"placeholder-textinput":i,"placeholder-id":o}).before(i)}r=r.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",o).show()}r.addClass("placeholder"),r[0].value=r.attr("placeholder")}else r.removeClass("placeholder")}function a(){try{return document.activeElement}catch(t){}}var r,o,s="[object OperaMini]"==Object.prototype.toString.call(window.operamini),l="placeholder"in document.createElement("input")&&!s,c="placeholder"in document.createElement("textarea")&&!s,u=t.valHooks,d=t.propHooks;l&&c?(o=t.fn.placeholder=function(){return this},o.input=o.textarea=!0):(o=t.fn.placeholder=function(){var t=this;return t.filter((l?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":n,"blur.placeholder":i}).data("placeholder-enabled",!0).trigger("blur.placeholder"),t},o.input=l,o.textarea=c,r={get:function(e){var n=t(e),i=n.data("placeholder-password");return i?i[0].value:n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":e.value},set:function(e,r){var o=t(e),s=o.data("placeholder-password");return s?s[0].value=r:o.data("placeholder-enabled")?(""===r?(e.value=r,e!=a()&&i.call(e)):o.hasClass("placeholder")?n.call(e,!0,r)||(e.value=r):e.value=r,o):e.value=r}},l||(u.input=r,d.value=r),c||(u.textarea=r,d.value=r),t(function(){t(document).delegate("form","submit.placeholder",function(){var e=t(".placeholder",this).each(n);setTimeout(function(){e.each(i)},10)})}),t(window).bind("beforeunload.placeholder",function(){t(".placeholder").each(function(){this.value=""})}))});