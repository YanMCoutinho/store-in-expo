(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{113:function(t,e,i){"use strict";i.d(e,"a",(function(){return I}));var n=i(34),a=i.n(n),o=i(112),r=i(4),c=i(9),s=i(3),l=i(37),g=i(38),d=i(0),m=i(44),u=i(111),x=i(25),f=i(2);function h(t){var e=t.imageW,i=t.imageH,n=t.time,a=t.data,o=t.buttons,r=d.useRef(null),l=d.useRef(0),g=function(){r.current.scrollToIndex({animated:!0,index:l.current})},h=function(t){g(),function(t){l.current=l.current===a.length-1||l.current+t>a.length-1?0:l.current+t}(t)},p=function(t){g(),function(t){l.current=0===l.current||l.current-t<0?a.length-1:l.current-t}(t)};d.useEffect((function(){if(n){var t=setInterval((function(){h(1)}),n);return function(){return clearInterval(t)}}}),[n]);var j=function(){return Object(f.jsx)(u.a.FlatList,{ref:r,data:a,getItemLayout:function(t,i){return{length:e,offset:e*i,index:i}},pagingEnabled:!0,showsHorizontalScrollIndicator:!1,style:{maxWidth:e,minHeight:i},keyExtractor:function(t,e){return e.toString()},horizontal:!0,progressViewOffset:1,onScrollToIndexFailed:function(){},renderItem:function(t){var n=t.item,a=t.index;return Object(f.jsx)(m.a,{source:n,resizeMode:"contain",style:{width:e,height:i}},a.toString())}})},y=function(t){var n=t.onpress,a=t.left,o=t.right,r=t.text,s=t.marginRight;return Object(f.jsx)(x.a,{style:{display:"flex",flex:1,right:o,left:a,justifyContent:"center",alignItems:"center",alignSelf:"center",position:"absolute",top:.3*i-25,width:.2*e,maxWidth:25,maxHeight:25,height:.206*e,borderRadius:20,backgroundColor:"#2175BF",zIndex:3},onPress:n,children:Object(f.jsxs)(c.a,{style:{color:"#F1FFFF",fontWeight:900,marginRight:s,marginBottom:5,textAlign:"center",fontSize:20,width:"100%",flex:1,alignItems:"center",justifyContent:"center"},children:[" ",r," "]})})};return o?Object(f.jsxs)(s.a,{style:{position:"relative",width:e+.1*e,height:i,flex:1,justifyContent:"center",alignItems:"center",maxWidth:"100vw"},children:[Object(f.jsx)(j,{}),Object(f.jsx)(y,{right:"auto",left:"0px",text:"<",marginRight:2,onpress:function(){p(1)}}),Object(f.jsx)(y,{left:"auto",right:"0px",text:">",marginRight:0,onpress:function(){h(1)}})]}):Object(f.jsx)(s.a,{style:{position:"relative",width:e,height:i},children:Object(f.jsx)(j,{})})}var p=[{id:1,name:"Galaxy A13 Soft Cover",category:"Covers",price:"$ 14,00",quantity:2,color:[i(134),i(135)]},{id:2,name:"Galaxy A13 Card Slot Cover",category:"Covers",price:"$ 19,00",quantity:5,color:[i(136),i(137)]},{id:3,name:"20,000 mAh Battery Pack PD",category:"Power Accessories",price:"$ 49,99",quantity:8,color:[i(138)]},{id:4,name:"Wireless Charger Trio",category:"Power Accessories",price:"$ 89,90",quantity:1,color:[i(139),i(140)]},{id:5,name:"Galaxy Buds Pro",category:"Audio",price:"$ 149,99",quantity:3,color:[i(80),i(81),i(82)]},{id:6,name:"Galaxy Buds Pro Phantom",category:"Audio",price:"$ 169,99",quantity:10,color:[i(80),i(81),i(82)]},{id:7,name:"Type-C Headphones",category:"Audio",price:"$ 29,99",quantity:13,color:[i(141),i(142)]},{id:8,name:"Galaxy Tab S8 Ultra Protective Standing Cover",category:"Tablet Acessories",price:"$ 69,99",quantity:1,color:[i(143)]},{id:9,name:"Manfrotto PIXI Mini Tripod",category:"Smart Accessories",price:"$ 30,00",quantity:25,color:[i(144)]},{id:10,name:"Mini Trip\xe9 Flexivel",category:"Smart Accessories",price:"$ 04,00",quantity:12,color:[i(145)]},{id:11,name:"Selfie Ring Light",category:"Smart Accessories",price:"$ 05,00",quantity:9,color:[i(146),i(147),i(148)]},{id:12,name:"65W Trio Adapter",category:"Power Acessories",price:"$ 59,99",quantity:7,color:[i(149)]}],j=[i(150),i(151),i(152)],y=i(173),b=function(){return Object(f.jsx)(s.a,{style:O.footer,children:Object(f.jsxs)(s.a,{style:O.container,children:[Object(f.jsxs)(s.a,{style:O.col,children:[Object(f.jsx)(c.a,{style:O.primaryTitle,children:"Produtos"}),Object(f.jsx)(g.a,{style:O.info,data:[{key:"Capinhas"},{key:"Carregadores"},{key:"Fones"},{key:"Acessorios Smart"},{key:"Termos e Condi\xe7\xf5es"}],renderItem:function(t){var e=t.item;return Object(f.jsx)(s.a,{style:O.infoWrapper,children:Object(f.jsx)(x.a,{children:Object(f.jsx)(c.a,{style:O.item,children:e.key})})})}})]}),Object(f.jsxs)(s.a,{style:O.col,children:[Object(f.jsx)(c.a,{style:O.primaryTitle,children:"Contato"}),Object(f.jsx)(g.a,{style:O.info,data:[{icon:"mail",key:"lorem@contact.com"},{icon:"call",key:"+55 (11) 9999-9999"}],renderItem:function(t){var e=t.item;return Object(f.jsx)(s.a,{children:Object(f.jsxs)(x.a,{style:O.infoWrapper,children:[Object(f.jsx)(y.a,{name:e.icon,size:18,color:"white"}),Object(f.jsx)(c.a,{style:O.item,children:e.key})]})})}}),Object(f.jsx)(c.a,{style:O.primaryTitle,children:" Saiba mais"}),Object(f.jsxs)(s.a,{style:O.socialMedia,children:[Object(f.jsx)(x.a,{children:Object(f.jsx)(y.a,{name:"logo-instagram",size:24,color:"white"})}),Object(f.jsx)(x.a,{children:Object(f.jsx)(y.a,{name:"logo-facebook",size:24,color:"white"})}),Object(f.jsx)(x.a,{children:Object(f.jsx)(y.a,{name:"logo-twitter",size:24,color:"white"})}),Object(f.jsx)(x.a,{children:Object(f.jsx)(y.a,{name:"logo-youtube",size:24,color:"white"})})]})]})]})})},O=r.a.create({footer:{width:"100%",alignItems:"center",backgroundColor:"black"},container:{width:"90%",padding:10,justifyContent:"center",flexDirection:"column"},col:{marginTop:15,width:"100%",alignItems:"start",flexDirection:"column"},primaryTitle:{color:"white",textAlign:"left",marginTop:15,marginBottom:10,fontSize:20,textTransform:"uppercase",fontFamily:"Samsung-Sans",width:"100%",color:"white",textAlign:"center",marginTop:40,marginBottom:10,fontSize:20,textTransform:"uppercase",fontFamily:"Samsung-Sans"},socialMedia:{flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",gap:10,marginBottom:40},info:{width:"100%"},infoWrapper:{flexDirection:"row",width:"100%",textAlign:"center",justifyContent:"center",alignItems:"center"},item:{color:"white",marginLeft:10,marginBottom:5,fontSize:16,textAlign:"left",opacity:.6,wordBreak:"break-all"}});function S(t){var e=t.imageW,i=t.imageH,n=t.time,a=t.colors,o=t.title,r=t.price,l=t.category,g=t.quantity,d=t.height,m=t.width,u=t.marginTop,p=t.buttons;return Object(f.jsxs)(x.a,{style:{minHeight:d,width:m,marginTop:u,borderWidth:1,textAlign:"center",paddingTop:20,paddingBottom:30,borderColor:"#e5e5e5",borderRadius:16,flex:1,justifyContent:"space-between",alignItems:"center"},children:[Object(f.jsx)(s.a,{style:w.carousel,children:Object(f.jsx)(h,{buttons:p,imageW:e,imageH:i,time:n,data:a})}),Object(f.jsx)(c.a,{style:w.title,children:o}),Object(f.jsx)(c.a,{style:w.category,children:l}),Object(f.jsxs)(c.a,{style:w.quantity,children:[Object(f.jsx)("b",{children:"Quantidade:"})," ",g]}),Object(f.jsx)(c.a,{style:w.price,children:r}),Object(f.jsx)(x.a,{style:w.buy,children:Object(f.jsx)(c.a,{style:w.buyText,children:"COMPRAR"})})]})}var w=r.a.create({carousel:{flex:1,justifyContent:"center",alignItems:"center",marginBottom:2,minWidth:"100%"},title:{fontSize:24,fontWeight:600,textAlign:"center",maxWidth:"90%",fontFamily:"Samsung-Sans"},category:{marginTop:5,marginBottom:5,fontSize:15,fontWeight:400,textAlign:"left",fontFamily:"Samsung-Sans"},quantity:{marginTop:20,marginBottom:8,fontSize:12.3,fontWeight:400,textAlign:"left",fontFamily:"Samsung-Sans"},price:{fontSize:25,marginTop:20,textAlign:"center",fontFamily:"Samsung-Sans-Bold"},buy:{textAlign:"center",width:"50%",marginTop:20,paddingTop:5,paddingBottom:9,backgroundColor:"blue",borderRadius:16},buyText:{fontSize:18,textAlign:"center",color:"white",paddingTop:5,fontFamily:"Samsung-Sans-Bold"}});function v(){return Object(f.jsxs)(s.a,{style:C.header,children:[Object(f.jsx)(c.a,{style:C.text,children:" SAMSUNG "}),Object(f.jsxs)(s.a,{style:C.icons,children:[Object(f.jsx)(y.a,{name:"ios-search-outline",size:24,color:"black"}),Object(f.jsx)(y.a,{name:"cart-outline",size:24,color:"black"}),Object(f.jsxs)(s.a,{style:C.menu,children:[Object(f.jsx)(s.a,{style:C.row}),Object(f.jsx)(s.a,{style:C.row}),Object(f.jsx)(s.a,{style:C.row})]})]})]})}var C=r.a.create({header:{backgroundColor:"white",marginTop:0,width:"100%",padding:15,alignItems:"center",flexDirection:"row",justifyContent:"space-between",marginBottom:20,fontFamily:"Samsung-Logo"},text:{color:"black",fontSize:20,fontWeight:"bold"},icons:{flexDirection:"row",justifyContent:"space-between",width:"105px",marginRight:5},menu:{marginTop:3},row:{backgroundColor:"black",height:"3px",width:"20px",margin:2,borderRadius:2}});function T(){return Object(f.jsxs)(s.a,{style:A.container,children:[Object(f.jsxs)(s.a,{style:A.vtexts,children:[Object(f.jsx)(c.a,{style:A.title,children:"SAMSUNG"}),Object(f.jsx)(c.a,{style:A.text,children:"Acess\xf3rios"})]}),Object(f.jsx)(m.a,{style:A.heroImg,resizeMode:"contain",source:i(163)})]})}var A=r.a.create({container:{minWidth:"100%",height:"100vh",backgroundColor:"#f6f6f6",position:"relative"},vtexts:{width:"100%",height:"60%",position:"absolute",zIndex:1,flex:1,justifyContent:"center",alignItems:"center"},title:{top:"20%",width:"100%",fontSize:40,textAlign:"center",marginBottom:4,fontFamily:"Samsung-Logo"},text:{fontSize:25,textAlign:"right",width:"50%",fontFamily:"Samsung-Sans"},heroImg:{height:"100vh",maxHeight:"100vh"}}),k=i(115),B=i(172);function I(){var t=l.a.get("screen"),e=t.width,n=(t.height,e);n>425&&(n=425);var r=Object(B.a)({"Samsung-Logo":i(164),"Samsung-Sans":i(165),"Samsung-Sans-Bold":i(166)});return a()(r,1)[0]?Object(f.jsx)(s.a,{style:W.smartphone,children:Object(f.jsxs)(s.a,{style:W.container,children:[Object(f.jsx)(o.a,{style:"auto"}),Object(f.jsx)(v,{}),Object(f.jsx)(T,{}),Object(f.jsx)(s.a,{style:{height:60}}),Object(f.jsx)(h,{imageW:.8*n,imageH:400,data:j,time:8e3,buttons:!0}),Object(f.jsx)(c.a,{style:W.title,children:"Nossos Produtos"}),Object(f.jsx)(g.a,{data:p,keyExtractor:function(t,e){return e.toString()},renderItem:function(t){var e=t.item,i=t.index;return Object(f.jsx)(S,{imageW:100,imageH:100,time:5e3,quantity:e.quantity,buttons:!1,colors:e.color,title:e.name,category:e.category,price:e.price,height:350,width:300,marginTop:25},i)}}),Object(f.jsx)(b,{})]})}):Object(f.jsx)(k.a,{})}var W=r.a.create({smartphone:{marginLeft:"auto",marginRight:"auto",marginTop:30,maxWidth:425,maxHeigth:638},container:{maxWidth:425,overflowY:"scroll",overflowX:"none",flex:1,width:"100%",backgroundColor:"#fff",alignItems:"center",justifyContent:"start"},title:{fontSize:40,fontWeight:600,width:"90%",textAlign:"left",marginTop:70,marginBottom:15,fontFamily:"Samsung-Sans"}})},118:function(t,e,i){t.exports=i(167)},134:function(t,e,i){t.exports=i.p+"static/media/Galaxy-A13-Soft-Black-Cover.67a9e5dd.png"},135:function(t,e,i){t.exports=i.p+"static/media/Galaxy-A13-Soft-Clear-Cover.3aecd25e.png"},136:function(t,e,i){t.exports=i.p+"static/media/Galaxy-A13-Card-Slot-Cover-Arctic-Blue.21507313.png"},137:function(t,e,i){t.exports=i.p+"static/media/Galaxy-A13-Card-Slot-Cover-Peach.860b6b55.png"},138:function(t,e,i){t.exports=i.p+"static/media/mAh-Battery-Pack-PD.461e8dcc.png"},139:function(t,e,i){t.exports=i.p+"static/media/Wireless-Charger-Trio-Black.486fcfd9.png"},140:function(t,e,i){t.exports=i.p+"static/media/Wireless-Charger-Trio-White.8e74e958.png"},141:function(t,e,i){t.exports=i.p+"static/media/Type-C-Headphones-Black.20eb62b2.png"},142:function(t,e,i){t.exports=i.p+"static/media/Type-C-Headphones-White.097159b0.png"},143:function(t,e,i){t.exports=i.p+"static/media/Galaxy-Tab-S8-Ultra-Protective-Standing-Cover.19b9cc35.png"},144:function(t,e,i){t.exports=i.p+"static/media/Manfrotto-PIXI-Mini-Tripod.4c522720.png"},145:function(t,e,i){t.exports=i.p+"static/media/Mini-Tripe-Flexivel.c6d669cb.png"},146:function(t,e,i){t.exports=i.p+"static/media/Selfie-Ring-Light-Black.86ef563e.png"},147:function(t,e,i){t.exports=i.p+"static/media/Selfie-Ring-Light-Pink.d1b85a6a.png"},148:function(t,e,i){t.exports=i.p+"static/media/Selfie-Ring-Light-Sky-Blue.9938918e.png"},149:function(t,e,i){t.exports=i.p+"static/media/65W-Trio-Adapter.8550ff05.png"},150:function(t,e,i){t.exports=i.p+"static/media/exchange.30710e7e.png"},151:function(t,e,i){t.exports=i.p+"static/media/free-freight.3b0fc1d6.png"},152:function(t,e,i){t.exports=i.p+"static/media/no-fees.6d2e0e29.png"},163:function(t,e,i){t.exports=i.p+"static/media/hero_img.9e8684e0.jpg"},164:function(t,e,i){t.exports=i.p+"./fonts/SamsungLogo.ttf"},165:function(t,e,i){t.exports=i.p+"./fonts/SamsungSans-Regular.ttf"},166:function(t,e,i){t.exports=i.p+"./fonts/SamsungSans-Bold.ttf"},80:function(t,e,i){t.exports=i.p+"static/media/Galaxy-Buds-Pro-Phantom-Black.bb2750e6.png"},81:function(t,e,i){t.exports=i.p+"static/media/Galaxy-Buds-Pro-Phantom-Silver.56d23b12.png"},82:function(t,e,i){t.exports=i.p+"static/media/Galaxy-Buds-Pro-Phantom-Violet.773c333a.png"}},[[118,1,2]]]);
//# sourceMappingURL=app.db3bda43.chunk.js.map