import{j as e}from"./iframe-ClhcDk6-.js";import{T as g}from"./TextField--SZ9NMs1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-69jHSOzK.js";import"./utils-DkVwfCPY.js";import"./useObjectRef-LpWD1ACK.js";import"./clsx-B-dksMZM.js";import"./FieldError-tXlATWOG.js";import"./Text-CCnFhlAG.js";import"./useFocusRing-DgsQxXQS.js";import"./useFocusable-15vinN74.js";import"./index-BlJ-rMVG.js";import"./index-CRZ7OKWo.js";import"./clsx-Ciqy0D92.js";import"./Text-EzA_ilFd.js";import"./RSPContexts-BA8Udrsv.js";import"./Form-BINvuMk6.js";import"./useFormValidation-B19vM6x-.js";import"./Group-Ct_Ti3xi.js";import"./Input-CC6dVyXh.js";import"./Hidden-B4bEnCsb.js";import"./Button-BSlJ97mj.js";import"./useLabels-OGE8ZqLn.js";import"./useButton-BRHcPL6M.js";import"./useTextField-DOuVabl5.js";import"./useControlledState-DRXmCCw_.js";import"./useField-CkQZEAr3.js";import"./TextField.module-DdivwlC8.js";import"./Label-LYBhceLb.js";import"./Dialog-CdWec6Ze.js";import"./OverlayArrow-DSLc6eNv.js";import"./useResizeObserver-CICXzZtJ.js";import"./Collection--ZMTHkZa.js";import"./CollectionBuilder-CAo2ledx.js";import"./index-6lcNpfds.js";import"./Separator-CHFBhSKr.js";import"./SelectionManager-C04g7PAk.js";import"./useEvent-C5dcsaza.js";import"./scrollIntoView-D07VY2Nc.js";import"./SelectionIndicator-1HtvkFRD.js";import"./useDescription-By0r32b_.js";import"./ListKeyboardDelegate-Cc2KEOw7.js";import"./PressResponder-Btj3QZmG.js";import"./useLocalizedStringFormatter-B2NYe0Eu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CjYQIpYR.js";import"./getScrollParent-FapgZLQg.js";import"./VisuallyHidden-1ppoZ9c6.js";import"./Button-Cmr495Vm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cd9bTuDt.js";import"./createLucideIcon-DOkxF0Fr.js";import"./x-B2X0pLHA.js";import"./Heading-DUgnXrAX.js";import"./info-DOAR22B2.js";import"./Popover-8e-hmpHh.js";const xe={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Text value'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något blev fel'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: 'User input'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...u.parameters?.docs?.source}}};const ye=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover"];export{n as CustomValidation,l as DS1243,p as Disabled,a as Invalid,c as MaxLengthAndShowCounter,i as Number,s as Password,t as Primary,m as ReadOnly,o as Required,d as ShowCounter,u as WithHelpPopover,ye as __namedExportsOrder,xe as default};
