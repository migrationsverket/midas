import{j as e}from"./iframe-CtFwdAsv.js";import{T as g}from"./TextField-wl_EUFGX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-D0SN0VnJ.js";import"./utils-v3QsXCFb.js";import"./clsx-B-dksMZM.js";import"./FieldError-rC39neWl.js";import"./Text-DLLk5-WP.js";import"./useFocusRing-4dXyLk97.js";import"./index-CC8QKcxH.js";import"./index-B04nzdf1.js";import"./clsx-Ciqy0D92.js";import"./Text-CbKa99gG.js";import"./RSPContexts-0m4AhG_r.js";import"./Form-yWD9DB3c.js";import"./useFormValidation-B9JoZcd_.js";import"./Group-Dm251RrR.js";import"./Input-cLfDtPcn.js";import"./Hidden-DVSOiNkA.js";import"./Button-Dsas9bQI.js";import"./number-DfkVkf0F.js";import"./useLabels-Ot2JOOvi.js";import"./useButton-pKf2Kj0y.js";import"./useTextField-CSI2cFpL.js";import"./useControlledState-CWjJjGF9.js";import"./useField-C2a_Lo9C.js";import"./TextField.module-Cm6797Xw.js";import"./Label-D6FRgveb.js";import"./Dialog-lO9NJCnF.js";import"./OverlayArrow-D_3BhxPL.js";import"./useResizeObserver-DLhsAarq.js";import"./Collection-ClpHBUlT.js";import"./index-Cl36apJ0.js";import"./Separator-s5a5IZMN.js";import"./SelectionManager-BYG4l7zL.js";import"./useEvent-cGdcjq2p.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CGJoHFxL.js";import"./useDescription-ByveFpkP.js";import"./ListKeyboardDelegate-CIuyyYw2.js";import"./PressResponder-ukHD2BbP.js";import"./useLocalizedStringFormatter-BBunPQfy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DV27w9Rl.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-rVLj1Hba.js";import"./Modal-DMsjUhVx.js";import"./Button-zyqmdcUk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYNQKoGb.js";import"./createLucideIcon-DtbaAKiS.js";import"./x-CZS7rfMM.js";import"./Heading-D42QPCss.js";import"./info-Bd14-v8m.js";import"./Popover-BnsNwADp.js";const ve={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const xe=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover"];export{n as CustomValidation,l as DS1243,p as Disabled,a as Invalid,c as MaxLengthAndShowCounter,i as Number,s as Password,t as Primary,m as ReadOnly,o as Required,d as ShowCounter,u as WithHelpPopover,xe as __namedExportsOrder,ve as default};
