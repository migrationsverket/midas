import{j as e}from"./iframe-8Cp1Y9sE.js";import{T as g}from"./TextField-BV4FJ_i2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-B8G_etEy.js";import"./utils-DlEPF17n.js";import"./useObjectRef-BvAFkytn.js";import"./clsx-B-dksMZM.js";import"./FieldError-eZOVGEUO.js";import"./Text-D3HiTtCB.js";import"./useFocusRing-CVuxSJk8.js";import"./useFocusable-B-HsSGrd.js";import"./index-CQNUcSLQ.js";import"./index-BHWdZgLR.js";import"./clsx-Ciqy0D92.js";import"./Text-Dvlujitk.js";import"./RSPContexts-jWKLjCHM.js";import"./Form-D0YVSgpe.js";import"./useFormValidation-CQuIVPML.js";import"./Group-DxyXtAiD.js";import"./Input-DxdD0EpX.js";import"./Hidden-BnGBIuvq.js";import"./Button-CqMXkvRN.js";import"./number-DfkVkf0F.js";import"./useLabels-CjRcy63q.js";import"./useButton-J5AmJIR7.js";import"./useTextField-DbSmU1Kw.js";import"./useControlledState-DUF8qyUE.js";import"./useField-Baz6LKsn.js";import"./TextField.module-DdivwlC8.js";import"./Label-orMAHA-y.js";import"./Dialog-CZoFL8MM.js";import"./OverlayArrow-Cf2TuAv-.js";import"./useResizeObserver-B3a9AYPm.js";import"./Collection-DueA55zD.js";import"./CollectionBuilder-BKRTkR5P.js";import"./index-Cds1W7-y.js";import"./Separator-B4IDBh6R.js";import"./SelectionManager-ClNl5D9k.js";import"./useEvent-BWoUQZjL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DjxxUBwE.js";import"./useDescription-BOEa2vWJ.js";import"./ListKeyboardDelegate-D5IX5CD1.js";import"./PressResponder-DeEiw1Gx.js";import"./useLocalizedStringFormatter-D6BMfFml.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CxqOZvIB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CBA6IUNJ.js";import"./Button-CS2QwEY0.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BDGZG5jK.js";import"./createLucideIcon-BJQalJwk.js";import"./x-7Ctj6V0e.js";import"./Heading-D7HlTSWz.js";import"./info-9zpSoT-N.js";import"./Popover-BD9QDUSP.js";const ye={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Se=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover"];export{n as CustomValidation,l as DS1243,p as Disabled,a as Invalid,c as MaxLengthAndShowCounter,i as Number,s as Password,t as Primary,m as ReadOnly,o as Required,d as ShowCounter,u as WithHelpPopover,Se as __namedExportsOrder,ye as default};
