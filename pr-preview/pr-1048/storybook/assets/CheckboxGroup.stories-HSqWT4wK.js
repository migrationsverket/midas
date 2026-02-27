import{j as e}from"./iframe-D7a0roTE.js";import{C as m}from"./CheckboxGroup-BCFnUI8t.js";import{C as p}from"./Checkbox-B3O9fat-.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CcwNjMdG.js";import"./utils-CCwC5od5.js";import"./clsx-B-dksMZM.js";import"./Text-BeZ98S-S.js";import"./useFocusRing-CFRP2Jek.js";import"./index-CFLLbIUX.js";import"./index-Bcz-F3t-.js";import"./clsx-Ciqy0D92.js";import"./Text-BQJnC-MG.js";import"./Label-DCOiPmtW.js";import"./Button-202_c7Iv.js";import"./Hidden-Dy39TreI.js";import"./useLabels-BtRp1y_K.js";import"./useButton-DiS7UUja.js";import"./Dialog-Q6kvsWpt.js";import"./RSPContexts-CZ_mWjdj.js";import"./OverlayArrow-kD9LOTQD.js";import"./useResizeObserver-BVF-O22x.js";import"./useControlledState-DDhJysn8.js";import"./Collection-D2cuxciY.js";import"./index-CRYr5dw0.js";import"./Separator-jEsBjNUK.js";import"./SelectionManager-DtNgJa0N.js";import"./useEvent-BLyKonF-.js";import"./scrollIntoView-DNIYTqEF.js";import"./SelectionIndicator-BU_YSj6V.js";import"./useDescription-3cPSrQCV.js";import"./ListKeyboardDelegate-Dw3xad8c.js";import"./PressResponder-hfgqwsy-.js";import"./useLocalizedStringFormatter-e3ysiM8J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BncEy6IE.js";import"./getScrollParent-DOj-Lfm1.js";import"./VisuallyHidden-C3QcPrAB.js";import"./Button-BmkKd0hD.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CzDArdEs.js";import"./createLucideIcon-CpMQKadj.js";import"./x-DA_mepw-.js";import"./Heading-BeKmFSrO.js";import"./info-B1BIdFOO.js";import"./Popover-3kbYKwYt.js";import"./useFormValidation-CFJsNuhs.js";import"./useField-sPhfvWpo.js";import"./Form-Do6u_iIQ.js";import"./check-OCIEVSo1.js";import"./useToggleState-DN2f_JZ8.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
