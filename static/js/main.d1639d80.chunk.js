(this["webpackJsonpecommerce-store"]=this["webpackJsonpecommerce-store"]||[]).push([[0],{53:function(e,t,n){e.exports=n(90)},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),i=n.n(c),l=n(4),o=n(11),s=(n(62),n(31)),m=n(44),u=n.n(m),p=n(3),d="SET_USER",b={user:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(p.a)(Object(p.a)({},e),{},{user:t.payload});default:return e}},g="TOGGLE_CART_HIDDEN",f="ADD_ITEM",v="SUBTRACT_ITEM",E="REMOVE_ITEM_FROM_CART",y=n(45),O=n(52),j=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity+1}):e})):Object(y.a)(Array,Object(O.a)(e).concat([Object(p.a)(Object(p.a)({},t),{},{quantity:1})]))},k=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity-1}):e}))},w={hidden:!0,cartItems:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case f:return Object(p.a)(Object(p.a)({},e),{},{cartItems:j(e.cartItems,t.payload)});case v:return Object(p.a)(Object(p.a)({},e),{},{cartItems:k(e.cartItems,t.payload)});case E:return Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},R={sections:[{title:"hats",imageURL:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkURL:"shop/hats"},{title:"jackets",imageURL:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkURL:"shop/jackets"},{title:"sneakers",imageURL:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkURL:"shop/sneakers"},{title:"womens",imageURL:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkURL:"shop/womens"},{title:"mens",imageURL:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkURL:"shop/mens"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return t.type,e},C={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageURL:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageURL:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageURL:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageURL:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageURL:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageURL:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageURL:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageURL:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageURL:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageURL:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageURL:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageURL:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageURL:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageURL:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageURL:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageURL:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageURL:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageURL:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageURL:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageURL:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageURL:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageURL:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageURL:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageURL:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageURL:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageURL:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageURL:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageURL:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageURL:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageURL:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageURL:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageURL:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageURL:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageURL:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageURL:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},x=Object(o.c)({user:h,cart:N,directory:L,shop:U}),I={key:"root",storage:u.a,whitelist:["cart"]},S=Object(s.a)(I,x),T=new Array;var B=Object(o.d)(S,o.a.apply(void 0,T)),P=Object(s.b)(B),A=n(12),M=n(46),q=n(9),D=n.n(q),G=n(13),W=n(22),H=n(23),z=n(24),J=n(25);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Y=r.a.createElement("title",null,"Group"),_=r.a.createElement("desc",null,"Created with Sketch."),K=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Q=function(e){var t=e.svgRef,n=e.title,a=V(e,["svgRef","title"]);return r.a.createElement("svg",F({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?Y:n?r.a.createElement("title",null,n):null,_,K)},X=r.a.forwardRef((function(e,t){return r.a.createElement(Q,F({svgRef:t},e))})),Z=(n.p,n(26)),$=n.n(Z),ee=(n(66),n(69),function(){var e=Object(G.a)(D.a.mark((function e(t,n){var a,r,c,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=te.collection("users").doc("".concat(t.uid)),e.next=6,a.get();case 6:if(e.sent.exists){e.next=19;break}return r=new Date,c=t.displayName,i=t.email,e.prev=10,e.next=13,a.set(Object(p.a)({joined:r,displayName:c,email:i},n));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.log("Error Creating User",e.t0);case 18:case 19:return e.abrupt("return",a);case 21:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,n){return e.apply(this,arguments)}}());$.a.initializeApp({apiKey:"AIzaSyA3mVrEuw1K5UE0kXOBCXUR7ya5F7wmvDY",authDomain:"ecommerce-store-a2054.firebaseapp.com",databaseURL:"https://ecommerce-store-a2054.firebaseio.com",projectId:"ecommerce-store-a2054",storageBucket:"ecommerce-store-a2054.appspot.com",messagingSenderId:"536225786272",appId:"1:536225786272:web:4c34fcb09ed8894a931cc5"});var te=$.a.firestore(),ne=$.a.auth(),ae=new $.a.auth.GoogleAuthProvider;ae.setCustomParameters({prompt:"select_account"});var re=function(){return ne.signInWithPopup(ae)};$.a;function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var le=r.a.createElement("g",null),oe=r.a.createElement("g",null),se=r.a.createElement("g",null),me=r.a.createElement("g",null),ue=r.a.createElement("g",null),pe=r.a.createElement("g",null),de=r.a.createElement("g",null),be=r.a.createElement("g",null),he=r.a.createElement("g",null),ge=r.a.createElement("g",null),fe=r.a.createElement("g",null),ve=r.a.createElement("g",null),Ee=r.a.createElement("g",null),ye=r.a.createElement("g",null),Oe=r.a.createElement("g",null),je=function(e){var t=e.svgRef,n=e.title,a=ie(e,["svgRef","title"]);return r.a.createElement("svg",ce({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),le,oe,se,me,ue,pe,de,be,he,ge,fe,ve,Ee,ye,Oe)},ke=r.a.forwardRef((function(e,t){return r.a.createElement(je,ce({svgRef:t},e))})),we=(n.p,n(2)),Ne=function(){return{type:g}},Re=function(e){return{type:f,payload:e}},Le=function(e){return e.cart},Ce=Object(we.a)([Le],(function(e){return e.hidden})),Ue=Object(we.a)([Le],(function(e){return e.cartItems})),xe=Object(we.a)([Ue],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ie=Object(we.a)([Ue],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Se=(n(71),Object(we.b)({itemCount:xe})),Te=Object(l.b)(Se,(function(e){return{toggleCartHidden:function(){return e(Ne())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon-container",onClick:t},r.a.createElement(ke,{className:"cart-icon"}),r.a.createElement("span",{id:"item-count"},n))})),Be=n(5),Pe=n(14),Ae=(n(72),function(e){var t=e.children,n=e.isGoogleLogIn,a=e.inverted,c=Object(Pe.a)(e,["children","isGoogleLogIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"google-log-in":"","\n\t\t\t\t").concat(a?"inverted":"","\n\t\t\t\tcustom-button")},c),t)}),Me=(n(73),function(e){var t=e.item,n=t.name,a=t.imageURL,c=t.price,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"Cart Item: (".concat(n,")")}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},i," \u2715 \xa3",c)))}),qe=(n(74),Object(we.b)({cartItems:Ue})),De=Object(Be.g)(Object(l.b)(qe)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Me,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-cart-message"},"Your Cart is Empty")),r.a.createElement(Ae,{onClick:function(){n.push("/checkout"),a(Ne())}},"CHECKOUT"))}))),Ge=Object(we.a)([function(e){return e.user}],(function(e){return e.user})),We=n(16),He=n(17);function ze(){var e=Object(We.a)(["\n\t",";\n"]);return ze=function(){return e},e}function Je(){var e=Object(We.a)(["\n\twidth: 50%;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n"]);return Je=function(){return e},e}function Fe(){var e=Object(We.a)(["\n\tpadding: 25px;\n\twidth: 70px;\n\theight: 100%;\n"]);return Fe=function(){return e},e}function Ve(){var e=Object(We.a)(["\n\tmargin-bottom: 25px;\n\twidth: 100%;\n\theight: 70px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]);return Ve=function(){return e},e}function Ye(){var e=Object(We.a)(["\n\tpadding: 10px 15px;\n\tcursor: pointer;\n"]);return Ye=function(){return e},e}var _e=Object(He.a)(Ye()),Ke=He.b.nav(Ve()),Qe=Object(He.b)(A.b)(Fe()),Xe=He.b.div(Je()),Ze=Object(He.b)(A.b)(ze(),_e),$e=Object(we.b)({user:Ge,hidden:Ce}),et=Object(l.b)($e)((function(e){var t=e.user,n=e.hidden;return r.a.createElement(Ke,null,r.a.createElement(Qe,{to:"/"},r.a.createElement(X,{className:"logo"})),r.a.createElement(Xe,null,r.a.createElement(Ze,{to:"/shop"},"SHOP"),r.a.createElement(Ze,{to:"/contact"},"CONTACT"),t?r.a.createElement(Ze,{as:"div",onClick:function(){return ne.signOut()}},"LOG OUT"):r.a.createElement(Ze,{to:"/login"},"LOG IN"),r.a.createElement(Te,null)),n?null:r.a.createElement(De,null))})),tt=Object(we.a)([function(e){return e.directory}],(function(e){return e.sections})),nt=(n(76),Object(Be.g)((function(e){var t=e.title,n=e.imageURL,a=e.size,c=e.linkURL,i=e.history,l=e.match;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return i.push("".concat(l.url).concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),at=(n(77),Object(we.b)({sections:tt})),rt=Object(l.b)(at)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(Pe.a)(e,["id"]);return r.a.createElement(nt,Object.assign({key:t},n))})))}));function ct(){var e=Object(We.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\t\n"]);return ct=function(){return e},e}var it=He.b.div(ct()),lt=function(){return r.a.createElement(it,null,r.a.createElement(rt,null))},ot=(n(78),n(50)),st=n.n(ot),mt=Object(we.a)([function(e){return e.shop}],(function(e){return e.collections})),ut=Object(we.a)([mt],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),pt=st()((function(e){return Object(we.a)([mt],(function(t){return t[e]}))})),dt=(n(79),Object(l.b)(null,(function(e){return{addItem:function(t){return e(Re(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageURL;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c)),r.a.createElement(Ae,{onClick:function(){return n(t)},inverted:!0},"Add to Cart"))}))),bt=(n(80),function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",null,t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(dt,{key:e.id,item:e})}))))}),ht=Object(we.b)({collections:ut}),gt=Object(l.b)(ht)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(Pe.a)(e,["id"]);return r.a.createElement(bt,Object.assign({key:t},n))})))})),ft=(n(81),Object(l.b)((function(e,t){return{collection:pt(t.match.params.collectionID)(e)}}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(dt,{key:e.id,item:e})}))))}))),vt=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(Be.b,{exact:!0,path:"".concat(t.path),component:gt}),r.a.createElement(Be.b,{path:"".concat(t.path,"/:collectionID"),component:ft}))},Et=n(21),yt=(n(82),function(e){var t=e.handleChange,n=e.label,a=Object(Pe.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a,{required:!0})),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),Ot=(n(83),function(e){Object(z.a)(n,e);var t=Object(J.a)(n);function n(){var e;return Object(W.a)(this,n),(e=t.call(this,{})).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(Et.a)({},a,r))},e.handleSubmit=function(){var t=Object(G.a)(D.a.mark((function t(n){var a,r,c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state,r=a.email,c=a.password,t.prev=2,t.next=5,ne.signInWithEmailAndPassword(r,c);case 5:e.setState({email:"",password:""}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log("Error Logging In:",t.t0);case 11:case 12:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),e.state={email:"",password:""},e}return Object(H.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"log-in"},r.a.createElement("h2",null,"Log In"),r.a.createElement("span",null,"Log in with email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(yt,{name:"email",label:"email",type:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),r.a.createElement(yt,{name:"password",label:"password",type:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(Ae,{type:"submit"},"Log In"),r.a.createElement(Ae,{type:"button",onClick:re,isGoogleLogIn:!0},"Log In with Google"))))}}]),n}(r.a.Component)),jt=(n(84),function(e){Object(z.a)(n,e);var t=Object(J.a)(n);function n(){var e;return Object(W.a)(this,n),(e=t.call(this,{})).handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(Et.a)({},a,r))},e.handleSubmit=function(){var t=Object(G.a)(D.a.mark((function t(n){var a,r,c,i,l,o,s;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){t.next=5;break}return alert("Passwords Don't Match!"),t.abrupt("return");case 5:return t.prev=6,t.next=9,ne.createUserWithEmailAndPassword(c,i);case 9:return o=t.sent,s=o.user,t.next=13,ee(s,{displayName:r});case 13:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),console.log("Error Registering User:",t.t0);case 19:case 20:case"end":return t.stop()}}),t,null,[[6,16]])})));return function(e){return t.apply(this,arguments)}}(),e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(H.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"register"},r.a.createElement("h2",{className:"title"},"Register"),r.a.createElement("span",null,"Register with Email and Password"),r.a.createElement("form",{className:"registration-form",onSubmit:this.handleSubmit},r.a.createElement(yt,{name:"displayName",label:"Name",type:"text",value:t,handleChange:this.handleChange,required:!0}),r.a.createElement(yt,{name:"email",label:"Email",type:"email",value:n,handleChange:this.handleChange,required:!0}),r.a.createElement(yt,{name:"password",label:"Password",type:"password",value:a,handleChange:this.handleChange,required:!0}),r.a.createElement(yt,{name:"confirmPassword",label:"Confirm Password",type:"password",value:c,handleChange:this.handleChange,required:!0}),r.a.createElement(Ae,{type:"submit"},"REGISTER")))}}]),n}(r.a.Component)),kt=(n(85),function(){return r.a.createElement("div",{className:"auth-page"},r.a.createElement(Ot,null),r.a.createElement(jt,null))}),wt=(n(86),Object(l.b)(null,(function(e){return{addItem:function(t){return e(Re(t))},subtractItem:function(t){return e(function(e){return{type:v,payload:e}}(t))},removeItem:function(t){return e(function(e){return{type:E,payload:e}}(t))}}}))((function(e){var t=e.item,n=e.addItem,a=e.subtractItem,c=e.removeItem,i=t.imageURL,l=t.name,o=t.quantity,s=t.price;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:i,alt:"Checkout Item: ".concat(l)})),r.a.createElement("span",{className:"name"},l),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276e"),r.a.createElement("span",{className:"quantity-value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},s),r.a.createElement("div",{className:"remove-button",onClick:function(){return c(t)}},"\u2715"))}))),Nt=n(51),Rt=n.n(Nt),Lt=function(e){var t=e.price,n=100*t;return r.a.createElement(Rt.a,{name:"Ecommerce Store",label:"Pay",panelLabel:"Pay Now:\xa0",image:"https://svgshare.com/i/CUz.svg",description:"Your total is: \xa3".concat(t),billingAddress:!0,shippingAddress:!0,currency:"GBP",amount:n,token:function(e){console.log(e),alert("Payment Succesful! (Stripe Token in Console)")},stripeKey:"pk_test_51HLlkuETZt84p6IuHoN4xiGdpbsVQFvgxlo1xqhd98uk9QEzCJMRiLye6sxRYG3ieFnHlBCuYmKTwLxfxC7eWbRS00zIAhvDjA"})},Ct=(n(87),Object(we.b)({cartItems:Ue,total:Ie})),Ut=Object(l.b)(Ct)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Item")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Name")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(wt,{key:e.id,item:e})})),r.a.createElement("div",{className:"total"},"TOTAL: \xa3",n),r.a.createElement("div",{className:"test-warning"},"PLEASE USE THE FOLLOWING TEST CARD FOR PAYMENTS:",r.a.createElement("br",null),"4242 4242 4242 4242 | Expiry: 02/42 | CVC: 424"),r.a.createElement(Lt,{price:n}))})),xt=(n(88),function(e){Object(z.a)(n,e);var t=Object(J.a)(n);function n(){var e;Object(W.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=void 0,e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setUser;this.unsubscribeFromAuth=ne.onAuthStateChanged(function(){var t=Object(G.a)(D.a.mark((function t(n){var a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,ee(n);case 3:null===(a=t.sent)||void 0===a||a.onSnapshot((function(t){e(Object(p.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(null);case 8:case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement(et,null),r.a.createElement(Be.d,null,r.a.createElement(Be.b,{exact:!0,path:"/",component:lt}),r.a.createElement(Be.b,{exact:!0,path:"/ecommerce-store",render:function(){return r.a.createElement(Be.a,{to:"/"})}}),r.a.createElement(Be.b,{path:"/shop",component:vt}),r.a.createElement(Be.b,{exact:!0,path:"/login",render:function(){return e.props.user?r.a.createElement(Be.a,{to:"/"}):r.a.createElement(kt,null)}}),r.a.createElement(Be.b,{exact:!0,path:"/checkout",component:Ut})))}}]),n}(r.a.Component)),It=Object(we.b)({user:Ge}),St=Object(l.b)(It,(function(e){return{setUser:function(t){return e(function(e){return{type:d,payload:e}}(t))}}}))(xt);n(89);i.a.render(r.a.createElement(l.a,{store:B},r.a.createElement(A.a,null,r.a.createElement(M.a,{persistor:P},r.a.createElement(St,null)))),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d1639d80.chunk.js.map