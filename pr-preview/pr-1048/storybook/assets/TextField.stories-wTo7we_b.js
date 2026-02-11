import{j as e}from"./iframe-f5MFKuki.js";import{T as g}from"./TextField-BZTF7Pg_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-C37KIwfj.js";import"./utils-CkYTzifC.js";import"./clsx-B-dksMZM.js";import"./TextField-BohUjbFu.js";import"./FieldError-C3VFwJG_.js";import"./Text-DdMXnW5-.js";import"./useFocusRing-D3kj-ql7.js";import"./index-K7RQRMNz.js";import"./index-CBu1rMHP.js";import"./clsx-Ciqy0D92.js";import"./Text-BnjALTAb.js";import"./RSPContexts-Ckd37Azt.js";import"./Form-BwEBjvIv.js";import"./useFormValidation-BvliZLgp.js";import"./Group-mUQGXysL.js";import"./Input-L8VfAu80.js";import"./Hidden-DBQGh8ME.js";import"./Button-DuvywlRj.js";import"./number-DfkVkf0F.js";import"./useLabels-7SDlHi18.js";import"./useButton-DT2Xmgs5.js";import"./useTextField-DFa5MfZ1.js";import"./useControlledState-DpRXGdPw.js";import"./useField-Oo0u04Fu.js";import"./TextField.module-DpzeWGpt.js";import"./Label-PjVuXibP.js";import"./Dialog-B3VjvJ2X.js";import"./OverlayArrow-DJMCNZA7.js";import"./useResizeObserver-Ctd7DF4c.js";import"./Collection-DLH3cw_n.js";import"./index-B9FxiXbT.js";import"./Separator-CDjsrpMX.js";import"./SelectionManager-C5l9lJFC.js";import"./useEvent-CCpoTy8x.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ClChMsu_.js";import"./useDescription-fgVPMTaH.js";import"./ListKeyboardDelegate-c8qeyItX.js";import"./PressResponder-BkHqa3QA.js";import"./useLocalizedStringFormatter-DvLnM0F6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B9jr5M2J.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-TWnsdG0a.js";import"./Modal-D3UXYekA.js";import"./Button-BxqYbrPc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BPMFMRiW.js";import"./createLucideIcon-BR5g7LJ9.js";import"./x-n2W0P4og.js";import"./Heading-BmQhhJQW.js";import"./info-Bp9niAhh.js";import"./Popover-CGD2heLB.js";const xe={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
