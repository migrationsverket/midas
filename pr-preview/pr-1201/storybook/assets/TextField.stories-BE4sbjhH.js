import{j as e}from"./iframe-DTOqtRPp.js";import{T as b}from"./TextField-CH-T6nen.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-BNnpv89N.js";import"./utils-CQz-p0Ar.js";import"./clsx-B-dksMZM.js";import"./FieldError-B6hQSiJl.js";import"./Text-CIhwCa8A.js";import"./useFocusRing-jHCCwEPg.js";import"./index-ChMjBSia.js";import"./index-CEAST5hf.js";import"./clsx-Ciqy0D92.js";import"./Text-BaCnxKWQ.js";import"./RSPContexts-mX6bJ66o.js";import"./Form-Cjvz3og7.js";import"./Group-DP8-mIsy.js";import"./Input-hXck_yNU.js";import"./Hidden-BopZmEN9.js";import"./Button-C4kKXxPS.js";import"./useLabel-BQ4cknfe.js";import"./useLabels-w95u50Wj.js";import"./useButton-sObWSv1u.js";import"./useTextField-DblHJwAe.js";import"./useControlledState-DPZt2fnR.js";import"./useField-BbLqM0Ws.js";import"./TextField.module-DdivwlC8.js";import"./Label-BIH1lme6.js";import"./Dialog-BfxVY9xJ.js";import"./OverlayArrow-DoKRte8S.js";import"./useResizeObserver-D5u7eLvf.js";import"./Collection-cLo4pqcm.js";import"./index-UprO8IQs.js";import"./Separator-pVj1NlpJ.js";import"./SelectionManager-Cx-QXgqi.js";import"./useEvent-CLOuM3cb.js";import"./scrollIntoView-Bampsmpi.js";import"./SelectionIndicator-Dt0VxfU8.js";import"./useDescription-D7gs14Ar.js";import"./ListKeyboardDelegate-BU9aP5mI.js";import"./PressResponder-CLSsawdq.js";import"./useLocalizedStringFormatter-BUk3tKu_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CT07G7Xc.js";import"./getScrollParent-lUA4pL69.js";import"./VisuallyHidden-DwgxUjwt.js";import"./x-CrpZHpR_.js";import"./createLucideIcon-DdZg643M.js";import"./useLocalizedStringFormatter-CV8JNlf3.js";import"./Heading-6SEs4vL1.js";import"./Button-CDDDIvIj.js";import"./Button.module-BB7N-cLd.js";import"./info-CRDDNG_O.js";import"./Popover-bsOC4AYZ.js";const ve={title:"Components/TextField",component:b,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large",inputMode:"text"}},t={args:{defaultValue:"Text value"}},a={args:{type:"password"}},s={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(b,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(b,{...r,className:({isInvalid:v})=>v?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},m={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},p={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(b,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},g={args:{autoComplete:"given-name"}},h={args:{autoComplete:"lastName"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Text value'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Något blev fel'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: 'User input'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    autoComplete: 'given-name'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    autoComplete: 'lastName'
  }
}`,...h.parameters?.docs?.source}}};const ye=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover","TemoraryTestingAutoCompleteWithGivenName","TemoraryTestingAutoCompleteWithLastName"];export{n as CustomValidation,l as DS1243,m as Disabled,s as Invalid,c as MaxLengthAndShowCounter,i as Number,a as Password,t as Primary,p as ReadOnly,o as Required,d as ShowCounter,g as TemoraryTestingAutoCompleteWithGivenName,h as TemoraryTestingAutoCompleteWithLastName,u as WithHelpPopover,ye as __namedExportsOrder,ve as default};
