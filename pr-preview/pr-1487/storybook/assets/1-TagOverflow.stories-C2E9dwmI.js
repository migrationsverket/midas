import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{n as t,t as n}from"./ComboBox-D7GwSaIN.js";import{n as r,t as i}from"./ListBoxItem-CB00fooC.js";import{n as a,o,u as s}from"./iframe-C7CwE21-.js";import{n as c,t as l}from"./spike.module-DEV8c8zD.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o(),t(),r(),l(),u=a(),d=({tagOverflow:e,width:t,selectedCount:r,size:a})=>(0,u.jsx)(`div`,{style:{width:t},children:(0,u.jsx)(n,{label:`tagOverflow='${e}'`,placeholder:`Välj eller sök frukt`,items:s,selectionMode:`multiple`,defaultValue:s.slice(0,r).map(({id:e})=>e),tagOverflow:e,size:a,children:e=>(0,u.jsx)(i,{children:e.name})},r)}),f={title:`Spikes/ComboBox tag overflow/1. Variants`,component:d,tags:[`!snapshot`,`!autodocs`],parameters:{layout:`padded`},args:{tagOverflow:`wrap`,width:400,selectedCount:8,size:`large`},argTypes:{tagOverflow:{control:`inline-radio`,options:[`wrap`,`scroll`,`collapse`]},width:{control:{type:`range`,min:200,max:900,step:10}},selectedCount:{control:{type:`range`,min:0,max:s.length,step:1}},size:{control:`inline-radio`,options:[`large`,`medium`]}}},p={tags:[`!snapshot`,`!autodocs`],args:{tagOverflow:`wrap`}},m={tags:[`!snapshot`,`!autodocs`],args:{tagOverflow:`scroll`}},h={tags:[`!snapshot`,`!autodocs`],args:{tagOverflow:`collapse`}},g={tags:[`!snapshot`,`!autodocs`],argTypes:{tagOverflow:{table:{disable:!0}}},render:e=>(0,u.jsxs)(`div`,{className:c.sideBySide,children:[(0,u.jsx)(d,{...e,tagOverflow:`wrap`}),(0,u.jsx)(d,{...e,tagOverflow:`scroll`}),(0,u.jsx)(d,{...e,tagOverflow:`collapse`})]})},_=[`Wrap`,`Scroll`,`Collapse`,`SideBySide`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot', '!autodocs'],
  args: {
    tagOverflow: 'wrap'
  }
}`,...p.parameters?.docs?.source},description:{story:`The tags stack on more rows, and the input follows the last tag`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot', '!autodocs'],
  args: {
    tagOverflow: 'scroll'
  }
}`,...m.parameters?.docs?.source},description:{story:`One row, always the same height, that scrolls sideways without a scrollbar`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot', '!autodocs'],
  args: {
    tagOverflow: 'collapse'
  }
}`,...h.parameters?.docs?.source},description:{story:`One row with the tags that fit and "+n" for the rest`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!snapshot', '!autodocs'],
  argTypes: {
    tagOverflow: {
      table: {
        disable: true
      }
    }
  },
  render: args => <div className={styles.sideBySide}>
      <Field {...args} tagOverflow='wrap' />
      <Field {...args} tagOverflow='scroll' />
      <Field {...args} tagOverflow='collapse' />
    </div>
}`,...g.parameters?.docs?.source},description:{story:`All three with the same selection, to compare`,...g.parameters?.docs?.description}}}})))()}v();export{h as Collapse,m as Scroll,g as SideBySide,p as Wrap,_ as __namedExportsOrder,f as default};