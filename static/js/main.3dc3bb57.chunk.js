(this["webpackJsonpreact-native"]=this["webpackJsonpreact-native"]||[]).push([[0],{106:function(e,t,n){e.exports=n(140)},110:function(e,t){},140:function(e,t,n){"use strict";n.r(t);var r=n(145),a=n(1),c=n.n(a),o=n(3),i=n(38),s=n(0),l=n.n(s),u=n(85),f=n(7),p=n(144),d=n(142),m=n(14),g=function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("dis");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=n(104),v=n(55),w=Object.freeze({data:[],error:void 0,loading:!0}),h=n(105),j=n(143);function O(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(!1),f=Object(i.a)(a,2),O=f[0],k=f[1],x=Object(s.useRef)(null),y=Object(s.useCallback)(Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new b.a({bridge:"https://bridge.walletconnect.org",qrcodeModal:{open:function(){return r(!0)},close:function(){return r(!1)}}}),x.current=t,r(!0),t.connected||t.createSession(),t.on("connect",(function(e,t){if(e)throw e;k(!0),console.log(t.params[0])}));case 5:case"end":return e.stop()}}),e)}))),[]),S=(Object(s.useCallback)((function(){g(),r(!1)}),[]),function(){var e=l.a.useState(w),t=Object(i.a)(e,2),n=t[0],r=t[1];return l.a.useEffect((function(){Object(o.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://registry.walletconnect.org/data/wallets.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r({data:Object.values(n),error:void 0,loading:!1}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),r(Object(v.a)(Object(v.a)({},w),{},{error:e.t0,loading:!1}));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[r]),n}().data),C=function(){x.current||console.log("we lost our connection");var e=["Coinbase message - Lets go",x.current.accounts[0]];x.current.signPersonalMessage(e).then((function(e){console.log({result:e}),window.ReactNativeWebView.postMessage(JSON.stringify(e)),k(!1)})).catch((function(e){console.error({error:e})}))};return l.a.createElement(m.a,{style:E.app},l.a.createElement(j.a,null,l.a.createElement(m.a,{style:E.header},l.a.createElement(u.a,{style:E.title},"Connect Self hosted wallet"))),l.a.createElement(d.a,{onPress:y,title:"Connect",color:"green"}),O&&l.a.createElement(p.a,{visible:n},l.a.createElement(d.a,{onPress:C,title:"Sign Message"})),n&&!O&&function(e){var t;return l.a.createElement(p.a,{visible:n},l.a.createElement(d.a,{onPress:function(){return r(!1)},title:"close"}),(null===(t=x.current)||void 0===t?void 0:t.connected)&&l.a.createElement(d.a,{onPress:function(){return x.current.killSession()},title:"disconnect"}),e.filter((function(e){return!!e.mobile.universal})).map((function(e){var t=e.name,n=e.mobile;return l.a.createElement(h.a,{key:t,style:{width:100},onPress:function(){return function(e){var t=x.current.uri;window.ReactNativeWebView&&window.ReactNativeWebView.postMessage("".concat(function(e){var t=e.universal;e.native;return"".concat(t)}(e),"/wc?uri=").concat(encodeURIComponent(t),"&redirectUrl=").concat("coinbase://"))}(n)}},l.a.createElement(u.a,{style:{padding:10}},t))})))}(S))}var E=f.a.create({app:{marginHorizontal:"auto",maxWidth:500},logo:{height:80},header:{padding:20},title:{fontWeight:"bold",fontSize:"1.5rem",marginVertical:"1em",textAlign:"center"},text:{lineHeight:"1.5em",fontSize:"1.125rem",marginVertical:"1em",textAlign:"center"},link:{color:"#1B95E0"},code:{fontFamily:"monospace, monospace"}});r.a.registerComponent("App",(function(){return O})),r.a.runApplication("App",{rootTag:document.getElementById("root")})}},[[106,1,2]]]);
//# sourceMappingURL=main.3dc3bb57.chunk.js.map