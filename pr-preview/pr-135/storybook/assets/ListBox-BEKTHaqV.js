import{m as H,b as Ve,q as N,c as S,G as K,J as Le,N as Ue,E as _e,d as q,O as W,o as Ne,h as J,f as I,y as Z,$ as Oe,e as Re,B as je}from"./useFocusable-C6jNUHDg.js";import{$ as Ke}from"./useLocalizedStringFormatter-B6EHV5sq.js";import{e as We,f as Ge,d as qe,g as Je}from"./SelectionManager-BUjlZe7l.js";import{m as Ze}from"./Dialog-V38XWmyV.js";import{a as Qe,$ as Xe,b as Ye,c as O,e as ea}from"./Collection-S6q6hP5R.js";import{$ as Q,a as V,b as aa,c as oa,d as X}from"./DragAndDrop-BDFo6_gz.js";import{r as d,R as g}from"./index-BwDkhjyp.js";import{o as ta,g as ra}from"./Form-CCYym-J0.js";import{$ as Y}from"./useCollator-MjvPODsq.js";import{b as ua}from"./useSingleSelectListState-ua_CHISP.js";import{$ as la}from"./context-CkJ-GuNh.js";import{a as sa}from"./FocusScope-BobShdvL.js";const R=new WeakMap;function ia(a){return typeof a=="string"?a.replace(/\s*/g,""):""+a}function na(a,e){let r=R.get(a);if(!r)throw new Error("Unknown list");return`${r.id}-option-${ia(e)}`}function da(a){let{selectionManager:e,collection:r,disabledKeys:o,ref:l,keyboardDelegate:u,layoutDelegate:t}=a,s=Y({usage:"search",sensitivity:"base"}),n=e.disabledBehavior,c=d.useMemo(()=>u||new Q({collection:r,disabledKeys:o,disabledBehavior:n,ref:l,collator:s,layoutDelegate:t}),[u,t,r,o,l,s,n]),{collectionProps:$}=We({...a,ref:l,selectionManager:e,keyboardDelegate:c});return{listProps:$}}function ca(a,e,r){let o=H(a,{labelable:!0}),l=a.selectionBehavior||"toggle",u=a.linkBehavior||(l==="replace"?"action":"override");l==="toggle"&&u==="action"&&(u="override");let{listProps:t}=da({...a,ref:r,selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,linkBehavior:u}),{focusWithinProps:s}=Ve({onFocusWithin:a.onFocus,onBlurWithin:a.onBlur,onFocusWithinChange:a.onFocusChange}),n=N(a.id);R.set(e,{id:n,shouldUseVirtualFocus:a.shouldUseVirtualFocus,shouldSelectOnPressUp:a.shouldSelectOnPressUp,shouldFocusOnHover:a.shouldFocusOnHover,isVirtualized:a.isVirtualized,onAction:a.onAction,linkBehavior:u});let{labelProps:c,fieldProps:$}=ta({...a,id:n,labelElementType:"span"});return{labelProps:c,listBoxProps:S(o,s,e.selectionManager.selectionMode==="multiple"?{"aria-multiselectable":"true"}:{},{role:"listbox",...S($,t)})}}const G=new WeakMap;function pa(a){let e=G.get(a);if(e!=null)return e;e=0;let r=o=>{for(let l of o)l.type==="section"?r(Ge(l,a)):e++};return r(a),G.set(a,e),e}function fa(a,e,r){var o,l;let{key:u}=a,t=R.get(e);var s;let n=(s=a.isDisabled)!==null&&s!==void 0?s:e.selectionManager.isDisabled(u);var c;let $=(c=a.isSelected)!==null&&c!==void 0?c:e.selectionManager.isSelected(u);var v;let f=(v=a.shouldSelectOnPressUp)!==null&&v!==void 0?v:t==null?void 0:t.shouldSelectOnPressUp;var i;let B=(i=a.shouldFocusOnHover)!==null&&i!==void 0?i:t==null?void 0:t.shouldFocusOnHover;var x;let b=(x=a.shouldUseVirtualFocus)!==null&&x!==void 0?x:t==null?void 0:t.shouldUseVirtualFocus;var P;let m=(P=a.isVirtualized)!==null&&P!==void 0?P:t==null?void 0:t.isVirtualized,A=K(),F=K(),y={role:"option","aria-disabled":n||void 0,"aria-selected":e.selectionManager.selectionMode!=="none"?$:void 0};Le()&&Ue()||(y["aria-label"]=a["aria-label"],y["aria-labelledby"]=A,y["aria-describedby"]=F);let p=e.collection.getItem(u);if(m){let h=Number(p==null?void 0:p.index);y["aria-posinset"]=Number.isNaN(h)?void 0:h+1,y["aria-setsize"]=pa(e.collection)}let D=t!=null&&t.onAction?()=>{var h;return t==null||(h=t.onAction)===null||h===void 0?void 0:h.call(t,u)}:void 0,{itemProps:E,isPressed:k,isFocused:C,hasAction:w,allowsSelection:U}=qe({selectionManager:e.selectionManager,key:u,ref:r,shouldSelectOnPressUp:f,allowsDifferentPressOrigin:f&&B,isVirtualized:m,shouldUseVirtualFocus:b,isDisabled:n,onAction:D||!(p==null||(o=p.props)===null||o===void 0)&&o.onAction?_e(p==null||(l=p.props)===null||l===void 0?void 0:l.onAction,D):void 0,linkBehavior:t==null?void 0:t.linkBehavior}),{hoverProps:T}=q({isDisabled:n||!B,onHoverStart(){W()||(e.selectionManager.setFocused(!0),e.selectionManager.setFocusedKey(u))}}),M=H(p==null?void 0:p.props);delete M.id;let z=Ne(p==null?void 0:p.props);return{optionProps:{...y,...S(M,E,T,z),id:na(e,u)},labelProps:{id:A},descriptionProps:{id:F},isFocused:C,isFocusVisible:C&&W(),isSelected:$,isDisabled:n,isPressed:k,allowsSelection:U,hasAction:w}}function ga(a){let{heading:e,"aria-label":r}=a,o=N();return{itemProps:{role:"presentation"},headingProps:e?{id:o,role:"presentation"}:{},groupProps:{role:"group","aria-label":r,"aria-labelledby":e?o:void 0}}}var ee={};ee={longPressMessage:"اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"};var ae={};ae={longPressMessage:"Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"};var oe={};oe={longPressMessage:"Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"};var te={};te={longPressMessage:"Langt tryk eller tryk på Alt + pil ned for at åbne menuen"};var re={};re={longPressMessage:"Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"};var ue={};ue={longPressMessage:"Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"};var le={};le={longPressMessage:"Long press or press Alt + ArrowDown to open menu"};var se={};se={longPressMessage:"Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"};var ie={};ie={longPressMessage:"Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"};var ne={};ne={longPressMessage:"Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"};var de={};de={longPressMessage:"Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."};var ce={};ce={longPressMessage:"לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"};var pe={};pe={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"};var fe={};fe={longPressMessage:"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"};var ge={};ge={longPressMessage:"Premere a lungo o premere Alt + Freccia giù per aprire il menu"};var $e={};$e={longPressMessage:"長押しまたは Alt+下矢印キーでメニューを開く"};var be={};be={longPressMessage:"길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"};var ve={};ve={longPressMessage:"Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."};var xe={};xe={longPressMessage:"Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"};var De={};De={longPressMessage:"Langt trykk eller trykk Alt + PilNed for å åpne menyen"};var Pe={};Pe={longPressMessage:"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"};var me={};me={longPressMessage:"Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"};var ye={};ye={longPressMessage:"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"};var he={};he={longPressMessage:"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"};var Be={};Be={longPressMessage:"Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"};var Ae={};Ae={longPressMessage:"Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"};var Ee={};Ee={longPressMessage:"Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"};var ke={};ke={longPressMessage:"Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"};var Ce={};Ce={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"};var Me={};Me={longPressMessage:"Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"};var Se={};Se={longPressMessage:"Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"};var Fe={};Fe={longPressMessage:"Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"};var we={};we={longPressMessage:"长按或按 Alt + 向下方向键以打开菜单"};var Te={};Te={longPressMessage:"長按或按 Alt+向下鍵以開啟功能表"};var ze={};ze={"ar-AE":ee,"bg-BG":ae,"cs-CZ":oe,"da-DK":te,"de-DE":re,"el-GR":ue,"en-US":le,"es-ES":se,"et-EE":ie,"fi-FI":ne,"fr-FR":de,"he-IL":ce,"hr-HR":pe,"hu-HU":fe,"it-IT":ge,"ja-JP":$e,"ko-KR":be,"lt-LT":ve,"lv-LV":xe,"nb-NO":De,"nl-NL":Pe,"pl-PL":me,"pt-BR":ye,"pt-PT":he,"ro-RO":Be,"ru-RU":Ae,"sk-SK":Ee,"sl-SI":ke,"sr-SP":Ce,"sv-SE":Me,"tr-TR":Se,"uk-UA":Fe,"zh-CN":we,"zh-TW":Te};function $a(a){return a&&a.__esModule?a.default:a}function Ia(a,e,r){let{type:o="menu",isDisabled:l,trigger:u="press"}=a,t=N(),{triggerProps:s,overlayProps:n}=Ze({type:o},e,r),c=i=>{if(!l&&!(u==="longPress"&&!i.altKey)&&r&&r.current)switch(i.key){case"Enter":case" ":if(u==="longPress")return;case"ArrowDown":"continuePropagation"in i||i.stopPropagation(),i.preventDefault(),e.toggle("first");break;case"ArrowUp":"continuePropagation"in i||i.stopPropagation(),i.preventDefault(),e.toggle("last");break;default:"continuePropagation"in i&&i.continuePropagation()}},$=Ke($a(ze),"@react-aria/menu"),{longPressProps:v}=Je({isDisabled:l||u!=="longPress",accessibilityDescription:$.format("longPressMessage"),onLongPressStart(){e.close()},onLongPress(){e.open("first")}}),f={onPressStart(i){i.pointerType!=="touch"&&i.pointerType!=="keyboard"&&!l&&e.open(i.pointerType==="virtual"?"first":null)},onPress(i){i.pointerType==="touch"&&!l&&e.toggle()}};return delete s.onPress,{menuTriggerProps:{...s,...u==="press"?f:v,id:t,onKeyDown:c},menuProps:{...n,"aria-labelledby":t,autoFocus:e.focusStrategy||!0,onClose:e.close}}}const ba=d.createContext({}),va=d.createContext({}),He=d.createContext(null),L=d.createContext(null);function xa(a,e){[a,e]=Oe(a,e,He);let r=d.useContext(L);return r?g.createElement(Ie,{state:r,props:a,listBoxRef:e}):g.createElement(Xe,{content:g.createElement(Ye,a)},o=>g.createElement(Da,{props:a,listBoxRef:e,collection:o}))}function Da({props:a,listBoxRef:e,collection:r}){a={...a,collection:r,children:null,items:null};let{layoutDelegate:o}=d.useContext(O),l=ua({...a,layoutDelegate:o});return g.createElement(Ie,{state:l,props:a,listBoxRef:e})}const Va=d.forwardRef(xa);function Ie({state:a,props:e,listBoxRef:r}){let{dragAndDropHooks:o,layout:l="stack",orientation:u="vertical"}=e,{collection:t,selectionManager:s}=a,n=!!(o!=null&&o.useDraggableCollectionState),c=!!(o!=null&&o.useDroppableCollectionState),{direction:$}=la(),{disabledBehavior:v,disabledKeys:f}=s,i=Y({usage:"search",sensitivity:"base"}),{isVirtualized:B,layoutDelegate:x,dropTargetDelegate:b,CollectionRoot:P}=d.useContext(O),m=d.useMemo(()=>e.keyboardDelegate||new Q({collection:t,collator:i,ref:r,disabledKeys:f,disabledBehavior:v,layout:l,orientation:u,direction:$,layoutDelegate:x}),[t,i,r,v,f,u,$,e.keyboardDelegate,l,x]),{listBoxProps:A}=ca({...e,shouldSelectOnPressUp:n||e.shouldSelectOnPressUp,keyboardDelegate:m,isVirtualized:B},a,r),F=d.useRef(n),y=d.useRef(c);d.useEffect(()=>{F.current!==n&&console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."),y.current!==c&&console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.")},[n,c]);let p,D,E,k=!1,C=null,w=d.useRef(null);if(n&&o){p=o.useDraggableCollectionState({collection:t,selectionManager:s,preview:o.renderDragPreview?w:void 0}),o.useDraggableCollection({},p,r);let _=o.DragPreview;C=o.renderDragPreview?g.createElement(_,{ref:w},o.renderDragPreview):null}if(c&&o){D=o.useDroppableCollectionState({collection:t,selectionManager:s});let _=o.dropTargetDelegate||b||new o.ListDropTargetDelegate(t,r,{orientation:u,layout:l,direction:$});E=o.useDroppableCollection({keyboardDelegate:m,dropTargetDelegate:_},D,r),k=D.isDropTarget({type:"root"})}let{focusProps:U,isFocused:T,isFocusVisible:M}=Re(),z={isDropTarget:k,isEmpty:a.collection.size===0,isFocused:T,isFocusVisible:M,layout:e.layout||"stack",state:a},h=I({className:e.className,style:e.style,defaultClassName:"react-aria-ListBox",values:z}),j=null;return a.collection.size===0&&e.renderEmptyState&&(j=g.createElement("div",{role:"option",style:{display:"contents"}},e.renderEmptyState(z))),g.createElement(sa,null,g.createElement("div",{...H(e),...S(A,U,E==null?void 0:E.collectionProps),...h,ref:r,slot:e.slot||void 0,onScroll:e.onScroll,"data-drop-target":k||void 0,"data-empty":a.collection.size===0||void 0,"data-focused":T||void 0,"data-focus-visible":M||void 0,"data-layout":e.layout||"stack","data-orientation":e.orientation||"vertical"},g.createElement(Z,{values:[[He,e],[L,a],[V,{dragAndDropHooks:o,dragState:p,dropState:D}],[va,{elementType:"div"}],[aa,{render:ma}],[ea,{render:Pa}]]},g.createElement(P,{collection:t,scrollRef:r,persistedKeys:oa(s,o,D),renderDropIndicator:X(o,D)})),j,C))}function Pa(a,e,r){let o=d.useContext(L),{dragAndDropHooks:l,dropState:u}=d.useContext(V),{CollectionBranch:t}=d.useContext(O),[s,n]=je();var c;let{headingProps:$,groupProps:v}=ga({heading:n,"aria-label":(c=a["aria-label"])!==null&&c!==void 0?c:void 0}),f=I({defaultClassName:"react-aria-Section",className:a.className,style:a.style,values:{}});return g.createElement("section",{...H(a),...v,...f,ref:e},g.createElement(ba.Provider,{value:{...$,ref:s}},g.createElement(t,{collection:o.collection,parent:r,renderDropIndicator:X(l,u)})))}const La=Qe("item",function(e,r,o){let l=J(r),u=d.useContext(L),{dragAndDropHooks:t,dragState:s,dropState:n}=d.useContext(V),{optionProps:c,labelProps:$,descriptionProps:v,...f}=fa({key:o.key,"aria-label":e==null?void 0:e["aria-label"]},u,l),{hoverProps:i,isHovered:B}=q({isDisabled:!f.allowsSelection&&!f.hasAction,onHoverStart:o.props.onHoverStart,onHoverChange:o.props.onHoverChange,onHoverEnd:o.props.onHoverEnd}),x=null;s&&t&&(x=t.useDraggableItem({key:o.key},s));let b=null;n&&t&&(b=t.useDroppableItem({target:{type:"item",key:o.key,dropPosition:"on"}},n,l));let P=s&&s.isDragging(o.key),m=I({...e,id:void 0,children:e.children,defaultClassName:"react-aria-ListBoxItem",values:{...f,isHovered:B,selectionMode:u.selectionManager.selectionMode,selectionBehavior:u.selectionManager.selectionBehavior,allowsDragging:!!s,isDragging:P,isDropTarget:b==null?void 0:b.isDropTarget}});d.useEffect(()=>{o.textValue||console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.")},[o.textValue]);let A=e.href?"a":"div";return g.createElement(A,{...S(c,i,x==null?void 0:x.dragProps,b==null?void 0:b.dropProps),...m,ref:l,"data-allows-dragging":!!s||void 0,"data-selected":f.isSelected||void 0,"data-disabled":f.isDisabled||void 0,"data-hovered":B||void 0,"data-focused":f.isFocused||void 0,"data-focus-visible":f.isFocusVisible||void 0,"data-pressed":f.isPressed||void 0,"data-dragging":P||void 0,"data-drop-target":(b==null?void 0:b.isDropTarget)||void 0,"data-selection-mode":u.selectionManager.selectionMode==="none"?void 0:u.selectionManager.selectionMode},g.createElement(Z,{values:[[ra,{slots:{label:$,description:v}}]]},m.children))});function ma(a,e){e=J(e);let{dragAndDropHooks:r,dropState:o}=d.useContext(V),{dropIndicatorProps:l,isHidden:u,isDropTarget:t}=r.useDropIndicator(a,o,e);return u?null:g.createElement(ha,{...a,dropIndicatorProps:l,isDropTarget:t,ref:e})}function ya(a,e){let{dropIndicatorProps:r,isDropTarget:o,...l}=a,u=I({...l,defaultClassName:"react-aria-DropIndicator",values:{isDropTarget:o}});return g.createElement("div",{...r,...u,role:"option",ref:e,"data-drop-target":o||void 0})}const ha=d.forwardRef(ya);export{Ia as $,He as a,L as b,Va as c,La as d,R as e,pa as f,na as g};