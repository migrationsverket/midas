import{j as e}from"./iframe-BP7DzUIh.js";import{T as g}from"./TextField-CO9uEX0H.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-BTPSpFky.js";import"./utils-B9_czYqy.js";import"./clsx-B-dksMZM.js";import"./FieldError-DwMEu-CZ.js";import"./Text-C6QCLAD1.js";import"./useFocusRing-Apf-8Fr7.js";import"./index-B1MenRgK.js";import"./index-B9Re-I8w.js";import"./clsx-Ciqy0D92.js";import"./Text-C-lFPFDT.js";import"./RSPContexts-C286y1L4.js";import"./Form-BAJVgpQE.js";import"./Group-DxEw32Ds.js";import"./Input-CXA6qDBj.js";import"./Hidden-DlKvXDgO.js";import"./Button-yD28QKfx.js";import"./useLabels-B0kKOJyy.js";import"./useButton-DTicc54w.js";import"./useTextField-BJ5rsHJP.js";import"./useControlledState-B7al1qBg.js";import"./useField-p1IS5Xfo.js";import"./TextField.module-DdivwlC8.js";import"./Label-0yjB-E8z.js";import"./Dialog-B6ZEH6ru.js";import"./OverlayArrow-DTP3iI7m.js";import"./useResizeObserver-_Mvg5rJV.js";import"./Collection-CEHuK8QM.js";import"./index-CqTzYnk-.js";import"./Separator-Ci0cwtQM.js";import"./SelectionManager-CcZ5FS4I.js";import"./useEvent-boX-2EsT.js";import"./scrollIntoView-BqUk0Mej.js";import"./SelectionIndicator-3vIypJAh.js";import"./useDescription-B4UE-M1p.js";import"./ListKeyboardDelegate-D_F26l9l.js";import"./PressResponder-BxiRPNH8.js";import"./useLocalizedStringFormatter-Dp1Z2nGk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-qcmAUM1D.js";import"./getScrollParent-CMfkxxdv.js";import"./VisuallyHidden-CFJkh_29.js";import"./x-BKCqd2ot.js";import"./createLucideIcon-zXtIRWL6.js";import"./useLocalizedStringFormatter-D_dEcD2V.js";import"./Heading-C3r0aHk-.js";import"./Button-e7FuQA8u.js";import"./Button.module-BB7N-cLd.js";import"./info-CCcA_oOV.js";import"./Popover-DQuHdZGW.js";const ge={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const he=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover"];export{n as CustomValidation,l as DS1243,p as Disabled,a as Invalid,c as MaxLengthAndShowCounter,i as Number,s as Password,t as Primary,m as ReadOnly,o as Required,d as ShowCounter,u as WithHelpPopover,he as __namedExportsOrder,ge as default};
