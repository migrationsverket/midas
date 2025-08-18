import{j as e}from"./jsx-runtime-BYYWji4R.js";import{$ as O}from"./Separator-D0ReeeyE.js";import{d as X,a as G,b as y,c as f,e as J,f as g,g as Q}from"./Dialog-Di-uxStL.js";import{$ as Y}from"./Collection-CJ611Ccf.js";import{R as U}from"./index-ClcD9ViR.js";import{c as F}from"./clsx-B-dksMZM.js";import{C as Z}from"./chevron-right-Diy7kw0Q.js";import{B as b}from"./Button-mgc1CngZ.js";import{M as S}from"./menu-B4txMyyf.js";import{T as l}from"./Text-BgvnLaBz.js";import"./SelectionManager-BkX4LkPr.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useEvent-D_ha2BWP.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-p3_VE_8x.js";import"./context-zNjZoWML.js";import"./useDescription-BqzP9r9Z.js";import"./useControlledState-H1tiOFpU.js";import"./ListKeyboardDelegate-Dz8cyiML.js";import"./Button-BnGcr9X4.js";import"./Hidden-BC9qER92.js";import"./useLabels-FEgier_d.js";import"./useButton-DQcVpLGQ.js";import"./RSPContexts-HQcWPJyv.js";import"./OverlayArrow-CKbZP2rQ.js";import"./useResizeObserver-D8gvjDpO.js";import"./Text-CZ6zcozL.js";import"./PressResponder-DWi2SZR7.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BekSNXsj.js";import"./index-NDK0uC61.js";import"./createLucideIcon-uZw3gxGR.js";import"./Button.module-Bmb634uG.js";const ee="_menu_19n22_4",ne="_menuItem_19n22_10",B={menu:ee,menuItem:ne},r=({className:n,...t})=>e.jsx(X,{className:F(n,B.menu),...t});try{r.displayName="Menu",r.__docgenInfo={description:"",displayName:"Menu",props:{renderEmptyState:{defaultValue:null,description:"Provides content to display when there are no items in the list.",name:"renderEmptyState",required:!1,type:{name:"() => ReactNode"}},autoFocus:{defaultValue:null,description:"Where the focus should be set.",name:"autoFocus",required:!1,type:{name:"boolean | FocusStrategy"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:"Identifies the element (or elements) that provide a detailed, extended description for the object.",name:"aria-details",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"Item objects in the collection.",name:"items",required:!1,type:{name:"Iterable<T>"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},onAction:{defaultValue:null,description:"Handler that is called when an item is selected.",name:"onAction",required:!1,type:{name:"(key: Key) => void"}},escapeKeyBehavior:{defaultValue:{value:"'clearSelection'"},description:`Whether pressing the escape key should clear selection in the menu or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to
easily clear selection. Only use if the escape key is being handled externally or should not
trigger selection clearing contextually.`,name:"escapeKeyBehavior",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"clearSelection"'}]}},shouldFocusWrap:{defaultValue:null,description:"Whether keyboard navigation is circular.",name:"shouldFocusWrap",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Handler that is called when the menu should close after selecting an item.",name:"onClose",required:!1,type:{name:"() => void"}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"single"'},{value:'"multiple"'}]}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'"all" | Iterable<Key>'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'"all" | Iterable<Key>'}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"(keys: Selection) => void"}},children:{defaultValue:null,description:"The contents of the collection.",name:"children",required:!1,type:{name:"ReactNode | ((item: T) => ReactNode)"}},dependencies:{defaultValue:null,description:"Values that should invalidate the item cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"readonly any[]"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: MenuRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: MenuRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string"}},onScroll:{defaultValue:null,description:"Handler that is called when a user scrolls. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event).",name:"onScroll",required:!1,type:{name:"(e: UIEvent<HTMLDivElement, UIEvent>) => void"}}}}}catch{}const a=n=>e.jsx(G,{...n,textValue:n.textValue||(typeof n.children=="string"?n.children:void 0),className:F(B.menuItem,n.className),children:({hasSubmenu:t})=>e.jsxs(e.Fragment,{children:[n.children,t&&e.jsx(Z,{size:14})]})});try{a.displayName="MenuItem",a.__docgenInfo={description:"",displayName:"MenuItem",props:{id:{defaultValue:null,description:"The unique id of the item.",name:"id",required:!1,type:{name:"Key"}},value:{defaultValue:null,description:"The object value that this item represents. When using dynamic collections, this is set automatically.",name:"value",required:!1,type:{name:"object"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"An accessibility label for this item.",name:"aria-label",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the item is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},onAction:{defaultValue:null,description:"Handler that is called when the item is selected.",name:"onAction",required:!1,type:{name:"() => void"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: MenuItemRenderProps & { defaultChildren: ReactNode; }) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: MenuItemRenderProps & { defaultClassName: string; }) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: MenuItemRenderProps & { defaultStyle: CSSProperties; }) => CSSProperties)"}},href:{defaultValue:null,description:"A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).",name:"href",required:!1,type:{name:"string"}},hrefLang:{defaultValue:null,description:"Hints at the human language of the linked URL. See[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang).",name:"hrefLang",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},rel:{defaultValue:null,description:"The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).",name:"rel",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).",name:"download",required:!1,type:{name:"string | boolean"}},ping:{defaultValue:null,description:"A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping).",name:"ping",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy).",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}},routerOptions:{defaultValue:null,description:"Options for the configured client side router.",name:"routerOptions",required:!1,type:{name:"never"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}}}}}catch{}const De={title:"Components/Menu",component:r,subcomponents:{MenuItem:a},render:n=>e.jsxs(y,{children:[e.jsx(b,{"aria-label":"Menu",variant:"icon",children:e.jsx(S,{size:20})}),e.jsx(f,{children:e.jsx(r,{...n})})]}),args:{children:n=>e.jsx(a,{...n,children:n.name}),items:[{id:0,name:"Open"},{id:1,name:"Rename..."},{id:2,name:"Duplicate"},{id:3,name:"Share..."},{id:4,name:"Delete..."}]}},s={},o={args:{selectionMode:"single"},render:n=>{const[t,i]=U.useState(new Set(["center"]));return e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx(b,{"aria-label":"Menu",variant:"icon",children:e.jsx(S,{size:20})}),e.jsx(f,{children:e.jsxs(r,{...n,selectedKeys:t,onSelectionChange:i,children:[e.jsx(a,{id:"left",children:"Left"}),e.jsx(a,{id:"center",children:"Center"}),e.jsx(a,{id:"right",children:"Right"})]})})]}),e.jsxs(l,{children:["Current selection (controlled): ",[...t].join(", ")]})]})}},d={args:{selectionMode:"multiple"},render:n=>{const[t,i]=U.useState(new Set(["sidebar","console"]));return e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx(b,{"aria-label":"Menu",variant:"icon",children:e.jsx(S,{size:20})}),e.jsx(f,{children:e.jsxs(r,{...n,selectedKeys:t,onSelectionChange:i,children:[e.jsx(a,{id:"sidebar",children:"Sidebar"}),e.jsx(a,{id:"searchbar",children:"Searchbar"}),e.jsx(a,{id:"tools",children:"Tools"}),e.jsx(a,{id:"console",children:"Console"})]})})]}),e.jsxs(l,{children:["Current selection (controlled):",t==="all"?"all":[...t].join(", ")]})]})}},c={args:{items:[{id:0,href:"https://adobe.com/",target:"_blank",name:"Adobe"},{id:1,href:"https://apple.com/",target:"_blank",name:"Apple"},{id:2,href:"https://google.com/",target:"_blank",name:"Google"},{id:3,href:"https://microsoft.com/",target:"_blank",name:"Microsoft"}]}},m={args:{items:[{name:"Left Panel",id:"left",children:[{id:1,name:"Final Copy (1)"}]},{name:"Right Panel",id:"right",children:[{id:2,name:"index.ts"},{id:3,name:"package.json"},{id:4,name:"license.txt"}]}],children:n=>e.jsxs(J,{children:[e.jsx(O,{children:n.name}),e.jsx(Y,{items:n.children,children:t=>e.jsx(a,{children:t.name})})]})}},u={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{textValue:"Copy",children:[e.jsx(l,{slot:"label",children:"Copy"}),e.jsx(l,{slot:"description",children:"Copy the selected text"}),e.jsx(g,{children:"⌘C"})]}),e.jsxs(a,{textValue:"Cut",children:[e.jsx(l,{slot:"label",children:"Cut"}),e.jsx(l,{slot:"description",children:"Cut the selected text"}),e.jsx(g,{children:"⌘X"})]}),e.jsxs(a,{textValue:"Paste",children:[e.jsx(l,{slot:"label",children:"Paste"}),e.jsx(l,{slot:"description",children:"Paste the copied text"}),e.jsx(g,{children:"⌘V"})]})]})}},p={args:{items:[{id:0,name:"Copy"},{id:1,name:"Cut"},{id:2,name:"Paste",isDisabled:!0}]}},h={args:{items:[{id:"cut",name:"Cut"},{id:"copy",name:"Copy"},{id:"delete",name:"Delete"},{id:"share",name:"Share",children:[{id:"sms",name:"SMS"},{id:"x",name:"X"},{id:"email",name:"Email",children:[{id:"work",name:"Work"},{id:"personal",name:"Personal"}]}]}],children:function n(t){return t.children?e.jsxs(Q,{children:[e.jsx(a,{children:t.name},t.name),e.jsx(f,{children:e.jsx(r,{items:t.children,children:i=>n(i)})})]}):e.jsx(a,{children:t.name},t.name)}}};var x,v,M;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(M=(v=s.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var j,C,T;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single'
  },
  render: args => {
    const [selected, setSelected] = React.useState<Selection>(new Set(['center']));
    return <>
        <MenuTrigger>
          <Button aria-label='Menu' variant='icon'>
            <MenuIcon size={20} />
          </Button>
          <Popover>
            <Menu {...args} selectedKeys={selected} onSelectionChange={setSelected}>
              <MenuItem id='left'>Left</MenuItem>
              <MenuItem id='center'>Center</MenuItem>
              <MenuItem id='right'>Right</MenuItem>
            </Menu>
          </Popover>
        </MenuTrigger>
        <Text>Current selection (controlled): {[...selected].join(', ')}</Text>
      </>;
  }
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var I,V,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple'
  },
  render: args => {
    const [selected, setSelected] = React.useState<Selection>(new Set(['sidebar', 'console']));
    return <>
        <MenuTrigger>
          <Button aria-label='Menu' variant='icon'>
            <MenuIcon size={20} />
          </Button>
          <Popover>
            <Menu {...args} selectedKeys={selected} onSelectionChange={setSelected}>
              <MenuItem id='sidebar'>Sidebar</MenuItem>
              <MenuItem id='searchbar'>Searchbar</MenuItem>
              <MenuItem id='tools'>Tools</MenuItem>
              <MenuItem id='console'>Console</MenuItem>
            </Menu>
          </Popover>
        </MenuTrigger>
        <Text>
          Current selection (controlled):
          {selected === 'all' ? 'all' : [...selected].join(', ')}
        </Text>
      </>;
  }
}`,...(q=(V=d.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var P,w,k;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    }]
  }
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var _,H,N;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var $,A,E;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(E=(A=u.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var R,L,K;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(K=(L=p.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var W,D,z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'cut',
      name: 'Cut'
    }, {
      id: 'copy',
      name: 'Copy'
    }, {
      id: 'delete',
      name: 'Delete'
    }, {
      id: 'share',
      name: 'Share',
      children: [{
        id: 'sms',
        name: 'SMS'
      }, {
        id: 'x',
        name: 'X'
      }, {
        id: 'email',
        name: 'Email',
        children: [{
          id: 'work',
          name: 'Work'
        }, {
          id: 'personal',
          name: 'Personal'
        }]
      }]
    }],
    children: function renderSubmenu(item) {
      return item.children ? <SubmenuTrigger>
          <MenuItem key={item.name}>{item.name}</MenuItem>
          <Popover>
            <Menu items={item.children}>{item => renderSubmenu(item)}</Menu>
          </Popover>
        </SubmenuTrigger> : <MenuItem key={item.name}>{item.name}</MenuItem>;
    }
  }
}`,...(z=(D=h.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const ze=["Primary","ControlledSingleSelection","ControlledMultipleSelection","Links","Sections","TextSlots","DisabledItems","SubMenus"];export{d as ControlledMultipleSelection,o as ControlledSingleSelection,p as DisabledItems,c as Links,s as Primary,m as Sections,h as SubMenus,u as TextSlots,ze as __namedExportsOrder,De as default};
