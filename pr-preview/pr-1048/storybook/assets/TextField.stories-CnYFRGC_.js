import{j as e}from"./iframe-BooRIkJT.js";import{T as g}from"./TextField-CvlE70Tl.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-DWgLDj4L.js";import"./utils-744b8K7d.js";import"./useObjectRef-C69ZsrXw.js";import"./clsx-B-dksMZM.js";import"./FieldError-B9tJyWw2.js";import"./Text-BN2_aXJR.js";import"./useFocusRing-zUWJjsLd.js";import"./useFocusable-7IfmtKEg.js";import"./index-DuCxnP6U.js";import"./index-DKsPf0BO.js";import"./clsx-Ciqy0D92.js";import"./Text-EWpD-_jr.js";import"./RSPContexts-DW-eESO9.js";import"./Form-lu2e_-CI.js";import"./useFormValidation-C73jfdEu.js";import"./Group-CSJbziv0.js";import"./Input-oa8hKKVZ.js";import"./Hidden-KVVrjxXu.js";import"./Button-BqahGGDP.js";import"./number-DfkVkf0F.js";import"./useLabels-DEfOhxO2.js";import"./useButton-Dvy7NbEr.js";import"./useTextField-CPZmhmLY.js";import"./useControlledState-BubjIjDe.js";import"./useField-DaTFMrNe.js";import"./TextField.module-DdivwlC8.js";import"./Label-DgdpX6TQ.js";import"./Dialog-BTC-_GDP.js";import"./OverlayArrow-gMNeP8g9.js";import"./useResizeObserver-PuSMNmf3.js";import"./Collection-DURp8c-8.js";import"./CollectionBuilder-ljaGCZ4i.js";import"./index-B__T8vyM.js";import"./Separator-C0Ght5Sg.js";import"./SelectionManager-D1jwCzet.js";import"./useEvent-DMEFFZ8b.js";import"./scrollIntoView-BCltoq3s.js";import"./SelectionIndicator-C9RAn77b.js";import"./useDescription-yfp6cPtE.js";import"./ListKeyboardDelegate-CE4VHnG8.js";import"./PressResponder-G8aGvnJM.js";import"./useLocalizedStringFormatter-DhPS3rKr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2SbqVTa.js";import"./getScrollParent-GNvtAy2u.js";import"./VisuallyHidden-DQnrbbQ6.js";import"./Button-t6IXiYo0.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-hCEexaXZ.js";import"./createLucideIcon-CtYgVG1u.js";import"./x-Cy8qabpY.js";import"./Heading-Cm_OjdTp.js";import"./info-CLONA53z.js";import"./Popover-wdM7J1SK.js";const ye={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
