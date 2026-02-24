import{j as e}from"./iframe-AKYLQdCk.js";import{T as g}from"./TextField-CkaoxqrC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-CX0di7cp.js";import"./utils-CwZ2LlQC.js";import"./useObjectRef-C1ZIljv5.js";import"./clsx-B-dksMZM.js";import"./FieldError-1z-h802J.js";import"./Text-Bn-0i142.js";import"./useFocusRing-DeUGGThd.js";import"./useFocusable-CTBL5lAM.js";import"./index-Bv5J06q2.js";import"./index-DH60KLGl.js";import"./clsx-Ciqy0D92.js";import"./Text-BwqwIWKs.js";import"./RSPContexts-DNK6gf8O.js";import"./Form-BMSgrWJv.js";import"./useFormValidation-Co9GPZZz.js";import"./Group-DAno6NEz.js";import"./Input-CBcpayOf.js";import"./Hidden-BaKtfQaU.js";import"./Button-DFNriVHD.js";import"./number-DfkVkf0F.js";import"./useLabels-DwGxuFNn.js";import"./useButton-I-1qHytb.js";import"./useTextField-D-NwfPmo.js";import"./useControlledState-CbVlXO0V.js";import"./useField-z_fBkLit.js";import"./TextField.module-Ck-VtJ3k.js";import"./Label-BtlAKR85.js";import"./Dialog-DnF6LW7B.js";import"./OverlayArrow-UNbNlQ7l.js";import"./useResizeObserver-BtktBhU6.js";import"./Collection-3ml14O5b.js";import"./CollectionBuilder-looNesjp.js";import"./index-Blg7ZGdj.js";import"./Separator-BiHOUpOh.js";import"./SelectionManager-BucojQKK.js";import"./useEvent-C0_2xWEm.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DO0fqmNQ.js";import"./useDescription-CBo5mlE7.js";import"./ListKeyboardDelegate-CiGgAhDI.js";import"./PressResponder-CgZvu0Io.js";import"./useLocalizedStringFormatter-BLFXCP_p.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3Ti8HS8f.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BjOFadh9.js";import"./Button-DI1yGBch.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CAqHm93j.js";import"./createLucideIcon-DaHUv1OG.js";import"./x-D3UjfguG.js";import"./Heading-D6naq-Us.js";import"./info-BvEcYorg.js";import"./Popover-NjCRRiyO.js";const ye={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
