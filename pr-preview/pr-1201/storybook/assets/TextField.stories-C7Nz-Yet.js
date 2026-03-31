import{j as e}from"./iframe-CKynqbsT.js";import{T as b}from"./TextField-zebGDcFM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-ClW1HJrM.js";import"./utils-Cz4s-P07.js";import"./clsx-B-dksMZM.js";import"./FieldError-D5ePyvQL.js";import"./Text-CFqReYPn.js";import"./useFocusRing-DW03qt76.js";import"./index-MKc-RSGl.js";import"./index-DbmjAuuR.js";import"./clsx-Ciqy0D92.js";import"./Text-CV3rC3lw.js";import"./RSPContexts-1kvrZnW_.js";import"./Form-P19_AeiU.js";import"./Group-00TIn4gD.js";import"./Input-C-G8Md4f.js";import"./Hidden-CxwF48Ci.js";import"./Button-odKdBChn.js";import"./useLabel-BScGGoXy.js";import"./useLabels-CasMb-p3.js";import"./useButton-K4roNkpf.js";import"./useTextField-CnAibDQ-.js";import"./useControlledState-CkRmHnNo.js";import"./useField-d_mLWNBx.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cj0m3eJA.js";import"./Dialog-DVM7mKIq.js";import"./OverlayArrow-D0jqam5s.js";import"./useResizeObserver-DNcvKGTB.js";import"./Collection-D_pg0gvp.js";import"./index-Cxs-RWp5.js";import"./Separator-0vZKTzuL.js";import"./SelectionManager-YoIizi1X.js";import"./useEvent-Dya9lerV.js";import"./scrollIntoView-DZna20aA.js";import"./SelectionIndicator-DGMQG1Fl.js";import"./useDescription-CppHAd8O.js";import"./ListKeyboardDelegate-CenhieDP.js";import"./PressResponder-CJ6egYRx.js";import"./useLocalizedStringFormatter-1siNxGD0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BRCICGFF.js";import"./getScrollParent-BDZEhSWz.js";import"./VisuallyHidden-BxWxnvxB.js";import"./x-CO1sdvqd.js";import"./createLucideIcon-B7xcXnKD.js";import"./useLocalizedStringFormatter-BJaowkmQ.js";import"./Heading-C555MQzz.js";import"./Button-DQDk8v-k.js";import"./Button.module-BB7N-cLd.js";import"./info-BGR9n40f.js";import"./Popover-DNkodFnc.js";const he={title:"Components/TextField",component:b,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large",inputMode:"text"}},t={args:{defaultValue:"Text value"}},a={args:{type:"password"}},s={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(b,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(b,{...r,className:({isInvalid:h})=>h?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},m={args:{isReadOnly:!0,value:"User input"}},d={args:{value:"I love apples",showCounter:!0}},l={args:{showCounter:!0,maxLength:50}},c={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(b,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},u={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},g={parameters:{docs:{description:{story:'This example combines type="email" with autoComplete and inputMode for format validation and an optimized keyboard for mobile devices.'}}},args:{label:"Email",type:"email",autoComplete:"email",inputMode:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'This example combines type="email" with autoComplete and inputMode for format validation and an optimized keyboard for mobile devices.'
      }
    }
  },
  args: {
    label: 'Email',
    type: 'email',
    autoComplete: 'email',
    inputMode: 'email'
  }
}`,...g.parameters?.docs?.source}}};const ve=["Primary","Password","Invalid","Required","CustomValidation","Number","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover","Email"];export{n as CustomValidation,c as DS1243,p as Disabled,g as Email,s as Invalid,l as MaxLengthAndShowCounter,i as Number,a as Password,t as Primary,m as ReadOnly,o as Required,d as ShowCounter,u as WithHelpPopover,ve as __namedExportsOrder,he as default};
