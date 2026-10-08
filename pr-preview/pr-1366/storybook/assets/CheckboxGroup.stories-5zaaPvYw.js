import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./Checkbox-XLaD5zAa.js";import{n as r}from"./iframe-BT0kXp8C.js";import{n as i,t as a}from"./CheckboxGroup-D5X2HoEM.js";var o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),t(),o=r(),s={title:`Components/Checkbox/CheckboxGroup`,component:a,parameters:{layout:`centered`},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:`Etikett`,description:`Beskrivning`,errorMessage:`Du måste välja en frukt`,errorPosition:`top`,children:[`Banan`,`Apple`,`Mango`].map(e=>(0,o.jsx)(n,{value:e,children:e},e))},tags:[`autodocs`]},c={},l={args:{showSelectAll:!0}},u={args:{showSelectAll:!0,selectAllLabel:`SELECT ALL`},tags:[`!dev`,`!autodocs`,`!snapshot`],render:({...e})=>(0,o.jsxs)(a,{...e,children:[(0,o.jsx)(n,{value:`banana`,children:`Banana`}),(0,o.jsx)(n,{value:`apple`,children:`Apple`}),(0,o.jsx)(`div`,{children:`I'm not a checkbox`})]})},d={args:{showSelectAll:!0,selectAllLabel:`SELECT ALL`,defaultValue:[`Mango`]},tags:[`!dev`,`!autodocs`,`!snapshot`],render:({...e})=>(0,o.jsxs)(a,{...e,children:[(0,o.jsx)(n,{value:`banana`,children:`Banana`}),(0,o.jsx)(n,{value:`apple`,children:`Apple`}),(0,o.jsx)(n,{value:`Mango`,isDisabled:!0,children:`Mango`})]})},f={args:{isDisabled:!0}},p={args:{isReadOnly:!0,showSelectAll:!0,value:[`Mango`]}},m={args:{isInvalid:!0}},h={args:{popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},g=[`Primary`,`ShowSelectAll`,`SelectAllInteraction`,`SelectAllWithPreselectedDisabledItem`,`Disabled`,`ReadOnly`,`Invalid`,`WithHelpPopover`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL'
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: ({
    ...args
  }) => {
    return <CheckboxGroup {...args}>
        <Checkbox value='banana'>Banana</Checkbox>
        <Checkbox value='apple'>Apple</Checkbox>
        <div>I'm not a checkbox</div>
      </CheckboxGroup>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL',
    defaultValue: ['Mango']
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: ({
    ...args
  }) => {
    return <CheckboxGroup {...args}>
        <Checkbox value='banana'>Banana</Checkbox>
        <Checkbox value='apple'>Apple</Checkbox>
        <Checkbox value='Mango' isDisabled>
          Mango
        </Checkbox>
      </CheckboxGroup>;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{f as Disabled,m as Invalid,c as Primary,p as ReadOnly,u as SelectAllInteraction,d as SelectAllWithPreselectedDisabledItem,l as ShowSelectAll,h as WithHelpPopover,g as __namedExportsOrder,s as default};