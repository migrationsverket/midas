import{j as e,e as Y}from"./iframe-DNhJcKOc.js";import{e as ne,$ as ae}from"./Separator-BbCB4sT2.js";import{d as le,c as d,b as re,a as oe,e as ie,f as S,g as se}from"./Dialog-Cy0Q0MA-.js";import{$ as de}from"./Collection-fGOPk7Kv.js";import{c}from"./clsx-Ciqy0D92.js";import{C as ce}from"./check-SkZ7BLWd.js";import{C as ue}from"./chevron-right-CQXvKrn0.js";import{M as V}from"./menu-vjv_9zs6.js";import{B as C}from"./Button-9v9ZA1Mg.js";import{T as l}from"./Text-Dm8XbzGN.js";import"./preload-helper-Dp1pzeXC.js";import"./SelectionManager-CWpvzeDv.js";import"./useFocusRing-jIyEUab9.js";import"./utils-DitHaya_.js";import"./clsx-B-dksMZM.js";import"./index-uE8jHaBb.js";import"./index-DqiuFa4V.js";import"./useEvent-BZg6Yeym.js";import"./scrollIntoView-DcZLN0pk.js";import"./SelectionIndicator-D7cyECVo.js";import"./useDescription-CV-YOn9H.js";import"./useControlledState-D0y5cQqF.js";import"./ListKeyboardDelegate-DCqia2ak.js";import"./Button-B6wJ7DBH.js";import"./Hidden-C7LJEloq.js";import"./useLabels-DTr_W66W.js";import"./useButton-Dab2YggW.js";import"./RSPContexts-DdhM_7fS.js";import"./OverlayArrow-DkTQOr7M.js";import"./useResizeObserver-DosPvpE_.js";import"./Text-CVNupFde.js";import"./PressResponder-CJP8peKk.js";import"./useLocalizedStringFormatter-D0VL0RZM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DYyOR5EO.js";import"./VisuallyHidden-DE6Pvd80.js";import"./index-BpJyW1zW.js";import"./createLucideIcon-BWOE9bS1.js";import"./Button.module-CcWMkJAG.js";const me="_menu_1ku97_1",pe="_menuSection_1ku97_17",he="_medium_1ku97_29",fe="_menuItem_1ku97_35",ye="_mainContent_1ku97_105",be="_checkMark_1ku97_116",ge="_separator_1ku97_126",ve="_menuPopover_1ku97_149",o={menu:me,menuSection:pe,medium:he,menuItem:fe,mainContent:ye,checkMark:be,separator:ge,menuPopover:ve},i=({className:t,size:a="large",...r})=>e.jsx(le,{className:c(t,o.menu,a==="medium"&&o.medium),...r});try{d.displayName="MenuTrigger",d.__docgenInfo={description:"",displayName:"MenuTrigger",props:{trigger:{defaultValue:{value:"'press'"},description:"How the menu is triggered.",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"press"'},{value:'"longPress"'}]}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}}}}}catch{}try{i.displayName="Menu",i.__docgenInfo={description:"",displayName:"Menu",props:{size:{defaultValue:{value:"large"},description:"Component size (large: height 40px, medium: height 32px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},renderEmptyState:{defaultValue:null,description:"Provides content to display when there are no items in the list.",name:"renderEmptyState",required:!1,type:{name:"(() => ReactNode)"}},autoFocus:{defaultValue:null,description:"Where the focus should be set.",name:"autoFocus",required:!1,type:{name:"boolean | FocusStrategy"}},items:{defaultValue:null,description:"Item objects in the collection.",name:"items",required:!1,type:{name:"Iterable<T>"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},onAction:{defaultValue:null,description:"Handler that is called when an item is selected.",name:"onAction",required:!1,type:{name:"((key: Key) => void)"}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((keys: Selection) => void)"}},shouldFocusWrap:{defaultValue:null,description:"Whether keyboard navigation is circular.",name:"shouldFocusWrap",required:!1,type:{name:"boolean"}},escapeKeyBehavior:{defaultValue:{value:"'clearSelection'"},description:`Whether pressing the escape key should clear selection in the menu or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to
easily clear selection. Only use if the escape key is being handled externally or should not
trigger selection clearing contextually.`,name:"escapeKeyBehavior",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"clearSelection"'}]}},onClose:{defaultValue:null,description:"Handler that is called when the menu should close after selecting an item.",name:"onClose",required:!1,type:{name:"(() => void)"}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"single"'},{value:'"multiple"'}]}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},dependencies:{defaultValue:null,description:"Values that should invalidate the item cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"readonly any[]"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<MenuRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<MenuRenderProps>"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}}}}}catch{}const n=t=>e.jsx(re,{...t,textValue:t.textValue||(typeof t.children=="string"?t.children:void 0),className:c(o.menuItem,t.className),children:a=>{const{children:r}=t,{selectionMode:Z,isSelected:ee,hasSubmenu:te}=a;return e.jsxs(e.Fragment,{children:[Z!=="none"&&e.jsx(ce,{size:16,className:o.checkMark,"data-selected":ee||void 0}),e.jsx("div",{className:o.mainContent,children:typeof r=="function"?r(a):r}),te&&e.jsx(ue,{size:20})]})}});try{n.displayName="MenuItem",n.__docgenInfo={description:"",displayName:"MenuItem",props:{children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ChildrenOrFunction<MenuItemRenderProps>"}},isDisabled:{defaultValue:null,description:"Whether the item is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The unique id of the item.",name:"id",required:!1,type:{name:"Key"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<MenuItemRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<MenuItemRenderProps>"}},onClick:{defaultValue:null,description:"**Not recommended – use `onPress` instead.** `onClick` is an alias for `onPress`\nprovided for compatibility with other libraries. `onPress` provides \nadditional event details for non-mouse interactions.",name:"onClick",required:!1,type:{name:"((e: MouseEvent<FocusableElement, MouseEvent>) => void)"}},"aria-label":{defaultValue:null,description:"An accessibility label for this item.",name:"aria-label",required:!1,type:{name:"string"}},onAction:{defaultValue:null,description:"Handler that is called when the item is selected.",name:"onAction",required:!1,type:{name:"(() => void)"}},onPress:{defaultValue:null,description:"Handler that is called when the press is released over the target.",name:"onPress",required:!1,type:{name:"((e: PressEvent) => void)"}},onPressStart:{defaultValue:null,description:"Handler that is called when a press interaction starts.",name:"onPressStart",required:!1,type:{name:"((e: PressEvent) => void)"}},onPressEnd:{defaultValue:null,description:`Handler that is called when a press interaction ends, either
over the target or when the pointer leaves the target.`,name:"onPressEnd",required:!1,type:{name:"((e: PressEvent) => void)"}},onPressChange:{defaultValue:null,description:"Handler that is called when the press state changes.",name:"onPressChange",required:!1,type:{name:"((isPressed: boolean) => void)"}},onPressUp:{defaultValue:null,description:`Handler that is called when a press is released over the target, regardless of
whether it started on the target or not.`,name:"onPressUp",required:!1,type:{name:"((e: PressEvent) => void)"}},value:{defaultValue:null,description:"The object value that this item represents. When using dynamic collections, this is set automatically.",name:"value",required:!1,type:{name:"MenuItemObject"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"((e: HoverEvent) => void)"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"((isHovering: boolean) => void)"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}}}}}catch{}const s=({className:t,...a})=>e.jsx(oe,{className:c(t,o.menuPopover),offset:4,...a});try{s.displayName="MenuPopover",s.__docgenInfo={description:"",displayName:"MenuPopover",props:{trigger:{defaultValue:null,description:"The name of the component that triggered the popover. This is reflected on the element\nas the `data-trigger` attribute, and can be used to provide specific\nstyles for the popover depending on which element triggered it.",name:"trigger",required:!1,type:{name:"string"}},triggerRef:{defaultValue:null,description:`The ref for the element which the popover positions itself with respect to.

When used within a trigger component such as DialogTrigger, MenuTrigger, Select, etc.,
this is set automatically. It is only required when used standalone.`,name:"triggerRef",required:!1,type:{name:"RefObject<Element | null>"}},isEntering:{defaultValue:null,description:"Whether the popover is currently performing an entry animation.",name:"isEntering",required:!1,type:{name:"boolean"}},isExiting:{defaultValue:null,description:"Whether the popover is currently performing an exit animation.",name:"isExiting",required:!1,type:{name:"boolean"}},UNSTABLE_portalContainer:{defaultValue:{value:"document.body"},description:`The container element in which the overlay portal will be placed. This may have unknown behavior depending on where it is portalled to.
@deprecated - Use a parent UNSAFE_PortalProvider to set your portal container instead.`,name:"UNSTABLE_portalContainer",required:!1,type:{name:"Element"}},offset:{defaultValue:{value:"8"},description:`The additional offset applied along the main axis between the element and its
anchor element.`,name:"offset",required:!1,type:{name:"number"}},placement:{defaultValue:{value:"'bottom'"},description:"The placement of the element with respect to its anchor element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"start"'},{value:'"end"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"bottom start"'},{value:'"bottom end"'},{value:'"top left"'},{value:'"top right"'},{value:'"top start"'},{value:'"top end"'},{value:'"left top"'},{value:'"left bottom"'},{value:'"start top"'},{value:'"start bottom"'},{value:'"right top"'},{value:'"right bottom"'},{value:'"end top"'},{value:'"end bottom"'}]}},containerPadding:{defaultValue:{value:"12"},description:`The placement padding that should be applied between the element and its
surrounding container.`,name:"containerPadding",required:!1,type:{name:"number"}},crossOffset:{defaultValue:{value:"0"},description:`The additional offset applied along the cross axis between the element and its
anchor element.`,name:"crossOffset",required:!1,type:{name:"number"}},shouldFlip:{defaultValue:{value:"true"},description:`Whether the element should flip its orientation (e.g. top to bottom or left to right) when
there is insufficient room for it to render completely.`,name:"shouldFlip",required:!1,type:{name:"boolean"}},boundaryElement:{defaultValue:{value:"document.body"},description:"Element that that serves as the positioning boundary.",name:"boundaryElement",required:!1,type:{name:"Element"}},arrowRef:{defaultValue:null,description:"A ref for the popover arrow element.",name:"arrowRef",required:!1,type:{name:"RefObject<Element | null>"}},scrollRef:{defaultValue:{value:"overlayRef"},description:"A ref for the scrollable region within the overlay.",name:"scrollRef",required:!1,type:{name:"RefObject<Element | null>"}},shouldUpdatePosition:{defaultValue:{value:"true"},description:"Whether the overlay should update its position automatically.",name:"shouldUpdatePosition",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:`The maxHeight specified for the overlay element.
By default, it will take all space up to the current viewport height.`,name:"maxHeight",required:!1,type:{name:"number"}},arrowBoundaryOffset:{defaultValue:{value:"0"},description:"The minimum distance the arrow's edge should be from the edge of the overlay element.",name:"arrowBoundaryOffset",required:!1,type:{name:"number"}},isNonModal:{defaultValue:null,description:`Whether the popover is non-modal, i.e. elements outside the popover may be
interacted with by assistive technologies.

Most popovers should not use this option as it may negatively impact the screen
reader experience. Only use with components such as combobox, which are designed
to handle this situation carefully.`,name:"isNonModal",required:!1,type:{name:"boolean"}},isKeyboardDismissDisabled:{defaultValue:{value:"false"},description:`Whether pressing the escape key to close the popover should be disabled.

Most popovers should not use this option. When set to true, an alternative
way to close the popover with a keyboard must be provided.`,name:"isKeyboardDismissDisabled",required:!1,type:{name:"boolean"}},shouldCloseOnInteractOutside:{defaultValue:null,description:`When user interacts with the argument element outside of the popover ref,
return true if onClose should be called. This gives you a chance to filter
out interaction with elements that should not dismiss the popover.
By default, onClose will always be called on interaction outside the popover ref.`,name:"shouldCloseOnInteractOutside",required:!1,type:{name:"((element: Element) => boolean)"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ChildrenOrFunction<PopoverRenderProps>"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<PopoverRenderProps>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<PopoverRenderProps>"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}}}}}catch{}const M=({className:t,...a})=>e.jsx(ie,{className:c(t,o.menuSection),...a});try{M.displayName="MenuSection",M.__docgenInfo={description:"",displayName:"MenuSection",props:{id:{defaultValue:null,description:"The unique id of the section.",name:"id",required:!1,type:{name:"Key"}},value:{defaultValue:null,description:"The object value that this section represents. When using dynamic collections, this is set automatically.",name:"value",required:!1,type:{name:"object"}},children:{defaultValue:null,description:"Static child items or a function to render children.",name:"children",required:!1,type:{name:"ReactNode | ((item: T) => ReactElement<any, string | JSXElementConstructor<any>>)"}},dependencies:{defaultValue:null,description:"Values that should invalidate the item cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"readonly any[]"}},"aria-label":{defaultValue:null,description:"An accessibility label for the section.",name:"aria-label",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"Item objects in the section.",name:"items",required:!1,type:{name:"Iterable<T>"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"single"'},{value:'"multiple"'}]}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((keys: Selection) => void)"}},disabledKeys:{defaultValue:null,description:"The currently disabled keys in the collection (controlled).",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}}}}}catch{}const x=({className:t,...a})=>e.jsx(ne,{className:c(t,o.separator),...a});try{x.displayName="Separator",x.__docgenInfo={description:"",displayName:"Separator",props:{orientation:{defaultValue:{value:"'horizontal'"},description:"The orientation of the separator.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},elementType:{defaultValue:null,description:"The HTML element type that will be used to render the separator.",name:"elementType",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}}}}}catch{}const rt={title:"Components/Menu",component:i,subcomponents:{MenuItem:n},render:t=>e.jsxs(d,{children:[e.jsx(C,{"aria-label":"Menu",variant:"icon",size:t.size,children:e.jsx(V,{size:20})}),e.jsx(s,{children:e.jsx(i,{...t})})]}),args:{children:t=>e.jsx(n,{...t,children:t.name}),items:[{id:0,name:"Open"},{id:1,name:"Rename..."},{id:2,name:"Duplicate"},{id:3,name:"Share..."},{id:4,name:"Delete..."}]}},u={},m={args:{selectionMode:"single"},render:t=>{const[a,r]=Y.useState(new Set(["center"]));return e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(C,{"aria-label":"Menu",variant:"icon",size:t.size,children:e.jsx(V,{size:20})}),e.jsx(s,{children:e.jsxs(i,{...t,selectedKeys:a,onSelectionChange:r,children:[e.jsx(n,{id:"left",children:"Left"}),e.jsx(n,{id:"center",children:"Center"}),e.jsx(n,{id:"right",children:"Right"})]})})]}),e.jsxs(l,{children:["Current selection (controlled): ",[...a].join(", ")]})]})}},p={args:{selectionMode:"multiple"},render:t=>{const[a,r]=Y.useState(new Set(["sidebar","console"]));return e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(C,{"aria-label":"Menu",variant:"icon",size:t.size,children:e.jsx(V,{size:20})}),e.jsx(s,{children:e.jsxs(i,{...t,selectedKeys:a,onSelectionChange:r,children:[e.jsx(n,{id:"sidebar",children:"Sidebar"}),e.jsx(n,{id:"searchbar",children:"Searchbar"}),e.jsx(n,{id:"tools",children:"Tools"}),e.jsx(n,{id:"console",children:"Console"})]})})]}),e.jsxs(l,{children:["Current selection (controlled):",a==="all"?"all":[...a].join(", ")]})]})}},h={args:{items:[{name:"Left Panel",id:"left",children:[{id:1,name:"Final Copy (1)"}]},{name:"Right Panel",id:"right",children:[{id:2,name:"index.ts"},{id:3,name:"package.json"},{id:4,name:"license.txt"}]}],children:t=>e.jsxs(M,{children:[e.jsx(ae,{children:t.name}),e.jsx(de,{items:t.children,children:a=>e.jsx(n,{children:a.name})})]})}},f={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"New…"}),e.jsx(n,{children:"Open…"}),e.jsx(x,{}),e.jsx(n,{children:"Save"}),e.jsx(n,{children:"Save as…"}),e.jsx(n,{children:"Rename…"}),e.jsx(x,{}),e.jsx(n,{children:"Page setup…"}),e.jsx(n,{children:"Print…"})]})}},y={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{textValue:"Copy",children:[e.jsx(l,{slot:"label",children:"Copy"}),e.jsx(l,{slot:"description",children:"Copy the selected text"}),e.jsx(S,{children:"⌘C"})]}),e.jsxs(n,{textValue:"Cut",children:[e.jsx(l,{slot:"label",children:"Cut"}),e.jsx(l,{slot:"description",children:"Cut the selected text"}),e.jsx(S,{children:"⌘X"})]}),e.jsxs(n,{textValue:"Paste",children:[e.jsx(l,{slot:"label",children:"Paste"}),e.jsx(l,{slot:"description",children:"Paste the copied text"}),e.jsx(S,{children:"⌘V"})]})]})}},b={args:{selectionMode:"multiple",children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{textValue:"Copy",children:[e.jsx(l,{slot:"label",children:"Copy"}),e.jsx(l,{slot:"description",children:"Copy the selected text"})]}),e.jsxs(n,{textValue:"Cut",children:[e.jsx(l,{slot:"label",children:"Cut"}),e.jsx(l,{slot:"description",children:"Cut the selected text"})]}),e.jsxs(n,{textValue:"Paste",children:[e.jsx(l,{slot:"label",children:"Paste"}),e.jsx(l,{slot:"description",children:"Paste the copied text"})]})]})}},g={args:{items:[{id:0,name:"Copy"},{id:1,name:"Cut"},{id:2,name:"Paste",isDisabled:!0}]}},v={args:{items:[{id:"0",name:"Menu item"},{id:"1",name:"Menu item"},{id:"2",name:"Menu item"},{id:"3",name:"Sub menu",children:[{id:"31",name:"Sub menu item"},{id:"32",name:"Sub menu item"},{id:"33",name:"Sub menu item"}]},{id:"4",name:"Other menu item"}],children:function t(a){return a.children?e.jsxs(se,{children:[e.jsx(n,{children:a.name},a.name),e.jsx(s,{children:e.jsx(i,{items:a.children,children:r=>t(r)})})]}):e.jsx(n,{children:a.name},a.name)}}};var T,j,I;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var q,P,_;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var w,N,E;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(N=p.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var k,O,A;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(O=h.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var H,K,W;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(K=f.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var $,z,R;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(R=(z=y.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var F,U,D;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(U=b.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var B,L,X;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(X=(L=g.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var J,G,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(G=v.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};const ot=["Primary","ControlledSingleSelection","ControlledMultipleSelection","Sections","Separators","TextSlots","MultiSelectWithDescriptions","DisabledItems","SubMenus"];export{p as ControlledMultipleSelection,m as ControlledSingleSelection,g as DisabledItems,b as MultiSelectWithDescriptions,u as Primary,h as Sections,f as Separators,v as SubMenus,y as TextSlots,ot as __namedExportsOrder,rt as default};
