(this["webpackJsonpauto-scroll-container-example"]=this["webpackJsonpauto-scroll-container-example"]||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},14:function(e,t,a){},2:function(e,t,a){e.exports={"first-scroll":"two-scroll-example_first-scroll__15DkW","first-scroll-content":"two-scroll-example_first-scroll-content__YX-cG","second-scroll":"two-scroll-example_second-scroll__nVPoW","second-scroll-content":"two-scroll-example_second-scroll-content__2_AsJ","form-container":"two-scroll-example_form-container__1Z260",label1:"two-scroll-example_label1__XjeC7",label2:"two-scroll-example_label2__ATsid",label3:"two-scroll-example_label3__2yfgk",label4:"two-scroll-example_label4__3d4g4"}},22:function(e,t,a){"use strict";a.r(t);a(14);var n=a(0),l=a.n(n),o=a(10),r=a.n(o),i=a(8),c=a(1),m=a(3),s=a(9),u=a.n(s),p=a(12),d=a(11);function f(e,t,a){var l=Object(n.useRef)({timeout:null,cancel:null}).current;return Object(n.useEffect)((function(){return function(){l.cancel&&l.cancel(!0),l.timeout&&clearTimeout(l.timeout)}}),[]),[function(){var n=arguments;return l.cancel&&(l.cancel(),l.cancel=null),l.timeout&&(clearTimeout(l.timeout),l.timeout=null),new Promise((function(o,r){var i=!0;l.cancel=function(e){i=!1,a&&!e&&r({message:"Function call canceled",timestamp:Date.now()})},l.timeout=setTimeout(Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l.timeout=null,t.prev=1,t.next=4,e&&e.apply(void 0,Object(p.a)(n));case 4:a=t.sent,l.cancel=null,i&&o(a),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),l.cancel=null,i&&r(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])}))),t||0)}))},function(e){l.cancel&&(l.cancel(e),l.cancel=null),l.timeout&&(clearTimeout(l.timeout),l.timeout=null)}]}var v=function(e){var t=e.children,a=e.className,o=void 0===a?"":a,r=e.contentClass,i=void 0===r?"":r,m=e.marginTop,s=void 0===m?.5:m,u=e.marginBottom,p=void 0===u?.5:u,d=e.marginLeft,v=void 0===d?0:d,b=e.marginRight,g=void 0===b?0:b,h=e.scrollX,E=void 0===h?0:h,x=e.scrollY,w=void 0===x?0:x,y=e.viewX,O=void 0===y?.1:y,S=e.viewY,N=void 0===S?.1:S,C=e.setScrollX,j=e.setScrollY,_=e.setViewX,Y=e.setViewY,F=(e.smoothScroll,e.viewMargin),X=void 0===F?.05:F,k=e.autoScrollOnFocus,T=void 0===k||k,L=e.debouncingDelay,R=void 0===L?200:L,V=e.keyboardPopDelay,z=void 0===V?200:V,B=e.signature,A=void 0===B?"data-auto-scroll-container-signature":B,M=e.setAnalizer,P=e.analizer,I=Object(n.useRef)(0),D=Object(n.useRef)(),H=Object(n.useRef)(),W=Object(n.useRef)(),J=Object(n.useRef)(null),G=Object(n.useRef)(null),Z=Object(n.useRef)("no"),q=Object(n.useRef)(null),K=Object(n.useRef)({x:E,offsetX:O,y:w,offsetY:N}),Q=f(de,R),U=Object(c.a)(Q,1)[0],$=f(le,z),ee=Object(c.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useRef)({initializing:!0,isAutoScrolling:!1,immediateChild:null,divSize:void 0,margins:void 0,content:void 0,pos:{x:E,offsetX:O,y:w,offsetY:N}}).current;function le(e){Z.current=e}function oe(){null!==ne.immediateChild&&G.current.disconnect()}function re(){var e=Number(D.current.getAttribute(A));D.current.setAttribute(A,(e+1).toString())}function ie(){ne.initializing||(de(),me(),re())}function ce(){ne.initializing||ne.immediateChild||("just focused"===Z.current&&(ae(),le("stupid scrolling")),U().then((function(){M("dHit=".concat(ne.divSize.height," ").concat(P)),le("no"),fe(),me(),re()})))}function me(){!function(){var e=ne.divSize,t=e.width,a=e.height;ne.margins={top:s*a,bottom:p*a,left:v*t,right:g*t}}(),function(){var e=ne.margins,t=e.top,a=e.bottom,n=e.left,l=e.right,o=H.current.style;s&&(o.marginTop="".concat(t,"px"));p&&(o.marginBottom="".concat(a,"px"));v&&(W.current.style.left="".concat(n,"px"),o.marginLeft="".concat(n,"px"));g&&(W.current.style.left="".concat(D.current.scrollWidth+l,"px"))}(),function(){var e=ne.margins,t=e.top,a=e.bottom,n=e.left,l=e.right;ne.content={width:D.current.scrollWidth-n-l,height:D.current.scrollHeight-t-a}}(),pe(),se(),ue()}function se(){var e=ne.divSize,t=ne.content,a=ne.margins,n=ne.pos,l=D.current.scrollTop,o=D.current.scrollLeft,r=J.current?function e(t){if(!t)return[0,0];var a=t.offsetParent,n=t.offsetLeft,l=t.offsetTop;if(a!==W.current.offsetParent&&a){a.hasAttribute(A)&&(ne.immediateChild=a);var o=e(a),r=Object(c.a)(o,2),i=r[0],m=r[1];return[n+i-a.scrollLeft,l+m-a.scrollTop]}return[n,l]}(J.current):[o+O*e.width,l+N*e.height],i=Object(c.a)(r,2),m=i[0],s=i[1];n.x=(m-a.left)/t.width,n.y=(s-a.top)/t.height,n.offsetX=(m-o)/e.width,n.offsetY=(s-l)/e.height}function ue(){var e=ne.pos,t=e.x,a=e.y,n=e.offsetX,l=e.offsetY;j&&j(a),C&&C(t),Y&&Y(l),_&&_(n)}function pe(){var e=ne.pos,t=ne.content,a=ne.divSize,n=ne.margins,l=function(){var e=ne.divSize,t=ne.pos,a=t.offsetY,n=t.offsetX;if(J.current){var l=J.current.getBoundingClientRect(),o=l.height,r=l.width,i=o/e.height,c=r/e.width;X+i+X>1?a=a+i/2>.5?X:1-i-X:(a<X&&(a=X),a+i>1-X&&(a=1-X-i)),X+c+X>1?n=n+c/2>.5?X:1-c-X:(n<X&&(n=X),n+c>1-X&&(n=1-X-c))}return{offsetY:a,offsetX:n}}(),o=l.offsetY,r=l.offsetX;ne.isAutoScrolling=!0,D.current.scrollTop=e.y*t.height-o*a.height+n.top,D.current.scrollLeft=e.x*t.width-r*a.width+n.left}function de(){ne.divSize={width:D.current.offsetWidth,height:D.current.offsetHeight}}function fe(){if(q.current){var e=D.current.style;e.overflow=q.current.overflow,e.overflowX=q.current.overflowX,e.overflowY=q.current.overflowY}}return Object(n.useLayoutEffect)((function(){D.current.style.visibility="hidden","static"===getComputedStyle(D.current).position&&(D.current.style.position="relative"),de(),M("iniHit=".concat(ne.divSize.height," ").concat(P)),me(),ne.initializing=!1,D.current.style.visibility="visible"}),[]),Object(n.useEffect)((function(){return window.addEventListener("resize",ce),function(){window.removeEventListener("resize",ce)}})),Object(n.useEffect)((function(){if(!ne.initializing){var e=ne.pos,t=e.x,a=e.y,n=e.offsetX,l=e.offsetY,o=K.current,r=o.prevSX,i=o.prevSY,c=o.prevVX,m=o.prevVY;return(C&&E!=t||j&&w!=a||_&&O!=n||Y&&N!=l||!C&&E!=r||!j&&w!=i||!_&&O!=c||!Y&&N!=m)&&(ne.pos={x:E,offsetX:O,y:w,offsetY:N},pe()),function(){K.current={prevSX:E,prevSY:w,prevVX:O,prevVY:N}}}}),[E,w,O,N]),Object(n.useEffect)((function(){ne.initializing||me()}),[s,p,v,g,X]),Object(n.useEffect)((function(){return D.current.setAttribute(A,"0"),G.current=new MutationObserver(ie),function(){G.current.disconnect()}}),[]),l.a.createElement("div",{ref:D,className:o,onScroll:function(e){return++I.current,ne.isAutoScrolling?(e.stopPropagation(),void(ne.isAutoScrolling=!1)):"stupid scrolling"===Z.current?(M("stupid ".concat(P)),e.stopImmediatePropagation(),e.stopPropagation(),void e.preventDefault()):(se(),M("S=".concat(ne.pos.y.toFixed(2),", ").concat(ne.pos.offsetY.toFixed(2)," ").concat(P)),void ue())},onFocus:function(e){oe(),J.current=e.target,ne.immediateChild=null,se(),M("F=".concat(ne.pos.y.toFixed(2),", ").concat(ne.pos.offsetY.toFixed(2)," ").concat(P)),function(){if(null===ne.immediateChild)return;ne.immediateChild.setAttribute(A,"0"),G.current.observe(ne.immediateChild,{attributes:!0,attributesFilter:[A]})}(),T?(le("just focused"),function(){var e=window.getComputedStyle(D.current);q.current={overflow:e.getPropertyValue("overflow"),overflowX:e.getPropertyValue("overflow-x"),overflowY:e.getPropertyValue("overflow-y")},D.current.style.overflow="hidden",D.current.style.overflowX="hidden",D.current.style.overflowY="hidden"}(),te("no").then((function(){fe(),pe(),ue()}))):ue()},onBlurCapture:function(e){oe(),J.current=null,se(),ue()}},l.a.createElement("div",{ref:W,style:{position:"absolute",width:"1px",height:"1px",top:"0px",visibility:"hidden"}}),l.a.createElement("div",{ref:H,className:i},t))},b=a(2),g=a.n(b);function h(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]),a=t.nestedScrollY,n=t.nestedViewY,o=t.setNestedScrollY,r=t.setNestedViewY,i=t.nestedMarginTop,c=t.nestedMarginBottom;return l.a.createElement(v,Object.assign({className:g.a["first-scroll"],contentClass:g.a["first-scroll-content"]},t,{marginLeft:0,marginRight:0}),l.a.createElement("div",{className:g.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement(v,{className:g.a["second-scroll"],contentClass:g.a["second-scroll-content"],scrollY:a,viewY:n,setScrollY:o,setViewY:r,marginTop:i,marginBottom:c},l.a.createElement("h4",{id:g.a.label4},"Second scroll Content"),l.a.createElement("div",{className:g.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:g.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"})))))}var E=a(6),x=a.n(E);function w(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]);return l.a.createElement(v,Object.assign({className:x.a["scroll-container"],contentClass:x.a["scroll-content"]},t),l.a.createElement("p",{className:"description"},"Focused element will automatically scroll to visible area."),l.a.createElement("div",{className:x.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:x.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))))}var y=a(4),O=a.n(y);function S(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]);return l.a.createElement(v,Object.assign({className:O.a["scroll-container"],contentClass:O.a["scroll-content"]},t),l.a.createElement("p",{className:"description"},"Focused element will automatically scroll to visible area."),l.a.createElement("div",{className:O.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:O.a["form-container"]},l.a.createElement("form",{autoComplete:"off"},l.a.createElement("h3",null,"Sample form 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("textarea",{className:O.a.story,placeholder:"Story",rows:"25",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))))}var N=function(){var e=Object(n.useState)(1),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!0),m=Object(c.a)(r,2),s=m[0],u=m[1],p=Object(n.useState)(!0),d=Object(c.a)(p,2),f=d[0],v=d[1],b=Object(n.useState)(0),g=Object(c.a)(b,2),E=g[0],x=g[1],y=Object(n.useState)(.1),O=Object(c.a)(y,2),N=O[0],C=O[1],j=Object(n.useState)(0),_=Object(c.a)(j,2),Y=_[0],F=_[1],X=Object(n.useState)(.1),k=Object(c.a)(X,2),T=k[0],L=k[1],R=Object(n.useState)(.5),V=Object(c.a)(R,2),z=V[0],B=V[1],A=Object(n.useState)(.5),M=Object(c.a)(A,2),P=M[0],I=M[1],D=Object(n.useState)(.5),H=Object(c.a)(D,2),W=H[0],J=H[1],G=Object(n.useState)(.5),Z=Object(c.a)(G,2),q=Z[0],K=Z[1],Q=Object(n.useState)(0),U=Object(c.a)(Q,2),$=U[0],ee=U[1],te=Object(n.useState)(.1),ae=Object(c.a)(te,2),ne=ae[0],le=ae[1],oe=Object(n.useState)(.5),re=Object(c.a)(oe,2),ie=re[0],ce=re[1],me=Object(n.useState)(.5),se=Object(c.a)(me,2),ue=se[0],pe=se[1],de=Object(n.useState)(""),fe=Object(c.a)(de,2),ve=fe[0];function be(){F(0),L(.1),x(0),C(.1),B(.5),I(.5),J(.5),K(.5)}var ge=function(e){switch(e.target.name){case"scrollY":x(e.target.value);break;case"viewY":C(e.target.value);break;case"scrollX":F(e.target.value);break;case"viewX":L(e.target.value);break;case"marginTop":B(e.target.value);break;case"marginBottom":I(e.target.value);break;case"marginLeft":J(e.target.value);break;case"marginRight":K(e.target.value);break;case"nestedScrollY":ee(e.target.value);break;case"nestedViewY":le(e.target.value);break;case"nestedMarginTop":ce(e.target.value);break;case"nestedMarginBottom":pe(e.target.value)}},he={scrollY:E,viewY:N,scrollX:Y,viewX:T,marginTop:z,marginBottom:P,marginLeft:W,marginRight:q,nestedScrollY:$,nestedViewY:ne,nestedMarginTop:ie,nestedMarginBottom:ue,setAnalizer:fe[1],analizer:ve},Ee={setScrollY:x,setViewY:C,setScrollX:F,setViewX:L,setNestedScrollY:ee,setNestedViewY:le},xe=f?Object(i.a)(Object(i.a)({},he),Ee):Object(i.a)({},he);return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"options ".concat(0==s?"options-hide":"")},l.a.createElement("h3",{onClick:function(){return u(!s)}},"Hide"),l.a.createElement("h3",{className:"menu-button ".concat(0==s?"visible":""),onClick:function(){return u(!s)}},"Menu"),l.a.createElement("p",{id:"temp"},ve),l.a.createElement("div",{className:"containers"},l.a.createElement("button",{onClick:function(){be(),o(1)}},"Simple responsive scroll"),l.a.createElement("button",{onClick:function(){be(),o(2)}},"Two dimentional scrolls"),l.a.createElement("button",{onClick:function(){be(),o(3)}},"Nested scrolls")),l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"active"},"Active mode"),l.a.createElement("input",{type:"checkbox",id:"active",name:"active",value:"active",checked:f,onChange:function(e){v(e.target.checked)}})),l.a.createElement("label",{htmlFor:"scrollY"},"scrollY = ".concat(Number(E).toFixed(3))),l.a.createElement("input",{id:"scrollY",type:"range",min:"0",max:"1",step:"0.05",value:E,name:"scrollY",onChange:ge}),l.a.createElement("label",{htmlFor:"viewY"},"viewY = ".concat(Number(N).toFixed(3))),l.a.createElement("input",{id:"viewY",type:"range",min:"0",max:"1",step:"0.05",value:N,name:"viewY",onChange:ge}),2===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"scrollX"},"scrollX = ".concat(Number(Y).toFixed(3))),l.a.createElement("input",{id:"scrollX",type:"range",min:"0",max:"1",step:"0.05",value:Y,name:"scrollX",onChange:ge}),l.a.createElement("label",{htmlFor:"viewX"},"viewX = ".concat(Number(T).toFixed(3))),l.a.createElement("input",{id:"viewX",type:"range",min:"0",max:"1",step:"0.05",value:T,name:"viewX",onChange:ge})):null),l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},l.a.createElement("label",{htmlFor:"marginTop"},"marginTop = ".concat(Number(z).toFixed(3))),l.a.createElement("input",{id:"marginTop",type:"range",min:"0",max:"1",step:"0.05",value:z,name:"marginTop",onChange:ge}),l.a.createElement("label",{htmlFor:"marginBottom"},"marginBottom = ".concat(Number(P).toFixed(3))),l.a.createElement("input",{id:"marginBottom",type:"range",min:"0",max:"1",step:"0.05",value:P,name:"marginBottom",onChange:ge}),2===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"marginLeft"},"marginLeft = ".concat(Number(W).toFixed(3))),l.a.createElement("input",{id:"marginLeft",type:"range",min:"0",max:"1",step:"0.05",value:W,name:"marginLeft",onChange:ge}),l.a.createElement("label",{htmlFor:"marginRight"},"marginRight = ".concat(Number(q).toFixed(3))),l.a.createElement("input",{id:"marginRight",type:"range",min:"0",max:"1",step:"0.05",value:q,name:"marginRight",onChange:ge})):null),3===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},3===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Nested Scroll"),l.a.createElement("label",{htmlFor:"nestedScrollY"},"scrollY = ".concat(Number($).toFixed(3))),l.a.createElement("input",{id:"nestedScrollY",type:"range",min:"0",max:"1",step:"0.05",value:$,name:"nestedScrollY",onChange:ge}),l.a.createElement("label",{htmlFor:"nestedViewY"},"viewY = ".concat(Number(ne).toFixed(3))),l.a.createElement("input",{id:"nestedViewY",type:"range",min:"0",max:"1",step:"0.05",value:ne,name:"nestedViewY",onChange:ge})):null),l.a.createElement("div",{className:"containers"},l.a.createElement("label",{htmlFor:"nestedMarginTop"},"marginTop = ".concat(Number(ie).toFixed(3))),l.a.createElement("input",{id:"nestedMarginTop",type:"range",min:"0",max:"1",step:"0.05",value:ie,name:"nestedMarginTop",onChange:ge}),l.a.createElement("label",{htmlFor:"nestedMarginBottom"},"marginBottom = ".concat(Number(ue).toFixed(3))),l.a.createElement("input",{id:"nestedMarginBottom",type:"range",min:"0",max:"1",step:"0.05",value:ue,name:"nestedMarginBottom",onChange:ge}))):null),1===a?l.a.createElement(w,Object.assign({},xe,{marginLeft:0,marginRight:0})):null,2===a?l.a.createElement(S,xe):null,3===a?l.a.createElement(h,xe):null)};r.a.render(l.a.createElement(N,null),document.getElementById("root"))},4:function(e,t,a){e.exports={"scroll-container":"two-dimension-example_scroll-container__2ElSI","scroll-content":"two-dimension-example_scroll-content__1iUnv","form-container":"two-dimension-example_form-container__3bKPh",label1:"two-dimension-example_label1__dVc7-",label2:"two-dimension-example_label2__GZsR3",story:"two-dimension-example_story__3birs"}},6:function(e,t,a){e.exports={"scroll-container":"simple-example_scroll-container__kQ94p","scroll-content":"simple-example_scroll-content__1RFhz","form-container":"simple-example_form-container__3VqxE",label1:"simple-example_label1__2SCoi",label2:"simple-example_label2__3wIdF"}}},[[13,1,2]]]);
//# sourceMappingURL=main.a9530d2a.chunk.js.map