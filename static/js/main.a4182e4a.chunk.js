(this["webpackJsonpauto-scroll-container-example"]=this["webpackJsonpauto-scroll-container-example"]||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},14:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);a(14);var n=a(0),l=a.n(n),o=a(10),r=a.n(o),i=a(2),c=a(1),m=a(4),s=a(9),u=a.n(s),p=a(12),d=a(11);function f(e,t,a){var l=Object(n.useRef)({timeout:null,cancel:null}).current;return Object(n.useEffect)((function(){return function(){l.cancel&&l.cancel(!0),l.timeout&&clearTimeout(l.timeout)}}),[]),[function(){var n=arguments;return l.cancel&&(l.cancel(),l.cancel=null),l.timeout&&(clearTimeout(l.timeout),l.timeout=null),new Promise((function(o,r){var i=!0;l.cancel=function(e){i=!1,a&&!e&&r({message:"Function call canceled",timestamp:Date.now()})},l.timeout=setTimeout(Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l.timeout=null,t.prev=1,t.next=4,e&&e.apply(void 0,Object(p.a)(n));case 4:a=t.sent,l.cancel=null,i&&o(a),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),l.cancel=null,i&&r(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])}))),t||0)}))},function(e){l.cancel&&(l.cancel(e),l.cancel=null),l.timeout&&(clearTimeout(l.timeout),l.timeout=null)}]}var v=function(e){var t=e.children,a=e.className,o=void 0===a?"":a,r=e.contentClass,i=void 0===r?"":r,m=e.marginTop,s=void 0===m?.5:m,u=e.marginBottom,p=void 0===u?.5:u,d=e.marginLeft,v=void 0===d?0:d,b=e.marginRight,E=void 0===b?0:b,g=e.scrollPos,h=e.setScrollPos,x=(e.smoothScroll,e.viewMargin),w=void 0===x?.05:x,y=e.autoScrollOnFocus,O=void 0===y||y,N=e.debouncingDelay,C=void 0===N?200:N,j=e.keyboardPopDelay,S=void 0===j?1500:j,_=e.signature,Y=void 0===_?"data-auto-scroll-container-signature":_,F=Object(n.useRef)(),X=Object(n.useRef)(),k=Object(n.useRef)(),T=Object(n.useRef)(null),L=Object(n.useRef)(null),R=Object(n.useRef)(!1),B=Object(n.useRef)(!1),M=f($,C),z=Object(c.a)(M,1)[0],A=f(W,S),P=Object(c.a)(A,2),V=P[0],I=(P[1],Object(n.useRef)({initializing:!0,isAutoScrolling:!1,immediateChild:null,divSize:void 0,margins:void 0,content:void 0,pos:{x:g.scrollX,offsetX:g.viewX,y:g.scrollY,offsetY:g.viewY}}).current);function D(e){R.current=e}function W(e){B.current=e}function H(){null!==I.immediateChild&&L.current.disconnect()}function J(){var e=Number(F.current.getAttribute(Y));F.current.setAttribute(Y,(e+1).toString())}function G(){I.initializing||($(),D(!1),q(),J())}function Z(){I.initializing||(B.current&&D(!0),I.immediateChild||z().then((function(){D(!1),q(),J()})))}function q(){!function(){var e=I.divSize,t=e.width,a=e.height;I.margins={top:s*a,bottom:p*a,left:v*t,right:E*t}}(),function(){var e=I.margins,t=e.top,a=e.bottom,n=e.left,l=e.right,o=X.current.style;s&&(o.marginTop="".concat(t,"px"));p&&(o.marginBottom="".concat(a,"px"));v&&(k.current.style.left="".concat(n,"px"),o.marginLeft="".concat(n,"px"));E&&(k.current.style.left="".concat(F.current.scrollWidth+l,"px"))}(),function(){var e=I.margins,t=e.top,a=e.bottom,n=e.left,l=e.right;I.content={width:F.current.scrollWidth-n-l,height:F.current.scrollHeight-t-a}}(),U(),I.pos=K(),Q()}function K(){var e=I.divSize,t=I.content,a=I.margins,n=(I.pos,g.viewX),l=g.viewY,o=F.current.scrollTop,r=F.current.scrollLeft,i=T.current?function e(t){if(!t)return[0,0];var a=t.offsetParent,n=t.offsetLeft,l=t.offsetTop;if(a!==k.current.offsetParent&&a){a.hasAttribute(Y)&&(I.immediateChild=a);var o=e(a),r=Object(c.a)(o,2),i=r[0],m=r[1];return[n+i-a.scrollLeft,l+m-a.scrollTop]}return[n,l]}(T.current):[r+n*e.width,o+l*e.height],m=Object(c.a)(i,2),s=m[0],u=m[1];return{x:(s-a.left)/t.width,y:(u-a.top)/t.height,offsetX:(s-r)/e.width,offsetY:(u-o)/e.height}}function Q(){if(h){var e=I.pos,t=e.x,a=e.y,n=e.offsetX,l=e.offsetY;h((function(){return{scrollX:t,viewX:n,scrollY:a,viewY:l,autoScroll:!0}}))}}function U(){var e=I.pos,t=I.content,a=I.divSize,n=I.margins,l=function(){var e=I.divSize,t=I.pos,a=t.offsetY,n=t.offsetX;if(T.current){var l=T.current.getBoundingClientRect(),o=l.height,r=l.width,i=o/e.height,c=r/e.width;w+i+w>1?a=a+i/2>.5?w:1-i-w:(a<w&&(a=w),a+i>1-w&&(a=1-w-i)),w+c+w>1?n=n+c/2>.5?w:1-c-w:(n<w&&(n=w),n+c>1-w&&(n=1-w-c))}return{offsetY:a,offsetX:n}}(),o=l.offsetY,r=l.offsetX;I.isAutoScrolling=!0,F.current.scrollTop=e.y*t.height-o*a.height+n.top,F.current.scrollLeft=e.x*t.width-r*a.width+n.left}function $(){var e=F.current.getBoundingClientRect();I.divSize={width:e.width,height:Math.min(e.height,document.documentElement.clientHeight)}}return Object(n.useLayoutEffect)((function(){F.current.style.visibility="hidden","static"===getComputedStyle(F.current).position&&(F.current.style.position="relative"),$(),q(),I.initializing=!1,F.current.style.visibility="visible"}),[]),Object(n.useEffect)((function(){return window.addEventListener("resize",Z),function(){window.removeEventListener("resize",Z)}})),Object(n.useEffect)((function(){if(!I.initializing)if(g.autoScroll)g.autoScroll=!1;else{var e=g.scrollX,t=g.viewX,a=g.scrollY,n=g.viewY;I.pos={x:e,offsetX:t,y:a,offsetY:n},U()}}),[g]),Object(n.useEffect)((function(){I.initializing||q()}),[s,p,v,E,w]),Object(n.useEffect)((function(){return F.current.setAttribute(Y,"0"),L.current=new MutationObserver(G),function(){L.current.disconnect()}}),[]),l.a.createElement("div",{ref:F,className:o,onScroll:function(e){return I.isAutoScrolling?(e.stopPropagation(),void(I.isAutoScrolling=!1)):R.current?(U(),e.stopPropagation(),void e.preventDefault()):(I.pos=K(),void Q())},onFocus:function(e){H(),T.current=e.target,I.immediateChild=null,I.pos=K(),function(){if(null===I.immediateChild)return;I.immediateChild.setAttribute(Y,"0"),L.current.observe(I.immediateChild,{attributes:!0,attributesFilter:[Y]})}(),O&&(W(!0),U(),Q(),V(!1))},onBlurCapture:function(e){H(),T.current=null,I.pos=K(),Q()}},l.a.createElement("div",{ref:k,style:{position:"absolute",width:"1px",height:"1px",top:"0px",visibility:"hidden"}}),l.a.createElement("div",{ref:X,className:i},t))},b=a(3),E=a.n(b);function g(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]),a=t.nestedScrollY,n=t.nestedViewY,o=t.setNestedScrollY,r=t.setNestedViewY,i=t.nestedMarginTop,c=t.nestedMarginBottom;return l.a.createElement(v,Object.assign({className:E.a["first-scroll"],contentClass:E.a["first-scroll-content"]},t,{marginLeft:0,marginRight:0}),l.a.createElement("div",{className:E.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement(v,{className:E.a["second-scroll"],contentClass:E.a["second-scroll-content"],scrollY:a,viewY:n,setScrollY:o,setViewY:r,marginTop:i,marginBottom:c},l.a.createElement("h4",{id:E.a.label4},"Second scroll Content"),l.a.createElement("div",{className:E.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:E.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Inside Scroll 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"})))))}var h=a(7),x=a.n(h);function w(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]);return l.a.createElement(v,Object.assign({className:x.a["scroll-container"],contentClass:x.a["scroll-content"]},t),l.a.createElement("p",{className:"description"},"Focused element will automatically scroll to visible area."),l.a.createElement("div",{className:x.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:x.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))))}var y=a(5),O=a.n(y);function N(e){e.className,e.contentClass;var t=Object(m.a)(e,["className","contentClass"]);return l.a.createElement(v,Object.assign({className:O.a["scroll-container"],contentClass:O.a["scroll-content"]},t),l.a.createElement("p",{className:"description"},"Focused element will automatically scroll to visible area."),l.a.createElement("div",{className:O.a["form-container"]},l.a.createElement("form",null,l.a.createElement("h3",null,"Sample form 1"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option1",name:"favorit",value:"option1",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option1"},"Option 1")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option2",name:"favorit",value:"option2",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option2"},"Option 2")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"option3",name:"favorit",value:"option3",autoComplete:"lol"}),l.a.createElement("label",{htmlFor:"option3"},"Option 3"))),l.a.createElement("input",{type:"text",placeholder:"Phone Number",autoComplete:"lol"}),l.a.createElement("textarea",{placeholder:"Address",rows:"5",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))),l.a.createElement("div",{className:O.a["form-container"]},l.a.createElement("form",{autoComplete:"off"},l.a.createElement("h3",null,"Sample form 2"),l.a.createElement("input",{type:"text",placeholder:"First Name",autoComplete:"lol"}),l.a.createElement("input",{type:"text",placeholder:"Last Name",autoComplete:"lol"}),l.a.createElement("textarea",{className:O.a.story,placeholder:"Story",rows:"25",autoComplete:"lol"}),l.a.createElement("input",{type:"submit",name:"Submit"}))))}var C=function(){var e=Object(n.useState)(1),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!0),m=Object(c.a)(r,2),s=m[0],u=m[1],p=Object(n.useState)(!0),d=Object(c.a)(p,2),f=d[0],v=d[1],b=Object(n.useState)((function(){return{scrollX:0,viewX:.1,scrollY:0,viewY:.1}})),E=Object(c.a)(b,2),h=E[0],x=E[1],y=Object(n.useState)(.5),O=Object(c.a)(y,2),C=O[0],j=O[1],S=Object(n.useState)(.5),_=Object(c.a)(S,2),Y=_[0],F=_[1],X=Object(n.useState)(.5),k=Object(c.a)(X,2),T=k[0],L=k[1],R=Object(n.useState)(.5),B=Object(c.a)(R,2),M=B[0],z=B[1],A=Object(n.useState)(0),P=Object(c.a)(A,2),V=P[0],I=P[1],D=Object(n.useState)(.1),W=Object(c.a)(D,2),H=W[0],J=W[1],G=Object(n.useState)(.5),Z=Object(c.a)(G,2),q=Z[0],K=Z[1],Q=Object(n.useState)(.5),U=Object(c.a)(Q,2),$=U[0],ee=U[1];function te(){x((function(){return{scrollX:0,viewX:.1,scrollY:0,viewY:.1}})),j(.5),F(.5),L(.5),z(.5)}var ae=function(e){var t=e.target.value;switch(e.target.name){case"scrollY":x((function(e){return Object(i.a)(Object(i.a)({},e),{},{scrollY:t})}));break;case"viewY":x((function(e){return Object(i.a)(Object(i.a)({},e),{},{viewY:t})}));break;case"scrollX":x((function(e){return Object(i.a)(Object(i.a)({},e),{},{scrollX:t})}));break;case"viewX":x((function(e){return Object(i.a)(Object(i.a)({},e),{},{viewX:t})}));break;case"marginTop":j(t);break;case"marginBottom":F(t);break;case"marginLeft":L(t);break;case"marginRight":z(t);break;case"nestedScrollY":I(t);break;case"nestedViewY":J(t);break;case"nestedMarginTop":K(t);break;case"nestedMarginBottom":ee(t)}},ne={scrollPos:h,marginTop:C,marginBottom:Y,marginLeft:T,marginRight:M,nestedScrollY:V,nestedViewY:H,nestedMarginTop:q,nestedMarginBottom:$},le={setScrollPos:x,setNestedScrollY:I,setNestedViewY:J},oe=f?Object(i.a)(Object(i.a)({},ne),le):Object(i.a)({},ne);return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"options ".concat(!1===s?"options-hide":"")},l.a.createElement("h3",{onClick:function(){return u(!s)}},"Hide26"),l.a.createElement("h3",{className:"menu-button ".concat(!1===s?"visible":""),onClick:function(){return u(!s)}},"Menu"),l.a.createElement("div",{className:"containers"},l.a.createElement("button",{onClick:function(){te(),o(1)}},"Simple responsive scroll"),l.a.createElement("button",{onClick:function(){te(),o(2)}},"Two dimentional scrolls"),l.a.createElement("button",{onClick:function(){te(),o(3)}},"Nested scrolls")),l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"active"},"Active mode"),l.a.createElement("input",{type:"checkbox",id:"active",name:"active",value:"active",checked:f,onChange:function(e){v(e.target.checked)}})),l.a.createElement("label",{htmlFor:"scrollY"},"scrollY = ".concat(Number(h.scrollY).toFixed(3))),l.a.createElement("input",{id:"scrollY",type:"range",min:"0",max:"1",step:"0.05",value:h.scrollY,name:"scrollY",onChange:ae}),l.a.createElement("label",{htmlFor:"viewY"},"viewY = ".concat(Number(h.viewY).toFixed(3))),l.a.createElement("input",{id:"viewY",type:"range",min:"0",max:"1",step:"0.05",value:h.viewY,name:"viewY",onChange:ae}),2===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"scrollX"},"scrollX = ".concat(Number(h.scrollX).toFixed(3))),l.a.createElement("input",{id:"scrollX",type:"range",min:"0",max:"1",step:"0.05",value:h.scrollX,name:"scrollX",onChange:ae}),l.a.createElement("label",{htmlFor:"viewX"},"viewX = ".concat(Number(h.viewX).toFixed(3))),l.a.createElement("input",{id:"viewX",type:"range",min:"0",max:"1",step:"0.05",value:h.viewX,name:"viewX",onChange:ae})):null),l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},l.a.createElement("label",{htmlFor:"marginTop"},"marginTop = ".concat(Number(C).toFixed(3))),l.a.createElement("input",{id:"marginTop",type:"range",min:"0",max:"1",step:"0.05",value:C,name:"marginTop",onChange:ae}),l.a.createElement("label",{htmlFor:"marginBottom"},"marginBottom = ".concat(Number(Y).toFixed(3))),l.a.createElement("input",{id:"marginBottom",type:"range",min:"0",max:"1",step:"0.05",value:Y,name:"marginBottom",onChange:ae}),2===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"marginLeft"},"marginLeft = ".concat(Number(T).toFixed(3))),l.a.createElement("input",{id:"marginLeft",type:"range",min:"0",max:"1",step:"0.05",value:T,name:"marginLeft",onChange:ae}),l.a.createElement("label",{htmlFor:"marginRight"},"marginRight = ".concat(Number(M).toFixed(3))),l.a.createElement("input",{id:"marginRight",type:"range",min:"0",max:"1",step:"0.05",value:M,name:"marginRight",onChange:ae})):null),3===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"page-divider"}),l.a.createElement("div",{className:"containers"},3===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Nested Scroll"),l.a.createElement("label",{htmlFor:"nestedScrollY"},"scrollY = ".concat(Number(V).toFixed(3))),l.a.createElement("input",{id:"nestedScrollY",type:"range",min:"0",max:"1",step:"0.05",value:V,name:"nestedScrollY",onChange:ae}),l.a.createElement("label",{htmlFor:"nestedViewY"},"viewY = ".concat(Number(H).toFixed(3))),l.a.createElement("input",{id:"nestedViewY",type:"range",min:"0",max:"1",step:"0.05",value:H,name:"nestedViewY",onChange:ae})):null),l.a.createElement("div",{className:"containers"},l.a.createElement("label",{htmlFor:"nestedMarginTop"},"marginTop = ".concat(Number(q).toFixed(3))),l.a.createElement("input",{id:"nestedMarginTop",type:"range",min:"0",max:"1",step:"0.05",value:q,name:"nestedMarginTop",onChange:ae}),l.a.createElement("label",{htmlFor:"nestedMarginBottom"},"marginBottom = ".concat(Number($).toFixed(3))),l.a.createElement("input",{id:"nestedMarginBottom",type:"range",min:"0",max:"1",step:"0.05",value:$,name:"nestedMarginBottom",onChange:ae}))):null),1===a?l.a.createElement(w,Object.assign({},oe,{marginLeft:0,marginRight:0})):null,2===a?l.a.createElement(N,oe):null,3===a?l.a.createElement(g,oe):null)};r.a.render(l.a.createElement(C,null),document.getElementById("root"))},3:function(e,t,a){e.exports={"first-scroll":"two-scroll-example_first-scroll__15DkW","first-scroll-content":"two-scroll-example_first-scroll-content__YX-cG","second-scroll":"two-scroll-example_second-scroll__nVPoW","second-scroll-content":"two-scroll-example_second-scroll-content__2_AsJ","form-container":"two-scroll-example_form-container__1Z260",label1:"two-scroll-example_label1__XjeC7",label2:"two-scroll-example_label2__ATsid",label3:"two-scroll-example_label3__2yfgk",label4:"two-scroll-example_label4__3d4g4"}},5:function(e,t,a){e.exports={"scroll-container":"two-dimension-example_scroll-container__2ElSI","scroll-content":"two-dimension-example_scroll-content__1iUnv","form-container":"two-dimension-example_form-container__3bKPh",label1:"two-dimension-example_label1__dVc7-",label2:"two-dimension-example_label2__GZsR3",story:"two-dimension-example_story__3birs"}},7:function(e,t,a){e.exports={"scroll-container":"simple-example_scroll-container__kQ94p","scroll-content":"simple-example_scroll-content__1RFhz","form-container":"simple-example_form-container__3VqxE",label1:"simple-example_label1__2SCoi",label2:"simple-example_label2__3wIdF"}}},[[13,1,2]]]);
//# sourceMappingURL=main.a4182e4a.chunk.js.map