(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},70:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n.n(c),r=n(53),s=n.n(r),o=(n(63),n(10)),i=(n.p,n(64),n(29)),j=n(19),u=n(12),l=(n(65),n(20)),b=n(0),f=n(13),d=n(54),h=n(55),O="/unusualcubes-fe",g=n(11),p=["children","vAlign","hAlign","size","color"];Object(f.d)({TextGeometry:h.a});var x=function(e){var t=e.children,n=e.vAlign,a=void 0===n?"center":n,r=e.hAlign,s=void 0===r?"center":r,i=e.size,j=void 0===i?1.5:i,u=(e.color,Object(l.a)(e,p)),h=Object(f.f)(d.a,O+"/CocoSharp.json"),x=Object(c.useMemo)((function(){return{font:h,size:40,height:30,curveSegments:12,bevelEnabled:!1,flatShading:!1}}),[h]),m=Object(c.useRef)();return Object(c.useLayoutEffect)((function(){var e=new b.Vector3;m.current.geometry.computeBoundingBox(),m.current.geometry.boundingBox.getSize(e),m.current.position.x="center"===s?-e.x/2:"right"===s?0:-e.x,m.current.position.y="center"===a?-e.y/2:"top"===a?0:-e.y}),[t]),Object(g.jsx)("group",Object(o.a)(Object(o.a)({},u),{},{scale:[.05*j,.05*j,.04*j],children:Object(g.jsxs)("mesh",{ref:m,castShadow:!0,receiveShadow:!0,children:[Object(g.jsx)("textGeometry",{attach:"geometry",args:[t,x]}),Object(g.jsx)("meshPhysicalMaterial",{attach:"material",color:"#ffffff",flatShading:!1,roughness:.05,needsUpdate:!0})]})}))},m=(n(44),n(70),n(45)),v=n(82),S=n(83),w=n(85),y=n(86),M=(n(33),n(71),n(84)),k=n(81);var C=function(){Object(c.useRef)(),Object(c.useMemo)((function(){return new b.Object3D}),[]);var e=Object(M.a)(O+"/model_5.glb"),t=e.scene,n=e.nodes,a=(e.materials,e.animations),r=Object(k.a)(a,t),s=(r.ref,r.mixer,r.names,r.actions);r.clips,console.log("nodes",n),Object(c.useEffect)((function(){console.log("actions:",s),Object.values(s).forEach((function(e,t){e.play()}))}),[]);for(var o=0,i=Object.values(n);o<i.length;o++){i[o].castShadow=!0}return Object(g.jsx)("group",{scale:[.5,.5,.5],position:[-5,-5,5],children:Object(g.jsx)("primitive",{object:t})})};function I(e){var t=e.bgcolor,n=Object(f.f)(m.a,O+"/alphamap.jpg"),a=Object(c.useState)(t),r=Object(u.a)(a,2),s=(r[0],r[1],Object(c.useRef)(t)),o=Object(c.useRef)(0),i=Object(c.useRef)();return Object(f.e)((function(e){var n=e.clock.getElapsedTime();if(n-o.current>.01){o.current=n;var c=function(e,t,n){function c(e){return parseInt(e,16)}n="undefined"!==typeof n?n:50;for(var a="#",r=0;r<=5;r+=2){for(var s=c(e.substr(r+1,2)),o=c(t.substr(r+1,2)),i=Math.floor(o+n/100*(s-o)).toString(16);i.length<2;)i="0"+i;a+=i}return a}(t,s.current,3);s.current=c,i.current.color=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16)/255,g:parseInt(t[2],16)/255,b:parseInt(t[3],16)/255}:null}(c)}})),Object(g.jsx)(v.a,{args:[100,100],receiveShadow:!0,"rotation-x":-Math.PI/2,position:[0,-12,0],children:Object(g.jsx)("meshPhysicalMaterial",{ref:i,attach:"material",roughness:.5,transparent:!0,opacity:.99,alphaMap:n})})}var P=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),o=s[0],i=s[1],j=Object(c.useState)("#0a1022"),l=Object(u.a)(j,2),b=l[0],d=l[1];return Object(g.jsxs)("div",{className:"page",children:[Object(g.jsx)("div",{className:"canvas-holder",style:{background:b},children:Object(g.jsxs)(f.a,{linear:!0,dpr:[1,2],camera:{fov:65,position:[15,12,15]},onCreated:function(e){e.gl},colorManagement:!0,shadowMap:!0,shadows:!0,mode:"concurrent",children:[Object(g.jsx)(S.a,{pixelated:!0}),Object(g.jsx)("pointLight",{castShadow:!0,"shadow-radius":0,"shadow-bias":-.01,position:[-10,20,10],intensity:1,"shadow-mapSize-width":512,"shadow-mapSize-height":512}),Object(g.jsx)("pointLight",{position:[10,20,-5],intensity:.3,color:"#fffaf0"}),Object(g.jsx)(w.a,{minDistance:10,maxDistance:100,enablePan:!1}),Object(g.jsxs)(c.Suspense,{fallback:null,children:[Object(g.jsx)(x,{children:o}),Object(g.jsx)(I,{bgcolor:b})]}),Object(g.jsx)(c.Suspense,{fallback:null,children:Object(g.jsx)(y.a,{background:!1,files:"abandoned_workshop_1k_small.hdr",path:O+"/"})}),Object(g.jsx)(c.Suspense,{fallback:null,children:Object(g.jsx)(C,{})})]})}),Object(g.jsxs)("div",{className:"ui",children:[Object(g.jsx)("button",{onClick:function(){a(!n),console.log(n),d("#"+Math.floor(16777215*Math.random()).toString(16))},children:"Random Color"}),Object(g.jsx)("input",{value:o,onChange:function(e){return i(e.target.value)}})]})]})};var z=function(){return Object(g.jsxs)("div",{className:"",children:[Object(g.jsx)("h1",{style:{color:"#ffffff"},children:" HomePage "}),Object(g.jsx)("br",{}),Object(g.jsx)(i.b,{to:"/item/1",children:"To Item Page"})]})};var E=function(){return Object(g.jsx)(i.a,{basename:"/unusualcubes-fe",children:Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:"/",render:function(e){return Object(g.jsx)(z,Object(o.a)({},e))},exact:!0}),Object(g.jsx)(j.a,{path:"/item/:id",render:function(e){return Object(g.jsx)(P,Object(o.a)({},e))},exact:!0})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root")),R()}},[[80,1,2]]]);
//# sourceMappingURL=main.c1b755eb.chunk.js.map