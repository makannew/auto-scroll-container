(this["webpackJsonpauto-scroll-container-example"]=this["webpackJsonpauto-scroll-container-example"]||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},14:function(e,t,a){},2:function(e,t,a){e.exports={"first-scroll":"two-scroll-example_first-scroll__15DkW","first-scroll-content":"two-scroll-example_first-scroll-content__YX-cG","second-scroll":"two-scroll-example_second-scroll__nVPoW","second-scroll-content":"two-scroll-example_second-scroll-content__2_AsJ","form-container":"two-scroll-example_form-container__1Z260",label1:"two-scroll-example_label1__XjeC7",label2:"two-scroll-example_label2__ATsid",label3:"two-scroll-example_label3__2yfgk",label4:"two-scroll-example_label4__3d4g4"}},22:function(e,t,a){"use strict";a.r(t);a(14);var n=a(0),l=a.n(n),o=a(10),r=a.n(o),i=a(8),c=a(1),m=a(3),s=a(9),u=a.n(s),p=a(12),d=a(11);function f(e,t,a){var l=Object(n.useRef)({timeout:null,cancel:null}).current;return Object(n.useEffect)((function(){return function(){l.cancel&&l.cancel(!0),l.timeout&&clearTimeout(l.timeout)}}),[]),[function(){var n=arguments;return l.cancel&&(l.cancel(),l.cancel=null),l.timeout&&(clearTimeout(l.timeout),l.timeout=null),new Promise((function(o,r){var i=!0;l.cancel=function(e){i=!1,a&&!e&&r({message:"Function call canceled",timestamp:Date.now()})},l.timeout=setTimeout(Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l.timeout=null,t.prev=1,t.next=4,e&&e.apply(void 0,Object(p.a)(n));case 4:a=t.sent,l.cancel=null,i&&o(a),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),l.cancel=null,i&&r(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])}))),t||0)}))},function(e){l.cancel&&(l.cancel(e),l.cancel=null),l.timeout&&(clearTimeout(l.timeout),l.timeout=null)}]}var v=function(e){var t=e.children,a=e.className,o=void 0===a?"":a,r=e.contentClass,i=void 0===r?"":r,m=e.marginTop,s=void 0===m?.5:m,u=e.marginBottom,p=void 0===u?.5:u,d=e.marginLeft,v=void 0===d?0:d,b=e.marginRight,g=void 0===b?0:b,E=e.scrollX,h=void 0===E?0:E,x=e.scrollY,y=void 0===x?0:x,w=e.viewX,O=void 0===w?.1:w,N=e.viewY,C=void 0===N?.1:N,S=e.setScrollX,j=e.setScrollY,_=e.setViewX,Y=e.setViewY,F=(e.smoothScroll,e.viewMargin),X=void 0===F?.05:F,k=e.autoScrollOnFocus,T=void 0===k||k,L=e.debouncingDelay,R=void 0===L?2e3:L,V=e.keyboardPopDelay,B=void 0===V?400:V,z=e.signature,A=void 0===z?"data-auto-scroll-container-signature":z,M=e.setAnalizer,P=Object(n.useRef)(0),I=Object(n.useRef)(),D=Object(n.useRef)(),W=Object(n.useRef)(),H=Object(n.useRef)(null),J=Object(n.useRef)(null),G=Object(n.useRef)("no"),Z=Object(n.useRef)({x:h,offsetX:O,y:y,offsetY:C}),q=f(ue,R),K=Object(c.a)(q,1)[0],Q=f(ae,B),U=Object(c.a)(Q,2),$=U[0],ee=U[1],te=Object(n.useRef)({initializing:!0,isAutoScrolling:!1,immediateChild:null,divSize:void 0,margins:void 0,content:void 0,pos:{x:h,offsetX:O,y:y,offsetY:C}}).current;function ae(e){G.current=e}function ne(){null!==te.immediateChild&&J.current.disconnect()}function le(){var e=Number(I.current.getAttribute(A));I.current.setAttribute(A,(e+1).toString())}function oe(){te.initializing||(ue(),ie(),le())}function re(){te.initializing||te.immediateChild||("just focused"===G.current&&(ee(),ae("stupid scrolling")),K().then((function(){ae("no"),ie(),le()})))}function ie(){!function(){var e=te.divSize,t=e.width,a=e.height;te.margins={top:s*a,bottom:p*a,left:v*t,right:g*t}}(),function(){var e=te.margins,t=e.top,a=e.bottom,n=e.left,l=e.right,o=D.current.style;s&&(o.marginTop="".concat(t,"px"));p&&(o.marginBottom="".concat(a,"px"));v&&(W.current.style.left="".concat(n,"px"),o.marginLeft="".concat(n,"px"));g&&(W.current.style.left="".concat(I.current.scrollWidth+l,"px"))}(),function(){var e=te.margins,t=e.top,a=e.bottom,n=e.left,l=e.right;te.content={width:I.current.scrollWidth-n-l,height:I.current.scrollHeight-t-a}}(),se(),ce(),me()}function ce(){var e=te.divSize,t=te.content,a=te.margins,n=te.pos,l=I.current.scrollTop,o=I.current.scrollLeft,r=H.current?function e(t){if(!t)return[0,0];var a=t.offsetParent,n=t.offsetLeft,l=t.offsetTop;if(a!==W.current.offsetParent&&a){a.hasAttribute(A)&&(te.immediateChild=a);var o=e(a),r=Object(c.a)(o,2),i=r[0],m=r[1];return[n+i-a.scrollLeft,l+m-a.scrollTop]}return[n,l]}(H.current):[o+O*e.width,l+C*e.height],i=Object(c.a)(r,2),m=i[0],s=i[1];n.x=(m-a.left)/t.width,n.y=(s-a.top)/t.height,n.offsetX=(m-o)/e.width,n.offsetY=(s-l)/e.height}function me(){var e=te.pos,t=e.x,a=e.y,n=e.offsetX,l=e.offsetY;j&&j(a),S&&S(t),Y&&Y(l),_&&_(n)}function se(){var e=te.pos,t=te.content,a=te.divSize,n=te.margins,l=function(){var e=te.divSize,t=te.pos,a=t.offsetY,n=t.offsetX;if(H.current){var l=H.current.getBoundingClientRect(),o=l.height,r=l.width,i=o/e.height,c=r/e.width;X+i+X>1?a=a+i/2>.5?X:1-i-X:(a<X&&(a=X),a+i>1-X&&(a=1-X-i)),X+c+X>1?n=n+c/2>.5?X:1-c-X:(n<X&&(n=X),n+c>1-X&&(n=1-X-c))}return{offsetY:a,offsetX:n}}(),o=l.offsetY,r=l.offsetX;te.isAutoScrolling=!0,I.current.scrollTop=e.y*t.height-o*a.height+n.top,I.current.scrollLeft=e.x*t.width-r*a.width+n.left}function ue(){te.divSize={width:I.current.clientWidth,height:I.current.clientHeight}}return Object(n.useLayoutEffect)((function(){I.current.style.visibility="hidden","static"===getComputedStyle(I.current).position&&(I.current.style.position="relative"),ue(),ie(),te.initializing=!1,I.current.style.visibility="visible"}),[]),Object(n.useEffect)((function(){return window.addEventListener("resize",re),function(){window.removeEventListener("resize",re)}})),Object(n.useEffect)((function(){if(!te.initializing){var e=te.pos,t=e.x,a=e.y,n=e.offsetX,l=e.offsetY,o=Z.current,r=o.prevSX,i=o.prevSY,c=o.prevVX,m=o.prevVY;return(S&&h!=t||j&&y!=a||_&&O!=n||Y&&C!=l||!S&&h!=r||!j&&y!=i||!_&&O!=c||!Y&&C!=m)&&(te.pos={x:h,offsetX:O,y:y,offsetY:C},se()),function(){Z.current={prevSX:h,prevSY:y,prevVX:O,prevVY:C}}}}),[h,y,O,C]),Object(n.useEffect)((function(){te.initializing||ie()}),[s,p,v,g,X]),Object(n.useEffect)((function(){return I.current.setAttribute(A,"0"),J.current=new MutationObserver(oe),function(){J.current.disconnect()}}),[]),l.a.createElement("div",{ref:I,className:o,onScroll:function(e){return++P.current,M("v3 ".concat(G.current," ").concat(P.current)),te.isAutoScrolling?(e.stopPropagation(),void(te.isAutoScrolling=!1)):"stupid scrolling"===G.current?(e.stopPropagation(),void e.preventDefault()):(ce(),void me())},onFocus:function(e){ne(),H.current=e.target,te.immediateChild=null,ce(),function(){if(null===te.immediateChild)return;te.immediateChild.setAttribute(A,"0"),J.current.observe(te.immediateChild,{attributes:!0,attributesFilter:[A]})}(),T?(ae("just focused"),$("no").then((function(){se(),me()}))):me()},onBlurCapture:function(e){ne(),H.current=null,ce(),me()}},l.a.createElement("div",{ref:W,style:{position:"absolute",width:"1px",height:"1px",top:"0px",visibility:"hidden"}}),l.a.createElement("div",{ref:D,className:i},t))},b=a(2),g=a.n(b);function E(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]),a=t.nestedScrollY,n=t.nestedViewY,o=t.setNestedScrollY,r=t.setNestedViewY,i=t.nestedMarginTop,c=t.nestedMarginBottom;return l.a.createElement(v,Object.assign({className:g.a["first-scroll"],contentClass:g.a["first-scroll-content"]},t,{marginLeft:0,marginRight:0}),l.a.createElement("div",{className:g.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement(v,{className:g.a["second-scroll"],contentClass:g.a["second-scroll-content"],scrollY:a,viewY:n,setScrollY:o,setViewY:r,marginTop:i,marginBottom:c},l.a.createElement("h4",{id:g.a.label4},"Second scroll Content"),l.a.createElement("div",{className:g.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:g.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"})))))}var h=a(6),x=a.n(h);function y(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]);return l.a.createElement(v,Object.assign({className:x.a["scroll-container"],contentClass:x.a["scroll-content"]},t),l.a.createElement("p",{className:"description"},"Focused element will automatically scroll to visible area."),l.a.createElement("div",{className:x.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:x.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))))}var w=a(4),O=a.n(w);function N(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]);return l.a.createElement(v,Object.assign({className:O.a["scroll-container"],contentClass:O.a["scroll-content"]},t),l.a.createElement("p",{className:"description"},"Focused element will automatically scroll to visible area."),l.a.createElement("div",{className:O.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:O.a["form-container"]},l.a.createElement("form",{autoComplete:"off"},l.a.createElement("h3",null,"Sample form 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("textarea",{className:O.a.story,placeholder:"Story",rows:"25",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))))}var C=function(){var e=Object(n.useState)(1),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!0),m=Object(c.a)(r,2),s=m[0],u=m[1],p=Object(n.useState)(!0),d=Object(c.a)(p,2),f=d[0],v=d[1],b=Object(n.useState)(0),g=Object(c.a)(b,2),h=g[0],x=g[1],w=Object(n.useState)(.1),O=Object(c.a)(w,2),C=O[0],S=O[1],j=Object(n.useState)(0),_=Object(c.a)(j,2),Y=_[0],F=_[1],X=Object(n.useState)(.1),k=Object(c.a)(X,2),T=k[0],L=k[1],R=Object(n.useState)(.5),V=Object(c.a)(R,2),B=V[0],z=V[1],A=Object(n.useState)(.5),M=Object(c.a)(A,2),P=M[0],I=M[1],D=Object(n.useState)(.5),W=Object(c.a)(D,2),H=W[0],J=W[1],G=Object(n.useState)(.5),Z=Object(c.a)(G,2),q=Z[0],K=Z[1],Q=Object(n.useState)(0),U=Object(c.a)(Q,2),$=U[0],ee=U[1],te=Object(n.useState)(.1),ae=Object(c.a)(te,2),ne=ae[0],le=ae[1],oe=Object(n.useState)(.5),re=Object(c.a)(oe,2),ie=re[0],ce=re[1],me=Object(n.useState)(.5),se=Object(c.a)(me,2),ue=se[0],pe=se[1],de=Object(n.useState)(""),fe=Object(c.a)(de,2),ve=fe[0];function be(){F(0),L(.1),x(0),S(.1),z(.5),I(.5),J(.5),K(.5),console.log("reset called")}var ge=function(e){switch(e.target.name){case"scrollY":x(e.target.value);break;case"viewY":S(e.target.value);break;case"scrollX":F(e.target.value);break;case"viewX":L(e.target.value);break;case"marginTop":z(e.target.value);break;case"marginBottom":I(e.target.value);break;case"marginLeft":J(e.target.value);break;case"marginRight":K(e.target.value);break;case"nestedScrollY":ee(e.target.value);break;case"nestedViewY":le(e.target.value);break;case"nestedMarginTop":ce(e.target.value);break;case"nestedMarginBottom":pe(e.target.value)}},Ee={scrollY:h,viewY:C,scrollX:Y,viewX:T,marginTop:B,marginBottom:P,marginLeft:H,marginRight:q,nestedScrollY:$,nestedViewY:ne,nestedMarginTop:ie,nestedMarginBottom:ue,setAnalizer:fe[1]},he={setScrollY:x,setViewY:S,setScrollX:F,setViewX:L,setNestedScrollY:ee,setNestedViewY:le},xe=f?Object(i.a)(Object(i.a)({},Ee),he):Object(i.a)({},Ee);return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"options ".concat(0==s?"options-hide":"")},l.a.createElement("h3",{onClick:function(){return u(!s)}},"Hide"),l.a.createElement("h3",{className:"menu-button ".concat(0==s?"visible":""),onClick:function(){return u(!s)}},"Menu"),l.a.createElement("h4",null,ve),l.a.createElement("div",{className:"containers"},l.a.createElement("button",{onClick:function(){be(),o(1)}},"Simple responsive scroll"),l.a.createElement("button",{onClick:function(){be(),o(2)}},"Two dimentional scrolls"),l.a.createElement("button",{onClick:function(){be(),o(3)}},"Nested scrolls")),l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"active"},"Active mode"),l.a.createElement("input",{type:"checkbox",id:"active",name:"active",value:"active",checked:f,onChange:function(e){v(e.target.checked)}})),l.a.createElement("label",{htmlFor:"scrollY"},"scrollY = ".concat(Number(h).toFixed(3))),l.a.createElement("input",{id:"scrollY",type:"range",min:"0",max:"1",step:"0.05",value:h,name:"scrollY",onChange:ge}),l.a.createElement("label",{htmlFor:"viewY"},"viewY = ".concat(Number(C).toFixed(3))),l.a.createElement("input",{id:"viewY",type:"range",min:"0",max:"1",step:"0.05",value:C,name:"viewY",onChange:ge}),2===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"scrollX"},"scrollX = ".concat(Number(Y).toFixed(3))),l.a.createElement("input",{id:"scrollX",type:"range",min:"0",max:"1",step:"0.05",value:Y,name:"scrollX",onChange:ge}),l.a.createElement("label",{htmlFor:"viewX"},"viewX = ".concat(Number(T).toFixed(3))),l.a.createElement("input",{id:"viewX",type:"range",min:"0",max:"1",step:"0.05",value:T,name:"viewX",onChange:ge})):null),l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},l.a.createElement("label",{htmlFor:"marginTop"},"marginTop = ".concat(Number(B).toFixed(3))),l.a.createElement("input",{id:"marginTop",type:"range",min:"0",max:"1",step:"0.05",value:B,name:"marginTop",onChange:ge}),l.a.createElement("label",{htmlFor:"marginBottom"},"marginBottom = ".concat(Number(P).toFixed(3))),l.a.createElement("input",{id:"marginBottom",type:"range",min:"0",max:"1",step:"0.05",value:P,name:"marginBottom",onChange:ge}),2===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"marginLeft"},"marginLeft = ".concat(Number(H).toFixed(3))),l.a.createElement("input",{id:"marginLeft",type:"range",min:"0",max:"1",step:"0.05",value:H,name:"marginLeft",onChange:ge}),l.a.createElement("label",{htmlFor:"marginRight"},"marginRight = ".concat(Number(q).toFixed(3))),l.a.createElement("input",{id:"marginRight",type:"range",min:"0",max:"1",step:"0.05",value:q,name:"marginRight",onChange:ge})):null),3===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},3===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Nested Scroll"),l.a.createElement("label",{htmlFor:"nestedScrollY"},"scrollY = ".concat(Number($).toFixed(3))),l.a.createElement("input",{id:"nestedScrollY",type:"range",min:"0",max:"1",step:"0.05",value:$,name:"nestedScrollY",onChange:ge}),l.a.createElement("label",{htmlFor:"nestedViewY"},"viewY = ".concat(Number(ne).toFixed(3))),l.a.createElement("input",{id:"nestedViewY",type:"range",min:"0",max:"1",step:"0.05",value:ne,name:"nestedViewY",onChange:ge})):null),l.a.createElement("div",{className:"containers"},l.a.createElement("label",{htmlFor:"nestedMarginTop"},"marginTop = ".concat(Number(ie).toFixed(3))),l.a.createElement("input",{id:"nestedMarginTop",type:"range",min:"0",max:"1",step:"0.05",value:ie,name:"nestedMarginTop",onChange:ge}),l.a.createElement("label",{htmlFor:"nestedMarginBottom"},"marginBottom = ".concat(Number(ue).toFixed(3))),l.a.createElement("input",{id:"nestedMarginBottom",type:"range",min:"0",max:"1",step:"0.05",value:ue,name:"nestedMarginBottom",onChange:ge}))):null),1===a?l.a.createElement(y,Object.assign({},xe,{marginLeft:0,marginRight:0})):null,2===a?l.a.createElement(N,xe):null,3===a?l.a.createElement(E,xe):null)};r.a.render(l.a.createElement(C,null),document.getElementById("root"))},4:function(e,t,a){e.exports={"scroll-container":"two-dimension-example_scroll-container__2ElSI","scroll-content":"two-dimension-example_scroll-content__1iUnv","form-container":"two-dimension-example_form-container__3bKPh",label1:"two-dimension-example_label1__dVc7-",label2:"two-dimension-example_label2__GZsR3",story:"two-dimension-example_story__3birs"}},6:function(e,t,a){e.exports={"scroll-container":"simple-example_scroll-container__kQ94p","scroll-content":"simple-example_scroll-content__1RFhz","form-container":"simple-example_form-container__3VqxE",label1:"simple-example_label1__2SCoi",label2:"simple-example_label2__3wIdF"}}},[[13,1,2]]]);
//# sourceMappingURL=main.09d0a1af.chunk.js.map