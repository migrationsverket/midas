import{j as e}from"./iframe-DXvST5Z4.js";import{T as g}from"./TextField-C8A1I3LU.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-9waoIFzb.js";import"./utils-C7o3oNWQ.js";import"./useObjectRef-CtV_wNCy.js";import"./clsx-B-dksMZM.js";import"./FieldError-Vgbr6qFP.js";import"./Text-DSf5Rh4t.js";import"./useFocusRing-C6PpwOyg.js";import"./useFocusable-CcTIrmj7.js";import"./index-BSKCIuFZ.js";import"./index-DpgVVg9m.js";import"./clsx-Ciqy0D92.js";import"./Text-6UKv5af0.js";import"./RSPContexts-BWCV_dnI.js";import"./Form-COydQ7wv.js";import"./useFormValidation-IHOBEsDK.js";import"./Group-CHgoLV5M.js";import"./Input-CYUfSanE.js";import"./Hidden-CWijdCRp.js";import"./Button-CS5zO-gt.js";import"./number-DfkVkf0F.js";import"./useLabels-B-ai_w_R.js";import"./useButton-Ci2Hi0-B.js";import"./useTextField-ZxFNhkCT.js";import"./useControlledState-CUr3wY18.js";import"./useField-DQVM1v-x.js";import"./TextField.module-DdivwlC8.js";import"./Label-Dxl4-KMf.js";import"./Dialog-CMxuyZUx.js";import"./OverlayArrow-CUZtccMf.js";import"./useResizeObserver-saNrXExm.js";import"./Collection-DRMDRsvi.js";import"./CollectionBuilder-BWvoDEMo.js";import"./index-BmzGzd_D.js";import"./Separator-Crnp6GLu.js";import"./SelectionManager-ClVRgQnB.js";import"./useEvent-WiQdTJ77.js";import"./scrollIntoView-DGoemtfW.js";import"./SelectionIndicator-2Q3RLIt1.js";import"./useDescription-eOAvzRvb.js";import"./ListKeyboardDelegate-7buxBpHF.js";import"./PressResponder-DTxgLEge.js";import"./useLocalizedStringFormatter-CD11qPfL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DT1Z9xLE.js";import"./getScrollParent-Cb93IwoN.js";import"./VisuallyHidden-yddiJwiQ.js";import"./Button-CyUV4N7K.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DiZlQPZS.js";import"./createLucideIcon-BQeZNnV0.js";import"./x-DPBUFtnb.js";import"./Heading-l0jQkvv9.js";import"./info-b_BswnH4.js";import"./Popover-do22Rs5p.js";const ye={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
