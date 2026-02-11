import{j as e}from"./iframe-BrSFSEso.js";import{T as g}from"./TextField-ByPbIbFK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-CXmUNkfY.js";import"./utils-CSLr47GB.js";import"./clsx-B-dksMZM.js";import"./TextField-DO2djXGD.js";import"./FieldError-C1wT0W68.js";import"./Text-CqAiKc3c.js";import"./useFocusRing-B7OMZUkL.js";import"./index-Bwu9F9er.js";import"./index-ze5CMu77.js";import"./clsx-Ciqy0D92.js";import"./Text-afjM-cTG.js";import"./RSPContexts-D6LnjnjF.js";import"./Form-DcVXVRUN.js";import"./useFormValidation-DYc4Vusd.js";import"./Group-ggQdBBag.js";import"./Input-kjJsHDHI.js";import"./Hidden-bRkw9FY4.js";import"./Button-sstewYaM.js";import"./number-DfkVkf0F.js";import"./useLabels-BrFMbAmC.js";import"./useButton-B52JHo7m.js";import"./useTextField-BpM0-sgz.js";import"./useControlledState-CqGR6b7a.js";import"./useField-BUD6g1mX.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BwjNgHnq.js";import"./Dialog-GDy5bWq5.js";import"./OverlayArrow-S-wF1zMs.js";import"./useResizeObserver-C-3K1Yg-.js";import"./Collection-gPtAIt1S.js";import"./index-AqybnyRZ.js";import"./Separator-btKLgu5F.js";import"./SelectionManager-B_55B_zK.js";import"./useEvent-Bnvwx3ca.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DsPVl8Wi.js";import"./useDescription-CgGPIItB.js";import"./ListKeyboardDelegate-CCJ1QruW.js";import"./PressResponder-Cw8JUUw4.js";import"./useLocalizedStringFormatter-CutqbN-G.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2q38RaJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ClNUZpiZ.js";import"./Modal-BBpNHHOc.js";import"./Button-D56CPdXD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CKLO5enn.js";import"./createLucideIcon-D7YZh2ey.js";import"./x-DQ48cbAb.js";import"./Heading-BO2ZHWnX.js";import"./info-D9QMLE3p.js";import"./Popover-C4JN4Q0f.js";const xe={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
