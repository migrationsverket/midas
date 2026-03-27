import{j as e}from"./iframe-Csz20ARP.js";import{T as g}from"./TextField-Dx3w8s-d.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-tUrqmaso.js";import"./utils-CLTlmF8J.js";import"./clsx-B-dksMZM.js";import"./FieldError-DCrfS5vQ.js";import"./Text-C-Hcl69m.js";import"./useFocusRing-86VLoSnj.js";import"./index-DgqWrau-.js";import"./index-8BKLnV0B.js";import"./clsx-Ciqy0D92.js";import"./Text--2gnQNTy.js";import"./RSPContexts-CleR7f2E.js";import"./Form-BfSRrjfS.js";import"./Group-BE_iKPcJ.js";import"./Input-D6Coi_9K.js";import"./Hidden-Be3C43tB.js";import"./Button-kUaaPtXV.js";import"./useLabel-B-St2Amk.js";import"./useLabels-ChCuyKnh.js";import"./useButton-DECUyEyv.js";import"./useTextField-DhB9rdcz.js";import"./useControlledState-C0z1d-QQ.js";import"./useField-DIH099Vh.js";import"./TextField.module-DdivwlC8.js";import"./Label-BwojbAdx.js";import"./Dialog-j5bOtoHJ.js";import"./OverlayArrow-C_GZ3LIR.js";import"./useResizeObserver-C2eKhyu0.js";import"./Collection-C1RlERD9.js";import"./index-DsHRxv5I.js";import"./Separator-B6KNmzSM.js";import"./SelectionManager-CZkyF8t-.js";import"./useEvent-BW8WGxtg.js";import"./scrollIntoView-CF0w4XnJ.js";import"./SelectionIndicator-D3inM4um.js";import"./useDescription-D_Cu_EP8.js";import"./ListKeyboardDelegate-Bqu8vzp_.js";import"./PressResponder-BLlHH-R6.js";import"./useLocalizedStringFormatter-l_-wyep1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BmeOkpPh.js";import"./getScrollParent-CETkwjQI.js";import"./VisuallyHidden-D5NA-uw_.js";import"./x-BnuAwExu.js";import"./createLucideIcon-BQ-CV6Lk.js";import"./useLocalizedStringFormatter-B7OoXNKl.js";import"./Heading-C8B2tW6e.js";import"./Button-CwrtXb_B.js";import"./Button.module-BB7N-cLd.js";import"./info-BbnZLDec.js";import"./Popover-DeSMm_kw.js";const he={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const be=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover"];export{n as CustomValidation,l as DS1243,p as Disabled,a as Invalid,c as MaxLengthAndShowCounter,i as Number,s as Password,t as Primary,m as ReadOnly,o as Required,d as ShowCounter,u as WithHelpPopover,be as __namedExportsOrder,he as default};
