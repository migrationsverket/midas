import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CAaFZEJr.js";import{a as n,i as r,m as i,n as a,s as o,t as s}from"./card-header-Th-6AqJS.js";import{n as c,t as l}from"./TextField-CV8k5xZY.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{c(),i(),r(),s(),u=t(),d={title:`Components/TextField`,component:l,argTypes:{type:{options:[`password`,`text`,`email`],control:{type:`select`}}},args:{label:`Label`,description:`Description`,errorPosition:`top`,size:`large`,inputMode:`text`}},f={args:{defaultValue:`Text value`}},p={args:{type:`password`}},m={args:{isInvalid:!0,errorMessage:`Något blev fel`}},h={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:e=>(0,u.jsxs)(`form`,{children:[(0,u.jsx)(l,{...e}),(0,u.jsx)(`button`,{type:`submit`,children:`Submit`})]})},g={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{label:`Label`,validate:e=>/^\d+$/.test(e)?!0:`Only numbers are allowed`},render:e=>(0,u.jsxs)(`form`,{children:[(0,u.jsx)(l,{...e,className:({isInvalid:e})=>e?`invalid`:`valid`}),(0,u.jsx)(`button`,{type:`submit`,children:`Submit`})]})},_={args:{type:`number`}},v={parameters:{docs:{description:{story:'Use `inputMode="numeric"` for numeric input without the built-in validation and increment/decrement controls of `type="number"`.'}}},args:{inputMode:`numeric`}},y={args:{isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},b={args:{isReadOnly:!0,value:`User input`}},x={args:{value:`I love apples`,showCounter:!0}},S={args:{showCounter:!0,maxLength:50}},C={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,u.jsxs)(`div`,{style:{height:500},"data-testid":`wrapper`,children:[(0,u.jsx)(l,{...e,label:void 0,description:void 0,"aria-label":`test`}),(0,u.jsx)(`div`,{style:{height:100},children:`Dummy content`})]})},w={args:{...f.args,popover:{children:`An assistive text that helps the user understand the field better.`,"aria-label":`Mer information`}}},T={parameters:{docs:{description:{story:`This example combines type="email" with autoComplete and inputMode for format validation and an optimized keyboard for mobile devices.`}}},args:{label:`Email`,type:`email`,autoComplete:`email`,inputMode:`email`}},E={parameters:{docs:{description:{story:"When placed inside a `Card`, the field automatically uses the correct field layer token — no extra props needed."}}},render:e=>(0,u.jsxs)(o,{style:{maxWidth:400},children:[(0,u.jsx)(a,{heading:`Formulär`}),(0,u.jsx)(n,{children:(0,u.jsx)(l,{...e})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Text value'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något blev fel'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: 'User input'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'When placed inside a \`Card\`, the field automatically uses the correct field layer token — no extra props needed.'
      }
    }
  },
  render: args => <Card style={{
    maxWidth: 400
  }}>
      <CardHeader heading='Formulär' />
      <CardBody>
        <TextField {...args} />
      </CardBody>
    </Card>
}`,...E.parameters?.docs?.source}}},D=[`Primary`,`Password`,`Invalid`,`Required`,`CustomValidation`,`Number`,`Numeric`,`Disabled`,`ReadOnly`,`ShowCounter`,`MaxLengthAndShowCounter`,`DS1243`,`WithHelpPopover`,`Email`,`OnCard`]}))();export{g as CustomValidation,C as DS1243,y as Disabled,T as Email,m as Invalid,S as MaxLengthAndShowCounter,_ as Number,v as Numeric,E as OnCard,p as Password,f as Primary,b as ReadOnly,h as Required,x as ShowCounter,w as WithHelpPopover,D as __namedExportsOrder,d as default};