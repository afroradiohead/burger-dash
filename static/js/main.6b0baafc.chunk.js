(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(n,t,e){n.exports=e.p+"static/media/Heart.ab952194.svg"},119:function(n,t,e){n.exports=e(231)},124:function(n,t,e){},134:function(n,t){},136:function(n,t){},170:function(n,t){},171:function(n,t){},215:function(n,t,e){n.exports=e.p+"static/media/Bacon.69b1ba40.svg"},216:function(n,t,e){n.exports=e.p+"static/media/Cheese.d02e3b02.svg"},217:function(n,t,e){n.exports=e.p+"static/media/Lettuce.504e3929.svg"},218:function(n,t,e){n.exports=e.p+"static/media/Patty.941742ab.svg"},219:function(n,t,e){n.exports=e.p+"static/media/Pickles.7a6eb1c2.svg"},220:function(n,t,e){n.exports=e.p+"static/media/Tomato.e8d2ab2b.svg"},221:function(n,t,e){var a={"./Bacon.png":222,"./BottomBun.png":223,"./Cheese.png":224,"./Lettuce.png":225,"./Patty.png":226,"./Pickles.png":227,"./Plate.png":64,"./Star.png":65,"./Tomato.png":228,"./TopBun.png":229};function r(n){var t=o(n);return e(t)}function o(n){if(!e.o(a,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return a[n]}r.keys=function(){return Object.keys(a)},r.resolve=o,n.exports=r,r.id=221},222:function(n,t,e){n.exports=e.p+"static/media/Bacon.4ba5aec0.png"},223:function(n,t,e){n.exports=e.p+"static/media/BottomBun.ed25e5c7.png"},224:function(n,t,e){n.exports=e.p+"static/media/Cheese.72ae9cc3.png"},225:function(n,t,e){n.exports=e.p+"static/media/Lettuce.a214e837.png"},226:function(n,t,e){n.exports=e.p+"static/media/Patty.21218fae.png"},227:function(n,t,e){n.exports=e.p+"static/media/Pickles.f6d40fd8.png"},228:function(n,t,e){n.exports=e.p+"static/media/Tomato.54b0224c.png"},229:function(n,t,e){n.exports=e.p+"static/media/TopBun.d403b5ab.png"},230:function(n,t,e){},231:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(36),i=e.n(o),c=(e(124),e(5)),u=e(6),s=e(28),l=e(19),d=e(7),p=e(2),m=e(25),f=e(110),g=e.n(f),b=["Cheese","Pickles","Lettuce","Tomato","Patty","Bacon"],v="375px",x="425px",E="768px",O="1024px",h="1440px",y="2560px",j={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(v,")"),mobileL:"(min-width: ".concat(x,")"),tablet:"(min-width: ".concat(E,")"),laptop:"(min-width: ".concat(O,")"),laptopL:"(min-width: ".concat(h,")"),desktop:"(min-width: ".concat(y,")"),desktopL:"(min-width: ".concat(y,")")},T={ADD_INGREDIENT_BURGER:"ADD_INGREDIENT_BURGER",NEXT_BURGER:"NEXT_BURGER",SERVE_BURGER:"SERVE_BURGER",RANDOMIZE_ORDERS:"RANDOMIZE_ORDERS",UPDATE_ORDERS:"UPDATE_ORDERS",RESTART:"RESTART",UPDATE_SCORE:"UPDATE_SCORE",UPDATE_TIME:"UPDATE_TIME",UPDATE_LIVES:"UPDATE_LIVES",UPDATE_WINSTREAK:"UPDATE_WINSTREAK",UPDATE_EXACTORDER:"UPDATE_EXACTORDER"};var D=e(62),w=e.n(D),R=e(63),S=e.n(R),k=e(64),I=e.n(k);function A(){var n=Object(c.a)(["\n  position: absolute;\n  width: 470px;\n  bottom: -80px;\n  z-index: 1;\n\n  img {\n    width: 100%;\n  }\n"]);return A=function(){return n},n}function _(){var n=Object(c.a)(["\n  position: relative;\n  width: 300px;\n  z-index: 2;\n"]);return _=function(){return n},n}function P(){var n=Object(c.a)(["\n  position: relative;\n  z-index: 100;\n  width: 300px;\n  top: 105px;\n"]);return P=function(){return n},n}function B(){var n=Object(c.a)(["\n  position: relative;\n  z-index: 1;\n  height: 30px;\n\n  img {\n    position: relative;\n    top: 20px;\n    display: block;\n    margin: 0 auto;\n  }\n\n  &.ing-cheese {\n    height: 10px;\n    img {\n      width: 310px;\n    }\n  }\n\n  &.ing-pickles {\n    height: 15px;\n    img {\n      top: 40px;\n      width: 215px;\n    }\n  }\n\n  &.ing-lettuce {\n    height: 25px;\n    img {\n      width: 340px;\n    }\n  }\n\n  &.ing-patty,\n  &.ing-bacon {\n    height: 40px;\n    img {\n      width: 280px;\n    }\n  }\n\n  &.ing-tomato {\n    height: 20px;\n    img {\n      width: 270px;\n    }\n  }\n"]);return B=function(){return n},n}function U(){var n=Object(c.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 350px;\n"]);return U=function(){return n},n}function C(){var n=Object(c.a)(["\n  position: absolute;\n  bottom: 140px;\n  width: 310px;\n  left: 50%;\n  transform: translateX(-50%);\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n\n  @media "," {\n    bottom: 80px;\n  }\n"]);return C=function(){return n},n}var N=Object(u.a)(p.a.div)(C(),j.tablet),L=u.a.ul(U()),M=Object(u.a)(p.a.li)(B()),V=Object(u.a)(p.a.div)(P()),z=Object(u.a)(p.a.div)(_()),X=Object(u.a)(p.a.div)(A()),G={Container:r.a.forwardRef(function(n,t){var e=Object(p.c)({config:Object(s.a)({},p.b.wobbly),topBunTransformValue:n.dragStatus.canDrop&&n.dragStatus.isOver?"rotate(-20deg) translateY(-150px)":"rotate(0deg) translateY(0px)",bottomBunTransformValue:n.dragStatus.canDrop&&n.dragStatus.isOver?"scale(1.1) translateY(-10px)":"scale(1) translateY(0px)"}),a=e.topBunTransformValue,o=e.bottomBunTransformValue;return r.a.createElement(N,{ref:t,onClick:function(t){t.preventDefault(),n.onClick()}},r.a.createElement(V,{style:{transform:a.interpolate(function(n){return n})}},r.a.createElement("img",{src:S.a,alt:"Top Bun"})),r.a.createElement(p.a.div,{style:{zIndex:3,transform:o.interpolate(function(n){return n})}},n.children),r.a.createElement(z,{style:{transform:o.interpolate(function(n){return n})}},r.a.createElement("img",{src:w.a,alt:"Bottom Bun"})),r.a.createElement(X,null,r.a.createElement("img",{src:I.a,alt:"Plate"})))}),IngredientsList:L,Ingredient:M};function $(){var n=Object(c.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  bottom: 0;\n"]);return $=function(){return n},n}var H=Object(u.a)(p.a.div)($());function F(){var n=Object(d.c)(),t=Object(d.d)(function(n){return n.gameStatus.burgers},d.b),a=Object(d.d)(function(n){return 0===n.gameStatus.orders.length},d.b),o=Object(d.d)(function(n){return n.gameStatus.burgerIndex},d.b),i=Object(m.e)({accept:"BurgerIngredient",drop:function(){return{name:"Burger"}},collect:function(n){return{isOver:n.isOver(),canDrop:n.canDrop()}}}),c=Object(l.a)(i,2),u=c[0],f=u.canDrop,g=u.isOver,b=c[1],v=Object(p.d)(t[o].ingredients,function(n){return n.key},{config:p.b.wobbly,from:{height:0,opacity:.7,transform:"translate3d(0px, -10px, 0px) scale(1.5)"},enter:function(n){return{height:n.height,opacity:1,transform:"translate3d(".concat(Math.floor(16*Math.random())-8,"px, 0px, 0px) scale(1)")}}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.Container,{ref:b,dragStatus:{isOver:g,canDrop:f},onClick:function(){a&&n(function(n,t){var e=t().gameStatus,a=e.orders,r=e.exactOrder,o=e.time,i=e.lives,c=e.winStreak;a.length>0||(n({type:T.SERVE_BURGER}),o>0&&i>0&&0===a.length&&(n({type:T.UPDATE_WINSTREAK,payload:r}),console.log("SCORE TO ADD",c*(r?10:5)),n({type:T.UPDATE_SCORE,payload:c*(r?10:5)}),n({type:T.UPDATE_EXACTORDER,payload:!0})))})}},r.a.createElement(G.IngredientsList,null,v.map(function(n,a){var i=n.item,c=n.props,u=n.key;return r.a.createElement(G.Ingredient,{key:u,className:i.className,style:Object(s.a)({zIndex:t[o].ingredients.length-a},c)},r.a.createElement("img",{src:e(61)("./".concat(i.name,".svg")),alt:i.name}))}))))}var W=function(){var n=Object(d.d)(function(n){return n.gameStatus.burgerIndex},d.b),t=Object(p.d)(n,function(n){return n},{config:p.b.wobbly,from:{transform:"translateX(100%)"},enter:{transform:"translateY(0%)"},leave:{transform:"translateY(-100%)"}});return r.a.createElement(r.a.Fragment,null,t.map(function(n){var t=n.props,e=n.key;return r.a.createElement(H,{key:e,style:t},r.a.createElement(F,null))}))},Y=e(43),K=e(113),Z=e.n(K);function J(){var n=Object(c.a)(["\n  position: relative;\n  width: 64px;\n  border-radius: 8px;\n  padding: 8px;\n\n  img {\n    will-change: transform;\n  }\n"]);return J=function(){return n},n}function q(){var n=Object(c.a)(["\n  position: absolute;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  background-color: #fff;\n  display: flex;\n  padding: 8px 8px 24px 8px;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0px;\n  width: 100%;\n  max-width: max-content;\n\n  flex-wrap: wrap;\n  justify-content: center;\n\n  @media "," {\n    padding: 8px;\n  }\n"]);return q=function(){return n},n}var Q={Container:u.a.div(q(),j.tablet),Item:Object(u.a)(p.a.div)(J())};function nn(n){var t=Object(a.useState)(!1),o=Object(l.a)(t,2),i=o[0],c=o[1],u=Object(p.c)({config:p.b.wobbly,transform:i?"scale(5)":"scale(1)"}),f=Object(d.c)(),b=e(61)("./".concat(n.data.name,".svg")),v=Object(m.d)({item:{type:"BurgerIngredient"},end:function(t,e){var a;E&&console.log("Dragging"),t&&e.getDropResult()&&f((a=n.data,function(n,t){var e=Object(s.a)({key:g.a.generate(8)},a),r=t().gameStatus.orders.findIndex(function(n){return n.name===a.name});n({type:T.ADD_INGREDIENT_BURGER,payload:e}),n({type:T.UPDATE_ORDERS}),-1===r&&(n({type:T.UPDATE_LIVES}),n({type:T.UPDATE_EXACTORDER,payload:!1}))}))},collect:function(n){return{isDragging:n.isDragging()}}}),x=Object(l.a)(v,3),E=x[0].isDragging,O=x[1],h=x[2];function y(n){n.preventDefault(),c(!0)}function j(n){n.preventDefault(),c(!1)}return Y.isMobile?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{handle:".handle",defaultPosition:{x:0,y:0},position:{x:0,y:0},scale:2,onStart:y,onStop:j},r.a.createElement("div",null,r.a.createElement(p.a.img,{className:"handle",style:i?u:{},ref:O,src:b,alt:n.data.name})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.c,{connect:h,src:e(221)("./".concat(n.data.name,".png"))}),r.a.createElement("img",{ref:O,src:b,alt:n.data.name}))}var tn=function(){var n=[{name:"Cheese",className:"ing-cheese",height:10},{name:"Pickles",className:"ing-pickles",height:15},{name:"Lettuce",className:"ing-lettuce",height:25},{name:"Tomato",className:"ing-tomato",height:30},{name:"Patty",className:"ing-patty",height:40},{name:"Bacon",className:"ing-bacon",height:20}];return r.a.createElement(Q.Container,null,n.map(function(n){return r.a.createElement(Q.Item,{key:n.name},r.a.createElement(nn,{data:n}))}))},en=e(44);function an(){var n=Object(c.a)(["\n  margin-left: auto;\n"]);return an=function(){return n},n}function rn(){var n=Object(c.a)(["\n  width: 30px;\n  margin-right: 8px;\n"]);return rn=function(){return n},n}function on(){var n=Object(c.a)([""]);return on=function(){return n},n}function cn(){var n=Object(c.a)(["\n  background-color: #fff;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  border-radius: 8px;\n"]);return cn=function(){return n},n}function un(){var n=Object(c.a)(["\n  width: 100%;\n  height: 44px;\n  box-sizing: border-box;\n  border-radius: 8px;\n  color: #000;\n  position: relative;\n  overflow: visible;\n  will-change: transform, height, opacity;\n"]);return un=function(){return n},n}function sn(){var n=Object(c.a)(["\n  position: absolute;\n  width: 180px;\n  display: flex;\n  flex-direction: column;\n  top: 48px;\n  left: 16px;\n"]);return sn=function(){return n},n}var ln=Object(u.a)(p.a.div)(sn()),dn=Object(u.a)(p.a.div)(un()),pn=Object(u.a)(p.a.div)(cn()),mn=u.a.div(on()),fn=u.a.div(rn());var gn={Container:ln,Item:function(n){var t=Object(a.useState)(!1),e=Object(l.a)(t,2),o=e[0],i=e[1],c=function(n){var t=Object(a.useRef)();return Object(a.useEffect)(function(){t.current=n}),t.current}(n.count),u=Object(p.c)({config:{duration:300,easing:en.a},transform:o?"scale(1.3)":"scale(1)"});return Object(a.useEffect)(function(){var t=null;return o&&clearTimeout(t),c>n.count&&0!==n.count&&i(!0),t=setTimeout(function(){i(!1)},200),function(){return clearTimeout(t)}},[n.count]),r.a.createElement(dn,n,r.a.createElement(pn,{style:u},n.children))},Count:u.a.div(an()),Label:mn,Image:fn};var bn=function(){var n=Object(d.d)(function(n){return n.gameStatus.orders},d.b),t=Object(p.d)(n,function(n){return n.name},{config:p.b.wobbly,trail:100,from:{height:44,opacity:1,transform:"scale(1) translateX(-110%)"},enter:{transform:"scale(1) translateX(0%)"},leave:{height:0,opacity:0,transform:"scale(0) translateX(0%)"}});return r.a.createElement(gn.Container,null,t.map(function(n){var t=n.item,a=n.props,o=n.key;return r.a.createElement(gn.Item,{key:o,style:a,count:t.count},r.a.createElement(gn.Image,null,r.a.createElement("img",{src:e(61)("./".concat(t.name,".svg")),alt:t.name})),r.a.createElement(gn.Label,null,t.name),r.a.createElement(gn.Count,null,"x ",r.a.createElement("strong",null,0!==t.count?t.count:1)))}))};function vn(){var n=Object(c.a)(["\n  text-align: center;\n  display: block;\n  font-size: 48px;\n  color: #fff;\n  padding-bottom: 8px;\n"]);return vn=function(){return n},n}function xn(){var n=Object(c.a)(["\n  text-align: center;\n  font-size: 14px;\n  color: #fff;\n"]);return xn=function(){return n},n}function En(){var n=Object(c.a)(["\n  position: absolute;\n  width: 140px;\n  border-radius: 8px;\n  background-color: #000;\n  text-align: center;\n  top: 48px;\n  right: 16px;\n  background: linear-gradient(\n    to bottom,\n    rgba(255, 158, 0, 1) 0%,\n    rgba(253, 114, 0, 1) 100%\n  );\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n"]);return En=function(){return n},n}var On={Container:Object(u.a)(p.a.div)(En()),Header:u.a.h1(xn()),Value:Object(u.a)(p.a.span)(vn())};var hn=function(){var n=Object(d.c)(),t=Object(d.d)(function(n){return n.gameStatus.time},d.b);return Object(a.useEffect)(function(){var e=null;return e||(e=setInterval(function(){t>0?n({type:T.UPDATE_TIME,payload:t-1}):clearInterval(e)},1e3)),function(){return clearInterval(e)}}),r.a.createElement(On.Container,null,r.a.createElement(On.Header,null,"Remaining Time"),r.a.createElement(On.Value,null,60===t?"1:00":"0:".concat(t<10?"0".concat(t):t)))};function yn(){var n=Object(c.a)([""]);return yn=function(){return n},n}function jn(){var n=Object(c.a)([""]);return jn=function(){return n},n}function Tn(){var n=Object(c.a)(["\n  top: 160px;\n  background: linear-gradient(\n    to bottom,\n    rgba(128, 188, 0, 1) 0%,\n    rgba(78, 161, 69, 1) 100%\n  );\n"]);return Tn=function(){return n},n}var Dn={Container:Object(u.a)(On.Container)(Tn()),Header:Object(u.a)(On.Header)(jn()),Value:Object(u.a)(On.Value)(yn())};var wn=function(){var n=Object(d.d)(function(n){return n.gameStatus.score},d.b),t=Object(d.d)(function(n){return n.gameStatus.winStreak},d.b),e=Object(p.c)({value:n,from:{value:0}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(Dn.Container,null,r.a.createElement(Dn.Header,null,"Your score"),r.a.createElement(Dn.Value,null,e.value.interpolate(function(n){return n.toFixed(0)}))),r.a.createElement("div",null,t))};function Rn(){var n=Object(c.a)(["\n  position: relative;\n  transform-origin: center center;\n  img {\n    margin: 0px 12px;\n    box-sizing: border-box;\n    width: 24px;\n  }\n"]);return Rn=function(){return n},n}function Sn(){var n=Object(c.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: row-reverse;\n  right: 8px;\n  top: 8px;\n  background-color: #fff;\n"]);return Sn=function(){return n},n}var kn={Container:Object(u.a)(p.a.div)(Sn()),Heart:Object(u.a)(p.a.div)(Rn())},In=e(37),An=e.n(In);var _n=function(){var n=Object(d.d)(function(n){return n.gameStatus.lives},d.b),t=Object(p.d)(An.a.range(n),function(n){return n},{from:{transform:"scale(1)",opacity:1},enter:{transform:"scale(1)",opacity:1},leave:{transform:"scale(3)",opacity:0}});return r.a.createElement(kn.Container,null,t.map(function(n){var t=n.props,a=n.key;return r.a.createElement(kn.Heart,{style:t,key:a},r.a.createElement("img",{src:e(107),alt:"Heart"}))}))},Pn=e(65),Bn=e.n(Pn);function Un(){var n=Object(c.a)(["\n  position: absolute;\n\n  img {\n    width: 100px;\n    will-change: transform;\n    animation: ",";\n  }\n"]);return Un=function(){return n},n}function Cn(){var n=Object(c.a)(["\n  position: absolute;\n  z-index: 100;\n  bottom: 300px;\n  width: 100px;\n  left: 50%;\n  transform: translateX(-50%);\n  pointer-events: none;\n"]);return Cn=function(){return n},n}var Nn={Container:Object(u.a)(p.a.div)(Cn()),Star:Object(u.a)(p.a.div)(Un(),function(n){return"App-logo-spin infinite ".concat(n.duration||5,"s linear")})};var Ln=function(){var n=Object(d.d)(function(n){return n.gameStatus.burgers.length},d.b),t=Object(d.d)(function(n){return n.gameStatus.winStreak},d.b),e=[{id:"star1",x:20,y:-130,duration:1},{id:"star3",x:-100,y:70,duration:3},{id:"star5",x:130,y:20,duration:4}],o=[{id:"star1",x:100,y:-130,duration:1},{id:"star2",x:-210,y:220,duration:2},{id:"star3",x:270,y:-210,duration:3},{id:"star4",x:100,y:-130,duration:1},{id:"star5",x:10,y:220,duration:4},{id:"star6",x:-100,y:-210,duration:3}],i=Object(a.useState)([]),c=Object(l.a)(i,2),u=c[0],s=c[1],m=Object(p.d)(u,function(n){return n.id},{config:{duration:2e3,easing:en.b},from:{transform:"translate(0px, 0px) scale(1.5)",opacity:1},enter:{transform:"translate(0px, 0px) scale(1.5)",opacity:1},leave:function(n){return{transform:"translate(".concat(n.x,"px, ").concat(n.y,"px) scale(",0,")"),opacity:.5}}});return Object(a.useEffect)(function(){var a;return s(n>1?t>3?o:e:[]),a=setTimeout(function(){s([])},100),function(){return clearTimeout(a)}},[n]),r.a.createElement(Nn.Container,null,m.map(function(n){var t=n.item,e=n.props,a=n.key;return t&&r.a.createElement(Nn.Star,{key:a,style:e,duration:t.duration},r.a.createElement("img",{src:Bn.a,alt:"Stars"}))}))};e(230);function Mn(){var n=Object(c.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #eee;\n  overflow: hidden;\n  user-select: none;\n  background: linear-gradient(\n    to bottom,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(242, 242, 242, 1) 100%\n  );\n\n  @media "," {\n    max-width: 640px;\n    max-height: 640px;\n  }\n"]);return Mn=function(){return n},n}var Vn=u.a.div(Mn(),j.tablet);var zn=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Vn,null,r.a.createElement(Ln,null),r.a.createElement(_n,null),r.a.createElement(wn,null),r.a.createElement(hn,null),r.a.createElement(bn,null),r.a.createElement(W,null),r.a.createElement(tn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Xn=e(18),Gn=e(114),$n=e(115),Hn=e(116),Fn=e(15),Wn=e(16),Yn=e.n(Wn),Kn=0,Zn=0,Jn=0,qn={randomNumber:function(n,t){return Math.floor(Math.random()*t+n)},randomizeOrder:function(n,t){for(var e=[],a=An.a.shuffle(t),r=An.a.take(a,n),o=0;o<r.length;o++){var i={name:a[o],count:this.randomNumber(1,2)};e.push(i)}return e},setNumberOfOrders:function(n){return n>=40?2:n>=20&&n<40?4:6},preventDoubleTapZoom:function(n){if(console.log("WOW"),!(n.touches.length>1)){var t=(new Date).getTime(),e=t-Kn,a=n.touches[0],r=a.clientX,o=a.clientY,i=Math.abs(Zn-r),c=Math.abs(Jn-o);i<10&&c<10&&1===n.touches.length&&e<500&&(n.preventDefault(),n.target.click()),Zn=r,Jn=o,Kn=t}}},Qn={burgers:[{ingredients:[]}],burgerIndex:0,score:0,time:60,lives:3,exactOrder:!0,winStreak:1,orders:qn.randomizeOrder(2,b)},nt=Object(Xn.c)({gameStatus:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.ADD_INGREDIENT_BURGER:var e=n.orders.findIndex(function(n){return n.name===t.payload.name});return Yn()(n,{burgers:Object(Fn.a)({},n.burgerIndex,{ingredients:{$unshift:[t.payload]}}),orders:-1!==e?Object(Fn.a)({},e,{count:{$set:n.orders[e].count-1}}):{orders:{$set:n.orders}}});case T.SERVE_BURGER:return Yn()(n,{burgers:{$push:[{ingredients:[]}]},burgerIndex:{$set:++n.burgerIndex},orders:{$set:qn.randomizeOrder(qn.setNumberOfOrders(n.time),b)}});case T.UPDATE_EXACTORDER:return Yn()(n,{exactOrder:{$set:t.payload}});case T.RANDOMIZE_ORDERS:return Yn()(n,{orders:{$set:qn.randomizeOrder(qn.setNumberOfOrders(n.time),b)}});case T.UPDATE_ORDERS:return Yn()(n,{orders:{$set:n.orders.filter(function(n){return n.count>0})}});case T.UPDATE_WINSTREAK:return console.log("case",t.payload),Yn()(n,{winStreak:{$set:t.payload?n.winStreak+1:1}});case T.UPDATE_SCORE:return Yn()(n,{score:{$set:n.score+t.payload}});case T.UPDATE_TIME:return Yn()(n,{time:{$set:t.payload}});case T.UPDATE_LIVES:return Yn()(n,{lives:{$set:n.lives>0?n.lives-1:0}});case T.RESTART:default:return Qn}}}),tt=Object(Xn.d)(nt,Object(Xn.a)(Gn.a));i.a.render(r.a.createElement(d.a,{store:tt},r.a.createElement(m.b,{backend:Y.isMobile?Hn.a:$n.a},r.a.createElement(zn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},61:function(n,t,e){var a={"./Bacon.svg":215,"./BottomBun.svg":62,"./Cheese.svg":216,"./Heart.svg":107,"./Lettuce.svg":217,"./Patty.svg":218,"./Pickles.svg":219,"./Tomato.svg":220,"./TopBun.svg":63};function r(n){var t=o(n);return e(t)}function o(n){if(!e.o(a,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return a[n]}r.keys=function(){return Object.keys(a)},r.resolve=o,n.exports=r,r.id=61},62:function(n,t,e){n.exports=e.p+"static/media/BottomBun.702fb2b1.svg"},63:function(n,t,e){n.exports=e.p+"static/media/TopBun.4278df44.svg"},64:function(n,t,e){n.exports=e.p+"static/media/Plate.e39d8e1f.png"},65:function(n,t,e){n.exports=e.p+"static/media/Star.295389ef.png"}},[[119,1,2]]]);
//# sourceMappingURL=main.6b0baafc.chunk.js.map