import{j as e}from"./iframe-qS8p8Yj8.js";import{T as g}from"./TextField-1k0_kFWw.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-C8jFCC70.js";import"./utils-CLxZ6_kQ.js";import"./useObjectRef-C0Y2IBqc.js";import"./clsx-B-dksMZM.js";import"./FieldError-C6jT-PXD.js";import"./Text-ClZ-RuRz.js";import"./useFocusRing-CdiqOQ6d.js";import"./useFocusable-C1cH2sYE.js";import"./index-Dkst7HIG.js";import"./index-D29fhoqb.js";import"./clsx-Ciqy0D92.js";import"./Text-ByM0Af-l.js";import"./RSPContexts-lPk0mMUN.js";import"./Form-r98TiEr6.js";import"./useFormValidation-qBecLUWh.js";import"./Group-SAyaxgPb.js";import"./Input-JCIW9yVg.js";import"./Hidden-mOYAz_FQ.js";import"./Button-DimkExxE.js";import"./number-DfkVkf0F.js";import"./useLabels-CutYc3RI.js";import"./useButton-4It9SdDz.js";import"./useTextField-DIUwoXuf.js";import"./useControlledState-CazLd_oJ.js";import"./useField-fUevUNIW.js";import"./TextField.module-DdivwlC8.js";import"./Label-DxGYUE9Q.js";import"./Dialog-DS7W0Wny.js";import"./OverlayArrow-BnrdSYrK.js";import"./useResizeObserver-Dh8rmeMA.js";import"./Collection-BpTyFAxE.js";import"./CollectionBuilder-Bit_wJez.js";import"./index-CWnYM0ky.js";import"./Separator-afGYKTLK.js";import"./SelectionManager-VxFMphYm.js";import"./useEvent-V2R5wKyi.js";import"./scrollIntoView-DK04Y_7e.js";import"./SelectionIndicator-BzEbHyoW.js";import"./useDescription-DGHlAMqD.js";import"./ListKeyboardDelegate-DVXQn_pi.js";import"./PressResponder-CEI1d1fj.js";import"./useLocalizedStringFormatter-TI3MlKMg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-SnzFsxjM.js";import"./getScrollParent-faTxr7gT.js";import"./VisuallyHidden-oxQkvabd.js";import"./Button-B3ExRFXj.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CYia6YQs.js";import"./createLucideIcon-C52rh-_w.js";import"./x-DvfJYKu-.js";import"./Heading-oJVkiPMA.js";import"./info-BnzI4QuK.js";import"./Popover-GZATagMF.js";const ye={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
