var main=function(e){function t(t){for(var n,l,u=t[0],i=t[1],c=t[2],d=0,f=[];d<u.length;d++)l=u[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={2:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(){return Promise.resolve()},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window.webpackJsonpmain=window.webpackJsonpmain||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=i;return a.push([1588,0,1]),r()}({1588:function(e,t,r){"use strict";r.r(t);r(543),r(544);var n=r(74),o=r(0),a=r(23),l=(r(359),r(8)),u=r(70),i=r(262),c=r(40),s=r(184),d=r(396),f=r(15),p=r(19),b=r(430);const m=l.a.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`,h=l.a.div`
    flex-grow: 1;
    overflow: auto;
    display: flex;
`;var g=r(1),v=r(389),y=r.n(v);const O=r(157);r(679)(O),y()(O);const j=new URL(document.location.href),w=j.searchParams.get("uuid"),P=j.searchParams.get("uid"),x=j.searchParams.get("token");p.login(`${P}:${x}`,!0),O.setOptions({global:{useUTC:!1},lang:{loading:Object(g._t)("Loading..."),decimalPoint:",",thousandsSep:".",resetZoom:Object(g._t)("Reset zoom")}}),a.locale("pt"),n.render(o.createElement(e=>{const{appStore:t}=Object(f.useStores)(),[r,n]=o.useState(null);return o.useEffect(()=>{setTimeout(()=>{p.object.getByUuid("Dashboard",e.uuid).then(e=>n(e.id))},500)},[]),o.createElement(u.a,{theme:t.darkMode?s.a:s.b},o.createElement(c.b,{styles:d.a(t.darkMode?s.a:s.b)}),o.createElement(i.a,null),o.createElement(m,null,o.createElement(h,null,r&&o.createElement(b.a,{dashboardId:r,published:!0}))))},{uuid:w}),document.getElementById("app"))}}).default;