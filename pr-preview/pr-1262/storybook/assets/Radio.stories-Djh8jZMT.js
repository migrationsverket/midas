import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-B0o6TMgu.js";import{n,r,t as i}from"./Radio-CK0vhxBf.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{r(),a=t(),o={title:`Components/Radio`,component:n,subcomponents:{Radio:i},tags:[`autodocs`],args:{label:`Välj frukt`,description:`Valfri beskrivning`,errorMessage:`Du måste välja en frukt?`,errorPosition:`top`},argTypes:{children:{table:{disable:!0}},label:{type:`string`,control:{type:`text`}},isDisabled:{type:`boolean`,options:[!1,!0],control:{type:`radio`}},isInvalid:{type:`boolean`,options:[!1,!0],control:{type:`radio`}}}},s=[`Äpple`,`Banan`,`Kiwi`,`Apelsin`],c=s.map(e=>(0,a.jsx)(i,{value:e,id:e.toLowerCase(),children:e},e)),l=[(0,a.jsx)(i,{value:`banan`,children:`Banan`},`radio-banan`),(0,a.jsx)(i,{value:`apelsin`,isDisabled:!0,children:`Apelsin`},`radio-apelsin`),(0,a.jsx)(i,{value:`kiwi`,children:`Kiwi`},`radio-kiwi`)],u={args:{label:`Frukt`,description:`Välj en frukt`,children:s.map(e=>(0,a.jsx)(i,{value:e,id:e.toLowerCase(),className:`test-radio-class`,children:e},e)),className:`test-class`}},d={args:{children:c,isDisabled:!0}},f={args:{children:c,isReadOnly:!0,value:`Kiwi`}},p={args:{children:l}},m={args:{children:c,isInvalid:!0,errorMessage:`Det här stämmer inte!`}},h={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{label:`Frukt`,description:`Välj en frukt`,children:c,isRequired:!0},render:e=>(0,a.jsxs)(`form`,{children:[(0,a.jsx)(n,{...e}),(0,a.jsx)(`button`,{type:`submit`,children:`Submit`})]})},g={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{label:`Frukt`,description:`Välj en frukt`,children:c,errorMessage:void 0,validate:e=>e?.includes(`Äpple`)?`Inga äpplen är tillåtna`:!0},render:e=>(0,a.jsxs)(`form`,{children:[(0,a.jsx)(n,{...e}),(0,a.jsx)(`button`,{type:`submit`,children:`Submit`})]})},_={args:{...u.args,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{value:`apple`,children:`Äpple`},`radio-apple`),(0,a.jsx)(i,{value:`banan`,children:`Banan`},`radio-banan`)]}),orientation:`horizontal`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => <Radio key={fruit} value={fruit} id={fruit.toLowerCase()} className='test-radio-class'>
        {fruit}
      </Radio>),
    className: 'test-class'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isReadOnly: true,
    value: 'Kiwi'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
  render: args => <form>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>
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
    errorMessage: undefined,
    validate: value => value?.includes('Äpple') ? 'Inga äpplen är tillåtna' : true
  },
  render: args => <form>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Primary`,`Disabled`,`ReadOnly`,`OneItemDisabled`,`Invalid`,`Required`,`CustomValidation`,`Horizontal`]}))();export{g as CustomValidation,d as Disabled,_ as Horizontal,m as Invalid,p as OneItemDisabled,u as Primary,f as ReadOnly,h as Required,v as __namedExportsOrder,o as default};