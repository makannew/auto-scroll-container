(this["webpackJsonpauto-scroll-container-example"]=this["webpackJsonpauto-scroll-container-example"]||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},14:function(e,t,a){},2:function(e,t,a){e.exports={"first-scroll":"two-scroll-example_first-scroll__15DkW","first-scroll-content":"two-scroll-example_first-scroll-content__YX-cG","second-scroll":"two-scroll-example_second-scroll__nVPoW","second-scroll-content":"two-scroll-example_second-scroll-content__2_AsJ","form-container":"two-scroll-example_form-container__1Z260",label1:"two-scroll-example_label1__XjeC7",label2:"two-scroll-example_label2__ATsid",label3:"two-scroll-example_label3__2yfgk",label4:"two-scroll-example_label4__3d4g4"}},22:function(e,t,a){"use strict";a.r(t);a(14);var n=a(0),l=a.n(n),o=a(10),r=a.n(o),c=a(8),i=a(1),m=a(3),s=a(9),u=a.n(s),p=a(12),d=a(11);function f(e,t,a){var l=Object(n.useRef)({timeout:null,cancel:null}).current;return Object(n.useEffect)((function(){return function(){l.cancel&&l.cancel(!0),l.timeout&&clearTimeout(l.timeout)}}),[]),[function(){var n=arguments;return l.cancel&&(l.cancel(),l.cancel=null),l.timeout&&(clearTimeout(l.timeout),l.timeout=null),new Promise((function(o,r){var c=!0;l.cancel=function(e){c=!1,a&&!e&&r({message:"Function call canceled",timestamp:Date.now()})},l.timeout=setTimeout(Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l.timeout=null,t.prev=1,t.next=4,e&&e.apply(void 0,Object(p.a)(n));case 4:a=t.sent,l.cancel=null,c&&o(a),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),l.cancel=null,c&&r(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])}))),t||0)}))},function(e){l.cancel&&(l.cancel(e),l.cancel=null),l.timeout&&(clearTimeout(l.timeout),l.timeout=null)}]}var v=function(e){var t=e.children,a=e.className,o=void 0===a?"":a,r=e.contentClass,c=void 0===r?"":r,m=e.marginTop,s=void 0===m?.5:m,u=e.marginBottom,p=void 0===u?.5:u,d=e.marginLeft,v=void 0===d?0:d,b=e.marginRight,g=void 0===b?0:b,h=e.scrollX,E=void 0===h?0:h,x=e.scrollY,w=void 0===x?0:x,y=e.viewX,O=void 0===y?.1:y,S=e.viewY,C=void 0===S?.1:S,N=e.setScrollX,j=e.setScrollY,F=e.setViewX,Y=e.setViewY,_=(e.smoothScroll,e.viewMargin),X=void 0===_?.05:_,k=e.autoScrollOnFocus,T=void 0===k||k,L=e.debouncingDelay,R=void 0===L?200:L,V=e.keyboardPopDelay,z=void 0===V?100:V,B=e.signature,A=void 0===B?"data-auto-scroll-container-signature":B,M=e.setAnalizer,P=(e.analizer,Object(n.useRef)(0)),H=Object(n.useRef)(),I=Object(n.useRef)(),D=Object(n.useRef)(),W=Object(n.useRef)(null),J=Object(n.useRef)(null),G=Object(n.useRef)("no"),Z=Object(n.useRef)(null),q=Object(n.useRef)({x:E,offsetX:O,y:w,offsetY:C}),K=f(pe,R),Q=Object(i.a)(K,1)[0],U=f(ne,z),$=Object(i.a)(U,2),ee=$[0],te=$[1],ae=Object(n.useRef)({initializing:!0,isAutoScrolling:!1,immediateChild:null,divSize:void 0,margins:void 0,content:void 0,pos:{x:E,offsetX:O,y:w,offsetY:C}}).current;function ne(e){G.current=e,M((function(t){return"".concat(e," ").concat(t)}))}function le(){null!==ae.immediateChild&&J.current.disconnect()}function oe(){var e=Number(H.current.getAttribute(A));H.current.setAttribute(A,(e+1).toString())}function re(){ae.initializing||(pe(),ie(),oe())}function ce(){ae.initializing||ae.immediateChild||("just focused"===G.current&&(te(),ne("stupid scrolling")),Q().then((function(){M((function(e){return"dHit=".concat(ae.divSize.height," ").concat(e)})),ne("no"),de(),ie(),oe()})))}function ie(){!function(){var e=ae.divSize,t=e.width,a=e.height;ae.margins={top:s*a,bottom:p*a,left:v*t,right:g*t}}(),function(){var e=ae.margins,t=e.top,a=e.bottom,n=e.left,l=e.right,o=I.current.style;s&&(o.marginTop="".concat(t,"px"));p&&(o.marginBottom="".concat(a,"px"));v&&(D.current.style.left="".concat(n,"px"),o.marginLeft="".concat(n,"px"));g&&(D.current.style.left="".concat(H.current.scrollWidth+l,"px"))}(),function(){var e=ae.margins,t=e.top,a=e.bottom,n=e.left,l=e.right;ae.content={width:H.current.scrollWidth-n-l,height:H.current.scrollHeight-t-a}}(),ue(),me(),se()}function me(){var e=ae.divSize,t=ae.content,a=ae.margins,n=ae.pos,l=H.current.scrollTop,o=H.current.scrollLeft,r=W.current?function e(t){if(!t)return[0,0];var a=t.offsetParent,n=t.offsetLeft,l=t.offsetTop;if(a!==D.current.offsetParent&&a){a.hasAttribute(A)&&(ae.immediateChild=a);var o=e(a),r=Object(i.a)(o,2),c=r[0],m=r[1];return[n+c-a.scrollLeft,l+m-a.scrollTop]}return[n,l]}(W.current):[o+O*e.width,l+C*e.height],c=Object(i.a)(r,2),m=c[0],s=c[1];n.x=(m-a.left)/t.width,n.y=(s-a.top)/t.height,n.offsetX=(m-o)/e.width,n.offsetY=(s-l)/e.height}function se(){var e=ae.pos,t=e.x,a=e.y,n=e.offsetX,l=e.offsetY;j&&j(a),N&&N(t),Y&&Y(l),F&&F(n)}function ue(){var e=ae.pos,t=ae.content,a=ae.divSize,n=ae.margins,l=function(){var e=ae.divSize,t=ae.pos,a=t.offsetY,n=t.offsetX;if(W.current){var l=W.current.getBoundingClientRect(),o=l.height,r=l.width,c=o/e.height,i=r/e.width;X+c+X>1?a=a+c/2>.5?X:1-c-X:(a<X&&(a=X),a+c>1-X&&(a=1-X-c)),X+i+X>1?n=n+i/2>.5?X:1-i-X:(n<X&&(n=X),n+i>1-X&&(n=1-X-i))}return{offsetY:a,offsetX:n}}(),o=l.offsetY,r=l.offsetX;ae.isAutoScrolling=!0,H.current.scrollTop=e.y*t.height-o*a.height+n.top,H.current.scrollLeft=e.x*t.width-r*a.width+n.left}function pe(){var e=H.current.getBoundingClientRect();ae.divSize={width:e.width,height:Math.min(e.height,document.documentElement.clientHeight)},M((function(t){return"rectH=".concat(e.height," ").concat(t)})),M((function(e){return"docH=".concat(ae.divSize.height," ").concat(e)}))}function de(){if(Z.current){var e=H.current.style;e.overflow=Z.current.overflow,e.overflowX=Z.current.overflowX,e.overflowY=Z.current.overflowY}}return Object(n.useLayoutEffect)((function(){H.current.style.visibility="hidden","static"===getComputedStyle(H.current).position&&(H.current.style.position="relative"),pe(),M((function(e){return"iniHit=".concat(ae.divSize.height," ").concat(e)})),ie(),ae.initializing=!1,H.current.style.visibility="visible"}),[]),Object(n.useEffect)((function(){return window.addEventListener("resize",ce),function(){window.removeEventListener("resize",ce)}})),Object(n.useEffect)((function(){if(!ae.initializing){var e=ae.pos,t=e.x,a=e.y,n=e.offsetX,l=e.offsetY,o=q.current,r=o.prevSX,c=o.prevSY,i=o.prevVX,m=o.prevVY;return(N&&E!=t||j&&w!=a||F&&O!=n||Y&&C!=l||!N&&E!=r||!j&&w!=c||!F&&O!=i||!Y&&C!=m)&&(ae.pos={x:E,offsetX:O,y:w,offsetY:C},ue()),function(){q.current={prevSX:E,prevSY:w,prevVX:O,prevVY:C}}}}),[E,w,O,C]),Object(n.useEffect)((function(){ae.initializing||ie()}),[s,p,v,g,X]),Object(n.useEffect)((function(){return H.current.setAttribute(A,"0"),J.current=new MutationObserver(re),function(){J.current.disconnect()}}),[]),l.a.createElement("div",{ref:H,className:o,onScroll:function(e){return++P.current,ae.isAutoScrolling?(e.stopPropagation(),void(ae.isAutoScrolling=!1)):"stupid scrolling"===G.current||"just focused"===G.current?(M((function(e){return"stupid ".concat(e)})),M((function(e){return"tp=".concat(ae.pos.y.toFixed(2),", ").concat(ae.pos.offsetY.toFixed(2)," ").concat(e)})),e.stopImmediatePropagation(),e.stopPropagation(),void e.preventDefault()):(me(),M((function(e){return"S=".concat(ae.pos.y.toFixed(2),", ").concat(ae.pos.offsetY.toFixed(2)," ").concat(e)})),void se())},onFocus:function(e){le(),W.current=e.target,ae.immediateChild=null,me(),M((function(e){return"F=".concat(ae.pos.y.toFixed(2),", ").concat(ae.pos.offsetY.toFixed(2)," ").concat(e)})),function(){if(null===ae.immediateChild)return;ae.immediateChild.setAttribute(A,"0"),J.current.observe(ae.immediateChild,{attributes:!0,attributesFilter:[A]})}(),T?(ne("just focused"),function(){var e=window.getComputedStyle(H.current);Z.current={overflow:e.getPropertyValue("overflow"),overflowX:e.getPropertyValue("overflow-x"),overflowY:e.getPropertyValue("overflow-y")},H.current.style.overflow="hidden",H.current.style.overflowX="hidden",H.current.style.overflowY="hidden"}(),ee("no").then((function(){M((function(e){return"not canceled ".concat(e)})),de(),ue(),se()}))):se()},onBlurCapture:function(e){le(),W.current=null,me(),M((function(e){return"B=".concat(ae.pos.y.toFixed(2),", ").concat(ae.pos.offsetY.toFixed(2)," ").concat(e)})),se()}},l.a.createElement("div",{ref:D,style:{position:"absolute",width:"1px",height:"1px",top:"0px",visibility:"hidden"}}),l.a.createElement("div",{ref:I,className:c},t))},b=a(2),g=a.n(b);function h(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]),a=t.nestedScrollY,n=t.nestedViewY,o=t.setNestedScrollY,r=t.setNestedViewY,c=t.nestedMarginTop,i=t.nestedMarginBottom;return l.a.createElement(v,Object.assign({className:g.a["first-scroll"],contentClass:g.a["first-scroll-content"]},t,{marginLeft:0,marginRight:0}),l.a.createElement("div",{className:g.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement(v,{className:g.a["second-scroll"],contentClass:g.a["second-scroll-content"],scrollY:a,viewY:n,setScrollY:o,setViewY:r,marginTop:c,marginBottom:i},l.a.createElement("h4",{id:g.a.label4},"Second scroll Content"),l.a.createElement("div",{className:g.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:g.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"})))))}var E=a(6),x=a.n(E);function w(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]);return l.a.createElement(v,Object.assign({className:x.a["scroll-container"],contentClass:x.a["scroll-content"]},t),l.a.createElement("p",{className:"description"},"Focused element will automatically scroll to visible area."),l.a.createElement("div",{className:x.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:x.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))))}var y=a(4),O=a.n(y);function S(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]);return l.a.createElement(v,Object.assign({className:O.a["scroll-container"],contentClass:O.a["scroll-content"]},t),l.a.createElement("p",{className:"description"},"Focused element will automatically scroll to visible area."),l.a.createElement("div",{className:O.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:O.a["form-container"]},l.a.createElement("form",{autoComplete:"off"},l.a.createElement("h3",null,"Sample form 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("textarea",{className:O.a.story,placeholder:"Story",rows:"25",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))))}var C=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!0),m=Object(i.a)(r,2),s=m[0],u=m[1],p=Object(n.useState)(!0),d=Object(i.a)(p,2),f=d[0],v=d[1],b=Object(n.useState)(0),g=Object(i.a)(b,2),E=g[0],x=g[1],y=Object(n.useState)(.1),O=Object(i.a)(y,2),C=O[0],N=O[1],j=Object(n.useState)(0),F=Object(i.a)(j,2),Y=F[0],_=F[1],X=Object(n.useState)(.1),k=Object(i.a)(X,2),T=k[0],L=k[1],R=Object(n.useState)(.5),V=Object(i.a)(R,2),z=V[0],B=V[1],A=Object(n.useState)(.5),M=Object(i.a)(A,2),P=M[0],H=M[1],I=Object(n.useState)(.5),D=Object(i.a)(I,2),W=D[0],J=D[1],G=Object(n.useState)(.5),Z=Object(i.a)(G,2),q=Z[0],K=Z[1],Q=Object(n.useState)(0),U=Object(i.a)(Q,2),$=U[0],ee=U[1],te=Object(n.useState)(.1),ae=Object(i.a)(te,2),ne=ae[0],le=ae[1],oe=Object(n.useState)(.5),re=Object(i.a)(oe,2),ce=re[0],ie=re[1],me=Object(n.useState)(.5),se=Object(i.a)(me,2),ue=se[0],pe=se[1],de=Object(n.useState)((function(){return""})),fe=Object(i.a)(de,2),ve=fe[0];function be(){_(0),L(.1),x(0),N(.1),B(.5),H(.5),J(.5),K(.5)}var ge=function(e){switch(e.target.name){case"scrollY":x(e.target.value);break;case"viewY":N(e.target.value);break;case"scrollX":_(e.target.value);break;case"viewX":L(e.target.value);break;case"marginTop":B(e.target.value);break;case"marginBottom":H(e.target.value);break;case"marginLeft":J(e.target.value);break;case"marginRight":K(e.target.value);break;case"nestedScrollY":ee(e.target.value);break;case"nestedViewY":le(e.target.value);break;case"nestedMarginTop":ie(e.target.value);break;case"nestedMarginBottom":pe(e.target.value)}},he={scrollY:E,viewY:C,scrollX:Y,viewX:T,marginTop:z,marginBottom:P,marginLeft:W,marginRight:q,nestedScrollY:$,nestedViewY:ne,nestedMarginTop:ce,nestedMarginBottom:ue,setAnalizer:fe[1],analizer:ve},Ee={setScrollY:x,setViewY:N,setScrollX:_,setViewX:L,setNestedScrollY:ee,setNestedViewY:le},xe=f?Object(c.a)(Object(c.a)({},he),Ee):Object(c.a)({},he);return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"options ".concat(0==s?"options-hide":"")},l.a.createElement("h3",{onClick:function(){return u(!s)}},"Hide"),l.a.createElement("h3",{className:"menu-button ".concat(0==s?"visible":""),onClick:function(){return u(!s)}},"Menu"),l.a.createElement("p",{id:"temp"},ve),l.a.createElement("div",{className:"containers"},l.a.createElement("button",{onClick:function(){be(),o(1)}},"Simple responsive scroll"),l.a.createElement("button",{onClick:function(){be(),o(2)}},"Two dimentional scrolls"),l.a.createElement("button",{onClick:function(){be(),o(3)}},"Nested scrolls")),l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"active"},"Active mode"),l.a.createElement("input",{type:"checkbox",id:"active",name:"active",value:"active",checked:f,onChange:function(e){v(e.target.checked)}})),l.a.createElement("label",{htmlFor:"scrollY"},"scrollY = ".concat(Number(E).toFixed(3))),l.a.createElement("input",{id:"scrollY",type:"range",min:"0",max:"1",step:"0.05",value:E,name:"scrollY",onChange:ge}),l.a.createElement("label",{htmlFor:"viewY"},"viewY = ".concat(Number(C).toFixed(3))),l.a.createElement("input",{id:"viewY",type:"range",min:"0",max:"1",step:"0.05",value:C,name:"viewY",onChange:ge}),2===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"scrollX"},"scrollX = ".concat(Number(Y).toFixed(3))),l.a.createElement("input",{id:"scrollX",type:"range",min:"0",max:"1",step:"0.05",value:Y,name:"scrollX",onChange:ge}),l.a.createElement("label",{htmlFor:"viewX"},"viewX = ".concat(Number(T).toFixed(3))),l.a.createElement("input",{id:"viewX",type:"range",min:"0",max:"1",step:"0.05",value:T,name:"viewX",onChange:ge})):null),l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},l.a.createElement("label",{htmlFor:"marginTop"},"marginTop = ".concat(Number(z).toFixed(3))),l.a.createElement("input",{id:"marginTop",type:"range",min:"0",max:"1",step:"0.05",value:z,name:"marginTop",onChange:ge}),l.a.createElement("label",{htmlFor:"marginBottom"},"marginBottom = ".concat(Number(P).toFixed(3))),l.a.createElement("input",{id:"marginBottom",type:"range",min:"0",max:"1",step:"0.05",value:P,name:"marginBottom",onChange:ge}),2===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"marginLeft"},"marginLeft = ".concat(Number(W).toFixed(3))),l.a.createElement("input",{id:"marginLeft",type:"range",min:"0",max:"1",step:"0.05",value:W,name:"marginLeft",onChange:ge}),l.a.createElement("label",{htmlFor:"marginRight"},"marginRight = ".concat(Number(q).toFixed(3))),l.a.createElement("input",{id:"marginRight",type:"range",min:"0",max:"1",step:"0.05",value:q,name:"marginRight",onChange:ge})):null),3===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},3===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Nested Scroll"),l.a.createElement("label",{htmlFor:"nestedScrollY"},"scrollY = ".concat(Number($).toFixed(3))),l.a.createElement("input",{id:"nestedScrollY",type:"range",min:"0",max:"1",step:"0.05",value:$,name:"nestedScrollY",onChange:ge}),l.a.createElement("label",{htmlFor:"nestedViewY"},"viewY = ".concat(Number(ne).toFixed(3))),l.a.createElement("input",{id:"nestedViewY",type:"range",min:"0",max:"1",step:"0.05",value:ne,name:"nestedViewY",onChange:ge})):null),l.a.createElement("div",{className:"containers"},l.a.createElement("label",{htmlFor:"nestedMarginTop"},"marginTop = ".concat(Number(ce).toFixed(3))),l.a.createElement("input",{id:"nestedMarginTop",type:"range",min:"0",max:"1",step:"0.05",value:ce,name:"nestedMarginTop",onChange:ge}),l.a.createElement("label",{htmlFor:"nestedMarginBottom"},"marginBottom = ".concat(Number(ue).toFixed(3))),l.a.createElement("input",{id:"nestedMarginBottom",type:"range",min:"0",max:"1",step:"0.05",value:ue,name:"nestedMarginBottom",onChange:ge}))):null),1===a?l.a.createElement(w,Object.assign({},xe,{marginLeft:0,marginRight:0})):null,2===a?l.a.createElement(S,xe):null,3===a?l.a.createElement(h,xe):null)};r.a.render(l.a.createElement(C,null),document.getElementById("root"))},4:function(e,t,a){e.exports={"scroll-container":"two-dimension-example_scroll-container__2ElSI","scroll-content":"two-dimension-example_scroll-content__1iUnv","form-container":"two-dimension-example_form-container__3bKPh",label1:"two-dimension-example_label1__dVc7-",label2:"two-dimension-example_label2__GZsR3",story:"two-dimension-example_story__3birs"}},6:function(e,t,a){e.exports={"scroll-container":"simple-example_scroll-container__kQ94p","scroll-content":"simple-example_scroll-content__1RFhz","form-container":"simple-example_form-container__3VqxE",label1:"simple-example_label1__2SCoi",label2:"simple-example_label2__3wIdF"}}},[[13,1,2]]]);
//# sourceMappingURL=main.51b028cf.chunk.js.map