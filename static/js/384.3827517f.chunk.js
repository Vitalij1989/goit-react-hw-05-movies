"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[384],{0:function(n,e,i){i.d(e,{H2:function(){return u},MW:function(){return m},eW:function(){return x},jx:function(){return h},rS:function(){return p},up:function(){return g}});var r,t,o,a,s,l,c=i(168),d=i(87),f=i(444),x=f.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 35px;\n"]))),u=f.ZP.li(t||(t=(0,c.Z)(["\n  display: flex;\n  border-radius: 5px;\n  transition-property: scale, box-shadow, border-radius;\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    border-radius: 5px;\n    outline: 3px solid #07345a;\n    scale: 1.03;\n    box-shadow: 0 0 15px 5px #7f7676;\n  }\n"]))),p=f.ZP.h1(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: flex-start;\n"]))),h=f.ZP.img(a||(a=(0,c.Z)(["\n  background: #fff;\n  border-radius: 5px;\n\n  margin-bottom: 8px;\n"]))),m=f.ZP.p(s||(s=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 5px 0;\n  color: black;\n  text-align: center;\n"]))),g=(0,f.ZP)(d.OL)(l||(l=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 180px;\n"])))},384:function(n,e,i){i.r(e),i.d(e,{default:function(){return S}});var r,t,o,a,s,l,c,d,f=i(439),x=i(548),u=i(791),p=i(87),h=i(689),m=i(55),g=i(168),b=i(444),Z=b.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n"]))),j=b.ZP.div(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n"]))),v=b.ZP.ul(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),w=b.ZP.h2(a||(a=(0,g.Z)(["\n  display: flex;\n  font-size: 30px;\n  margin-bottom: 20px;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n"]))),y=b.ZP.h2(s||(s=(0,g.Z)(["\n  display: flex;\n  font-size: 20px;\n  margin-bottom: 20px;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n"]))),_=b.ZP.p(l||(l=(0,g.Z)(["\n  display: flex;\n  font-size: 14px;\n  margin-bottom: 20px;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n"]))),P=b.ZP.p(c||(c=(0,g.Z)(["\n  display: flex;\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n"]))),C=i(521),k=b.ZP.button(d||(d=(0,g.Z)(["\n  text-transform: uppercase;\n  color: #07345a;\n  cursor: pointer;\n  padding: 10px;\n  margin: 10px 0;\n  background-color: rgba(0, 0, 0, 0);\n  border: 2px solid #07345a;\n  border-radius: 5px;\n  font-size: 12px;\n  font-weight: 500;\n\n  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),\n    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  &:focus,\n  &:hover {\n    background-color: #ffff01;\n    border: 2px solid rgba(0, 0, 0, 0);\n    color: #ff0101;\n  }\n"]))),T=i(184),z=function(n){var e=n.path;return(0,T.jsx)(p.rU,{to:e,children:(0,T.jsx)(k,{children:"Go back"})})},G=i(213),R=i(0),S=function(){var n,e,i=(0,h.UO)().movieId,r=(0,u.useState)([]),t=(0,f.Z)(r,2),o=t[0],a=t[1],s=(0,u.useState)(!1),l=(0,f.Z)(s,2),c=l[0],d=l[1],g=(0,u.useState)("idle"),b=(0,f.Z)(g,2),k=b[0],S=b[1],U=(0,h.TH)();return(0,u.useEffect)((function(){d(!0),S("loading"),(0,x.Y5)(i).then((function(n){var e=n.data;a(e),S("fulfilled")})).catch((function(n){S("error")})).finally((function(){d(!1)}))}),[i]),"idle"===k||c?c&&(0,T.jsx)(C.a,{isLoading:c}):"error"===k?(0,T.jsx)(T.Fragment,{children:"There was an error"}):(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(m.W,{children:[(0,T.jsx)(z,{path:null!==(n=null===U||void 0===U||null===(e=U.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"}),(0,T.jsxs)(Z,{children:[(0,T.jsx)(R.jx,{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(o.poster_path),alt:o.original_title,width:"300",height:"450"}),(0,T.jsxs)(j,{children:[(0,T.jsx)(w,{children:o.title}),(0,T.jsxs)(_,{children:["User Score:"," ",o.vote_average?Math.fround(10*o.vote_average).toFixed(0):"","%"]}),(0,T.jsx)(y,{children:"Overview"}),(0,T.jsxs)(_,{children:[" ",o.overview]}),(0,T.jsx)(y,{children:"Genres"}),(0,T.jsx)(_,{children:o.genres?o.genres.map((function(n){return n.name})).join(" "):""}),(0,T.jsx)(P,{children:"Additional information"}),(0,T.jsxs)(v,{children:[(0,T.jsx)("li",{children:(0,T.jsx)(p.rU,{to:G.a.cast,state:U.state,children:"Cast"})}),(0,T.jsx)("li",{children:(0,T.jsx)(p.rU,{to:G.a.reviews,state:U.state,children:"Reviews"})})]})]})]}),(0,T.jsx)(h.j3,{})]})})}}}]);
//# sourceMappingURL=384.3827517f.chunk.js.map