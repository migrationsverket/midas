import{j as e}from"./iframe-Dmk7YWbP.js";import{T as h}from"./TextField-DUYpWoIy.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-mILG7qwS.js";import"./utils-CZU1a0io.js";import"./clsx-B-dksMZM.js";import"./FieldError-Blg6FnKj.js";import"./Text-C-958akl.js";import"./useFocusRing-DQsZ5BW0.js";import"./index-D7ra6ojE.js";import"./index-CGyxxXDN.js";import"./clsx-Ciqy0D92.js";import"./Text--asL3Zcb.js";import"./RSPContexts-BkluUXe_.js";import"./Form-lxF2zL-k.js";import"./Group-Dd_e3Mvl.js";import"./Input-DJ2I6k99.js";import"./Hidden-j21WNwyS.js";import"./Button-F5fRRQra.js";import"./useLabel-DM6ovL82.js";import"./useLabels-BCoT3OdJ.js";import"./useButton-C4S2lX_8.js";import"./useTextField-D6Ij23Fi.js";import"./useControlledState-C7rqhk2c.js";import"./useField-BTvl88ll.js";import"./TextField.module-DdivwlC8.js";import"./Label-zhkRkTgZ.js";import"./Dialog-z2G2hCwg.js";import"./OverlayArrow-2VGgn4IZ.js";import"./useResizeObserver-CNcNfmtM.js";import"./Collection-BUZ2WvuY.js";import"./index-BEEHQsac.js";import"./Separator-DigWaU0m.js";import"./SelectionManager-0hYn_pTl.js";import"./useEvent-DnGv8QpP.js";import"./scrollIntoView-B790B2bQ.js";import"./SelectionIndicator-B3uAMTLT.js";import"./useDescription-aAvmV4Vy.js";import"./ListKeyboardDelegate-BQY05oIt.js";import"./PressResponder-UF3jWaRV.js";import"./useLocalizedStringFormatter-BZ6VtZ8V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DdapsBG5.js";import"./getScrollParent-CKQLrhSn.js";import"./VisuallyHidden-CW18ePiJ.js";import"./ModalOverlay-Dpa5xzh7.js";import"./x-CR8vb-29.js";import"./createLucideIcon-Dl46zayF.js";import"./useLocalizedStringFormatter-BIZu7Yxw.js";import"./Heading-DrckR7wJ.js";import"./Button-BkclXew1.js";import"./Button.module-BB7N-cLd.js";import"./info-CachzMjj.js";import"./Popover-CL3r2TAj.js";const ye={title:"Components/TextField",component:h,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large",inputMode:"text"}},t={args:{defaultValue:"Text value"}},a={args:{type:"password"}},s={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(h,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(h,{...r,className:({isInvalid:v})=>v?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},m={parameters:{docs:{description:{story:'Use `inputMode="numeric"` for numeric input without the built-in validation and increment/decrement controls of `type="number"`.'}}},args:{inputMode:"numeric"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},d={args:{isReadOnly:!0,value:"User input"}},c={args:{value:"I love apples",showCounter:!0}},l={args:{showCounter:!0,maxLength:50}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(h,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},g={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},b={parameters:{docs:{description:{story:'This example combines type="email" with autoComplete and inputMode for format validation and an optimized keyboard for mobile devices.'}}},args:{label:"Email",type:"email",autoComplete:"email",inputMode:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Text value'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något blev fel'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: 'User input'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const fe=["Primary","Password","Invalid","Required","CustomValidation","Number","Numeric","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover","Email"];export{n as CustomValidation,u as DS1243,p as Disabled,b as Email,s as Invalid,l as MaxLengthAndShowCounter,i as Number,m as Numeric,a as Password,t as Primary,d as ReadOnly,o as Required,c as ShowCounter,g as WithHelpPopover,fe as __namedExportsOrder,ye as default};
