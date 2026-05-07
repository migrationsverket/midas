import{j as e,R as I}from"./iframe-Bb_VlPo9.js";import{a as v,$ as P}from"./Separator-BHW9KYkP.js";import{c as V,d as S,e as w,f}from"./Dialog-BbFJ936K.js";import{$ as q}from"./Collection-BpAJZJBW.js";import{s as T,M as n,a,b as M}from"./MenuPopover-GV5JGDVt.js";import{c as C}from"./clsx-Ciqy0D92.js";import{M as b}from"./menu-O73-_cF7.js";import{B as j}from"./Button-BoP38GQz.js";import{T as s}from"./Text-DTJEuclf.js";import"./preload-helper-PPVm8Dsz.js";import"./SelectionManager-DuW5VBfE.js";import"./useFocusRing-DQRmwydT.js";import"./utils-2r_62JIY.js";import"./clsx-B-dksMZM.js";import"./index-DAEy4VqV.js";import"./index-BxkaVGNc.js";import"./useEvent-u95MDZQv.js";import"./scrollIntoView-BG7Sd968.js";import"./SelectionIndicator-DpvN-zjH.js";import"./useDescription-C9KC-F2o.js";import"./useControlledState-CFQUuuzt.js";import"./ListKeyboardDelegate-B5huwegM.js";import"./Button-DwR9JkjB.js";import"./Hidden-Da5yr2Rv.js";import"./useLabel-gulxf9DU.js";import"./useLabels-CsGVZDGi.js";import"./useButton-yJmLtQfA.js";import"./RSPContexts-DMtGcFC9.js";import"./OverlayArrow-D4SjK86E.js";import"./useResizeObserver-CF_uyx7C.js";import"./Text-D7Tr2OQH.js";import"./PressResponder-ByBWPOx9.js";import"./useLocalizedStringFormatter-BINmwfC_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cmh4Rymz.js";import"./getScrollParent-BlCILjnb.js";import"./VisuallyHidden-7RIQbTv5.js";import"./index-Dfxk7_9d.js";import"./check-CBmtDDja.js";import"./createLucideIcon-a3otmfa0.js";import"./chevron-right-CS4FSX6G.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-D3GzHYKP.js";const g=({className:t,...r})=>e.jsx(V,{className:C(t,T.menuSection),...r});try{g.displayName="MenuSection",g.__docgenInfo={description:"",displayName:"MenuSection",props:{className:{defaultValue:{value:"'react-aria-MenuSection'"},description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.",name:"className",required:!1,type:{name:"string"}},shouldCloseOnSelect:{defaultValue:null,description:"Whether the menu should close when the menu item is selected.",name:"shouldCloseOnSelect",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The unique id of the section.",name:"id",required:!1,type:{name:"Key"}},value:{defaultValue:null,description:"The object value that this section represents. When using dynamic collections, this is set automatically.",name:"value",required:!1,type:{name:"object"}},children:{defaultValue:null,description:"Static child items or a function to render children.",name:"children",required:!1,type:{name:"ReactNode | ((item: T) => ReactElement<unknown, string | JSXElementConstructor<any>>)"}},dependencies:{defaultValue:null,description:"Values that should invalidate the item cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"readonly any[]"}},"aria-label":{defaultValue:null,description:"An accessibility label for the section.",name:"aria-label",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"Item objects in the section.",name:"items",required:!1,type:{name:"Iterable<T>"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"single"'},{value:'"multiple"'}]}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'"all" | Iterable<Key>'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'"all" | Iterable<Key>'}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"((keys: Selection) => void)"}},disabledKeys:{defaultValue:null,description:"The currently disabled keys in the collection (controlled).",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},render:{defaultValue:null,description:`Overrides the default DOM element with a custom render function.
This allows rendering existing components with built-in styles and behaviors
such as router links, animation libraries, and pre-styled components.

Requirements:

* You must render the expected element type (e.g. if \`<button>\` is expected, you cannot render an \`<a>\`).
* Only a single root DOM element can be rendered (no fragments).
* You must pass through props and ref to the underlying DOM element, merging with your own prop as appropriate.`,name:"render",required:!1,type:{name:'DOMRenderFunction<"section", undefined>'}}}}}catch{}const y=({className:t,...r})=>e.jsx(v,{className:C(t,T.separator),...r});try{y.displayName="Separator",y.__docgenInfo={description:"",displayName:"Separator",props:{className:{defaultValue:{value:"'react-aria-Separator'"},description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"'horizontal'"},description:"The orientation of the separator.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},elementType:{defaultValue:null,description:"The HTML element type that will be used to render the separator.",name:"elementType",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},slot:{defaultValue:null,description:"A slot name for the component. Slots allow the component to receive props from a parent component.\nAn explicit `null` value indicates that the local props completely override all props received from a parent.",name:"slot",required:!1,type:{name:"string | null"}},render:{defaultValue:null,description:`Overrides the default DOM element with a custom render function.
This allows rendering existing components with built-in styles and behaviors
such as router links, animation libraries, and pre-styled components.

Requirements:

* You must render the expected element type (e.g. if \`<button>\` is expected, you cannot render an \`<a>\`).
* Only a single root DOM element can be rendered (no fragments).
* You must pass through props and ref to the underlying DOM element, merging with your own prop as appropriate.`,name:"render",required:!1,type:{name:'DOMRenderFunction<"div" | "hr", undefined>'}}}}}catch{}const Se={title:"Components/Menu",component:a,subcomponents:{MenuItem:n},render:t=>e.jsxs(S,{children:[e.jsx(j,{"aria-label":"Menu",variant:"icon",size:t.size,children:e.jsx(b,{size:20})}),e.jsx(M,{children:e.jsx(a,{...t})})]}),args:{children:t=>e.jsx(n,{...t,children:t.name}),items:[{id:0,name:"Open"},{id:1,name:"Rename..."},{id:2,name:"Duplicate"},{id:3,name:"Share..."},{id:4,name:"Delete..."}]}},l={},o={args:{selectionMode:"single"},render:t=>{const[r,i]=I.useState(new Set(["center"]));return e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(j,{"aria-label":"Menu",variant:"icon",size:t.size,children:e.jsx(b,{size:20})}),e.jsx(M,{children:e.jsxs(a,{...t,selectedKeys:r,onSelectionChange:i,children:[e.jsx(n,{id:"left",children:"Left"}),e.jsx(n,{id:"center",children:"Center"}),e.jsx(n,{id:"right",children:"Right"})]})})]}),e.jsxs(s,{children:["Current selection (controlled): ",[...r].join(", ")]})]})}},c={args:{selectionMode:"multiple"},render:t=>{const[r,i]=I.useState(new Set(["sidebar","console"]));return e.jsxs(e.Fragment,{children:[e.jsxs(S,{children:[e.jsx(j,{"aria-label":"Menu",variant:"icon",size:t.size,children:e.jsx(b,{size:20})}),e.jsx(M,{children:e.jsxs(a,{...t,selectedKeys:r,onSelectionChange:i,children:[e.jsx(n,{id:"sidebar",children:"Sidebar"}),e.jsx(n,{id:"searchbar",children:"Searchbar"}),e.jsx(n,{id:"tools",children:"Tools"}),e.jsx(n,{id:"console",children:"Console"})]})})]}),e.jsxs(s,{children:["Current selection (controlled):",r==="all"?"all":[...r].join(", ")]})]})}},d={args:{items:[{name:"Left Panel",id:"left",children:[{id:1,name:"Final Copy (1)"}]},{name:"Right Panel",id:"right",children:[{id:2,name:"index.ts"},{id:3,name:"package.json"},{id:4,name:"license.txt"}]}],children:t=>e.jsxs(g,{children:[e.jsx(P,{children:t.name}),e.jsx(q,{items:t.children,children:r=>e.jsx(n,{children:r.name})})]})}},m={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"New…"}),e.jsx(n,{children:"Open…"}),e.jsx(y,{}),e.jsx(n,{children:"Save"}),e.jsx(n,{children:"Save as…"}),e.jsx(n,{children:"Rename…"}),e.jsx(y,{}),e.jsx(n,{children:"Page setup…"}),e.jsx(n,{children:"Print…"})]})}},u={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{textValue:"Copy",children:[e.jsx(s,{slot:"label",children:"Copy"}),e.jsx(s,{slot:"description",children:"Copy the selected text"}),e.jsx(f,{children:"⌘C"})]}),e.jsxs(n,{textValue:"Cut",children:[e.jsx(s,{slot:"label",children:"Cut"}),e.jsx(s,{slot:"description",children:"Cut the selected text"}),e.jsx(f,{children:"⌘X"})]}),e.jsxs(n,{textValue:"Paste",children:[e.jsx(s,{slot:"label",children:"Paste"}),e.jsx(s,{slot:"description",children:"Paste the copied text"}),e.jsx(f,{children:"⌘V"})]})]})}},p={args:{selectionMode:"multiple",children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{textValue:"Copy",children:[e.jsx(s,{slot:"label",children:"Copy"}),e.jsx(s,{slot:"description",children:"Copy the selected text"})]}),e.jsxs(n,{textValue:"Cut",children:[e.jsx(s,{slot:"label",children:"Cut"}),e.jsx(s,{slot:"description",children:"Cut the selected text"})]}),e.jsxs(n,{textValue:"Paste",children:[e.jsx(s,{slot:"label",children:"Paste"}),e.jsx(s,{slot:"description",children:"Paste the copied text"})]})]})}},h={args:{items:[{id:0,name:"Copy"},{id:1,name:"Cut"},{id:2,name:"Paste",isDisabled:!0}]}},x={args:{items:[{id:"0",name:"Menu item"},{id:"1",name:"Menu item"},{id:"2",name:"Menu item"},{id:"3",name:"Sub menu",children:[{id:"31",name:"Sub menu item"},{id:"32",name:"Sub menu item"},{id:"33",name:"Sub menu item"}]},{id:"4",name:"Other menu item"}],children:function t(r){return r.children?e.jsxs(w,{children:[e.jsx(n,{children:r.name},r.name),e.jsx(M,{children:e.jsx(a,{items:r.children,children:i=>t(i)})})]}):e.jsx(n,{children:r.name},r.name)}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const be=["Primary","ControlledSingleSelection","ControlledMultipleSelection","Sections","Separators","TextSlots","MultiSelectWithDescriptions","DisabledItems","SubMenus"];export{c as ControlledMultipleSelection,o as ControlledSingleSelection,h as DisabledItems,p as MultiSelectWithDescriptions,l as Primary,d as Sections,m as Separators,x as SubMenus,u as TextSlots,be as __namedExportsOrder,Se as default};
