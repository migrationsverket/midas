import{j as e}from"./iframe-BTWMpxaw.js";import{T as g}from"./TextField-BYteN3HE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-CSj2jSzW.js";import"./utils-C3lx9DX-.js";import"./useObjectRef-CQ0wbjO8.js";import"./clsx-B-dksMZM.js";import"./FieldError-CapQEyCl.js";import"./Text-AwkOgpRf.js";import"./useFocusRing-D_JbvpzL.js";import"./useFocusable-DroJBjVA.js";import"./index-BcRiH35A.js";import"./index-BRI9nXbv.js";import"./clsx-Ciqy0D92.js";import"./Text-XH9vDvn5.js";import"./RSPContexts-CgrWNIj5.js";import"./Form-D7825GY6.js";import"./useFormValidation-5p1jo9Ru.js";import"./Group-C-m-Yvp5.js";import"./Input-CLyTT6kk.js";import"./Hidden-BQDZ_Wq1.js";import"./Button-CAgd8sZK.js";import"./number-DfkVkf0F.js";import"./useLabels-Qrrl1VgB.js";import"./useButton-BrhFQfMI.js";import"./useTextField-BZgdgsNE.js";import"./useControlledState-CRbmL-GT.js";import"./useField-WQlJsGjc.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bgsnsyln.js";import"./Dialog-Chll4O9z.js";import"./OverlayArrow-D84MR2MX.js";import"./useResizeObserver-CffUVSIR.js";import"./Collection-B_b2ppV7.js";import"./CollectionBuilder-BLs7TzFW.js";import"./index-BQuq6Vq-.js";import"./Separator-Oy-LEqKf.js";import"./SelectionManager-jBp3qQ-Y.js";import"./useEvent-BLDn_e3Q.js";import"./scrollIntoView-Q7175gbP.js";import"./SelectionIndicator-Db6mgl97.js";import"./useDescription-DVX_PCr4.js";import"./ListKeyboardDelegate-COwUALGh.js";import"./PressResponder-CTGZQkus.js";import"./useLocalizedStringFormatter-CCWRThSu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DlxJxUyB.js";import"./getScrollParent-DRdm8xm-.js";import"./VisuallyHidden-BZ8ApsH8.js";import"./Button-B7QanPQQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BCu2gt1L.js";import"./createLucideIcon-D3byJH39.js";import"./x-CZObjwQc.js";import"./Heading-CyoT9rFN.js";import"./info-C-coDdpf.js";import"./Popover-DDU0MFJR.js";const ye={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
