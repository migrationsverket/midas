import{j as e}from"./iframe-CSVmyJ9R.js";import{T as g}from"./TextField-JyyX-lkQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-DFRrKeNc.js";import"./utils-CPqOETBM.js";import"./clsx-B-dksMZM.js";import"./TextField-CgT5uWqT.js";import"./FieldError-DHYVenvj.js";import"./Text-C8HgXGPu.js";import"./useFocusRing-BrPdNnBS.js";import"./index-E587h0fs.js";import"./index-CVwQ3yNk.js";import"./clsx-Ciqy0D92.js";import"./Text-BsEzx2Ek.js";import"./RSPContexts-GO5W47ky.js";import"./Form-ZrLhv48n.js";import"./useFormValidation-DspL0P0U.js";import"./Group-Drjw8Ou_.js";import"./Input-Bs3OvUXW.js";import"./Hidden-B-TeHCBv.js";import"./Button-BQXPo15e.js";import"./useLabels-D1ztbA9R.js";import"./useButton-DFFPcWTi.js";import"./useTextField-D75bFy9u.js";import"./useControlledState-DTJWCz0V.js";import"./useField-KTNK2PUR.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-B0IaRgKH.js";import"./Dialog-Sdg7eLn8.js";import"./OverlayArrow-Bgv8sbJO.js";import"./useResizeObserver-tu5o0PEw.js";import"./Collection-DgaZtCGP.js";import"./index-CdxjXi9l.js";import"./Separator-Bo8VghUH.js";import"./SelectionManager-BGeO44f6.js";import"./useEvent-qx2c1K7D.js";import"./scrollIntoView-t6kjJQiD.js";import"./SelectionIndicator-99zEWoLq.js";import"./useDescription-B4Vu6QR4.js";import"./ListKeyboardDelegate-BG1wdXY4.js";import"./PressResponder-CpYqWZpE.js";import"./useLocalizedStringFormatter-B8c5ZoQv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BYzozrC1.js";import"./VisuallyHidden-CSK4owg4.js";import"./Button-BmI8BsBm.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DjLs2VzN.js";import"./createLucideIcon-CvwfQw68.js";import"./x-CjC83yIY.js";import"./Heading-hsM_iYer.js";import"./info-ChFLJxWM.js";import"./Popover-CPobd-JO.js";const he={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
