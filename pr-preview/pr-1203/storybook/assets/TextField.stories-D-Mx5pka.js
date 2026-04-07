import{j as e}from"./iframe-QwZUgaLO.js";import{T as h}from"./TextField-BLN-TSnA.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-BFIL37GP.js";import"./utils-C5PAaS6l.js";import"./clsx-B-dksMZM.js";import"./FieldError-vnsH4bsL.js";import"./Text-CjsrR6_S.js";import"./useFocusRing-DCV7Bvm3.js";import"./index-CU2b6dbl.js";import"./index-DwVC30Wi.js";import"./clsx-Ciqy0D92.js";import"./Text-XaIsUgQ9.js";import"./RSPContexts-CRJgyFJK.js";import"./Form-B3ZZchXU.js";import"./Group-Bpr5GJCw.js";import"./Input-C_LA6nTg.js";import"./Hidden-qsgafZIY.js";import"./Button-D9S27FhL.js";import"./useLabel-JXRtA5SB.js";import"./useLabels-BoIdpiTR.js";import"./useButton-CvKomkMU.js";import"./useTextField-Ci1dramH.js";import"./useControlledState-DGCNkOh1.js";import"./useField-D8U6vQ86.js";import"./TextField.module-DdivwlC8.js";import"./Label-H9_HPKA9.js";import"./Dialog-BdWTsjfQ.js";import"./OverlayArrow-B7eG3oQS.js";import"./useResizeObserver-De-tLFoa.js";import"./Collection-BWpKskv2.js";import"./index-C5wuU4_V.js";import"./Separator-pmSVmgMf.js";import"./SelectionManager-C_b-UP1r.js";import"./useEvent-DoVh1qxn.js";import"./scrollIntoView-CcRWGSSD.js";import"./SelectionIndicator-CCJXiU-C.js";import"./useDescription-BLH5SCIP.js";import"./ListKeyboardDelegate-BDdbKLH6.js";import"./PressResponder-C-d46iSj.js";import"./useLocalizedStringFormatter-B8e3KCPt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C89c8p4C.js";import"./getScrollParent-DxQpJ7qd.js";import"./VisuallyHidden-B7afogpp.js";import"./x-CLIz2YWd.js";import"./createLucideIcon-BN5DVyg5.js";import"./useLocalizedStringFormatter-C0ixRk9u.js";import"./Heading-DzTzoC4y.js";import"./Button-CEqP3wI_.js";import"./Button.module-BB7N-cLd.js";import"./info-BHpLtMkv.js";import"./Popover-BG1RISgy.js";const ve={title:"Components/TextField",component:h,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large",inputMode:"text"}},t={args:{defaultValue:"Text value"}},a={args:{type:"password"}},s={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(h,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(h,{...r,className:({isInvalid:v})=>v?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},m={parameters:{docs:{description:{story:'Use `inputMode="numeric"` for numeric input without the built-in validation and increment/decrement controls of `type="number"`.'}}},args:{inputMode:"numeric"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},d={args:{isReadOnly:!0,value:"User input"}},c={args:{value:"I love apples",showCounter:!0}},l={args:{showCounter:!0,maxLength:50}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(h,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},g={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},b={parameters:{docs:{description:{story:'This example combines type="email" with autoComplete and inputMode for format validation and an optimized keyboard for mobile devices.'}}},args:{label:"Email",type:"email",autoComplete:"email",inputMode:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const ye=["Primary","Password","Invalid","Required","CustomValidation","Number","Numeric","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover","Email"];export{n as CustomValidation,u as DS1243,p as Disabled,b as Email,s as Invalid,l as MaxLengthAndShowCounter,i as Number,m as Numeric,a as Password,t as Primary,d as ReadOnly,o as Required,c as ShowCounter,g as WithHelpPopover,ye as __namedExportsOrder,ve as default};
