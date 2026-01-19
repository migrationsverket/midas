import{j as t,R as y}from"./iframe-CutDFk5n.js";import{a as x,$ as v,A as i}from"./AccordionItem-Cx9F4471.js";import{c as A}from"./clsx-Ciqy0D92.js";import{c as I}from"./createLucideIcon-B80-lQ4U.js";import{B as q}from"./Button-DdqPt2Xq.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Dp5-D5M-.js";import"./utils-CTW1dxkN.js";import"./clsx-B-dksMZM.js";import"./Hidden-CUK-mE4f.js";import"./useFocusRing-4WXHNlg7.js";import"./index-Vo5448Qj.js";import"./index-DJz0Sx_u.js";import"./useLabels-DY93YiY3.js";import"./useButton-Co8nMjNx.js";import"./useControlledState-Cn8LkIR3.js";import"./useEvent-BeSsf5uU.js";import"./FeedbackStatusIcon-DdkOTqog.js";import"./info-BVVEa0Wk.js";import"./check-Dlnjv4Lh.js";import"./useLocalizedStringFormatter-ttEBQjzn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./chevron-down-DJLSKW0f.js";import"./Heading-TSmww82B.js";import"./RSPContexts-DcYz2meL.js";import"./Button.module-Co5e5YHp.js";import"./VisuallyHidden-BPIRqvhu.js";const E="_root_17bdp_1",w="_contained_17bdp_5",g={root:E,contained:w},s=({children:e,className:a,isContained:r,size:f="large",...b})=>t.jsx(x.Provider,{value:{isContained:r,size:f},children:t.jsx(v,{className:A(g.root,r?g.contained:g.uncontained,a),...b,children:e})});try{s.displayName="Accordion",s.__docgenInfo={description:"Accordions help reduce visual clutter on a page by organizing content into collapsible sections.",displayName:"Accordion",props:{children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:null,description:"Whether all items are disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isContained:{defaultValue:null,description:"",name:"isContained",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"large"},description:"Component size when used with `isContained` (large: height 48px, medium: height 40px)",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},className:{defaultValue:{value:"'react-aria-DisclosureGroup'"},description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"ClassNameOrFunction<DisclosureGroupRenderProps>"}},allowsMultipleExpanded:{defaultValue:null,description:"Whether multiple items can be expanded at the same time.",name:"allowsMultipleExpanded",required:!1,type:{name:"boolean"}},expandedKeys:{defaultValue:null,description:"The currently expanded keys in the group (controlled).",name:"expandedKeys",required:!1,type:{name:"Iterable<Key>"}},defaultExpandedKeys:{defaultValue:null,description:"The initial expanded keys in the group (uncontrolled).",name:"defaultExpandedKeys",required:!1,type:{name:"Iterable<Key>"}},onExpandedChange:{defaultValue:null,description:"Handler that is called when items are expanded or collapsed.",name:"onExpandedChange",required:!1,type:{name:"((keys: Set<Key>) => any)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"StyleOrFunction<DisclosureGroupRenderProps>"}}}}}catch{}const S=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]],C=I("file",S),h=["Ett","Två","Tre","Fyra"],ae={component:s,subcomponents:{AccordionItem:i},title:"Components/Accordion",tags:["autodocs"],args:{size:"large"}},n={args:{className:"test",children:h.map(e=>t.jsxs(i,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),children:["Innehåll i öppningsbar panel ",e,". Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis quasi consequuntur doloremque harum commodi odit velit pariatur voluptate aliquid, inventore praesentium tempore dignissimos officia sint libero!"]},e))}},o={args:{...n.args,isContained:!0}},l={tags:["!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{...n.args,allowsMultipleExpanded:!0}},c={args:{...n.args,defaultExpandedKeys:["Två"]}},d={args:{...o.args,children:h.map((e,a)=>t.jsxs(i,{id:e,title:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[t.jsx(C,{}),t.jsxs("b",{children:["En öppningsbar panel ' + ",e.toLocaleLowerCase()]}),t.jsxs("p",{style:{margin:0},children:["2025-03-0",a]})]}),children:["Innehåll i öppningsbarpanel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}},u={args:{},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:()=>t.jsxs(s,{children:[t.jsxs(i,{title:"AccordionItem with dynamic content",children:["Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",t.jsx(j,{})]}),t.jsx(i,{title:"Another AccordionItem",children:"More text about another subject..."})]})},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:()=>t.jsx(s,{children:t.jsx(i,{title:"Test",children:t.jsx(q,{isDisabled:!0,children:"Test"})})})},j=()=>{const[e,a]=y.useState(!1);return t.jsxs("div",{children:[t.jsx("button",{onClick:()=>a(r=>!r),"data-testid":"btn-0",children:e?"hide":"show"}),e?t.jsx("div",{style:{background:"black",color:"white",height:"auto",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},"data-testid":"hidden-content",children:"Pineapples were once so rare and expensive in Europe that people used them as a status symbol—even renting them for parties to show off wealth, without ever eating them!"}):null]})},p={args:{isContained:!0,children:h.map((e,a)=>t.jsxs(i,{id:e,title:"En öppningsbar panel "+e.toLocaleLowerCase(),type:a===2?"success":a===3?"warning":void 0,children:["Innehåll i öppningsbar panel ",e," Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?"]},e))}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'test',
    children: ITEMS.map(item => <AccordionItem id={item} key={item} title={'En öppningsbar panel ' + item.toLocaleLowerCase()}>
        Innehåll i öppningsbar panel {item}. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis
        quasi consequuntur doloremque harum commodi odit velit pariatur
        voluptate aliquid, inventore praesentium tempore dignissimos officia
        sint libero!
      </AccordionItem>)
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isContained: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    ...Default.args,
    allowsMultipleExpanded: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpandedKeys: ['Två']
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Contained.args,
    children: ITEMS.map((item, i) => <AccordionItem id={item} key={item} title={<div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
            <File />
            <b>En öppningsbar panel ' + {item.toLocaleLowerCase()}</b>
            <p style={{
        margin: 0
      }}>2025-03-0{i}</p>
          </div>}>
        Innehåll i öppningsbarpanel {item} Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellendus perspiciatis officia,
        voluptate ratione quam nemo quod aut maiores animi nostrum, in labore
        adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Impedit dolorem tempora
        laboriosam asperiores eum dignissimos accusantium voluptate eligendi
        beatae vel quis rerum error dolore cum incidunt pariatur accusamus,
        illum consequuntur?
      </AccordionItem>)
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <Accordion>
      <AccordionItem title='AccordionItem with dynamic content'>
        Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a
        fruit salad.
        <ExpandableStuff />
      </AccordionItem>
      <AccordionItem title='Another AccordionItem'>
        More text about another subject...
      </AccordionItem>
    </Accordion>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <Accordion>
      <AccordionItem title='Test'>
        <Button isDisabled>Test</Button>
      </AccordionItem>
    </Accordion>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isContained: true,
    children: ITEMS.map((item, i) => <AccordionItem id={item} key={item} title={'En öppningsbar panel ' + item.toLocaleLowerCase()} type={i === 2 ? 'success' : i === 3 ? 'warning' : undefined}>
        Innehåll i öppningsbar panel {item} Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellendus perspiciatis officia,
        voluptate ratione quam nemo quod aut maiores animi nostrum, in labore
        adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Impedit dolorem tempora
        laboriosam asperiores eum dignissimos accusantium voluptate eligendi
        beatae vel quis rerum error dolore cum incidunt pariatur accusamus,
        illum consequuntur?
      </AccordionItem>)
  }
}`,...p.parameters?.docs?.source}}};const ne=["Default","Contained","AllowsMultipleExpanded","DefaultExpandedKeys","CustomTriggerElements","DynamicContent","DS1060","AccordionHasBackground"];export{p as AccordionHasBackground,l as AllowsMultipleExpanded,o as Contained,d as CustomTriggerElements,m as DS1060,n as Default,c as DefaultExpandedKeys,u as DynamicContent,ne as __namedExportsOrder,ae as default};
