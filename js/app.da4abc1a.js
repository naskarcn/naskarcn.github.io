(function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],d=0,h=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0c90":function(t,e,r){},"21cf":function(t,e,r){},"45eb":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=r("342d"),a=r.n(s),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{"theme-light":this.$store.getters.THEMELIGHT,"theme-dark":!this.$store.getters.THEMELIGHT},attrs:{id:"app"}},[r("Header"),this.$store.getters.SHOWLOADER?r("LoaderSpinner"):t._e(),r("TopCardsSection"),r("div",{staticClass:"d-flex justify-content-center p-4"},[r("CountrySelector")],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar"},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar-brand"},[t._v(" Covid19Dashboard ")]),r("div",{staticClass:"theme-btn-wrapper"},[r("label",{staticClass:"ml-2 switch"},[r("input",{attrs:{type:"checkbox",name:"theme-changer"},domProps:{checked:!this.$store.getters.THEMELIGHT},on:{change:function(e){return t.changeTheme()}}}),this.$store.getters.THEMELIGHT?r("span",[r("i",{staticClass:"fa fa-moon-o"})]):t._e(),this.$store.getters.THEMELIGHT?t._e():r("span",{staticClass:"text-warning"},[r("i",{staticClass:"fa fa-sun-o"})])])])])])},u=[],l={name:"Header",methods:{changeTheme:function(){this.$store.dispatch("changeThemeMode")}}},d=l,h=(r("ed48"),r("2877")),f=Object(h["a"])(d,c,u,!1,null,"21429712",null),v=f.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container my-3"},[r("h4",[t._v(t._s(this.$store.getters.STATUSDATA.country))]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-3 col-lg-3 mt-3"},[r("div",{staticClass:"text-center text-info card-wrapper"},[r("h5",[t._v("Confirmed")]),t._v(" "+t._s(this.$store.getters.STATUSDATA.confirmed)+" ")])]),r("div",{staticClass:"col-12 col-md-3 col-lg-3 mt-3"},[r("div",{staticClass:"text-center text-warning card-wrapper"},[r("h5",[t._v("Active")]),t._v(" "+t._s(this.$store.getters.STATUSDATA.active)+" ")])]),r("div",{staticClass:"col-12 col-md-3 col-lg-3 mt-3"},[r("div",{staticClass:"text-center text-success card-wrapper"},[r("h5",[t._v("Recovered")]),t._v(" "+t._s(this.$store.getters.STATUSDATA.recovered)+" ")])]),r("div",{staticClass:"col-12 col-md-3 col-lg-3 mt-3"},[r("div",{staticClass:"text-center text-danger card-wrapper"},[r("h5",[t._v("Deceased")]),t._v(" "+t._s(this.$store.getters.STATUSDATA.death)+" ")])])])])},m=[],b={name:"TopCardsSection"},g=b,T=(r("6b4b"),Object(h["a"])(g,p,m,!1,null,"6f4fa0b2",null)),_=T.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-3 position-relative custom-selector"},[r("div",{staticClass:"font-weight-bold selector-title",on:{click:function(e){return t.showList()}}},[""!=t.selectedCountry?r("span",[t._v(t._s(t.selectedCountry))]):r("span",[t._v("Select Country")]),r("span",{staticClass:" dropdown-toggle float-right"})]),r("div",{staticClass:"selector-list",attrs:{id:"selector-list"}},[r("ul",[""!=t.selectedCountry?r("li",{on:{click:function(e){return t.showGlobalData()}}},[t._v("Select Country")]):t._e(),t._l(t.countriesList,(function(e){return r("li",{key:e.iso2,on:{click:function(r){return t.changeCountry(e.iso3,e.name)}}},[t._v(t._s(e.name))])}))],2)])])},C=[],S=r("0703"),w=r("2317"),E=r.n(w),L=E.a.create({baseURL:"https://covid19.mathdro.id/api",header:{"Content-Type":"application/json"}}),H=function(){return L.get()},A=function(){return L.get("/countries")},D=function(t){return L.get("/countries/".concat(t))},O={name:"CountrySelector",data:function(){return{listVisible:!1,countriesList:[],selectedCountry:""}},methods:{showList:function(){this.listVisible?(this.listVisible=!this.listVisible,Object(S["b"])(document.getElementById("selector-list"),400)):(this.listVisible=!this.listVisible,Object(S["a"])(document.getElementById("selector-list"),400))},showGlobalData:function(){var t=this;this.$store.dispatch("showHideLoader"),this.selectedCountry="",Object(S["b"])(document.getElementById("selector-list"),400),H().subscribe((function(e){var r="Worldwide",n=e.data,s=n.confirmed.value,a=n.deaths.value,o=n.recovered.value;t.$store.dispatch("setStatusData",{country:r,confirmed:s,death:a,recovered:o}),t.$store.dispatch("showHideLoader")}))},changeCountry:function(t,e){var r=this;this.$store.dispatch("showHideLoader"),this.selectedCountry=e,Object(S["b"])(document.getElementById("selector-list"),400),D(t||e).subscribe((function(t){var n=t.data,s=n.confirmed.value,a=n.deaths.value,o=n.recovered.value;r.$store.dispatch("setStatusData",{country:e,confirmed:s,death:a,recovered:o}),r.$store.dispatch("showHideLoader")}),(function(t){return console.log(t)}))}},mounted:function(){var t=this;A().subscribe((function(e){return t.countriesList=e.data.countries}))}},$=O,x=(r("fa60"),Object(h["a"])($,y,C,!1,null,"a24d2ec6",null)),j=x.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader-wrapper"},[r("div",{staticClass:"loader"})])}],G={name:"LoaderSpinner"},k=G,U=(r("efb2"),Object(h["a"])(k,I,M,!1,null,"04d3a848",null)),P=U.exports,R={name:"App",components:{Header:v,LoaderSpinner:P,TopCardsSection:_,CountrySelector:j},mounted:function(){var t=this;H().subscribe((function(e){var r="Worldwide",n=e.data,s=n.confirmed.value,a=n.deaths.value,o=n.recovered.value;t.$store.dispatch("setStatusData",{country:r,confirmed:s,death:a,recovered:o}),t.$store.dispatch("showHideLoader")}),(function(t){return console.log(t)}))},head:{title:{inner:"Home",separator:"-",complement:"Covid19Dashboard By Chayan"}}},V=R,W=(r("5c0b"),Object(h["a"])(V,o,i,!1,null,null,null)),B=W.exports,J=r("2f62");n["a"].use(J["a"]);var N=new J["a"].Store({state:{themeLight:!0,showLoader:!0,statusData:{country:"",confirmed:0,active:0,recovered:0,death:0}},getters:{STATUSDATA:function(t){return t.statusData},THEMELIGHT:function(t){return t.themeLight},SHOWLOADER:function(t){return t.showLoader}},mutations:{SET_STATSUDATA:function(t,e){t.statusData.country=e.country,t.statusData.confirmed=e.confirmed,t.statusData.recovered=e.recovered,t.statusData.death=e.death,t.statusData.active=e.confirmed-(e.recovered+e.death)},CHANGE_THEMELIGHT:function(t){return t.themeLight=!t.themeLight},SHOW_HIDE_LOADER:function(t){return t.showLoader=!t.showLoader}},actions:{setStatusData:function(t,e){t.commit("SET_STATSUDATA",e)},changeThemeMode:function(t){t.commit("CHANGE_THEMELIGHT")},showHideLoader:function(t){t.commit("SHOW_HIDE_LOADER")}}}),q=N;n["a"].use(a.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(B)},store:q}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),s=r.n(n);s.a},"6b4b":function(t,e,r){"use strict";var n=r("0c90"),s=r.n(n);s.a},"6e50":function(t,e,r){},"9c0c":function(t,e,r){},ed48:function(t,e,r){"use strict";var n=r("21cf"),s=r.n(n);s.a},efb2:function(t,e,r){"use strict";var n=r("45eb"),s=r.n(n);s.a},fa60:function(t,e,r){"use strict";var n=r("6e50"),s=r.n(n);s.a}});
//# sourceMappingURL=app.da4abc1a.js.map