import{j as e}from"./iframe-yRPWKz3A.js";import{T as g}from"./TextField-CvQVJLzY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-9WrqddWN.js";import"./utils-YVdcHFiv.js";import"./clsx-B-dksMZM.js";import"./FieldError-DMHHwpAd.js";import"./Text-BN91Y8yX.js";import"./useFocusRing-CAbobd4s.js";import"./index-CcWiq_3n.js";import"./index-DUJFKGcA.js";import"./clsx-Ciqy0D92.js";import"./Text-LxP77sjg.js";import"./RSPContexts-BcvAwuF9.js";import"./Form-FdfKyhwb.js";import"./useFormValidation-DBCFIZZo.js";import"./Group-DaKGGlpg.js";import"./Input-C98jFa-e.js";import"./Hidden-DZj0yzJG.js";import"./Button-D8bYImzz.js";import"./number-DfkVkf0F.js";import"./useLabels-Xwis0UQD.js";import"./useButton-BMOjGRCO.js";import"./useTextField-wm1SAiAm.js";import"./useControlledState-BarJv6Wp.js";import"./useField-301n7V83.js";import"./TextField.module-Dhscz2t0.js";import"./Label-DDCbekVq.js";import"./Dialog-DzRcsit3.js";import"./OverlayArrow-DuflyPmw.js";import"./useResizeObserver-mx3OnYIW.js";import"./Collection-B8SkfpOT.js";import"./index-DBHRQTL_.js";import"./Separator-BmT152mA.js";import"./SelectionManager-B85cEwAE.js";import"./useEvent-a-O8nmXP.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DmIxpJkr.js";import"./useDescription-Bug5IgMM.js";import"./ListKeyboardDelegate-B9EpQ450.js";import"./PressResponder-Dw11mD8a.js";import"./useLocalizedStringFormatter-jogrdBwj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B2wNpKo7.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cc0Z01Ry.js";import"./Modal-Bsfxv6lD.js";import"./Button-DGlNCwfb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8EuLi5lS.js";import"./createLucideIcon-Cf0XVHZS.js";import"./x-BKX7ip5H.js";import"./Heading-8u8ti_cc.js";import"./info-j9mLo7tP.js";import"./Popover-Mp6YIYJU.js";const ve={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
