import{j as e}from"./iframe-DewzuY2Y.js";import{T as g}from"./TextField-B8U3h3MO.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-CLPXHTlU.js";import"./utils-B9eCRML0.js";import"./useObjectRef-D02ig_Er.js";import"./clsx-B-dksMZM.js";import"./FieldError-BAoeLCIl.js";import"./Text-CF2XopxT.js";import"./useFocusRing-Bu9BKNcc.js";import"./useFocusable-D4F7j4yX.js";import"./index-CGxbGCj-.js";import"./index-YF-MvE2f.js";import"./clsx-Ciqy0D92.js";import"./Text-Bab9BnDj.js";import"./RSPContexts-D0MwBZX-.js";import"./Form-CAi5wZg8.js";import"./useFormValidation-lSb8KKAi.js";import"./Group-DE7woVmW.js";import"./Input-DoZtnacf.js";import"./Hidden-DQi6D_EL.js";import"./Button-B263f3iS.js";import"./number-DfkVkf0F.js";import"./useLabels-DqUr0jsw.js";import"./useButton-fhI4OoXn.js";import"./useTextField-Cgf_BJYx.js";import"./useControlledState-DKrm3iPF.js";import"./useField-DsMSm3hR.js";import"./TextField.module-Ck-VtJ3k.js";import"./Label-w_0hTJsi.js";import"./Dialog-DZPrV3vM.js";import"./OverlayArrow-CrdlvdTX.js";import"./useResizeObserver-DguKAatW.js";import"./Collection-DfNZS0Iw.js";import"./CollectionBuilder-B-bwIOQU.js";import"./index-DtnZ5gia.js";import"./Separator-C_C3xmzB.js";import"./SelectionManager-C13R8ogi.js";import"./useEvent-Co8FlwDh.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cf1hCYbC.js";import"./useDescription-DZHnrBI1.js";import"./ListKeyboardDelegate-CsRH7wZv.js";import"./PressResponder-D7jcaL-x.js";import"./useLocalizedStringFormatter-7896F-u-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Db_m75M3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BcUmonei.js";import"./Button-DrlbWmQB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BU0D5dPi.js";import"./createLucideIcon-BpgdMRa6.js";import"./x-Dt71Rz9m.js";import"./Heading-CBTsyhRB.js";import"./info-BWpzFBYc.js";import"./Popover-B3LGZ1cV.js";const ye={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
