import{j as C}from"./jsx-runtime-Nms4Y4qS.js";import{$ as ze,B as Se}from"./Button-CFI5xjAF.js";import{$ as Te,a as j,b as _e,c as je,d as Ve,f as Oe}from"./Collection-CKcZJKgp.js";import{k as V,n as w,c as D,w as Ie,G as Ue,Q as O,t as k,K as We,b as He,H as Ge,h as qe,e as I,d as Qe,f as U,A as W,$ as H,E as Xe}from"./useFocusable-C3Zwbx3S.js";import{b as Je,c as Ye,a as Ze}from"./Text-CYGrO2MJ.js";import{g as er,$ as M}from"./ListBox-DXIOu1yG.js";import{r as $,R as g}from"./index-BwDkhjyp.js";import{a as rr}from"./DragAndDrop-D1my3whc.js";import{a as tr,b as or}from"./useHighlightSelectionDescription-QN9Az8HR.js";import{$ as ar}from"./useHasTabbableChild-Dolr4SiZ.js";import{$ as G}from"./context-C8hDq7-P.js";import{$ as ir}from"./useDescription-BubdPxWs.js";import{$ as h}from"./getScrollParent-yMl4gzwT.js";import{b as E}from"./scrollIntoView-DUcd1lYg.js";import{$ as z}from"./FocusScope-DI20Bbtn.js";import{h as nr,f as ur}from"./SelectionManager-C4CZJXbT.js";import{$ as sr}from"./useLocalizedStringFormatter-CxeZs8NQ.js";import{$ as lr}from"./useListState-DjCLJrex.js";import{X as cr}from"./x-BNls5wfR.js";const K=new WeakMap;function S(r,e){let{id:t}=K.get(r);if(!t)throw new Error("Unknown list");return`${t}-${dr(e)}`}function dr(r){return typeof r=="string"?r.replace(/\s*/g,""):""+r}function br(r,e,t){let{isVirtualized:i,keyboardDelegate:s,layoutDelegate:o,onAction:n,linkBehavior:d="action",keyboardNavigationBehavior:l="arrow"}=r;!r["aria-label"]&&!r["aria-labelledby"]&&console.warn("An aria-label or aria-labelledby prop is required for accessibility.");let{listProps:b}=er({selectionManager:e.selectionManager,collection:e.collection,disabledKeys:e.disabledKeys,ref:t,keyboardDelegate:s,layoutDelegate:o,isVirtualized:i,selectOnFocus:e.selectionManager.selectionBehavior==="replace",shouldFocusWrap:r.shouldFocusWrap,linkBehavior:d}),u=V(r.id);K.set(e,{id:u,onAction:n,linkBehavior:d,keyboardNavigationBehavior:l});let f=tr({selectionManager:e.selectionManager,hasItemActions:!!n}),p=ar(t,{isDisabled:e.collection.size!==0}),c=w(r,{labelable:!0}),v=D(c,{role:"grid",id:u,"aria-multiselectable":e.selectionManager.selectionMode==="multiple"?"true":void 0},e.collection.size===0?{tabIndex:p?-1:0}:b,f);return i&&(v["aria-rowcount"]=e.collection.size,v["aria-colcount"]=1),or({},e),{gridProps:v}}const T={expand:{ltr:"ArrowRight",rtl:"ArrowLeft"},collapse:{ltr:"ArrowLeft",rtl:"ArrowRight"}};function fr(r,e,t){var i,s;let{node:o,isVirtualized:n,shouldSelectOnPressUp:d}=r,{direction:l}=G(),{onAction:b,linkBehavior:u,keyboardNavigationBehavior:f}=K.get(e),p=Ie(),c=$.useRef(null),v=()=>{var a;(c.current!=null&&o.key!==c.current||!(!((a=t.current)===null||a===void 0)&&a.contains(document.activeElement)))&&k(t.current)},L={},B,R=e.selectionManager.isLink(o.key);o!=null&&"expandedKeys"in e&&(B=[...e.collection.getChildren(o.key)].length>1,b==null&&!R&&e.selectionManager.selectionMode==="none"&&B&&(b=()=>e.toggleKey(o.key)),L={"aria-expanded":B?e.expandedKeys.has(o.key):void 0,"aria-level":o.level+1,"aria-posinset":(o==null?void 0:o.index)+1,"aria-setsize":o.level>0?nr(e.collection.getChildren(o==null?void 0:o.parentKey)).index+1:[...e.collection].filter(m=>m.level===0).at(-1).index+1});let{itemProps:F,...P}=ur({selectionManager:e.selectionManager,key:o.key,ref:t,isVirtualized:n,shouldSelectOnPressUp:d,onAction:b||!((i=o.props)===null||i===void 0)&&i.onAction?Ue((s=o.props)===null||s===void 0?void 0:s.onAction,b?()=>b(o.key):void 0):void 0,focus:v,linkBehavior:u}),Me=a=>{if(!a.currentTarget.contains(a.target))return;let m=z(t.current);if(m.currentNode=document.activeElement,"expandedKeys"in e&&document.activeElement===t.current){if(a.key===T.expand[l]&&e.selectionManager.focusedKey===o.key&&B&&!e.expandedKeys.has(o.key)){e.toggleKey(o.key),a.stopPropagation();return}else if(a.key===T.collapse[l]&&e.selectionManager.focusedKey===o.key&&B&&e.expandedKeys.has(o.key)){e.toggleKey(o.key),a.stopPropagation();return}}switch(a.key){case"ArrowLeft":if(f==="arrow"){let x=l==="rtl"?m.nextNode():m.previousNode();if(x)a.preventDefault(),a.stopPropagation(),k(x),E(x,{containingElement:h(t.current)});else if(a.preventDefault(),a.stopPropagation(),l==="rtl")k(t.current),E(t.current,{containingElement:h(t.current)});else{m.currentNode=t.current;let y=_(m);y&&(k(y),E(y,{containingElement:h(t.current)}))}}break;case"ArrowRight":if(f==="arrow"){let x=l==="rtl"?m.previousNode():m.nextNode();if(x)a.preventDefault(),a.stopPropagation(),k(x),E(x,{containingElement:h(t.current)});else if(a.preventDefault(),a.stopPropagation(),l==="ltr")k(t.current),E(t.current,{containingElement:h(t.current)});else{m.currentNode=t.current;let y=_(m);y&&(k(y),E(y,{containingElement:h(t.current)}))}}break;case"ArrowUp":case"ArrowDown":!a.altKey&&t.current.contains(a.target)&&(a.stopPropagation(),a.preventDefault(),t.current.parentElement.dispatchEvent(new KeyboardEvent(a.nativeEvent.type,a.nativeEvent)));break;case"Tab":if(f==="tab"){let x=z(t.current,{tabbable:!0});x.currentNode=document.activeElement,(a.shiftKey?x.previousNode():x.nextNode())&&a.stopPropagation()}}},Re=a=>{if(c.current=o.key,a.target!==t.current){We()||e.selectionManager.setFocusedKey(o.key);return}},Fe=O(o.props),Ke=P.hasAction?Fe:{},N=D(F,Ke,{role:"row",onKeyDownCapture:Me,onFocus:Re,"aria-label":o.textValue||void 0,"aria-selected":e.selectionManager.canSelectItem(o.key)?e.selectionManager.isSelected(o.key):void 0,"aria-disabled":e.selectionManager.isDisabled(o.key)||void 0,"aria-labelledby":p&&o.textValue?`${S(e,o.key)} ${p}`:void 0,id:S(e,o.key)});n&&(N["aria-rowindex"]=o.index+1);let Ne={role:"gridcell","aria-colindex":1};return{rowProps:{...D(N,L)},gridCellProps:Ne,descriptionProps:{id:p},...P}}function _(r){let e,t;do t=r.lastChild(),t&&(e=t);while(t);return e}const q=new WeakMap;function pr(r,e,t){let{direction:i}=G(),s=r.keyboardDelegate||new rr({collection:e.collection,ref:t,orientation:"horizontal",direction:i,disabledKeys:e.disabledKeys,disabledBehavior:e.selectionManager.disabledBehavior}),{labelProps:o,fieldProps:n,descriptionProps:d,errorMessageProps:l}=Je({...r,labelElementType:"span"}),{gridProps:b}=br({...r,...n,keyboardDelegate:s,shouldFocusWrap:!0,linkBehavior:"override"},e,t),[u,f]=$.useState(!1),{focusWithinProps:p}=He({onFocusWithinChange:f}),c=w(r),v=$.useRef(e.collection.size);return $.useEffect(()=>{t.current&&v.current>0&&e.collection.size===0&&u&&t.current.focus(),v.current=e.collection.size},[e.collection.size,u,t]),q.set(e,{onRemove:r.onRemove}),{gridProps:D(b,c,{role:e.collection.size?"grid":null,"aria-atomic":!1,"aria-relevant":"additions","aria-live":u?"polite":"off",...p,...n}),labelProps:o,descriptionProps:d,errorMessageProps:l}}var Q={};Q={removeButtonLabel:"إزالة",removeDescription:"اضغط على مفتاح DELETE لإزالة علامة."};var X={};X={removeButtonLabel:"Премахване",removeDescription:"Натиснете Delete, за да премахнете маркера."};var J={};J={removeButtonLabel:"Odebrat",removeDescription:"Stisknutím klávesy Delete odeberete značku."};var Y={};Y={removeButtonLabel:"Fjern",removeDescription:"Tryk på Slet for at fjerne tag."};var Z={};Z={removeButtonLabel:"Entfernen",removeDescription:"Auf „Löschen“ drücken, um das Tag zu entfernen."};var ee={};ee={removeButtonLabel:"Κατάργηση",removeDescription:"Πατήστε Διαγραφή για να καταργήσετε την ετικέτα."};var re={};re={removeDescription:"Press Delete to remove tag.",removeButtonLabel:"Remove"};var te={};te={removeButtonLabel:"Quitar",removeDescription:"Pulse Eliminar para quitar la etiqueta."};var oe={};oe={removeButtonLabel:"Eemalda",removeDescription:"Sildi eemaldamiseks vajutage kustutusklahvi Delete."};var ae={};ae={removeButtonLabel:"Poista",removeDescription:"Poista tunniste painamalla Poista-painiketta."};var ie={};ie={removeButtonLabel:"Supprimer",removeDescription:"Appuyez sur Supprimer pour supprimer l’étiquette."};var ne={};ne={removeButtonLabel:"הסר",removeDescription:"לחץ על מחק כדי להסיר תג."};var ue={};ue={removeButtonLabel:"Ukloni",removeDescription:"Pritisnite Delete za uklanjanje oznake."};var se={};se={removeButtonLabel:"Eltávolítás",removeDescription:"Nyomja meg a Delete billentyűt a címke eltávolításához."};var le={};le={removeButtonLabel:"Rimuovi",removeDescription:"Premi Elimina per rimuovere il tag."};var ce={};ce={removeButtonLabel:"削除",removeDescription:"タグを削除するには、Delete キーを押します。"};var de={};de={removeButtonLabel:"제거",removeDescription:"태그를 제거하려면 Delete 키를 누르십시오."};var be={};be={removeButtonLabel:"Pašalinti",removeDescription:"Norėdami pašalinti žymą, paspauskite „Delete“ klavišą."};var fe={};fe={removeButtonLabel:"Noņemt",removeDescription:"Nospiediet Delete [Dzēst], lai noņemtu tagu."};var pe={};pe={removeButtonLabel:"Fjern",removeDescription:"Trykk på Slett for å fjerne taggen."};var $e={};$e={removeButtonLabel:"Verwijderen",removeDescription:"Druk op Verwijderen om de tag te verwijderen."};var ve={};ve={removeButtonLabel:"Usuń",removeDescription:"Naciśnij Usuń, aby usunąć znacznik."};var me={};me={removeButtonLabel:"Remover",removeDescription:"Pressione Delete para remover a tag."};var xe={};xe={removeButtonLabel:"Eliminar",removeDescription:"Prima Delete para eliminar a tag."};var ge={};ge={removeButtonLabel:"Îndepărtaţi",removeDescription:"Apăsați pe Delete (Ștergere) pentru a elimina eticheta."};var ye={};ye={removeButtonLabel:"Удалить",removeDescription:"Нажмите DELETE, чтобы удалить тег."};var De={};De={removeButtonLabel:"Odstrániť",removeDescription:"Ak chcete odstrániť značku, stlačte kláves Delete."};var Be={};Be={removeButtonLabel:"Odstrani",removeDescription:"Pritisnite Delete, da odstranite oznako."};var ke={};ke={removeButtonLabel:"Ukloni",removeDescription:"Pritisnite Obriši da biste uklonili oznaku."};var Pe={};Pe={removeButtonLabel:"Ta bort",removeDescription:"Tryck på Radera för att ta bort taggen."};var he={};he={removeButtonLabel:"Kaldır",removeDescription:"Etiketi kaldırmak için Sil tuşuna basın."};var Ee={};Ee={removeButtonLabel:"Вилучити",removeDescription:"Натисніть Delete, щоб вилучити тег."};var Ce={};Ce={removeButtonLabel:"删除",removeDescription:"按下“删除”以删除标记。"};var we={};we={removeButtonLabel:"移除",removeDescription:"按 Delete 鍵以移除標記。"};var Le={};Le={"ar-AE":Q,"bg-BG":X,"cs-CZ":J,"da-DK":Y,"de-DE":Z,"el-GR":ee,"en-US":re,"es-ES":te,"et-EE":oe,"fi-FI":ae,"fr-FR":ie,"he-IL":ne,"hr-HR":ue,"hu-HU":se,"it-IT":le,"ja-JP":ce,"ko-KR":de,"lt-LT":be,"lv-LV":fe,"nb-NO":pe,"nl-NL":$e,"pl-PL":ve,"pt-BR":me,"pt-PT":xe,"ro-RO":ge,"ru-RU":ye,"sk-SK":De,"sl-SI":Be,"sr-SP":ke,"sv-SE":Pe,"tr-TR":he,"uk-UA":Ee,"zh-CN":Ce,"zh-TW":we};function $r(r){return r&&r.__esModule?r.default:r}function vr(r,e,t){let{item:i}=r,s=sr($r(Le),"@react-aria/tag"),o=V(),{onRemove:n}=q.get(e)||{},{rowProps:d,gridCellProps:l,...b}=fr({node:i},e,t);delete d.onKeyDownCapture;let{descriptionProps:u,...f}=b,p=P=>{(P.key==="Delete"||P.key==="Backspace")&&(P.preventDefault(),e.selectionManager.isSelected(i.key)?n==null||n(new Set(e.selectionManager.selectedKeys)):n==null||n(new Set([i.key])))},c=Ge();c==="virtual"&&typeof window<"u"&&"ontouchstart"in window&&(c="pointer");let v=n&&(c==="keyboard"||c==="virtual")?s.format("removeDescription"):"",L=ir(v),B=i.key===e.selectionManager.focusedKey,R=w(i.props),F=O(i.props);return{removeButtonProps:{"aria-label":s.format("removeButtonLabel"),"aria-labelledby":`${o} ${d.id}`,isDisabled:e.disabledKeys.has(i.key)||i.props.isDisabled,id:o,onPress:()=>n?n(new Set([i.key])):null,excludeFromTabOrder:!0},rowProps:D(d,R,F,{tabIndex:B||e.selectionManager.focusedKey==null?0:-1,onKeyDown:n?p:void 0,"aria-describedby":L["aria-describedby"]}),gridCellProps:D(l,{"aria-errormessage":r["aria-errormessage"],"aria-label":r["aria-label"]}),...f,allowsRemoving:!!n}}const mr=$.createContext(null),Ae=$.createContext(null);function xr(r,e){return[r,e]=H(r,e,mr),g.createElement(je,{content:r.children},t=>g.createElement(gr,{props:r,forwardedRef:e,collection:t}))}function gr({props:r,forwardedRef:e,collection:t}){let i=$.useRef(null),[s,o]=Xe(),n=lr({...r,children:void 0,collection:t}),d=w(r),l=Object.fromEntries(Object.entries(d).map(([v])=>[v,void 0])),{gridProps:b,labelProps:u,descriptionProps:f,errorMessageProps:p}=pr({...r,...l,label:o},n,i);var c;return g.createElement("div",{...d,ref:e,slot:r.slot||void 0,className:(c=r.className)!==null&&c!==void 0?c:"react-aria-TagGroup",style:r.style},g.createElement(W,{values:[[Ye,{...u,elementType:"span",ref:s}],[Ae,{...b,ref:i}],[M,n],[Ze,{slots:{description:f,errorMessage:p}}]]},r.children))}const yr=$.forwardRef(xr);function Dr(r,e){return $.useContext(M)?g.createElement(Br,{props:r,forwardedRef:e}):g.createElement(Ve,r)}function Br({props:r,forwardedRef:e}){let t=$.useContext(M),{CollectionRoot:i}=$.useContext(j),[s,o]=H(r,e,Ae);delete s.items,delete s.renderEmptyState;let{focusProps:n,isFocused:d,isFocusVisible:l}=I(),b={isEmpty:t.collection.size===0,isFocused:d,isFocusVisible:l,state:t},u=U({className:r.className,style:r.style,defaultClassName:"react-aria-TagList",values:b}),f=Oe(t.selectionManager.focusedKey);return g.createElement("div",{...D(s,n),...u,ref:o,"data-empty":t.collection.size===0||void 0,"data-focused":d||void 0,"data-focus-visible":l||void 0},t.collection.size===0&&r.renderEmptyState?r.renderEmptyState(b):g.createElement(i,{collection:t.collection,persistedKeys:f}))}const kr=$.forwardRef(Dr),Pr=Te("item",(r,e,t)=>{let i=$.useContext(M),s=qe(e),{focusProps:o,isFocusVisible:n}=I({within:!0}),{rowProps:d,gridCellProps:l,removeButtonProps:b,...u}=vr({item:t},i,s),{hoverProps:f,isHovered:p}=Qe({isDisabled:!u.allowsSelection,onHoverStart:t.props.onHoverStart,onHoverChange:t.props.onHoverChange,onHoverEnd:t.props.onHoverEnd}),c=U({...r,id:void 0,children:t.rendered,defaultClassName:"react-aria-Tag",values:{...u,isFocusVisible:n,isHovered:p,selectionMode:i.selectionManager.selectionMode,selectionBehavior:i.selectionManager.selectionBehavior}});return $.useEffect(()=>{t.textValue||console.warn("A `textValue` prop is required for <Tag> elements with non-plain text children for accessibility.")},[t.textValue]),g.createElement("div",{ref:s,...c,...D(w(r),d,o,f),"data-selected":u.isSelected||void 0,"data-disabled":u.isDisabled||void 0,"data-hovered":p||void 0,"data-focused":u.isFocused||void 0,"data-focus-visible":n||void 0,"data-pressed":u.isPressed||void 0,"data-allows-removing":u.allowsRemoving||void 0,"data-selection-mode":i.selectionManager.selectionMode==="none"?void 0:i.selectionManager.selectionMode},g.createElement("div",{...l,style:{display:"contents"}},g.createElement(W,{values:[[ze,{slots:{remove:b}}],[j,_e]]},c.children)))}),hr='"../../../theme/src/lib/tokens.css"',Er='"Inter", sans-serif',Cr="#000000",wr="#b31b1b",Lr="(max-width: 767px)",Ar="#bfbfbf",Mr="#d9d9d9",Rr="#e6e6e6",Fr="#f2f2f2",Kr="#f2f2f2",Nr="_tag_pahin_4",zr="_tagText_pahin_30",Sr="_tagList_pahin_35",Tr="_button_pahin_41",A={tokens:hr,display:Er,black:Cr,signalRed130:wr,smBreakpoint:Lr,gray50:Ar,gray30:Mr,gray20:Rr,gray10:Fr,backgroundSecondary:Kr,tag:Nr,tagText:zr,tagList:Sr,button:Tr},at=({children:r,...e})=>C.jsx(yr,{...e,children:C.jsx(kr,{className:A.tagList,children:r})}),it=({children:r,...e})=>C.jsxs(Pr,{className:A.tag,...e,children:[C.jsx("div",{className:A.tagText,children:r}),C.jsx(Se,{variant:"icon",size:"small",className:A.button,slot:"remove",children:C.jsx(cr,{size:20})})]});export{S as $,it as T,at as a,fr as b,br as c};