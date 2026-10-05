import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{i as t,n,r,t as i}from"./RadioGroup-DsFlm84v.js";import{n as a}from"./iframe-DIIgsmSq.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{t(),n(),o=a(),s={title:`Components/Radio/RadioGroup`,component:i,subcomponents:{Radio:r},tags:[`autodocs`],args:{label:`Välj frukt`,description:`Valfri beskrivning`,errorMessage:`Du måste välja en frukt?`,errorPosition:`top`}},c=[`Äpple`,`Banan`,`Kiwi`,`Apelsin`],l=c.map(e=>(0,o.jsx)(r,{value:e,id:e.toLowerCase(),children:e},e)),u=[(0,o.jsx)(r,{value:`banan`,children:`Banan`},`radio-banan`),(0,o.jsx)(r,{value:`apelsin`,isDisabled:!0,children:`Apelsin`},`radio-apelsin`),(0,o.jsx)(r,{value:`kiwi`,children:`Kiwi`},`radio-kiwi`)],d={args:{label:`Frukt`,description:`Välj en frukt`,children:c.map(e=>(0,o.jsx)(r,{value:e,id:e.toLowerCase(),className:`test-radio-class`,children:e},e)),className:`test-class`}},f={args:{children:l,isDisabled:!0}},p={args:{children:l,isReadOnly:!0,value:`Kiwi`}},m={args:{children:u}},h={args:{children:l,isInvalid:!0,errorMessage:`Det här stämmer inte!`}},g={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{label:`Frukt`,description:`Välj en frukt`,children:l,isRequired:!0},render:e=>(0,o.jsxs)(`form`,{onSubmit:e=>e.preventDefault(),children:[(0,o.jsx)(i,{...e}),(0,o.jsx)(`button`,{type:`submit`,children:`Submit`})]})},_={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{label:`Frukt`,description:`Välj en frukt`,children:l,errorMessage:void 0,validate:e=>!e?.includes(`Äpple`)||`Inga äpplen är tillåtna`},render:e=>(0,o.jsxs)(`form`,{onSubmit:e=>e.preventDefault(),children:[(0,o.jsx)(i,{...e}),(0,o.jsx)(`button`,{type:`submit`,children:`Submit`})]})},v={args:{...d.args,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{value:`apple`,children:`Äpple`},`radio-apple`),(0,o.jsx)(r,{value:`banan`,children:`Banan`},`radio-banan`)]}),orientation:`horizontal`}},y={args:{...d.args,popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},b=[`Primary`,`Disabled`,`ReadOnly`,`OneItemDisabled`,`Invalid`,`Required`,`CustomValidation`,`Horizontal`,`WithHelpPopover`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => <Radio key={fruit} value={fruit} id={fruit.toLowerCase()} className='test-radio-class'>
        {fruit}
      </Radio>),
    className: 'test-class'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isReadOnly: true,
    value: 'Kiwi'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    isRequired: true
  },
  render: args => <form onSubmit={e => e.preventDefault()}>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    errorMessage: undefined,
    validate: value => value?.includes('Äpple') ? 'Inga äpplen är tillåtna' : true
  },
  render: args => <form onSubmit={e => e.preventDefault()}>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <>
        <Radio key='radio-apple' value='apple'>
          Äpple
        </Radio>
        <Radio key='radio-banan' value='banan'>
          Banan
        </Radio>
      </>,
    orientation: 'horizontal'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as CustomValidation,f as Disabled,v as Horizontal,h as Invalid,m as OneItemDisabled,d as Primary,p as ReadOnly,g as Required,y as WithHelpPopover,b as __namedExportsOrder,s as default};