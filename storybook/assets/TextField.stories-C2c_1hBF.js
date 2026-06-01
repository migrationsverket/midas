import{j as e}from"./iframe-t17oHKP1.js";import{T as h}from"./TextField-Dfn_kc9C.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-Bc4rbeQD.js";import"./utils-WfSaqPxO.js";import"./clsx-B-dksMZM.js";import"./FieldError-CjrPC_pn.js";import"./Text-B1toI6NE.js";import"./useFocusRing-B8_h5nqb.js";import"./index-CGLwXwU8.js";import"./index-Vs6o5933.js";import"./clsx-Ciqy0D92.js";import"./Text-BBzd2BqN.js";import"./RSPContexts-1krLgbtl.js";import"./Form-DCT3rcma.js";import"./Group-XT1qdx_4.js";import"./Input-DvaOvy8x.js";import"./Hidden-XqahJ4vg.js";import"./Button-ofA_m75k.js";import"./useLabel-CVs4fZyR.js";import"./useLabels-Bv9txMFS.js";import"./useButton-CKC-NCyU.js";import"./useTextField-q8zM5BBj.js";import"./useControlledState-CSsGgKlE.js";import"./useField-BAqScliG.js";import"./TextField.module-DdivwlC8.js";import"./Label-BaMC1zUi.js";import"./Dialog-C_pUAPT4.js";import"./OverlayArrow-C8bch5Dq.js";import"./useResizeObserver-iavVuTSL.js";import"./Collection-C_sAio25.js";import"./index-Bk8TkxO4.js";import"./Separator-BTz2ELDx.js";import"./SelectionManager-B2XzSJwl.js";import"./useEvent-BXp6EVoR.js";import"./scrollIntoView-CjKzLxJO.js";import"./SelectionIndicator-C3QJbXC7.js";import"./useDescription-DyoYJd2V.js";import"./ListKeyboardDelegate-CMyLAMym.js";import"./PressResponder-Cn5hz31u.js";import"./useLocalizedStringFormatter-BD3aVe4g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKBecmXF.js";import"./getScrollParent-KRPDa9Jf.js";import"./VisuallyHidden-CHb87xmq.js";import"./ModalOverlay-DiGcUtOF.js";import"./x-B3d1tz_Z.js";import"./createLucideIcon-Bh202RVf.js";import"./useLocalizedStringFormatter-B413oFZi.js";import"./Heading-CRmlVJHe.js";import"./Button-DBP_DFRF.js";import"./Button.module-BB7N-cLd.js";import"./info-Co7s_Gt2.js";import"./Popover-B5ZckgCp.js";const ye={title:"Components/TextField",component:h,argTypes:{type:{options:["password","text","email"],control:{type:"select"}}},args:{label:"Label",description:"Description",errorPosition:"top",size:"large",inputMode:"text"}},t={args:{defaultValue:"Text value"}},a={args:{type:"password"}},s={args:{isInvalid:!0,errorMessage:"Något blev fel"}},o={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(h,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Label",validate:r=>/^\d+$/.test(r)?!0:"Only numbers are allowed"},render:r=>e.jsxs("form",{children:[e.jsx(h,{...r,className:({isInvalid:v})=>v?"invalid":"valid"}),e.jsx("button",{type:"submit",children:"Submit"})]})},i={args:{type:"number"}},m={parameters:{docs:{description:{story:'Use `inputMode="numeric"` for numeric input without the built-in validation and increment/decrement controls of `type="number"`.'}}},args:{inputMode:"numeric"}},p={args:{isDisabled:!0},parameters:{a11y:{context:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}}},d={args:{isReadOnly:!0,value:"User input"}},c={args:{value:"I love apples",showCounter:!0}},l={args:{showCounter:!0,maxLength:50}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:r=>e.jsxs("div",{style:{height:500},"data-testid":"wrapper",children:[e.jsx(h,{...r,label:void 0,description:void 0,"aria-label":"test"}),e.jsx("div",{style:{height:100},children:"Dummy content"})]})},g={args:{...t.args,popover:{children:"An assistive text that helps the user understand the field better.","aria-label":"Mer information"}}},b={parameters:{docs:{description:{story:'This example combines type="email" with autoComplete and inputMode for format validation and an optimized keyboard for mobile devices.'}}},args:{label:"Email",type:"email",autoComplete:"email",inputMode:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
