!function(e){"function"==typeof define&&define.amd?define(["moment"],e):"object"==typeof exports?module.exports=e(require("../moment")):e(("undefined"!=typeof global?global:this).moment)}(function(e){function t(e){return e>1&&5>e&&1!==~~(e/10)}function n(e,n,r,i){var a=e+" ";switch(r){case"s":return n||i?"pár sekund":"pár sekundami";case"m":return n?"minuta":i?"minutu":"minutou";case"mm":return n||i?a+(t(e)?"minuty":"minut"):a+"minutami";case"h":return n?"hodina":i?"hodinu":"hodinou";case"hh":return n||i?a+(t(e)?"hodiny":"hodin"):a+"hodinami";case"d":return n||i?"den":"dnem";case"dd":return n||i?a+(t(e)?"dny":"dní"):a+"dny";case"M":return n||i?"měsíc":"měsícem";case"MM":return n||i?a+(t(e)?"měsíce":"měsíců"):a+"měsíci";case"y":return n||i?"rok":"rokem";case"yy":return n||i?a+(t(e)?"roky":"let"):a+"lety"}}var r="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),i="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");return e.defineLocale("cs",{months:r,monthsShort:i,monthsParse:function(e,t){var n,r=[];for(n=0;12>n;n++)r[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i");return r}(r,i),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});