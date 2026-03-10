import{j as e}from"./iframe-BMeVz6y-.js";import{C as m}from"./CheckboxGroup-BbuIOBvj.js";import{C as p}from"./Checkbox-ChkZnIHA.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B9b-doZT.js";import"./utils-gLrvz57I.js";import"./clsx-B-dksMZM.js";import"./Text-BobX77Rp.js";import"./useFocusRing-B3A74r94.js";import"./index-C78FzeUG.js";import"./index-DuQDy4Im.js";import"./clsx-Ciqy0D92.js";import"./Text-D9ERza-j.js";import"./Label-vtL9TIlw.js";import"./Button-YuHrdvqU.js";import"./Hidden-BtcHHrEj.js";import"./useLabels-DU1760XI.js";import"./useButton-BfWVW3lI.js";import"./Dialog-KWaqysSJ.js";import"./RSPContexts-CcyIB1J1.js";import"./OverlayArrow-BHYP-nw2.js";import"./useResizeObserver-CkJy-d8S.js";import"./useControlledState-Mz74w--R.js";import"./Collection-Bheqxq41.js";import"./index-BPu_xHQW.js";import"./Separator-DruktKNL.js";import"./SelectionManager-D27pdCve.js";import"./useEvent-BuIlv2vt.js";import"./scrollIntoView-xPfDbdJG.js";import"./SelectionIndicator-Boxf7bWG.js";import"./useDescription-BIdxB60Q.js";import"./ListKeyboardDelegate-DGVlHrIu.js";import"./PressResponder-CUPqxTwQ.js";import"./useLocalizedStringFormatter-B6BaJT_D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkkeSDjz.js";import"./getScrollParent-olEr1uYA.js";import"./VisuallyHidden-DGyUcRul.js";import"./Button-DkV7wLYz.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BThYc7xn.js";import"./createLucideIcon-DWjVVpun.js";import"./x-Bqp_P532.js";import"./Heading-CYpAETgL.js";import"./info-CSrZSnjJ.js";import"./Popover-D0SMKZhw.js";import"./useFormValidation-B6ysVh97.js";import"./useField-9rt5-gOQ.js";import"./Form-Bfg6c9lw.js";import"./check-CnxbIUgj.js";import"./useToggleState-B4RFCjFe.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const pr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,pr as __namedExportsOrder,nr as default};
