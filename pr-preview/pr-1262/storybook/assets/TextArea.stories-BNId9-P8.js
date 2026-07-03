import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DNNZoumu.js";import{n,t as r}from"./TextArea-BTgxUBgV.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i=t(),a={title:`Components/TextArea`,component:r,args:{label:`Label`,description:`Description`,errorPosition:`top`},argTypes:{size:{table:{disable:!0}}}},o={args:{defaultValue:`Text value`}},s={args:{isInvalid:!0,errorMessage:`Något gick fel`}},c={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0,errorMessage:`Var god ange en text`},render:e=>(0,i.jsxs)(`form`,{children:[(0,i.jsx)(r,{...e}),(0,i.jsx)(`button`,{type:`submit`,children:`Submit`})]})},l={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{label:`Label`,validate:e=>/^\d+$/.test(e)?!0:`Only numbers are allowed`},render:e=>(0,i.jsxs)(`form`,{children:[(0,i.jsx)(r,{...e}),(0,i.jsx)(`button`,{type:`submit`,children:`Submit`})]})},u={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{maxLength:50}},d={args:{...o.args,isDisabled:!0},parameters:{a11y:{context:`body`,config:{rules:[{id:`color-contrast`,enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},f={args:{isReadOnly:!0,showCounter:!0,value:`User input`,maxLength:100}},p={args:{value:`I love apples`,showCounter:!0}},m={args:{showCounter:!0,maxLength:50}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Text value'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    isRequired: true,
    errorMessage: 'Var god ange en text'
  },
  render: args => <form>
      <TextArea {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      <TextArea {...args} />
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
    maxLength: 50
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showCounter: true,
    value: 'User input',
    maxLength: 100
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...m.parameters?.docs?.source}}},h=[`Primary`,`Invalid`,`Required`,`CustomValidation`,`MaxLength`,`Disabled`,`ReadOnly`,`ShowCounter`,`MaxLengthAndShowCounter`]}))();export{l as CustomValidation,d as Disabled,s as Invalid,u as MaxLength,m as MaxLengthAndShowCounter,o as Primary,f as ReadOnly,c as Required,p as ShowCounter,h as __namedExportsOrder,a as default};