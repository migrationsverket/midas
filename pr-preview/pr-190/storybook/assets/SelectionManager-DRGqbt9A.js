import{r as p,R as z}from"./index-ClcD9ViR.js";import{r as ye}from"./index-ZuzByk-F.js";import{$ as pe}from"./FocusScope-DXS1oVaO.js";import{w as ve,I as be,m as fe,c as N,J as Se,y as $e,o as de,t as Q,K as te,L as le,M as me}from"./useFocusable-CI7IKKVh.js";import{$ as Ke}from"./context-WoXASG7e.js";import{$ as ge}from"./useDescription-g1HYx49D.js";import{$ as we}from"./useControlledState-CccRFgkZ.js";function xe(i,e){if(!i)return!1;let t=window.getComputedStyle(i),l=/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY);return l&&e&&(l=i.scrollHeight!==i.clientHeight||i.scrollWidth!==i.clientWidth),l}function Pe(i,e){const t=[];for(;i&&i!==document.documentElement;)xe(i,e)&&t.push(i),i=i.parentElement;return t}function ie(i,e,t,l){let s=ve(t),c=t==null;p.useEffect(()=>{if(c||!i.current)return;let n=i.current;return n.addEventListener(e,s,l),()=>{n.removeEventListener(e,s,l)}},[i,e,l,c,s])}function he(i,e){let t=se(i,e,"left"),l=se(i,e,"top"),s=e.offsetWidth,c=e.offsetHeight,n=i.scrollLeft,a=i.scrollTop,{borderTopWidth:f,borderLeftWidth:g}=getComputedStyle(i),b=i.scrollLeft+parseInt(g,10),x=i.scrollTop+parseInt(f,10),y=b+i.clientWidth,d=x+i.clientHeight;t<=n?n=t-parseInt(g,10):t+s>y&&(n+=t+s-y),l<=x?a=l-parseInt(f,10):l+c>d&&(a+=l+c-d),i.scrollLeft=n,i.scrollTop=a}function se(i,e,t){const l=t==="left"?"offsetLeft":"offsetTop";let s=0;for(;e.offsetParent&&(s+=e[l],e.offsetParent!==i);){if(e.offsetParent.contains(i)){s-=i[l];break}e=e.offsetParent}return s}function ne(i,e){if(i&&document.contains(i)){let n=document.scrollingElement||document.documentElement;if(window.getComputedStyle(n).overflow==="hidden"){let f=Pe(i);for(let g of f)he(g,i)}else{var t;let{left:f,top:g}=i.getBoundingClientRect();i==null||(t=i.scrollIntoView)===null||t===void 0||t.call(i,{block:"nearest"});let{left:b,top:x}=i.getBoundingClientRect();if(Math.abs(f-b)>1||Math.abs(g-x)>1){var l,s,c;e==null||(s=e.containingElement)===null||s===void 0||(l=s.scrollIntoView)===null||l===void 0||l.call(s,{block:"center",inline:"center"}),(c=i.scrollIntoView)===null||c===void 0||c.call(i,{block:"nearest"})}}}}const Te=500;function ke(i){let{isDisabled:e,onLongPressStart:t,onLongPressEnd:l,onLongPress:s,threshold:c=Te,accessibilityDescription:n}=i;const a=p.useRef(void 0);let{addGlobalListener:f,removeGlobalListener:g}=be(),{pressProps:b}=fe({isDisabled:e,onPressStart(y){if(y.continuePropagation(),(y.pointerType==="mouse"||y.pointerType==="touch")&&(t&&t({...y,type:"longpressstart"}),a.current=setTimeout(()=>{y.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),s&&s({...y,type:"longpress"}),a.current=void 0},c),y.pointerType==="touch")){let d=A=>{A.preventDefault()};f(y.target,"contextmenu",d,{once:!0}),f(window,"pointerup",()=>{setTimeout(()=>{g(y.target,"contextmenu",d)},30)},{once:!0})}},onPressEnd(y){a.current&&clearTimeout(a.current),l&&(y.pointerType==="mouse"||y.pointerType==="touch")&&l({...y,type:"longpressend"})}}),x=ge(s&&!e?n:void 0);return{longPressProps:N(b,x)}}function V(i){return Se()?i.altKey:i.ctrlKey}function W(i){return $e()?i.metaKey:i.ctrlKey}const De=1e3;function Fe(i){let{keyboardDelegate:e,selectionManager:t,onTypeSelect:l}=i,s=p.useRef({search:"",timeout:void 0}).current,c=n=>{let a=Ae(n.key);if(!(!a||n.ctrlKey||n.metaKey||!n.currentTarget.contains(n.target))){if(a===" "&&s.search.trim().length>0&&(n.preventDefault(),"continuePropagation"in n||n.stopPropagation()),s.search+=a,e.getKeyForSearch!=null){let f=e.getKeyForSearch(s.search,t.focusedKey);f==null&&(f=e.getKeyForSearch(s.search)),f!=null&&(t.setFocusedKey(f),l&&l(f))}clearTimeout(s.timeout),s.timeout=setTimeout(()=>{s.search=""},De)}};return{typeSelectProps:{onKeyDownCapture:e.getKeyForSearch?c:void 0}}}function Ae(i){return i.length===1||!/^[A-Z]/i.test(i)?i:""}function Ge(i){let{selectionManager:e,keyboardDelegate:t,ref:l,autoFocus:s=!1,shouldFocusWrap:c=!1,disallowEmptySelection:n=!1,disallowSelectAll:a=!1,selectOnFocus:f=e.selectionBehavior==="replace",disallowTypeAhead:g=!1,shouldUseVirtualFocus:b,allowsTabNavigation:x=!1,isVirtualized:y,scrollRef:d=l,linkBehavior:A="action"}=i,{direction:D}=Ke(),h=de(),m=o=>{var $;if(o.altKey&&o.key==="Tab"&&o.preventDefault(),!(!(($=l.current)===null||$===void 0)&&$.contains(o.target)))return;const K=(u,U)=>{if(u!=null){if(e.isLink(u)&&A==="selection"&&f&&!V(o)){var L;ye.flushSync(()=>{e.setFocusedKey(u,U)});let _=(L=d.current)===null||L===void 0?void 0:L.querySelector(`[data-key="${CSS.escape(u.toString())}"]`),ee=e.getItemProps(u);_&&h.open(_,o,ee.href,ee.routerOptions);return}if(e.setFocusedKey(u,U),e.isLink(u)&&A==="override")return;o.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(u):f&&!V(o)&&e.replaceSelection(u)}};switch(o.key){case"ArrowDown":if(t.getKeyBelow){var P,k,T;let u=e.focusedKey!=null?(P=t.getKeyBelow)===null||P===void 0?void 0:P.call(t,e.focusedKey):(k=t.getFirstKey)===null||k===void 0?void 0:k.call(t);u==null&&c&&(u=(T=t.getFirstKey)===null||T===void 0?void 0:T.call(t,e.focusedKey)),u!=null&&(o.preventDefault(),K(u))}break;case"ArrowUp":if(t.getKeyAbove){var C,r,B;let u=e.focusedKey!=null?(C=t.getKeyAbove)===null||C===void 0?void 0:C.call(t,e.focusedKey):(r=t.getLastKey)===null||r===void 0?void 0:r.call(t);u==null&&c&&(u=(B=t.getLastKey)===null||B===void 0?void 0:B.call(t,e.focusedKey)),u!=null&&(o.preventDefault(),K(u))}break;case"ArrowLeft":if(t.getKeyLeftOf){var H,q,G;let u=e.focusedKey!=null?(H=t.getKeyLeftOf)===null||H===void 0?void 0:H.call(t,e.focusedKey):null;u==null&&c&&(u=D==="rtl"?(q=t.getFirstKey)===null||q===void 0?void 0:q.call(t,e.focusedKey):(G=t.getLastKey)===null||G===void 0?void 0:G.call(t,e.focusedKey)),u!=null&&(o.preventDefault(),K(u,D==="rtl"?"first":"last"))}break;case"ArrowRight":if(t.getKeyRightOf){var Y,j,X;let u=e.focusedKey!=null?(Y=t.getKeyRightOf)===null||Y===void 0?void 0:Y.call(t,e.focusedKey):null;u==null&&c&&(u=D==="rtl"?(j=t.getLastKey)===null||j===void 0?void 0:j.call(t,e.focusedKey):(X=t.getFirstKey)===null||X===void 0?void 0:X.call(t,e.focusedKey)),u!=null&&(o.preventDefault(),K(u,D==="rtl"?"last":"first"))}break;case"Home":if(t.getFirstKey){o.preventDefault();let u=t.getFirstKey(e.focusedKey,W(o));e.setFocusedKey(u),u!=null&&(W(o)&&o.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(u):f&&e.replaceSelection(u))}break;case"End":if(t.getLastKey){o.preventDefault();let u=t.getLastKey(e.focusedKey,W(o));e.setFocusedKey(u),u!=null&&(W(o)&&o.shiftKey&&e.selectionMode==="multiple"?e.extendSelection(u):f&&e.replaceSelection(u))}break;case"PageDown":if(t.getKeyPageBelow&&e.focusedKey!=null){let u=t.getKeyPageBelow(e.focusedKey);u!=null&&(o.preventDefault(),K(u))}break;case"PageUp":if(t.getKeyPageAbove&&e.focusedKey!=null){let u=t.getKeyPageAbove(e.focusedKey);u!=null&&(o.preventDefault(),K(u))}break;case"a":W(o)&&e.selectionMode==="multiple"&&a!==!0&&(o.preventDefault(),e.selectAll());break;case"Escape":!n&&e.selectedKeys.size!==0&&(o.stopPropagation(),o.preventDefault(),e.clearSelection());break;case"Tab":if(!x){if(o.shiftKey)l.current.focus();else{let u=pe(l.current,{tabbable:!0}),U,L;do L=u.lastChild(),L&&(U=L);while(L);U&&!U.contains(document.activeElement)&&le(U)}break}}},v=p.useRef({top:0,left:0});ie(d,"scroll",y?void 0:()=>{var o,$,K,P;v.current={top:(K=(o=d.current)===null||o===void 0?void 0:o.scrollTop)!==null&&K!==void 0?K:0,left:(P=($=d.current)===null||$===void 0?void 0:$.scrollLeft)!==null&&P!==void 0?P:0}});let S=o=>{if(e.isFocused){o.currentTarget.contains(o.target)||e.setFocused(!1);return}if(o.currentTarget.contains(o.target)){if(e.setFocused(!0),e.focusedKey==null){var $,K;let T=r=>{r!=null&&(e.setFocusedKey(r),f&&e.replaceSelection(r))},C=o.relatedTarget;var P,k;C&&o.currentTarget.compareDocumentPosition(C)&Node.DOCUMENT_POSITION_FOLLOWING?T((P=e.lastSelectedKey)!==null&&P!==void 0?P:($=t.getLastKey)===null||$===void 0?void 0:$.call(t)):T((k=e.firstSelectedKey)!==null&&k!==void 0?k:(K=t.getFirstKey)===null||K===void 0?void 0:K.call(t))}else!y&&d.current&&(d.current.scrollTop=v.current.top,d.current.scrollLeft=v.current.left);if(e.focusedKey!=null&&d.current){let T=d.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);T&&(T.contains(document.activeElement)||le(T),te()==="keyboard"&&ne(T,{containingElement:l.current}))}}},w=o=>{o.currentTarget.contains(o.relatedTarget)||e.setFocused(!1)};const F=p.useRef(s);p.useEffect(()=>{if(F.current){var o,$;let k=null;var K;s==="first"&&(k=(K=(o=t.getFirstKey)===null||o===void 0?void 0:o.call(t))!==null&&K!==void 0?K:null);var P;s==="last"&&(k=(P=($=t.getLastKey)===null||$===void 0?void 0:$.call(t))!==null&&P!==void 0?P:null);let T=e.selectedKeys;if(T.size){for(let C of T)if(e.canSelectItem(C)){k=C;break}}e.setFocused(!0),e.setFocusedKey(k),k==null&&!b&&l.current&&Q(l.current)}},[]);let R=p.useRef(e.focusedKey);p.useEffect(()=>{if(e.isFocused&&e.focusedKey!=null&&(e.focusedKey!==R.current||F.current)&&d.current&&l.current){let o=te(),$=l.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);if(!$)return;(o==="keyboard"||F.current)&&(he(d.current,$),o!=="virtual"&&ne($,{containingElement:l.current}))}!b&&e.isFocused&&e.focusedKey==null&&R.current!=null&&l.current&&Q(l.current),R.current=e.focusedKey,F.current=!1}),ie(l,"react-aria-focus-scope-restore",o=>{o.preventDefault(),e.setFocused(!0)});let M={onKeyDown:m,onFocus:S,onBlur:w,onMouseDown(o){d.current===o.target&&o.preventDefault()}},{typeSelectProps:I}=Fe({keyboardDelegate:t,selectionManager:e});g||(M=N(I,M));let O;return b||(O=e.focusedKey==null?0:-1),{collectionProps:{...M,tabIndex:O}}}function Ye(i){let{selectionManager:e,key:t,ref:l,shouldSelectOnPressUp:s,shouldUseVirtualFocus:c,focus:n,isDisabled:a,onAction:f,allowsDifferentPressOrigin:g,linkBehavior:b="action"}=i,x=de(),y=r=>{if(r.pointerType==="keyboard"&&V(r))e.toggleSelection(t);else{if(e.selectionMode==="none")return;if(e.isLink(t)){if(b==="selection"&&l.current){let B=e.getItemProps(t);x.open(l.current,r,B.href,B.routerOptions),e.setSelectedKeys(e.selectedKeys);return}else if(b==="override"||b==="none")return}e.selectionMode==="single"?e.isSelected(t)&&!e.disallowEmptySelection?e.toggleSelection(t):e.replaceSelection(t):r&&r.shiftKey?e.extendSelection(t):e.selectionBehavior==="toggle"||r&&(W(r)||r.pointerType==="touch"||r.pointerType==="virtual")?e.toggleSelection(t):e.replaceSelection(t)}};p.useEffect(()=>{t===e.focusedKey&&e.isFocused&&!c&&(n?n():document.activeElement!==l.current&&l.current&&Q(l.current))},[l,t,e.focusedKey,e.childFocusStrategy,e.isFocused,c]),a=a||e.isDisabled(t);let d={};!c&&!a?d={tabIndex:t===e.focusedKey?0:-1,onFocus(r){r.target===l.current&&e.setFocusedKey(t)}}:a&&(d.onMouseDown=r=>{r.preventDefault()});let A=e.isLink(t)&&b==="override",D=e.isLink(t)&&b!=="selection"&&b!=="none",h=!a&&e.canSelectItem(t)&&!A,m=(f||D)&&!a,v=m&&(e.selectionBehavior==="replace"?!h:!h||e.isEmpty),S=m&&h&&e.selectionBehavior==="replace",w=v||S,F=p.useRef(null),R=w&&h,M=p.useRef(!1),I=p.useRef(!1),O=r=>{if(f&&f(),D&&l.current){let B=e.getItemProps(t);x.open(l.current,r,B.href,B.routerOptions)}},o={};s?(o.onPressStart=r=>{F.current=r.pointerType,M.current=R,r.pointerType==="keyboard"&&(!w||re())&&y(r)},g?(o.onPressUp=v?void 0:r=>{r.pointerType!=="keyboard"&&h&&y(r)},o.onPress=v?O:void 0):o.onPress=r=>{if(v||S&&r.pointerType!=="mouse"){if(r.pointerType==="keyboard"&&!oe())return;O(r)}else r.pointerType!=="keyboard"&&h&&y(r)}):(o.onPressStart=r=>{F.current=r.pointerType,M.current=R,I.current=v,h&&(r.pointerType==="mouse"&&!v||r.pointerType==="keyboard"&&(!m||re()))&&y(r)},o.onPress=r=>{(r.pointerType==="touch"||r.pointerType==="pen"||r.pointerType==="virtual"||r.pointerType==="keyboard"&&w&&oe()||r.pointerType==="mouse"&&I.current)&&(w?O(r):h&&y(r))}),d["data-key"]=t,o.preventFocusOnPress=c;let{pressProps:$,isPressed:K}=fe(o),P=S?r=>{F.current==="mouse"&&(r.stopPropagation(),r.preventDefault(),O(r))}:void 0,{longPressProps:k}=ke({isDisabled:!R,onLongPress(r){r.pointerType==="touch"&&(y(r),e.setSelectionBehavior("toggle"))}}),T=r=>{F.current==="touch"&&M.current&&r.preventDefault()},C=e.isLink(t)?r=>{me.isOpening||r.preventDefault()}:void 0;return{itemProps:N(d,h||v?$:{},R?k:{},{onDoubleClick:P,onDragStartCapture:T,onClick:C}),isPressed:K,isSelected:e.isSelected(t),isFocused:e.isFocused&&e.focusedKey===t,isDisabled:a,allowsSelection:h,hasAction:w}}function oe(){let i=window.event;return(i==null?void 0:i.key)==="Enter"}function re(){let i=window.event;return(i==null?void 0:i.key)===" "||(i==null?void 0:i.code)==="Space"}class Ie{build(e,t){return this.context=t,ce(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:l}=e;if(z.isValidElement(t)&&t.type===z.Fragment)yield*this.iterateCollection({children:t.props.children,items:l});else if(typeof t=="function"){if(!l)throw new Error("props.children was a function but props.items is missing");let s=0;for(let c of l)yield*this.getFullNode({value:c,index:s},{renderer:t}),s++}else{let s=[];z.Children.forEach(t,n=>{n&&s.push(n)});let c=0;for(let n of s){let a=this.getFullNode({element:n,index:c},{});for(let f of a)c++,yield f}}}getKey(e,t,l,s){if(e.key!=null)return e.key;if(t.type==="cell"&&t.key!=null)return`${s}${t.key}`;let c=t.value;if(c!=null){var n;let a=(n=c.key)!==null&&n!==void 0?n:c.id;if(a==null)throw new Error("No key found for item");return a}return s?`${s}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,l,s){if(z.isValidElement(e.element)&&e.element.type===z.Fragment){let h=[];z.Children.forEach(e.element.props.children,v=>{h.push(v)});var c;let m=(c=e.index)!==null&&c!==void 0?c:0;for(const v of h)yield*this.getFullNode({element:v,index:m++},t,l,s);return}let n=e.element;if(!n&&e.value&&t&&t.renderer){let h=this.cache.get(e.value);if(h&&(!h.shouldInvalidate||!h.shouldInvalidate(this.context))){h.index=e.index,h.parentKey=s?s.key:null,yield h;return}n=t.renderer(e.value)}if(z.isValidElement(n)){let h=n.type;if(typeof h!="function"&&typeof h.getCollectionNode!="function"){let w=n.type;throw new Error(`Unknown element <${w}> in collection.`)}let m=h.getCollectionNode(n.props,this.context);var a;let v=(a=e.index)!==null&&a!==void 0?a:0,S=m.next();for(;!S.done&&S.value;){let w=S.value;e.index=v;var f;let F=(f=w.key)!==null&&f!==void 0?f:null;F==null&&(F=w.element?null:this.getKey(n,e,t,l));let M=[...this.getFullNode({...w,key:F,index:v,wrapper:Ce(e.wrapper,w.wrapper)},this.getChildState(t,w),l?`${l}${n.key}`:n.key,s)];for(let I of M){var g,b;I.value=(b=(g=w.value)!==null&&g!==void 0?g:e.value)!==null&&b!==void 0?b:null,I.value&&this.cache.set(I.value,I);var x;if(e.type&&I.type!==e.type)throw new Error(`Unsupported type <${J(I.type)}> in <${J((x=s==null?void 0:s.type)!==null&&x!==void 0?x:"unknown parent type")}>. Only <${J(e.type)}> is supported.`);v++,yield I}S=m.next(M)}return}if(e.key==null||e.type==null)return;let y=this;var d,A;let D={type:e.type,props:e.props,key:e.key,parentKey:s?s.key:null,value:(d=e.value)!==null&&d!==void 0?d:null,level:s?s.level+1:0,index:e.index,rendered:e.rendered,textValue:(A=e.textValue)!==null&&A!==void 0?A:"","aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes||!1,childNodes:ce(function*(){if(!e.hasChildNodes||!e.childNodes)return;let h=0;for(let m of e.childNodes()){m.key!=null&&(m.key=`${D.key}${m.key}`);let v=y.getFullNode({...m,index:h},y.getChildState(t,m),D.key,D);for(let S of v)h++,yield S}})};yield D}constructor(){this.cache=new WeakMap}}function ce(i){let e=[],t=null;return{*[Symbol.iterator](){for(let l of e)yield l;t||(t=i());for(let l of t)e.push(l),yield l}}}function Ce(i,e){if(i&&e)return t=>i(e(t));if(i)return i;if(e)return e}function J(i){return i[0].toUpperCase()+i.slice(1)}function je(i,e,t){let l=p.useMemo(()=>new Ie,[]),{children:s,items:c,collection:n}=i;return p.useMemo(()=>{if(n)return n;let f=l.build({children:s,items:c},t);return e(f)},[l,s,c,n,t,e])}function Ee(i,e){return typeof e.getChildren=="function"?e.getChildren(i.key):i.childNodes}function Me(i){return Re(i,0)}function Re(i,e){if(e<0)return;let t=0;for(let l of i){if(t===e)return l;t++}}function Xe(i){let e;for(let t of i)e=t;return e}function Z(i,e,t){if(e.parentKey===t.parentKey)return e.index-t.index;let l=[...ue(i,e),e],s=[...ue(i,t),t],c=l.slice(0,s.length).findIndex((n,a)=>n!==s[a]);return c!==-1?(e=l[c],t=s[c],e.index-t.index):l.findIndex(n=>n===t)>=0?1:(s.findIndex(n=>n===e)>=0,-1)}function ue(i,e){let t=[],l=e;for(;(l==null?void 0:l.parentKey)!=null;)l=i.getItem(l.parentKey),l&&t.unshift(l);return t}class E extends Set{constructor(e,t,l){super(e),e instanceof E?(this.anchorKey=t??e.anchorKey,this.currentKey=l??e.currentKey):(this.anchorKey=t??null,this.currentKey=l??null)}}function Be(i,e){if(i.size!==e.size)return!1;for(let t of i)if(!e.has(t))return!1;return!0}function Je(i){let{selectionMode:e="none",disallowEmptySelection:t=!1,allowDuplicateSelectionEvents:l,selectionBehavior:s="toggle",disabledBehavior:c="all"}=i,n=p.useRef(!1),[,a]=p.useState(!1),f=p.useRef(null),g=p.useRef(null),[,b]=p.useState(null),x=p.useMemo(()=>ae(i.selectedKeys),[i.selectedKeys]),y=p.useMemo(()=>ae(i.defaultSelectedKeys,new E),[i.defaultSelectedKeys]),[d,A]=we(x,y,i.onSelectionChange),D=p.useMemo(()=>i.disabledKeys?new Set(i.disabledKeys):new Set,[i.disabledKeys]),[h,m]=p.useState(s);s==="replace"&&h==="toggle"&&typeof d=="object"&&d.size===0&&m("replace");let v=p.useRef(s);return p.useEffect(()=>{s!==v.current&&(m(s),v.current=s)},[s]),{selectionMode:e,disallowEmptySelection:t,selectionBehavior:h,setSelectionBehavior:m,get isFocused(){return n.current},setFocused(S){n.current=S,a(S)},get focusedKey(){return f.current},get childFocusStrategy(){return g.current},setFocusedKey(S,w="first"){f.current=S,g.current=w,b(S)},selectedKeys:d,setSelectedKeys(S){(l||!Be(S,d))&&A(S)},disabledKeys:D,disabledBehavior:c}}function ae(i,e){return i?i==="all"?"all":new E(i):e}class Ze{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(e==null||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return this.state.selectedKeys==="all"?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){if(this.state.selectionMode==="none")return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys==="all"?this.canSelectItem(t):this.state.selectedKeys.has(t)}get isEmpty(){return this.state.selectedKeys!=="all"&&this.state.selectedKeys.size===0}get isSelectAll(){if(this.isEmpty)return!1;if(this.state.selectedKeys==="all")return!0;if(this._isSelectAll!=null)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(l=>t.has(l)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let l of this.state.selectedKeys){let s=this.collection.getItem(l);(!e||s&&Z(this.collection,s,e)<0)&&(e=s)}var t;return(t=e==null?void 0:e.key)!==null&&t!==void 0?t:null}get lastSelectedKey(){let e=null;for(let l of this.state.selectedKeys){let s=this.collection.getItem(l);(!e||s&&Z(this.collection,s,e)>0)&&(e=s)}var t;return(t=e==null?void 0:e.key)!==null&&t!==void 0?t:null}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let l;if(this.state.selectedKeys==="all")l=new E([t],t,t);else{let n=this.state.selectedKeys;var s;let a=(s=n.anchorKey)!==null&&s!==void 0?s:t;l=new E(n,a,t);var c;for(let f of this.getKeyRange(a,(c=n.currentKey)!==null&&c!==void 0?c:t))l.delete(f);for(let f of this.getKeyRange(t,a))this.canSelectItem(f)&&l.add(f)}this.state.setSelectedKeys(l)}getKeyRange(e,t){let l=this.collection.getItem(e),s=this.collection.getItem(t);return l&&s?Z(this.collection,l,s)<=0?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){var l;if(!((l=this.layoutDelegate)===null||l===void 0)&&l.getKeyRange)return this.layoutDelegate.getKeyRange(e,t);let s=[],c=e;for(;c!=null;){let n=this.collection.getItem(c);if(n&&(n.type==="item"||n.type==="cell"&&this.allowsCellSelection)&&s.push(c),c===t)return s;c=this.collection.getKeyAfter(c)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||t.type==="cell"&&this.allowsCellSelection)return e;for(;t&&t.type!=="item"&&t.parentKey!=null;)t=this.collection.getItem(t.parentKey);return!t||t.type!=="item"?null:t.key}toggleSelection(e){if(this.selectionMode==="none")return;if(this.selectionMode==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let l=new E(this.state.selectedKeys==="all"?this.getSelectAllKeys():this.state.selectedKeys);l.has(t)?l.delete(t):this.canSelectItem(t)&&(l.add(t),l.anchorKey=t,l.currentKey=t),!(this.disallowEmptySelection&&l.size===0)&&this.state.setSelectedKeys(l)}replaceSelection(e){if(this.selectionMode==="none")return;let t=this.getKey(e);if(t==null)return;let l=this.canSelectItem(t)?new E([t],t,t):new E;this.state.setSelectedKeys(l)}setSelectedKeys(e){if(this.selectionMode==="none")return;let t=new E;for(let l of e){let s=this.getKey(l);if(s!=null&&(t.add(s),this.selectionMode==="single"))break}this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],t=l=>{for(;l!=null;){if(this.canSelectItem(l)){var s;let n=this.collection.getItem(l);(n==null?void 0:n.type)==="item"&&e.push(l);var c;n!=null&&n.hasChildNodes&&(this.allowsCellSelection||n.type!=="item")&&t((c=(s=Me(Ee(n,this.collection)))===null||s===void 0?void 0:s.key)!==null&&c!==void 0?c:null)}l=this.collection.getKeyAfter(l)}};return t(this.collection.getFirstKey()),e}selectAll(){!this.isSelectAll&&this.selectionMode==="multiple"&&this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&(this.state.selectedKeys==="all"||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new E)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode!=="none"&&(this.selectionMode==="single"?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior==="toggle"||t&&(t.pointerType==="touch"||t.pointerType==="virtual")?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;for(let l of t)if(!e.has(l))return!1;return!0}canSelectItem(e){var t;if(this.state.selectionMode==="none"||this.state.disabledKeys.has(e))return!1;let l=this.collection.getItem(e);return!(!l||!(l==null||(t=l.props)===null||t===void 0)&&t.isDisabled||l.type==="cell"&&!this.allowsCellSelection)}isDisabled(e){var t,l;return this.state.disabledBehavior==="all"&&(this.state.disabledKeys.has(e)||!!(!((l=this.collection.getItem(e))===null||l===void 0||(t=l.props)===null||t===void 0)&&t.isDisabled))}isLink(e){var t,l;return!!(!((l=this.collection.getItem(e))===null||l===void 0||(t=l.props)===null||t===void 0)&&t.href)}getItemProps(e){var t;return(t=this.collection.getItem(e))===null||t===void 0?void 0:t.props}constructor(e,t,l){this.collection=e,this.state=t;var s;this.allowsCellSelection=(s=l==null?void 0:l.allowsCellSelection)!==null&&s!==void 0?s:!1,this._isSelectAll=null,this.layoutDelegate=(l==null?void 0:l.layoutDelegate)||null}}export{Je as $,je as a,Ze as b,Ge as c,Ee as d,xe as e,Ye as f,Fe as g,Xe as h,ne as i,Re as j,Me as k,ke as l,ie as m};