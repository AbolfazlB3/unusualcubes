(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),o=n(43),r=n.n(o),s=(n(55),n(9)),i=(n.p,n(56),n(28)),l=n(15),j=n(12),b=(n(57),n(18)),u=n(0),h=n(13),d=n(44),O=n(45),f=n(10),x=["children","vAlign","hAlign","size","color"];Object(h.b)({TextGeometry:O.a});var g=function(e){var t=e.children,n=e.vAlign,a=void 0===n?"center":n,o=e.hAlign,r=void 0===o?"center":o,i=e.size,l=void 0===i?1.5:i,j=(e.color,Object(b.a)(e,x)),O=Object(h.d)(d.a,"/CocoSharp.json"),g=Object(c.useMemo)((function(){return{font:O,size:40,height:30,curveSegments:12,bevelEnabled:!1,flatShading:!1}}),[O]),p=Object(c.useRef)();return Object(c.useLayoutEffect)((function(){var e=new u.Vector3;p.current.geometry.computeBoundingBox(),p.current.geometry.boundingBox.getSize(e),p.current.position.x="center"===r?-e.x/2:"right"===r?0:-e.x,p.current.position.y="center"===a?-e.y/2:"top"===a?0:-e.y}),[t]),Object(f.jsx)("group",Object(s.a)(Object(s.a)({},j),{},{scale:[.05*l,.05*l,.04*l],children:Object(f.jsxs)("mesh",{ref:p,castShadow:!0,receiveShadow:!0,children:[Object(f.jsx)("textGeometry",{attach:"geometry",args:[t,g]}),Object(f.jsx)("meshPhysicalMaterial",{attach:"material",color:"#ffffff",flatShading:!1,roughness:.05,needsUpdate:!0})]})}))},p=(n(42),n(20)),m=(n(62),n(50)),v=n(72),S=n(74),y=n(73),w=n(75),k=n(76);function M(e){var t=e.bgcolor,n=Object(h.d)(m.a,"/alphamap.jpg");return Object(f.jsx)(v.a,{args:[100,100],receiveShadow:!0,"rotation-x":-Math.PI/2,position:[0,-12,0],children:Object(f.jsx)("meshPhysicalMaterial",{attach:"material",color:t,roughness:.5,transparent:!0,opacity:.3,alphaMap:n})})}function C(){var e=Object(S.a)("/model_2.glb"),t=e.scene,n=e.nodes,a=(e.materials,e.animations),o=Object(y.a)(a,t);o.ref,o.mixer,o.names,o.actions,o.clips;Object(c.useEffect)((function(){}));var r,s=Object(p.a)(t.children[0].children);try{for(s.s();!(r=s.n()).done;){r.value.castShadow=!0}}catch(i){s.e(i)}finally{s.f()}return console.log(n),console.log(typeof n),Object(f.jsx)("group",{scale:[.5,.5,.5],position:[-5,-5,5],children:Object(f.jsx)("primitive",{object:t})})}var P=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),r=Object(j.a)(o,2),s=r[0],i=r[1],l=Object(c.useState)("#0a1022"),b=Object(j.a)(l,2),u=b[0],d=b[1];return Object(f.jsxs)("div",{className:"page",children:[Object(f.jsx)("div",{className:"canvas-holder",style:{background:u},children:Object(f.jsxs)(h.a,{linear:!0,dpr:[1,2],camera:{fov:65,position:[15,12,15]},onCreated:function(e){e.gl},colorManagement:!0,shadowMap:!0,shadows:!0,children:[Object(f.jsx)("pointLight",{castShadow:!0,position:[-10,20,10],intensity:1,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024}),Object(f.jsx)(w.a,{minDistance:10,maxDistance:100,enablePan:!1}),Object(f.jsxs)(c.Suspense,{fallback:null,children:[Object(f.jsx)(g,{children:s}),Object(f.jsx)(M,{bgcolor:u})]}),Object(f.jsx)(c.Suspense,{fallback:null,children:Object(f.jsx)(k.a,{background:!1,files:"abandoned_workshop_1k_small.hdr",path:"/"})}),Object(f.jsx)(c.Suspense,{fallback:null,children:Object(f.jsx)(C,{})})]})}),Object(f.jsxs)("div",{className:"ui",children:[Object(f.jsx)("button",{onClick:function(){a(!n),console.log(n),d("#"+Math.floor(16777215*Math.random()).toString(16))},children:"Random Color"}),Object(f.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)}})]})]})};var z=function(){return Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("h1",{style:{color:"#ffffff"},children:" HomePage "}),Object(f.jsx)("br",{}),Object(f.jsx)(i.b,{to:"/item/1",children:"To Item Page"})]})};var B=function(){return Object(f.jsx)(i.a,{basename:"/unusualcubes-fe",children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/",render:function(e){return Object(f.jsx)(z,Object(s.a)({},e))},exact:!0}),Object(f.jsx)(l.a,{path:"/item/:id",render:function(e){return Object(f.jsx)(P,Object(s.a)({},e))},exact:!0})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),A()}},[[71,1,2]]]);
//# sourceMappingURL=main.27ea0a88.chunk.js.map