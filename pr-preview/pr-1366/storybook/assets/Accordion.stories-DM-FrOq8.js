import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{a as r,i,n as a,o,r as s,t as c}from"./AccordionItem-C3uV5Z9t.js";import{n as l}from"./iframe-BZ3CMePt.js";import{n as u,t as d}from"./clsx-BbIth5Jl.js";import{n as f,t as p}from"./Button-Bn8jl4gx.js";import{n as m,t as h}from"./createLucideIcon-BrsN-CPt.js";var g,_,v,y;function b(){return(b=e((()=>{g=`_root_17bdp_1`,_=`_contained_17bdp_5`,v=`_triggerButton_17bdp_12`,y={root:g,contained:_,triggerButton:v}})))()}var x,S;function C(){return(C=e((()=>{b(),n(),u(),o(),i(),x=l(),S=({children:e,className:t,isContained:n,size:i=`large`,...a})=>(0,x.jsx)(s.Provider,{value:{isContained:n,size:i},children:(0,x.jsx)(r,{className:d(y.root,n?y.contained:y.uncontained,t),...a,children:e})}),S.__docgenInfo={description:`Accordions help reduce visual clutter on a page by organizing content into collapsible sections.`,methods:[],displayName:`Accordion`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},isDisabled:{required:!1,tsType:{name:`boolean`},description:``},isContained:{required:!1,tsType:{name:`boolean`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:"Component size when used with `isContained` (large: height 48px, medium: height 40px)\n @default 'large'",defaultValue:{value:`'large'`,computed:!1}}},composes:[`DisclosureGroupProps`]}})))()}var w,T;function E(){return(E=e((()=>{m(),w=[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}]],T=h(`file`,w)})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{D=t(n(),1),E(),C(),a(),f(),O=l(),k=[`Ett`,`Två`,`Tre`,`Fyra`],A={component:S,subcomponents:{AccordionItem:c},title:`Components/Accordion`,tags:[`autodocs`],args:{size:`large`}},j={args:{className:`test`,children:k.map(e=>(0,O.jsxs)(c,{id:e,title:`En öppningsbar panel `+e.toLocaleLowerCase(),children:[`Innehåll i öppningsbar panel `,e,`. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis quasi consequuntur doloremque harum commodi odit velit pariatur voluptate aliquid, inventore praesentium tempore dignissimos officia sint libero!`]},e))}},M={args:{...j.args,isContained:!0}},N={tags:[`!snapshot`],args:{...j.args,allowsMultipleExpanded:!0}},P={args:{...j.args,defaultExpandedKeys:[`Två`]}},F={args:{...M.args,children:k.map((e,t)=>(0,O.jsxs)(c,{id:e,title:(0,O.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[(0,O.jsx)(T,{}),(0,O.jsxs)(`b`,{children:[`En öppningsbar panel ' + `,e.toLocaleLowerCase()]}),(0,O.jsxs)(`p`,{style:{margin:0},children:[`2025-03-0`,t]})]}),children:[`Innehåll i öppningsbarpanel `,e,` Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?`]},e))}},I={args:{},tags:[`!dev`,`!autodocs`,`!snapshot`],render:()=>(0,O.jsxs)(S,{children:[(0,O.jsxs)(c,{title:`AccordionItem with dynamic content`,children:[`Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.`,(0,O.jsx)(R,{})]}),(0,O.jsx)(c,{title:`Another AccordionItem`,children:`More text about another subject...`})]})},L={tags:[`!dev`,`!autodocs`,`!snapshot`],render:()=>(0,O.jsx)(S,{children:(0,O.jsx)(c,{title:`Test`,children:(0,O.jsx)(p,{isDisabled:!0,children:`Test`})})})},R=()=>{let[e,t]=D.useState(!1);return(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`button`,{onClick:()=>t(e=>!e),"data-testid":`btn-0`,children:e?`hide`:`show`}),e?(0,O.jsx)(`div`,{style:{background:`black`,color:`white`,height:`auto`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`2rem`},"data-testid":`hidden-content`,children:`Pineapples were once so rare and expensive in Europe that people used them as a status symbol—even renting them for parties to show off wealth, without ever eating them!`}):null]})},z=[`Default`,`Contained`,`AllowsMultipleExpanded`,`DefaultExpandedKeys`,`CustomTriggerElements`,`DynamicContent`,`DS1060`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isContained: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot'],
  args: {
    ...Default.args,
    allowsMultipleExpanded: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpandedKeys: ['Två']
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {},
  tags: ['!dev', '!autodocs', '!snapshot'],
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: () => <Accordion>
      <AccordionItem title='Test'>
        <Button isDisabled>Test</Button>
      </AccordionItem>
    </Accordion>
}`,...L.parameters?.docs?.source}}}})))()}B();export{N as AllowsMultipleExpanded,M as Contained,F as CustomTriggerElements,L as DS1060,j as Default,P as DefaultExpandedKeys,I as DynamicContent,z as __namedExportsOrder,A as default};