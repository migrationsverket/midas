import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{t as r}from"./iframe-bnPsM8Kg.js";import{n as i,t as a}from"./accordion-CtxKQG19.js";import{t as o}from"./AccordionItem-CnPUqIlW.js";import{t as s}from"./Button-zhncyVts.js";import{K as c,t as l}from"./lucide-react-BJU7mAvS.js";import{t as u}from"./button-CrkqfAcN.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{d=t(n(),1),l(),a(),u(),f=r(),p=[`Ett`,`Två`,`Tre`,`Fyra`],m={component:i,subcomponents:{AccordionItem:o},title:`Components/Accordion`,tags:[`autodocs`],args:{size:`large`}},h={args:{className:`test`,children:p.map(e=>(0,f.jsxs)(o,{id:e,title:`En öppningsbar panel `+e.toLocaleLowerCase(),children:[`Innehåll i öppningsbar panel `,e,`. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis quasi consequuntur doloremque harum commodi odit velit pariatur voluptate aliquid, inventore praesentium tempore dignissimos officia sint libero!`]},e))}},g={args:{...h.args,isContained:!0}},_={tags:[`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{...h.args,allowsMultipleExpanded:!0}},v={args:{...h.args,defaultExpandedKeys:[`Två`]}},y={args:{...g.args,children:p.map((e,t)=>(0,f.jsxs)(o,{id:e,title:(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`1rem`},children:[(0,f.jsx)(c,{}),(0,f.jsxs)(`b`,{children:[`En öppningsbar panel ' + `,e.toLocaleLowerCase()]}),(0,f.jsxs)(`p`,{style:{margin:0},children:[`2025-03-0`,t]})]}),children:[`Innehåll i öppningsbarpanel `,e,` Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?`]},e))}},b={args:{},tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:()=>(0,f.jsxs)(i,{children:[(0,f.jsxs)(o,{title:`AccordionItem with dynamic content`,children:[`Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.`,(0,f.jsx)(S,{})]}),(0,f.jsx)(o,{title:`Another AccordionItem`,children:`More text about another subject...`})]})},x={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:()=>(0,f.jsx)(i,{children:(0,f.jsx)(o,{title:`Test`,children:(0,f.jsx)(s,{isDisabled:!0,children:`Test`})})})},S=()=>{let[e,t]=d.useState(!1);return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`button`,{onClick:()=>t(e=>!e),"data-testid":`btn-0`,children:e?`hide`:`show`}),e?(0,f.jsx)(`div`,{style:{background:`black`,color:`white`,height:`auto`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`2rem`},"data-testid":`hidden-content`,children:`Pineapples were once so rare and expensive in Europe that people used them as a status symbol—even renting them for parties to show off wealth, without ever eating them!`}):null]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isContained: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpandedKeys: ['Två']
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},C=[`Default`,`Contained`,`AllowsMultipleExpanded`,`DefaultExpandedKeys`,`CustomTriggerElements`,`DynamicContent`,`DS1060`]}))();export{_ as AllowsMultipleExpanded,g as Contained,y as CustomTriggerElements,x as DS1060,h as Default,v as DefaultExpandedKeys,b as DynamicContent,C as __namedExportsOrder,m as default};