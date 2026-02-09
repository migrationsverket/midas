import{j as e}from"./iframe-CDlGoVBX.js";import{T as g}from"./TextField-9iLmVbQj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-DI1ecJHV.js";import"./utils-DK0QJ5bq.js";import"./clsx-B-dksMZM.js";import"./TextField-c6Sz-paG.js";import"./FieldError-BTnAzmQ0.js";import"./Text-gvo1OKGS.js";import"./useFocusRing-GV8a7-dB.js";import"./index-CClkoolm.js";import"./index-D9EgTrn3.js";import"./clsx-Ciqy0D92.js";import"./Text-Cflgqxbo.js";import"./RSPContexts-omBJ6Sgu.js";import"./Form-DTFKHJWV.js";import"./useFormValidation-C3JGr8K4.js";import"./Group-BYFKWapm.js";import"./Input-H5icjH4o.js";import"./Hidden-D3g4_ydn.js";import"./Button-ChHi1CmX.js";import"./useLabels-Bnvu_zoZ.js";import"./useButton-CEiQ-7P6.js";import"./useTextField-DnEnbiaG.js";import"./useControlledState-CcD6TCI7.js";import"./useField-C4i4gm-f.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DnbVg9hf.js";import"./Dialog-ChLjSgrj.js";import"./OverlayArrow-DodgMuZn.js";import"./useResizeObserver-D1875uj1.js";import"./Collection-C0k2ascB.js";import"./index-D25xMYNc.js";import"./Separator-Cbp4e2aL.js";import"./SelectionManager-Dgm03e0j.js";import"./useEvent-BCnLZYbk.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B2Q5v_NP.js";import"./useDescription-DUfOP2Oy.js";import"./ListKeyboardDelegate-Cd18ptaN.js";import"./PressResponder-CwsbJqYe.js";import"./useLocalizedStringFormatter-FToakcQL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RKI4vDG-.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BoTcuaXb.js";import"./Button-bhz0d5b_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9wBWCji.js";import"./createLucideIcon-DnI-ftFI.js";import"./x-DzdEbKW-.js";import"./Heading-Z24TZx0I.js";import"./info-DDIYqxGr.js";import"./Popover-wobZ9HHk.js";const be={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ve=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover"];export{n as CustomValidation,l as DS1243,p as Disabled,a as Invalid,c as MaxLengthAndShowCounter,i as Number,s as Password,t as Primary,m as ReadOnly,o as Required,d as ShowCounter,u as WithHelpPopover,ve as __namedExportsOrder,be as default};
