import{$ as u}from"./isScrollable-Bts8_1NI.js";import{r as o,R as h}from"./index-BwDkhjyp.js";class g{getItemRect(t){let e=this.ref.current,i=t!=null?e.querySelector(`[data-key="${CSS.escape(t.toString())}"]`):null;if(!i)return null;let l=e.getBoundingClientRect(),r=i.getBoundingClientRect();return{x:r.left-l.left+e.scrollLeft,y:r.top-l.top+e.scrollTop,width:r.width,height:r.height}}getContentSize(){let t=this.ref.current;return{width:t.scrollWidth,height:t.scrollHeight}}getVisibleRect(){let t=this.ref.current;return{x:t.scrollLeft,y:t.scrollTop,width:t.offsetWidth,height:t.offsetHeight}}constructor(t){this.ref=t}}class v{isDisabled(t){var e;return this.disabledBehavior==="all"&&(((e=t.props)===null||e===void 0?void 0:e.isDisabled)||this.disabledKeys.has(t.key))}findNextNonDisabled(t,e){for(;t!=null;){let i=this.collection.getItem(t);if((i==null?void 0:i.type)==="item"&&!this.isDisabled(i))return t;t=e(t)}return null}getNextKey(t){return t=this.collection.getKeyAfter(t),this.findNextNonDisabled(t,e=>this.collection.getKeyAfter(e))}getPreviousKey(t){return t=this.collection.getKeyBefore(t),this.findNextNonDisabled(t,e=>this.collection.getKeyBefore(e))}findKey(t,e,i){let l=this.layoutDelegate.getItemRect(t);if(!l)return null;let r=l;do t=e(t),l=this.layoutDelegate.getItemRect(t);while(l&&i(r,l));return t}isSameRow(t,e){return t.y===e.y||t.x!==e.x}isSameColumn(t,e){return t.x===e.x||t.y!==e.y}getKeyBelow(t){return this.layout==="grid"&&this.orientation==="vertical"?this.findKey(t,e=>this.getNextKey(e),this.isSameRow):this.getNextKey(t)}getKeyAbove(t){return this.layout==="grid"&&this.orientation==="vertical"?this.findKey(t,e=>this.getPreviousKey(e),this.isSameRow):this.getPreviousKey(t)}getNextColumn(t,e){return e?this.getPreviousKey(t):this.getNextKey(t)}getKeyRightOf(t){let e=this.direction==="ltr"?"getKeyRightOf":"getKeyLeftOf";return this.layoutDelegate[e]?(t=this.layoutDelegate[e](t),this.findNextNonDisabled(t,i=>this.layoutDelegate[e](i))):this.layout==="grid"?this.orientation==="vertical"?this.getNextColumn(t,this.direction==="rtl"):this.findKey(t,i=>this.getNextColumn(i,this.direction==="rtl"),this.isSameColumn):this.orientation==="horizontal"?this.getNextColumn(t,this.direction==="rtl"):null}getKeyLeftOf(t){let e=this.direction==="ltr"?"getKeyLeftOf":"getKeyRightOf";return this.layoutDelegate[e]?(t=this.layoutDelegate[e](t),this.findNextNonDisabled(t,i=>this.layoutDelegate[e](i))):this.layout==="grid"?this.orientation==="vertical"?this.getNextColumn(t,this.direction==="ltr"):this.findKey(t,i=>this.getNextColumn(i,this.direction==="ltr"),this.isSameColumn):this.orientation==="horizontal"?this.getNextColumn(t,this.direction==="ltr"):null}getFirstKey(){let t=this.collection.getFirstKey();return this.findNextNonDisabled(t,e=>this.collection.getKeyAfter(e))}getLastKey(){let t=this.collection.getLastKey();return this.findNextNonDisabled(t,e=>this.collection.getKeyBefore(e))}getKeyPageAbove(t){let e=this.ref.current,i=this.layoutDelegate.getItemRect(t);if(!i)return null;if(!u(e))return this.getFirstKey();if(this.orientation==="horizontal"){let l=Math.max(0,i.x+i.width-this.layoutDelegate.getVisibleRect().width);for(;i&&i.x>l;)t=this.getKeyAbove(t),i=t==null?null:this.layoutDelegate.getItemRect(t)}else{let l=Math.max(0,i.y+i.height-this.layoutDelegate.getVisibleRect().height);for(;i&&i.y>l;)t=this.getKeyAbove(t),i=t==null?null:this.layoutDelegate.getItemRect(t)}return t??this.getFirstKey()}getKeyPageBelow(t){let e=this.ref.current,i=this.layoutDelegate.getItemRect(t);if(!i)return null;if(!u(e))return this.getLastKey();if(this.orientation==="horizontal"){let l=Math.min(this.layoutDelegate.getContentSize().width,i.y-i.width+this.layoutDelegate.getVisibleRect().width);for(;i&&i.x<l;)t=this.getKeyBelow(t),i=t==null?null:this.layoutDelegate.getItemRect(t)}else{let l=Math.min(this.layoutDelegate.getContentSize().height,i.y-i.height+this.layoutDelegate.getVisibleRect().height);for(;i&&i.y<l;)t=this.getKeyBelow(t),i=t==null?null:this.layoutDelegate.getItemRect(t)}return t??this.getLastKey()}getKeyForSearch(t,e){if(!this.collator)return null;let i=this.collection,l=e||this.getFirstKey();for(;l!=null;){let r=i.getItem(l),s=r.textValue.slice(0,t.length);if(r.textValue&&this.collator.compare(s,t)===0)return l;l=this.getNextKey(l)}return null}constructor(...t){if(t.length===1){let e=t[0];this.collection=e.collection,this.ref=e.ref,this.collator=e.collator,this.disabledKeys=e.disabledKeys||new Set,this.disabledBehavior=e.disabledBehavior||"all",this.orientation=e.orientation||"vertical",this.direction=e.direction,this.layout=e.layout||"stack",this.layoutDelegate=e.layoutDelegate||new g(e.ref)}else this.collection=t[0],this.disabledKeys=t[1],this.ref=t[2],this.collator=t[3],this.layout="stack",this.orientation="vertical",this.disabledBehavior="all",this.layoutDelegate=new g(this.ref);this.layout==="stack"&&this.orientation==="vertical"&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}}const m=o.createContext({}),f=o.createContext(null);function d(n,t){let{render:e}=o.useContext(f);return h.createElement(h.Fragment,null,e(n,t))}const b=o.forwardRef(d);function x(n,t){var e;let i=n==null?void 0:n.renderDropIndicator,l=n==null||(e=n.isVirtualDragging)===null||e===void 0?void 0:e.call(n),r=o.useCallback(s=>{if(l||t!=null&&t.isDropTarget(s))return i?i(s):h.createElement(b,{target:s})},[t==null?void 0:t.target,l,i]);return n!=null&&n.useDropIndicator?r:void 0}function D(n,t,e){var i,l;let r=n.focusedKey,s=null;if(!(t==null||(i=t.isVirtualDragging)===null||i===void 0)&&i.call(t)&&(e==null||(l=e.target)===null||l===void 0?void 0:l.type)==="item"){s=e.target.key;var a;e.target.dropPosition==="after"&&(s=(a=e.collection.getKeyAfter(s))!==null&&a!==void 0?a:s)}return o.useMemo(()=>new Set([r,s].filter(c=>c!==null)),[r,s])}export{m as $,v as a,f as b,D as c,x as d,g as e};