var main=function(e){function t(t){for(var n,i,a=t[0],c=t[1],s=t[2],m=0,u=[];m<a.length;m++)i=a[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);u.length;)u.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={3:0},l=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(){return Promise.resolve()},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window.webpackJsonpmain=window.webpackJsonpmain||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var d=c;return l.push([1579,0,1]),o()}({1572:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}t.default=({styles:e={},...t})=>r.a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 551.13 551.13",fill:"currentColor"},t),r.a.createElement("path",{d:"M361.679 275.565L137.783 499.462v51.668l275.565-275.565L137.783 0v51.668z"}))},1573:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}t.default=({styles:e={},...t})=>r.a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 551.13 551.13",fill:"currentColor"},t),r.a.createElement("path",{d:"M275.565 361.679L51.668 137.783H0l275.565 275.565L551.13 137.783h-51.668z"}))},1574:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}t.default=({styles:e={},...t})=>r.a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 510 510"},t),r.a.createElement("path",{fill:"currentColor",d:"M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm127.5 280.5h-102v102h-51v-102h-102v-51h102v-102h51v102h102v51z"}))},1579:function(e,t,o){"use strict";o.r(t);var n={};o.r(n),o.d(n,"TabList",(function(){return Rn})),o.d(n,"ActionButton",(function(){return Nn})),o.d(n,"Tab",(function(){return Gn})),o.d(n,"Panel",(function(){return Ln})),o.d(n,"PanelNoOverflow",(function(){return Un}));o(543),o(544);var r=o(74),l=o(0),i=o(23),a=(o(359),o(389)),c=o.n(a),s=o(12),d=o(70),m=o(40),u=o(262),h=(o(848),o(849),o(850),o(851),o(852),o(184)),p=o(396),b=o(15),g=o(8),E=o(144),x=o(2),f=o(31),v=o(18),w=o(81),y=o(220),S=o(19),O=o(1);const C=o(790).default,B=o(791).default,j=g.a.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${e=>e.theme.colors.gridBackground};
`,k=Object(E.a)(g.a.div`
    width: 600px;
    height: 370px;
    background-color: ${e=>e.theme.colors.appHeaderBackground};
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    border-top: 12px solid ${e=>e.theme.colors.ok};
    position: relative;
    box-shadow: ${e=>e.theme.shadows.card};
`),_=g.a.form`
    width: 400px;
    margin-left: auto;
    margin-right: auto;
`,D=(g.a.div`
    border-top: 1px solid #ccc;
    background-color: #efefef;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    right: 0;
    left: 0;
    height: 50px;
`,Object(s.observer)(e=>{const{sessionStore:t,appStore:o}=Object(b.useStores)(),[n,r]=l.useState(""),[i,a]=l.useState(""),[c,s]=l.useState(!1),d=o.darkMode?C:B,[m,u]=l.useState(0),{x:h}=Object(E.b)({x:m,config:{duration:600}});return l.useEffect(()=>{t.loginStatus==y.a.LoginError&&u(0==m?1:0)},[t.loginStatus]),l.createElement(j,null,l.createElement(k,{style:{transform:h.interpolate({range:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],output:[0,-2,4,-8,8,-8,8,-4,4,-2,0]}).interpolate(e=>`translate3d(${e}px, 0, 0)`)}},l.createElement(x.Box,{mt:2,mb:2,justifyContent:"center"},l.createElement(d,{height:100})),l.createElement(_,{onSubmit:e=>e.preventDefault()},l.createElement(x.Box,{mb:3},l.createElement(f.TextField,{label:Object(O._t)("Username"),isInvalid:t.isLoginError,width:400,autoFocus:!0,value:n,onChange:e=>r(e.target.value)})),l.createElement(x.Box,{mb:3},l.createElement(f.PasswordField,{label:Object(O._t)("Password"),isInvalid:t.isLoginError,width:400,value:i,onChange:e=>a(e.target.value)})),l.createElement(x.Box,{mb:4},l.createElement(w.Checkbox,{label:Object(O._t)("Remember me"),isChecked:c,onChange:e=>s(e.target.checked)})),l.createElement(x.Box,{mb:3},l.createElement(v.Button,{type:"submit",isDisabled:t.isLoggingIn,onClick:function(){S.login(n+":"+i)},variant:"primary"},"Login")))))}));var M=o(6),I=o(51),T=o(130),A=o(64),P=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const $=g.a.div`
    @keyframes rotating {
        from {
            transform: rotateZ(0deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
    
    ${e=>e.isAnimating?"animation: rotating 5s linear infinite;":""};
`,F=g.a.div`
    position: relative;
`,z=g.a.div`
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${e=>e.theme.colors.error};
    top: 0;
    right: 0;
`,R=g.a.div`
    cursor: ${e=>e.disabled?"auto":"pointer"};
    padding: 0 20px;
    margin: 0px 0;
    width: 300px;
    height: 38px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    align-items: center;
    justify-content: left;
    color: ${e=>e.disabled?e.theme.colors.verySubtleText:e.theme.colors.controlFocus};
    :hover {
        color: ${e=>e.disabled?"auto":"white"};
        background-color: ${e=>e.disabled?"auto":e.theme.colors.controlFocus};

        div {
            color: ${e=>e.disabled?"auto":"white"};
        }
    }
`,N=g.a.div`
    border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
    margin: 0;
`,G=g.a.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    margin-left: 20px;
    font-weight: ${e=>e.default?"bold":"normal"};
    color: ${e=>e.disabled?e.theme.colors.verySubtleText:e.theme.colors.text};
`,L=e=>{const{label:t,icon:o,info:n,sep:r}=e,i=P(e,["label","icon","info","sep"]),a=o;return l.createElement(l.Fragment,null,l.createElement(R,Object.assign({},i),l.createElement(a,{width:24,height:24}),l.createElement(G,{default:e.default,disabled:e.disabled},t)),r&&l.createElement(N,null))},U=e=>{const{appStore:t,containerStore:o,configStore:n}=Object(b.useStores)(),[r,i]=l.useState(null),[a,c]=l.useState(!1),s=Object(d.b)(),m=l.createElement(F,null,e.showBadge&&l.createElement(z,null),l.createElement(v.Button,{isSubtle:!0,isSmall:!0,onClick:()=>c(!0)},l.createElement($,{isAnimating:!1},l.createElement(M.cog,{width:s.sizes.appHeaderIcon,height:s.sizes.appHeaderIcon})))),u=[{label:l.createElement(x.Box,{alignItems:"center",flexGrow:1},Object(O._t)("Global search"),l.createElement(x.Box,{flexGrow:1}),l.createElement(x.Box,{ml:3,justifyContent:"flexEnd",color:"subtleText",alignItems:"center"},l.createElement(M.shift,{width:18,height:18}),l.createElement(x.Box,{ml:1,fontWeight:"bold"},"+ F"))),icon:M.search,onClick:()=>{t.showOmniSearch=!0,c(!1)},info:void 0},{label:Object(O._t)("Change password"),icon:M.passwordInput,onClick:()=>{t.setChangingPassword(!0),c(!1)},info:void 0},{label:Object(O._t)("License and account"),icon:M.keyMono,onClick:()=>{t.isShowingAccountInfo=!0,c(!1)},info:void 0,sep:!0},{label:Object(O._t)("Monsta is up-to-date"),icon:M.updateMono,onClick:()=>null,sep:!0,disabled:!0},{label:Object(O._t)("About Monsta"),icon:M.monsta,onClick:()=>{t.isShowingAbout=!0,c(!1)},sep:!0},{label:Object(O._t)("Sign out"),icon:M.powerOff,onClick:()=>S.logout()}].map((e,t)=>l.createElement(L,{key:t,onMouseEnter:()=>i(e),onMouseLeave:()=>i(null),onClick:e.onClick,disabled:e.disabled,label:e.label,icon:e.icon,info:e.info,sep:e.sep}));return l.createElement(l.Fragment,null,l.createElement(T.default,{open:a,onClose:()=>c(!1),position:"bottom right",contentStyle:{borderRadius:5,padding:0,width:"auto",backgroundColor:s.colors.background,zIndex:1e4},arrowStyle:{backgroundColor:s.colors.background,boxShadow:s.colors.controlBorder+" 1px 1px 1px"},trigger:l.createElement("div",null,m),overlayStyle:{zIndex:1e3}},l.createElement(x.Box,{flexDirection:"column",my:1},l.createElement(R,{onClick:()=>n.setDarkMode(!n.darkMode)},l.createElement(x.Box,{width:24},l.createElement(M.moon,{width:18,height:18})),l.createElement(G,null,l.createElement(x.Box,{mr:4},Object(O._t)("Dark mode")),l.createElement(x.Box,{flexGrow:1}),l.createElement(x.Box,null,l.createElement(A.Switch,{isChecked:n.darkMode,onClick:e=>e.stopPropagation(),onChange:e=>n.setDarkMode(e.target.checked)})))),l.createElement(N,null),u)))};var V=o(128);class W extends l.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error(e),console.error(t)}render(){return this.state.hasError?l.createElement(x.Box,null,l.createElement(M.warning,{width:24,height:24})):this.props.children}}const H=g.a.div`
    position: relative;
`,K=g.a.div`
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${e=>e.theme.colors.error};
    top: -2px;
    right: 0px;
    color: white;
    font-size: 9px;
    line-height: 14px;
    text-align: center;
    cursor: pointer;
`,q=g.a.div`
    width: 350px;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    padding: 8px;
    border-top: 1px solid ${e=>e.theme.colors.subtleBorder};
    align-items: center;
`,J=g.a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    flex-shrink: 0;
    color: ${e=>e.theme.colors[e.color]||e.color};
`,Z=g.a.div`
    font-weight: bold;
    font-size: 14px;
`,Y=g.a.div`
    margin-top: 8px;
    color: ${e=>e.theme.colors.subtleText};
    font-size: 13px;
`,X=g.a.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #0080ff;
`,Q=g.a.div`
    display: flex;
    justify-content: flex-end;
    padding: 6px 8px; 
`,ee=Object(s.observer)(e=>{const t=Object(d.b)(),[o,n]=l.useState(!1),{appStore:r}=Object(b.useStores)(),i=l.createElement(H,null,r.unreadNotificationCount>0&&l.createElement(K,null,r.unreadNotificationCount),l.createElement(v.Button,{isSubtle:!0,isSmall:!0,onClick:()=>n(!0)},l.createElement(M.flag,{width:20,height:20})));let a=r.notifications;0==a.length&&(a=[{ident:"empty",icon:l.createElement(x.Box,{color:"#0080ff"},l.createElement(M.info,{width:24,height:24})),title:Object(O._t)("No notifications"),read:!0}]);const c=a.map(e=>l.createElement(q,{key:e.ident},e.icon&&l.createElement(J,{color:e.color},e.icon)||l.createElement(J,null,l.createElement(x.Box,{color:"#0080ff"},l.createElement(M.flag,{width:24,height:24}))),l.createElement(x.Box,{flexDirection:"column",alignItems:"center"},l.createElement(Z,null,e.title),e.text&&l.createElement(Y,null,e.text)),l.createElement(x.Box,{width:40,flexShrink:0,alignItems:"center",justifyContent:"center"},!e.read&&l.createElement(X,null))));return l.createElement(l.Fragment,null,l.createElement(T.default,{open:o,onClose:()=>n(!1),position:"bottom right",contentStyle:{borderRadius:5,padding:0,backgroundColor:t.colors.background,zIndex:1e4,width:"auto",maxHeight:400,overflow:"auto"},arrowStyle:{backgroundColor:t.colors.background,boxShadow:t.colors.controlBorder+" 1px 1px 1px"},trigger:l.createElement("div",null,i),overlayStyle:{zIndex:1}},l.createElement(x.Box,{flexDirection:"column",my:1},l.createElement(Q,null,l.createElement(v.Button,{isDisabled:!0,isSmall:!0,onClick:()=>r.markAllNotificationsRead()},l.createElement(M.doubleCheck,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Mark all read")))),c)))}),te=o(790).default,oe=o(791).default,ne=g.a.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: ${e=>e.theme.sizes.appHeaderHeight}px;
    font-size: ${e=>e.theme.sizes.appHeaderFontSize}px;
    overflow: hidden;
    ${I.color}
    ${I.border}
`,re=g.a.div`
    cursor: pointer;
`,le=g.a.a`
    ${I.color}
    height: ${e=>e.theme.sizes.appHeaderHeight}px;
    display: flex;
    align-items:center;
    justify-content: center;
    margin-right: 10px;
    text-decoration: none;
    color: ${e=>e.isDisabled?"#aaa":e.theme.colors.text} !important;
    padding: 0 10px;
    border-bottom: ${e=>e.theme.sizes.appHeaderNavBorder}px solid;
    border-color: ${e=>e.isSelected?e.theme.colors.ok:"transparent"};
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: ${e=>e.isDisabled?"default":"pointer"};

    :hover {
        border-color: ${e=>e.isDisabled?void 0:e.theme.colors.ok};
    }
`,ie=g.a.div`
    margin-left: 12px;
`;function ae(e,t,o,n,r){const i=n.area.split(".")[0]==e;return l.createElement(le,{href:"#"+e,key:e,isSelected:i,isDisabled:r,onClick:e=>{if(r)return e.preventDefault(),!1}},o,t&&l.createElement(ie,null,t))}const ce=Object(s.observer)(e=>{const{appStore:t,pluginStore:o,configStore:n}=Object(b.useStores)(),r=t.location,i=t.darkMode?te:oe,a=Object(d.b)(),c=a.sizes.appHeaderIcon;let s;if(0==r.area.indexOf("plugin-")){const e=r.area.split("-");s=o.getViewByIdPrefix(e[1],e[2])}const m=o.appHeaderItemsSorted.map(t=>l.createElement(W,{key:`${t.plugin.uuid}-${t.id}`},l.createElement(x.Box,{mx:1},l.createElement(t.component,Object.assign({plugin:t.plugin},e))))),u=o.views.filter(e=>e.type==V.PluginViewType.Main).map(e=>ae(`plugin-${e.plugin.uuid.substr(0,8)}-${e.id}`,e.name,l.createElement("div",null,e.icon),r));return l.createElement(ne,{borderBottom:"1px solid",borderBottomColor:"dialogBorder",bg:"appHeaderBackground"},l.createElement(re,null,l.createElement(i,{height:a.sizes.appHeaderLogo,onClick:()=>t.isShowingAbout=!0})),l.createElement(x.Box,{ml:30},ae("devices",Object(O._t)("Devices"),l.createElement(M.network,{width:c,height:c}),r),ae("dashboards",Object(O._t)("Dashboards"),l.createElement(M.grid,{width:c,height:c}),r),ae("events",Object(O._t)("Timeline"),l.createElement(M.timeline,{width:c,height:c}),r),ae("actions",Object(O._t)("Actions"),l.createElement(M.automation,{width:c,height:c}),r),u,ae("config",Object(O._t)("Configuration"),l.createElement(M.tools,{width:c,height:c}),r),n.developerMode&&ae("studio",null,l.createElement(M.coding,{width:c,height:c}),r)),l.createElement(x.Box,{flexGrow:1}),m,l.createElement(x.Box,{mx:1},l.createElement(ee,null)),l.createElement(x.Box,{mx:1},l.createElement(U,null)))});var se=o(172),de=o(79),me=o(319);const ue=Object(E.a)(g.a.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: ${e=>e.height}px;
    z-index:1000;
    background-color: #222;
    color: #fff;
`),he=e=>{const t=Object(E.c)(e.isOpen,null,{from:{bottom:-e.height},enter:{bottom:0},leave:{bottom:-e.height},config:{duration:150},onDestroyed:()=>e.onAnimDone&&e.onAnimDone()});return l.createElement(l.Fragment,null,t.map(t=>t.item&&l.createElement(ue,{style:t.props,key:t.key,height:e.height},e.children)))};he.defaultProps={height:250};var pe=o(178),be=o(7),ge=o(44),Ee=o(195),xe=o(47),fe=o(27),ve=o(110),we=o(298),ye=o(425),Se=o(54),Oe=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};function Ce(e,t,o){const n=new we.a(e);n.class="Monitor",n.contextPriority=10,n.parents.push(t),n.asMonitor().setName("Uptime"),n.asMonitor().setShortName("Uptime"),n.asMonitor().setRunIntervalSecs(60),n.asMonitor().setMaxCheckAttempts(3),n.props.uptime=!0,n.props.icon=e.rootStore.configStore.defaultUptimeIcon;const r=new ve.a(e.rootStore.metricStore);return r.setName("Uptime"),r.setShortName("Uptime"),r.setColor("#00f"),r.setValueSource(o),r.setOrder(0),r.setMaxCheckAttempts(3),r.setRunIntervalSecs(60),n.metrics.push(r),n}var Be=o(105),je=o(218),ke=o(427),_e=o(215),De=o(3),Me=o(418),Ie=o(136);const Te=g.a.div`
    border: solid 2px ${e=>e.theme.colors.subtleBorder};
    display: flex;
    flex-direction: column;
    width: ${e=>e.width};
    height: ${e=>e.height};
    padding: 30px;
    border-radius: 3px;
`,Ae=g.a.div`
    padding: 30px;
    background-color: ${e=>e.theme.colors.gridBackground};
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`,Pe=Object(s.observer)(e=>l.createElement(Te,{width:e.width+"px"||"100%",height:e.height+"px"||"100%"},l.createElement(Ae,null,l.createElement(x.Box,{justifyContent:"center"},l.createElement(M.graph,{width:150,height:150})),l.createElement(x.Box,{mt:5,justifyContent:"center",fontSize:48,fontWeight:"bold",color:"verySubtleText"},l.createElement(x.Box,{mr:3},l.createElement(M.hourglass,{width:48,height:48})),l.createElement(x.Box,null,Object(O._t)("Waiting for data")))))),$e=g.a.div`
    border: solid 2px ${e=>e.theme.colors.subtleBorder};
    display: flex;
    flex-direction: column;
    width: ${e=>e.width};
    height: ${e=>e.height};
    padding: 30px;
    border-radius: 3px;
`,Fe=g.a.div`
    display: flex;
    flex-direction: column;
    width: ${e=>e.width};
    height: ${e=>e.height};
`,ze=g.a.div`
    padding: 10px;
    background-color: ${e=>e.theme.colors.gridBackground};
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;
    align-content: flex-start;
`,Re=g.a.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;
    align-content: flex-start;
`,Ne=g.a.div`
    height: 40px;
    display: flex;
    align-items: center;
`,Ge=g.a.div`
    width: ${e=>e.indicatorSize}px;
    height: ${e=>e.indicatorSize}px;
    background-color: ${e=>e.hasData?e.theme.colors.ok:e.theme.colors.inactive};
    margin: ${e=>e.indicatorMargin}px;
    border-radius: ${e=>e.indicatorMargin}px;
`,Le=g.a.div`
    height: ${e=>e.pct}%;
    background-color: ${e=>e.theme.colors.error};
    border-radius: 2px;
`,Ue=Object(s.observer)(e=>{const t=e.data.filter(e=>!e.up||!1===e.value).length;return l.createElement(Ge,{hasData:e.data.length>0,indicatorSize:e.indicatorSize,indicatorMargin:e.indicatorMargin},l.createElement(Le,{pct:t/e.data.length*100}))}),Ve=Object(s.observer)(e=>{const{metricDataStore:t}=Object(b.useStores)(),[o,n]=l.useState(null);l.useEffect(()=>{let o;return o=e.hours?t.trackDataHours(e.metric.id,e.hours):t.getDataRange(e.metric.id,e.from,e.to),n(o),function(){t.freeData(o)}},[e.metric,e.hours,e.from,e.to]);const r=[];let a=0;if(o){const t=e.mini?0:84,n=e.mini?0:40,l=e.indicatorSize+2*e.indicatorMargin,i=Math.floor((e.width-t)/l)*Math.floor((e.height-t-n)/l),s=o.from.valueOf(),d=o.to.valueOf()-s;a=Math.floor(d/i);for(var c=0;c<i;c++)r[c]=[];o.points.forEach(e=>{const t=1e3*e.time,o=Math.ceil((t-s)/a)-1;o>0&&o<i&&r[o].push(e)}),r.forEach((e,t)=>{if(0==e.length)for(let o=t-1;o>=0;o--)if(r[o].length>0){e.push(r[o][r[o].length-1]);break}}),r.reverse()}const s=r.map((t,o)=>l.createElement(Ue,{key:o,data:t,indicatorSize:e.indicatorSize,indicatorMargin:e.indicatorMargin})),d=i.duration(a,"milliseconds").locale("pt").humanize();return e.mini?l.createElement(Fe,{width:e.width+"px"||"100%",height:e.height+"px"||"100%"},l.createElement(Re,null,s)):l.createElement($e,{width:e.width+"px"||"100%",height:e.height+"px"||"100%"},l.createElement(ze,null,s),l.createElement(Ne,null,l.createElement(Ge,null),l.createElement(x.Box,{mx:2},"="),l.createElement(x.Box,null,d)))});Ve.defaultProps={indicatorSize:24,indicatorMargin:2};var We=o(327);function He(e){return l.createElement("div",{style:{position:"absolute",height:"100%",transform:`rotate(${e.turns}turn)`}},l.createElement("div",{style:e.style}))}function Ke(e){const t=1/e.count;return Ie.a.range(e.count).map(o=>l.createElement(He,{key:o,turns:o*t,style:e.style}))}const qe=Object(s.observer)(e=>{const t=Object(d.b)();return l.createElement(We.b,{value:e.value,minValue:e.minValue,maxValue:e.maxValue,text:e.text,strokeWidth:e.strokeWidth,styles:Object(We.c)({strokeLinecap:"butt",pathColor:t.colors[e.color]||e.color,pathTransition:"none"})},l.createElement(Ke,{count:e.count,style:{background:t.colors.background,width:"2px",height:e.strokeWidth+"%"}}))});qe.defaultProps={minValue:0,maxValue:100,strokeWidth:10,color:"controlFocus"};var Je=o(315),Ze=o(106),Ye=o(41);const Xe=o(1436),Qe=o(1582),et=Object(s.observer)(e=>{const t=e.from.split("\n").map(e=>e.trim()),o=e.to.split("\n").map(e=>e.trim());console.log(t),console.log(o);const n=Xe.unifiedDiff(t,o,{fromfile:"value",tofile:"value",lineterm:""}),r=Qe.html(n.join("\n"),{showFiles:!1,drawFileList:!1,matching:"lines"});return l.createElement(Ye.Dialog,{isOpen:!0,title:Object(O._t)("Diff"),onClose:e.onClose,width:900,height:600},l.createElement(x.Box,{width:"100%",dangerouslySetInnerHTML:{__html:r}}))});const tt=Object(s.observer)(e=>{const t=l.useRef(null);e.metric&&(t.current=e.metric instanceof ve.b?e.metric:e.metric.resolve());const o=t.current,n=Object(Be.a)({metrics:o,hours:e.hours,from:e.from,to:e.to,realtimeSecs:e.realtimeSecs}),r=n.length>0?n[0][1]:null,[i,a]=l.useState(0),[c,s]=l.useState(null),[m,u]=l.useState(e.onlyShowChanges),h=Object(d.b)();if(l.useEffect(()=>a(0),[e.metric,e.hours,e.realtimeSecs,e.from,e.to,m]),!r)return null;const p={width:e.width||"100%",height:e.height||"100%",perspective:700,position:"relative",overflow:"hidden",color:h.colors.text,backgroundColor:h.colors.gridBackground},b=r.points.slice().reverse();let g=b;if(m){g=[];let e=null;b.forEach(t=>{t.value!=e&&(g.push(t),e=t.value)})}const E=i>0?i-1:0,f=E+10;let w=g.length;const y=g.slice(E,f).map((t,o)=>{const n=o+E,r=n-i,c=-80*(r+1),d=-200*(r+1),m=t.value&&t.value.split?t.value.split("\n"):[],u={opacity:r<0?0:1-.05*r,display:"flex",flexDirection:"row",position:"absolute",left:0,top:250,bottom:0,transition:"all .3s linear",zIndex:w,transform:"translate3d(0px, "+c+"px, "+d+"px)",padding:20,backgroundColor:h.colors.cardBackground,width:e.width||"100%",height:e.boxHeight||400,overflow:"hidden",border:"1px solid "+h.colors.controlBorder,boxShadow:h.shadows.card,whiteSpace:"pre",cursor:"pointer"},p={position:"absolute",bottom:0,right:0,width:270,backgroundColor:h.colors.controlFocus,color:"white",fontSize:24,padding:10,borderTopLeftRadius:2,textAlign:"center",overflow:"hidden"};w--;const b=g[n+1];b&&null!=b.value&&null!=t.value&&e.onlyShowChanges;const f=[];m.forEach((e,t)=>{var o;0==t?f.push(l.createElement(x.Box,{fontSize:1==m.length?(o=e,o?o.length<=5?180:o.length<=10?90:o.length<=20?45:24:24):32,mb:2,justifyContent:1==m.length?"center":"flex-start"},e)):f.push(l.createElement(x.Box,{fontSize:24},e))}),i>0&&0==o?u.pointerEvents="none":delete u.pointerEvents;const y=b&&b.value&&b.value!=t.value;return l.createElement("div",{style:u,key:t.time,onClick:()=>{a(n)}},l.createElement(x.Box,{mr:4,color:"controlFocus",flexDirection:"column"},l.createElement(x.Box,{flexGrow:1},l.createElement(M.string,{width:48,height:48})),l.createElement(x.Box,null,l.createElement(v.Button,{isSubtle:!0,isDisabled:!y,onClick:()=>{y&&s(n)}},l.createElement(x.Box,{color:"controlFocus"},l.createElement(M.diff,{width:48,height:48}))))),l.createElement(x.Box,{flexGrow:1,flexDirection:"column",justifyContent:1==m.length?"center":"flex-start"},f),l.createElement("div",{style:p},Object(O.formatDateTime)(t.time)))});return l.createElement("div",{style:p},l.createElement(x.Box,{position:"absolute",left:20,top:20,alignItems:"center"},l.createElement(A.Switch,{size:"large",isChecked:m,onChange:e=>u(e.target.checked)}),l.createElement(x.Box,{ml:1},Object(O._t)("Only show changes"))),l.createElement("div",{style:{position:"absolute",right:"10px",top:"10px"}},l.createElement(v.Button,{mb:2,isSubtle:!0,onClick:()=>{i<g.length-1&&a(i+1)}},l.createElement(M.upArrow,{width:24,height:24})),l.createElement(v.Button,{isSubtle:!0,onClick:()=>{i>0&&a(i-1)}},l.createElement(M.downArrow,{width:24,height:24}))),y,null!=c&&l.createElement(et,{onClose:()=>s(null),from:g[c].value||"",to:g[c+1].value||""}))});tt.defaultProps={onlyShowChanges:!0};var ot=o(428),nt=o(48),rt=o(248),lt=o(49);const it=g.a.div`
	border: 1px solid ${e=>e.theme.colors.subtleBorder};
	border-radius: 2px;
	padding-left: ${e=>e.theme.space[3]}px;
	padding-right: ${e=>e.theme.space[3]}px;
	align-items: center;
	margin-bottom: ${e=>e.theme.space[2]}px;
	display: flex;
	height: 64px;
`,at=g.a.div`
	font-weight: bold;
	font-size: 14px;
	margin-bottom: ${e=>e.theme.space[1]}px;
`,ct=Object(s.observer)(e=>{const{configStore:t}=Object(b.useStores)(),[o,n]=l.useState(t.getChartPercentileValue(e.containerId)),[r,i]=l.useState(t.getChartShowPercentileIndicator(e.containerId)),[a,c]=l.useState(t.getChartShowStatusMarkers(e.containerId)),[s,d]=l.useState(t.getChartShowStatusZones(e.containerId)),[m,u]=l.useState(e.groupBy),h=l.useCallback(()=>{t.set(`ui.chart.${e.containerId}.show_status_markers`,a),t.set(`ui.chart.${e.containerId}.show_status_zones`,s),t.set(`ui.chart.${e.containerId}.show_percentile_indicator`,r),t.set(`ui.chart.${e.containerId}.percentile_value`,o),e.onConfirm(m)},[o,r,a,s,m]),p=[{label:Object(O._t)("Automatic"),value:null},{label:Object(O._t)("5 minutes"),value:"5m"},{label:Object(O._t)("15 minutes"),value:"15m"},{label:Object(O._t)("30 minutes"),value:"30m"},{label:Object(O._t)("1 hour"),value:"1h"},{label:Object(O._t)("6 hours"),value:"6h"},{label:Object(O._t)("12 hours"),value:"12h"},{label:Object(O._t)("1 day"),value:"1d"},{label:Object(O._t)("7 days"),value:"7d"},{label:Object(O._t)("30 days"),value:"30d"}];return l.createElement(Ye.Dialog,{isOpen:!0,title:Object(O._t)("Chart Display Options"),confirmText:Object(O._t)("Ok"),closeText:Object(O._t)("Cancel"),width:700,height:500,onClose:e.onClose,onConfirm:h},l.createElement(it,null,l.createElement(x.Box,{width:50},l.createElement(M.zonedGraph,{width:32,height:32})),l.createElement(x.Box,{width:70},l.createElement(A.Switch,{size:"large",isChecked:s,onChange:e=>d(e.target.checked)})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(at,null,Object(O._t)("Show status zones")),l.createElement(x.Box,null,Object(O._t)("Description")))),l.createElement(it,null,l.createElement(x.Box,{width:50,color:"ok"},l.createElement(M.label,{width:32,height:32})),l.createElement(x.Box,{width:70},l.createElement(A.Switch,{size:"large",isChecked:a,onChange:e=>c(e.target.checked)})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(at,null,Object(O._t)("Show status markers")),l.createElement(x.Box,null,Object(O._t)("Description")))),l.createElement(it,null,l.createElement(x.Box,{width:50,color:"controlFocus"},l.createElement(M.percentile,{width:32,height:32})),l.createElement(x.Box,{width:70},l.createElement(A.Switch,{size:"large",isChecked:r,onChange:e=>i(e.target.checked)})),l.createElement(x.Box,{flexDirection:"column",flexGrow:1},l.createElement(at,null,Object(O._t)("Show percetile indicator")),l.createElement(x.Box,{mt:0,mx:0,alignItems:"center"},l.createElement(Ze.Slider,{disabled:!r,domain:[1,100],values:[o],height:12,handleHeight:24,handleWidth:26,onUpdate:e=>n(e[0])}),l.createElement(x.Box,{py:2,bg:r?"controlFocus":"controlDisabledColor",color:"white",borderRadius:2,ml:4,width:50,justifyContent:"center"},o,"%")))),l.createElement(it,null,l.createElement(at,null,Object(O._t)("Group data by time")),l.createElement(x.Box,{ml:4},l.createElement(lt.Select,{value:p.find(e=>e.value==m)||p[0],onChange:e=>u(e.value),options:p,width:300}))))});var st,dt=o(170),mt=function(e,t,o,n){var r,l=arguments.length,i=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(l<3?r(i):l>3?r(t,o,i):r(t,o))||i);return l>3&&i&&Object.defineProperty(t,o,i),i},ut=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};function ht(e){switch(e){case be.Type.Int:case be.Type.UInt:case be.Type.Float:return st.Numeric;case be.Type.String:return st.Text;case be.Type.Bool:return st.Bool;default:return st.None}}!function(e){e[e.None=0]="None",e[e.Numeric=1]="Numeric",e[e.Text=2]="Text",e[e.Bool=3]="Bool"}(st||(st={}));class pt{constructor(e,t=!0){this.metrics=[],this.events=[],this.actionsTaken=[],this.metricStore=e,t&&S.subscribe("kernel.metrics.executed",this.onMetricsExecuted.bind(this)).then(e=>this.executedSubscription=e)}get selectedChart(){let e=null;return this.charts.forEach(t=>{t.metrics.includes(this.selectedMetric)&&(e=t)}),e}setSelectedMetric(e){this.selectedMetric=e}get latestAction(){return this.actionsTaken.length>0?this.actionsTaken[0].time:null}get charts(){const e=Ie.a.groupBy(this.metrics,e=>""+e.valueType);return Object.values(e).map(e=>(Object(O.sortBy)(e,e=>e.order),{type:e[0].valueType,metrics:e}))}get orderedMetrics(){const e=this.metrics.slice();return Object(O.sortBy)(e,e=>e.order),e}onActionUpdated(e){this.loadActionsTaken()}onMetricsExecuted(e){const t=this.metrics.map(e=>e.id).filter(t=>-1!=e.indexOf(t));t.length>0&&(this.loadMetrics(t),this.loadEvents())}clear(){this.metrics.clear()}subscribeActionEvent(){this.monitor&&S.subscribe("kernel.event.action_update."+this.monitor.container.id,this.onActionUpdated.bind(this)).then(e=>this.actionSubscription=e)}unsubscribeActionEvent(){this.actionSubscription&&(S.unsubscribe(this.actionSubscription),this.actionSubscription=null)}dispose(){this.executedSubscription&&(S.unsubscribe(this.executedSubscription),this.executedSubscription=null),this.unsubscribeActionEvent()}loadActionsTaken(){return ut(this,void 0,void 0,(function*(){if(this.monitor){const[e,t]=yield S.event.get({containerId:Number(this.monitor.container.id),pageSize:1});if(e.length>0){const t=yield S.action.getActionsTaken(e[0].id);let o;Object(De.runInAction)(()=>{this.actionsTaken=[],t.forEach(e=>{const t=new dt.d(this.metricStore.rootStore.actionStore);t.updateFromJs(e);const n=t.time;(!o||n>o)&&(o=n),this.actionsTaken.push(t)})})}}}))}loadMetrics(e,t){return ut(this,void 0,void 0,(function*(){const o=yield S.metric.get(e);Object(De.runInAction)(()=>{o.forEach(e=>{let t=this.metrics.find(t=>t.id==e.id);t||(t=new be.Metric(this.metricStore),this.metrics.push(t)),t.updateFromJs(e)}),t&&t()})}))}loadEvents(){return ut(this,void 0,void 0,(function*(){const[e,t]=yield S.event.get({containerId:Number(this.monitor.container.id),eventType:be.EventType.ContainerMetricStatusChange,pageSize:10,page:1});Object(De.runInAction)(()=>{this.events.clear(),e.forEach(e=>{const t=new be.Event(this.metricStore.rootStore.eventStore);t.updateFromJs(e),this.events.push(t)}),this.latestEvent=this.events[0]})}))}}mt([De.observable],pt.prototype,"metrics",void 0),mt([De.observable],pt.prototype,"selectedMetric",void 0),mt([De.observable],pt.prototype,"events",void 0),mt([De.observable],pt.prototype,"latestEvent",void 0),mt([De.observable],pt.prototype,"actionsTaken",void 0),mt([De.observable],pt.prototype,"percentileMetric",void 0),mt([De.observable],pt.prototype,"percentile",void 0),mt([De.computed],pt.prototype,"selectedChart",null),mt([De.action],pt.prototype,"setSelectedMetric",null),mt([De.computed],pt.prototype,"latestAction",null),mt([De.computed],pt.prototype,"charts",null),mt([De.computed],pt.prototype,"orderedMetrics",null),mt([De.action],pt.prototype,"clear",null);const bt=Object(s.observer)(e=>{const t=Object(Be.a)(Object.assign({metrics:e.metric},e));let o=0;if(t.length>0){const e=t[0][1].points.filter(e=>!0===e.value).length;o=Math.floor(e/t[0][1].points.length*100)}return l.createElement(Je.a,{value:o,text:Object(O.formatNumber)(o,0)+"%",color:"ok"})});var gt=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const Et=g.a.div`
    padding: 20px;
`,xt=(g.a.div`
    height: 8px;
    background-color: ${e=>e.theme.colors[e.statusColor]};
    border-top-left-radius: 3px;
`,g.a.div`
    position: absolute;
    right: 0;
    top: 0;
`),ft=g.a.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 4px;
`,vt=g.a.div`
    position: absolute;
    right: 0;
    top: 80px;
    width: 296px;
    z-index: 1;
    bottom: 0;
    overflow: hidden;
`,wt=g.a.table`
    td {
        vertical-align: middle;
        //padding-right: 8px;
        padding: 5px 8px 5px 0;
    }
`,yt=Object(s.observer)(e=>{const t=Object(d.b)(),{appStore:o,metricStore:n,configStore:r}=Object(b.useStores)(),a=l.useRef(new pt(n)).current,[c,s]=Object(Be.b)(),[m,u]=l.useState(24),[h,p]=l.useState(5),[g,E]=l.useState(h),[f,w]=l.useState("column"),[y,C]=l.useState(null),[B,j]=l.useState(!1),[k,_]=l.useState([i().startOf("day").subtract(1,"day"),i().endOf("day")]),[D,I]=l.useState(!0),[A,P]=l.useState(null),$=Object(O.statusColorFromStatus)(e.monitor.status)||"inactive",F=k[1].isBefore(k[0]),z=l.useCallback(Ie.a.debounce(p,1e3),[p]);let R=st.None;a.selectedChart&&(R=ht(a.selectedChart.type)),Object(De.runInAction)(()=>a.monitor=e.monitor);const N=l.useCallback(()=>{u([k[0],k[1]]),I(!1)},[k[0],k[1]]),G=l.useCallback(()=>{nt.alert(nt.MsgboxType.Error,Object(O._t)("Last Error"),Object(O._t)("Metric Error"),a.latestEvent?a.latestEvent.props.error_msg:"")},[a]);l.useEffect(()=>{a.clear(),a.unsubscribeActionEvent(),a.subscribeActionEvent(),a.loadActionsTaken(),a.loadMetrics(e.monitor.metrics.map(e=>e.id),()=>{a.metrics.length>0&&a.setSelectedMetric(a.orderedMetrics[0])}),a.loadEvents()},[e.monitor.container.orderedMetrics]),l.useEffect(()=>()=>a.dispose(),[a]);let L,U,V,W=l.createElement(x.Box,{mt:20},l.createElement(Pe,{width:c-200-280-40-50-20,height:s-270-62-76-20}));Array.isArray(m)?(L=m[0],U=m[1]):"number"==typeof m&&(V=m),(L&&U||V||"rt"==m)&&(R==st.Numeric&&(W=l.createElement(je.a,{from:L,to:U,hours:V,groupBy:y,realtimeSecs:"rt"==m?h:null,title:e.monitor.name,metrics:a.selectedChart.metrics,width:c-200-280-40-50,height:s-250-40-40,events:r.getChartShowStatusMarkers(e.monitor.container.id)?a.events:void 0,showZones:r.getChartShowStatusZones(e.monitor.container.id),percentileMarkerMetric:r.getChartShowPercentileIndicator(e.monitor.container.id)?a.selectedMetric:void 0,percentileValue:r.getChartPercentileValue(e.monitor.container.id)})),R==st.Bool&&(W=l.createElement(x.Box,{flexDirection:"column",mt:3},l.createElement(x.Box,{mb:2},l.createElement(xe.RadioGroup,{value:f,onChange:w},l.createElement(xe.RadioButton,{value:"column"},l.createElement(M.boolColumn,{width:16,height:16})),l.createElement(xe.RadioButton,{value:"bool"},l.createElement(M.lights,{width:16,height:16})))),"column"==f&&l.createElement(je.a,{from:L,to:U,hours:V,realtimeSecs:"rt"==m?h:null,title:e.monitor.name,metrics:[a.selectedMetric],isBoolMode:!0,width:c-200-280-40-50,height:s-250-40-40})||l.createElement(x.Box,null,l.createElement(Ve,{from:L,to:U,hours:V,metric:a.selectedMetric,width:c-200-280-40-50-20,height:s-270-62-76})))),R==st.Text&&(W=l.createElement(x.Box,{mt:20},l.createElement(tt,{from:L,to:U,hours:V,metric:a.selectedMetric,width:c-200-280-40-50-20,height:s-270-62-76}))));let H=null;a.selectedMetric&&"number"==typeof a.selectedMetric.value&&"number"==typeof a.selectedMetric.maxValue&&a.selectedMetric.maxValue>0&&(H=Math.ceil(a.selectedMetric.value/a.selectedMetric.maxValue*100));let K=e.monitor.instanceName;return a.selectedMetric&&a.selectedMetric.instanceName&&(K=a.selectedMetric.instanceName),l.createElement(l.Fragment,null,l.createElement(xt,null,l.createElement(ke.a,{showName:!1,showErrorButton:!0,title:a.selectedMetric?a.selectedMetric.name:"",metrics:a.selectedMetric?[a.selectedMetric]:[],width:296,height:K?80:70,color:$,subtitle:K,onErrorButtonClick:G})),l.createElement(vt,null,l.createElement(x.Box,{mt:2},l.createElement(Me.a,{showStatusColor:!0,metrics:a.orderedMetrics,selected:a.selectedMetric,onClick:e=>a.setSelectedMetric(e)})),l.createElement(x.Box,{mt:3},l.createElement(x.Box,{mr:1},l.createElement(v.Button,{onClick:()=>o.editContainer(e.monitor.container)},l.createElement(x.Box,{mr:2},l.createElement(M.edit,{width:16,height:16})),Object(O._t)("Edit"))),l.createElement(x.Box,{mr:1},l.createElement(v.Button,{"data-rh":Object(O._t)("Delete monitor"),isDisabled:e.monitor.isUptime,onClick:()=>gt(void 0,void 0,void 0,(function*(){"ok"==(yield nt.confirm(nt.MsgboxType.Error,Object(O._t)("Confirm Delete"),e.monitor.name,Object(O._t)("Are you sure you want to delete this monitor?"),Object(O._t)("Delete"))).value&&(S.container.del(e.monitor.container.id),o.setSelectedMonitor(null))}))},l.createElement(M.trash,{width:16,height:16}))),l.createElement(x.Box,{mr:1},l.createElement(v.Button,{"data-rh":e.monitor.publishOptions?Object(O._t)("Monitor is published, click to edit"):Object(O._t)("Publish monitor"),onClick:()=>P(e.monitor.container.toViewModel()),variant:e.monitor.publishOptions?"selected":"normal"},l.createElement(M.share,{width:16,height:16}))),l.createElement(x.Box,{ml:3},a.selectedMetric&&l.createElement("div",{"data-rh":`${Object(O._t)("Attempts")} ${a.selectedMetric.checkAttempt} / ${a.selectedMetric.maxCheckAttempts}`,style:{width:30,height:30}},l.createElement(qe,{color:Object(O.statusColorFromStatus)(a.selectedMetric.status),strokeWidth:20,maxValue:a.selectedMetric.maxCheckAttempts,count:a.selectedMetric.maxCheckAttempts,value:a.selectedMetric.checkAttempt})))),l.createElement(x.Box,{mt:4,flexDirection:"column"},a.selectedMetric&&l.createElement(wt,null,l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,l.createElement(M.clockSolid,{width:16,height:16})),l.createElement("td",null,Object(O._t)("Last exec.")),l.createElement("td",null,Object(O.formatDateTime)(a.selectedMetric.lastRunAt,Object(O._t)("Never")))),l.createElement("tr",null,l.createElement("td",null,l.createElement(M.clockSolid,{width:16,height:16})),l.createElement("td",null,Object(O._t)("Next exec.")),l.createElement("td",null,Object(O.formatDateTime)(a.selectedMetric.nextRunAt))),l.createElement("tr",null,l.createElement("td",{style:{paddingTop:5}},l.createElement(x.Box,{color:Object(O.statusColorFromStatus)(a.selectedMetric.status)},l.createElement(M.flag,{width:16,height:16}))),l.createElement("td",null,Object(O._t)("Last status")),l.createElement("td",null,Object(O.formatDateTime)(a.selectedMetric.lastStatusChangeAt,Object(O._t)("Never")))),l.createElement("tr",null,l.createElement("td",{style:{paddingTop:10}},l.createElement(x.Box,null,l.createElement(M.flash,{width:16,height:16}))),l.createElement("td",null,Object(O._t)("Last action")),l.createElement("td",null,Object(O.formatDateTime)(a.latestAction,Object(O._t)("Never")))),l.createElement("tr",null,l.createElement("td",null),l.createElement("td",{colSpan:2},a.actionsTaken.length>0&&l.createElement(rt.a,{steps:a.actionsTaken[0].steps})))))),null!=H&&l.createElement(x.Box,{mt:4,justifyContent:"center"},l.createElement(x.Box,{width:150,height:150},l.createElement(Je.a,{value:H,text:Object(O.formatNumber)(H,0)+"%",color:$}))),a.selectedMetric&&a.selectedMetric.valueType==be.Type.Bool&&l.createElement(x.Box,{mt:4,justifyContent:"center"},l.createElement(x.Box,{width:150,height:150},l.createElement(bt,{from:L,to:U,hours:V,metric:a.selectedMetric})))),l.createElement(Et,null,l.createElement(ft,null,l.createElement(xe.RadioGroup,{value:Array.isArray(m)?null:String(m),onChange:e=>{u("rt"==e?"rt":Number(e))}},l.createElement(xe.RadioButton,{value:"rt","data-rh":Object(O._t)("Execute monitor in realtime")},l.createElement(M.clockSolid,{width:16,height:16})),l.createElement(xe.RadioButton,{value:"1"},Object(O._t)("1h")),l.createElement(xe.RadioButton,{value:"6"},Object(O._t)("6h")),l.createElement(xe.RadioButton,{value:"12"},Object(O._t)("12h")),l.createElement(xe.RadioButton,{value:"24"},Object(O._t)("24h"))),l.createElement(x.Box,{ml:3},l.createElement(_e.a,{value:k[0],width:130,onChange:e=>{_([e,k[1]]),I(!0)}})),l.createElement(x.Box,{mx:2,alignItems:"center"},l.createElement(M.rightArrowThin,{width:16,height:16})),l.createElement(x.Box,null,l.createElement(_e.a,{value:k[1],width:130,onChange:e=>{_([k[0],e]),I(!0)}})),l.createElement(x.Box,{ml:2,border:"2px solid",borderColor:D?F?"error":"controlFocus":"inactive",borderRadius:"2px"},l.createElement(v.Button,{isSmall:!0,isSubtle:!0,isDisabled:F||!D,onClick:N},l.createElement(M.check,{width:16,height:16}))),l.createElement(x.Box,{ml:2},l.createElement(v.Button,{"data-rh":Object(O._t)("Configure chart display options"),onClick:()=>j(!0)},l.createElement(M.cog,{width:16,height:16})))),l.createElement(T.default,{open:"rt"==m,arrow:!1,onClose:()=>null,closeOnDocumentClick:!1,closeOnEscape:!1,position:"bottom left",trigger:l.createElement("div",null),overlayStyle:{display:"none"},contentStyle:{borderRadius:2,padding:0,width:"auto",backgroundColor:t.colors.background}},l.createElement(x.Box,{pt:2,pb:3,px:3,width:200,flexDirection:"column"},l.createElement(x.Box,{mb:2,fontSize:12},String(g)," ",1==g?Object(O._t)("second"):Object(O._t)("seconds")),l.createElement(Ze.Slider,{domain:[1,30],height:12,handleHeight:24,handleWidth:26,values:[h],onUpdate:e=>{E(e[0]),z(e[0])}}))),l.createElement("div",{style:{position:"relative"}},W)),A&&l.createElement(ot.a,{onClose:()=>P(null),onConfirm:e=>{A.commit(),e?function(e,t){Oe(this,void 0,void 0,(function*(){e.setPublishOptions(t),yield S.container.putContainer(e.container);const o=e.container.model?e.container.model.store.rootStore:e.container.store.rootStore;let n;try{const e=yield S.object.getByUuid("Dashboard",t.uuid);n=new be.Dashboard(o.dashboardStore),n.updateFromJs(e)}catch(e){console.error(e)}n||(n=new be.Dashboard(o.dashboardStore)),n.setUuid(t.uuid),n.setName(e.name),n.props.published_monitor=!0,n.widgets=[];const r=n.addNewWidget(0,0,ye.a);r.left=20,r.top=20,r.right=20,r.bottom=20,r.properties.metrics=e.container.metrics.map(e=>new fe.MetricRef(e.id)),r.properties.hours=t.hours,n.id=yield Object(Se.wrapErrorUI)(S.object.put(n)),n.normalizeForServer();const l=o.authStore.userStore.get(t.uid);l.username=t.uid,l.password=t.token,l.permissions=n.requiredPermissions(),l.props={system_user:!0},yield Object(Se.wrapErrorUI)(S.auth.createUser(l))}))}(A.asMonitor(),e):function(e){Oe(this,void 0,void 0,(function*(){const t=e.publishOptions;t&&(yield Object(Se.wrapErrorUI)(S.auth.deleteUser(t.uid)),yield Object(Se.wrapErrorUI)(S.object.delByUuid("Dashboard",t.uuid)),e.setPublishOptions(null),yield Object(Se.wrapErrorUI)(S.container.putContainer(e.container)))}))}(A.asMonitor()),P(null)},monitor:A.asMonitor()}),B&&l.createElement(ct,{containerId:Number(e.monitor.container.id),groupBy:y,onClose:()=>j(!1),onConfirm:e=>{C(e),j(!1)}}))});var St=o(182),Ot=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const Ct=g.a.div`
    cursor: pointer;
    width: 92px;
    height: 76px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    color: ${e=>e.theme.colors.controlFocus};
    ${e=>e.left&&"border-top-left-radius: 5px"};
    ${e=>e.right&&"border-top-right-radius: 5px"};
    :hover {
        color: white;
        background-color: ${e=>e.theme.colors.controlFocus};

        div {
            color: white;
        }
    }
`,Bt=g.a.div`
    margin-top: 10px;
    color: ${e=>e.default?"black":"#444"};
    font-weight: ${e=>e.default?"bold":"normal"};
    font-size: 12px;
`,jt=g.a.div`
    padding: 5px 10px;
    border-top: 1px solid #999;
    color: black;
    font-size: 12px;
`,kt=e=>{const{label:t,icon:o,info:n}=e,r=Ot(e,["label","icon","info"]),i=o;return l.createElement(Ct,Object.assign({},r),l.createElement(i,{width:32,height:32}),l.createElement(Bt,{default:e.default},t))},_t=Object(s.observer)(e=>{const[t,o]=l.useState(null),{containerStore:n,appStore:r}=Object(b.useStores)(),i=l.useCallback(()=>{const t=n.newMonitor();t.parents.push(e.parent),r.editContainerAdvanced(t)},[e.parent]),a=[{label:Object(O._t)("Template"),icon:M.template,info:Object(O._t)("Add a single monitor from a template"),default:!0,onClick:()=>r.addMonitorForDevice(e.parent)},{label:Object(O._t)("Multiple"),icon:M.multiple,info:Object(O._t)("Add multiple monitors"),onClick:()=>r.addMultiMonitorsForDevice(e.parent)},{label:Object(O._t)("Custom"),icon:M.parameters,info:Object(O._t)("Add custom monitor"),onClick:i}],c=a.find(e=>e.default),s=l.useCallback(()=>{c.onClick&&c.onClick()},[c]),d=a.map((e,t)=>l.createElement(kt,{key:t,onMouseEnter:()=>o(e),onMouseLeave:()=>o(null),onClick:e.onClick,default:e.default,label:e.label,left:0==t,right:t==a.length-1,icon:e.icon,info:e.info}));return l.createElement(T.default,{on:"hover",position:"top left",contentStyle:{borderRadius:5,padding:0,width:"auto"},trigger:e.trigger(s)},l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{flexDirection:"row"},d),l.createElement(jt,null,t&&t.info||c.info)))});var Dt=o(402);const Mt=g.a.div`
    position: absolute;
    bottom: 224px;
    right: 50px;
    left: 200px;
    background-color: ${e=>e.theme.colors.background};
    box-shadow: ${e=>e.theme.shadows.popup};
    border-radius: 3px;
    color: ${e=>e.theme.colors.text};
    z-index: 1;

    :before, :after {
        content: " ";
        position: absolute;
        width: 0;
        height: 0;
    }

    :before {
        top: 100%;
        left: 200px;
        margin-left: -20px;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid;
        border-top-color: inherit;
    }

    :after {
        top: 100%;
        left: 200px;
        margin-left: -20px;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid ${e=>e.theme.colors.background};
    }
`,It=g.a.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 11;
    border: 2px solid #fff;
    right: -16px;
    top: -16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #fff;
    background-color: #555;
    cursor: pointer;
`,Tt=g.a.div`
    height: 8px;
    background-color: ${e=>e.theme.colors[e.statusColor]};
    border-top-left-radius: 3px;
`,At=Object(s.observer)(e=>{const[t,o]=Object(Be.b)();return l.createElement(Mt,{style:{height:o-250}},l.createElement(Tt,{statusColor:e.statusColor}),l.createElement(It,{onClick:e.onClose},l.createElement(M.cross,{width:16,height:16})),e.children)});var Pt=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const $t=g.a.div`
    position: absolute;
    overflow: auto;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
`,Ft=g.a.div`
`,zt=g.a.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`,Rt=g.a.table`
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid ${e=>e.theme.colors.subtleBorder};
    border-right: 1px solid ${e=>e.theme.colors.subtleBorder};
    td {
        padding: 0 8px;
        border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
        height: 50px;
    }
`,Nt=g.a.tr`
`,Gt=(g.a.th`
    padding: 0 8px;
    height: 50px;
    background-color: ${e=>e.theme.colors.toolbarBackground};
    border: 1px solid ${e=>e.theme.colors.subtleBorder};
    text-align: left;
`,g.a.td`
`,Object(s.observer)(e=>{Object(d.b)();const{appStore:t,metricStore:o}=Object(b.useStores)(),[n,r]=l.useState(1),i=Math.ceil(e.monitors.length/10),[a,c]=l.useState(1),[s,m]=l.useState([]),[u,h]=l.useState([]);l.useEffect(()=>{const t=[],n=[],r=e.monitors.slice();r.sort((e,t)=>e.isUptime?-1:t.isUptime?1:e.name<t.name?-1:e.name>t.name?1:0);const l=r.map(e=>Pt(void 0,void 0,void 0,(function*(){const r=(yield S.metric.get(e.metrics.map(e=>e.id))).map(e=>{const t=new ve.b(o);return t.updateFromJs(e),t}),l=r.map(t=>({monitor:e,metric:t}));Array.prototype.push.apply(t,r),Array.prototype.push.apply(n,l)})));Promise.all(l).then(()=>{const e=10*(a-1),o=e+10;m(t.slice(e,o)),h(n.slice(e,o))})},[e.monitors,a]),l.useEffect(()=>c(1),[e.monitors]);const p=Object(Be.a)({metrics:s,hours:n}),g=u.map(e=>{const o=e.monitor,r=e.metric,i=Object(O.statusColorFromStatus)(o.status),a=p.find(([e,t])=>e.id==r.id);let c=null;if(a&&a[1].points.length>0)if(r.valueType==be.Type.Bool){const e=a[1].points.filter(e=>!0===e.value).length/a[1].points.length*100;c=Object(O.formatNumber)(e)+" %"}else c=r.formatValue(a[1].points[a[1].points.length-1].value);let s=o.instanceName;return r.instanceName&&(s=r.instanceName),l.createElement(Nt,{key:r.localId},l.createElement("td",{style:{width:10,padding:0}},l.createElement(x.Box,{width:"10px",bg:i,height:"100%"})),l.createElement("td",{style:{width:24}},o.icon&&l.createElement(ge.Image,{blob:o.icon,width:24})),l.createElement("td",{style:{maxWidth:0}},o.name,s&&`(${s})`),l.createElement("td",{style:{width:160,maxWidth:160}},r.name),l.createElement("td",{style:{width:120,maxWidth:120}},c),l.createElement("td",{style:{width:400}},Object(be.typeIsNumber)(r.valueType)&&l.createElement(je.a,{title:"",mini:!0,metrics:[r],width:400,height:50,hours:n}),r.valueType==be.Type.Bool&&l.createElement(x.Box,{py:10},l.createElement(Ve,{indicatorMargin:1,indicatorSize:8,mini:!0,metric:r,width:400,height:30,hours:n}))),l.createElement("td",{style:{width:60}},l.createElement(x.Box,{flexDirection:"row"},l.createElement(v.Button,{isSubtle:!0,onClick:()=>t.setSelectedMonitor(o.container)},l.createElement(M.search,{width:16,height:16})),l.createElement(v.Button,{isSubtle:!0,onClick:()=>t.editContainer(o.container)},l.createElement(M.edit,{width:16,height:16})))))});return l.createElement($t,null,l.createElement(zt,null,l.createElement(xe.RadioGroup,{value:n,onChange:e=>r(e)},l.createElement(xe.RadioButton,{value:1},Object(O._t)("1h")),l.createElement(xe.RadioButton,{value:6},Object(O._t)("6h")),l.createElement(xe.RadioButton,{value:12},Object(O._t)("12h")),l.createElement(xe.RadioButton,{value:24},Object(O._t)("24h"))),l.createElement(x.Box,{ml:3},l.createElement(v.Button,{isDisabled:1==a,onClick:()=>c(a-1)},l.createElement(M.leftChevron,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Prev page"))),l.createElement(x.Box,{mx:3,fontWeight:"bold",alignItems:"center",fontSize:16},a," / ",i),l.createElement(v.Button,{isDisabled:a>=i,onClick:()=>c(a+1)},l.createElement(x.Box,{mr:2},Object(O._t)("Next page")),l.createElement(M.rightChevron,{width:16,height:16})))),l.createElement(Ft,null,l.createElement(Rt,{cellSpacing:0,cellPadding:0},l.createElement("tbody",null,g))))}));var Lt=o(43),Ut=o(45);const Vt=Object(s.observer)(e=>{const[t,o]=l.useState(`${Object(O._t)("Copy of")} ${e.device.props.name}`),n=l.useCallback(()=>{const o=new Ut.a;o.script=((e,t)=>`\norig_device = core.query("select * from container where id = ${e}")[0]\ndevice = orig_device.clone()\ndevice.props["name"] = "${t}"\ndevice.save()\n\nfor orig_monitor in device.children():\n    monitor = orig_monitor.clone()\n    monitor.set_parent(device)\n\n    for metric in monitor.metrics():\n        metric.set_next_run(0)\n        metric.reset_status()\n\n    monitor.save()\n`)(e.device.id,t),S.script.execute(new be.ExecutionTarget(be.ExecutionTargetType.Kernel),o)},[e.device,t]);return l.createElement(Ye.Dialog,{isOpen:!0,title:Object(O._t)("Duplicate Device"),onClose:e.onClose,confirmText:Object(O._t)("Duplicate"),closeText:Object(O._t)("Cancel"),height:250,onConfirm:()=>{n(),e.onClose()}},l.createElement(f.TextField,{autoFocus:!0,label:Object(O._t)("Name"),value:t,onChange:e=>o(e.target.value)}))});var Wt=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const Ht=g.a.div`
`,Kt=g.a.div`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    position: absolute;
    top: -32px;
    left: 30px;
    background-color: white;
    box-shadow: ${e=>e.theme.shadows.round};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${e=>e.theme.colors[e.color]||e.color};
`,qt=g.a.div`
    // height: 32px;
    // width: 400px;
    // position: absolute;
    // top: -16px;
    // left: 538px;
    // background-color: white;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    // z-index: 10;
`,Jt=g.a.div`
    height: 8px;
    background-color: ${e=>e.theme.colors[e.color]||e.color};
`,Zt=g.a.div`
    position: absolute;
    top: -24px;
    right: 30px;
    z-index: 10;
`,Yt=Object(s.observer)(e=>{const{appStore:t,pluginStore:o,configStore:n}=Object(b.useStores)(),[r,i]=l.useState(!1),[a,c]=l.useState(null),s=l.useRef(),[m,u]=l.useState("");s.current||(s.current=Object(De.observable)(new Set),s.current.add(be.Status.Ok),s.current.add(be.Status.Warn),s.current.add(be.Status.Critical));const h=l.useMemo(()=>{let t=[];return e.device&&(t=e.device.monitors.filter(e=>!!e.isUptime||(e.status==be.Status.Ok?s.current.has(be.Status.Ok):e.status==be.Status.Warn?s.current.has(be.Status.Warn):e.status==be.Status.Critical||e.status==be.Status.Fail?s.current.has(be.Status.Critical):e.status==be.Status.None||void 0)),m&&(t=t.filter(e=>!(!e.name||-1==e.name.toUpperCase().indexOf(m.toUpperCase()))||!(!e.shortName||-1==e.shortName.toUpperCase().indexOf(m.toUpperCase()))))),t},[e.device,e.device?e.device.monitors.length:0,m,s.current.size]);let p;e.device&&(p=Object(O.statusColorFromStatus)(e.device.visualStatus)),p||(p="inactive"),l.useEffect(()=>{e.device||i(!1),u("")},[e.device]);const g=o.deviceActionButtons.map((t,o)=>{let n=t.icon;return"string"==typeof t.icon&&(n=l.createElement(ge.Image,{blob:new fe.BlobRef(t.icon),width:18,height:18})),l.createElement(W,{key:o},l.createElement(v.Button,{key:o,isSmall:!0,isSubtle:!0,onClick:()=>{e.device&&t.onRun(e.device.container)}},n))});return l.createElement(l.Fragment,null,l.createElement(d.a,{theme:St.a},l.createElement(he,{isOpen:null!=e.device,height:224,onAnimDone:e.onAnimDone},e.device&&l.createElement(Ht,null,l.createElement(Kt,{color:p},e.device.icon&&l.createElement(ge.Image,{blob:e.device.icon,width:48})),l.createElement(Zt,null,l.createElement(pe.a,{okCount:e.device.okCount,warnCount:e.device.warnCount,criticalCount:e.device.errorCount})),l.createElement(Jt,{color:p}),l.createElement(x.Box,{pl:30,pt:30,pr:30},l.createElement(x.Box,{width:500,flexShrink:0,flexDirection:"row"},l.createElement(x.Box,{flexShrink:0,flexDirection:"column"},l.createElement(x.Box,{fontWeight:"bold"},e.device.name),l.createElement(x.Box,{mt:1,alignItems:"center"},l.createElement(x.Box,{"data-rh":Object(O._t)("Disable device monitors"),"data-rh-at":"right"},l.createElement(A.Switch,{isChecked:!e.device.isDisabled,onChange:o=>{o.target.checked?t.enableDevice(e.device):t.disableDevice(e.device)}})),l.createElement(v.Button,{"data-rh":Object(O._t)("Detail view"),isSmall:!0,isSubtle:!0,onClick:()=>{document.location.href="#/devices.detail/view/"+e.device.container.id}},l.createElement(M.search,{width:18,height:18})),l.createElement(v.Button,{"data-rh":Object(O._t)("Edit"),isSmall:!0,isSubtle:!0,onClick:()=>t.editDevice(e.device.container)},l.createElement(M.edit,{width:18,height:18})),l.createElement(v.Button,{"data-rh":Object(O._t)("Delete"),isSmall:!0,isSubtle:!0,onClick:()=>Wt(void 0,void 0,void 0,(function*(){"ok"==(yield nt.confirm(nt.MsgboxType.Error,Object(O._t)("Confirm Delete"),e.device.name,Object(O._t)("Are you sure you want to delete this device and all associated monitors?"),Object(O._t)("Delete"))).value&&(S.container.del(e.device.container.id),t.setSelectedDevice(null))}))},l.createElement(M.trash,{width:18,height:18})),l.createElement(v.Button,{isSmall:!0,isSubtle:!0,"data-rh":Object(O._t)("Clone device"),onClick:()=>c(e.device.container)},l.createElement(M.copy,{width:18,height:18})),g,l.createElement(_t,{parent:e.device.container,trigger:e=>l.createElement("div",null,l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:e},l.createElement(M.add,{width:18,height:18})))})),l.createElement(x.Box,{mt:2},e.device.description&&l.createElement("div",{style:{whiteSpace:"pre-wrap"}},e.device.description))),l.createElement(x.Box,{flexDirection:"column",ml:3,pl:3,borderLeft:"solid 1px",borderColor:"subtleBorder"},l.createElement(x.Box,{mb:2},Object(O._t)("Filter monitors"),":"),l.createElement(qt,null,l.createElement(Lt.Input,{elemBeforeInput:l.createElement(M.search,{width:16,height:16}),placeholder:Object(O._t)("Filter by name"),value:m,onChange:e=>u(e.target.value),elemAfterInput:l.createElement(v.Button,{onClick:()=>u(""),isSmall:!0,isSubtle:!0},l.createElement(M.cross,{width:10,height:10}))})),l.createElement(x.Box,{mb:0},Object(O._t)("By status"),":"),l.createElement(Dt.a,{enabled:s.current,onClick:e=>{s.current.has(e)?s.current.delete(e):s.current.add(e)}}))),l.createElement(x.Box,{flexGrow:1},l.createElement(Ee.c,{showValues:"value"==n.monitorBoxDisplayMode,selectedMonitor:t.selectedContainer,device:e.device,monitors:h,isSummarySelected:r,onClick:e=>{e.container?(i(!1),t.setSelectedMonitor(e.container)):(t.setSelectedMonitor(null),i(!0))},onAddClick:()=>t.addMultiMonitorsForDevice(e.device.container)}))),l.createElement(d.a,{theme:t.darkMode?St.a:St.b},t.selectedContainer&&l.createElement(At,{onClose:()=>t.setSelectedMonitor(null),statusColor:Object(O.statusColorFromStatus)(t.selectedContainer.asMonitor().status)||"inactive"},l.createElement(yt,{monitor:t.selectedContainer.asMonitor()})),t.selectedDevice&&!t.selectedContainer&&r&&l.createElement(At,{onClose:()=>i(!1),statusColor:Object(O.statusColorFromStatus)(t.selectedDevice.status)},l.createElement(Gt,{device:t.selectedDevice.asDevice(),monitors:h})))))),a&&l.createElement(Vt,{device:a,onClose:()=>c(null)}))});var Xt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const Qt=g.a.div`
    position: relative;
`,eo=g.a.div`
    cursor: ${e=>e.disabled?"auto":"pointer"};
    padding: 0 20px;
    margin: 0px 0;
    width: ${e=>e.width||270}px;
    height: 30px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    align-items: center;
    justify-content: left;
    color: ${e=>e.disabled?e.theme.colors.verySubtleText:e.theme.colors.controlFocus};
    :hover {
        color: ${e=>e.disabled?"auto":"white"};
        background-color: ${e=>e.disabled?"auto":e.theme.colors.controlFocus};

        div {
            color: ${e=>e.disabled?"auto":"white"};
        }
    }
`,to=g.a.div`
    border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
    margin: 0;
`,oo=g.a.div`
    display: flex;
    align-items: center;
    margin-left: 16px;
    font-weight: ${e=>e.default?"bold":"normal"};
    color: ${e=>e.disabled?e.theme.colors.verySubtleText:e.theme.colors.text};
`,no=e=>{const{label:t,icon:o,info:n,sep:r}=e,i=Xt(e,["label","icon","info","sep"]),a=o;return l.createElement(l.Fragment,null,l.createElement(eo,Object.assign({},i),l.createElement(a,{width:16,height:16}),l.createElement(oo,{default:e.default,disabled:e.disabled},t)),r&&l.createElement(to,null))},ro=e=>{const[t,o]=l.useState(!1),n=Object(d.b)(),r=e.icon;let i;e.icon&&(i=l.createElement(Qt,null,l.createElement(v.Button,{px:"8px",onClick:e=>{e.stopPropagation(),o(!0)}},l.createElement(r,{width:16,height:16}),l.createElement(x.Box,{ml:2},l.createElement(M.downArrow,{width:8,height:8})))));const a=e.items.map((t,n)=>l.createElement(no,{key:n,onClick:()=>{o(!1),t.onClick&&t.onClick()},disabled:t.disabled,label:t.label,icon:t.icon,info:t.info,sep:t.sep,width:e.itemWidth}));return l.createElement(l.Fragment,null,l.createElement(T.default,{open:void 0===e.isOpen?t:e.isOpen,onClose:()=>{e.onClose?e.onClose():o(!1)},position:e.position||"bottom left",contentStyle:{borderRadius:5,padding:0,width:"auto",backgroundColor:n.colors.background},arrowStyle:{display:e.hideArrow?"none":void 0,backgroundColor:n.colors.background,boxShadow:n.colors.controlBorder+" 1px 1px 1px",left:e.arrowPos?"auto":void 0,right:e.arrowPos},trigger:i?l.createElement("div",null,i):l.createElement("div",null,"Test"),overlayStyle:{zIndex:1}},l.createElement(x.Box,{flexDirection:"column",py:1},a)))},lo=Object(s.observer)(e=>{const{appStore:t,pluginStore:o}=Object(b.useStores)(),n=[{label:Object(O._t)("Global device options"),icon:M.globe,onClick:e.onEditGlobal},{label:Object(O._t)("Display options"),icon:M.form,onClick:e.onConfigureDisplayOptions}],r=o.views.filter(e=>e.type==V.PluginViewType.Device).map(e=>{const t=`devices.plugin-${e.plugin.uuid.substr(0,8)}-${e.id}`;return l.createElement(xe.RadioButton,{key:t,value:t},e.icon)});return l.createElement(x.Box,{alignItems:"center"},l.createElement(x.Box,{mr:3},l.createElement(xe.RadioGroup,{value:t.location.action?null:t.location.area,onChange:e=>document.location.hash="#/"+e},l.createElement(xe.RadioButton,{"data-rh":Object(O._t)("Devices"),value:"devices"},l.createElement(M.grid,{width:16,height:16})),l.createElement(xe.RadioButton,{"data-rh":Object(O._t)("Detail view"),value:"devices.detail"},l.createElement(M.search,{width:16,height:16})),l.createElement(xe.RadioButton,{"data-rh":Object(O._t)("Device groups"),value:"devices.groups"},l.createElement(M.groups,{width:16,height:16})),l.createElement(xe.RadioButton,{"data-rh":Object(O._t)("Map view"),value:"devices.network"},l.createElement(M.network,{width:16,height:16})),r)),e.showDeviceOptions&&l.createElement(x.Box,{mr:3},l.createElement(ro,{items:n,icon:M.cog2})),e.onNewDevice&&l.createElement(x.Box,{mr:3,"data-rh":Object(O._t)("Create a new device")},l.createElement(v.Button,{variant:"primary",onClick:e.onNewDevice},l.createElement(M.add,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("New")))),e.children)});var io=o(179);const ao=g.a.table`
    width: 550px;

    td {
        border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
        padding: 3px;
    }
`,co=g.a.tr`
    td {
    }
`,so=g.a.td`
    text-align: center;
`,mo=g.a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: ${e=>e.theme.colors[e.color]||e.color};
    color: ${e=>e.contentColor?e.contentColor:"auto"};
`,uo=Object(s.observer)(e=>{const{containerStore:t,deviceStore:o}=Object(b.useStores)(),n=Object(d.b)(),r=l.createElement(v.Button,{"data-rh":Object(O._t)("Sort"),px:"8px"},l.createElement(M.sort,{width:16,height:16}),l.createElement(x.Box,{ml:2},l.createElement(M.downArrow,{width:8,height:8}))),i=l.createElement(v.Button,{"data-rh":Object(O._t)("Filter"),px:"8px",variant:o.statusFilterActive||o.parentFilter||o.textFilter?"selected":"normal"},l.createElement(M.filter,{width:16,height:16}),l.createElement(x.Box,{ml:2},l.createElement(M.downArrow,{width:8,height:8}))),a=t.deviceGroups.map(e=>e.container);a.sort(Object(O.sortByFunc)(e=>e.props.name));const c=o.statusFilter;return l.createElement(x.Box,{alignItems:"center",flexGrow:1,ml:3},l.createElement(x.Box,{mr:2},l.createElement(T.default,{position:"bottom center",contentStyle:{borderRadius:5,padding:0,width:"auto",backgroundColor:n.colors.background},arrowStyle:{backgroundColor:n.colors.background,boxShadow:n.colors.controlBorder+" 1px 1px 1px"},trigger:l.createElement("div",null,r),overlayStyle:{zIndex:1}},l.createElement(x.Box,{p:3},l.createElement(f.Field,{label:Object(O._t)("Sort field"),help:Object(O._t)("Sort devices by the selected field.")},l.createElement(lt.Select,{width:250,options:o.availableSorts,getOptionLabel:e=>e.name,getOptionValue:e=>e.sort,value:o.sort,onChange:e=>o.sort=e}))))),l.createElement(x.Box,{mr:3},l.createElement(T.default,{position:"bottom center",contentStyle:{borderRadius:5,padding:0,width:"auto",backgroundColor:n.colors.background},arrowStyle:{backgroundColor:n.colors.background,boxShadow:n.colors.controlBorder+" 1px 1px 1px"},trigger:l.createElement("div",null,i),overlayStyle:{zIndex:1}},l.createElement(x.Box,{p:3,flexDirection:"column"},l.createElement(x.Box,{mb:3,pb:2,alignItems:"center",borderBottom:"1px solid",borderColor:"controlBorder"},l.createElement(x.Box,{mr:2},l.createElement(M.string,{width:16,height:16})),l.createElement(v.Button,{mr:2,isSmall:!0,ml:1,variant:o.textFilter?"selected":"normal",onClick:()=>o.textFilter=null},l.createElement(M.cross,{width:12,height:12})),l.createElement(x.Box,{flexGrow:1},Object(O._t)("Filter by text"),":"),l.createElement(Lt.Input,{placeholder:Object(O._t)("Search devices"),width:250,elemAfterInput:l.createElement(M.search,{width:16,height:16}),value:o.textFilter,onChange:e=>o.textFilter=e.target.value})),l.createElement(x.Box,{mb:3,pb:2,alignItems:"center",borderBottom:"1px solid",borderColor:"controlBorder"},l.createElement(x.Box,{mr:2},l.createElement(M.groups,{width:16,height:16})),l.createElement(v.Button,{mr:2,isSmall:!0,ml:1,variant:o.parentFilter?"selected":"normal",onClick:()=>o.parentFilter=null},l.createElement(M.cross,{width:12,height:12})),l.createElement(x.Box,{flexGrow:1},Object(O._t)("Filter by Device Group"),":"),l.createElement(io.ContainerPicker,{noValueText:Object(O._t)("All groups"),value:o.parentFilter,onChange:e=>o.parentFilter=e,width:250,containers:a})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{mb:3,alignItems:"center"},l.createElement(x.Box,{mr:2},l.createElement(M.status,{width:16,height:16})),l.createElement(v.Button,{mr:2,isSmall:!0,ml:1,variant:o.statusFilterActive?"selected":"normal",onClick:()=>o.resetStatusFilter()},l.createElement(M.cross,{width:12,height:12})),l.createElement(x.Box,null,Object(O._t)("Filter by status"),":")),l.createElement(ao,{cellPadding:0,cellSpacing:0},l.createElement("tbody",null,l.createElement(co,null,l.createElement("td",null),l.createElement(so,null,l.createElement(x.Box,{justifyContent:"center"},l.createElement(mo,{color:"ok"}))),l.createElement(so,null,l.createElement(x.Box,{justifyContent:"center"},l.createElement(mo,{color:"warning"}))),l.createElement(so,null,l.createElement(x.Box,{justifyContent:"center"},l.createElement(mo,{color:"error"}))),l.createElement(so,null,l.createElement(x.Box,{justifyContent:"center"},l.createElement(mo,{color:"inactive",contentColor:"white"},l.createElement(M.mute,{width:16,height:16})))),l.createElement(so,null,l.createElement(x.Box,{justifyContent:"center"},l.createElement(mo,{color:"inactive"})))),l.createElement("tr",null,l.createElement("td",null,l.createElement(x.Box,{alignItems:"center"},l.createElement(M.network,{width:12,height:12}),l.createElement(x.Box,{ml:2},Object(O._t)("Devices")))),l.createElement(so,null,l.createElement(A.Switch,{isChecked:c.devices.ok,onChange:e=>c.devices.ok=e.target.checked})),l.createElement(so,null),l.createElement(so,null,l.createElement(A.Switch,{isChecked:c.devices.error,onChange:e=>c.devices.error=e.target.checked})),l.createElement(so,null,l.createElement(A.Switch,{isChecked:c.devices.mute,onChange:e=>c.devices.mute=e.target.checked})),l.createElement(so,null,l.createElement(A.Switch,{isChecked:c.devices.inactive,onChange:e=>c.devices.inactive=e.target.checked}))),l.createElement("tr",null,l.createElement("td",null,l.createElement(x.Box,{alignItems:"center"},l.createElement(M.monitors,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Monitors")))),l.createElement(so,null,l.createElement(A.Switch,{isChecked:c.monitors.ok,onChange:e=>c.monitors.ok=e.target.checked})),l.createElement(so,null,l.createElement(A.Switch,{isChecked:c.monitors.warning,onChange:e=>c.monitors.warning=e.target.checked})),l.createElement(so,null,l.createElement(A.Switch,{isChecked:c.monitors.error,onChange:e=>c.monitors.error=e.target.checked})),l.createElement("td",null),l.createElement("td",null)))))))),l.createElement(x.Box,{mr:3,alignItems:"center"},l.createElement(Lt.Input,{placeholder:Object(O._t)("Search devices"),width:250,elemAfterInput:l.createElement(M.search,{width:16,height:16}),value:o.textFilter,onChange:e=>o.textFilter=e.target.value}),l.createElement(v.Button,{isSmall:!0,ml:1,isSubtle:!0,onClick:()=>o.textFilter=""},l.createElement(M.cross,{width:12,height:12}))))});var ho=o(214),po=o(143),bo=o(63),go=o(312),Eo=o(254);const xo=Object(s.observer)(e=>{const t=e.result.ok["1.3.6.1.2.1.1.1.0"],o=e.result.ok["1.3.6.1.2.1.1.3.0"]||0,n=Object(O.formatUptime)(o),r=e.result.ok["1.3.6.1.2.1.1.4.0"],i=e.result.ok["1.3.6.1.2.1.1.5.0"],a=e.result.ok["1.3.6.1.2.1.1.6.0"];return l.createElement(Ye.Dialog,{width:600,height:350,isOpen:!0,title:e.title,onClose:e.onClose},l.createElement(x.Box,{flexDirection:"row"},e.result.error&&l.createElement(x.Box,{color:"white",bg:"error",borderRadius:5,width:48,height:48,alignItems:"center",justifyContent:"center",flexShrink:0},l.createElement(M.warning,{width:32,height:32}))||l.createElement(x.Box,{color:"white",bg:"ok",borderRadius:5,width:48,height:48,alignItems:"center",justifyContent:"center",flexShrink:0},l.createElement(M.check,{width:32,height:32})),e.result.error&&l.createElement(x.Box,{ml:4,flexDirection:"column"},l.createElement(x.Box,{fontWeight:"bold",fontSize:16},Object(O._t)("SNMP connectivity error")),l.createElement(x.Box,{mt:3},Object(O._t)("SNMP connection failed. Check that SNMP is enabled on the device and that the device firewall permits incoming UDP traffic on port $port.").replace("$port",e.target.container.context["snmp.port"]||161)))||l.createElement(x.Box,{ml:4,flexDirection:"column"},l.createElement(x.Box,{fontWeight:"bold",fontSize:16},Object(O._t)("SNMP connectivity success")),l.createElement(x.Box,{mt:3},l.createElement("table",{cellSpacing:8},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,Object(O._t)("System")),l.createElement("td",null,t)),l.createElement("tr",null,l.createElement("td",null,Object(O._t)("Host")),l.createElement("td",null,i)),l.createElement("tr",null,l.createElement("td",null,Object(O._t)("Uptime")),l.createElement("td",null,n)),l.createElement("tr",null,l.createElement("td",null,Object(O._t)("Location")),l.createElement("td",null,a)),l.createElement("tr",null,l.createElement("td",null,Object(O._t)("Contact")),l.createElement("td",null,r))))))))});var fo=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const vo=Object(s.observer)(e=>l.createElement(x.Box,{alignItems:"center",mr:1,"data-rh":Object(O._t)("Inherit value from group or global")},l.createElement(x.Box,null,l.createElement(M.inherit,{width:12,height:12})),l.createElement(w.Checkbox,{isChecked:e.isInheriting,onChange:t=>{t.target.checked?delete e.target.container.context[e.ctxKey]:e.target.setContext(e.ctxKey,e.target.container.getInheritedContextValue(e.ctxKey)||null)}}))),wo=Object(s.observer)(e=>{const{ctxKey:t,target:o,hideInherit:n,width:r}=e,i=fo(e,["ctxKey","target","hideInherit","width"]),a=void 0===e.target.getContext(t);return l.createElement(x.Box,null,!n&&l.createElement(vo,{target:o,ctxKey:t,isInheriting:a}),l.createElement(f.TextField,Object.assign({width:n?r:Number(r)-36,isDisabled:a&&!n,value:a?o.container.getInheritedContextValue(t):o.getContext(t),onChange:o=>{e.isNumber||e.target.setContext(t,o.target.value)},onNumberChange:o=>{e.isNumber&&e.target.setContext(t,o)}},i)))}),yo=Object(s.observer)(e=>{const{ctxKey:t,target:o,hideInherit:n,width:r}=e,i=fo(e,["ctxKey","target","hideInherit","width"]),a=void 0===e.target.getContext(t);return l.createElement(x.Box,null,!n&&l.createElement(vo,{target:o,ctxKey:t,isInheriting:a}),l.createElement(f.PasswordField,Object.assign({width:n?r:Number(r)-36,isDisabled:a&&!n,value:a?o.container.getInheritedContextValue(t):o.getContext(t),onChange:o=>{e.isNumber||e.target.setContext(t,o.target.value)},onNumberChange:o=>{e.isNumber&&e.target.setContext(t,o)}},i)))}),So=Object(s.observer)(e=>{const{ctxKey:t,target:o,hideInherit:n,width:r}=e,i=fo(e,["ctxKey","target","hideInherit","width"]),a=void 0===e.target.getContext(t),c=a?o.container.getInheritedContextValue(t):o.getContext(t),s=e.options.find(e=>e.value==c);return l.createElement(x.Box,null,!n&&l.createElement(vo,{target:o,ctxKey:t,isInheriting:a}),l.createElement(f.SelectField,Object.assign({width:n?r:Number(r)-36,isDisabled:a&&!n,value:s,onChange:o=>e.target.setContext(t,o.value)},i)))}),Oo=Object(s.observer)(e=>{const[t,o]=l.useState(null),[n,r]=l.useState(!1),i=[{label:Object(O._t)("Version 1"),value:1},{label:Object(O._t)("Version 2c"),value:2},{label:Object(O._t)("Version 3"),value:3}],a=[{label:Object(O._t)("No auth, no priv"),value:"NoAuthNoPriv"},{label:Object(O._t)("Auth, no priv"),value:"AuthNoPriv"},{label:Object(O._t)("Auth, priv"),value:"AuthPriv"}],c=[{label:Object(O._t)("MD5"),value:"MD5"},{label:Object(O._t)("SHA1"),value:"SHA1"}],s=[{label:Object(O._t)("DES"),value:"DES"},{label:Object(O._t)("AES"),value:"AES"}],d=l.useCallback(()=>{r(!0);const t=new Ut.a;t.syntax=Ut.c.Python,t.script='\nimport snmp_utils\nreturn snmp_utils.test(ctx["net.address"], ctx)\n        ';const n=Ut.d.withScript(t,e.target.container.context);console.log(e.target.container),S.script.execute(e.target.container,n).then(e=>{o({ok:e.args[0]})}).catch(e=>{console.error(e),o({ok:{},error:!0})}).finally(()=>{r(!1)})},[e.target]);return l.createElement(l.Fragment,null,l.createElement(x.Box,{p:3,mb:3,backgroundColor:"toolbarBackground"},Object(O._t)("SNMP is an Internet standard protocol for managing devices on IP networks. For devices with SNMP enabled, configure the fields below to allow the collection of metrics using this method.")),l.createElement(x.Box,{flexDirection:"row",mb:3},l.createElement(So,{mr:2,hideInherit:e.hideInherit,ctxKey:"snmp.version",target:e.target,width:250,label:Object(O._t)("SNMP Version"),options:i}),l.createElement(x.Box,{mr:2},l.createElement(wo,{hideInherit:e.hideInherit,target:e.target,ctxKey:"snmp.port",isNumber:!0,width:120,label:Object(O._t)("SNMP Port")})),l.createElement(wo,{hideInherit:e.hideInherit,isNumber:!0,ctxKey:"snmp.timeout",target:e.target,width:120,label:Object(O._t)("SNMP Timeout (seconds)")})),3!=e.target.getContext("snmp.version")&&l.createElement(x.Box,{flexDirection:"row",mb:3},l.createElement(yo,{hideInherit:e.hideInherit,width:250,label:Object(O._t)("Community"),ctxKey:"snmp.community",target:e.target})),3==e.target.getContext("snmp.version")&&l.createElement(l.Fragment,null,l.createElement(x.Box,{flexDirection:"row",mb:3},l.createElement(So,{mr:2,hideInherit:e.hideInherit,ctxKey:"snmp.security_level",target:e.target,width:250,label:Object(O._t)("Security level"),options:a})),["AuthNoPriv","AuthPriv"].includes(e.target.getContext("snmp.security_level"))&&l.createElement(x.Box,{flexDirection:"row",mb:3},l.createElement(So,{mr:2,hideInherit:e.hideInherit,ctxKey:"snmp.auth_protocol",target:e.target,width:250,label:Object(O._t)("Auth protocol"),options:c}),l.createElement(x.Box,{mr:2},l.createElement(wo,{hideInherit:e.hideInherit,ctxKey:"snmp.auth_user",target:e.target,width:160,label:Object(O._t)("Auth user")})),l.createElement(x.Box,{mr:2},l.createElement(yo,{hideInherit:e.hideInherit,ctxKey:"snmp.auth_password",target:e.target,width:160,label:Object(O._t)("Auth password")}))),"AuthPriv"==e.target.getContext("snmp.security_level")&&l.createElement(x.Box,{flexDirection:"row",mb:3},l.createElement(So,{mr:2,hideInherit:e.hideInherit,ctxKey:"snmp.priv_protocol",target:e.target,width:250,label:Object(O._t)("Priv protocol"),options:s}),l.createElement(x.Box,{mr:2},l.createElement(yo,{hideInherit:e.hideInherit,ctxKey:"snmp.priv_password",target:e.target,width:160,label:Object(O._t)("Priv password")})))),e.showTest&&l.createElement(x.Box,null,l.createElement(v.Button,{onClick:d,isDisabled:n},l.createElement(M.test,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Test")))),t&&l.createElement(xo,{target:e.target,title:Object(O._t)("SNMP"),onClose:()=>o(null),result:t}))}),Co=Object(s.observer)(e=>{const[t,o]=l.useState(null),[n,r]=l.useState(!1),i=l.useCallback(()=>{r(!0);const t=new Ut.a;t.syntax=Ut.c.Python,t.script='\nimport snmp_utils\nreturn snmp_utils.test(ctx["address"], ctx["config"])\n        ';const n={address:e.target.getContext("net.address"),config:e.target.container.context},l=Ut.d.withScript(t,n);S.script.execute(e.target.container,l).then(e=>{o({ok:e.args[0]})}).catch(e=>{o({ok:{},error:!0})}).finally(()=>{r(!1)})},[e.target]);return l.createElement(l.Fragment,null,l.createElement(x.Box,{p:3,mb:3,backgroundColor:"toolbarBackground"},Object(O._t)("WMI allows for the querying of system metrics on Windows systems. For Windows devices with WMI enabled, configure the fields below to allow the collection of metrics using this method.")),l.createElement(x.Box,{flexDirection:"row",mb:4},l.createElement(x.Box,{mr:2},l.createElement(wo,{hideInherit:e.hideInherit,width:200,ctxKey:"wmi.username",target:e.target,label:Object(O._t)("WMI Username")})),l.createElement(yo,{hideInherit:e.hideInherit,ctxKey:"wmi.password",target:e.target,width:200,label:Object(O._t)("WMI Password")})),l.createElement(x.Box,null,l.createElement(v.Button,{onClick:i,isDisabled:!0},l.createElement(M.test,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Test")))))});var Bo=o(190);const jo=Object(s.observer)(e=>{const[t,o]=l.useState(null),[n,r]=l.useState(!1),i=l.useCallback(()=>{r(!0);const t=new Ut.a;t.syntax=Ut.c.Python,t.script='\nssh.connect(\n    ctx["net.address"],\n    ctx["ssh.username"],\n    ctx["ssh.password"],\n    port=ctx["ssh.port"] or 22,\n    timeout=ctx["ssh.connect_timeout"] or 5\n)\n        ';const n=Ut.d.withScript(t,e.target.container.context);S.script.execute(e.target.container,n).then(t=>{o({ok:t.args[0]}),nt.alert(nt.MsgboxType.Success,Object(O._t)("Connection Success"),Object(O._t)("SSH connected successfully."),Object(O._t)("A SSH connection to server $address was successful.").replace("$address",e.target.getContext("net.address")))}).catch(t=>{console.error(t),o({ok:{},error:!0}),nt.alert(nt.MsgboxType.Error,Object(O._t)("Connection Failed"),Object(O._t)("SSH connection failed."),Object(O._t)("It was not possible to connect to the server $address using the parameters provided").replace("$address",e.target.getContext("net.address")))}).finally(()=>{r(!1)})},[e.target]);return l.createElement(l.Fragment,null,l.createElement(x.Box,{p:3,mb:3,backgroundColor:"toolbarBackground"},Object(O._t)("SSH (Secure Shell) allows for the execution of commands remotely over an encrypted connection.")),l.createElement(x.Box,{flexDirection:"row",mb:2},l.createElement(x.Box,{mr:2},l.createElement(wo,{hideInherit:e.hideInherit,ctxKey:"ssh.username",target:e.target,width:200,label:Object(O._t)("SSH Username")})),l.createElement(yo,{hideInherit:e.hideInherit,ctxKey:"ssh.password",target:e.target,width:200,label:Object(O._t)("SSH Password")})),l.createElement(x.Box,{flexDirection:"row",mb:4},l.createElement(x.Box,{mr:2},l.createElement(wo,{hideInherit:e.hideInherit,ctxKey:"ssh.port",target:e.target,isNumber:!0,width:100,label:Object(O._t)("SSH port")})),l.createElement(x.Box,{mr:2},l.createElement(wo,{hideInherit:e.hideInherit,ctxKey:"ssh.connect_timeout",target:e.target,isNumber:!0,width:100,label:Object(O._t)("SSH connect timeout (secs)")}))),e.showTest&&l.createElement(x.Box,{alignItems:"center"},l.createElement(v.Button,{onClick:i,isDisabled:n},l.createElement(M.test,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Test"))),n&&l.createElement(l.Fragment,null,l.createElement(x.Box,{ml:2},l.createElement(Bo.a,null)),l.createElement(x.Box,{ml:2},Object(O._t)("Testing...")))))}),ko=Object(s.observer)(e=>{const[t,o]=l.useState(null),[n,r]=l.useState(!1),i=l.useCallback(()=>{r(!0);const t=new Ut.a;t.syntax=Ut.c.Python,t.script="\n        ";const n=Ut.d.withScript(t,e.target.container.context);S.script.execute(e.target.container,n).then(t=>{o({ok:t.args[0]}),nt.alert(nt.MsgboxType.Success,Object(O._t)("Connection Success"),Object(O._t)("SSH connected successfully."),Object(O._t)("A SSH connection to server $address was successful.").replace("$address",e.target.getContext("net.address")))}).catch(t=>{console.error(t),o({ok:{},error:!0}),nt.alert(nt.MsgboxType.Error,Object(O._t)("Connection Failed"),Object(O._t)("SSH connection failed."),Object(O._t)("It was not possible to connect to the server $address using the parameters provided").replace("$address",e.target.getContext("net.address")))}).finally(()=>{r(!1)})},[e.target]);return l.createElement(l.Fragment,null,l.createElement(x.Box,{p:3,mb:3,backgroundColor:"toolbarBackground"},Object(O._t)("Many web services allow the collecting of data over HTTP using the REST convention. For devices that have a REST/HTTP endpoint, configure it here.")),l.createElement(x.Box,{flexDirection:"row",mb:2},l.createElement(x.Box,{mr:2},l.createElement(wo,{hideInherit:e.hideInherit,ctxKey:"rest.base_url",target:e.target,width:300,label:Object(O._t)("API base URL")}))),l.createElement(x.Box,{flexDirection:"row",mb:4},l.createElement(x.Box,{mr:2},l.createElement(wo,{hideInherit:e.hideInherit,isNumber:!0,ctxKey:"rest.port",target:e.target,width:100,label:Object(O._t)("HTTP(S) port")})),l.createElement(x.Box,{mr:2},l.createElement(wo,{hideInherit:e.hideInherit,isNumber:!0,ctxKey:"rest.timeout",target:e.target,width:100,label:Object(O._t)("HTTP request timeout (secs)")}))),e.showTest&&l.createElement(x.Box,{alignItems:"center"},l.createElement(v.Button,{onClick:i,isDisabled:!0},l.createElement(M.test,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Test"))),n&&l.createElement(l.Fragment,null,l.createElement(x.Box,{ml:2},l.createElement(Bo.a,null)),l.createElement(x.Box,{ml:2},Object(O._t)("Testing...")))))});var _o;!function(e){e[e.SNMP=0]="SNMP",e[e.WMI=1]="WMI",e[e.SSH=2]="SSH",e[e.API=3]="API"}(_o||(_o={}));const Do=Object(s.observer)(e=>{const[t,o]=l.useState(_o.SNMP);return l.createElement(l.Fragment,null,l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{mb:2,fontWeight:"bold"},Object(O._t)("Parameters configured here will be available to all monitors and metrics of this container.")),l.createElement(xe.RadioGroup,{height:32,value:t,onChange:o},l.createElement(xe.RadioButton,{value:_o.SNMP},l.createElement(M.sensor,{width:20,height:20}),l.createElement(x.Box,{ml:2,width:70,justifyContent:"center"},Object(O._t)("SNMP"))),l.createElement(xe.RadioButton,{value:_o.WMI},l.createElement(M.windowsMono,{width:20,height:20}),l.createElement(x.Box,{ml:2,width:70,justifyContent:"center"},Object(O._t)("WMI"))),l.createElement(xe.RadioButton,{value:_o.SSH},l.createElement(M.exec,{width:20,height:20}),l.createElement(x.Box,{ml:2,width:70,justifyContent:"center"},Object(O._t)("SSH"))),l.createElement(xe.RadioButton,{value:_o.API},l.createElement(M.api,{width:20,height:20}),l.createElement(x.Box,{ml:2,width:70,justifyContent:"center"},Object(O._t)("API (REST)"))))),l.createElement(x.Box,{flexDirection:"column",style:{display:t==_o.SNMP?"flex":"none"}},l.createElement(Oo,{target:e.target,showTest:e.showTest,hideInherit:e.hideInherit})),l.createElement(x.Box,{flexDirection:"column",style:{display:t==_o.WMI?"flex":"none"}},l.createElement(Co,{target:e.target,hideInherit:e.hideInherit})),l.createElement(x.Box,{flexDirection:"column",style:{display:t==_o.SSH?"flex":"none"}},l.createElement(jo,{target:e.target,showTest:e.showTest,hideInherit:e.hideInherit})),l.createElement(x.Box,{flexDirection:"column",style:{display:t==_o.API?"flex":"none"}},l.createElement(ko,{target:e.target,showTest:e.showTest,hideInherit:e.hideInherit})))});class Mo{constructor(e){this.container=e}setContext(e,t){this.container.context[e]=t}getContext(e,t){const o=this.container.context[e];return null==o?t:o}}const Io=Object(s.observer)(e=>{const{agentStore:t}=Object(b.useStores)();return l.createElement(bo.PagedDialog,{isOpen:!0,onClose:e.onClose,width:800,height:620,title:Object(O._t)("Global Device Options"),confirmText:Object(O._t)("Save"),onConfirm:e.onConfirm},l.createElement(bo.Page,{title:Object(O._t)("Main")},l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{mb:4},l.createElement(f.TextField,{isDisabled:!0,label:Object(O._t)("Name"),value:Object(O._t)("Root"),width:400,help:Object(O._t)("This is the root container that all devices inherit from.")})),l.createElement(x.Box,null,l.createElement(f.Field,{label:Object(O._t)("Execution target"),help:Object(O._t)("The execution target for devices when 'Inherit' is selected.")},l.createElement(go.a,{agents:t.active,width:400,value:e.container.executionTarget,onChange:t=>e.container.executionTarget=t}))))),l.createElement(bo.Page,{title:Object(O._t)("Collection")},l.createElement(Do,{hideInherit:!0,target:new Mo(e.container)})),l.createElement(bo.Page,{title:Object(O._t)("Actions")},l.createElement(Eo.a,{actions:e.container.actions})))}),To=Object(s.observer)(e=>{const{configStore:t,containerStore:o,blobStore:n}=Object(b.useStores)(),[r,i]=l.useState(t.get("ui.device.status_bar_size")),[a,c]=l.useState(t.get("ui.device.box_size")),[s,d]=l.useState(t.get("ui.device.box_font_size")),[m,u]=l.useState(t.get("ui.device.box_show_address")),[h,p]=l.useState(t.get("ui.device.box_show_icon")),[g,E]=l.useState(t.get("ui.monitor.box.display")),v=l.useRef(((e,t)=>({name:Object(O._t)("Device"),setName:()=>null,description:Object(O._t)("Device description"),setDescription:()=>null,address:Object(O._t)("127.0.0.1"),setAddress:()=>null,icon:t.images[0],setIcon:()=>null,okCount:15,warnCount:5,errorCount:3,status:be.Status.Ok,monitors:[],templateGroups:[],hasTemplateGroup:()=>null,clone:()=>null,uptimeMonitor:null,disable:()=>null,enable:()=>null,isDisabled:!1,validate:()=>null,getContext:()=>null,setContext:()=>null,container:e.rootContainer,visualStatus:be.Status.Ok}))(o,n)).current,y=l.useCallback(()=>{t.set("ui.device.status_bar_size",r),t.set("ui.device.box_size",a),t.set("ui.device.box_font_size",s),t.set("ui.device.box_show_address",m),t.set("ui.device.box_show_icon",h),t.set("ui.monitor.box.display",g)},[r,a,s,m,h,g]),S=[{label:Object(O._t)("Name"),value:"name"},{label:Object(O._t)("Value"),value:"value"}];return l.createElement(Ye.Dialog,{isOpen:!0,width:850,height:520,title:Object(O._t)("Device Display Options"),confirmText:Object(O._t)("Save"),onClose:e.onClose,onConfirm:()=>{y(),e.onClose()}},l.createElement(x.Box,{flexDirection:"row",height:"100%"},l.createElement(x.Box,{width:400,flexShrink:0,overflow:"auto",p:3,bg:"gridBackground"},l.createElement(me.a,{onEditActionsClick:()=>null,showMetricStatus:!0,width:a,height:a/2,fontSize:s,device:v,onRunAction:()=>null,statusBarHeight:r,showIcon:h,showAddress:m})),l.createElement(x.Box,{width:30}),l.createElement(x.Box,{flexDirection:"column",flexGrow:1},l.createElement(x.Box,{mb:1,p:1,flexDirection:"column"},l.createElement(x.Box,{mb:1},Object(O._t)("Status bar size")),l.createElement(x.Box,{flexGrow:1,width:"100%",alignItems:"center"},l.createElement(Ze.Slider,{values:[r],domain:[5,50],height:12,handleHeight:24,handleWidth:26,onUpdate:e=>i(e[0])}),l.createElement(x.Box,{p:8,justifyContent:"center",width:50,ml:3,borderRadius:2,bg:"controlFocus",color:"#fff"},r))),l.createElement(x.Box,{mb:1,p:1,flexDirection:"column"},l.createElement(x.Box,{mb:1},Object(O._t)("Box size")),l.createElement(x.Box,{flexGrow:1,width:"100%",alignItems:"center"},l.createElement(Ze.Slider,{values:[a],domain:[150,400],height:12,handleHeight:24,handleWidth:26,onUpdate:e=>c(e[0])}),l.createElement(x.Box,{p:8,justifyContent:"center",width:50,ml:3,borderRadius:2,bg:"controlFocus",color:"#fff"},a))),l.createElement(x.Box,{mb:3,p:1,flexDirection:"column"},l.createElement(x.Box,{mb:1},Object(O._t)("Font size")),l.createElement(x.Box,{flexGrow:1,width:"100%",alignItems:"center"},l.createElement(Ze.Slider,{values:[s],domain:[9,48],height:12,handleHeight:24,handleWidth:26,onUpdate:e=>d(e[0])}),l.createElement(x.Box,{p:8,justifyContent:"center",width:50,ml:3,borderRadius:2,bg:"controlFocus",color:"#fff"},s))),l.createElement(f.Field,{label:Object(O._t)("Other options")},l.createElement(x.Box,{mb:2},l.createElement(w.Checkbox,{label:Object(O._t)("Show address"),isChecked:m,onChange:e=>u(e.target.checked)})),l.createElement(x.Box,{mb:3},l.createElement(w.Checkbox,{label:Object(O._t)("Show icon"),isChecked:h,onChange:e=>p(e.target.checked)})),l.createElement(x.Box,{flexDirection:"row"},l.createElement(Ee.b,{size:64,statusColor:"ok"},l.createElement(Ee.a,null,l.createElement(x.Box,{height:24,mt:"6px",flexShrink:0},l.createElement(M.monitors,{width:24})),l.createElement(x.Box,{flexGrow:1}),l.createElement(x.Box,{fontSize:13,minHeight:24,mx:1,overflow:"hidden",justifyContent:"center"},"name"==g&&Object(O._t)("Monitor"),"value"==g&&"97,52 kbit/s"))),l.createElement(x.Box,{ml:3,alignItems:"flex-start"},l.createElement(f.Field,{label:Object(O._t)("Monitor display mode")},l.createElement(lt.Select,{width:200,options:S,value:S.find(e=>e.value==g),onChange:e=>E(e.value)}))))))))});function Ao(e,t,o){const n=new be.Container(b.rootStore.containerStore);n.class="Device",n.contextPriority=10,e&&n.asDevice().setName(e),t&&n.asDevice().setAddress(t),o&&(n.executionTarget=o),b.rootStore.containerStore.rootContainer&&n.parents.push(b.rootStore.containerStore.rootContainer),b.rootStore.configStore.defaultUptime&&n.children.push(Ce(b.rootStore.containerStore,n,b.rootStore.configStore.defaultUptime)),Object(De.runInAction)(()=>{b.rootStore.appStore.editDevice(n),b.rootStore.appStore.editingDeviceInitialPage=0})}const Po=g.a.div`
    flex-grow: 1;
    position: relative;
    background-color: ${e=>e.theme.colors.gridBackground};
`,$o=g.a.div`
    margin-top: 60px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    color: ${e=>e.theme.colors.controlFocus};

    & a {
        text-decoration: none;
        color: ${e=>e.theme.colors.controlFocus};
        font-weight: bold;
        display: block;
        padding: 5px;
        border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
        background-color: ${e=>e.theme.colors.background};
    }

    & a:hover {
        background-color: ${e=>e.theme.colors.pageBackground};
    }
`,Fo=Object(s.observer)(e=>{const{appStore:t,deviceStore:o,containerStore:n,pluginStore:r,configStore:i}=Object(b.useStores)(),[a,c]=l.useState(null),[s,d]=l.useState(null),[m,u]=l.useState(0),[h,p]=l.useState(null),[g,E]=l.useState(!1),f=i.deviceBoxSize,v=i.deviceBoxStatusBarSize,w=i.deviceBoxShowIcon,y=i.deviceBoxShowAddress,S=i.deviceBoxFontSize,C=r.startActions.map(e=>l.createElement(x.Box,{width:128,mr:3,borderRadius:5,color:"white",bg:"controlFocus",justifyContent:"center",style:{cursor:"pointer"},onClick:e.onClick},l.createElement(x.Box,{flexDirection:"column",my:2,justifyContent:"center",alignItems:"center"},e.icon,l.createElement(x.Box,{style:{textAlign:"center"},mt:2,fontWeight:"bold"},e.name))));return l.createElement(Po,null,l.createElement(de.AppToolbar,null,l.createElement(lo,{onNewDevice:()=>Ao(),showDeviceOptions:!0,onEditGlobal:()=>p(n.rootContainer?n.rootContainer.toViewModel():null),onConfigureDisplayOptions:()=>E(!0)}),l.createElement(uo,null)),o.isEmpty&&n.isLoading&&l.createElement(x.Box,{my:4,p:4,fontSize:32,alignItems:"center"},l.createElement(x.Box,{mr:3,color:"subtleText"},l.createElement(Bo.a,{size:64})),l.createElement(x.Box,{color:"subtleText"},Object(O._t)("Loading..."))),o.isEmpty&&!n.isLoading&&l.createElement(x.Box,{m:4,p:4,bg:"background",border:"1px solid",borderColor:"subtleBorder",boxShadow:"card",borderRadius:2,flexDirection:"row"},l.createElement(M.monsta,{width:128,height:128}),l.createElement(x.Box,{ml:5,flexDirection:"column"},l.createElement(x.Box,{fontSize:32,mb:3},Object(O._t)("Welcome to Monsta")," 5!"),l.createElement(x.Box,{mb:4,fontSize:18,color:"subtleText"},Object(O._t)("Here are some actions to get you started"),":"),l.createElement(x.Box,null,l.createElement(x.Box,{mr:4},l.createElement(po.Card,{statusColor:"ok",onClick:Ao,clickable:!0,title:Object(O._t)("New Device"),subTitle:Object(O._t)("Click here to create your first device."),width:220,height:110},l.createElement(x.Box,{color:"ok",position:"absolute",right:2,bottom:2},l.createElement(M.add,{width:32,height:32})))),l.createElement(x.Box,{width:128,mr:3,borderRadius:5,bg:"gridBackground",border:"4px solid",borderColor:"controlFocus",justifyContent:"center",style:{cursor:"pointer"},onClick:()=>i.setDarkMode(!i.darkMode)},l.createElement(x.Box,{flexDirection:"column",my:2,justifyContent:"center",alignItems:"center"},l.createElement(x.Box,{mb:2,color:"controlFocus"},l.createElement(M.moon,{width:18,height:18})),l.createElement(x.Box,{mb:1},l.createElement(A.Switch,{size:"large",isChecked:i.darkMode,onClick:e=>e.stopPropagation(),onChange:e=>i.setDarkMode(e.target.checked)})),l.createElement(x.Box,{fontWeight:"bold",color:"text"},Object(O._t)("Dark mode")))),C),l.createElement($o,null,l.createElement(x.Box,{mr:2,fontSize:18},l.createElement("a",{href:"https://doc.monsta.com.br",target:"_blank",rel:"noreferrer"},Object(O._t)("Click here to see the complete documentation"))),l.createElement(M.external,{width:24,height:24})))),!o.isEmpty&&l.createElement(se.VirtualGrid,{extraRows:2,itemWidth:i.deviceBoxSize+30,itemHeight:i.deviceBoxSize/2+30,items:o.display,left:0,top:55,right:0,bottom:m,position:"absolute",bg:"gridBackground",onClick:()=>{t.setSelectedDevice(null),t.setSelectedMonitor(null)}},e=>l.createElement(me.a,{clickable:!0,onEditClick:()=>{t.selectedDevice!=e.container&&t.setSelectedMonitor(null),t.setSelectedDevice(e.container),t.editDevice(e.container)},onEditActionsClick:()=>{t.selectedDevice!=e.container&&t.setSelectedMonitor(null),t.setSelectedDevice(e.container),t.editDevice(e.container,4)},statusBarHeight:v,fontSize:S,showAddress:y,showIcon:w,onRunAction:t=>{d(e.container),c(t)},showTools:!0,isAnimating:!1,isSelected:t.selectedDevice==e.container,device:e,width:f,height:f/2,mt:30,ml:30,onClick:()=>{t.selectedDevice!=e.container&&t.setSelectedMonitor(null),t.setSelectedDevice(e.container)}})),l.createElement(Yt,{device:t.selectedDevice?t.selectedDevice.asDevice():null,onAnimDone:()=>{t.selectedDevice}}),h&&l.createElement(Io,{container:h,onClose:()=>p(null),onConfirm:()=>{t.commitContainer(h),p(null)}}),g&&l.createElement(To,{onClose:()=>E(!1)}),a&&l.createElement(Ye.Dialog,{width:1e3,height:650,isOpen:!0,padding:0,backgroundColor:"toolbarBackground",title:Object(O._t)("Run Action"),onClose:()=>c(null)},l.createElement(x.Box,{p:"20px"},l.createElement(ho.a,{readOnly:!0,runActionImmediately:!0,action:a,container:s}))))});const zo=g.a.div`
    position: relative;
    flex-grow: 1;
`,Ro=Object(s.observer)(e=>l.createElement(W,null,l.createElement(zo,null,e.view.type!=V.PluginViewType.Main&&l.createElement(de.AppToolbar,null,e.view.type==V.PluginViewType.Device&&l.createElement(lo,{onNewDevice:()=>{}}),e.view.toolbarContent&&l.createElement(e.view.toolbarContent,null)),l.createElement(x.Box,{left:0,top:e.view.type==V.PluginViewType.Main?0:55,right:0,bottom:0,position:"absolute"},l.createElement(e.view.content,{plugin:e.view.plugin})))));var No=o(432),Go=o(231);const Lo=g.a.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    background-color: ${e=>e.theme.colors.background};
    border-bottom: 1px solid ${e=>e.theme.colors.controlBorder};
    height: 300px;
    padding: 8px;
`,Uo=g.a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    cursor: pointer;
    color: ${e=>e.theme.colors.controlFocus};
`,Vo=Object(E.a)(g.a.div`
`),Wo=e=>{const{x:t}=Object(E.b)({x:e.isSelected?1:0,config:{duration:400}}),o=e.isSelected?[1,1.3,1.5,1.7,1.9,2.1,1.9,1.7,1.9,2]:[1,1,1,1,1,1.3,1.5,1.7,1.9,2];return l.createElement(Uo,{onClick:e.onClick,"data-rh":e.hint,"data-rh-at":"right"},l.createElement(Vo,{style:{transform:t.interpolate({range:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1],output:o}).interpolate(e=>`scale(${e})`)}},l.createElement(e.icon,{width:20,height:20})))},Ho=Object(s.observer)(e=>{const t=Go.a.map((t,o)=>l.createElement(Wo,{hint:t.widgetSpec.name,isSelected:t==e.selectedTool,key:o,icon:t.widgetSpec.icon,onClick:()=>e.onToolSelect(t)}));return l.createElement(Lo,null,l.createElement(Wo,{hint:Object(O._t)("Select"),icon:M.cursorMono,isSelected:null===e.selectedTool,onClick:()=>e.onToolSelect(null)}),t)});var Ko=o(38),qo=o(252),Jo=o(429),Zo=o(159);const Yo=Object(s.observer)(e=>{const t=[{label:Object(O._t)("Automatic (theme)"),value:"auto"},{label:Object(O._t)("Custom"),value:"custom"}],o=Object(d.b)();return l.createElement(Ye.Dialog,{width:800,height:500,isOpen:!0,title:Object(O._t)("Edit dashboard"),onClose:e.onClose,confirmText:Object(O._t)("Ok"),closeText:Object(O._t)("Cancel"),onConfirm:e.onConfirm},l.createElement(f.TextField,{autoFocus:!0,width:500,label:Object(O._t)("Dashboard name"),value:e.dashboard.name,onChange:t=>e.dashboard.setName(t.target.value)}),l.createElement(x.Box,{mt:3},l.createElement(f.Field,{label:Object(O._t)("Grid size")},l.createElement(x.Box,{width:500,mt:2,alignItems:"center"},l.createElement(Ze.Slider,{values:[e.dashboard.gridSize],domain:[1,50],onUpdate:t=>e.dashboard.setGridSize(t[0])}),l.createElement(x.Box,{p:8,justifyContent:"center",width:40,ml:3,borderRadius:5,bg:"controlFocus",color:"#fff"},String(e.dashboard.gridSize))))),l.createElement(x.Box,{mt:4},l.createElement(f.Field,{label:Object(O._t)("Background color")},l.createElement(x.Box,{mt:1,width:500,alignItems:"center"},l.createElement(lt.Select,{mr:3,options:t,width:200,value:e.dashboard.backgroundColor?t[1]:t[0],onChange:t=>{"custom"==t.value?e.dashboard.setBackgroundColor(o.colors.background):e.dashboard.setBackgroundColor(null)}}),e.dashboard.backgroundColor&&l.createElement(Zo.a,{value:e.dashboard.backgroundColor,onChange:t=>e.dashboard.setBackgroundColor(t)})))))});var Xo=o(316),Qo=o(205);const en=g.a.div`
    position: relative;
    flex-grow: 1;
`,tn=g.a.div`
    width: 240px;
    background-color: ${e=>e.theme.colors.controlBackground};
    position: absolute;
    left: 0px;
    bottom: 0px;
    top: 55px;
    border-right: 1px solid ${e=>e.theme.colors.controlFocus};
`,on=Object(s.observer)(e=>{const t=l.useRef(new qo.a(b.rootStore)).current,[o,n]=l.useState(null),[r,i]=l.useState(!1),[a,c]=l.useState(null),[s,d]=l.useState(void 0),[m,u]=l.useState(void 0);if(l.useEffect(()=>{t.load().then(()=>{n(t.getById(e.dashboardId))})},[]),l.useEffect(()=>{setTimeout(()=>d(null),200)},[]),l.useEffect(()=>{r?Jo.blockNav(Object(O._t)("You have unsaved changes.")):Jo.unblockNav()},[r]),Object(Qo.a)("delete",()=>{o.deleteWidget(m),u(null)},{},[o,m]),!o)return null;const h=m&&Go.c(m.widgetType),p={};return m&&Object.assign(p,m.properties),l.createElement(en,null,l.createElement(de.AppToolbar,null,l.createElement(x.Box,null,l.createElement(Xo.a,{onClick:()=>document.location.hash="#/dashboards/view/"+e.dashboardId}),l.createElement(x.Box,{ml:3,width:100,overflow:"hidden",mr:4,alignItems:"center",fontSize:16},l.createElement("div",{style:{textOverflow:"ellipsis",minWidth:0,whiteSpace:"nowrap",overflow:"hidden"}},o.name)),l.createElement(x.Box,{alignItems:"center"},l.createElement(v.Button,{mr:1,onClick:()=>c(o.toViewModel())},l.createElement(M.edit,{width:16,height:16})),l.createElement(v.Button,{isDisabled:!r,onClick:()=>{S.object.put(o),i(!1)}},l.createElement(M.check,{width:16,height:16})),l.createElement(x.Box,{mx:3,borderRight:"solid 1px",borderColor:"controlBorder",height:"100%"}),l.createElement(v.Button,{mr:1,isDisabled:!m,"data-rh":Object(O._t)("Clone selected widget"),onClick:()=>{if(m){const e=m.clone();e.left+=20,e.top+=20,o.widgets.push(e),u(e),i(!0)}}},l.createElement(M.copy3,{width:16,height:16})),l.createElement(v.Button,{mr:1,isDisabled:!m,"data-rh":Object(O._t)("Send widget to back"),onClick:()=>{m&&(o.sendToBack(m),i(!0))}},l.createElement(M.sendBack,{width:16,height:16})),l.createElement(v.Button,{isDisabled:!m,"data-rh":Object(O._t)("Delete widget"),onClick:()=>{u(null),o.deleteWidget(m),i(!0)}},l.createElement(M.trash,{width:16,height:16}))))),l.createElement(No.a,{top:55,left:240,bg:o.backgroundColor,onWidgetAdd:(e,t)=>{const n=o.addNewWidget(e,t,s);d(null),u(n),i(!0)},onWidgetChange:()=>i(!0),gridSize:o.gridSize,isDesign:!0,isAddMode:null!==s,selectedWidget:m,onWidgetSelect:e=>{e&&m==e&&(o.bringToFront(e),i(!0)),u(e)},widgets:o.widgets}),l.createElement(tn,null,l.createElement(Ho,{selectedTool:s,onToolSelect:e=>{d(e),u(null)}}),m&&h&&l.createElement(Ko.a,{properties:h.properties||[],onChange:(e,t)=>{i(!0),m.properties[e.name]=t},values:p,labelWidth:118,fieldWidth:120})),a&&l.createElement(Yo,{dashboard:a,onClose:()=>c(null),onConfirm:()=>{a.submit(),c(null)}}))}),nn=Object(s.observer)(e=>{const t=e.actionsTaken.map(e=>l.createElement(x.Box,{key:e.id,height:24,mb:2,alignItems:"center"},l.createElement(x.Box,{mr:4,flexDirection:"row"},l.createElement(x.Box,{color:"controlFocus"},l.createElement(M.clockSolid,{width:16,height:16})),l.createElement(x.Box,{ml:2,fontWeight:"bold",color:"subtleText"},e.time.format("HH:mm:ss"))),e.steps&&l.createElement(rt.a,{steps:e.steps})));return l.createElement(x.Box,{width:500},e.actionsTaken.length>0&&l.createElement(x.Box,{flexDirection:"column"},t)||l.createElement(x.Box,{fontSize:18,fontWeight:"bold",color:"subtleText"},Object(O._t)("No actions taken")))});var rn=o(259);const ln=g.a.div`
    // margin: 30px;
    overflow: auto;
    width: ${e=>e.width?e.width+"px":"100%"};
    background-color: ${e=>e.theme.colors.background};
    // border: 1px solid ${e=>e.theme.colors.border};
`,an=g.a.div`
    background-color: ${e=>e.theme.colors.background};
    border-bottom: ${e=>(e.endDay,"1px")} solid ${e=>e.endDay?e.theme.colors.border:e.theme.colors.subtleBorder};
    margin-bottom: ${e=>(e.endDay,"2px")};
    // cursor: ${e=>e.isSmall?"pointer":"default"};
    cursor: pointer;

    :hover {
        background-color: ${e=>e.theme.colors.cardBackgroundSelected};
    }
`,cn=g.a.div`
    align-items: center;
    display: flex;
    height: 40px;
`,sn=g.a.div`
    width: 6px;
    height: 100%;
    background-color: ${e=>e.theme.colors[e.bg]||e.bg};
    margin-right: 10px;
    flex-shrink: 0;
`,dn=g.a.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${e=>e.theme.colors[e.bg]||e.bg};
    color: #fff;
    margin: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,mn=g.a.div`
    width: 80px;
    font-size: 14px;
    color: ${e=>e.newDay?e.theme.colors.subtleText:e.theme.colors.verySubtleText};
    font-weight: bold;
    flex-shrink: 0;
`,un=g.a.div`
    width: 80px;
    font-weight: bold;
    flex-shrink: 0;
`,hn=g.a.div`
    margin: 0 15px;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;
    min-width: 0;
    flex-grow: 0;
`,pn=g.a.div`
    width: 250px;
    flex-shrink: 0;
    flex-grow: 0;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;
    min-width: 0;
`,bn=g.a.div`
    border: 1px solid ${e=>e.theme.colors.controlFocus};
    border-radius: 2px;
    margin: 10px;
    background-color: ${e=>e.theme.colors.cardContainerBackground};
    cursor: default;
    display: flex;
`,gn=g.a.div`
    background-color: ${e=>e.theme.colors.controlFocus};
    color: white;
    width: 6px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`,En=g.a.div`
`,xn=Object(s.observer)(e=>{const[t,o]=l.useState(!1),n=Object(O.statusColorFromStatus)(e.event.level)||"#0080ff";let r="";return e.event.container&&(!e.isSmall&&e.event.container.asMonitor()&&e.event.container.asMonitor().deviceParent&&(r=(e.event.container.asMonitor().deviceParent.props.name||"")+" / "),r+=e.event.container.props.name||""),l.createElement(an,{isSmall:e.isSmall,endDay:e.endDay,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:e.onClick},l.createElement(cn,null,l.createElement(sn,{bg:n}),l.createElement(mn,{newDay:e.newDay},(e.newDay||t)&&e.event.time&&e.event.time.format("DD/MM/YYYY")),l.createElement(x.Box,{width:50,color:"warning",justifyContent:"center",flexShrink:0},!e.event.closed&&l.createElement("div",{"data-rh":Object(O._t)("This event is unresolved.")},l.createElement(M.warning,{width:24,height:24}))),l.createElement(un,null,e.event.time&&e.event.time.format("HH:mm:ss")),l.createElement(dn,{bg:n},Object(rn.c)(e.event,e.handler)),!e.isSmall&&l.createElement(pn,null,Object(rn.b)(e.event,e.handler)),l.createElement(hn,null,r),l.createElement(x.Box,{flexGrow:1}),e.event.acknowledgedBy&&l.createElement(x.Box,{mx:1,py:"8px",px:"10px",bg:"ok",borderRadius:5,color:"white",alignItems:"center",fontSize:14,fontWeight:"bold"},l.createElement(x.Box,{mr:2},l.createElement(M.check,{width:16,height:16})),l.createElement(M.user,{width:16,height:16})),l.createElement(x.Box,{mx:1,py:"8px",px:"10px",bg:e.event.actionCount>0?"controlFocus":"controlDisabledBackground",borderRadius:2,color:"white",alignItems:"center"},l.createElement(M.flash,{width:16,height:16}),l.createElement(x.Box,{ml:2},e.event.actionCount)),l.createElement(x.Box,{mx:1,bg:e.event.commentCount>0?"controlFocus":"controlDisabledBackground",py:"8px",px:"10px",borderRadius:2,color:"white",alignItems:"center"},l.createElement(M.comment,{width:16,height:16}),l.createElement(x.Box,{ml:2},e.event.commentCount)),!e.isSmall&&l.createElement(x.Box,{mx:3},e.isExpanded&&l.createElement(M.doubleUp,{width:16,height:16})||l.createElement(M.doubleDown,{width:16,height:16}))),e.isExpanded&&l.createElement(bn,{onClick:e=>e.stopPropagation()},l.createElement(gn,null),l.createElement(x.Box,{p:15,alignItems:"start",justifyContent:"center",color:"controlFocus"},l.createElement(M.flash,{width:16,height:16})),l.createElement(x.Box,{p:15},e.event.actions&&l.createElement(nn,{actionsTaken:e.event.actions})),l.createElement(x.Box,{width:30,borderRight:"2px solid",borderColor:"controlFocus"}),l.createElement(x.Box,{flexDirection:"column",p:15,width:400},l.createElement(En,null,l.createElement(Lt.Input,{isMultiLine:!0,height:80,isDisabled:!0})),l.createElement(x.Box,{flexDirection:"row"},l.createElement(x.Box,{flexGrow:1,alignItems:"center"},l.createElement(w.Checkbox,{label:Object(O._t)("Mark as closed"),isDisabled:!0})),l.createElement(x.Box,{mt:1,flexGrow:0},l.createElement(v.Button,{isDisabled:!0},Object(O._t)("Comment"),l.createElement(x.Box,{ml:2},l.createElement(M.enter,{width:16,height:16}))))))))}),fn=Object(s.observer)(e=>{const{pluginStore:t}=Object(b.useStores)(),o=e.events.map((o,n)=>{const r=o;let i;"string"==typeof r.eventType&&(i=t.getTimelineEventHandlerForId(r.eventType));const a=0==n||!e.events[n-1].time.isSame(r.time,"day"),c=n==e.events.length-1||!e.events[n+1].time.isSame(r.time,"day");return l.createElement(xn,{key:r.localId,isSmall:e.isSmall,handler:i,onClick:()=>{e.onEventClick&&e.onEventClick(r)},isExpanded:e.eventsExpanded[r.id],event:r,newDay:a,endDay:c})});return l.createElement(ln,{width:e.width},o)});var vn=o(151);const wn=g.a.div`
    flex-grow: 1;
    background-color: ${e=>e.theme.colors.gridBackground};
`,yn=g.a.div`
    position: absolute;
    top: 110px;
    bottom: 30px;
    left: 0px;
    right: 0px;
`,Sn=Object(s.observer)(e=>{const{eventStore:t,deviceStore:o}=Object(b.useStores)(),[n,r]=l.useState(!1),[a,c]=l.useState(!1),[s,d]=l.useState("rt"),[m,u]=l.useState([i().startOf("day").subtract(1,"day"),i().endOf("day")]),[h,p]=l.useState(!0),g=m[1].isBefore(m[0]);l.useEffect(()=>(n||(t.excludeEventType=be.EventType.ContainerMetricStatusChange,t.listenToEvents()),()=>{t.excludeEventType=null,t.unlistenEvents()}),[n]),l.useEffect(()=>{const e={pageSize:100,excludeEventType:be.EventType.ContainerMetricStatusChange};return Array.isArray(s)&&(e.from=s[0],e.to=s[1]),t.filterToContainer&&(e.containerId=t.filterToContainer.id,e.includeDerived=!0),t.load(e),()=>{t.clear()}},[s,t.filterToContainer]);const E=l.useCallback(()=>{d([m[0],m[1]]),p(!1)},[m[0],m[1]]);return l.createElement(wn,null,l.createElement(de.AppToolbar,null,l.createElement(x.Box,null,l.createElement(v.Button,{mr:1,variant:"rt"==s?"selected":"normal",onClick:()=>{d("rt"),p(!0)}},l.createElement(M.clockSolid,{width:16,height:16})),l.createElement(v.Button,{mr:1,variant:a?"selected":"normal",onClick:()=>c(!a)},l.createElement(M.warning,{width:16,height:16})),l.createElement(v.Button,{variant:"rt"==s&&n?"selected":"normal",isDisabled:"rt"!=s,onClick:()=>r(!n)},l.createElement(M.freeze,{width:16,height:16}))),l.createElement(x.Box,{ml:3,alignItems:"center"},l.createElement(vn.a,{width:250,devices:o.sorted,value:t.filterToContainer?t.filterToContainer.asDevice():null,onChange:e=>t.setFilterToContainer(e.container)}),l.createElement(v.Button,{isSmall:!0,isSubtle:!0,ml:1,onClick:()=>t.setFilterToContainer(null)},l.createElement(M.cross,{width:12,height:12}))),l.createElement(x.Box,{ml:3},l.createElement(_e.a,{width:150,value:m[0],onChange:e=>{u([e,m[1]]),p(!0)}})),l.createElement(x.Box,{mx:2,alignItems:"center"},l.createElement(M.rightArrowThin,{width:16,height:16})),l.createElement(x.Box,null,l.createElement(_e.a,{width:150,value:m[1],onChange:e=>{u([m[0],e]),p(!0)}})),l.createElement(x.Box,{ml:2},l.createElement(v.Button,{variant:"primary",isDisabled:g||!h,onClick:E},l.createElement(M.check,{width:16,height:16})))),l.createElement(yn,null,l.createElement(x.Box,{height:"100%",width:"100%"},l.createElement(x.Box,{margin:"0 30px",flexGrow:1},l.createElement(fn,{events:a?t.openEvents:t.display,eventsExpanded:t.eventsExpanded,onEventClick:e=>{const o=1==t.eventsExpanded[e.id];t.setEventExpanded(e,!o)}})))))});var On=o(264);const Cn=o(1572).default,Bn=o(1573).default,jn=o(1574).default,kn=g.a.div`
    height: 100%;
    width: ${e=>e.width}px;
    overflow: auto;
    border-right: 1px solid ${e=>e.theme.colors.controlBorder};
`,_n=g.a.div`
`,Dn=g.a.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 24px;
    text-transform: uppercase;
    background-color: ${e=>e.theme.colors.toolbarBackground};
    font-size: 12px;
    padding: 0 5px;
    cursor: pointer;
`,Mn=g.a.div`
`,In=g.a.div`
    background-color: ${e=>e.selected?e.theme.colors.menuItemSelected:"auto"};
`,Tn=g.a.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 13px;
    height: 22px;
    cursor: pointer;
    padding: 0 ${e=>21*e.level}px;
    :hover {
        background-color: ${e=>e.theme.colors.menuItemSelected};
        //color: ${e=>e.theme.colors.menuItemFocusText};
    }
`,An=g.a.div`
    margin-left: 4px;
    flex-grow: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,Pn=g.a.div`
`,$n=Object(s.observer)(e=>{const t=(e.item.children||[]).map(t=>l.createElement(Fn,{key:t.id,level:e.level+1,item:t,onItemClick:e.onItemClick}));return l.createElement(_n,null,l.createElement(Dn,{onClick:()=>e.onItemClick&&e.onItemClick(e.item)},e.item.isExpanded&&l.createElement(Bn,{width:12,height:12})||l.createElement(Cn,{width:12,height:12}),l.createElement(x.Box,{flexGrow:1,ml:1},e.item.label),e.item.onAddClick&&l.createElement(x.Box,{ml:1},l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:t=>{t.stopPropagation(),e.item.onAddClick()}},l.createElement(jn,{width:12,height:12})))),l.createElement(Mn,null,e.item.isExpanded&&t))}),Fn=Object(s.observer)(e=>{const t=(e.item.children||[]).map(t=>l.createElement(Fn,{key:t.id,level:e.level+1,onItemClick:e.onItemClick,item:t}));return l.createElement(In,{selected:e.item.isSelected},l.createElement(Tn,{level:e.level,onClick:()=>e.onItemClick&&e.onItemClick(e.item)},l.createElement(x.Box,{color:e.item.iconColor},e.item.children&&e.item.children.length>0&&l.createElement(l.Fragment,null,e.item.isExpanded&&l.createElement(Bn,{width:12,height:12})||l.createElement(Cn,{width:12,height:12})),e.item.icon&&l.createElement(e.item.icon,{width:12,height:12})),l.createElement(An,null,e.item.label)),l.createElement(Pn,null,e.item.isExpanded&&t))}),zn=Object(s.observer)(e=>{const t=e.items.map(t=>l.createElement($n,{key:t.id,level:0,item:t,onItemClick:e.onItemClick}));return l.createElement(kn,{width:e.width},t)});let{TabListStyle:Rn,ActionButtonStyle:Nn,TabStyle:Gn,PanelStyle:Ln}=On.styled;Rn=Object(g.a)(Rn)`
    background-color: ${e=>e.theme.colors.background};
    height: 38px;
    top: 0;
    right: 0;
    left: 0;
    position: absolute;
`,Gn=Object(g.a)(Gn)`
    //padding-left: 4px;
    padding-right: 0;
    color: ${e=>e.theme.colors.color};
    margin-right: 1px;
    //background-color: ${e=>e.active?e.theme.colors.toolbarBackground:e.theme.colors.background};
    background-color: ${e=>e.active?e.theme.colors.toolbarBackground:e.theme.colors.menuItemSelected};
    border-bottom: 3px solid ${e=>e.active?e.theme.colors.ok:"transparent"};
    overflow: hidden;
    white-space: nowrap;
    height: 38px;
    font-size: 12px;
`,Nn=Object(g.a)(Nn)`
    color: ${e=>e.theme.colors.text};
    background-color: ${e=>e.theme.colors.controlBackground};
    // border: 1px solid ${e=>e.theme.colors.controlBorder};
    border: none;
`,Ln=Object(g.a)(Ln)`
    padding: 0;
    flex-grow: 1;
    overflow: auto;
    background-color: ${e=>e.theme.colors.background};
`;const Un=Object(g.a)(Ln)`
    padding: 0;
    flex-grow: 1;
    background-color: ${e=>e.theme.colors.background};
`;var Vn=o(250),Wn=o(420),Hn=o(234),Kn=o(251),qn=o(235),Jn=o(118),Zn=o(212),Yn=o(345),Xn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const Qn=e=>{const{actions:t}=e,o=Xn(e,["actions"]);return l.createElement(lt.Select,Object.assign({isSmall:e.isSmall,options:t},o,{getOptionLabel:e=>e.name,getOptionValue:e=>String(e.id)}))};Qn.defaultProps={};var er,tr=o(126),or=function(e,t,o,n){var r,l=arguments.length,i=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(l<3?r(i):l>3?r(t,o,i):r(t,o))||i);return l>3&&i&&Object.defineProperty(t,o,i),i},nr=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};!function(e){e[e.Details=0]="Details",e[e.ServerCode=1]="ServerCode",e[e.ClientCode=2]="ClientCode"}(er||(er={}));class rr extends Kn.a{constructor(e,t,o){super(e,t,o),this.viewMode=er.Details,this.clientCode="",this.serverCode="",this.scriptAssets=[],this.blobAssets=[],this.actionAssets=[]}setPlugin(e){this.plugin=e.toViewModel(),this.scriptAssets=this.plugin.assets.filter(e=>e instanceof fe.ScriptRef),this.blobAssets=this.plugin.assets.filter(e=>e instanceof fe.BlobRef),this.actionAssets=this.plugin.assets.filter(e=>e instanceof fe.ActionRef)}getIsModified(){return this.plugin.isPropertyDirty("name")||this.plugin.isPropertyDirty("description")||this.plugin.isPropertyDirty("author")}save(){return nr(this,void 0,void 0,(function*(){this.serverCode?this.plugin.serverScript=yield Object(Se.wrapErrorUI)(S.blob.putDataAsStr(this.plugin.serverScript,this.serverCode)):this.plugin.serverScript=null,this.clientCode?this.plugin.clientScript=yield Object(Se.wrapErrorUI)(S.blob.putDataAsStr(this.plugin.clientScript,this.clientCode)):this.plugin.clientScript=null;const e=Ie.a.uniq(this.scriptAssets,e=>e&&e.id),t=Ie.a.uniq(this.blobAssets,e=>e&&e.id),o=Ie.a.uniq(this.actionAssets,e=>e&&e.id),n=e.concat(t).concat(o);this.plugin.assets=n.filter(e=>null!=e),yield Object(Se.wrapErrorUI)(S.plugin.patch(this.plugin)),this.plugin.submit(),this._isModified=!1}))}render(e){const t=b.rootStore.configStore.developerMode,o=l.createElement(v.Button,{isSmall:!0,isDisabled:!this.isModified,onClick:()=>this.save()},l.createElement(x.Box,null,l.createElement(M.check,{width:16,height:16}))),n=l.createElement(x.Box,{mr:3},l.createElement(x.Box,{mr:2},l.createElement(xe.RadioGroup,{isSmall:!0,value:er[this.viewMode],onChange:e=>this.viewMode=er[e]},l.createElement(xe.RadioButton,{value:"Details"},l.createElement(M.form,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Details"))),l.createElement(xe.RadioButton,{value:"ClientCode",isDisabled:!t},l.createElement(M.browser,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Browser code"))),l.createElement(xe.RadioButton,{value:"ServerCode",isDisabled:!t},l.createElement(M.code,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Server side code"))))),o),r=this.renderDetails(e);let i;return this.viewMode==er.ServerCode?i=l.createElement(qn.a,{executionTarget:new be.ExecutionTarget(be.ExecutionTargetType.Kernel),extraTools:n,script:this.serverCode,syntax:Ut.c.Python,onScriptChange:e=>{this.serverCode=e,this._isModified=!0}}):this.viewMode==er.ClientCode&&(i=l.createElement(qn.a,{extraTools:n,script:this.clientCode,syntax:Ut.c.JavaScript,onScriptChange:e=>{this.clientCode=e,this._isModified=!0}})),l.createElement(l.Fragment,null,r&&this.viewMode==er.Details&&l.createElement(l.Fragment,null,l.createElement(qn.b,{bg:"toolbarBackground",borderBottom:"1px solid",borderColor:"dialogBorder"},n),l.createElement(x.Box,{p:4},r))||i)}renderDetails(e){const t=b.rootStore.configStore.developerMode;return l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{mb:5},l.createElement(M.plugins,{width:48,height:48}),l.createElement(x.Box,{ml:5,flexDirection:"column"},l.createElement(x.Box,{mb:3},l.createElement(f.TextField,{width:500,isDisabled:!0,label:Object(O._t)("UUID"),value:this.plugin.uuid,elemAfterInput:l.createElement(v.Button,{isSubtle:!0,isSmall:!0,onClick:()=>{Object(O.copyToClipboard)(this.plugin.uuid),tr.a(Object(O._t)("Copied"),Object(O._t)("UUID copied to clipboard"),"success")}},l.createElement(M.copy,{width:12}))})),l.createElement(x.Box,{mb:3},l.createElement(f.TextField,{width:500,isDisabled:!t,label:Object(O._t)("Name"),value:this.plugin.name,onChange:e=>this.plugin.name=e.target.value})),l.createElement(x.Box,{mb:3},l.createElement(f.TextField,{width:500,height:100,isMultiLine:!0,isDisabled:!t,label:Object(O._t)("Description"),value:this.plugin.description,onChange:e=>this.plugin.description=e.target.value})),l.createElement(x.Box,{mb:3},l.createElement(f.TextField,{width:500,isDisabled:!t,label:Object(O._t)("Author"),value:this.plugin.author,onChange:e=>this.plugin.author=e.target.value})),t&&l.createElement(l.Fragment,null,l.createElement(x.Box,{mb:3},l.createElement(Jn.MultiInput,{allowDeleteLast:!0,width:500,createNewValue:()=>null,newValueText:Object(O._t)("Add script asset"),values:this.scriptAssets,onDelete:()=>this._isModified=!0,renderInput:e=>l.createElement(Zn.a,{width:500,scripts:b.rootStore.scriptStore.display,value:this.scriptAssets[e]instanceof fe.ScriptRef?this.scriptAssets[e].resolve():null,onChange:t=>{this.scriptAssets[e]=t.asRef(),this._isModified=!0}})})),l.createElement(x.Box,{mb:3},l.createElement(Jn.MultiInput,{allowDeleteLast:!0,width:500,createNewValue:()=>null,newValueText:Object(O._t)("Add blob asset"),values:this.blobAssets,onDelete:()=>this._isModified=!0,renderInput:e=>l.createElement(Yn.a,{width:500,value:this.blobAssets[e],onChange:t=>{this.blobAssets[e]=t,this._isModified=!0}})})),l.createElement(x.Box,{mb:3},l.createElement(Jn.MultiInput,{allowDeleteLast:!0,width:500,createNewValue:()=>null,newValueText:Object(O._t)("Add action asset"),values:this.actionAssets,onDelete:()=>this._isModified=!0,renderInput:e=>l.createElement(Qn,{width:500,actions:b.rootStore.actionStore.display,value:this.actionAssets[e]?this.actionAssets[e].resolve():null,onChange:t=>{this.actionAssets[e]=t.asRef(),this._isModified=!0}})}))))))}}or([De.observable],rr.prototype,"viewMode",void 0),or([De.observable],rr.prototype,"plugin",void 0),or([De.observable],rr.prototype,"clientCode",void 0),or([De.observable],rr.prototype,"serverCode",void 0),or([De.observable],rr.prototype,"scriptAssets",void 0),or([De.observable],rr.prototype,"blobAssets",void 0),or([De.observable],rr.prototype,"actionAssets",void 0),or([De.action],rr.prototype,"setPlugin",null);var lr=o(421),ir=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const ar=g.a.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`,cr=g.a.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    padding-top: 39px; // Reserve for tab bar

    & > div {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        & > div:nth-child(2) {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
    }
`,sr=Object(s.observer)(e=>{const[t,o]=l.useState(!1),n=l.createElement(M.cross,{width:10,height:10}),r=l.createElement(M.dot,{width:8,height:8});let i=null;return e.page.isModified&&(i=r),t&&(i=n),!i&&e.isActive&&(i=n),l.createElement(x.Box,{color:e.isActive?"text":"subtleText"},e.page.icon&&l.createElement(x.Box,{mr:2,width:12,alignItems:"center",color:e.page.iconColor},l.createElement(e.page.icon,{width:12,height:12})),l.createElement(x.Box,{flexGrow:1},e.page.name),l.createElement(x.Box,{width:32,justifyContent:"center",alignItems:"center",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:e.onCloseClick},i))}),dr=Object(s.observer)(e=>{const{treeStore:t,studioStore:o,scriptStore:r}=Object(b.useStores)();let i=0;function a(e){return ir(this,void 0,void 0,(function*(){const t=o.pages[e];if(!t)return;let n=!0;if(t.isModified){n=(yield nt.confirm(nt.MsgboxType.Warning,Object(O._t)("Confirm"),Object(O._t)("Page is modified, close anyway?"),"",Object(O._t)("Lose changes"))).ok}n&&o.pages.splice(e,1)}))}const c=o.pages.map((e,t)=>{const n=e==o.activePage;return n&&(i=t),l.createElement(On.Tab,{key:t},l.createElement(sr,{page:e,isActive:n,onCloseClick:()=>a(t)}))});Object(Qo.a)("f7",e=>{e.preventDefault(),o.pages[i]&&o.pages[i].hotKeyPressed()},{enableOnTags:["INPUT","SELECT","TEXTAREA"]}),Object(Qo.a)("shift+f4",e=>{e.preventDefault(),a(i)},{enableOnTags:["INPUT","SELECT","TEXTAREA"]});const s=o.pages.map((e,t)=>l.createElement(On.Panel,{key:t},e.render(e))),d=l.useCallback(e=>ir(void 0,void 0,void 0,(function*(){if(t.toggleExpanded(e),(!e.children||0==e.children.length)&&e.data instanceof be.Script){let n;if(o.pages.forEach(t=>{t instanceof Vn.a&&e.data.localId==t.script.localId&&(n=t)}),!n){n=e.data.exportAs?new Wn.a(e.label,e.icon):new Hn.a(e.label,e.icon);const t=e.data.clone();if(t.localId=e.data.localId,n.iconColor=e.iconColor,e.data.id){const o=yield S.script.get(e.data.id);t.updateFromJs(o)}n.script=t.toViewModel(),n.script.submit(),o.addPage(n)}n&&(o.activePage=n,n.data=e.data,t.selectedItem=e.data)}if((!e.children||0==e.children.length)&&e.data instanceof be.Plugin){let n;o.pages.forEach(t=>{t instanceof rr&&e.data.uuid==t.plugin.uuid&&(n=t)}),n||(n=new rr(e.label,e.icon),n.setPlugin(e.data),e.data.serverScript&&(n.serverCode=yield Object(Se.wrapErrorUI)(S.blob.getDataAsStr(e.data.serverScript))),e.data.clientScript&&(n.clientCode=yield Object(Se.wrapErrorUI)(S.blob.getDataAsStr(e.data.clientScript))),o.addPage(n)),n&&(o.activePage=n,n.data=e.data,t.selectedItem=e.data)}})),[]);return l.useEffect(()=>{if(e.openScriptPage){const o=Object(O.treeFind)(t.treeModel,e.openScriptPage);o&&d(o),location.href="#/studio"}},[e.openScriptPage]),l.createElement(ar,null,l.createElement(x.Box,{width:250},l.createElement("div",{style:{flexGrow:1}},l.createElement(zn,{width:250,items:t.treeModel,onItemClick:d}))),l.createElement(cr,null,c.length>0&&l.createElement(On.Tabs,{showModalButton:!1,customStyle:n,activeIndex:i,onTabChange:e=>{o.activePage=o.pages[e],o.activePage&&(t.selectedItem=o.activePage.data,t.expandParent(t.selectedItem))},onTabEdit:({type:e,index:t})=>{o.pages.splice(t,1)}},l.createElement(On.TabList,null,c),l.createElement(On.PanelList,null,s))||l.createElement(x.Box,{p:"100px",position:"relative"},l.createElement(x.Box,{style:{cursor:"pointer",textDecoration:"underline"},color:"controlFocus",fontWeight:"bold",zIndex:1,fontSize:24,position:"absolute",top:50,left:50,right:50,py:3,justifyContent:"center",onClick:()=>{o.pages.push(new lr.a(Object(O._t)("Welcome")))}},Object(O._t)("Open Welcome Page")),l.createElement(x.Box,{opacity:"0.1"},l.createElement(M.monstaMono,{width:"100%",height:"100%"})))))}),mr=Object(s.observer)(e=>{const{configStore:t}=Object(b.useStores)(),[o,n]=l.useState(t.updateChannel),r=[{label:Object(O._t)("Official"),value:"stable"},{label:Object(O._t)("Beta"),value:"beta"}],i=r.find(e=>e.value==o);return l.createElement(Ye.Dialog,{isOpen:!0,onClose:e.onClose,width:700,height:350,title:Object(O._t)("Software Update"),onConfirm:()=>{t.setUpdateChannel(o),e.onClose()},confirmText:Object(O._t)("Ok"),closeText:Object(O._t)("Cancel")},l.createElement(x.Box,{flexDirection:"row",height:"100%"},l.createElement(x.Box,{mr:4,color:"#5aca80"},l.createElement(M.updateMono,{width:64,height:64})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(f.Field,{label:Object(O._t)("Update channel"),help:Object(O._t)("Automatically check for updates on channel")},l.createElement(lt.Select,{options:r,value:i,width:400,onChange:e=>n(e.value)})),"stable"!=o&&l.createElement(x.Box,{mt:30,flexDirection:"row",fontSize:12},l.createElement(x.Box,{color:"warning",mr:3},l.createElement(M.warning,{width:32,height:32})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{mb:3},Object(O._t)("Beta is the version of Monsta in a development state but considered usable. This version may cause problems that will require correction by the developers in the next official release.")),l.createElement(x.Box,null,Object(O._t)("Atenção: Após a atualização não é possível retornar a versão anterior.")))))))});var ur=o(222);const hr=g.a.div`
    position: relative;
    flex-grow: 1;
`,pr=g.a.div`
    display: flex;
    padding: 0 48px;
    align-items: center;
`,br=g.a.div`
    color: ${e=>e.theme.colors.subtleText};
    padding-right: 20px;
    font-size: 18px;
    font-weight: bold;
`,gr=g.a.div`
    display: flex;
    flex-wrap: wrap;
    padding: 32px 48px;
    width: 1000px;
`,Er=g.a.a`
    text-decoration: none;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 160px;
    height: 160px;
    cursor: pointer;
    border-radius: 5px;
    padding: 16px;
    color: ${e=>e.theme.colors.text} !important;

    & > svg {
        color: ${e=>e.color?e.color:e.theme.colors.controlFocus};
    }

    :hover {
        color: ${e=>e.theme.colors.menuItemSelectedText};
        background-color: ${e=>e.theme.colors.menuItemSelected};
    }
`,xr=g.a.div`
    padding-top: 20px;
    font-size: 14px;
    font-weight: bold;
`,fr=g.a.div`
    margin-top: 4px;
    font-size: 12px;
    color: ${e=>e.theme.colors.subtleText};
    text-align: center;
`,vr=g.a.div`
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
    text-align: center;
    background-color: ${e=>e.theme.colors.error};
    color: #fff;
    position: absolute;
    top: 0;
    right: 32px;
    top: 3px;
`;function wr(e,t,o,n,r,i,a){return l.createElement(Er,{href:e?"#"+e:void 0,color:a,onClick:e=>{i&&(e.preventDefault(),i())}},l.createElement(t,{width:48,height:48}),l.createElement(xr,null,o),l.createElement(fr,null,n),r&&l.createElement(vr,null,r)||null)}const yr=Object(s.observer)(e=>{const{appStore:t,agentStore:o,studioStore:n,pluginStore:r}=Object(b.useStores)(),[i,a]=l.useState(!1),c=r.configItems.map(e=>wr(`${e.plugin.id}-${e.id}`,e.icon,e.name,e.description,void 0,e.onRun));return l.createElement(hr,null,l.createElement(de.AppToolbar,null,l.createElement(pr,null,l.createElement(br,null,Object(O._t)("Configuration")))),l.createElement(gr,null,l.createElement(Er,{onClick:()=>{t.setDarkMode(!t.darkMode)}},l.createElement(M.moon,{width:48,height:48}),l.createElement(xr,null,Object(O._t)("Dark mode")),l.createElement(fr,{onClick:e=>e.stopPropagation()},l.createElement(A.Switch,{size:"large",isChecked:t.darkMode,onChange:e=>t.setDarkMode(e.target.checked)}))),wr("templates",M.template,Object(O._t)("Templates"),Object(O._t)("Create and manage monitor templates")),wr("datasources",M.dataSource,Object(O._t)("Data Sources"),Object(O._t)("Data Sources"),void 0,()=>{let e=n.pages.find(e=>e instanceof ur.a);e||(e=new ur.a,n.pages.push(e)),n.activePage=e,document.location.href="#/studio"}),wr("actions",M.automation,Object(O._t)("Actions"),Object(O._t)("Configure actions")),wr("agents",M.agent,Object(O._t)("Agents"),Object(O._t)("Agents"),o.pendingCount),c,wr("config.devicegroups",M.groups,Object(O._t)("Device groups"),Object(O._t)("Manage device groups")),wr("studio",M.coding,Object(O._t)("Monsta Studio"),Object(O._t)("Edit code for templates, datas sources and more")),wr("blobs",M.image,Object(O._t)("Images"),Object(O._t)("Upload and manage images")),wr(null,M.updateMono,Object(O._t)("Software Update"),Object(O._t)("Configure automatic updates"),void 0,()=>a(!0),"#5aca80"),wr("users",M.users,Object(O._t)("Users"),Object(O._t)("Add and manage users")),wr("params",M.gears,Object(O._t)("Parameters"),Object(O._t)("Alter internal system parameters")),wr("plugins",M.plugins,Object(O._t)("Plugins"),Object(O._t)("Plugins")),wr(null,M.key,Object(O._t)("License key"),Object(O._t)("Show information about your license"),void 0,()=>t.isShowingAccountInfo=!0),wr(null,M.monsta,Object(O._t)("About Monsta"),Object(O._t)("Information about the installed version of Monsta"),void 0,()=>t.isShowingAbout=!0)),i&&l.createElement(mr,{onClose:()=>a(!1)}))});const Sr=Object(s.observer)(e=>l.createElement(Xo.a,{onClick:()=>document.location.href="#/config"}));var Or=o(318),Cr=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const Br=g.a.div`
    @keyframes rotating {
        from {
            transform: rotateZ(0deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
    
    ${e=>e.isAnimating?"animation: rotating 5s linear infinite;":""};
`,jr=Object(s.observer)(e=>{const{containerStore:t,pluginStore:o,scriptStore:n,objectStore:r,appStore:i}=Object(b.useStores)(),[a,c]=l.useState(!1),[s,d]=l.useState(null),m=[];s&&(s.containers.forEach(e=>{const o=t.get(e);o&&"TemplateGroup"==o.class&&m.push(o)}),s.plugins.forEach(e=>{const t=o.get(e);t&&m.push(t)}),s.scripts.forEach(e=>{const t=n.get(e);t&&m.push(t)}),s.objects.forEach(e=>{const t=r.get(e);t&&m.push(t)}));const u=l.useCallback((e,t,o)=>Cr(void 0,void 0,void 0,(function*(){c(!0);try{const t=yield Object(Se.wrapErrorUI)(S.pkg.importPackage(e));d(t),i.setLastImport(t),console.log(t)}finally{c(!1)}})),[]),h=m.map(e=>{let t=l.createElement(M.pkg,{width:32,height:32}),o=Object(O._t)("Object"),n=null;return e instanceof be.Container&&e.asTemplateGroup()?(o=e.asTemplateGroup().name,n=e.asTemplateGroup().description,t=e.asTemplateGroup().icon?l.createElement(ge.Image,{blob:e.asTemplateGroup().icon,width:32,height:32}):l.createElement(M.template,{width:32,height:32})):e instanceof be.Plugin?(o=`${e.name} ${e.version}`,n=e.description,t=e.icon?l.createElement(ge.Image,{blob:e.icon,width:32,height:32}):l.createElement(M.plugins,{width:32,height:32})):e instanceof be.Script&&(o=""+e.name,n=e.description,t=e.props.icon&&e.props.icon instanceof fe.BlobRef?l.createElement(ge.Image,{blob:e.props.icon,width:32,height:32}):l.createElement(M.script,{width:32,height:32})),l.createElement(x.Box,{py:2,key:e.localId,flexDirection:"row",alignItems:"center",borderBottom:"1px solid",borderColor:"subtleBorder"},l.createElement(x.Box,{width:80,color:"controlFocus"},l.createElement(M.pkg,{width:32,height:32})),l.createElement(x.Box,{width:80},t),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{fontSize:16,fontWeight:"bold",mb:1},o),l.createElement(x.Box,null,n)))});return l.createElement(Ye.Dialog,{isOpen:!0,onClose:e.onClose,width:800,height:550,title:e.title},s&&l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{width:"100%",mb:4,fontSize:16,borderBottom:"1px solid",borderColor:"controlBorder",p:3,flexDirection:"row",alignItems:"center"},l.createElement(x.Box,{color:"ok"},l.createElement(M.check,{width:32,height:32})),l.createElement(x.Box,{ml:4},Object(O._t)("Package imported successfully."))),l.createElement(x.Box,{flexDirection:"column"},h))||l.createElement(l.Fragment,null,l.createElement(x.Box,{mb:4,fontSize:16,borderBottom:"1px solid",borderColor:"controlBorder",p:3,flexDirection:"row",alignItems:"center"},l.createElement(x.Box,{color:"controlFocus"},l.createElement(M.pkg,{width:32,height:32})),l.createElement(x.Box,{ml:4},e.help)),l.createElement(x.Box,{width:"100%"},l.createElement(x.Box,{width:"100%"},l.createElement(Or.a,{onUpload:u,text:Object(O._t)("Click to upload a file, or drag and drop here.")})))),a&&l.createElement(x.Box,{flexDirection:"row",alignItems:"center",mt:4},l.createElement(Br,{isAnimating:!0},l.createElement(M.cog2,{width:64,height:64})),l.createElement(x.Box,{ml:4,fontSize:16},Object(O._t)("Importing package..."))))}),kr=g.a.div`
    flex-grow: 1;
    position: relative;
    background-color: ${e=>e.theme.colors.cardContainerBackground};
`,_r=g.a.div`
    padding: 24px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 24px;
`,Dr=(g.a.div`
    display: flex;
    padding: 0 48px;
    align-items: center;
`,g.a.div`
    padding: 24px 64px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`),Mr=g.a.div`
    //border-top: 5px solid ${e=>e.disabled?e.theme.colors.inactive:e.theme.colors.ok};
    padding: 15px;
    background-color: ${e=>e.theme.colors.cardBackground};
    width: 300px;
    border-radius: 2px;
    box-shadow: ${e=>e.theme.shadows.card};
    font-size: 13px;
    margin-right: 20px;
    margin-bottom: 20px;
`,Ir=Object(s.observer)(e=>{const{pluginStore:t}=Object(b.useStores)(),[o,n]=l.useState(null),r=t.sortedByName.map(e=>l.createElement(Mr,{key:e.uuid,disabled:e.disabled},l.createElement(x.Box,{flexDirection:"row"},l.createElement(x.Box,{width:72},e.icon&&l.createElement(ge.Image,{blob:e.icon,width:48,height:48})||l.createElement(M.plugins,{width:48,height:48})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{flexDirection:"row",mb:2,alignItems:"center"},l.createElement(x.Box,{fontWeight:"bold",fontSize:16,mr:2},e.name),l.createElement(x.Box,null,e.version)),l.createElement(x.Box,{mb:2,color:"subtleText",fontSize:12},e.author),l.createElement(x.Box,{height:60},e.description))),l.createElement(x.Box,null,l.createElement(x.Box,{mr:2},l.createElement("div",{"data-rh":Object(O._t)("Details")},l.createElement(v.Button,{isDisabled:!0},l.createElement(M.info,{width:16,height:16})))),l.createElement(x.Box,{flexGrow:1},l.createElement("div",{"data-rh":Object(O._t)("Uninstall plugin")},l.createElement(v.Button,{isDisabled:!0},l.createElement(M.trash,{width:16,height:16})))),l.createElement(x.Box,{alignItems:"center"},l.createElement("div",{"data-rh":e.disabled?Object(O._t)("Click to enable"):Object(O._t)("Click to disable")},l.createElement(A.Switch,{size:"large",isChecked:!e.disabled,onChange:o=>{e.disabled=!o.target.checked,e.disabled?t.freePlugin(e):t.initPlugin(e),S.plugin.update(e)}}))))));return l.createElement(l.Fragment,null,l.createElement(kr,null,l.createElement(de.AppToolbar,null,l.createElement(Sr,null),l.createElement(br,null,Object(O._t)("Plugins")),l.createElement(x.Box,{ml:4},l.createElement(v.Button,{onClick:()=>n(!0)},l.createElement(M.pkg,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Import plugins"))))),l.createElement(Dr,null,0==r.length&&l.createElement(_r,null,l.createElement(x.Box,{mr:4},l.createElement(M.plugins,{width:64,height:64})),l.createElement(x.Box,null,Object(O._t)("No plugins installed")))||r)),o&&l.createElement(jr,{title:Object(O._t)("Import Plugins"),help:Object(O._t)("Select a package file to import."),onClose:()=>n(!1)}))});var Tr=o(253),Ar=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const Pr=g.a.div`
    ${I.position}
    ${I.layout}
    background-color: ${e=>e.theme.colors.background};
    border-right: 1px solid ${e=>e.theme.colors.controlBorder};
    overflow: auto;
    flex-shrink: 0;
`,$r=g.a.div`
    padding: 0 16px;
    height: 48px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-right: 6px solid ${e=>e.selected?e.theme.colors.controlFocus:"transparent"};
    background-color: ${e=>e.selected?e.theme.colors.cardBackgroundSelected:"transparent"};
`,Fr=g.a.div`
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
`,zr=Object(s.observer)(e=>{const{groups:t,value:o,onChange:n}=e,r=Ar(e,["groups","value","onChange"]),i=t.map(e=>l.createElement($r,{key:e.id,onClick:()=>n(e),selected:o==e},l.createElement(x.Box,{width:40,height:48,flexShrink:0,alignItems:"center"},e.props.icon&&l.createElement(ge.Image,{blob:e.props.icon,width:32})||l.createElement(x.Box,{color:"controlFocus"},l.createElement(M.template,{width:32,height:32}))),l.createElement(Fr,null,e.props.name)));return l.createElement(Pr,Object.assign({},r),i)});var Rr=o(152);const Nr=Object(s.observer)(e=>{const{blobStore:t}=Object(b.useStores)();return l.createElement(Ye.Dialog,{width:600,height:400,isOpen:!0,title:e.group.props.name||Object(O._t)("No name"),onClose:e.onClose,confirmText:Object(O._t)("Confirm"),closeText:Object(O._t)("Cancel"),onConfirm:e.onConfirm},l.createElement(x.Box,{flexDirection:"row"},l.createElement(x.Box,null,l.createElement(Rr.a,{images:t.images,onChange:t=>e.group.props.icon=t,value:e.group.props.icon})),l.createElement(x.Box,{ml:4,flexDirection:"column"},l.createElement(x.Box,{mb:3},l.createElement(f.TextField,{label:Object(O._t)("Name"),width:400,autoFocus:!0,value:e.group.props.name,onChange:t=>e.group.props.name=t.target.value})),l.createElement(x.Box,{mb:3},l.createElement(f.TextField,{label:Object(O._t)("Description"),width:400,height:80,isMultiLine:!0,value:e.group.props.description,onChange:t=>e.group.props.description=t.target.value})))))});var Gr=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const Lr=g.a.div`
    position: relative;
    flex-grow: 1;
`,Ur=g.a.div`
    display: flex;
    position: absolute;
    right: 5px;
    bottom: 5px;
`,Vr=g.a.div`
    margin-left: 300px;
    background-color: ${e=>e.theme.colors.toolbarBackground};
    border-bottom: 1px solid ${e=>e.theme.colors.controlBorder};
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`,Wr=g.a.div`
    position: absolute;
    bottom: 30px;
    left: 300px;
    top: 105px;
    right: 0; 
    overflow: auto;
`,Hr=g.a.table`
    width: 100%;
    border-collapse: collapse;

    tr {
        height: 32px;
    }

    td:first-child {
        padding: 0 8px 0 16px;
    }

    td {
        border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
        padding: 0 8px;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
    }
`,Kr=g.a.span`
    position: absolute;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    line-height: 32px;
`,qr=(g.a.div`
    position: absolute;
    bottom: 5px;
    left: 5px;
`,g.a.div`
    position: absolute;
    bottom: 5px;
    left: 5px;
    display: flex;
    align-items: flex-end;
`),Jr=g.a.div`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 2px 0 10px 0;
`,Zr=g.a.div`
    position: absolute;
    right: -16px;
    top: -16px;
    border-radius: 50%;
    background-color: ${e=>e.isEmpty?e.theme.colors.inactive:"#0080ff"};
    color: white;
    text-align: center;
    line-height: 32px;
    width: 32px;
    height: 32px;
`,Yr=Object(s.observer)(e=>{const{containerStore:t,templateStore:o,appStore:n}=Object(b.useStores)(),[r,i]=l.useState(null),[a,c]=l.useState(""),[s,d]=l.useState(""),[m,u]=l.useState(null),[h,p]=l.useState(null);l.useEffect(()=>(t.loadClass("TemplateGroup"),function(){t.clearClass("TemplateGroup"),t.clearClass("Template")}),[]);const g=e=>Gr(void 0,void 0,void 0,(function*(){if(e)if(0==e.children.length){"ok"==(yield nt.confirm(nt.MsgboxType.Error,Object(O._t)("Confirm Delete"),Object(O._t)("Confirm deletion?"),e.asTemplateGroup().name)).value&&Object(Se.wrapErrorUI)(S.container.del(e.id))}else nt.alert(nt.MsgboxType.Error,Object(O._t)("Error"),Object(O._t)("You can only delete empty templates."))}));let E=[];if(r){E=r.children.reduce((e,t)=>(t.asTemplate()&&(s?t.asTemplate().name.toUpperCase().includes(s.toUpperCase())&&e.push(t.asTemplate()):e.push(t.asTemplate())),e),[]).sort(O.sortByName).map(e=>l.createElement("tr",{key:e.container.localId,style:{height:32}},l.createElement("td",{style:{width:24}},e.icon&&l.createElement(ge.Image,{blob:e.icon,height:24,width:24})||l.createElement(x.Box,{color:"controlFocus"},l.createElement(M.template,{height:24,width:24}))),l.createElement("td",{style:{width:350,maxWidth:350}},l.createElement("a",{href:"#",onClick:t=>{t.preventDefault(),n.editContainer(e.container)}},e.name)),l.createElement("td",{style:{position:"relative"}},l.createElement(Kr,null,e.description)),l.createElement("td",{style:{width:150,maxWidth:150}},l.createElement(x.Box,{justifyContent:"flex-end"},l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:()=>n.editContainer(e.container)},l.createElement(M.edit,{width:16,height:16})),l.createElement(v.Button,{isSmall:!0,isSubtle:!0},l.createElement(x.Box,{color:"error"},l.createElement(M.trash,{width:16,height:16})))))))}const f=o.groupsDisplay.filter(e=>n.lastImport&&n.lastImport.containers?n.lastImport.containers.includes(e.id):!a||e.asTemplateGroup().name.toUpperCase().includes(a.toUpperCase())),w=e=>l.createElement(Ur,null,l.createElement(v.Button,{color:"error",mr:3,isSmall:!0,isSubtle:!0,onClick:t=>{t.stopPropagation(),g(e)}},l.createElement(M.trash,{width:16,height:16})),l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:t=>{t.stopPropagation(),u(e.toViewModel())}},l.createElement(M.edit,{width:16,height:16})),l.createElement(v.Button,{isSubtle:!0,isSmall:!0,onClick:t=>{S.pkg.exportPackage(Number(e.id)).then(t=>{Object(O.saveData)(new Uint8Array(t),e.props.name+".pkg")}).catch(e=>{console.error(e)}),t.stopPropagation()}},l.createElement(M.download,{width:16,height:16})));return l.createElement(Lr,null,l.createElement(de.AppToolbar,null,l.createElement(x.Box,{width:300,alignItems:"center"},l.createElement(Sr,null),l.createElement(br,null,Object(O._t)("Templates"))),l.createElement(x.Box,null,l.createElement(v.Button,{onClick:()=>p(!0)},l.createElement(M.pkg,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Import templates"))))),l.createElement(x.Box,{position:"absolute",top:55,left:0,width:300,height:50,borderBottom:"1px solid",borderRight:"1px solid",borderColor:"controlBorder",p:2},l.createElement(x.Box,{flexGrow:1},n.lastImport&&l.createElement(x.Box,{flexGrow:1,backgroundColor:"toolbarBackground",borderRadius:5,alignItems:"center",border:"1px solid",borderColor:"controlBorder"},l.createElement(x.Box,{px:3,py:2,mr:3,fontWeight:"bold"},Object(O._t)("Last import")),l.createElement(x.Box,{flexGrow:1}),l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:()=>n.setLastImport(null)},l.createElement(M.cross,{width:16,height:16})))||l.createElement(Lt.Input,{elemBeforeInput:l.createElement(M.search,{width:16,height:16}),elemAfterInput:l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:()=>c("")},l.createElement(M.cross,{width:10,height:10})),value:a,onChange:e=>c(e.target.value)})),l.createElement(x.Box,{ml:2},l.createElement(v.Button,{variant:"primary",onClick:()=>{const e=new be.Container(t);e.class="TemplateGroup",u(e.toViewModel())}},l.createElement(M.add,{width:16,height:16})))),l.createElement(zr,{position:"absolute",bottom:0,top:105,left:0,width:300,groups:f,onChange:i,value:r}),r&&l.createElement(l.Fragment,null,l.createElement(Vr,null,l.createElement(x.Box,{mr:1},l.createElement(v.Button,{isSubtle:!0,onClick:()=>i(null)},l.createElement(M.leftChevron,{width:32,height:32}))),l.createElement(x.Box,null,r.props.icon&&l.createElement(ge.Image,{blob:r.props.icon,height:32})),l.createElement(x.Box,{ml:3,fontWeight:"bold",fontSize:16},r.props.name),l.createElement(x.Box,{flexGrow:1}),l.createElement(x.Box,null,l.createElement(v.Button,{onClick:()=>u(r.toViewModel())},l.createElement(M.edit,{width:16,height:16}))),l.createElement(x.Box,{ml:3},l.createElement(Lt.Input,{width:300,elemBeforeInput:l.createElement(M.search,{width:16,height:16}),elemAfterInput:l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:()=>d("")},l.createElement(M.cross,{width:10,height:10})),value:s,onChange:e=>d(e.target.value)})),l.createElement(x.Box,{ml:3},l.createElement(v.Button,{variant:"primary",onClick:()=>{const e=t.newTemplate(r);n.editContainer(e)}},l.createElement(M.add,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("New monitor"))))),l.createElement(Wr,null,E.length>0&&l.createElement(Hr,null,l.createElement("tbody",null,E))||l.createElement(x.Box,{m:30},l.createElement(x.Box,{p:4,flexDirection:"column",border:"1px solid",borderColor:"subtleBorder",bg:"toolbarBackground",borderRadius:"8px",width:"100%"},l.createElement(x.Box,{flexDirection:"row"},l.createElement(x.Box,{color:"controlFocus"},l.createElement(M.template,{width:64,height:64})),l.createElement(x.Box,{ml:4,flexDirection:"column"},l.createElement(x.Box,{fontWeight:"bold",fontSize:24},r.asTemplateGroup().name),l.createElement(x.Box,{mt:3,fontSize:16,color:"subtleText"},Object(O._t)("Empty template")))),l.createElement(x.Box,{flexDirection:"row",mt:5},l.createElement(x.Box,null,l.createElement(v.Button,{variant:"primary",onClick:()=>{const e=t.newTemplate(r);n.editContainer(e)}},l.createElement(M.add,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Create monitor")))),l.createElement(x.Box,{alignItems:"center",mx:4,fontWeight:"bold",color:"subtleText",fontSize:18},Object(O._t)("Or")),l.createElement(x.Box,null,l.createElement(v.Button,{variant:"error",onClick:()=>{g(r),i(null)}},l.createElement(M.trash,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Delete this template")))))))))||l.createElement(se.VirtualGrid,{position:"absolute",top:55,left:300,bottom:0,right:0,itemWidth:300,itemHeight:200,items:f,bg:"gridBackground",onClick:()=>null},e=>l.createElement(po.Card,{clickable:!0,onClick:()=>i(e),title:e.props.name,width:270,height:140,mt:30,ml:30,adornments:w(e),statusColor:"#0080ff"},l.createElement(qr,null,e.props.icon&&l.createElement(ge.Image,{blob:e.props.icon,width:64})),l.createElement(Zr,{isEmpty:0==e.children.length},e.children.length),l.createElement(x.Box,{flexDirection:"column"},l.createElement(Jr,null,e.props.description)))),n.editingContainer&&l.createElement(Tr.MonitorDialog,{monitor:n.editingContainer.asTemplate(),onClose:()=>n.editingContainer=null,onConfirm:()=>{n.commitContainer(n.editingContainer),n.editingContainer=null}}),m&&l.createElement(Nr,{group:m,onClose:()=>u(null),onConfirm:()=>{m.submit(),t.put(m.model),S.container.put(m.model),c(m.asTemplateGroup().name),i(m.model),u(null)}}),h&&l.createElement(jr,{title:Object(O._t)("Import Templates"),help:Object(O._t)("Select a package file to import."),onClose:()=>p(!1)}))});var Xr=o(85),Qr=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const el=e=>{const{objects:t}=e,o=Qr(e,["objects"]);return l.createElement(lt.Select,Object.assign({options:t},o,{getOptionLabel:t=>t.props[e.nameProp||"name"],getOptionValue:e=>String(e.id)}))};el.defaultProps={};const tl=g.a.div`
    display: flex;
`,ol=g.a.div`
    text-transform: uppercase;
    font-size: 12px;
    color: ${e=>e.theme.colors.subtleText};
    margin-left: 0;
`,nl=Object(s.observer)(e=>{let t;switch(e.permission.resource.category){case Xr.b.Container:const o=e.containers.find(t=>t.id==e.permission.resource.id);t=l.createElement(io.ContainerPicker,{width:380,containers:e.containers,value:o,onChange:t=>{e.permission.resource=t.toMrn()}});break;case Xr.b.Object:const n=e.objects.get(e.permission.resource.id);t=l.createElement(el,{width:380,objects:e.objects.getObjectsOfType(e.permission.resource.class),value:n,onChange:t=>e.permission.resource=t.toMrn()})}return l.createElement(tl,null,t,l.createElement(x.Box,{ml:2,alignItems:"center"},l.createElement(A.Switch,{isChecked:e.permission.action.includes(Xr.a.Read),onChange:t=>{t.target.checked?e.permission.action.push(Xr.a.Read):e.permission.action.remove(Xr.a.Read)}}),l.createElement(ol,null,Object(O._t)("Read"))),l.createElement(x.Box,{ml:2,alignItems:"center"},l.createElement(A.Switch,{isChecked:e.permission.action.includes(Xr.a.Write),onChange:t=>{t.target.checked?e.permission.action.push(Xr.a.Write):e.permission.action.remove(Xr.a.Write)}}),l.createElement(ol,null,Object(O._t)("Write"))))}),rl=Object(s.observer)(e=>l.createElement(Jn.MultiInput,{allowDeleteLast:!0,noModify:!0,newValueText:Object(O._t)("Add new permission"),onAdd:()=>{const t=new Xr.e(e.defaultNewTarget,[Xr.a.Read],Xr.c.Allow,e.defaultCascade);e.allPermissions.push(t)},renderInput:t=>l.createElement(nl,{permission:e.visiblePermissions[t],containers:e.containers,objects:e.objects}),values:e.visiblePermissions,onDelete:t=>e.allPermissions.remove(e.visiblePermissions[t])})),ll=g.a.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${e=>e.theme.colors.toolbarBackground};
    border: 1px solid ${e=>e.theme.colors.subtleBorder};
    border-radius: 5px;
    padding: 12px;
    margin-bottom: 10px;
`,il=Object(s.observer)(e=>{const{containerStore:t,objectStore:o,sessionStore:n}=Object(b.useStores)(),[r,i]=l.useState(e.user.isNewUser);l.useEffect(()=>{o.loadType("Dashboard"),o.loadType("AlertGroup")},[]);const a=t.devices,c=t.deviceGroups,s=o.getObjectsOfType("Dashboard"),d=o.getObjectsOfType("AlertGroup"),m=e.user.validate();return r&&!e.user.password&&m.push({message:Object(O._t)("Supply a password")}),l.createElement(bo.PagedDialog,{isOpen:!0,onClose:e.onClose,width:950,height:600,title:e.user.username,confirmText:Object(O._t)("Save"),onConfirm:e.onConfirm,tabWidth:160,validationMessages:m},l.createElement(bo.Page,{title:Object(O._t)("Details")},l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{mb:4},l.createElement(f.TextField,{autoFocus:!0,isDisabled:!e.user.isNewUser,label:Object(O._t)("Login"),value:e.user.username,width:400,onChange:t=>e.user.username=t.target.value})),l.createElement(x.Box,{mb:4},l.createElement(f.TextField,{label:Object(O._t)("Full name"),value:e.user.fullName,width:400,onChange:t=>e.user.setFullName(t.target.value)})),!e.user.isNewUser&&l.createElement(x.Box,{mb:2},l.createElement(w.Checkbox,{isChecked:r,onChange:e=>i(e.target.checked),label:Object(O._t)("Change password")})),l.createElement(x.Box,{mb:4},r&&l.createElement(f.PasswordField,{label:Object(O._t)("Password"),value:e.user.password,width:400,onChange:t=>e.user.setPassword(t.target.value)})),l.createElement(x.Box,{mb:4,alignItems:"center"},l.createElement(A.Switch,{size:"large",isChecked:e.user.isAdmin,isDisabled:n.loggedInAuthId==e.user.username,onChange:t=>e.user.setIsAdmin(t.target.checked)}),l.createElement(x.Box,{ml:1},Object(O._t)("Administrator"))))),l.createElement(bo.Page,{title:Object(O._t)("Devices")},l.createElement(ll,null,l.createElement(A.Switch,{size:"large",isChecked:e.user.hasAllDevicesPermission,isDisabled:e.user.isAdmin,onChange:t=>e.user.setHasAllDevicesPermission(t.target.checked)}),l.createElement(x.Box,{ml:1},Object(O._t)("Allow read/write access to all devices"))),!e.user.hasAllDevicesPermission&&a.length>0&&l.createElement(rl,{containers:t.devices.map(e=>e.container),defaultNewTarget:a[0].container.toMrn(),defaultCascade:[new Xr.d("mrn:container:Monitor:"),new Xr.d("mrn:metric::")],allPermissions:e.user.permissions,visiblePermissions:e.user.devicePermissions})),l.createElement(bo.Page,{title:Object(O._t)("Groups")},l.createElement(ll,null,l.createElement(A.Switch,{size:"large",isChecked:e.user.hasAllDeviceGroupsPermission,isDisabled:e.user.isAdmin,onChange:t=>e.user.setHasAllDeviceGroupsPermission(t.target.checked)}),l.createElement(x.Box,{ml:1},Object(O._t)("Allow read/write access to all device groups"))),!e.user.hasAllDeviceGroupsPermission&&c.length>0&&l.createElement(rl,{containers:t.deviceGroups.map(e=>e.container),defaultNewTarget:c[0].container.toMrn(),defaultCascade:[new Xr.d("mrn:container:Device:"),new Xr.d("mrn:container:Monitor:"),new Xr.d("mrn:metric::")],allPermissions:e.user.permissions,visiblePermissions:e.user.deviceGroupPermissions})),l.createElement(bo.Page,{title:Object(O._t)("Dashboards")},l.createElement(ll,null,l.createElement(A.Switch,{size:"large",isChecked:e.user.hasAllDashboardsPermission,isDisabled:e.user.isAdmin,onChange:t=>e.user.setHasAllDashboardsPermission(t.target.checked)}),l.createElement(x.Box,{ml:1},Object(O._t)("Allow read/write access to all dashboards"))),!e.user.hasAllDashboardsPermission&&s.length>0&&l.createElement(rl,{objects:o,defaultNewTarget:s[0].toMrn(),defaultCascade:[],allPermissions:e.user.permissions,visiblePermissions:e.user.dashboardPermissions})),l.createElement(bo.Page,{title:Object(O._t)("Alert Groups")},l.createElement(ll,null,l.createElement(A.Switch,{size:"large",isChecked:e.user.hasAllAlertGroupsPermission,isDisabled:e.user.isAdmin,onChange:t=>e.user.setHasAllAlertGroupsPermission(t.target.checked)}),l.createElement(x.Box,{ml:1},Object(O._t)("Allow read/write access to all alert groups"))),!e.user.hasAllAlertGroupsPermission&&d.length>0&&l.createElement(rl,{objects:o,defaultNewTarget:d[0].toMrn(),defaultCascade:[],allPermissions:e.user.permissions,visiblePermissions:e.user.alertGroupPermissions})))});var al=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const cl=g.a.div`
    position: relative;
    flex-grow: 1;
`,sl=g.a.div`
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    border: 1px solid ${e=>e.theme.colors.controlBorder};
    background-color: ${e=>e.theme.colors.background};
    display: flex;
    flex-direction: column;
`,dl=(g.a.div`
    display: flex;
    height: 60px;
    border-bottom: 1px solid ${e=>e.theme.colors.controlBorder};
    align-items: center;
    padding: 0 30px;
    font-size: 16px;
    font-weight: bold;
    background-color: ${e=>e.theme.colors.dialogTitlebarBackground};
`,g.a.div`
    background-color: ${e=>e.theme.colors.background};
    border-bottom: 1px solid ${e=>e.theme.colors.controlBorder};
    display: flex;
    padding: 0 30px;
    height: 60px;
    align-items: center;
`,g.a.div`
    height: 100%;
    overflow: auto;

    table {
        width: 100%;
        border-collapse: collapse;
    }

    tr {
    }

    th {
        height: 32px;
        text-align: left;
        padding 0 8px;
        background-color: ${e=>e.theme.colors.dialogTitlebarBackground};
    }

    td {
        height: 48px;
        text-align: left;
        padding 0 8px;
        border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
    }
`),ml=Object(s.observer)(e=>{const{authStore:t,sessionStore:o}=Object(b.useStores)(),[n,r]=l.useState(null),i=l.useCallback(()=>al(void 0,void 0,void 0,(function*(){n.isNewUser&&t.userStore.getByUsername(n.username)?tr.a(Object(O._t)("Error"),Object(O._t)("User $user already exists").replace("$user",n.username),"error"):(n.submit(),yield Object(Se.wrapErrorUI)(S.auth.putUser(n.model,n.model.password)),n.model.isNewUser=!1,r(null))})),[n]),a=t.userStore.display.map(e=>l.createElement("tr",{key:e.username},l.createElement("td",null),l.createElement("td",null,l.createElement(x.Box,{color:"#0080ff"},l.createElement(M.user,{width:32,height:32}))),l.createElement("td",{style:{textAlign:"center"}},e.isAdmin&&l.createElement(x.Box,{justifyContent:"center",color:"ok"},l.createElement(M.check,{width:24,height:24}))),l.createElement("td",null,l.createElement(x.Box,{fontWeight:"bold"},e.username)),l.createElement("td",null,e.fullName),l.createElement("td",{style:{textAlign:"right"}},l.createElement(x.Box,{flexDirection:"row"},l.createElement(v.Button,{isSubtle:!0,onClick:()=>{r(e.toViewModel())}},l.createElement(M.edit,{width:18,height:18})),l.createElement(v.Button,{isSubtle:!0,onClick:()=>{const o=new Xr.f(t.userStore);o.updateFromJs(e.toJs()),o.username=`${Object(O._t)("Copy of")} ${e.username}`,o.isNewUser=!0,r(o.toViewModel())}},l.createElement(x.Box,null,l.createElement(M.copy,{width:18,height:18}))),l.createElement(v.Button,{isSubtle:!0,isDisabled:o.loggedInAuthId==e.username,onClick:()=>Object(Se.wrapErrorUI)(S.auth.deleteUser(e.username))},l.createElement(x.Box,{color:o.loggedInAuthId==e.username?"controlDisabled":"error"},l.createElement(M.trash,{width:18,height:18})))))));return l.createElement(cl,null,l.createElement(de.AppToolbar,null,l.createElement(Sr,null),l.createElement(br,null,Object(O._t)("Users")),l.createElement(x.Box,{ml:3},l.createElement(v.Button,{variant:"primary",onClick:()=>{const e=new Xr.f(t.userStore);e.isNewUser=!0,r(e.toViewModel())}},l.createElement(x.Box,{mr:2},l.createElement(M.add,{width:16,height:16})),Object(O._t)("Add new user")))),l.createElement(x.Box,{left:0,top:55,right:0,bottom:0,position:"absolute",bg:"gridBackground"},l.createElement(sl,null,l.createElement(dl,null,l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{style:{width:22}}),l.createElement("th",{style:{width:48}}),l.createElement("th",{style:{width:48}},Object(O._t)("Admin")),l.createElement("th",{style:{width:300}},Object(O._t)("Login")),l.createElement("th",null,Object(O._t)("Name")),l.createElement("th",{style:{width:100}}))),l.createElement("tbody",null,a))))),n&&l.createElement(il,{user:n,onClose:()=>r(null),onConfirm:i}))});const ul=Object(s.observer)(e=>{const{containerStore:t,blobStore:o}=Object(b.useStores)(),n=l.useRef(Object(De.observable)(e.group.members.slice()));return l.createElement(bo.PagedDialog,{isOpen:!0,onClose:e.onClose,width:900,height:620,title:e.group.name,confirmText:Object(O._t)("Save"),initialPage:e.initialPage,onConfirm:()=>{e.group.clearMembers(),n.current.forEach(t=>{e.group.container.children.includes(t.container)||e.group.container.children.push(t.container)}),e.onConfirm()}},l.createElement(bo.Page,{title:Object(O._t)("Details")},l.createElement(x.Box,{flexDirection:"row"},l.createElement(x.Box,{mr:4},l.createElement(Rr.a,{images:o.images,value:e.group.icon,onChange:t=>e.group.setIcon(t)})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{mb:4},l.createElement(f.TextField,{autoFocus:!0,label:Object(O._t)("Device group name"),value:e.group.name,width:400,onChange:t=>e.group.setName(t.target.value)})),l.createElement(x.Box,{mb:4},l.createElement(f.TextField,{label:Object(O._t)("Device group description"),value:e.group.description,width:400,height:60,isMultiLine:!0,onChange:t=>e.group.setDescription(t.target.value)}))))),l.createElement(bo.Page,{title:Object(O._t)("Members")},l.createElement(Jn.MultiInput,{newValueText:Object(O._t)("Add new group member"),allowDeleteLast:!0,values:n.current,renderInput:e=>l.createElement(io.ContainerPicker,{width:600,containers:t.devices.map(e=>e.container),value:n.current[e].container,onChange:t=>n.current[e]=t.asDevice()}),createNewValue:()=>t.devices[0],onDelete:t=>e.group.container.children.remove(n.current[t].container)})),l.createElement(bo.Page,{title:Object(O._t)("Collection")},l.createElement(Do,{target:e.group,hideInherit:!0})),l.createElement(bo.Page,{title:Object(O._t)("Actions")},l.createElement(Eo.a,{actions:e.group.container.actions,container:e.group.container})))});var hl=o(1643);const pl=g.a.div`
    cursor: ${e=>e.disabled?"auto":"pointer"};
    padding: 0 12px;
    margin: 0px 0;
    width: 240px;
    height: 30px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    align-items: center;
    justify-content: left;
    color: ${e=>e.disabled?e.theme.colors.verySubtleText:e.theme.colors.controlFocus};
    :hover {
        color: ${e=>e.disabled?"auto":"white"};
        background-color: ${e=>e.disabled?"auto":e.theme.colors.controlFocus};

        div {
            color: ${e=>e.disabled?"auto":"white"};
        }
    }
`,bl=g.a.div`
    border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
    margin-bottom: 2px;
    height: 2px;
`,gl=g.a.div`
    display: flex;
    align-items: center;
    font-weight: ${e=>e.default?"bold":"normal"};
    color: ${e=>e.disabled?e.theme.colors.verySubtleText:e.theme.colors.text};
    text-overflow: ellipsis;
    overflow: hidden;
    min-width: 0;
    white-space: nowrap;
    width: 186px;
`,El=Object(s.observer)(e=>{const t=Object(d.b)(),o=e.actions.map(t=>{let o=l.createElement(M.flashRect,{width:20,height:20});const n=t.lastStep();if(n&&n.script.script instanceof fe.ScriptRef){const e=n.script.script.resolve();e&&e.props.icon&&(o=l.createElement(ge.Image,{blob:e.props.icon,width:20,height:20}))}let r=t.name;if(!r&&n&&(r=Object(O._t)("Custom action"),n.script.script instanceof fe.ScriptRef)){const e=n.script.script.resolve();e&&(r=e.name)}return l.createElement(pl,{onClick:()=>{e.onClose(),e.onRunAction(t)},key:t.localId},l.createElement(x.Box,{flexShrink:0,width:30},o),l.createElement(gl,null,r))});return o.length>0&&o.push(l.createElement(bl,{key:"sep"})),o.push(l.createElement(pl,{key:"$create",onClick:()=>{e.onClose(),e.onEditActions()}},l.createElement(x.Box,{width:30},l.createElement(M.flash,{width:20,height:20})),l.createElement(gl,null,Object(O._t)("Edit actions...")))),l.createElement(l.Fragment,null,l.createElement(T.default,{open:e.isOpen,onClose:e.onClose,trigger:l.createElement("div",null),position:"bottom right",contentStyle:{borderRadius:5,padding:0,width:"auto",backgroundColor:t.colors.background},arrowStyle:{backgroundColor:t.colors.background,boxShadow:t.colors.controlBorder+" 1px 1px 1px",left:"auto",right:90},overlayStyle:{zIndex:1}},l.createElement(x.Box,{py:1,flexDirection:"column"},o)))});var xl=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const fl=g.a.div`
    position: absolute;
    right: -10px;
    top: -${e=>e.statusLightSize/2}px;
`,vl=g.a.div`
    display: flex;
    position: absolute;
    right: 5px;
    bottom: 5px;
`,wl=Object(s.observer)(e=>{const[t,o]=l.useState(!1),[n,r]=l.useState(!1),[i,a]=Object(hl.a)({accept:["Monitor"],drop:(e,t)=>{},collect:e=>({isDragObjectOver:e.isOver()})});if(!e.group)return l.createElement(po.Card,{isPlaceholder:!0,width:e.width,height:e.height,statusBarHeight:e.statusBarHeight});const c=l.createElement(l.Fragment,null,l.createElement(fl,{statusLightSize:e.statusLightSize},l.createElement(pe.a,{animate:!1,height:e.statusLightSize,fontSize:e.statusLightFontSize,okCount:e.group.okCount,criticalCount:e.group.errorCount})),l.createElement(vl,{onClick:e=>{e.stopPropagation()}},l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:()=>r(!0)},l.createElement(x.Box,{mr:1},l.createElement(M.flash,{width:16,height:16})),l.createElement(M.downArrow,{width:8,height:8})),l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:e.onEditMembersClick},l.createElement(M.add,{width:16,height:16})),e.onEditClick&&l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:e.onEditClick},l.createElement(M.edit,{width:16,height:16})))),{onEditClick:s}=e,d=xl(e,["onEditClick"]);return l.createElement(l.Fragment,null,l.createElement(po.Card,Object.assign({ref:a,clickable:!0,onClick:e.onClick,isDropHover:i.isDragObjectOver},d,{statusColor:Object(O.statusColorFromStatus)(e.group.status)||"#ccc",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),title:""+e.group.name,adornments:c})),l.createElement(El,{onEditActions:e.onEditActionsClick,onRunAction:e.onRunAction,isOpen:n,onClose:()=>r(!1),actions:n?e.group.container.actions:[]}))});wl.defaultProps={statusLightSize:32,statusLightFontSize:11};const yl=g.a.div`
    flex-grow: 1;
    position: relative;
`;var Sl=Object(s.observer)(e=>{const{containerStore:t,deviceStore:o}=Object(b.useStores)(),[n,r]=l.useState(null),[i,a]=l.useState(null),[c,s]=l.useState(null),[d,m]=l.useState(null),u=l.useCallback(()=>{const e=new be.Container(t);e.class="DeviceGroup",e.contextPriority=100,s(e.toViewModel())},[]),h=l.useCallback(()=>{c.children.filter(e=>!c.children.includes(e)).forEach(e=>{e.parents.remove(c.model),Object(Se.wrapErrorUI)(S.container.put(e))}),c.commit(),c.asDeviceGroup().members.forEach(e=>{e.container.addParent(c.model),Object(Se.wrapErrorUI)(S.container.put(e.container))}),Object(Se.wrapErrorUI)(S.container.put(c)),s(null)},[c]);return l.createElement(yl,null,l.createElement(de.AppToolbar,null,e.showConfigBack&&l.createElement(l.Fragment,null,l.createElement(Sr,null),l.createElement(br,null,Object(O._t)("Device Groups")),l.createElement(v.Button,{variant:"primary",onClick:u},Object(O._t)("New device group")))||l.createElement(lo,null,l.createElement(v.Button,{variant:"primary",onClick:u},Object(O._t)("New device group")))),l.createElement(se.VirtualGrid,{itemWidth:280,itemHeight:160,items:t.sortedDeviceGroups,left:0,top:55,right:0,bottom:0,position:"absolute",bg:"gridBackground",onClick:()=>null},e=>l.createElement(wl,{group:e,onClick:()=>{o.parentFilter=e.container,document.location.href="#/devices"},width:250,height:130,mt:30,ml:30,onRunAction:t=>{a(e.container),r(t)},onEditActionsClick:()=>{m(2),s(e.container.toViewModel())},onEditMembersClick:()=>{m(1),s(e.container.toViewModel())},onEditClick:()=>{m(0),s(e.container.toViewModel())}},"$count $members".replace("$count",String(e.members.length)).replace("$members",1==e.members.length?Object(O._t)("member"):Object(O._t)("members")))),c&&l.createElement(ul,{initialPage:d,group:c.asDeviceGroup(),onClose:()=>s(null),onConfirm:h}),n&&l.createElement(Ye.Dialog,{width:1e3,height:650,isOpen:!0,padding:0,backgroundColor:"toolbarBackground",title:Object(O._t)("Run Action"),onClose:()=>r(null)},l.createElement(x.Box,{p:"20px"},l.createElement(ho.a,{readOnly:!0,runActionImmediately:!0,container:i,action:n}))))}),Ol=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const Cl=g.a.div`
    flex-grow: 1;
    position: relative;
`,Bl=g.a.div`
    width: 250px;
    background-color: ${e=>e.theme.colors.background};
    border-right: 1px solid ${e=>e.theme.colors.controlBorder};
    position: absolute;
    bottom: 0;
    left: 0;
    top: 55px; 
    overflow: auto;
`,jl=g.a.div`
    padding: 0 16px;
    height: 48px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-right: 6px solid ${e=>e.selected?e.theme.colors.controlFocus:"transparent"};
    background-color: ${e=>e.selected?e.theme.colors.cardBackgroundSelected:"transparent"};
    // border-bottom: 1px solid ${e=>e.theme.colors.controlBorder};
`,kl=g.a.div`
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
`,_l=(g.a.div`
    width: 76px;
    height: 76px;
    padding: 2px;
    border-radius: 2px;
    border: 4px solid ${e=>e.selected?e.theme.colors.controlFocus:"transparent"};
`,g.a.div`
    margin-left: -1px;
    margin-top: -1px;
    width: 64px;
    height: 64px;
    border-radius: 2px;
    border: 1px solid ${e=>e.theme.colors.controlFocus};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    // background-color: #76d2ff;
    // background-image: linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%,
    //     transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
    // background-size: 12px 12px;
    background: repeating-linear-gradient(
        45deg,
        rgba(150, 150, 255, 0.0),
        rgba(150, 150, 255, 0.0) 10px,
        rgba(150, 150, 255, 0.1) 10px,
        rgba(150, 150, 255, 0.1) 20px
    );
    background-color: ${e=>e.selected?e.theme.colors.controlFocus:void 0};
`),Dl=g.a.div`
    margin-left: -1px;
    margin-top: -1px;
    width: 64px;
    height: 64px;
    border-radius: 2px;
    border: 1px solid ${e=>e.theme.colors.controlFocus};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${e=>e.selected?e.theme.colors.controlFocus:e.theme.colors.background};
    color: ${e=>e.selected?"white":e.theme.colors.text};
`,Ml=Object(s.observer)(e=>{const t=l.useCallback(()=>{const t=Object(O.makeFullUrl)(e.blob.uuid.substring(0,2)+"/"+e.blob.uuid),o=document.createElement("a");o.download=e.blob.props.name||e.blob.uuid,o.href=t,o.click()},[e.blob]),[o,n]=l.useState(null);l.useEffect(()=>{n(e.blob&&e.blob.name?e.blob.name:"")},[e.blob]);const r=l.useCallback(()=>Ol(void 0,void 0,void 0,(function*(){(yield nt.confirm(nt.MsgboxType.Warning,Object(O._t)("Confirm Delete"),Object(O._t)("Confirm deletion of this blob?"),"",Object(O._t)("Delete"))).ok&&(yield Object(Se.wrapErrorUI)(S.blob.del(e.blob.uuid)),tr.a(Object(O._t)("Deleted"),Object(O._t)("Object has been deleted."),"success"),e.onDeleted())})),[e.blob]),i=l.useCallback(()=>{},[e.blob,o]),a=l.useCallback(()=>{const t=Object(O.makeFullUrl)(`${e.blob.uuid.substring(0,2)}/${e.blob.uuid}`);new Audio(t).play()},[e.blob]),c=l.useCallback(()=>{Object(O.copyToClipboard)(e.blob.uuid),tr.a(Object(O._t)("Copied"),Object(O._t)("Object uuid has been copied to the clipboard."))},[e.blob]);return l.createElement(x.Box,{width:600,bg:"gridBackground",p:2,overflow:"hidden",alignItems:"center"},e.blob&&l.createElement(l.Fragment,null,l.createElement(x.Box,{overflow:"hidden",flexGrow:1},l.createElement(l.Fragment,null,e.blob.isImage&&l.createElement(ge.Image,{height:62,blob:e.blob.asRef()}),e.blob.isAudio&&l.createElement(x.Box,null,e.blob.props.name))),l.createElement(x.Box,{overflow:"hidden",mr:1},l.createElement(Lt.Input,{width:250,value:o,onChange:e=>n(e.target.value),elemAfterInput:l.createElement(v.Button,{isDisabled:!o||o==e.blob.name,isSmall:!0,isSubtle:!0,onClick:i},l.createElement(M.check,{width:16,height:16}))})),l.createElement(x.Box,{alignItems:"center"},e.blob.isAudio&&l.createElement(v.Button,{isSubtle:!0,isSmall:!0,onClick:a},l.createElement(M.play,{width:16,height:16})),l.createElement(v.Button,{"data-rh":Object(O._t)("Copy object UUID"),isSmall:!0,isSubtle:!0,mr:0,onClick:c},l.createElement(x.Box,{fontSize:"9"},"UUID")),l.createElement(v.Button,{"data-rh":Object(O._t)("Download"),isSubtle:!0,isSmall:!0,mr:0,onClick:t},l.createElement(M.download,{width:16,height:16})),l.createElement(v.Button,{isSubtle:!0,"data-rh":Object(O._t)("Delete"),onClick:r},l.createElement(x.Box,{color:"error"},l.createElement(M.trash,{width:16,height:16}))))))}),Il=[{id:"images",label:Object(O._t)("Images"),icon:M.image},{id:"sounds",label:Object(O._t)("Sounds"),icon:M.speaker}],Tl=Object(s.observer)(e=>{const[t,o]=l.useState("images"),[n,r]=l.useState(null),{blobStore:i}=Object(b.useStores)(),a=Il.map(e=>l.createElement(jl,{key:e.id,selected:e.id==t,onClick:()=>o(e.id)},l.createElement(x.Box,{width:48,height:64,flexShrink:0,alignItems:"center"},l.createElement(e.icon,{width:32,height:32})),l.createElement(kl,null,e.label)));l.useEffect(()=>{i.loadRefs()},[]);const c=l.useCallback((e,t,o,n)=>Ol(void 0,void 0,void 0,(function*(){const l=yield S.blob.put(e,t,Object.assign({name:o},n));let a=i.refs.find(e=>e.id==l);a||(a=new fe.BlobRef(l,t),i.refs.push(a)),r(a)})),[]);let s=[];"images"==t&&(s=i.images),"sounds"==t&&(s=i.sounds);const d=s.map(e=>l.createElement(l.Fragment,null,e.isImage()&&l.createElement(_l,{selected:e==n,onClick:()=>r(e)},l.createElement(ge.Image,{blob:e,width:48})),e.isAudio()&&l.createElement(Dl,{selected:e==n,onClick:()=>r(e)},l.createElement(M.speaker,{width:32,height:32}))));return l.createElement(Cl,null,l.createElement(de.AppToolbar,null,l.createElement(Sr,null),l.createElement(br,null,Object(O._t)("File Management"))),l.createElement(Bl,null,a),l.createElement(x.Box,{left:250,top:55,right:0,bottom:0,position:"absolute",flexDirection:"column"},l.createElement(x.Box,{m:3,flexGrow:0},l.createElement(Ml,{blob:n&&n.resolve(),onDeleted:()=>r(null)}),l.createElement(x.Box,{mx:3,flexGrow:1},l.createElement(Or.a,{onUpload:c,text:Object(O._t)("Click to upload a file, or drag and drop here.")}))),l.createElement(x.Box,{mx:3,mb:3,p:2,bg:"gridBackground",flexGrow:1,overflow:"auto",flexWrap:"wrap",gap:0,alignContent:"flex-start"},d)))});const Al=Object(s.observer)(e=>l.createElement(Ye.Dialog,{isOpen:!0,width:650,height:450,title:Object(O._t)("Configure Agent"),onClose:e.onClose,onConfirm:e.onConfirm,confirmText:Object(O._t)("Ok"),closeText:Object(O._t)("Cancel")},l.createElement(x.Box,{flexDirection:"row"},l.createElement(x.Box,{width:100,flexShrink:0},e.icon),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{mb:3,flexDirection:"column"},l.createElement(x.Box,{fontSize:16,fontWeight:"bold",mb:1},e.agent.info.hostname),l.createElement(x.Box,null,e.agent.address)),l.createElement(f.TextField,{isNumber:!0,mb:3,placeholder:e.defaultOptions&&null!=e.defaultOptions.execTimeout?String(e.defaultOptions.execTimeout):"",label:Object(O._t)("Maximum execution timeout in seconds"),help:Object(O._t)("Set the maximum number of seconds a metric will run before timing out. This value overrides any other timeouts you may have set, for example an SNMP timeout."),value:e.agent.execTimeout,onNumberChange:t=>e.agent.execTimeout=t,elemAfterInput:l.createElement(v.Button,{isSubtle:!0,isSmall:!0,onClick:()=>e.agent.execTimeout=null},l.createElement(M.cross,{width:12}))}),l.createElement(f.TextField,{isNumber:!0,mb:0,placeholder:e.defaultOptions&&null!=e.defaultOptions.maxExecs?String(e.defaultOptions.maxExecs):"",label:Object(O._t)("Maximum simultaneous metrics"),help:Object(O._t)("Set the maximum number of metrics that may execute simultaneously on the agent. Larger values require more resources such as CPU and memory."),value:e.agent.maxExecs,onNumberChange:t=>e.agent.maxExecs=t,elemAfterInput:l.createElement(v.Button,{isSubtle:!0,isSmall:!0,onClick:()=>e.agent.maxExecs=null},l.createElement(M.cross,{width:12}))})))));var Pl=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};function $l(e,t=32){let o=l.createElement(x.Box,{color:"color"},l.createElement(M.agent,{width:t,height:t}));switch(e.info.platform.os){case"windows":o=l.createElement(M.windows,{width:t,height:t});break;case"linux":o=l.createElement(M.linux,{width:t,height:t});break;case"macos":o=l.createElement(M.macos,{width:t,height:t})}return o}function Fl(e){return Pl(this,void 0,void 0,(function*(){const t={title:Object(O._t)("Authorizing Agent"),message:Object(O._t)("You have chose to authorize the agent $agent").replace("$agent",e.info.hostname),details:Object(O._t)("You can automatically create a device linked to this agent if you wish."),icon:$l(e),buttons:[{text:Object(O._t)("Authorize"),value:"auth",variant:"primary"},{text:Object(O._t)("Authorize and Create Device"),value:"device",variant:"primary"}]},o=yield nt.show(t);if(o.ok&&(yield Object(Se.wrapErrorUI)(S.agent.authorize(e.info.uuid)),"device"==o.value)){const t=new be.ExecutionTarget(be.ExecutionTargetType.Agent,e.info.uuid);Ao(e.info.hostname,e.address,t)}}))}var zl=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const Rl=o(507),Nl=g.a.div`
    position: relative;
    flex-grow: 1;
`,Gl=g.a.div`
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    border: 1px solid ${e=>e.theme.colors.controlBorder};
    background-color: ${e=>e.theme.colors.background};
    display: flex;
    flex-direction: column;
`,Ll=(g.a.div`
    display: flex;
    height: 60px;
    border-bottom: 1px solid ${e=>e.theme.colors.controlBorder};
    align-items: center;
    padding: 0 30px;
    font-size: 16px;
    font-weight: bold;
    background-color: ${e=>e.theme.colors.dialogTitlebarBackground};
`,g.a.div`
    background-color: ${e=>e.theme.colors.background};
    border-bottom: 1px solid ${e=>e.theme.colors.controlBorder};
    display: flex;
    height: 60px;
    align-items: center;
`),Ul=g.a.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${e=>e.isBlocked?e.theme.colors.error:e.isActive?e.theme.colors.ok:"#ccc"};
`,Vl=g.a.div`
    height: 100%;
    overflow: auto;

    table {
        width: 100%;
        border-collapse: collapse;
    }

    tr {
    }

    th {
        text-align: left;
        background-color: ${e=>e.theme.colors.dialogTitlebarBackground};
        height: 32px;
        padding: 0 8px;
    }

    td {
        height: 48px;
        text-align: left;
        padding 0 8px;
        border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
    }
`,Wl=g.a.div`
    height: 100%;
    display: flex;
    align-items: center;
    border-left: 8px solid ${e=>e.theme.colors.warning};
    background-color: #ffde87;
    padding: 0 30px;
    font-weight: bold;
    font-size: 14px;
    color: ${e=>Rl(e.theme.colors.warning).darken(.4).rgb().string()};
`;var Hl=Object(s.observer)(e=>{const{agentStore:t,configStore:o}=Object(b.useStores)(),[n,r]=l.useState(!1),[i,a]=l.useState(""),[c,s]=l.useState(null),d=l.useMemo(()=>{const e=new be.Agent(t);return e.info={uuid:"$global",hostname:Object(O._t)("Options for all agents"),interfaces:[],platform:{arch:"",os:""}},e.maxExecs=o.agentMaxExecs,e.execTimeout=o.agentExecTimeout,e},[o.agentMaxExecs,o.agentExecTimeout]);let m=n?t.display:t.display.filter(e=>!e.isBlocked);i&&(m=m.filter(e=>{const t=i.toLowerCase();return-1!=e.info.hostname.toLowerCase().indexOf(t)||-1!=e.address.indexOf(t)}));const u=m.map(e=>{const t=$l(e);return l.createElement("tr",{key:e.id},l.createElement("td",null),l.createElement("td",null,e.isAuthorized&&l.createElement(Ul,{"data-rh":e.isActive?Object(O._t)("Connected"):e.isBlocked?Object(O._t)("Blocked"):Object(O._t)("Not connected"),isActive:e.isActive,isBlocked:e.isBlocked})),l.createElement("td",null,e.isLocal&&l.createElement("div",{"data-rh":Object(O._t)("Default local agent")},l.createElement(M.cog,{width:24,heigh:24}))),l.createElement("td",null,l.createElement(x.Box,{position:"relative",justifyContent:"center"},l.createElement(x.Box,{opacity:e.isAuthorized?1:.2},t),e.isPending&&l.createElement(x.Box,{position:"absolute",right:0,bottom:0},l.createElement(M.hourglass,{width:18,height:18})),e.isBlocked&&l.createElement(x.Box,{position:"absolute",right:0,bottom:0,color:"error"},l.createElement(M.block,{width:18,height:18})))),l.createElement("td",null,e.address),l.createElement("td",null,l.createElement(x.Box,{color:e.isBlocked&&"error"},l.createElement(x.Box,{fontWeight:e.isLocal?"bold":void 0},e.info.hostname),e.isLocal?l.createElement(x.Box,{ml:2},"(",Object(O._t)("System Local"),")"):"",e.isPending&&l.createElement(x.Box,{ml:2,display:"inline-box",color:"subtleText"},Object(O._t)("(Pending authorization)")))),l.createElement("td",{style:{textAlign:"center"}},l.createElement(v.Button,{onClick:()=>s(e.toViewModel())},l.createElement(M.cog,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Configure Agent")))),l.createElement("td",{style:{textAlign:"center"}},!e.isAuthorized&&l.createElement(v.Button,{variant:"primary",onClick:()=>Fl(e)},l.createElement(x.Box,{mr:2},l.createElement(M.check,{width:16,height:16})),Object(O._t)("Authorize"))),l.createElement("td",{style:{textAlign:"center"}},!e.isBlocked&&!e.isLocal&&l.createElement(v.Button,{isSubtle:!0,"data-rh":Object(O._t)("Block agent"),onClick:()=>Object(Se.wrapErrorUI)(S.agent.block(String(e.id)))},l.createElement(x.Box,{color:"error"},l.createElement(M.block,{width:18,height:18})))),l.createElement("td",{style:{textAlign:"center"}},o.developerMode&&!e.isLocal&&l.createElement(v.Button,{isSubtle:!0,"data-rh":Object(O._t)("Delete agent"),onClick:()=>zl(void 0,void 0,void 0,(function*(){(yield nt.confirm(nt.MsgboxType.Error,Object(O._t)("Confirm Remove"),Object(O._t)("Remove this agent?"),Object(O._t)("Remove"))).ok&&Object(Se.wrapErrorUI)(S.agent.del(String(e.id)))}))},l.createElement(x.Box,{color:"error"},l.createElement(M.trash,{width:18,height:18})))),l.createElement("td",null,Object(O.formatDateTime)(e.lastPing)))});return l.createElement(Nl,null,l.createElement(de.AppToolbar,null,l.createElement(Sr,null),l.createElement(br,null,Object(O._t)("Agents")),l.createElement(x.Box,{ml:"30px",mr:2,alignItems:"center"},l.createElement(x.Box,{mr:2},l.createElement(M.search,{width:18,height:18})),l.createElement(Lt.Input,{width:300,value:i,placeholder:Object(O._t)("Search..."),onChange:e=>a(e.target.value)}),l.createElement(x.Box,{width:32,justifyContent:"center"},i&&l.createElement(v.Button,{isSubtle:!0,isSmall:!0,onClick:()=>a("")},l.createElement(M.cross,{width:14,height:14})))),l.createElement(x.Box,{alignItems:"center"},l.createElement(A.Switch,{size:"large",isChecked:n,onChange:e=>r(e.target.checked)}),l.createElement(x.Box,{ml:1},Object(O._t)("Show blocked agents")))),l.createElement(x.Box,{left:0,top:55,right:0,bottom:0,position:"absolute",bg:"gridBackground"},l.createElement(Gl,null,l.createElement(Ll,null,l.createElement(x.Box,{ml:3},l.createElement(v.Button,{onClick:()=>s(d.toViewModel())},l.createElement(M.globe,{width:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Configure Global Settings")))),l.createElement(x.Box,{flexGrow:1}),t.pendingCount>0&&l.createElement(Wl,null,l.createElement(x.Box,{mr:3,color:"warning"},l.createElement(M.warning,{width:32,height:32})),Object(O._t)("$count pending agent(s)").replace("$count",t.pendingCount))),l.createElement(Vl,null,l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{style:{width:22}}),l.createElement("th",{style:{width:48}}),l.createElement("th",{style:{width:48}}),l.createElement("th",{style:{width:64}}),l.createElement("th",{style:{width:200}},Object(O._t)("Address")),l.createElement("th",null,Object(O._t)("Hostname")),l.createElement("th",{style:{width:200}}),l.createElement("th",{style:{width:150}}),l.createElement("th",{style:{width:50}}),l.createElement("th",{style:{width:50}}),l.createElement("th",{style:{width:200}},Object(O._t)("Last ping")))),l.createElement("tbody",null,u))))),c&&l.createElement(Al,{defaultOptions:d,onClose:()=>s(null),onConfirm:()=>zl(void 0,void 0,void 0,(function*(){"$global"==c.info.uuid?(yield Object(Se.doWithErrorUI)(()=>zl(void 0,void 0,void 0,(function*(){yield o.setAgentExecTimeout(c.execTimeout||null),yield o.setAgentMaxExecs(c.maxExecs||null)}))),c.submit(),s(null)):(yield Object(Se.wrapErrorUI)(S.agent.update(c)),c.submit(),s(null))})),agent:c,icon:$l(c,64)}))}),Kl=o(433),ql=o(230),Jl=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const Zl=Object(s.observer)(e=>{const{action:t,onEditClick:o,onDeleteClick:n,onRunClick:r}=e,i=Jl(e,["action","onEditClick","onDeleteClick","onRunClick"]),a=ql.a.find(e=>Object(O.setsEq)(new Set(t.trigger.eventTypes),new Set(e.events))),[c,s]=l.useState(!1);let d=a?a.icon:null;d||(d=l.createElement(M.flashRect,{width:20,height:20}));let m=t.name;if(!m&&t.steps.length>0){const e=t.steps[0];e.script&&e.script.script instanceof fe.ScriptRef&&(m=e.script.script.resolve().name)}let u="$count steps";1==t.steps.length&&(u="1 step"),u=u.replace("$count",String(t.steps.length));const h=[{label:Object(O._t)("Attach to a device"),icon:M.network,onClick:()=>{s(!1),e.onAttachDeviceClick()}},{label:Object(O._t)("Create as global action"),icon:M.globe,onClick:()=>{s(!1),e.onAddGlobalClick()}}],p=l.createElement(l.Fragment,null,l.createElement(x.Box,{position:"absolute",right:"5px",bottom:"5px",alignItems:"center"},!e.action.isTemplate&&l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:e=>{e.stopPropagation(),r()},mr:1},l.createElement(M.play,{width:16,height:16})),e.action.isTemplate&&l.createElement(v.Button,{px:"8px",isSubtle:!0,onClick:e=>{e.stopPropagation(),s(!0)}},l.createElement(M.add,{width:16,height:16}),l.createElement(x.Box,{ml:2},l.createElement(M.downArrow,{width:8,height:8}))),l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:o},l.createElement(M.edit,{width:16,height:16}))),t.icon&&l.createElement(x.Box,{position:"absolute",left:-8,top:-8},l.createElement(ge.Image,{blob:t.icon,height:24})));return l.createElement(l.Fragment,null,l.createElement(po.Card,Object.assign({adornments:p},i,{title:m,statusColor:t.color,width:250,height:125,statusBarHeight:8}),l.createElement(x.Box,{flexDirection:"column",mt:1},l.createElement(x.Box,{style:{minWidth:0},height:"24px",overflow:"hidden","data-rh":t.description},l.createElement("div",{style:{textOverflow:"ellipsis",width:"100%",whiteSpace:"nowrap",overflow:"hidden"}},t.description)),l.createElement(x.Box,{flexDirection:"row",alignItems:"center",flexGrow:0,width:"100%"},l.createElement(x.Box,{color:a?a.color:void 0,"data-rh":a?a.format(t.trigger):"","data-rh-at":"top right"},d),l.createElement(x.Box,{mx:"10px",color:"verySubtleText",alignItems:"center","data-rh":u},l.createElement(M.rightArrowThin,{width:16,height:16})),l.createElement(x.Box,{alignItems:"center",mr:"5px",overflow:"hidden"},l.createElement(rt.a,{steps:t.steps,iconSize:20}))))),c&&l.createElement(x.Box,{position:"relative",width:"100%",justifyContent:"flex-end",mt:2},l.createElement(ro,{position:"bottom right",arrowPos:60,itemWidth:240,hideArrow:!0,isOpen:c,items:h,onClose:()=>s(!1)})))});var Yl,Xl=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};!function(e){e[e.Global=0]="Global",e[e.Gallery=1]="Gallery"}(Yl||(Yl={}));const Ql=g.a.div`
    flex-grow: 1;
    position: relative;
    background-color: ${e=>e.theme.colors.gridBackground};
`;var ei=Object(s.observer)(e=>{const{actionStore:t,appStore:o,configStore:n}=Object(b.useStores)(),[r,i]=l.useState(null),[a,c]=l.useState(null),[s,d]=l.useState(Yl.Gallery),m=l.useCallback(()=>Xl(void 0,void 0,void 0,(function*(){yield Object(Se.wrapErrorUI)(S.action.put(r)),r.submit(),i(null)})),[r]),u=l.useCallback(e=>Xl(void 0,void 0,void 0,(function*(){(yield nt.confirm(nt.MsgboxType.Error,Object(O._t)("Confirm"),Object(O._t)("Confirm deletion?"))).ok&&(yield Object(Se.wrapErrorUI)(S.action.del(e.id)),t.delete(e))})),[]),h=l.useCallback(e=>Xl(void 0,void 0,void 0,(function*(){i(new be.Action(t,e).toViewModel())})),[]),p=l.useCallback(e=>Xl(void 0,void 0,void 0,(function*(){if((yield nt.confirm(nt.MsgboxType.Confirm,Object(O._t)("Create Global Action"),Object(O._t)('Create a Global Action for "$action"').replace("$action",e.name),Object(O._t)("Global actions are triggered independently of any system object. Create a global action when you need to trigger a workflow that is not linked to a device, monitor or metric."),Object(O._t)("Create Global Action"))).ok){const t=e.clone();t.id=0,t.uuid="",t.setIsTemplate(!1),t.disabled=!1,i(t.toViewModel())}})),[]),g=l.useCallback(e=>Xl(void 0,void 0,void 0,(function*(){const t=yield nt.prompt(nt.MsgboxType.Input,Object(O._t)("Select Device"),Object(O._t)("Select a device to attach this action to"),Object(O._t)("This action will be created and attached to the selected device. You can further customize the action by editing its properties."),void 0,350,be.Type.Device,void 0,Object(O._t)("Select"),Object(O._t)("Device"));if(t.ok){const n=t.value.resolve().toViewModel(),r=e.clone();r.id=0,r.uuid="",r.setIsTemplate(!1),r.disabled=!1,n.actions.push(r),o.editingDeviceInitialPage=4,o.editingDevice=n}})),[]);return l.createElement(Ql,null,l.createElement(de.AppToolbar,null,l.createElement(Sr,null),l.createElement(br,null,Object(O._t)("Actions")),l.createElement(x.Box,{mr:4},l.createElement(xe.RadioGroup,{value:s,onChange:d},l.createElement(xe.RadioButton,{value:Yl.Gallery},l.createElement(x.Box,{mr:2},l.createElement(M.grid,{width:16,height:16})),Object(O._t)("Template Gallery")),l.createElement(xe.RadioButton,{value:Yl.Global},l.createElement(x.Box,{mr:2},l.createElement(M.globe,{width:16,height:16})),Object(O._t)("Global Actions")))),s==Yl.Gallery&&n.developerMode&&l.createElement(v.Button,{variant:"primary",onClick:()=>h(!0)},l.createElement(M.add,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("New Action Template"))),s==Yl.Global&&l.createElement(v.Button,{variant:"primary",onClick:()=>h(!1)},l.createElement(M.add,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("New Global Action")))),l.createElement(se.VirtualGrid,{itemWidth:280,itemHeight:155,items:s==Yl.Global?t.display:t.templates,left:0,top:55,right:0,bottom:0,position:"absolute",bg:"gridBackground",onClick:()=>null,extraRows:1},e=>l.createElement(Zl,{mt:30,ml:30,clickable:!0,onDeleteClick:()=>u(e),key:e.localId,action:e,onEditClick:()=>i(e.toViewModel()),onClick:()=>i(e.toViewModel()),onRunClick:()=>c(e),onAddGlobalClick:()=>p(e),onAttachDeviceClick:()=>g(e)})),r&&l.createElement(Kl.a,{action:r,onClose:()=>i(null),onConfirm:m}),a&&l.createElement(Ye.Dialog,{width:1e3,height:650,isOpen:!0,padding:0,backgroundColor:"toolbarBackground",title:Object(O._t)("Run Action"),onClose:()=>c(null)},l.createElement(x.Box,{p:"20px"},l.createElement(ho.a,{readOnly:!0,action:a}))))});const ti=g.a.div`
    // border: 1px solid ${e=>e.theme.colors.controlBorder};
    height: 12px;
    width: 100px;
    background-color: ${e=>e.theme.colors.controlBackground};
    // padding: 1px;
`,oi=g.a.div`
    width: ${e=>e.progress}%;
    background-color: ${e=>e.theme.colors.controlFocus};
    height: 100%;
`,ni=g.a.div`
    @keyframes rotating {
        from {
            transform: rotateZ(0deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
    
    ${e=>e.isAnimating?"animation: rotating 5s linear infinite;":""};
`,ri=Object(s.observer)(e=>{const{appStore:t,authStore:o,sessionStore:n,containerStore:r,metricStore:i}=Object(b.useStores)(),a=o.userStore.getByUsername(n.loggedInAuthId),c=t.tasks[t.tasks.length-1],s=c?Math.round(c.progress[0]/c.progress[1]*100):0;return l.createElement(x.Box,{alignItems:"center",borderTop:"1px solid",borderColor:"dialogBorder",bg:t.isKernelConnected?"toolbarBackground":"error",color:t.isKernelConnected?void 0:"white",height:24,pl:30,pr:30,fontSize:12,zIndex:1e4},!t.isKernelConnected&&l.createElement(x.Box,{mr:4,fontWeight:"bold",alignItems:"center"},l.createElement(x.Box,{mr:1},l.createElement(M.warning,{width:16})),Object(O._t)("Kernel is not running")),l.createElement(x.Box,{mr:2},l.createElement(M.user,{width:16,height:16})),l.createElement(x.Box,{mr:3,overflow:"hidden"},a&&a.fullName||n.loggedInAuthId),l.createElement(x.Box,{mr:3},l.createElement(ni,null,(r.isLoading||i.isLoading)&&l.createElement(M.refresh,{width:16,height:16}))),c&&l.createElement(l.Fragment,null,l.createElement(x.Box,{mr:2,onClick:()=>t.hideTaskDlg=!1,style:{cursor:"pointer"}},l.createElement(ti,null,l.createElement(oi,{progress:s}))),l.createElement(x.Box,{onClick:()=>t.hideTaskDlg=!1,style:{cursor:"pointer"}},c.message)),l.createElement(x.Box,{flexGrow:1}),l.createElement(x.Box,{mr:2},l.createElement(M.metrics,{width:16,height:16})),l.createElement(x.Box,{mr:2},`${Object(O.formatNumber)(r.monitorMetricCount,0)} ${Object(O._t)("metrics")}`))}),li=g.a.div`
    font-size: 32px;
`,ii=g.a.div`
    font-size: 16px;
`,ai=g.a.span`
    color: ${e=>e.theme.colors.verySubtleText};
`,ci=g.a.div`
    margin-left: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 32px;
    border-radius: 50%;
    background-color: #4dba8f;
    color: white;
`,si=g.a.div`
`,di=Object(s.observer)(e=>{const[t,o]=l.useState({}),{pluginStore:n}=Object(b.useStores)(),r=n.dialogPages.filter(e=>e.type==V.DialogPageType.About).map(t=>l.createElement(bo.Page,{key:`${t.plugin.uuid}${t.id}`,title:t.name},l.createElement(t.component,Object.assign({plugin:t.plugin},e))));return l.useEffect(()=>{S.system.version().then(o)},[]),l.createElement(bo.PagedDialog,{initialPage:e.initialPage,tabWidth:180,isOpen:!0,onClose:e.onClose,width:800,height:550,title:Object(O._t)("About Monsta")},l.createElement(bo.Page,{title:Object(O._t)("About")},l.createElement(x.Box,{flexDirection:"row",height:"100%"},l.createElement(x.Box,{mr:4},l.createElement(M.monsta,{width:128,height:128})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{flexDirection:"row",alignItems:"center",mb:3},l.createElement(li,null,"Monsta"),l.createElement(ci,null,"5")),l.createElement(ii,null,Object(O._t)("Version")," ",t.release,l.createElement(ai,null,"+","d93e10cbd125d1ddd90533cf1ae46482eb95106d".substr(0,6)),"  (Ratatouille)"),t.sha&&l.createElement(x.Box,{my:2,color:"subtleText"},Object(O._t)("Kernel Version"),": ",t.sha.substr(0,6)),l.createElement(x.Box,{fontSize:12,mt:1},l.createElement("a",{href:"/changelog.html",target:"_blank"},Object(O._t)("See changelog"))),l.createElement(x.Box,{flexGrow:1,pt:40}),l.createElement(si,null,"© 2015 — 2021 Monsta Tecnologia Ltda.")))),r)});var mi=o(313);const ui=g.a.div`
    position: relative;
    height: ${e=>e.height}px;
    overflow: hidden;
`,hi=Object(s.observer)(e=>{const[t,o]=l.useState([-1,-1]);Go.a.map(e=>e.widgetSpec.type).push("Gauge");e.dashboard.widgets.forEach(e=>{e.left,e.width,e.top,e.height});const n=t[0]/1280,r=(t[1],e.dashboard.widgets.map(e=>{let t=Math.ceil(e.height*n),o=Math.ceil(e.width*n),r=e.height*n-5;if(t<0&&(t=0),o<0&&(o=0),r<0&&(r=0),"Text"==e.widgetType)return l.createElement(x.Box,{key:e.localId,left:Math.ceil(e.left*n)+"px",top:Math.ceil(e.top*n)+"px",width:o+"px",height:t+"px",position:"absolute",bg:"subtleBorder"});{const t=Object(Go.c)(e.widgetType);let o=Math.ceil(e.height*n),i=Math.ceil(e.width*n);return o<0&&(o=0),i<0&&(i=0),l.createElement(x.Box,{key:e.localId,alignItems:"center",justifyContent:"center",position:"absolute",color:"controlFocus",border:"1px dashed",borderColor:"gridLines",left:Math.ceil(e.left*n),top:Math.ceil(e.top*n),width:i,height:o},t&&l.createElement(t.icon,{height:r}))}}));return l.createElement(mi.a,{bounds:!0,onResize:e=>{o([e.bounds.width,e.bounds.height])}},({measureRef:t})=>l.createElement(ui,{ref:t,height:e.height},r))});var pi=o(272),bi=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const gi=g.a.div`
    flex-grow: 1;
    position: relative;
    background-color: ${e=>e.theme.colors.gridBackground};
`,Ei=g.a.div`
    display: flex;
    position: absolute;
    right: 5px;
    bottom: 5px;
`,xi=g.a.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -16px;
    right: -16px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    color: white;
    background-color: ${e=>e.theme.colors.controlFocus};
`,fi=Object(s.observer)(e=>{const[t,o]=l.useState(null),n=l.useRef(new qo.a(b.rootStore)).current,r=n.userDashboards;r.sort(Object(O.sortByFunc)(e=>e.props.name)),l.useEffect(()=>(n.listenToEvents(),n.load(),()=>n.unlistenEvents()),[]);const i=e=>l.createElement(Ei,null,!e.isSystem&&l.createElement(v.Button,{color:"error",mr:4,isSmall:!0,isSubtle:!0,onClick:t=>bi(void 0,void 0,void 0,(function*(){t.stopPropagation();"ok"==(yield nt.confirm(nt.MsgboxType.Error,Object(O._t)("Confirm Delete"),e.name,Object(O._t)("Confirm delete dashboard?"),Object(O._t)("Delete"))).value&&S.object.del("Dashboard",e.id)}))},l.createElement(M.trash,{width:16,height:16})),l.createElement(v.Button,{mr:1,isSmall:!0,isSubtle:!0,onClick:t=>{t.stopPropagation(),document.location.hash="#/dashboards/view/"+e.id}},l.createElement(M.search,{width:16,height:16})),l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:t=>{t.stopPropagation(),o(e.toViewModel())}},l.createElement(M.edit,{width:16,height:16})));return l.createElement(gi,null,l.createElement(de.AppToolbar,null,l.createElement(v.Button,{variant:"primary",onClick:()=>{o(new pi.a(n))}},l.createElement(M.add,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("New dashboard")))),l.createElement(x.Box,{flexDirection:"column",position:"absolute",top:55,left:0,bottom:0,right:0},l.createElement(se.VirtualGrid,{display:"flex",flexGrow:1,itemWidth:300,itemHeight:200,items:r,bg:"gridBackground",onClick:()=>{}},e=>l.createElement(po.Card,{clickable:!0,onClick:()=>document.location.hash="#/dashboards/view/"+e.id,title:e.name,width:270,height:170,mt:30,ml:30,adornments:i(e)},e.publishOptions&&l.createElement(xi,null,l.createElement(M.share,{width:16,height:16})),l.createElement(hi,{dashboard:e,height:100})))),t&&l.createElement(Yo,{dashboard:t,onClose:()=>o(null),onConfirm:()=>{t.submit&&t.submit(),S.object.put(t),o(null)}}))});var vi=o(430),wi=o(127),yi=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const Si=g.a.div`
    flex-grow: 1;
    position: relative;
`,Oi=g.a.div`
    position: absolute;
    top: 80px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    border: 1px solid ${e=>e.theme.colors.controlBorder};
    background-color: ${e=>e.theme.colors.background};
    display: flex;
    flex-direction: column;
`,Ci=(g.a.div`
    display: flex;
    height: 60px;
    border-bottom: 1px solid ${e=>e.theme.colors.controlBorder};
    align-items: center;
    padding: 0 30px;
    font-size: 16px;
    font-weight: bold;
    background-color: ${e=>e.theme.colors.dialogTitlebarBackground};
`,g.a.div`
    background-color: ${e=>e.theme.colors.background};
    border-bottom: 1px solid ${e=>e.theme.colors.controlBorder};
    display: flex;
    padding: 0 30px;
    height: 60px;
    align-items: center;
`,g.a.div`
    height: 100%;
    overflow: auto;

    table {
        width: 100%;
        border-collapse: collapse;
    }

    tr {
    }

    th {
        height: 32px;
        text-align: left;
        padding 0 8px;
        background-color: ${e=>e.theme.colors.dialogTitlebarBackground};
    }

    td {
        height: 48px;
        border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
    }
`),Bi=g.a.tr`
    font-weight: ${e=>e.hasChanged?"bold":"normal"};
`,ji=Object(s.observer)(e=>{const{configStore:t}=Object(b.useStores)(),[o,n]=l.useState(""),[r,i]=l.useState(!0),a=Object(s.useObservable)({}),c=Object(s.useObservable)({}),d=t.sortedOptions.filter(e=>!o||(e.key&&e.key.toLowerCase().includes(o.toLowerCase())||e.description&&e.description.toLowerCase().includes(o.toLowerCase()))).map(e=>{const o=new be.Property;o.name=e.key,o.description=e.description,o.type=e.type;let n=t.values[e.key];o.type==be.Type.Bool&&null==n&&(n=!1),null==n&&(n=e.defaultValue||Object(O._t)("No value"));const i=void 0!==e.defaultValue&&e.defaultValue!=n,s=Object(wi.b)(o,c[e.key],(e,t)=>{c[e]=t},500);let d=String(n);return n instanceof fe.BlobRef?d="$blob:"+n.id:n instanceof fe.ScriptRef&&(d="$script:"+n.id),l.createElement(Bi,{key:e.key,hasChanged:i},l.createElement("td",null),l.createElement("td",null,e.key),l.createElement("td",null,e.description),l.createElement("td",null,a[e.key]&&s||l.createElement("div",{style:{width:500}},d)),l.createElement("td",null,!r&&l.createElement(x.Box,null,!a[e.key]&&l.createElement(x.Box,null,l.createElement(v.Button,{isSubtle:!0,onClick:()=>{a[e.key]=!0,c[e.key]=t.values[e.key]}},l.createElement(M.edit,{width:16,height:16})),i&&void 0!==e.defaultValue&&l.createElement(v.Button,{isSubtle:!0,"data-rh":Object(O._t)("Reset to default value"),onClick:()=>yi(void 0,void 0,void 0,(function*(){"ok"==(yield nt.confirm(nt.MsgboxType.Warning,Object(O._t)("Confirm"),Object(O._t)("Reset this configfuration value to its default?"),`${e.description} = ${String(e.defaultValue)}`)).value&&t.set(e.key,e.defaultValue)}))},l.createElement(M.undo,{width:16,height:16}))),a[e.key]&&l.createElement(x.Box,null,l.createElement(x.Box,null,l.createElement(v.Button,{variant:"primary",onClick:()=>{a[e.key]=!1,t.set(e.key,c[e.key])}},l.createElement(x.Box,null,l.createElement(M.check,{width:20,height:20})))),l.createElement(x.Box,null,l.createElement(v.Button,{isSubtle:!0,onClick:()=>a[e.key]=!1},l.createElement(x.Box,{color:"error"},l.createElement(M.cross,{width:16,height:16}))))))))});return l.createElement(Si,null,l.createElement(de.AppToolbar,null,l.createElement(Sr,null),l.createElement(br,null,Object(O._t)("Parameters")),l.createElement(Lt.Input,{width:500,placeholder:Object(O._t)("Search..."),elemBeforeInput:l.createElement(M.search,{width:16,height:16}),elemAfterInput:l.createElement(v.Button,{onClick:()=>n(""),isSmall:!0,isSubtle:!0},l.createElement(M.cross,{width:10,height:10})),value:o,onChange:e=>n(e.target.value)})),l.createElement(x.Box,{left:0,top:55,right:0,bottom:0,position:"absolute",bg:"gridBackground"},l.createElement(x.Box,{borderRadius:2,bg:"background",px:30,my:3,mx:30,p:2,border:"1px solid",borderColor:"controlBorder",height:50,width:"100%",alignItems:"center"},l.createElement(x.Box,{color:"warning",mr:3},l.createElement(M.warning,{width:32,height:32})),l.createElement(x.Box,null,Object(O._t)("Warning: Changing these parameters can impact performance or stability. Incorrect values may cause Monsta to stop working.")),l.createElement(x.Box,{flexGrow:1}),l.createElement(x.Box,null,r&&l.createElement(v.Button,{onClick:()=>yi(void 0,void 0,void 0,(function*(){(yield nt.confirm(nt.MsgboxType.Warning,Object(O._t)("Confirm"),Object(O._t)("Incorrect parameter values may cause Monsta to stop working. Would you like to proceed?"),Object(O._t)("Only attempt to modify these values if you have been advised to do so by our support team."),Object(O._t)("Proceed"))).ok&&i(!1)}))},l.createElement(x.Box,{mr:2,color:"error"},l.createElement(M.padlock,{width:16,height:16})),Object(O._t)("Unlock")))),l.createElement(Oi,null,l.createElement(Ci,null,l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{style:{width:22}}),l.createElement("th",{style:{width:250}},Object(O._t)("Key")),l.createElement("th",null,Object(O._t)("Description")),l.createElement("th",{style:{width:500}},Object(O._t)("Value")),l.createElement("th",{style:{width:150}}))),l.createElement("tbody",null,d))))))}),ki=g.a.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: ${e=>e.subtle?.2:.8};
    background-color: ${e=>e.subtle?e.theme.colors.subtleOverlayBackground:"#000"};
    z-index: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,_i=Object(s.observer)(e=>l.createElement(ki,Object.assign({},e),e.children));var Di=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const Mi=Object(s.observer)(e=>{const[t,o]=l.useState(""),[n,r]=l.useState(""),i=[];return t||i.push({message:Object(O._t)("Set a new password")}),t&&t.length<5&&i.push({message:Object(O._t)("Choose a password with at least 5 characters")}),n||i.push({message:Object(O._t)("Confirm your new password")}),t&&t!=n&&i.push({message:Object(O._t)("Passwords to not confirm")}),l.createElement(Ye.Dialog,{isOpen:!0,title:Object(O._t)("Change Password"),onClose:e.onClose,confirmText:Object(O._t)("Change password"),closeText:Object(O._t)("Cancel"),onConfirm:()=>Di(void 0,void 0,void 0,(function*(){yield Object(Se.wrapErrorUI)(S.auth.changePassword(t)),tr.a(Object(O._t)("Password Changed"),Object(O._t)("Password changed successfully"),"success"),e.onClose()})),validationMessages:i},l.createElement(x.Box,{flexDirection:"row"},l.createElement(x.Box,{color:"controlFocus",mr:5},l.createElement(M.passwordInput,{width:64,height:64})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{mb:3},l.createElement(f.PasswordField,{width:400,autoFocus:!0,label:Object(O._t)("New password"),value:t,onChange:e=>o(e.target.value)})),l.createElement(x.Box,null,l.createElement(f.PasswordField,{width:400,label:Object(O._t)("Confirm new password"),value:n,onChange:e=>r(e.target.value)})))))}),Ii=g.a.div`
    border-radius: 2px;
    border: 1px solid ${e=>e.theme.colors.subtleBorder};
    height: 24px;
    width: 100%;
    padding: 1px;
    // background: linear-gradient(
    //     -45deg,
    //     rgba(150, 150, 255, 0.0),
    //     rgba(150, 150, 255, 0.0) 10px,
    //     rgba(150, 150, 255, 0.1) 10px,
    //     rgba(150, 150, 255, 0.1) 20px
    // );
    background-image: linear-gradient(
        -45deg,
        ${e=>e.theme.colors.subtleBorder} 25%,
        transparent 25%,
        transparent 50%,
        ${e=>e.theme.colors.subtleBorder} 50%,
        ${e=>e.theme.colors.subtleBorder} 75%,
        transparent 75%,
        transparent
    );
    background-size: 40px 40px;
    animation: ${()=>m.f`
    from  { background-position: 40px 0; }
    to    { background-position: 0 0; }
`} 2s linear infinite;
`,Ti=g.a.div`
    width: ${e=>e.progress}%;
    background-color: ${e=>e.theme.colors.controlFocus};
    height: 100%;
`,Ai=Object(s.observer)(e=>{const{appStore:t}=Object(b.useStores)(),o=e.tasks[e.tasks.length-1],n=Math.round(o.progress[0]/o.progress[1]*100);return l.createElement(Ye.Dialog,{isOpen:!0,title:Object(O._t)("Tasks"),onClose:()=>t.hideTaskDlg=!0,closeText:Object(O._t)("Hide"),height:250},l.createElement(x.Box,{mb:2,fontWeight:"bold",color:"subtleText"},o.message),l.createElement(x.Box,null,l.createElement(Ii,null,l.createElement(Ti,{progress:n}))))}),Pi=g.a.div`
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: row;
    top: 50%;
    left: 60px;;
    right: 60px;
    height: 150px;
    margin-top: -75px;
    background-color: #444;
    color: white;
    z-index: 10000;
    border-radius: 10px;
    padding: 20px;
    border: 7px solid #999;
    opacity: ${e=>e.opacity};
    transition: opacity 0.5s ease-in-out;
`,$i=Object(s.observer)(e=>{const[t,o]=l.useState(!1);return l.useEffect(()=>{let t;return e.show||(o(!0),t=setTimeout(()=>o(!1),500)),()=>{t&&clearTimeout(t)}},[e.show]),l.createElement("div",null,(e.show||t)&&l.createElement(Pi,{opacity:!e.show||t?0:1,onClick:()=>{o(!0),e.onClose()}},l.createElement(x.Box,null,l.createElement(M.monstaMono,{width:64,height:64})),l.createElement(x.Box,{flexDirection:"column",ml:4},l.createElement(x.Box,{fontSize:48,fontWeight:"bold"},e.title),e.text&&l.createElement(x.Box,{fontSize:24,mt:1},e.text))))});var Fi=o(150),zi=o(314),Ri=o(422);const Ni=Object(s.observer)(e=>{const{deviceStore:t}=Object(b.useStores)(),[o,n]=l.useState(),[r,i]=l.useState("device"),a=[];o||a.push({message:Object(O._t)("Select a device")});const c=[{label:Object(O._t)("Only this device"),value:"device"},{label:Object(O._t)("Device and its children"),value:"children"},{label:Object(O._t)("Device and all descendants"),value:"descendants"}],s=c.find(e=>e.value==r);return l.createElement(Ye.Dialog,{isOpen:!0,title:Object(O._t)("Add Device"),confirmText:Object(O._t)("Add device"),onClose:e.onClose,onConfirm:()=>e.onConfirm(o,r),validationMessages:a,height:350},l.createElement(f.Field,{mb:4,label:Object(O._t)("Device to add")},l.createElement(vn.a,{devices:t.sorted,value:o,onChange:n})),l.createElement(f.Field,{label:Object(O._t)("Add mode")},l.createElement(lt.Select,{options:c,value:s,onChange:e=>i(e.value)})))}),Gi=g.a.div`
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: row;
    top: 10px;
    left: 20px;;
    right: 20px;
    height: 60px;
    background-color: #333;
    color: white;
    z-index: 1000;
    border-radius: 4px;
    padding: 20px;
    opacity: 0;
    border: 1px solid ${e=>e.theme.colors.dialogBorder};
    animation-name: bounceIn;
    animation-duration: 300ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    @keyframes bounceIn{
      0%{
        opacity: 0;
        transform: scale(0.99, 0.3) translate3d(0,0,0);
      }
      50%{
        opacity: 0.5;
        transform: scale(1.01, 1.1);
      }
      80%{
        opacity: 0.95;
        transform: scale(0.99, 0.89);
      }
      100%{
        opacity: 0.95;
        transform: scale(1, 1) translate3d(0,0,0);
      }
    }
`,Li=Object(s.observer)(e=>e.show?l.createElement(Gi,null,e.children):null);var Ui=o(129);const Vi=Object(s.observer)(e=>{const t=l.useCallback(()=>{e.onConfirm()},[]),o=[{label:Object(O._t)("Rectangle"),value:Fi.b.Rect},{label:Object(O._t)("Circle"),value:Fi.b.Circle}];return l.createElement(Ye.Dialog,{isOpen:!0,title:Object(O._t)("Map Display Options"),confirmText:Object(O._t)("Ok"),closeText:Object(O._t)("Cancel"),width:550,height:450,onClose:e.onClose,onConfirm:t},l.createElement(x.Box,{mb:3,flexDirection:"column"},l.createElement(x.Box,{mb:1,fontWeight:"bold"},Object(O._t)("Node type")),l.createElement(lt.Select,{value:o.find(t=>t.value==e.layout.nodeType)||o[0],onChange:t=>e.layout.setNodeType(t.value),options:o,width:300})),l.createElement(x.Box,{mb:3,flexDirection:"column",width:"100%"},l.createElement(x.Box,{mb:1,fontWeight:"bold"},Object(O._t)("Node size")),l.createElement(x.Box,{alignItems:"center",flexDirection:"row"},l.createElement(Ze.Slider,{disabled:e.layout.nodeType==Fi.b.Rect,domain:[10,500],values:[e.layout.nodeSize],height:12,handleHeight:24,handleWidth:26,onUpdate:t=>e.layout.setNodeSize(t[0])}),l.createElement(x.Box,{py:2,bg:e.layout.nodeType==Fi.b.Circle?"controlFocus":"controlDisabledColor",color:"white",borderRadius:2,ml:4,width:50,justifyContent:"center"},e.layout.nodeSize))),l.createElement(x.Box,{flexDirection:"column",width:"100%"},l.createElement(x.Box,{mb:1,fontWeight:"bold"},Object(O._t)("Vertical spacing")),l.createElement(x.Box,{alignItems:"center",flexDirection:"row"},l.createElement(Ze.Slider,{domain:[0,1e3],values:[e.layout.verticalSpacing],height:12,handleHeight:24,handleWidth:26,onUpdate:t=>e.layout.setVerticalSpacing(t[0])}),l.createElement(x.Box,{py:2,bg:"controlFocus",color:"white",borderRadius:2,ml:4,width:50,justifyContent:"center"},e.layout.verticalSpacing))),l.createElement(x.Box,{flexDirection:"column",width:"100%"},l.createElement(x.Box,{mb:1,fontWeight:"bold"},Object(O._t)("Horizontal spacing")),l.createElement(x.Box,{alignItems:"center",flexDirection:"row"},l.createElement(Ze.Slider,{domain:[0,1e3],values:[e.layout.horizontalSpacing],height:12,handleHeight:24,handleWidth:26,onUpdate:t=>e.layout.setHorizontalSpacing(t[0])}),l.createElement(x.Box,{py:2,bg:"controlFocus",color:"white",borderRadius:2,ml:4,width:50,justifyContent:"center"},e.layout.horizontalSpacing))))});var Wi=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))},Hi=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const Ki=g.a.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`,qi=Object(s.observer)(e=>{const{appStore:t,containerStore:o}=Object(b.useStores)(),[n,r]=l.useState(!1),[i,a]=l.useState(null),[c,s]=l.useState(null),[d,m]=l.useState([]),[u,h]=l.useState(""),[p,g]=l.useState(null),[E,f]=l.useState(null),w=l.useRef(new zi.a(b.rootStore)).current,y=w.editingLayout,[C,B]=l.useState(!1),{fitView:j}=Object(Ui.useZoomPanHelper)();l.useEffect(()=>{e.ident&&w.loadAndEditByIdent(e.ident,e.ident).then(e=>{w.layoutNodes(e),j()})},[e.ident]);const k=l.useCallback(()=>{r(!1),B(!1)},[B,r]);l.useEffect(()=>{w.isWorking||j()},[w.isWorking,j]),l.useEffect(()=>{if(y){const e=y.nodes.filter(e=>u&&e.container.asDevice().name.toLowerCase().includes(u.toLowerCase()));e.length>0?g(e[0]):g(null)}},[u]);l.useCallback(e=>Wi(void 0,void 0,void 0,(function*(){(yield nt.confirm(nt.MsgboxType.Warning,Object(O._t)("Delete Map"),Object(O._t)("Confirm deletion of node map?"),null,Object(O._t)("Delete"))).ok&&(w.editingLayout=null,yield Object(Se.wrapErrorUI)(S.object.del("NodeLayout",e)),w.loadLayouts())})),[]);const _=l.useCallback((e,t,o)=>{y.addNode({container:e,x:o.x,y:o.y,labels:[]});let n=[];"children"==t?n=e.children.filter(e=>"Device"==e.class):"descendants"!=t&&"parentsAndDescendants"!=t||(n=e.descendants()),"parentsAndDescendants"==t&&(n=n.concat(e.parents.filter(e=>"Device"==e.class))),n&&n.forEach(e=>{y.addNode({container:e,x:null,y:null,labels:[]})}),a(null),w.layoutNodes(y)},[y]);return l.useEffect(()=>{if(!o.isLoading&&(h(""),g(null),y)){if("root"==y.ident){const e=o.rootContainer;e&&_(e,"descendants",{x:null,y:null})}if(y.ident.startsWith("device")){const e=o.get(Number(y.ident.substr(6)));e&&e.asDevice()&&_(e,"parentsAndDescendants",{x:200,y:200})}}},[y,o.isLoading]),l.createElement(Ki,null,l.createElement("div",{style:{flexGrow:0}},l.createElement(de.AppToolbar,null,l.createElement(lo,null),!C&&l.createElement(x.Box,{mr:3},l.createElement(x.Box,{ml:0},l.createElement(v.Button,{onClick:()=>f(y.toViewModel())},l.createElement(M.cog,{width:16,height:16}))),l.createElement(x.Box,{ml:2},l.createElement(v.Button,{isDisabled:!y,onClick:()=>B(!0)},l.createElement(M.design,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Edit Layout"))))),C&&l.createElement(x.Box,{mr:3},l.createElement(v.Button,{mr:1,onClick:()=>{y.name||y.setName(Object(O._t)("No name")),y.save(),k(),w.loadAndEditByIdent(y.ident,y.name)}},l.createElement(x.Box,{color:"ok"},l.createElement(M.check,{width:16,height:16}))),l.createElement(v.Button,{mr:4,onClick:()=>{k(),w.loadAndEditByIdent(y.ident,y.name)}},l.createElement(x.Box,{color:"error"},l.createElement(M.cross,{width:16,height:16}))),l.createElement(v.Button,{"data-rh":Object(O._t)("Layout nodes"),mr:1,onClick:()=>w.layoutNodes(y,!0)},l.createElement(M.group,{width:16,height:16}))))),l.createElement("div",{style:{flexGrow:1,position:"relative"}},l.createElement(Li,{show:n},l.createElement(x.Box,{mr:3},y&&0==y.nodes.length&&l.createElement(M.groups,{width:32,height:32})||l.createElement(M.click,{width:48,height:48})),l.createElement(x.Box,{fontSize:16},y&&0==y.nodes.length&&Object(O._t)("To create a network map, click below to place a Device node in the desired position.")||Object(O._t)("Click on the map to add a Device node in the desired position.")),l.createElement(x.Box,{ml:4,onClick:()=>r(!1)},l.createElement(v.Button,null,Object(O._t)("Cancel")))),w.isWorking&&l.createElement(x.Box,{m:4,color:"subtleText"},l.createElement(Bo.a,{size:64}))||l.createElement(Fi.a,{nodeType:y?y.nodeType:Fi.b.Rect,layoutIdent:y?`${y.ident}${y.layoutIterationCount}}`:"",nodes:y?y.nodes:[],highlightNode:p,isDesign:C,isAddMode:n,onClick:e=>{n&&(r(!1),a(e))},onDragStop:(e,t)=>y.setNodePos(e,t),onMoveEnd:e=>{var{zoom:t}=e,o=Hi(e,["zoom"]);y&&(y.setZoom(t),y.setPosition(o))},onConfigureEdge:s,onRemoveNodes:e=>{C&&e.forEach(e=>y.removeNode(e))},onSelectionChange:e=>{m(e.map(e=>e.container)),t.setSelectedMonitor(null)}})),l.createElement(Yt,{device:C||1!=d.length?null:d[0].asDevice(),onAnimDone:()=>null}),c&&l.createElement(Ri.a,{selectedDevice:c.container.asDevice(),onClose:()=>s(null),onConfirm:e=>{0==c.labels.length&&c.labels.push({metric:e});c.labels[0].metric=e,s(null),y.incLayoutIterationCount()},value:c.labels.length>0?c.labels[0].metric:null,allowDeselect:!0}),i&&l.createElement(Ni,{onClose:()=>a(null),onConfirm:(e,t)=>_(e.container,t,i)}),E&&l.createElement(Vi,{layout:E,onClose:()=>f(null),onConfirm:()=>Wi(void 0,void 0,void 0,(function*(){E.submit(),yield w.layoutNodes(E.model,!0),E.save(),f(null)}))}))}),Ji=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Zi=/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,Yi=g.a.div`
    border-radius: 4px;
    color: ${e=>e.color?e.color:"white"};
    background-color: ${e=>e.theme.colors[e.bg]||e.bg};
    padding: 1px 6px;
    font-size: 11px;
`,Xi=Object(s.observer)(e=>{const t=Zi.test(e.value),o=!t&&Ji.test(e.value);let n=null;return n=e.value?o?l.createElement(Yi,{bg:"controlFocus"},Object(O._t)("IPv6")):t?l.createElement(Yi,{bg:"ok"},Object(O._t)("IPv4")):l.createElement(Yi,{bg:"inactive"},Object(O._t)("Hostname")):l.createElement(Yi,{color:"subtleText",bg:"subtleBorder"},Object(O._t)("Empty")),l.createElement(Lt.Input,Object.assign({},e,{elemAfterInput:n}))}),Qi=g.a.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: absolute;
    top: 104px;
    left: 120px;
    right: 0;
    bottom: 0;
`,ea=g.a.div`
    height: 24px;
    display: flex;
    background-color: ${e=>e.theme.colors.toolbarBackground};
    border-bottom: 1px solid ${e=>e.theme.colors.controlBorder};
`,ta=g.a.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    height: 24px;
    padding: 0 15px;
    color: ${e=>e.selected?e.theme.colors.color:e.theme.colors.menuItemFocusText};
    background-color: ${e=>e.selected?e.theme.colors.dialogBackground:e.theme.colors.controlBorder};
    border-left: 1px solid ${e=>e.theme.colors.controlBorder};
    border-right: 1px solid ${e=>e.theme.colors.controlBorder};
    border-top: 1px solid ${e=>e.theme.colors.controlBorder};
`;var oa;!function(e){e[e.All=0]="All",e[e.MostUsed=1]="MostUsed",e[e.Selected=2]="Selected"}(oa||(oa={}));const na=Object(s.observer)(e=>{const[t,o]=l.useState(""),[n,r]=l.useState(e.initialTab),[i,a]=l.useState([]),c=l.useRef(e.selected.map(e=>e.resolve()));e.selected.forEach(e=>{c.current.find(t=>t.id==e.id)||c.current.push(e.resolve())}),l.useEffect(()=>{S.script.execute_module_func("system","get_most_used_templates",[]).then(e=>{const t=e.args[0].filter(([e,t])=>t>1).slice(0,5).map(([e,t])=>new fe.ContainerRef(e).resolve());a(t)}).catch(e=>{console.error(e)})},[]),l.useEffect(()=>{t&&n!=oa.All&&r(oa.All)},[t]);let s=[];switch(n){case oa.All:s=e.templates;break;case oa.MostUsed:const t=e.templates.filter(e=>"Genérico"==e.props.name),o=e.templates.filter(e=>-1!=["Microsoft - Windows","Linux","Genérico"].indexOf(e.props.name));s=i.length>0?t.concat(i):t.concat(o);break;case oa.Selected:s=c.current}n!=oa.MostUsed&&(s=Object(O.sortByProp)("name",s).filter(e=>!!e.props.icon&&(n==oa.Selected||!t||(!!e.props.name.toUpperCase().includes(t.toUpperCase())||void 0))));const d=s.map((t,o)=>l.createElement("div",{style:{cursor:"pointer"},key:t.localId},l.createElement(x.Box,{flexDirection:"row",py:3,borderBottom:"1px solid",borderColor:"subtleBorder",onClick:()=>{const o=e.selected.find(e=>e.id==t.id);e.onChange(t.asRef(),!o)}},l.createElement(x.Box,{mx:2,justifyContent:"center",alignItems:"center"},l.createElement(A.Switch,{size:"large",isChecked:null!=e.selected.find(e=>e.id==t.id),onClick:e=>e.preventDefault()})),l.createElement(x.Box,{width:80,alignItems:"center",justifyContent:"center",flexShrink:0},t.props.icon&&l.createElement(ge.Image,{blob:t.props.icon,width:32})||l.createElement(M.template,{width:32,height:32})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{fontWeight:"bold",fontSize:16},t.props.name),l.createElement(x.Box,{mt:1},t.props.description)))));return n==oa.MostUsed&&d.push(l.createElement(x.Box,{key:"all",flexDirection:"row",py:3,borderBottom:"1px solid",borderColor:"subtleBorder",px:3,fontSize:16,fontWeight:"bold"},l.createElement("a",{href:"#",onClick:e=>{r(oa.All),e.preventDefault()}},Object(O._t)("Click to see all $count templates").replace("$count",e.templates.length)))),l.createElement(x.Box,{flexDirection:"column",flexGrow:0},l.createElement(x.Box,{height:80,p:3,bg:"toolbarBackground",flexDirection:"row"},l.createElement(x.Box,{mr:3},Object(O._t)("Select one or more templates that match the type of device.")),l.createElement(x.Box,{flexGrow:1,justifyContent:"flex-end"},l.createElement("div",null,l.createElement(Lt.Input,{autoFocus:!0,width:300,elemBeforeInput:l.createElement(M.search,{width:16,height:16}),value:t,onChange:e=>o(e.target.value),elemAfterInput:l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:()=>o("")},l.createElement(M.cross,{width:12,height:12}))})))),l.createElement(ea,null,l.createElement(ta,{selected:n==oa.Selected,onClick:()=>r(oa.Selected)},Object(O._t)("Selected")),l.createElement(ta,{selected:n==oa.MostUsed,onClick:()=>r(oa.MostUsed)},Object(O._t)("Frequently used")),l.createElement(ta,{selected:n==oa.All,onClick:()=>r(oa.All)},Object(O._t)("All"))),l.createElement(Qi,null,n==oa.Selected&&l.createElement(x.Box,{mx:2,my:3},l.createElement(Jn.MultiInput,{width:500,allowDeleteLast:!0,newValueText:Object(O._t)("Add template"),values:e.selected,renderInput:t=>l.createElement(io.ContainerPicker,{width:600,containers:e.templates,value:e.selected[t].resolve(),onChange:o=>{e.selected[t]=o.asRef()}}),createNewValue:()=>{let t=e.templates.find(e=>"Genérico"==e.asTemplateGroup().name);return t||(t=e.templates[0]),t.asRef()}}))||l.createElement(l.Fragment,null,d,0==d.length&&l.createElement(x.Box,{p:4,fontSize:18,color:"subtleText"},Object(O._t)("No templates to show")))))}),ra=Object(s.observer)(e=>{const{agentStore:t,containerStore:o,deviceStore:n,pluginStore:r,scriptStore:i,blobStore:a}=Object(b.useStores)(),[c,s]=l.useState(0!=e.device.container.id),d=l.useRef(Object(De.observable)(e.device.container.parents.filter(e=>"Device"==e.class))),m=l.useRef(Object(De.observable)(e.device.container.parents.filter(e=>"DeviceGroup"==e.class))),[u,h]=l.useState(e.device.uptimeMonitor?e.device.uptimeMonitor.container.toViewModel():null),p=u&&u.metrics.length>0&&u.metrics[0]instanceof ve.a&&u.metrics[0].valueSource?u.metrics[0].valueSource:null,g=p?p.script:null,[E,v]=(p&&p.context,l.useState(new be.ExecutionTarget(be.ExecutionTargetType.Inherit)));l.useEffect(()=>{o.loadClass("TemplateGroup")},[]),l.useEffect(()=>{e.device.container.calcExecutionTarget().then(v)},[e.device]),l.useEffect(()=>{u&&u.id&&u.load()},[u]);const w=r.dialogPages.filter(e=>e.type==V.DialogPageType.Device).map(t=>l.createElement(bo.Page,{key:`${t.plugin.uuid}${t.id}`,title:t.name},l.createElement(t.component,Object.assign({plugin:t.plugin},e))));return l.createElement(bo.PagedDialog,{validationMessages:e.device.validate(),initialPage:e.initialPage?e.initialPage:0,isOpen:!0,onClose:e.onClose,width:800,height:620,title:e.device.name,confirmText:Object(O._t)("Save"),onConfirm:()=>{e.device.container.removeParentsOfClass("Device"),e.device.container.removeParentsOfClass("DeviceGroup"),d.current.forEach(t=>{t&&t.id&&t.id!=e.device.container.id&&e.device.container.addParent(t)}),m.current.forEach(t=>{t&&e.device.container.addParent(t)});const t=e.device.templateGroups.slice();e.device.templateGroups.length=0,t.forEach(t=>{e.device.templateGroups.find(e=>e.id==t.id)||e.device.templateGroups.push(t)}),r.dialogPages.filter(e=>e.type==V.DialogPageType.Device).forEach(t=>{t.onConfirm(e.device.container)}),u&&u.submit(),e.onConfirm(u)}},l.createElement(bo.Page,{title:Object(O._t)("Details")},l.createElement(x.Box,{flexDirection:"row"},l.createElement(x.Box,{mr:4},l.createElement(Rr.a,{images:a.images,value:e.device.icon,onChange:t=>{e.device.setIcon(t),s(!0)}})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{mb:3},l.createElement(f.TextField,{autoFocus:!0,label:Object(O._t)("Device name"),value:e.device.name,width:400,onChange:t=>e.device.setName(t.target.value)})),l.createElement(x.Box,{mb:3},l.createElement(f.Field,{label:Object(O._t)("Device address")},l.createElement(Xi,{width:400,value:e.device.address,onChange:t=>e.device.setAddress(t.target.value)}))),l.createElement(x.Box,{mb:3},l.createElement(f.TextField,{label:Object(O._t)("Device description"),value:e.device.description,width:400,height:60,isMultiLine:!0,onChange:t=>e.device.setDescription(t.target.value)})),l.createElement(x.Box,{mb:3},l.createElement(f.Field,{label:Object(O._t)("Agent")},l.createElement(go.a,{agentMode:!0,isDisabled:e.device.isDisabled||!t.hasNonLocal,agents:t.active,width:400,value:E,onChange:t=>e.device.container.executionTarget=t}))),l.createElement(x.Box,{mb:3,alignItems:"flex-end"},l.createElement(f.Field,{label:Object(O._t)("Uptime monitor")},l.createElement(x.Box,null,l.createElement(Zn.a,{noValueText:Object(O._t)("No upcheck"),width:400,scripts:i.display.filter(e=>"UpCheck"==e.class),value:g instanceof fe.ScriptRef?g:null,onChange:t=>{h(t?Ce(o,e.device.container,t.asRef()).toViewModel():null)}}))))))),l.createElement(bo.Page,{title:Object(O._t)("Templates"),noPadding:!0},l.createElement(na,{initialTab:oa.Selected,templates:o.templateGroups,selected:e.device.templateGroups,onChange:(t,o)=>{const n=e.device.templateGroups.findIndex(e=>e.id==t.id);o?-1==n&&e.device.templateGroups.push(t):-1!=n&&e.device.templateGroups.splice(n,1),!c&&e.device.templateGroups.length>0&&e.device.setIcon(e.device.templateGroups[0].resolve().props.icon)}})),l.createElement(bo.Page,{title:Object(O._t)("Parents")},l.createElement(Jn.MultiInput,{width:500,allowDeleteLast:!0,newValueText:Object(O._t)("Add parent"),values:d.current,renderInput:e=>l.createElement(io.ContainerPicker,{width:600,containers:n.sorted.map(e=>e.container),value:d.current[e],onChange:t=>{d.current[e]=t}}),createNewValue:()=>null,onDelete:t=>{e.device.container.parents.remove(d.current[t])}})),l.createElement(bo.Page,{title:Object(O._t)("Collection")},l.createElement(Do,{target:e.device,showTest:!0})),l.createElement(bo.Page,{title:Object(O._t)("Actions")},l.createElement(Eo.a,{actions:e.device.container.actions,container:e.device.container})),l.createElement(bo.Page,{title:Object(O._t)("Groups")},l.createElement(Jn.MultiInput,{width:500,allowDeleteLast:!0,values:m.current,newValueText:Object(O._t)("Add group"),renderInput:t=>l.createElement(io.ContainerPicker,{width:600,containers:o.sortedDeviceGroups.map(e=>e.container),value:m.current[t],onChange:o=>{const n=e.device.container.parents.findIndex(e=>e==m.current[t]);m.current[t]=o,-1==n?e.device.container.parents.push(o):e.device.container.parents[n]=o}}),createNewValue:()=>null,onDelete:t=>{e.device.container.parents.remove(m.current[t]),m.current.remove(m.current[t])}})),w)});var la=o(255),ia=o(171),aa=o(414),ca=function(e,t,o,n){var r,l=arguments.length,i=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(l<3?r(i):l>3?r(t,o,i):r(t,o))||i);return l>3&&i&&Object.defineProperty(t,o,i),i},sa=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const da=g.a.tr`
    cursor: pointer;
    :hover {
        background-color: ${e=>e.theme.colors.cardBackgroundSelected};
    }
`,ma=g.a.td`
    width: ${e=>e.width?e.width+"px":"auto"};
    padding: 0px 5px;
    height: 36px;
    border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
    ${e=>e.expand&&"max-width: 1px;"}
`,ua=g.a.div`
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    background-color: ${e=>e.selected?e.theme.colors.controlFocus:"transparent"};
    color: white;
    border-radius: 50%;
    margin-right: 15px;
`;class ha{constructor(e,t){this.groups=[],this.templatesState={},this.templateTypeCount={},this.store=e,this.device=t,this.load()}get sortedGroups(){return Object(O.sortByProp)("name",this.groups)}get selected(){return Object.values(this.templatesState).filter(e=>e.selected)}get selectedCount(){return this.selected.length}countTemplatesById(e){let t=0;for(const o in this.templatesState)this.templatesState[o].template.id==e&&(t+=1);return t}getTemplateState(e){if(!this.templatesState[e.localId]){const t=e.clone();t.id=0,t.class="Monitor",t.parents=[this.device.container],this.templatesState[e.localId]={localId:e.localId,template:e,monitor:t,index:this.countTemplatesById(e.id)+1,selected:!1,metricsLoaded:!1,paramsConfigured:!1,get allParamsEntered(){let e=!0;if(this.template.asTemplate().parameters){const t=this.monitor.asMonitor().parameterValues;this.template.asTemplate().parameters.forEach(o=>{o.required&&(t&&null!=t[o.name]&&""!=t[o.name]||(e=!1))})}return e}}}const t=this.templatesState[e.localId];return this.templateTypeCount[e.id]=t.index,t}setSelected(e,t){t&&!e.metricsLoaded?e.monitor.load().then(()=>{e.monitor.metrics.forEach(e=>e.id=0),e.metricsLoaded=!0,e.selected=t}):e.selected=t}setSelectedGroup(e){this.selectedGroup=e}setEditingMonitor(e){this.editingMonitor=e}load(){return sa(this,void 0,void 0,(function*(){const e=yield S.container.get(this.device.templateGroups.map(e=>e.id));this.groups=e.map(e=>{const t=new be.Container(this.store);return t.updateFromJs(e),t})}))}createSelectedMonitors(){const e=this.selected.map(e=>e.monitor);e.forEach(e=>{e.metrics.forEach((t,o)=>{t instanceof be.Metric&&(t.isActive=!0,t.setOrder(o),t.runIntervalSecs=e.asMonitor().runIntervalSecs,t.maxCheckAttempts=e.asMonitor().maxCheckAttempts)})}),S.container.putBulk(e)}}ca([De.observable],ha.prototype,"groups",void 0),ca([De.observable],ha.prototype,"selectedGroup",void 0),ca([De.observable],ha.prototype,"templatesState",void 0),ca([De.observable],ha.prototype,"editingMonitor",void 0),ca([De.observable],ha.prototype,"editingMonitorParamsFor",void 0),ca([De.computed],ha.prototype,"sortedGroups",null),ca([De.computed],ha.prototype,"selected",null),ca([De.computed],ha.prototype,"selectedCount",null),ca([De.action],ha.prototype,"setSelected",null),ca([De.action],ha.prototype,"setSelectedGroup",null),ca([De.action],ha.prototype,"setEditingMonitor",null);const pa=Object(s.observer)(e=>{const{containerStore:t}=Object(b.useStores)(),o=l.useRef(void 0),n=l.useRef(void 0);o.current||(o.current=new ha(t,e.device)),n.current||(n.current=new ia.a);const r=o.current,i=r.sortedGroups,a=r.selectedGroup||r.sortedGroups[0];let c=[];a&&a.asTemplateGroup()&&(c=a.asTemplateGroup().templates.map(t=>{const o=r.getTemplateState(t.container),i=r.templateTypeCount[t.container.id]||0,c=t.parameters&&1==t.parameters.length?t.parameters[0]:null;return l.createElement(da,{key:o.localId},l.createElement(ma,{width:5}),l.createElement(ma,{width:20},l.createElement(w.Checkbox,{isChecked:o.selected,onChange:e=>r.setSelected(o,e.target.checked)})),l.createElement(ma,{width:20,onClick:()=>r.setSelected(o,o.selected=!o.selected)},l.createElement(ge.Image,{blob:t.icon,width:16,height:16})),l.createElement(ma,{expand:!0,onClick:()=>r.setSelected(o,o.selected=!o.selected)},l.createElement(x.Box,{flexDirection:"row",alignItems:"center"},i>1&&l.createElement(ua,{selected:o.selected},o.index),t.name)),l.createElement(ma,{width:300},c&&l.createElement(x.Box,{justifyContent:"center"},Object(wi.b)(c,o.monitor.asMonitor().parameterValues[c.name],(e,t)=>{o.monitor.asMonitor().setParameterValue(e,t),null!=t&&r.setSelected(o,!0)},300,n.current,e.device.container)),t.parameters&&t.parameters.length>0&&!c&&l.createElement(x.Box,{justifyContent:"center"},l.createElement(v.Button,{width:300,isSmall:!0,variant:o.allParamsEntered&&o.paramsConfigured?"primary":"normal",onClick:()=>r.editingMonitorParamsFor=o},l.createElement(x.Box,{mr:2},o.allParamsEntered&&o.paramsConfigured&&l.createElement(M.check,{width:16,height:16}),!o.allParamsEntered&&o.paramsConfigured&&l.createElement(M.warning,{width:16,height:16}),!o.paramsConfigured&&l.createElement(M.cog,{width:16,height:16})),Object(O._t)("Configure $count parameters").replace("$count",t.parameters.length)))),l.createElement(ma,{width:20},l.createElement(x.Box,{flexDirection:"row",justifyContent:"flex-end"},t.parameters&&t.parameters.length>0&&l.createElement(v.Button,{isSmall:!0,isSubtle:!0,onClick:()=>{const e=t.container.clone();a.children.push(e);const o=r.getTemplateState(e);r.setSelected(o,!0)}},l.createElement(M.add,{width:16,height:16})),l.createElement(v.Button,{isSmall:!0,isSubtle:!0,isDisabled:!o.selected||!o.metricsLoaded,onClick:()=>{r.setEditingMonitor(o.monitor.toViewModel())}},l.createElement(M.edit,{width:16,height:16})))))}));const s=Object(O._t)("Create $count $monitors").replace("$count",r.selectedCount).replace("$monitors",1==r.selectedCount?Object(O._t)("monitor"):Object(O._t)("monitors")),d=[];return 0==r.selectedCount&&d.push({message:Object(O._t)("Select at least one monitor")}),r.selected.forEach(e=>{e.allParamsEntered||d.push({message:Object(O._t)("Configure all parameters for monitor $monitor").replace("$monitor",e.monitor.asMonitor().name)})}),l.createElement(Ye.Dialog,{title:Object(O._t)("Create Monitors"),validationMessages:d,isOpen:!0,onClose:e.onClose,width:1200,height:700,padding:0,disableAnimation:!0,confirmText:s,onConfirm:()=>{r.createSelectedMonitors(),e.onClose()}},l.createElement(x.Box,{flexDirection:"row",height:"100%"},l.createElement(zr,{width:250,height:"100%",groups:i,value:a,onChange:e=>r.setSelectedGroup(e)}),l.createElement(x.Box,{overflow:"auto",flexGrow:1},l.createElement("div",{style:{width:"100%"}},l.createElement("table",{cellPadding:0,cellSpacing:0,style:{width:"100%"}},l.createElement("tbody",null,c))))),r.editingMonitor&&l.createElement(la.MonitorSummaryDialog,{monitor:r.editingMonitor.asMonitor(),onClose:()=>r.setEditingMonitor(null),onConfirm:()=>{r.editingMonitor.commit(),r.setEditingMonitor(null)}}),r.editingMonitorParamsFor&&l.createElement(aa.a,{remoteSourceCache:n.current,executionTarget:e.device.container,properties:r.editingMonitorParamsFor.template.asTemplate().parameters,values:r.editingMonitorParamsFor.monitor.asMonitor().parameterValues,onClose:()=>r.editingMonitorParamsFor=null,onConfirm:e=>{for(const t in e)r.editingMonitorParamsFor.monitor.asMonitor().parameterValues[t]=e[t];r.editingMonitorParamsFor.paramsConfigured=!0,r.editingMonitorParamsFor=null}}))});var ba=o(62),ga=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const Ea=g.a.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 30px;
    left: 200px;
    right: 200px;
    height: 60px;
    box-shadow: ${e=>e.theme.shadows.popupNav};
    border-radius: 2px;
    border: 1px solid ${e=>e.theme.colors.subtleBorder};
    background-color: ${e=>e.theme.colors.background};
    z-index: 600;
    font-size: 16px;
`,xa=g.a.div`
    border-top: 7px solid ${e=>e.theme.colors.controlFocus};
`,fa=g.a.div`
    padding: 4px 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-grow: 1;
`,va=g.a.div`
    height: 60px;
    border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
    background-color: ${e=>e.isFocused?e.theme.colors.cardBackgroundSelected:void 0};
    cursor: default;
    display: flex;
    align-items: center;
    padding: 0 15px;

    :hover {
        background-color: ${e=>e.theme.colors.controlFocus};
        color: white;

        * {
            color: white !important;
        }
    }
`,wa=e=>l.createElement(va,{isFocused:e.isFocused,onClick:()=>{e.setValue(e.data)}},l.createElement(x.Box,{width:44,color:"controlFocus"},e.data.icon),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,null,e.data.label),e.data.description&&l.createElement(x.Box,{mt:1,color:"subtleText"},e.data.description)));function ya(e,t){return ga(this,void 0,void 0,(function*(){let o=[];o.push(...yield function(e){return ga(this,void 0,void 0,(function*(){return b.rootStore.deviceStore.sorted.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())).map(e=>{let t=l.createElement(M.network,{width:24,height:24});return e.icon&&(t=l.createElement(ge.Image,{blob:e.icon,height:24})),{id:e.container.id,type:"Device",label:e.name,description:e.description,icon:t,onSelect:()=>{document.location.href="#/devices.detail/view/"+e.container.id}}})}))}(e)),o.push(...yield function(e){return ga(this,void 0,void 0,(function*(){return(yield S.script.getAll()).map(e=>{let t;if(e.props.icon){const o=Object(ba.b)(e.props.icon);t=l.createElement(ge.Image,{blob:o,width:24,height:24})}else{let o=M.script;switch(e.props.class?Object(ba.b)(e.props.class):void 0){case"DataSource":o=M.dataSource;break;case"UpCheck":o=M.upArrow;break;case"InstanceEnumerator":o=M.numberedList;break;case"Action":o=M.flashRect}e.export_as&&(o=M.mod),t=l.createElement(o,{width:24,height:24})}return{id:e.id,type:"Script",label:Object(ba.b)(e.props.name),description:e.props.description?Object(ba.b)(e.props.description):"",icon:t,onSelect:()=>{document.location.href="#/studio/open/"+e.id}}}).filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))}))}(e)),o=Object(O.sortBy)(o,e=>e.label),t(o)}))}const Sa=Object(s.observer)(e=>(Object(Qo.a)("escape",e.onClose,{enableOnTags:["INPUT"]}),l.createElement(l.Fragment,null,l.createElement(_i,{subtle:!0,onClick:e.onClose}),l.createElement(Ea,null,l.createElement(xa,null),l.createElement(fa,null,l.createElement(x.Box,{color:"subtleText",mr:3},l.createElement(M.search,{width:24,height:24})),l.createElement(lt.Select,{autoFocus:!0,isAsync:!0,components:{Option:wa},width:"100%",placeholder:Object(O._t)("Go..."),getOptionLabel:e=>e.label,loadOptions:ya,onChange:t=>{t.onSelect&&t.onSelect(),e.onClose()}}))))));var Oa=o(114),Ca=o(83);const Ba=g.a.div`
    display: flex;
    align-items: center;
    border-left: 8px solid ${e=>e.theme.colors[e.color]||e.color};
    background-color: ${e=>e.theme.colors.background};
    ${e=>e.width?`width: ${e.width}px;`:"width: 100%;"}
    ${e=>e.height?`height: ${e.height}px;`:null}
`,ja=g.a.div`
    display: flex;
    align-items: flex-end;
`,ka=g.a.div`
`,_a=g.a.div`
    font-size: 16px;
    color: ${e=>e.theme.colors.subtleText};
`,Da=Object(s.observer)(e=>{const t=l.useRef(null);e.metric&&(t.current=e.metric instanceof ve.b?e.metric:e.metric.resolve());const o=t.current,n=Object(Be.a)({metrics:o,hours:24}),r=n.length>0?n[0][1]:null;let i=0;if(r&&r.points.length>0){i=r.points.filter(e=>1==e.value).length/r.points.length*100}const a=o&&Object(O.statusColorFromStatus)(o.status)||"#ccc";return l.createElement(Ba,{width:e.width,height:e.height,color:a},l.createElement(x.Box,{ml:3,fontSize:24},o?o.name:""),l.createElement(x.Box,{flexGrow:1}),l.createElement(x.Box,{mr:3,fontSize:32},l.createElement(ja,null,l.createElement(ka,null,Object(O.formatNumber)(i,2).split(",")[0]),l.createElement(_a,null,",",Object(O.formatNumber)(i,2).slice(-2))),l.createElement(x.Box,{mx:2},"/"),l.createElement(ja,null,l.createElement(ka,null,"100"),l.createElement(_a,null,",00")),l.createElement(x.Box,{ml:2},"%")))});Da.defaultProps={fontSize:24,titleFontSize:13,showStatusColor:!1,iconSize:null};const Ma=[{name:"metric",label:Object(O._t)("Metric source"),type:Ko.b.Custom,component:Oa.d},{name:"fontSize",label:Object(O._t)("Font size"),type:Ko.b.Range,min:12,max:200},{name:"titleFontSize",label:Object(O._t)("Title font size"),type:Ko.b.Range,min:12,max:200},{name:"iconSize",label:Object(O._t)("Icon size"),type:Ko.b.Range,min:12,max:200},{name:"showStatusColor",label:Object(O._t)("Show status color"),type:Ko.b.Bool}],Ia=(Object(Ca.b)(Da,{type:"ValueIndicator",icon:M.valueIndicator,defaultWidth:300,defaultHeight:100,properties:Ma}),Object(s.observer)(e=>{const{pluginStore:t}=Object(b.useStores)();let o;"string"==typeof e.event.eventType&&(o=t.getTimelineEventHandlerForId(e.event.eventType));const n=Object(rn.b)(e.event,o);let r="",i="";const a=Object(O.statusColorFromStatus)(e.event.level)||"#ccc";if(e.event.container){const t=e.event.container.asDevice(),o=e.event.container.asMonitor();t&&(r=t.name),o&&(i=o.name,o.deviceParent&&(r=o.deviceParent.props.name))}return l.createElement(Ye.Dialog,{isOpen:!0,title:Object(O._t)("Event"),onClose:e.onClose,width:700,height:500},l.createElement(x.Box,{flexDirection:"row"},l.createElement(x.Box,{mr:4,color:a},Object(rn.c)(e.event,o,48)),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{mb:2},l.createElement(f.TextField,{label:Object(O._t)("Event"),width:400,value:n,isDisabled:!0})),l.createElement(x.Box,{mb:2},l.createElement(f.TextField,{label:Object(O._t)("Device"),width:400,value:r,isDisabled:!0})),l.createElement(x.Box,{mb:2},l.createElement(f.TextField,{label:Object(O._t)("Monitor"),width:400,value:i,isDisabled:!0})),l.createElement(x.Box,{mb:4},l.createElement(f.TextField,{label:Object(O._t)("Timestamp"),width:400,value:e.event.time.toISOString(),isDisabled:!0})),l.createElement(x.Box,null,e.event.actions&&l.createElement(nn,{actionsTaken:e.event.actions})))))}));var Ta=function(e,t,o,n){var r,l=arguments.length,i=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(l<3?r(i):l>3?r(t,o,i):r(t,o))||i);return l>3&&i&&Object.defineProperty(t,o,i),i},Aa=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const Pa=g.a.div`
    flex-grow: 1;
    position: relative;
    background-color: ${e=>e.theme.colors.gridBackground};
`,$a=g.a.div`
	margin: 10px 30px;
	position: absolute;
	left: 20px;
	top: 55px;
	right: 20px;
	bottom: 0;
	display: flex;
	flex-direction: column;
`,Fa=g.a.div`
	font-size: 24px;
	font-weight: bold;
`;class za{constructor(e){this.chartManager=e}setSelectedMonitor(e){this.chartManager.clear(),this.selectedMonitor=e,this.chartManager.loadMetrics(e.metrics.map(e=>e.id),()=>{this.chartManager.metrics.length>0&&this.chartManager.setSelectedMetric(this.chartManager.orderedMetrics[0])})}}Ta([De.observable],za.prototype,"selectedMonitor",void 0),Ta([De.action],za.prototype,"setSelectedMonitor",null);const Ra=Object(s.observer)(e=>{const{appStore:t,containerStore:o,eventStore:n,deviceStore:r,metricStore:i}=Object(b.useStores)(),[a,c]=l.useState(null),s=l.useRef(new pt(i,!1)).current,d=l.useRef(new za(s)).current,m=t.selectedDevice?t.selectedDevice.asDevice():null;let u=st.None;if(s.selectedChart&&(u=ht(s.selectedChart.type)),l.useEffect(()=>{if(e.deviceId){const n=o.get(e.deviceId);t.setSelectedDevice(n)}else r.sorted.length>0&&t.setSelectedDevice(r.sorted[0].container)},[e.deviceId]),l.useEffect(()=>(n.listenToEvents(),()=>{n.unlistenEvents()}),[]),l.useEffect(()=>{if(m&&m.monitors.length>0){const e=m.monitors[0].container;d.setSelectedMonitor(e)}},[m,m?m.monitors.length:0]),l.useEffect(()=>{if(m){const e={pageSize:10};e.containerId=Number(m.container.id),e.includeDerived=!0,n.filterToContainer=m.container,n.load(e)}return()=>{n.clear()}},[m]),!m)return null;const h=Object(O.statusColorFromStatus)(m.status)||"#ccc";let p;m.uptimeMonitor&&m.uptimeMonitor.metrics.length>0&&(p=i.get(m.uptimeMonitor.metrics[0].id));let g=l.createElement(Pe,null);return u==st.Numeric&&(g=l.createElement(je.a,{hours:24,title:d.selectedMonitor.asMonitor().name,metrics:s.selectedChart.metrics})),u==st.Bool&&(g=l.createElement(je.a,{hours:24,title:d.selectedMonitor.asMonitor().name,metrics:[s.selectedMetric],isBoolMode:!0})),u==st.Text&&(g=l.createElement(x.Box,{width:"100%",height:"100%"},l.createElement(tt,{hours:24,metric:s.selectedMetric,boxHeight:300}))),l.createElement(Pa,null,l.createElement(de.AppToolbar,null,l.createElement(lo,null),l.createElement(x.Box,null,l.createElement(vn.a,{width:300,devices:r.sorted,value:m,onChange:e=>t.setSelectedDevice(e.container)}))),l.createElement($a,null,l.createElement(x.Box,{alignItems:"center",pb:3,pl:3,mb:3,borderBottom:"1px solid",borderLeft:"8px solid",borderColor:h},l.createElement(x.Box,{boxShadow:"offset",mr:3,width:64,height:64,borderRadius:"50%",bg:"white",alignItems:"center",justifyContent:"center",overflow:"hidden"},m.icon&&l.createElement(ge.Image,{blob:m.icon,height:32})),l.createElement(x.Box,{flexDirection:"column"},l.createElement(Fa,null,m.name),m.description&&l.createElement(x.Box,{mt:2,flexDirection:"column"},m.description.split("\n").slice(0,2).map(e=>l.createElement("span",null,e)))),l.createElement(x.Box,{flexGrow:1}),l.createElement(pe.a,{height:60,fontSize:16,animate:!1,enableShadow:!1,okCount:m.okCount,warnCount:m.warnCount,criticalCount:m.errorCount})),l.createElement(x.Box,{flexGrow:1,mb:3},l.createElement(x.Box,{flexGrow:1,flexShrink:1,mr:4,position:"relative"},d.selectedMonitor&&l.createElement(x.Box,{p:2,bg:"background",overflow:"hidden",boxShadow:"offset",position:"absolute",left:0,top:0,right:0,bottom:0},g)),l.createElement(x.Box,{flexDirection:"column"},l.createElement(x.Box,{height:60,mb:3,boxShadow:"offset",bg:"background"},p&&l.createElement(Da,{metric:p,height:60})),l.createElement(x.Box,{position:"relative",width:600,flexShrink:0,flexGrow:1,bg:"background"},l.createElement(x.Box,{position:"absolute",boxShadow:"offset",top:0,right:0,bottom:0,width:600},n.display.length>0&&l.createElement(fn,{width:600,events:n.display,eventsExpanded:{},onEventClick:e=>Aa(void 0,void 0,void 0,(function*(){yield n.loadActionsForEvent(e),c(e)})),isSmall:!0})||l.createElement(x.Box,{fontSize:24,color:"subtleText",p:3},l.createElement(M.flag,{width:24,height:24}),l.createElement(x.Box,{ml:3},Object(O._t)("No events"))))))),l.createElement(x.Box,{overflow:"hidden",py:2,flexDirection:"row"},l.createElement(x.Box,{flexGrow:1,mr:4},l.createElement(Ee.c,{selectedMonitor:d.selectedMonitor,isSummarySelected:!1,showSummary:!1,isSubtle:!0,device:m,monitors:m.monitors,onClick:e=>{t.setSelectedMonitor(e.container),d.setSelectedMonitor(e.container)}})))),a&&l.createElement(Ia,{event:a,onClose:()=>c(null)}))}),Na=g.a.div`
	@keyframes bounce {
		0%, 100% {
			transform: translateX(-20%);
			animationTimingFunction: cubic-bezier(0.8, 0, 1, 1);
		}
		50% {
			transform: translateX(0);
			animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);
		}
	}
	
	animation: bounce 1s infinite;
`,Ga=Object(s.observer)(e=>l.createElement(Na,null,l.createElement(M.left,{width:e.size,height:e.size})));var La=function(e,t,o,n){var r,l=arguments.length,i=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(l<3?r(i):l>3?r(t,o,i):r(t,o))||i);return l>3&&i&&Object.defineProperty(t,o,i),i},Ua=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};g.a.tr`
    cursor: pointer;
    :hover {
        background-color: ${e=>e.theme.colors.cardBackgroundSelected};
    }
`,g.a.td`
    width: ${e=>e.width?e.width+"px":"auto"};
    padding: 0px 5px;
    height: 36px;
    border-bottom: 1px solid ${e=>e.theme.colors.subtleBorder};
    ${e=>e.expand&&"max-width: 1px;"}
`,g.a.div`
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    background-color: ${e=>e.selected?e.theme.colors.controlFocus:"transparent"};
    color: white;
    border-radius: 50%;
    margin-right: 15px;
`;const Va=g.a.div`
    display: flex;
    background-color: ${e=>e.theme.colors.gridBackground};
    align-content: flex-start;
    flex-flow: row wrap;
    flex-shrink: 0;
    overflow: auto;
    padding: 2px;
    gap: 0;
    width: ${549+Object(O.getScrollBarWidth)()}px;
    // background: repeating-linear-gradient(
    //     -45deg,
    //     rgba(150, 150, 255, 0.0),
    //     rgba(150, 150, 255, 0.0) 10px,
    //     rgba(150, 150, 255, 0.1) 10px,
    //     rgba(150, 150, 255, 0.1) 20px
    // );
`,Wa=g.a.div`
    display: flex;
    flex-direction: column;
    margin-left: -1px;
    margin-top: -1px;
    // border-radius: 4px;
    background-color: ${e=>e.selected?e.theme.colors.controlFocus:e.theme.colors.cardBackground};
    color: ${e=>e.selected?"white":e.theme.colors.text};
    // border: 1px solid ${e=>e.selected?"white":e.theme.colors.controlFocus};
    border: 1px solid ${e=>e.theme.colors.controlFocus};
    width: 110px;
    height: 110px;
    overflow: hidden;
    padding: 5px;
    flex-shrink: 0;
    cursor: pointer;
    // box-shadow: ${e=>e.selected?e.theme.shadows.offset:void 0};

    :hover {
        // box-shadow: ${e=>e.theme.shadows.offset};
        background-color: ${e=>e.selected?void 0:e.theme.colors.cardBackgroundSelected};
    }
`,Ha=g.a.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`,Ka=g.a.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 42px;
    flex-grow: 0;
    overflow: hidden;
`,qa=g.a.div`
    min-width: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap; 
`;class Ja{constructor(e,t){this.groups=[],this.store=e,this.device=t,this.load()}get sortedGroups(){return Object(O.sortByProp)("name",this.groups)}get allParamsEntered(){let e=!0;if(!this.selectedTemplate||!this.monitor)return e;if(this.selectedTemplate.asTemplate().parameters){const t=this.monitor.asMonitor().parameterValues;this.selectedTemplate.asTemplate().parameters.forEach(o=>{o.required&&(t&&null!=t[o.name]&&""!=t[o.name]||(e=!1))})}return e}setSelectedGroup(e){this.selectedGroup=e}setSelectedTemplate(e){if(e){const t=e.clone();t.id=0,t.class="Monitor",t.parents=[this.device.container],t.load().then(()=>{t.metrics.forEach(e=>e.id=0),this.monitor=t,this.selectedTemplate=e})}else this.monitor=null,this.selectedTemplate=null}setEditingMonitor(e){this.editingMonitor=e}load(){return Ua(this,void 0,void 0,(function*(){const e=yield S.container.get(this.device.templateGroups.map(e=>e.id));this.groups=e.map(e=>{const t=new be.Container(this.store);return t.updateFromJs(e),t}),this.setSelectedGroup(this.groups[0])}))}createMonitor(){this.monitor.metrics.forEach((e,t)=>{e instanceof be.Metric&&(e.isActive=!0,e.setOrder(t),e.runIntervalSecs=this.monitor.asMonitor().runIntervalSecs,e.maxCheckAttempts=this.monitor.asMonitor().maxCheckAttempts)}),Object(Se.wrapErrorUI)(S.container.putBulk([this.monitor]))}}La([De.observable],Ja.prototype,"groups",void 0),La([De.observable],Ja.prototype,"selectedGroup",void 0),La([De.observable],Ja.prototype,"monitor",void 0),La([De.observable],Ja.prototype,"selectedTemplate",void 0),La([De.observable],Ja.prototype,"editingMonitor",void 0),La([De.computed],Ja.prototype,"sortedGroups",null),La([De.computed],Ja.prototype,"allParamsEntered",null),La([De.action],Ja.prototype,"setSelectedGroup",null),La([De.action],Ja.prototype,"setSelectedTemplate",null),La([De.action],Ja.prototype,"setEditingMonitor",null);const Za=Object(s.observer)(e=>{const{containerStore:t}=Object(b.useStores)(),o=l.useRef(new ia.a).current,n=l.useRef(new Ja(t,e.device)).current;let r,i=[];n.selectedGroup&&(i=Object(O.sortBy)(n.selectedGroup.children,e=>e.props.name).map(e=>l.createElement(Wa,{onClick:()=>n.setSelectedTemplate(e),selected:e==n.selectedTemplate},l.createElement(Ha,null,e.props.icon instanceof fe.BlobRef&&l.createElement(ge.Image,{blob:e.props.icon,width:32,height:32})),l.createElement(Ka,null,e.props.name)))),n.selectedTemplate&&n.selectedTemplate.props.icon instanceof fe.BlobRef&&(r=l.createElement(ge.Image,{blob:n.selectedTemplate.props.icon,width:32,height:32}));const a=[];return n.monitor||a.push({message:Object(O._t)("Select a monitor to create")}),n.allParamsEntered||a.push({message:Object(O._t)("Configure all parameters for monitor $monitor").replace("$monitor",n.monitor.asMonitor().name)}),l.createElement(l.Fragment,null,l.createElement(Ye.Dialog,{title:Object(O._t)("Create Monitor"),isOpen:!0,onClose:e.onClose,width:1200,height:700,padding:0,disableAnimation:!0,confirmText:Object(O._t)("Create Monitor"),validationMessages:a,onConfirm:()=>{n.createMonitor(),e.onClose()}},l.createElement(x.Box,{flexDirection:"row",height:"100%"},l.createElement(zr,{width:250,height:"100%",groups:n.groups,value:n.selectedGroup,onChange:e=>n.setSelectedGroup(e)}),l.createElement(Va,null,i),l.createElement(x.Box,{flexGrow:1,borderLeft:"solid 1px",borderColor:"controlBorder",flexDirection:"column",overflow:"hidden"},n.selectedTemplate&&l.createElement(x.Box,{flexDirection:"column",minHeight:0,flexGrow:1},l.createElement(x.Box,{flexDirection:"row",px:"15px",my:2,alignItems:"center",fontWeight:"bold",fontSize:16},l.createElement(x.Box,{mr:3},r),l.createElement(qa,null,n.selectedTemplate.asTemplate().name)),l.createElement(x.Box,{px:"15px",py:"15px",borderBottom:"1px solid",borderColor:"controlBorder"},n.selectedTemplate.asTemplate().description),l.createElement(x.Box,{flexGrow:1,minHeight:0,flexDirection:"column"},n.selectedTemplate.asTemplate().parameters.length>0&&l.createElement(x.Box,{px:"15px",py:1,borderBottom:"1px solid",borderColor:"controlBorder",bg:"toolbarBackground"},Object(O._t)("Properties")),l.createElement(x.Box,{flexGrow:1,minHeight:0,flexDirection:"column"},l.createElement(x.Box,{mb:0,flexDirection:"row",px:"15px",pt:"15px",pb:"7px"},l.createElement(x.Box,{mr:2},l.createElement(Ee.b,{size:64,statusColor:"ok"},l.createElement(Ee.a,null,l.createElement(x.Box,{height:24,mt:"6px",flexShrink:0},l.createElement(M.monitors,{width:24})),l.createElement(x.Box,{flexGrow:1}),l.createElement(x.Box,{fontSize:13,minHeight:24,mx:1,overflow:"hidden",justifyContent:"center"},n.monitor.asMonitor().shortName)))),l.createElement(f.TextField,{width:250,isSmall:!0,label:Object(O._t)("Display name"),help:Object(O._t)("The short display name for this monitor"),value:n.monitor.asMonitor().shortName,onChange:e=>n.monitor.asMonitor().setShortName(e.target.value)})),l.createElement(x.Box,{overflow:"auto",flexGrow:1,minHeight:0,borderTop:"1px solid",borderColor:"controlBorder"},l.createElement(x.Box,{p:"15px",flexGrow:1,minHeight:0},l.createElement(wi.a,{noScroll:!0,fieldWidth:320-Object(O.getScrollBarWidth)(),props:n.selectedTemplate.asTemplate().parameters,onPropChange:(e,t)=>{n.monitor.asMonitor().setParameterValue(e,t)},values:n.monitor.asMonitor().parameterValues,executionTarget:e.device.container,remoteSourceCache:o}))))),l.createElement(x.Box,{flexShrink:0,alignItems:"center",height:60,borderTop:"1px solid",borderColor:"controlBorder",bg:"toolbarBackground",px:"15px"},n.selectedTemplate&&l.createElement(x.Box,null,n.selectedTemplate.metrics.length," ",1==n.selectedTemplate.metrics.length?Object(O._t)("metric"):Object(O._t)("metrics")),l.createElement(x.Box,{flexGrow:1}),l.createElement(x.Box,null,l.createElement(v.Button,{onClick:()=>{n.setEditingMonitor(n.monitor.toViewModel())}},l.createElement(x.Box,{mr:2},l.createElement(M.parameters,{width:16,height:16})),Object(O._t)("Customize...")))))||l.createElement(x.Box,{fontSize:24,color:"verySubtleText",fontWeight:500,p:4,flexDirection:"row",alignItems:"flex-start"},l.createElement(x.Box,{mr:2,color:"verySubtleText"},l.createElement(Ga,{size:32})),l.createElement(x.Box,null,Object(O._t)("Select a monitor")))))),n.editingMonitor&&l.createElement(la.MonitorSummaryDialog,{monitor:n.editingMonitor.asMonitor(),onClose:()=>n.setEditingMonitor(null),onConfirm:()=>{n.editingMonitor.commit(),n.setEditingMonitor(null)}}))});var Ya=o(249),Xa=o(283);const Qa=Object(s.observer)(e=>{const{deviceStore:t}=Object(b.useStores)(),[o,n]=l.useState(),r=[];return o||r.push({message:Object(O._t)("Select a device")}),l.createElement(Ye.Dialog,{isOpen:!0,title:Object(O._t)("Create Map"),confirmText:Object(O._t)("Create Map"),onClose:e.onClose,onConfirm:()=>e.onConfirm(o),validationMessages:r,height:300},l.createElement(f.Field,{mb:4,label:Object(O._t)("Create map from device")},l.createElement(vn.a,{devices:t.sorted,value:o,onChange:n})))});var ec=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function i(e){try{c(n.next(e))}catch(e){l(e)}}function a(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))};const tc=g.a.div`
    flex-grow: 1;
    position: relative;
    background-color: ${e=>e.theme.colors.gridBackground};
`,oc=Object(s.observer)(e=>{const t=l.useRef(new zi.a(b.rootStore)).current,[o,n]=l.useState(!1);l.useEffect(()=>{t.loadLayouts()},[]);l.useCallback(()=>ec(void 0,void 0,void 0,(function*(){const e=yield nt.prompt(nt.MsgboxType.Input,Object(O._t)("New Map"),Object(O._t)("Enter a name for the new node map"));if(e.ok){const o=Object(Ya.v4)(),n=new Xa.a(t);n.setIdent(o),n.setName(e.value),yield n.save(),document.location.href="#/devices.network/"+o}})),[]);return l.createElement(tc,null,l.createElement(de.AppToolbar,null,l.createElement(lo,null)),l.createElement(x.Box,{flexDirection:"column",position:"absolute",top:55,left:0,bottom:0,right:0},l.createElement(se.VirtualGrid,{display:"flex",flexGrow:1,itemWidth:230,itemHeight:150,items:t.layouts,bg:"gridBackground",onClick:()=>{}},e=>l.createElement(po.Card,{clickable:!0,statusColor:"controlFocus",onClick:()=>document.location.hash="#/devices.network/"+e.ident,title:e.name,width:200,height:120,mt:30,ml:30},l.createElement(x.Box,{mt:4,color:"controlFocus",position:"absolute",right:16,bottom:16},l.createElement(M.network,{width:32,height:32}))))),o&&l.createElement(Qa,{onClose:()=>n(!1),onConfirm:e=>ec(void 0,void 0,void 0,(function*(){const o="device"+e.container.id,r=new Xa.a(t);r.setIdent(o),r.setName(e.name),yield r.save(),document.location.href="#/devices.network/"+o,n(!1)}))}))}),nc=g.a.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`,rc=g.a.div`
    flex-grow: 1;
    overflow: auto;
    display: flex;
`,lc=Object(s.observer)(e=>{const t=Object(b.useStores)(),o=t.pluginStore.enabledPlugins.map(e=>l.createElement("div",{key:e.id},e.render())),n=t.appStore.location,r=t.appStore;return Object(Qo.a)("Shift + F",e=>{e.preventDefault(),t.appStore.showOmniSearch=!0}),l.useEffect(()=>{t.agentStore.pendingCount>0&&t.agentStore.pending.forEach(e=>{const t=l.createElement(x.Box,{flexDirection:"column",mt:2},l.createElement(x.Box,{mb:2},Object(O._t)("The following Agent is pending authorization:")),l.createElement(x.Box,{fontWeight:"bold",mb:1},e.info.hostname),l.createElement(x.Box,{mb:3},e.address," (",e.info.platform.os," - ",e.info.platform.arch,")"),l.createElement(x.Box,{justifyContent:"space-between"},l.createElement(v.Button,{variant:"primary","data-rh":Object(O._t)("Allow this agent to communicate with Monsta"),onClick:t=>Fl(e)},l.createElement(M.check,{width:16,height:16}),l.createElement(x.Box,{ml:2},Object(O._t)("Authorize"))),l.createElement(v.Button,{"data-rh":Object(O._t)("If you do not recognize this Agent, click this button to block it.")},l.createElement(x.Box,{color:"error"},l.createElement(M.block,{width:16,height:16})))));tr.a(Object(O._t)("New Agent Detected"),t,"info",0,$l(e,48),null,()=>{document.location.href="#/agents"})})},[t.agentStore.pendingCount]),l.createElement(l.Fragment,null,l.createElement(nc,null,l.createElement(ce,null),l.createElement(rc,null,(({area:e,action:t,id:o,stores:n})=>{if(e.includes("plugin-")){const t=e.split("-"),o=t[1],r=t[2],i=n.pluginStore.getViewByIdPrefix(o,r);if(i)return l.createElement(Ro,{view:i})}const{appStore:r,deviceStore:i}=n;switch(e){case"devices":return l.createElement(Fo,null);case"devices.groups":return l.createElement(Sl,null);case"config.devicegroups":return l.createElement(Sl,{showConfigBack:!0});case"devices.network":return t?l.createElement(Ui.ReactFlowProvider,null,l.createElement(qi,{ident:t})):l.createElement(Ui.ReactFlowProvider,null,l.createElement(oc,null));case"devices.detail":let e=o;return e||(r.selectedDevice?e=Number(r.selectedDevice.id):i.sorted.length>0&&(e=Number(i.sorted[0].container.id))),l.createElement(Ra,{deviceId:e});case"dashboards":return"view"==t?l.createElement(vi.a,{dashboardId:o}):"edit"==t?l.createElement(on,{dashboardId:o}):l.createElement(fi,null);case"events":return l.createElement(Sn,null);case"config":return l.createElement(yr,null);case"plugins":return l.createElement(Ir,null);case"users":return l.createElement(ml,null);case"templates":return l.createElement(Yr,null);case"studio":let n;return o&&(n=Number(o)),l.createElement(dr,{openScriptPage:n});case"blobs":return l.createElement(Tl,null);case"agents":return l.createElement(Hl,null);case"actions":return l.createElement(ei,null);case"params":return l.createElement(ji,null);default:return l.createElement("div",null)}})({area:n.area,action:n.action,id:n.id,stores:t})),l.createElement(ri,null),(t.appStore.isShowingAbout||t.appStore.isShowingAccountInfo)&&l.createElement(di,{onClose:()=>{t.appStore.isShowingAbout=!1,t.appStore.isShowingAccountInfo=!1},initialPage:t.appStore.isShowingAccountInfo?1:0}),o,t.appStore.isChangingPassword&&l.createElement(Mi,{onClose:()=>t.appStore.setChangingPassword(!1)})),!t.appStore.hideTaskDlg&&t.appStore.tasks.length>0&&l.createElement(Ai,{tasks:t.appStore.tasks}),!t.appStore.hasValidKey&&l.createElement(_i,null,l.createElement(x.Box,{color:"#fff",alignItems:"center"},l.createElement(x.Box,null,l.createElement(M.padlock,{width:48,height:48})),l.createElement(x.Box,{ml:4,flexDirection:"column"},l.createElement(x.Box,{fontSize:48},Object(O._t)("Kernel: No valid key")),l.createElement(x.Box,{mt:3,fontSize:16},Object(O._t)("Process monkerneld could not find a valid key."))))),r.editingDevice&&l.createElement(ra,{device:r.editingDevice.asDevice(),initialPage:r.editingDeviceInitialPage,onConfirm:e=>r.commitDevice(e),onClose:()=>r.editingDevice=null}),r.editingContainer&&"Template"!=r.editingContainer.class&&l.createElement(la.MonitorSummaryDialog,{monitor:r.editingContainer.asMonitor(),onClose:()=>r.editingContainer=null,onConfirm:()=>{r.commitContainer(r.editingContainer),r.editingContainer=null}}),r.editingContainerAdvanced&&l.createElement(Tr.MonitorDialog,{monitor:r.editingContainerAdvanced.asMonitor(),onClose:()=>r.editingContainerAdvanced=null,onConfirm:()=>{r.commitContainer(r.editingContainerAdvanced),r.editingContainerAdvanced=null}}),r.addingMultiMonitorsForDevice&&l.createElement(pa,{device:r.addingMultiMonitorsForDevice.asDevice(),onClose:()=>r.addMultiMonitorsForDevice(null)}),r.addingMonitorForDevice&&l.createElement(Za,{device:r.addingMonitorForDevice.asDevice(),onClose:()=>r.addMonitorForDevice(null)}),l.createElement($i,Object.assign({onClose:()=>t.appStore.hudOptions.show=!1},t.appStore.hudOptions)),t.appStore.showOmniSearch&&l.createElement(Sa,{onClose:()=>t.appStore.showOmniSearch=!1}),t.sessionStore.isConnectionLost&&l.createElement(_i,null,l.createElement(x.Box,{color:"#fff",alignItems:"center"},l.createElement(x.Box,null,l.createElement(M.warning,{width:64,height:64})),l.createElement(x.Box,{ml:4,flexDirection:"column"},l.createElement(x.Box,{fontSize:48},Object(O._t)("Connection to server lost")),l.createElement(x.Box,{mt:3,fontSize:16},Object(O._t)("Monsta could not connect to the server. Check your network connectivity and that the Monsta server is online and running."))))))});var ic=o(837);const ac=o.n(ic)()(l),cc=(e,t)=>{const{extra:o}=e.dataset,n=t.split("\n"),r=n.length>1?n.map((e,t)=>l.createElement("p",{style:{padding:0,margin:"0 0 5px 0"},key:t},e)):l.createElement("div",null,t);return l.createElement("div",{className:"react-hint__content",style:{maxWidth:400}},r,o&&l.createElement(x.Box,{inline:!0,p:1,mt:2,bg:"controlFocus",color:"white",borderRadius:2},o))},sc=Object(s.observer)(e=>{const{appStore:t,sessionStore:o}=Object(b.useStores)();return l.createElement(d.a,{theme:t.darkMode?h.a:h.b},l.createElement(m.b,{styles:p.a(t.darkMode?h.a:h.b)}),l.createElement(u.a,null),l.createElement(ac,{autoPosition:!0,events:!0,onRenderContent:cc}),o.isLoggedOut&&l.createElement(D,null)||l.createElement(lc,null))});var dc=o(838),mc=o(1594);const uc=o(157);o(679)(uc),o(429),c()(uc),b.rootStore.sessionStore.authToken&&S.login("$token:"+b.rootStore.sessionStore.authToken),uc.setOptions({global:{useUTC:!1},lang:{loading:Object(O._t)("Loading..."),decimalPoint:",",thousandsSep:".",resetZoom:Object(O._t)("Reset zoom")}}),i.locale("pt"),Object(De.configure)({enforceActions:"never"}),window.addEventListener("beforeunload",(function(e){b.rootStore.containerStore.clear()})),lt.MESSAGES.loading=Object(O._t)("Loading..."),lt.MESSAGES.placeholder=Object(O._t)("Select..."),lt.MESSAGES.noOptions=Object(O._t)("No options"),lt.MESSAGES.create=Object(O._t)("Create"),lt.MESSAGES.creatablePlaceholder=Object(O._t)("Select or type to create a new item"),Ye.Dialog.defaultProps.closeText=Object(O._t)("Close"),bo.PagedDialog.strings.next=Object(O._t)("Next"),bo.PagedDialog.strings.back=Object(O._t)("Back"),Object(ql.b)(),Object(De.autorun)(()=>{Ye.Dialog.defaultProps.disableAnimation=b.rootStore.configStore.disableAnimations}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{b.rootStore.configStore.autoDetectTheme&&b.rootStore.appStore.setDarkMode(e.matches)}),r.render(l.createElement(mc.a,{backend:dc.a},l.createElement(sc,null)),document.getElementById("app"))},429:function(e,t,o){"use strict";o.r(t),o.d(t,"blockNav",(function(){return i})),o.d(t,"unblockNav",(function(){return a}));var n=o(15);const r=(0,o(1584).createHashHistory)();let l=null;function i(e){l=r.block(t=>(document.location.href=n.rootStore.appStore.curLocationToUrl(),e))}function a(){l&&(l(),l=null)}location.hash&&n.rootStore.appStore.setLocationFromPath(location.hash.substring(1)),r.listen((e,t)=>{"POP"==t&&(a(),n.rootStore.appStore.setLocationFromPath(e.pathname))})},790:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}t.default=({styles:e={},...t})=>r.a.createElement("svg",l({viewBox:"0 0 778.478 310.052",fill:"none",strokeLinecap:"square",strokeMiterlimit:"10",xmlns:"http://www.w3.org/2000/svg"},t),r.a.createElement("clipPath",{id:"a"},r.a.createElement("path",{d:"M0 0h778.478v310.053H0V0z"})),r.a.createElement("g",{clipPath:"url(#a)"},r.a.createElement("path",{fill:"none",d:"M0 0h778.478v310.053H0z"}),r.a.createElement("path",{fill:"#fff",d:"M33.73 74.49L25 173.302h22.346l4.888-58.659h.349l20.252 57.96H86.45l20.252-57.96h.699l4.54 58.66h22.696l-9.079-98.815h-23.743L79.82 131.403 57.822 74.489zM190.853 94.392l2.793.698 2.792.699 2.444 1.047 2.446 1.396 2.095 1.397 1.745 1.745 1.745 2.097 1.397 2.095 1.047 2.443 1.047 2.444 1.047 2.443 1.05 5.24.35 5.584-.35 5.588-1.05 5.237-.698 2.443-1.047 2.446-1.396 2.444-1.397 2.094-1.745 2.095-1.745 1.745-2.095 1.748-2.097 1.048-2.793 1.047-2.792 1.047-2.793.35-3.493.348-3.142-.349-3.142-.349-2.795-1.047-2.444-1.047-2.443-1.048-2.095-1.748-1.745-1.745-1.746-2.095-1.399-2.094-1.396-2.444-.698-2.446-1.047-2.443-1.048-5.237-.349-5.588.35-5.585 1.396-5.239.698-2.443 1.047-2.444 1.397-2.443 1.398-2.095 1.746-2.097 1.745-1.745 2.095-1.397 2.443-1.396 2.447-1.047 2.792-.699 2.793-.698zm-3.493-21.997l-4.888.349-4.89.698-4.886 1.397-4.539 1.745-4.191 2.094-4.19 2.447-3.839 2.792-3.493 3.491-3.491 3.49-2.793 3.843-2.446 4.19-2.095 4.54-1.745 4.887-1.396 4.887-.698 5.24V128.96l.698 5.235 1.396 4.89 1.396 4.887 2.095 4.538 2.446 4.192 2.793 3.84 3.141 3.842 3.142 3.142 3.843 2.793 4.189 2.792 4.54 2.095 4.538 1.748 4.888 1.047 5.238.698 5.237.35 5.238-.35 5.237-.698 4.89-1.047 4.537-1.748 4.539-2.095 3.842-2.792 3.84-2.793 3.49-3.142 3.145-3.842 2.793-3.84 2.443-4.192 2.095-4.538 1.748-4.887 1.047-4.89.698-5.236.35-5.239-.35-5.236-.698-5.239-1.047-4.887-1.748-4.887-2.095-4.54-2.443-4.19-3.142-3.842-3.144-3.49-3.491-3.492-3.84-2.792-4.192-2.447-4.189-2.094-4.538-1.745-4.89-1.397-4.887-.698-5.238-.349zM245.32 74.49v98.813h22.347V111.85h.349l39.456 61.454h22.347V74.49h-22.347v61.452h-.349l-39.456-61.452zM376.606 72.395l-2.792.349-3.145.35-2.792.697-3.142 1.048-2.793 1.047-2.446 1.396-2.444 1.746-2.443 1.748-2.095 2.094-2.094 2.095-1.748 2.792-1.396 2.444-1.397 2.795-.698 3.142-.698 3.141v3.491l.349 3.843.698 3.84 1.746 3.49 2.097 3.145 2.792 3.142 3.142 3.141 3.84 2.447 4.192 2.443 8.38 3.84 3.84 2.094 3.142 1.746 2.792 1.748 2.098 2.094.698 1.048.698 1.047.349 1.396.349 1.397-.349 1.396-.35 1.396-.348 1.4-.698 1.046-1.748 1.746-2.095 1.047-2.094 1.047-2.444.35h-6.286l-2.095-.35-4.538-1.396-3.842-1.745-3.84-2.098-5.585-3.84-2.446-1.745-11.174 19.205 2.446 2.094 3.142 2.095 4.19 2.094 5.587 2.444 6.284 2.097 3.493 1.047 3.84.698 3.84.35h8.031l3.491-.35 3.494-.349 3.141-1.047 3.491-.698 3.142-1.399 2.795-1.396 2.793-1.746 2.443-2.094 2.095-2.444 2.094-2.443 1.4-2.796 1.396-3.49 1.047-3.491.698-3.843v-6.632l-.35-2.444-.697-2.097-1.047-2.095-1.048-2.094-1.047-1.745-3.144-3.84-3.491-3.145-3.84-2.792-4.192-2.444-4.189-1.745-8.031-3.494-3.49-1.745-3.143-1.746-2.446-1.745-1.745-1.745-1.397-2.095-.349-.698v-3.144l.698-1.746 1.048-1.396 1.047-1.396 1.745-1.048 2.097-.698 2.444-.349 2.793-.349 3.49.35 3.843.697 3.49 1.047 2.794 1.397 4.54 2.443 1.746 1.048 9.078-18.155-2.097-1.397-2.792-1.398-3.84-1.746-4.19-1.745-5.238-1.397-5.935-1.047-6.635-.698zM410.475 74.49v19.553h23.743v79.26h22.346v-79.26h23.394V74.49zM517.667 104.867l11.173 28.98h-22.347l11.174-28.98zM507.192 74.49l-39.804 98.814h24.092l7.334-19.903h37.708l7.334 19.903h24.092L528.142 74.49z",fillRule:"evenodd"}),r.a.createElement("path",{fill:"#4dba8f",d:"M626.606 125.466h2.444l2.443.352 2.447.698 2.094.698 4.538 2.094 3.843 2.444 98.81-98.814L716.69 6.054l-89.735 89.735-40.504-40.504-26.884 26.887 49.58 49.58 3.842-2.793 4.19-1.745 4.54-1.396 2.444-.352h2.443z",fillRule:"evenodd"}),r.a.createElement("path",{fill:"#40adbd",d:"M685.265 154.447l40.504-40.503-26.887-26.885-49.58 49.93 2.443 3.493 1.746 4.189 1.396 4.54.35 2.444V156.542l-.35 2.444-1.396 4.54-1.746 4.19-2.792 3.842 99.163 99.16L775 244.182l-89.735-89.735z",fillRule:"evenodd"}),r.a.createElement("path",{fill:"#4b63a8",d:"M644.063 176.445l-3.84 2.792-4.189 1.746-4.54 1.396-2.444.35H624.163l-2.444-.35-4.54-1.396-4.19-1.746-3.493-2.443-99.16 99.163 26.535 26.535 89.735-89.735 40.504 40.504 26.885-26.887-49.932-49.93z",fillRule:"evenodd"})))},791:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}t.default=({styles:e={},...t})=>r.a.createElement("svg",l({viewBox:"0 0 778.478 310.052",fill:"none",strokeLinecap:"square",strokeMiterlimit:"10",xmlns:"http://www.w3.org/2000/svg"},t),r.a.createElement("clipPath",{id:"a"},r.a.createElement("path",{d:"M0 0h778.478v310.053H0V0z"})),r.a.createElement("g",{clipPath:"url(#a)"},r.a.createElement("path",{fill:"none",d:"M0 0h778.478v310.053H0z"}),r.a.createElement("path",{fill:"#252156",d:"M33.73 74.49L25 173.302h22.346l4.888-58.659h.349l20.252 57.96H86.45l20.252-57.96h.699l4.54 58.66h22.696l-9.079-98.815h-23.743L79.82 131.403 57.822 74.489zM190.853 94.392l2.793.698 2.792.699 2.444 1.047 2.446 1.396 2.095 1.397 1.745 1.745 1.745 2.097 1.397 2.095 1.047 2.443 1.047 2.444 1.047 2.443 1.05 5.24.35 5.584-.35 5.588-1.05 5.237-.698 2.443-1.047 2.446-1.396 2.444-1.397 2.094-1.745 2.095-1.745 1.745-2.095 1.748-2.097 1.048-2.793 1.047-2.792 1.047-2.793.35-3.493.348-3.142-.349-3.142-.349-2.795-1.047-2.444-1.047-2.443-1.048-2.095-1.748-1.745-1.745-1.746-2.095-1.399-2.094-1.396-2.444-.698-2.446-1.047-2.443-1.048-5.237-.349-5.588.35-5.585 1.396-5.239.698-2.443 1.047-2.444 1.397-2.443 1.398-2.095 1.746-2.097 1.745-1.745 2.095-1.397 2.443-1.396 2.447-1.047 2.792-.699 2.793-.698zm-3.493-21.997l-4.888.349-4.89.698-4.886 1.397-4.539 1.745-4.191 2.094-4.19 2.447-3.839 2.792-3.493 3.491-3.491 3.49-2.793 3.843-2.446 4.19-2.095 4.54-1.745 4.887-1.396 4.887-.698 5.24V128.96l.698 5.235 1.396 4.89 1.396 4.887 2.095 4.538 2.446 4.192 2.793 3.84 3.141 3.842 3.142 3.142 3.843 2.793 4.189 2.792 4.54 2.095 4.538 1.748 4.888 1.047 5.238.698 5.237.35 5.238-.35 5.237-.698 4.89-1.047 4.537-1.748 4.539-2.095 3.842-2.792 3.84-2.793 3.49-3.142 3.145-3.842 2.793-3.84 2.443-4.192 2.095-4.538 1.748-4.887 1.047-4.89.698-5.236.35-5.239-.35-5.236-.698-5.239-1.047-4.887-1.748-4.887-2.095-4.54-2.443-4.19-3.142-3.842-3.144-3.49-3.491-3.492-3.84-2.792-4.192-2.447-4.189-2.094-4.538-1.745-4.89-1.397-4.887-.698-5.238-.349zM245.32 74.49v98.813h22.347V111.85h.349l39.456 61.454h22.347V74.49h-22.347v61.452h-.349l-39.456-61.452zM376.606 72.395l-2.792.349-3.145.35-2.792.697-3.142 1.048-2.793 1.047-2.446 1.396-2.444 1.746-2.443 1.748-2.095 2.094-2.094 2.095-1.748 2.792-1.396 2.444-1.397 2.795-.698 3.142-.698 3.141v3.491l.349 3.843.698 3.84 1.746 3.49 2.097 3.145 2.792 3.142 3.142 3.141 3.84 2.447 4.192 2.443 8.38 3.84 3.84 2.094 3.142 1.746 2.792 1.748 2.098 2.094.698 1.048.698 1.047.349 1.396.349 1.397-.349 1.396-.35 1.396-.348 1.4-.698 1.046-1.748 1.746-2.095 1.047-2.094 1.047-2.444.35h-6.286l-2.095-.35-4.538-1.396-3.842-1.745-3.84-2.098-5.585-3.84-2.446-1.745-11.174 19.205 2.446 2.094 3.142 2.095 4.19 2.094 5.587 2.444 6.284 2.097 3.493 1.047 3.84.698 3.84.35h8.031l3.491-.35 3.494-.349 3.141-1.047 3.491-.698 3.142-1.399 2.795-1.396 2.793-1.746 2.443-2.094 2.095-2.444 2.094-2.443 1.4-2.796 1.396-3.49 1.047-3.491.698-3.843v-6.632l-.35-2.444-.697-2.097-1.047-2.095-1.048-2.094-1.047-1.745-3.144-3.84-3.491-3.145-3.84-2.792-4.192-2.444-4.189-1.745-8.031-3.494-3.49-1.745-3.143-1.746-2.446-1.745-1.745-1.745-1.397-2.095-.349-.698v-3.144l.698-1.746 1.048-1.396 1.047-1.396 1.745-1.048 2.097-.698 2.444-.349 2.793-.349 3.49.35 3.843.697 3.49 1.047 2.794 1.397 4.54 2.443 1.746 1.048 9.078-18.155-2.097-1.397-2.792-1.398-3.84-1.746-4.19-1.745-5.238-1.397-5.935-1.047-6.635-.698zM410.475 74.49v19.553h23.743v79.26h22.346v-79.26h23.394V74.49zM517.667 104.867l11.173 28.98h-22.347l11.174-28.98zM507.192 74.49l-39.804 98.814h24.092l7.334-19.903h37.708l7.334 19.903h24.092L528.142 74.49z",fillRule:"evenodd"}),r.a.createElement("path",{fill:"#4dba8f",d:"M626.606 125.466h2.444l2.443.352 2.447.698 2.094.698 4.538 2.094 3.843 2.444 98.81-98.814L716.69 6.054l-89.735 89.735-40.504-40.504-26.884 26.887 49.58 49.58 3.842-2.793 4.19-1.745 4.54-1.396 2.444-.352h2.443z",fillRule:"evenodd"}),r.a.createElement("path",{fill:"#40adbd",d:"M685.265 154.447l40.504-40.503-26.887-26.885-49.58 49.93 2.443 3.493 1.746 4.189 1.396 4.54.35 2.444V156.542l-.35 2.444-1.396 4.54-1.746 4.19-2.792 3.842 99.163 99.16L775 244.182l-89.735-89.735z",fillRule:"evenodd"}),r.a.createElement("path",{fill:"#4b63a8",d:"M644.063 176.445l-3.84 2.792-4.189 1.746-4.54 1.396-2.444.35H624.163l-2.444-.35-4.54-1.396-4.19-1.746-3.493-2.443-99.16 99.163 26.535 26.535 89.735-89.735 40.504 40.504 26.885-26.887-49.932-49.93z",fillRule:"evenodd"})))},848:function(e,t,o){},849:function(e,t,o){},850:function(e,t,o){}}).default;