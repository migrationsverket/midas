import{j as e}from"./iframe-DTmnx-OS.js";import{T as g}from"./TextField-DR8cnQ3R.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-CTebVYlY.js";import"./utils-BLrbyb-5.js";import"./clsx-B-dksMZM.js";import"./TextField-C0qn_sLV.js";import"./FieldError-BW0t1--z.js";import"./Text-CAzG3hrs.js";import"./useFocusRing-D7pmxvpH.js";import"./index-Dh5clyrJ.js";import"./index-ZMXHPIeh.js";import"./clsx-Ciqy0D92.js";import"./Text-Rd2kwoRq.js";import"./RSPContexts-C1Iyv0kP.js";import"./Form-DHoA3APl.js";import"./useFormValidation-CS2KaDSt.js";import"./Group-B8xM3kTU.js";import"./Input-C8HcS5AT.js";import"./Hidden-BtM1I5LI.js";import"./Button-D84lT1wU.js";import"./useLabels-BU6BY9ES.js";import"./useButton-BfYlvgAS.js";import"./useTextField-Df2qcw2I.js";import"./useControlledState-B80F7Llz.js";import"./useField-C6pIHBN6.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-D5tU1J5b.js";import"./Dialog-D7Xm6J16.js";import"./OverlayArrow-Mvs2w6w8.js";import"./useResizeObserver-B5MS2sn1.js";import"./Collection-CSCL41v3.js";import"./index-CSjg3Rnn.js";import"./Separator-Cc0lRCB9.js";import"./SelectionManager-BfTO8Xj5.js";import"./useEvent-CONhqoCx.js";import"./scrollIntoView-C54iyz8_.js";import"./SelectionIndicator-LNrCvCoH.js";import"./useDescription-P3-GHz2i.js";import"./ListKeyboardDelegate-BaMH29P7.js";import"./PressResponder-DYsVoB2A.js";import"./useLocalizedStringFormatter-CZmcKBND.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-rJ8oXYh7.js";import"./VisuallyHidden-DTo6UeCi.js";import"./Button-BR1AZgyV.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DJL53Hew.js";import"./createLucideIcon-Q1IuAoPr.js";import"./x-BHyqnA-p.js";import"./Heading-CM3TnOvL.js";import"./info-DyFU30up.js";import"./Popover-B4ytbGoo.js";const he={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
