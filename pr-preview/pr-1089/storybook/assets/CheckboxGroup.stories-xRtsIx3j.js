import{j as e}from"./iframe-DyBiNx2q.js";import{C as m}from"./CheckboxGroup-DJbioms5.js";import{C as p}from"./Checkbox-Do0DZTIV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-SXTa4faB.js";import"./utils-B5dKaEwK.js";import"./clsx-B-dksMZM.js";import"./Text-CvUxrlBC.js";import"./useFocusRing-wn7y19LG.js";import"./index-Buskhl-p.js";import"./index-4ysC-kQu.js";import"./clsx-Ciqy0D92.js";import"./Text-ByDcSGxm.js";import"./Label-BVpcOUgL.js";import"./Button-BJJCCEqe.js";import"./Hidden-Cb-0RftD.js";import"./useLabels-CLX48ijd.js";import"./useButton-CHwzBhtJ.js";import"./Dialog-DeFpsIVJ.js";import"./RSPContexts-D9jYRv23.js";import"./OverlayArrow-BugJ5fhj.js";import"./useResizeObserver-DxlR8MyY.js";import"./useControlledState-Q0-sVA1t.js";import"./Collection-WQ9upkmY.js";import"./index-DjNeHl00.js";import"./Separator-DZgmdvZl.js";import"./SelectionManager-wh13-yOm.js";import"./useEvent-BM6vajM-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BEhCheiQ.js";import"./useDescription-BoU-4n_-.js";import"./ListKeyboardDelegate-UyVUUCf3.js";import"./PressResponder-CWPPNM0Z.js";import"./useLocalizedStringFormatter-CjE048XI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dh51ywHK.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-rSrQGzQd.js";import"./Button-DowFNeCQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-bUUJR2W9.js";import"./createLucideIcon-C_ZTugQV.js";import"./x-DRhGVBqX.js";import"./Heading-0MkOW6aC.js";import"./info-Cd4G9P1x.js";import"./Popover-B60IDK7w.js";import"./useFormValidation-CBFd9wPD.js";import"./useField-DmnvQ3tf.js";import"./Form-CV4_UMc2.js";import"./check-DTQnXmjY.js";import"./useToggleState-CwLk1YYU.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
