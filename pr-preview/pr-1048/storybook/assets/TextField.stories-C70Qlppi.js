import{j as e}from"./iframe-Chekwr6M.js";import{T as g}from"./TextField-Ch_uiyuf.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-ctjBT7tv.js";import"./utils-Dj64B4Ck.js";import"./clsx-B-dksMZM.js";import"./TextField-DF3UR0qa.js";import"./FieldError-DCB-eHPb.js";import"./Text-d5-92hiR.js";import"./useFocusRing-CYwfk9cE.js";import"./index-D2-ul2QH.js";import"./index-BiGwtwNm.js";import"./clsx-Ciqy0D92.js";import"./Text-CNbIZlGx.js";import"./RSPContexts-B-5HPXFu.js";import"./Form-C1k2uELU.js";import"./useFormValidation-DohLj8tG.js";import"./Group-BPxDsLqx.js";import"./Input-DBCMd8rL.js";import"./Hidden-Dy--Tx0W.js";import"./Button-Z4awFVTj.js";import"./number-DfkVkf0F.js";import"./useLabels-DDXNXFW7.js";import"./useButton-D4rnmHPz.js";import"./useTextField-BPdk6fHk.js";import"./useControlledState-CLkXqHsM.js";import"./useField-CXgMMZV1.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CIhWk8XG.js";import"./Dialog-BkMCqRU4.js";import"./OverlayArrow-C_kKr4TA.js";import"./useResizeObserver-Dp5qH922.js";import"./Collection-C8suguH5.js";import"./index-DBBfNPs6.js";import"./Separator-BsKQl79r.js";import"./SelectionManager-CCLf1y3R.js";import"./useEvent-Du-C-SwK.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5UMCGiW.js";import"./useDescription-BaU05DyX.js";import"./ListKeyboardDelegate-C97Cy8pc.js";import"./PressResponder-jE3E7TsH.js";import"./useLocalizedStringFormatter-PB5CwfUm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-mznppo_U.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CfeHWJtp.js";import"./Modal-B37h07YR.js";import"./Button-D5FNdohA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BFGhiOXi.js";import"./createLucideIcon-CPHdlOig.js";import"./x-DVt_hLRk.js";import"./Heading-CaO4mVhn.js";import"./info-DnwbVtMC.js";import"./Popover-BCPIG4gw.js";const xe={title:"Components/TextField",component:g,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large"}},t={args:{defaultValue:"Text value"}},s={args:{type:"password"}},a={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(g,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},c={args:{showCounter:!0,maxLength:50}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(g,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ye=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover"];export{n as CustomValidation,l as DS1243,p as Disabled,a as Invalid,c as MaxLengthAndShowCounter,i as Number,s as Password,t as Primary,m as ReadOnly,o as Required,d as ShowCounter,u as WithHelpPopover,ye as __namedExportsOrder,xe as default};
