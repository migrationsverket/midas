import{j as e,e as oe}from"./iframe-dflwVQj0.js";import{f as me,e as pe}from"./Separator-BX-fF_Lq.js";import{d as he,a as fe,c as ye,e as be,b as w,f as V,g as ge}from"./Dialog-B1cB_IPZ.js";import{b as ve}from"./Collection-9piau7XR.js";import{c}from"./clsx-B-dksMZM.js";import{C as Se}from"./check-DTuH6W3e.js";import{C as xe}from"./chevron-right-lzbhJ6jv.js";import{B as q}from"./Button-yQqQnt2P.js";import{M as I}from"./menu-B4zWr6YY.js";import{T as l}from"./Text-CGySpxCU.js";import"./preload-helper-Dp1pzeXC.js";import"./SelectionManager-UZPvH6eY.js";import"./utils-D2xLghoe.js";import"./useFocusRing-HtxIgFNi.js";import"./index-Bfut8mpi.js";import"./index-CCW8wJf9.js";import"./useEvent-ClhNZjxU.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-nialgbX5.js";import"./useDescription-BYEFn_B-.js";import"./useControlledState-C3u3uV6K.js";import"./ListKeyboardDelegate-DnkA8ajC.js";import"./Button-OnM31pp4.js";import"./Hidden-Bgbt5e-x.js";import"./useLabels-_O_l3D-4.js";import"./useButton-7jVyTze4.js";import"./RSPContexts-66zUneKs.js";import"./OverlayArrow-tXR7neqU.js";import"./useResizeObserver-0x0644AP.js";import"./Text-M-3GLQok.js";import"./PressResponder-BcKvKsJn.js";import"./useLocalizedStringFormatter-zTz9wKxs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CTpbaFYv.js";import"./index-IvJ_bBvX.js";import"./createLucideIcon-BnM8_3Zb.js";import"./Button.module-DKVuWS4g.js";const Me="_menu_gqrb8_4",Ve="_menuSection_gqrb8_13",Te="_medium_gqrb8_24",we="_menuItem_gqrb8_30",qe="_mainContent_gqrb8_86",Ie="_checkMark_gqrb8_97",Ce="_separator_gqrb8_107",je="_menuPopover_gqrb8_144",i={menu:Me,menuSection:Ve,medium:Te,menuItem:we,mainContent:qe,checkMark:Ie,separator:Ce,menuPopover:je},s=({className:t,size:n="large",...r})=>e.jsx(he,{className:c(t,i.menu,n==="medium"&&i.medium),...r});try{s.displayName="Menu",s.__docgenInfo={description:"",displayName:"Menu",props:{size:{defaultValue:{value:"large"},description:"Component size (large: height 40px, medium: height 32px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},renderEmptyState:{defaultValue:null,description:"Provides content to display when there are no items in the list.",name:"renderEmptyState",required:!1,type:{name:"(() => ReactNode)"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"Item objects in the collection.",name:"items",required:!1,type:{name:"Iterable<T>"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},onAction:{defaultValue:null,description:"Handler that is called when an item is selected.",name:"onAction",required:!1,type:{name:"((key: Key) => void)"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"Where the focus should be set.",name:"autoFocus",required:!1,type:{name:"boolean | FocusStrategy"}},escapeKeyBehavior:{defaultValue:{value:"'clearSelection'"},description:`Whether pressing the escape key should clear selection in the menu or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to
easily clear selection. Only use if the escape key is being handled externally or should not
trigger selection clearing contextually.`,name:"escapeKeyBehavior",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"clearSelection"'}]}},shouldFocusWrap:{defaultValue:null,description:"Whether keyboard navigation is circular.",name:"shouldFocusWrap",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Handler that is called when the menu should close after selecting an item.",name:"onClose",required:!1,type:{name:"(() => void)"}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"single"'},{value:'"multiple"'}]}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((keys: Selection) => void)"}},children:{defaultValue:null,description:"The contents of the collection.",name:"children",required:!1,type:{name:"ReactNode | ((item: T) => ReactNode)"}},dependencies:{defaultValue:null,description:"Values that should invalidate the item cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"readonly any[]"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: MenuRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: MenuRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},onScroll:{defaultValue:null,description:"Handler that is called when a user scrolls. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event).",name:"onScroll",required:!1,type:{name:"((e: UIEvent<HTMLDivElement, UIEvent>) => void)"}}}}}catch{}const a=t=>e.jsx(fe,{...t,textValue:t.textValue||(typeof t.children=="string"?t.children:void 0),className:c(i.menuItem,t.className),children:n=>{const{children:r}=t,{selectionMode:de,isSelected:ce,hasSubmenu:ue}=n;return e.jsxs(e.Fragment,{children:[de!=="none"&&e.jsx(Se,{size:16,className:i.checkMark,"data-selected":ce||void 0}),e.jsx("div",{className:i.mainContent,children:typeof r=="function"?r(n):r}),ue&&e.jsx(xe,{size:20})]})}});try{a.displayName="MenuItem",a.__docgenInfo={description:"",displayName:"MenuItem",props:{id:{defaultValue:null,description:"The unique id of the item.",name:"id",required:!1,type:{name:"Key"}},value:{defaultValue:null,description:"The object value that this item represents. When using dynamic collections, this is set automatically.",name:"value",required:!1,type:{name:"object"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"An accessibility label for this item.",name:"aria-label",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the item is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},onAction:{defaultValue:null,description:"Handler that is called when the item is selected.",name:"onAction",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: MenuItemRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: MenuItemRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: MenuItemRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},href:{defaultValue:null,description:"A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).",name:"href",required:!1,type:{name:"string"}},hrefLang:{defaultValue:null,description:"Hints at the human language of the linked URL. See[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang).",name:"hrefLang",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},rel:{defaultValue:null,description:"The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).",name:"rel",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).",name:"download",required:!1,type:{name:"string | boolean"}},ping:{defaultValue:null,description:"A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping).",name:"ping",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy).",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},routerOptions:{defaultValue:null,description:"Options for the configured client side router.",name:"routerOptions",required:!1,type:{name:"undefined"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"((isHovering: boolean) => void)"}}}}}catch{}const o=({className:t,...n})=>e.jsx(ye,{className:c(t,i.menuPopover),offset:4,...n});try{o.displayName="MenuPopover",o.__docgenInfo={description:"",displayName:"MenuPopover",props:{trigger:{defaultValue:null,description:"The name of the component that triggered the popover. This is reflected on the element\nas the `data-trigger` attribute, and can be used to provide specific\nstyles for the popover depending on which element triggered it.",name:"trigger",required:!1,type:{name:"string"}},triggerRef:{defaultValue:null,description:`The ref for the element which the popover positions itself with respect to.

When used within a trigger component such as DialogTrigger, MenuTrigger, Select, etc.,
this is set automatically. It is only required when used standalone.`,name:"triggerRef",required:!1,type:{name:"RefObject<Element | null>"}},isEntering:{defaultValue:null,description:"Whether the popover is currently performing an entry animation.",name:"isEntering",required:!1,type:{name:"boolean"}},isExiting:{defaultValue:null,description:"Whether the popover is currently performing an exit animation.",name:"isExiting",required:!1,type:{name:"boolean"}},UNSTABLE_portalContainer:{defaultValue:{value:"document.body"},description:`The container element in which the overlay portal will be placed. This may have unknown behavior depending on where it is portalled to.
@deprecated - Use a parent UNSAFE_PortalProvider to set your portal container instead.`,name:"UNSTABLE_portalContainer",required:!1,type:{name:"Element"}},offset:{defaultValue:{value:"8"},description:`The additional offset applied along the main axis between the element and its
anchor element.`,name:"offset",required:!1,type:{name:"number"}},placement:{defaultValue:{value:"'bottom'"},description:"The placement of the element with respect to its anchor element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"bottom start"'},{value:'"bottom end"'},{value:'"top left"'},{value:'"top right"'},{value:'"top start"'},{value:'"top end"'},{value:'"left top"'},{value:'"left bottom"'},{value:'"start"'},{value:'"start top"'},{value:'"start bottom"'},{value:'"right top"'},{value:'"right bottom"'},{value:'"end"'},{value:'"end top"'},{value:'"end bottom"'}]}},containerPadding:{defaultValue:{value:"12"},description:`The placement padding that should be applied between the element and its
surrounding container.`,name:"containerPadding",required:!1,type:{name:"number"}},crossOffset:{defaultValue:{value:"0"},description:`The additional offset applied along the cross axis between the element and its
anchor element.`,name:"crossOffset",required:!1,type:{name:"number"}},shouldFlip:{defaultValue:{value:"true"},description:`Whether the element should flip its orientation (e.g. top to bottom or left to right) when
there is insufficient room for it to render completely.`,name:"shouldFlip",required:!1,type:{name:"boolean"}},shouldCloseOnInteractOutside:{defaultValue:null,description:`When user interacts with the argument element outside of the popover ref,
return true if onClose should be called. This gives you a chance to filter
out interaction with elements that should not dismiss the popover.
By default, onClose will always be called on interaction outside the popover ref.`,name:"shouldCloseOnInteractOutside",required:!1,type:{name:"((element: Element) => boolean)"}},isKeyboardDismissDisabled:{defaultValue:{value:"false"},description:`Whether pressing the escape key to close the popover should be disabled.

Most popovers should not use this option. When set to true, an alternative
way to close the popover with a keyboard must be provided.`,name:"isKeyboardDismissDisabled",required:!1,type:{name:"boolean"}},boundaryElement:{defaultValue:{value:"document.body"},description:"Element that that serves as the positioning boundary.",name:"boundaryElement",required:!1,type:{name:"Element"}},scrollRef:{defaultValue:{value:"overlayRef"},description:"A ref for the scrollable region within the overlay.",name:"scrollRef",required:!1,type:{name:"RefObject<Element | null>"}},shouldUpdatePosition:{defaultValue:{value:"true"},description:"Whether the overlay should update its position automatically.",name:"shouldUpdatePosition",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:`The maxHeight specified for the overlay element.
By default, it will take all space up to the current viewport height.`,name:"maxHeight",required:!1,type:{name:"number"}},arrowBoundaryOffset:{defaultValue:{value:"0"},description:"The minimum distance the arrow's edge should be from the edge of the overlay element.",name:"arrowBoundaryOffset",required:!1,type:{name:"number"}},isNonModal:{defaultValue:null,description:`Whether the popover is non-modal, i.e. elements outside the popover may be
interacted with by assistive technologies.

Most popovers should not use this option as it may negatively impact the screen
reader experience. Only use with components such as combobox, which are designed
to handle this situation carefully.`,name:"isNonModal",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: PopoverRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: PopoverRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: PopoverRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}}}}}catch{}const T=({className:t,...n})=>e.jsx(be,{className:c(t,i.menuSection),...n});try{T.displayName="MenuSection",T.__docgenInfo={description:"",displayName:"MenuSection",props:{id:{defaultValue:null,description:"The unique id of the section.",name:"id",required:!1,type:{name:"Key"}},value:{defaultValue:null,description:"The object value that this section represents. When using dynamic collections, this is set automatically.",name:"value",required:!1,type:{name:"object"}},children:{defaultValue:null,description:"Static child items or a function to render children.",name:"children",required:!1,type:{name:"ReactNode | ((item: T) => ReactElement<any, string | JSXElementConstructor<any>>)"}},dependencies:{defaultValue:null,description:"Values that should invalidate the item cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"readonly any[]"}},items:{defaultValue:null,description:"Item objects in the section.",name:"items",required:!1,type:{name:"Iterable<T>"}},"aria-label":{defaultValue:null,description:"An accessibility label for the section.",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"single"'},{value:'"multiple"'}]}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((keys: Selection) => void)"}},disabledKeys:{defaultValue:null,description:"The currently disabled keys in the collection (controlled).",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}}}}}catch{}const M=({className:t,...n})=>e.jsx(me,{className:c(t,i.separator),...n});try{M.displayName="Separator",M.__docgenInfo={description:"",displayName:"Separator",props:{orientation:{defaultValue:{value:"'horizontal'"},description:"The orientation of the separator.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},elementType:{defaultValue:null,description:"The HTML element type that will be used to render the separator.",name:"elementType",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}}}}}catch{}const{expect:C,fn:_e,userEvent:d,within:Pe}=__STORYBOOK_MODULE_TEST__,yt={title:"Components/Menu",component:s,subcomponents:{MenuItem:a},render:t=>e.jsxs(w,{children:[e.jsx(q,{"aria-label":"Menu",variant:"icon",size:t.size,children:e.jsx(I,{size:20})}),e.jsx(o,{children:e.jsx(s,{...t})})]}),args:{children:t=>e.jsx(a,{...t,children:t.name}),items:[{id:0,name:"Open"},{id:1,name:"Rename..."},{id:2,name:"Duplicate"},{id:3,name:"Share..."},{id:4,name:"Delete..."}]}},u={},m={args:{selectionMode:"single"},render:t=>{const[n,r]=oe.useState(new Set(["center"]));return e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx(q,{"aria-label":"Menu",variant:"icon",size:t.size,children:e.jsx(I,{size:20})}),e.jsx(o,{children:e.jsxs(s,{...t,selectedKeys:n,onSelectionChange:r,children:[e.jsx(a,{id:"left",children:"Left"}),e.jsx(a,{id:"center",children:"Center"}),e.jsx(a,{id:"right",children:"Right"})]})})]}),e.jsxs(l,{children:["Current selection (controlled): ",[...n].join(", ")]})]})}},p={args:{selectionMode:"multiple"},render:t=>{const[n,r]=oe.useState(new Set(["sidebar","console"]));return e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[e.jsx(q,{"aria-label":"Menu",variant:"icon",size:t.size,children:e.jsx(I,{size:20})}),e.jsx(o,{children:e.jsxs(s,{...t,selectedKeys:n,onSelectionChange:r,children:[e.jsx(a,{id:"sidebar",children:"Sidebar"}),e.jsx(a,{id:"searchbar",children:"Searchbar"}),e.jsx(a,{id:"tools",children:"Tools"}),e.jsx(a,{id:"console",children:"Console"})]})})]}),e.jsxs(l,{children:["Current selection (controlled):",n==="all"?"all":[...n].join(", ")]})]})}},h={args:{items:[{id:0,href:"https://adobe.com/",target:"_blank",name:"Adobe"},{id:1,href:"https://apple.com/",target:"_blank",name:"Apple"},{id:2,href:"https://google.com/",target:"_blank",name:"Google"},{id:3,href:"https://microsoft.com/",target:"_blank",name:"Microsoft"},{id:4,href:"https://derp.com/",target:"_blank",name:"Disabled link",isDisabled:!0}]}},f={args:{items:[{name:"Left Panel",id:"left",children:[{id:1,name:"Final Copy (1)"}]},{name:"Right Panel",id:"right",children:[{id:2,name:"index.ts"},{id:3,name:"package.json"},{id:4,name:"license.txt"}]}],children:t=>e.jsxs(T,{children:[e.jsx(pe,{children:t.name}),e.jsx(ve,{items:t.children,children:n=>e.jsx(a,{children:n.name})})]})}},y={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"New…"}),e.jsx(a,{children:"Open…"}),e.jsx(M,{}),e.jsx(a,{children:"Save"}),e.jsx(a,{children:"Save as…"}),e.jsx(a,{children:"Rename…"}),e.jsx(M,{}),e.jsx(a,{children:"Page setup…"}),e.jsx(a,{children:"Print…"})]})}},b={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{textValue:"Copy",children:[e.jsx(l,{slot:"label",children:"Copy"}),e.jsx(l,{slot:"description",children:"Copy the selected text"}),e.jsx(V,{children:"⌘C"})]}),e.jsxs(a,{textValue:"Cut",children:[e.jsx(l,{slot:"label",children:"Cut"}),e.jsx(l,{slot:"description",children:"Cut the selected text"}),e.jsx(V,{children:"⌘X"})]}),e.jsxs(a,{textValue:"Paste",children:[e.jsx(l,{slot:"label",children:"Paste"}),e.jsx(l,{slot:"description",children:"Paste the copied text"}),e.jsx(V,{children:"⌘V"})]})]})}},g={args:{selectionMode:"multiple",children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{textValue:"Copy",children:[e.jsx(l,{slot:"label",children:"Copy"}),e.jsx(l,{slot:"description",children:"Copy the selected text"})]}),e.jsxs(a,{textValue:"Cut",children:[e.jsx(l,{slot:"label",children:"Cut"}),e.jsx(l,{slot:"description",children:"Cut the selected text"})]}),e.jsxs(a,{textValue:"Paste",children:[e.jsx(l,{slot:"label",children:"Paste"}),e.jsx(l,{slot:"description",children:"Paste the copied text"})]})]})}},v={args:{items:[{id:0,name:"Copy"},{id:1,name:"Cut"},{id:2,name:"Paste",isDisabled:!0}]}},S={args:{items:[{id:"0",name:"Menu item"},{id:"1",name:"Menu item"},{id:"2",name:"Menu item"},{id:"3",name:"Sub menu",children:[{id:"31",name:"Sub menu item"},{id:"32",name:"Sub menu item"},{id:"33",name:"Sub menu item"}]},{id:"4",name:"Other menu item"}],children:function t(n){return n.children?e.jsxs(ge,{children:[e.jsx(a,{children:n.name},n.name),e.jsx(o,{children:e.jsx(s,{items:n.children,children:r=>t(r)})})]}):e.jsx(a,{children:n.name},n.name)}}},x={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{items:[{id:0,name:"test 0"},{id:1,name:"test 1"},{id:"testID",name:"test 2"},{id:3,name:"test 3"}],onAction:_e(),className:"derp"},play:async({canvasElement:t,step:n,args:r})=>{await n("Open menu",async()=>{await d.tab(),await d.keyboard("[Space]")}),await n("it should accept a custom className",async()=>{await C(Pe(t.ownerDocument.body).getByRole("menu")).toHaveClass("derp")}),await n("Select the third item",async()=>{await d.keyboard("[ArrowDown]"),await d.keyboard("[ArrowDown]"),await d.keyboard("[Space]")}),await n("it should call the onAction handler with the ID of the menu item",async()=>{await C(r.onAction).toHaveBeenCalledWith("testID")})}};var j,_,P;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(P=(_=u.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var N,k,E;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single'
  },
  render: args => {
    const [selected, setSelected] = React.useState<Selection>(new Set(['center']));
    return <>
        <MenuTrigger>
          <Button aria-label='Menu' variant='icon' size={args.size}>
            <MenuIcon size={20} />
          </Button>
          <MenuPopover>
            <Menu {...args} selectedKeys={selected} onSelectionChange={setSelected}>
              <MenuItem id='left'>Left</MenuItem>
              <MenuItem id='center'>Center</MenuItem>
              <MenuItem id='right'>Right</MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
        <Text>Current selection (controlled): {[...selected].join(', ')}</Text>
      </>;
  }
}`,...(E=(k=m.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var A,H,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple'
  },
  render: args => {
    const [selected, setSelected] = React.useState<Selection>(new Set(['sidebar', 'console']));
    return <>
        <MenuTrigger>
          <Button aria-label='Menu' variant='icon' size={args.size}>
            <MenuIcon size={20} />
          </Button>
          <MenuPopover>
            <Menu {...args} selectedKeys={selected} onSelectionChange={setSelected}>
              <MenuItem id='sidebar'>Sidebar</MenuItem>
              <MenuItem id='searchbar'>Searchbar</MenuItem>
              <MenuItem id='tools'>Tools</MenuItem>
              <MenuItem id='console'>Console</MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
        <Text>
          Current selection (controlled):
          {selected === 'all' ? 'all' : [...selected].join(', ')}
        </Text>
      </>;
  }
}`,...(D=(H=p.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var W,R,z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 0,
      href: 'https://adobe.com/',
      target: '_blank',
      name: 'Adobe'
    }, {
      id: 1,
      href: 'https://apple.com/',
      target: '_blank',
      name: 'Apple'
    }, {
      id: 2,
      href: 'https://google.com/',
      target: '_blank',
      name: 'Google'
    }, {
      id: 3,
      href: 'https://microsoft.com/',
      target: '_blank',
      name: 'Microsoft'
    }, {
      id: 4,
      href: 'https://derp.com/',
      target: '_blank',
      name: 'Disabled link',
      isDisabled: true
    }]
  }
}`,...(z=(R=h.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var K,O,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: [{
      name: 'Left Panel',
      id: 'left',
      children: [{
        id: 1,
        name: 'Final Copy (1)'
      }]
    }, {
      name: 'Right Panel',
      id: 'right',
      children: [{
        id: 2,
        name: 'index.ts'
      }, {
        id: 3,
        name: 'package.json'
      }, {
        id: 4,
        name: 'license.txt'
      }]
    }],
    children: section => <MenuSection>
        <Header>{section.name}</Header>
        <Collection items={section.children}>
          {item => <MenuItem>{item.name}</MenuItem>}
        </Collection>
      </MenuSection>
  }
}`,...(U=(O=f.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var L,$,B;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <>
        <MenuItem>New…</MenuItem>
        <MenuItem>Open…</MenuItem>
        <Separator />
        <MenuItem>Save</MenuItem>
        <MenuItem>Save as…</MenuItem>
        <MenuItem>Rename…</MenuItem>
        <Separator />
        <MenuItem>Page setup…</MenuItem>
        <MenuItem>Print…</MenuItem>
      </>
  }
}`,...(B=($=y.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var F,G,X;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: <>
        <MenuItem textValue='Copy'>
          <Text slot='label'>Copy</Text>
          <Text slot='description'>Copy the selected text</Text>
          <Keyboard>⌘C</Keyboard>
        </MenuItem>
        <MenuItem textValue='Cut'>
          <Text slot='label'>Cut</Text>
          <Text slot='description'>Cut the selected text</Text>
          <Keyboard>⌘X</Keyboard>
        </MenuItem>
        <MenuItem textValue='Paste'>
          <Text slot='label'>Paste</Text>
          <Text slot='description'>Paste the copied text</Text>
          <Keyboard>⌘V</Keyboard>
        </MenuItem>
      </>
  }
}`,...(X=(G=b.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var J,Y,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    children: <>
        <MenuItem textValue='Copy'>
          <Text slot='label'>Copy</Text>
          <Text slot='description'>Copy the selected text</Text>
        </MenuItem>
        <MenuItem textValue='Cut'>
          <Text slot='label'>Cut</Text>
          <Text slot='description'>Cut the selected text</Text>
        </MenuItem>
        <MenuItem textValue='Paste'>
          <Text slot='label'>Paste</Text>
          <Text slot='description'>Paste the copied text</Text>
        </MenuItem>
      </>
  }
}`,...(Q=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var Z,ee,te;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 0,
      name: 'Copy'
    }, {
      id: 1,
      name: 'Cut'
    }, {
      id: 2,
      name: 'Paste',
      isDisabled: true
    }]
  }
}`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,le;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '0',
      name: 'Menu item'
    }, {
      id: '1',
      name: 'Menu item'
    }, {
      id: '2',
      name: 'Menu item'
    }, {
      id: '3',
      name: 'Sub menu',
      children: [{
        id: '31',
        name: 'Sub menu item'
      }, {
        id: '32',
        name: 'Sub menu item'
      }, {
        id: '33',
        name: 'Sub menu item'
      }]
    }, {
      id: '4',
      name: 'Other menu item'
    }],
    children: function renderSubmenu(item) {
      return item.children ? <SubmenuTrigger>
          <MenuItem key={item.name}>{item.name}</MenuItem>
          <MenuPopover>
            <Menu items={item.children}>{item => renderSubmenu(item)}</Menu>
          </MenuPopover>
        </SubmenuTrigger> : <MenuItem key={item.name}>{item.name}</MenuItem>;
    }
  }
}`,...(le=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var re,ie,se;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    items: [{
      id: 0,
      name: 'test 0'
    }, {
      id: 1,
      name: 'test 1'
    }, {
      id: 'testID',
      name: 'test 2'
    }, {
      id: 3,
      name: 'test 3'
    }],
    onAction: fn(),
    className: 'derp'
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    await step('Open menu', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Space]');
    });
    await step('it should accept a custom className', async () => {
      await expect(within(canvasElement.ownerDocument.body).getByRole('menu')).toHaveClass('derp');
    });
    await step('Select the third item', async () => {
      await userEvent.keyboard('[ArrowDown]');
      await userEvent.keyboard('[ArrowDown]');
      await userEvent.keyboard('[Space]');
    });
    await step('it should call the onAction handler with the ID of the menu item', async () => {
      await expect(args.onAction).toHaveBeenCalledWith('testID');
    });
  }
}`,...(se=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const bt=["Primary","ControlledSingleSelection","ControlledMultipleSelection","Links","Sections","Separators","TextSlots","MultiSelectWithDescriptions","DisabledItems","SubMenus","Tests"];export{p as ControlledMultipleSelection,m as ControlledSingleSelection,v as DisabledItems,h as Links,g as MultiSelectWithDescriptions,u as Primary,f as Sections,y as Separators,S as SubMenus,x as Tests,b as TextSlots,bt as __namedExportsOrder,yt as default};
