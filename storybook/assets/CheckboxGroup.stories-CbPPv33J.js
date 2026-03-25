import{j as e}from"./iframe-Bau-Vb-U.js";import{C as m}from"./CheckboxGroup-CpCjQaGt.js";import{C as p}from"./Checkbox-TeBkJLef.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C4-I9rBv.js";import"./utils-DzohMAvG.js";import"./clsx-B-dksMZM.js";import"./Text-CCFXQNDk.js";import"./useFocusRing-DBI5s8iT.js";import"./index-BwaX680v.js";import"./index-dRKp6bPQ.js";import"./clsx-Ciqy0D92.js";import"./Text-CnUTPFtZ.js";import"./Label-D8PnmA3G.js";import"./Button-nyoR5AiN.js";import"./Hidden-ygOXplTE.js";import"./useLabels-DfW1moGm.js";import"./useButton-QnWp_Okq.js";import"./Dialog-DiJkuoOJ.js";import"./RSPContexts-Ci7lzjgK.js";import"./OverlayArrow-Cfo-rVtX.js";import"./useResizeObserver-kloavf3_.js";import"./useControlledState-B-7lzpTq.js";import"./Collection-zEnqGodL.js";import"./index-OEhMN9pE.js";import"./Separator-C5e4qUB-.js";import"./SelectionManager-fg2ccwC3.js";import"./useEvent-CVCmvDjB.js";import"./scrollIntoView-DtuGpqr3.js";import"./SelectionIndicator-9wEoKMBQ.js";import"./useDescription-kPv3UG3t.js";import"./ListKeyboardDelegate-qWSthOhk.js";import"./PressResponder-n2bcd3qr.js";import"./useLocalizedStringFormatter-D2MeKTbB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CaN3JYX9.js";import"./getScrollParent-CNAv_Fjp.js";import"./VisuallyHidden-HpJjECW7.js";import"./x-Bn5zNUwZ.js";import"./createLucideIcon-Di4Tit0m.js";import"./useLocalizedStringFormatter-CNmU83eC.js";import"./Heading-BIPTKynB.js";import"./Button-BCWlvYFn.js";import"./Button.module-BB7N-cLd.js";import"./info-B811M17s.js";import"./Popover-DZhOWdrR.js";import"./Form-Ci16kZpr.js";import"./useField-CoKhaZ76.js";import"./check-elsZFRem.js";import"./useToggleState-D_NfFSRq.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL'
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: ({
    ...args
  }) => {
    return <CheckboxGroup {...args}>
        <Checkbox value='banana'>Banana</Checkbox>
        <Checkbox value='apple'>Apple</Checkbox>
        <div>I'm not a checkbox</div>
      </CheckboxGroup>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
