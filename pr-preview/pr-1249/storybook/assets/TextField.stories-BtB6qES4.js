import{j as e}from"./iframe-BaDPacjd.js";import{T as h}from"./TextField-nOhUobmx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-Da4npc_I.js";import"./utils-DIlgsg9w.js";import"./clsx-B-dksMZM.js";import"./FieldError-CCoQDHBS.js";import"./Text-D9IIAziF.js";import"./useFocusRing-CU-3-Yvs.js";import"./index-Nc8_JSKj.js";import"./index-DARPjNQR.js";import"./clsx-Ciqy0D92.js";import"./Text-maDwTHxG.js";import"./RSPContexts-Q8mL0bRp.js";import"./Form-oBhPq7WZ.js";import"./Group-DLvsScbU.js";import"./Input-BrXEUkLM.js";import"./Hidden-wYkIMllK.js";import"./Button-xqG4BSxe.js";import"./useLabel-CEPds_v5.js";import"./useLabels-DVtm5qiG.js";import"./useButton-CWKA-NcB.js";import"./useTextField-BfD0yxsi.js";import"./useControlledState-C7Qyb7bs.js";import"./useField-DIToGq9j.js";import"./TextField.module-DdivwlC8.js";import"./Label-BG4tYNy3.js";import"./Dialog-BYeY2Kq4.js";import"./OverlayArrow-Dxq5i1Js.js";import"./useResizeObserver-BMJo5MZf.js";import"./Collection-DwVoD4ZF.js";import"./index-zgqX2Yvv.js";import"./Separator-CkGYv_lX.js";import"./SelectionManager-CWk_F_tK.js";import"./useEvent-DWbcd_98.js";import"./scrollIntoView-DP2ELaPl.js";import"./SelectionIndicator-E2Oo2YPO.js";import"./useDescription-4MxSlUac.js";import"./ListKeyboardDelegate-BvsWrhNC.js";import"./PressResponder-D4J1Z43q.js";import"./useLocalizedStringFormatter-D18yrwwN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoR0ZV4_.js";import"./getScrollParent-CQLO__Ec.js";import"./VisuallyHidden-Cc7_mEU0.js";import"./ModalOverlay-CMvAZP1n.js";import"./x-CIJW-8OQ.js";import"./createLucideIcon-Cn3KNUPN.js";import"./useLocalizedStringFormatter-B8-NJo2o.js";import"./Heading-Bf9R16Cd.js";import"./Button-BbMcm-s_.js";import"./Button.module-BB7N-cLd.js";import"./info-Bgk1qFK4.js";import"./Popover-DUTsRoUU.js";const ye={title:"Components/TextField",component:h,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large",inputMode:"text"}},t={args:{defaultValue:"Text value"}},a={args:{type:"password"}},s={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(h,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(h,{...r,className:({isInvalid:v})=>v?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},m={parameters:{docs:{description:{story:'Use `inputMode="numeric"` for numeric input without the built-in validation and increment/decrement controls of `type="number"`.'}}},args:{inputMode:"numeric"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},d={args:{isReadOnly:!0,value:"User input"}},c={args:{value:"I love apples",showCounter:!0}},l={args:{showCounter:!0,maxLength:50}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(h,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},g={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},b={parameters:{docs:{description:{story:'This example combines type="email" with autoComplete and inputMode for format validation and an optimized keyboard for mobile devices.'}}},args:{label:"Email",type:"email",autoComplete:"email",inputMode:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
