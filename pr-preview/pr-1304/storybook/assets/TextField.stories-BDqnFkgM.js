import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DfLStsFY.js";import{n,t as r}from"./TextField-DliIoE3N.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{n(),i=t(),a={title:`Components/TextField`,component:r,argTypes:{type:{options:[`password`,`text`,`email`],control:{type:`select`}}},args:{label:`Label`,description:`Description`,errorPosition:`top`,size:`large`,inputMode:`text`}},o={args:{defaultValue:`Text value`}},s={args:{type:`password`}},c={args:{isInvalid:!0,errorMessage:`Något blev fel`}},l={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:e=>(0,i.jsxs)(`form`,{children:[(0,i.jsx)(r,{...e}),(0,i.jsx)(`button`,{type:`submit`,children:`Submit`})]})},u={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{label:`Label`,validate:e=>/^\d+$/.test(e)?!0:`Only numbers are allowed`},render:e=>(0,i.jsxs)(`form`,{children:[(0,i.jsx)(r,{...e,className:({isInvalid:e})=>e?`invalid`:`valid`}),(0,i.jsx)(`button`,{type:`submit`,children:`Submit`})]})},d={args:{type:`number`}},f={parameters:{docs:{description:{story:'Use `inputMode="numeric"` for numeric input without the built-in validation and increment/decrement controls of `type="number"`.'}}},args:{inputMode:`numeric`}},p={args:{isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:`User input`}},h={args:{value:`I love apples`,showCounter:!0}},g={args:{showCounter:!0,maxLength:50}},_={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,i.jsxs)(`div`,{style:{height:500},"data-testid":`wrapper`,children:[(0,i.jsx)(r,{...e,label:void 0,description:void 0,"aria-label":`test`}),(0,i.jsx)(`div`,{style:{height:100},children:`Dummy content`})]})},v={args:{...o.args,popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},y={parameters:{docs:{description:{story:`This example combines type="email" with autoComplete and inputMode for format validation and an optimized keyboard for mobile devices.`}}},args:{label:`Email`,type:`email`,autoComplete:`email`,inputMode:`email`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Text value'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något blev fel'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    isRequired: true
  },
  render: args => <form>
      <TextField {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Label',
    validate: (value: string) => !/^\\d+$/.test(value) ? 'Only numbers are allowed' : true
  },
  render: args => <form>
      <TextField {...args} className={({
      isInvalid
    }) => isInvalid ? 'invalid' : 'valid'} />
      <button type='submit'>Submit</button>
    </form>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Use \`inputMode="numeric"\` for numeric input without the built-in validation and increment/decrement controls of \`type="number"\`.'
      }
    }
  },
  args: {
    inputMode: 'numeric'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: 'User input'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => <div style={{
    height: 500
  }} data-testid='wrapper'>
      <TextField {...args} label={undefined} description={undefined} aria-label='test' />
      <div style={{
      height: 100
    }}>Dummy content</div>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'This example combines type="email" with autoComplete and inputMode for format validation and an optimized keyboard for mobile devices.'
      }
    }
  },
  args: {
    label: 'Email',
    type: 'email',
    autoComplete: 'email',
    inputMode: 'email'
  }
}`,...y.parameters?.docs?.source}}},b=[`Primary`,`Password`,`Invalid`,`Required`,`CustomValidation`,`Number`,`Numeric`,`Disabled`,`ReadOnly`,`ShowCounter`,`MaxLengthAndShowCounter`,`DS1243`,`WithHelpPopover`,`Email`]}))();export{u as CustomValidation,_ as DS1243,p as Disabled,y as Email,c as Invalid,g as MaxLengthAndShowCounter,d as Number,f as Numeric,s as Password,o as Primary,m as ReadOnly,l as Required,h as ShowCounter,v as WithHelpPopover,b as __namedExportsOrder,a as default};