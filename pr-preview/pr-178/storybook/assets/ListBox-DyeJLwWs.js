import{$ as Z,a as ee,b as oe,c as O,d as te}from"./Collection-C4MnC92I.js";import{n as I,b as ae,k as q,c as E,v as K,y as re,z as le,A as ie,d as j,B as W,p as de,h as G,f as T,C as J,a as ne,e as se,D as ce}from"./useFocusable-CI7IKKVh.js";import{$ as _,a as ue,b as fe,c as Q}from"./DragAndDrop-DA-Ld4HW.js";import{$ as pe,a as be,b as $e,c as ve}from"./Separator-CIU4dNV7.js";import{a as ge}from"./Text-B5xeh108.js";import{r as s,R as u}from"./index-ClcD9ViR.js";import{f as he}from"./SelectionManager-DRGqbt9A.js";import{$ as xe}from"./Label-CyV7_vzg.js";import{$ as me}from"./useListState-Cs8bU5OO.js";import{$ as De}from"./context-WoXASG7e.js";import{$ as Pe,a as ye}from"./ListKeyboardDelegate-DaTzZypo.js";import{a as Se}from"./FocusScope-DXS1oVaO.js";const N=new WeakMap;function ke(e){return typeof e=="string"?e.replace(/\s*/g,""):""+e}function Be(e,o){let r=N.get(e);if(!r)throw new Error("Unknown list");return`${r.id}-option-${ke(o)}`}function Fe(e,o,r){let t=I(e,{labelable:!0}),i=e.selectionBehavior||"toggle",l=e.linkBehavior||(i==="replace"?"action":"override");i==="toggle"&&l==="action"&&(l="override");let{listProps:a}=pe({...e,ref:r,selectionManager:o.selectionManager,collection:o.collection,disabledKeys:o.disabledKeys,linkBehavior:l}),{focusWithinProps:d}=ae({onFocusWithin:e.onFocus,onBlurWithin:e.onBlur,onFocusWithinChange:e.onFocusChange}),c=q(e.id);N.set(o,{id:c,shouldUseVirtualFocus:e.shouldUseVirtualFocus,shouldSelectOnPressUp:e.shouldSelectOnPressUp,shouldFocusOnHover:e.shouldFocusOnHover,isVirtualized:e.isVirtualized,onAction:e.onAction,linkBehavior:l});let{labelProps:p,fieldProps:b}=xe({...e,id:c,labelElementType:"span"});return{labelProps:p,listBoxProps:E(t,d,o.selectionManager.selectionMode==="multiple"?{"aria-multiselectable":"true"}:{},{role:"listbox",...E(b,a)})}}function Ce(e,o,r){var t,i;let{key:l}=e,a=N.get(o);var d;let c=(d=e.isDisabled)!==null&&d!==void 0?d:o.selectionManager.isDisabled(l);var p;let b=(p=e.isSelected)!==null&&p!==void 0?p:o.selectionManager.isSelected(l);var g;let f=(g=e.shouldSelectOnPressUp)!==null&&g!==void 0?g:a==null?void 0:a.shouldSelectOnPressUp;var h;let S=(h=e.shouldFocusOnHover)!==null&&h!==void 0?h:a==null?void 0:a.shouldFocusOnHover;var v;let $=(v=e.shouldUseVirtualFocus)!==null&&v!==void 0?v:a==null?void 0:a.shouldUseVirtualFocus;var m;let D=(m=e.isVirtualized)!==null&&m!==void 0?m:a==null?void 0:a.isVirtualized,k=K(),H=K(),P={role:"option","aria-disabled":c||void 0,"aria-selected":o.selectionManager.selectionMode!=="none"?b:void 0};re()&&le()||(P["aria-label"]=e["aria-label"],P["aria-labelledby"]=k,P["aria-describedby"]=H);let n=o.collection.getItem(l);if(D){let y=Number(n==null?void 0:n.index);P["aria-posinset"]=Number.isNaN(y)?void 0:y+1,P["aria-setsize"]=be(o.collection)}let x=a!=null&&a.onAction?()=>{var y;return a==null||(y=a.onAction)===null||y===void 0?void 0:y.call(a,l)}:void 0,{itemProps:B,isPressed:F,isFocused:C,hasAction:M,allowsSelection:U}=he({selectionManager:o.selectionManager,key:l,ref:r,shouldSelectOnPressUp:f,allowsDifferentPressOrigin:f&&S,isVirtualized:D,shouldUseVirtualFocus:$,isDisabled:c,onAction:x||!(n==null||(t=n.props)===null||t===void 0)&&t.onAction?ie(n==null||(i=n.props)===null||i===void 0?void 0:i.onAction,x):void 0,linkBehavior:a==null?void 0:a.linkBehavior}),{hoverProps:V}=j({isDisabled:c||!S,onHoverStart(){W()||(o.selectionManager.setFocused(!0),o.selectionManager.setFocusedKey(l))}}),w=I(n==null?void 0:n.props);delete w.id;let A=de(n==null?void 0:n.props);return{optionProps:{...P,...E(w,B,V,A),id:Be(o,l)},labelProps:{id:k},descriptionProps:{id:H},isFocused:C,isFocusVisible:C&&W(),isSelected:b,isDisabled:c,isPressed:F,allowsSelection:U,hasAction:M}}function we(e){let{heading:o,"aria-label":r}=e,t=q();return{itemProps:{role:"presentation"},headingProps:o?{id:t,role:"presentation"}:{},groupProps:{role:"group","aria-label":r,"aria-labelledby":o?t:void 0}}}const X=s.createContext(null),L=s.createContext(null);function Ee(e,o){[e,o]=ne(e,o,X);let r=s.useContext(L);return r?u.createElement(Y,{state:r,props:e,listBoxRef:o}):u.createElement(ee,{content:u.createElement(oe,e)},t=>u.createElement(He,{props:e,listBoxRef:o,collection:t}))}function He({props:e,listBoxRef:o,collection:r}){e={...e,collection:r,children:null,items:null};let{layoutDelegate:t}=s.useContext(O),i=me({...e,layoutDelegate:t});return u.createElement(Y,{state:i,props:e,listBoxRef:o})}const Ge=s.forwardRef(Ee);function Y({state:e,props:o,listBoxRef:r}){let{dragAndDropHooks:t,layout:i="stack",orientation:l="vertical"}=o,{collection:a,selectionManager:d}=e,c=!!(t!=null&&t.useDraggableCollectionState),p=!!(t!=null&&t.useDroppableCollectionState),{direction:b}=De(),{disabledBehavior:g,disabledKeys:f}=d,h=Pe({usage:"search",sensitivity:"base"}),{isVirtualized:S,layoutDelegate:v,dropTargetDelegate:$,CollectionRoot:m}=s.useContext(O),D=s.useMemo(()=>o.keyboardDelegate||new ye({collection:a,collator:h,ref:r,disabledKeys:f,disabledBehavior:g,layout:i,orientation:l,direction:b,layoutDelegate:v}),[a,h,r,g,f,l,b,o.keyboardDelegate,i,v]),{listBoxProps:k}=Fe({...o,shouldSelectOnPressUp:c||o.shouldSelectOnPressUp,keyboardDelegate:D,isVirtualized:S},e,r),H=s.useRef(c),P=s.useRef(p);s.useEffect(()=>{H.current!==c&&console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."),P.current!==p&&console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.")},[c,p]);let n,x,B,F=!1,C=null,M=s.useRef(null);if(c&&t){n=t.useDraggableCollectionState({collection:a,selectionManager:d,preview:t.renderDragPreview?M:void 0}),t.useDraggableCollection({},n,r);let z=t.DragPreview;C=t.renderDragPreview?u.createElement(z,{ref:M},t.renderDragPreview):null}if(p&&t){x=t.useDroppableCollectionState({collection:a,selectionManager:d});let z=t.dropTargetDelegate||$||new t.ListDropTargetDelegate(a,r,{orientation:l,layout:i,direction:b});B=t.useDroppableCollection({keyboardDelegate:D,dropTargetDelegate:z},x,r),F=x.isDropTarget({type:"root"})}let{focusProps:U,isFocused:V,isFocusVisible:w}=se(),A={isDropTarget:F,isEmpty:e.collection.size===0,isFocused:V,isFocusVisible:w,layout:o.layout||"stack",state:e},y=T({className:o.className,style:o.style,defaultClassName:"react-aria-ListBox",values:A}),R=null;return e.collection.size===0&&o.renderEmptyState&&(R=u.createElement("div",{role:"option",style:{display:"contents"}},o.renderEmptyState(A))),u.createElement(Se,null,u.createElement("div",{...I(o),...E(k,U,B==null?void 0:B.collectionProps),...y,ref:r,slot:o.slot||void 0,onScroll:o.onScroll,"data-drop-target":F||void 0,"data-empty":e.collection.size===0||void 0,"data-focused":V||void 0,"data-focus-visible":w||void 0,"data-layout":o.layout||"stack","data-orientation":o.orientation||"vertical"},u.createElement(J,{values:[[X,o],[L,e],[_,{dragAndDropHooks:t,dragState:n,dropState:x}],[$e,{elementType:"div"}],[ue,{render:Ve}],[te,{name:"ListBoxSection",render:Me}]]},u.createElement(m,{collection:a,scrollRef:r,persistedKeys:fe(d,t,x),renderDropIndicator:Q(t,x)})),R,C))}function Me(e,o,r,t="react-aria-ListBoxSection"){let i=s.useContext(L),{dragAndDropHooks:l,dropState:a}=s.useContext(_),{CollectionBranch:d}=s.useContext(O),[c,p]=ce();var b;let{headingProps:g,groupProps:f}=we({heading:p,"aria-label":(b=e["aria-label"])!==null&&b!==void 0?b:void 0}),h=T({defaultClassName:t,className:e.className,style:e.style,values:{}});return u.createElement("section",{...I(e),...f,...h,ref:o},u.createElement(ve.Provider,{value:{...g,ref:c}},u.createElement(d,{collection:i.collection,parent:r,renderDropIndicator:Q(l,a)})))}const Je=Z("item",function(o,r,t){let i=G(r),l=s.useContext(L),{dragAndDropHooks:a,dragState:d,dropState:c}=s.useContext(_),{optionProps:p,labelProps:b,descriptionProps:g,...f}=Ce({key:t.key,"aria-label":o==null?void 0:o["aria-label"]},l,i),{hoverProps:h,isHovered:S}=j({isDisabled:!f.allowsSelection&&!f.hasAction,onHoverStart:t.props.onHoverStart,onHoverChange:t.props.onHoverChange,onHoverEnd:t.props.onHoverEnd}),v=null;d&&a&&(v=a.useDraggableItem({key:t.key},d));let $=null;c&&a&&($=a.useDroppableItem({target:{type:"item",key:t.key,dropPosition:"on"}},c,i));let m=d&&d.isDragging(t.key),D=T({...o,id:void 0,children:o.children,defaultClassName:"react-aria-ListBoxItem",values:{...f,isHovered:S,selectionMode:l.selectionManager.selectionMode,selectionBehavior:l.selectionManager.selectionBehavior,allowsDragging:!!d,isDragging:m,isDropTarget:$==null?void 0:$.isDropTarget}});s.useEffect(()=>{t.textValue||console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.")},[t.textValue]);let k=o.href?"a":"div";return u.createElement(k,{...E(p,h,v==null?void 0:v.dragProps,$==null?void 0:$.dropProps),...D,ref:i,"data-allows-dragging":!!d||void 0,"data-selected":f.isSelected||void 0,"data-disabled":f.isDisabled||void 0,"data-hovered":S||void 0,"data-focused":f.isFocused||void 0,"data-focus-visible":f.isFocusVisible||void 0,"data-pressed":f.isPressed||void 0,"data-dragging":m||void 0,"data-drop-target":($==null?void 0:$.isDropTarget)||void 0,"data-selection-mode":l.selectionManager.selectionMode==="none"?void 0:l.selectionManager.selectionMode},u.createElement(J,{values:[[ge,{slots:{label:b,description:g}}]]},D.children))});function Ve(e,o){o=G(o);let{dragAndDropHooks:r,dropState:t}=s.useContext(_),{dropIndicatorProps:i,isHidden:l,isDropTarget:a}=r.useDropIndicator(e,t,o);return l?null:u.createElement(Ie,{...e,dropIndicatorProps:i,isDropTarget:a,ref:o})}function Ae(e,o){let{dropIndicatorProps:r,isDropTarget:t,...i}=e,l=T({...i,defaultClassName:"react-aria-DropIndicator",values:{isDropTarget:t}});return u.createElement("div",{...r,...l,role:"option",ref:o,"data-drop-target":t||void 0})}const Ie=s.forwardRef(Ae);export{X as $,L as a,Ge as b,Je as c,N as d,Be as e};