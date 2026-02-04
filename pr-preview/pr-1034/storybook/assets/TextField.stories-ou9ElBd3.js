import{j as e}from"./iframe-Cs23SNnM.js";import{T as g}from"./TextField-zk9d0drk.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-B20c46rn.js";import"./utils-C2_5pI3u.js";import"./clsx-B-dksMZM.js";import"./TextField-Dq_Rojuh.js";import"./FieldError-B4JZATSQ.js";import"./Text-BDa847Zj.js";import"./useFocusRing-DZKbXbQf.js";import"./index-B6ChyHFT.js";import"./index-lqer093p.js";import"./clsx-Ciqy0D92.js";import"./Text-CyM4GXds.js";import"./RSPContexts-DaT_svkY.js";import"./Form-CVu0dRDh.js";import"./useFormValidation-jHVQBzvy.js";import"./Group-D5LCNvKt.js";import"./Input-DmBjsAvr.js";import"./Hidden-lOkM-Rk2.js";import"./Button-CXOOs0ZW.js";import"./useLabels-RZtTtySY.js";import"./useButton-CSZehrgP.js";import"./useTextField-ChuvFLJ6.js";import"./useControlledState-BY7I6-dG.js";import"./useField-QHKuD7kq.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DEw2-4Bz.js";import"./Dialog-DnU-KzCJ.js";import"./OverlayArrow-BN9INqYv.js";import"./useResizeObserver-CqpeR5GJ.js";import"./Collection-BHf1D4jH.js";import"./index-BTAsETmW.js";import"./Separator-ChO5U5E4.js";import"./SelectionManager-kFiYZswY.js";import"./useEvent-DER49hg5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cc3mSVfG.js";import"./useDescription-DCoi52oS.js";import"./ListKeyboardDelegate-Cy4sz5Tt.js";import"./PressResponder-CnMFxEty.js";import"./useLocalizedStringFormatter-CzEFj0TX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DsrxlH0c.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BbktJI4p.js";import"./Button-BCDZMRqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BjD1Xbww.js";import"./createLucideIcon-Cm58SIEr.js";import"./x-DXozcBPC.js";import"./Heading-FizbWtiG.js";import"./info-Dw1Q7jRF.js";import"./Popover-Dove32Y-.js";const be={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ve=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover"];export{n as CustomValidation,l as DS1243,p as Disabled,a as Invalid,c as MaxLengthAndShowCounter,i as Number,s as Password,t as Primary,m as ReadOnly,o as Required,d as ShowCounter,u as WithHelpPopover,ve as __namedExportsOrder,be as default};
