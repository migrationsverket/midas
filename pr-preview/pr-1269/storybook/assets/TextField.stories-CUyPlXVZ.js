import{j as e}from"./iframe-zmdm5LWO.js";import{T as h}from"./TextField-BZhr8UwO.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-CmU4q7IK.js";import"./utils-BVXhqey2.js";import"./clsx-B-dksMZM.js";import"./FieldError-CnGNBTtl.js";import"./Text-C_A67KfE.js";import"./useFocusRing-ChdwpxNy.js";import"./index-CR9Wusv4.js";import"./index-BM2_5E3m.js";import"./clsx-Ciqy0D92.js";import"./Text-BlbFrX8Z.js";import"./RSPContexts-CkA1USMd.js";import"./Form-B9squnXu.js";import"./Group-BfrZXSfh.js";import"./Input-C28jpw0n.js";import"./Hidden-Da0JYuUZ.js";import"./Button-CJHqtIe5.js";import"./useLabel-Di2CB_YG.js";import"./useLabels-Co4DVdbJ.js";import"./useButton-BIbblWcf.js";import"./useTextField-DFZmybEF.js";import"./useControlledState-CPsjL82m.js";import"./useField-TGoSKSzA.js";import"./TextField.module-DdivwlC8.js";import"./Label-DzCqChbE.js";import"./Dialog-DBdMj1h1.js";import"./OverlayArrow-ZJg9Y93d.js";import"./useResizeObserver-M4b8JNbB.js";import"./Collection-B_xTn3lN.js";import"./index-D_c3Fzu0.js";import"./Separator-CQQaiTiT.js";import"./SelectionManager-wVErokbN.js";import"./useEvent-xez8_YkI.js";import"./scrollIntoView-QLDgtXAW.js";import"./SelectionIndicator-32SJlHNX.js";import"./useDescription-rHa26S1A.js";import"./ListKeyboardDelegate-CRUYtTHH.js";import"./PressResponder-DQgjA9_y.js";import"./useLocalizedStringFormatter-LEYk1ZVN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTUHhIU3.js";import"./getScrollParent-YKNs88UL.js";import"./VisuallyHidden-DeZC0Ok1.js";import"./ModalOverlay-BhtOmyBA.js";import"./x-XVyRqWEu.js";import"./createLucideIcon-BWu7CyXu.js";import"./useLocalizedStringFormatter-Crt7pDpL.js";import"./Heading-vsfnRndb.js";import"./Button-BYmNnQBF.js";import"./Button.module-BB7N-cLd.js";import"./info-DeAVHKcj.js";import"./Popover-Dmb00BHz.js";const ye={title:"Components/TextField",component:h,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large",inputMode:"text"}},t={args:{defaultValue:"Text value"}},a={args:{type:"password"}},s={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(h,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(h,{...r,className:({isInvalid:v})=>v?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},m={parameters:{docs:{description:{story:'Use `inputMode="numeric"` for numeric input without the built-in validation and increment/decrement controls of `type="number"`.'}}},args:{inputMode:"numeric"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},d={args:{isReadOnly:!0,value:"User input"}},c={args:{value:"I love apples",showCounter:!0}},l={args:{showCounter:!0,maxLength:50}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(h,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},g={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},b={parameters:{docs:{description:{story:'This example combines type="email" with autoComplete and inputMode for format validation and an optimized keyboard for mobile devices.'}}},args:{label:"Email",type:"email",autoComplete:"email",inputMode:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      description: {
        story: 'Use \`inputMode="numeric"\` for numeric input without the built-in validation and increment/decrement controls of \`type="number"\`.'
      }
    }
  },
  args: {
    inputMode: 'numeric'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    value: 'User input'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'I love apples',
    showCounter: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showCounter: true,
    maxLength: 50
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    popover: {
      children: 'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information'
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const fe=["Primary","Password","Invalid","Required","CustomValidation","Number","Numeric","Disabled","ReadOnly","ShowCounter","MaxLengthAndShowCounter","DS1243","WithHelpPopover","Email"];export{n as CustomValidation,u as DS1243,p as Disabled,b as Email,s as Invalid,l as MaxLengthAndShowCounter,i as Number,m as Numeric,a as Password,t as Primary,d as ReadOnly,o as Required,c as ShowCounter,g as WithHelpPopover,fe as __namedExportsOrder,ye as default};
