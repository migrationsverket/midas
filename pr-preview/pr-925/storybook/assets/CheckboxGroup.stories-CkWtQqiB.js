import{j as e}from"./iframe-CcFj61hi.js";import{C as m}from"./CheckboxGroup-BJLwKBjP.js";import{C as p}from"./Checkbox-fk8wtKOw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BbKWR-P3.js";import"./utils-CsHqKOjh.js";import"./clsx-B-dksMZM.js";import"./Text-CVt-e_rr.js";import"./useFocusRing-tven7JmU.js";import"./index-DGWwOE3x.js";import"./index-BNjYms5q.js";import"./clsx-Ciqy0D92.js";import"./Text-BqVsEr9P.js";import"./Label-CIxdkuaZ.js";import"./Button-B1O3Yrk6.js";import"./Hidden-meMQGPd4.js";import"./useLabels-BR7Zi-G6.js";import"./useButton-6rhH5hF9.js";import"./Dialog-D4CFCaRg.js";import"./RSPContexts-DH4UiXRZ.js";import"./OverlayArrow-DuLm_AeX.js";import"./useResizeObserver-elSf9-E4.js";import"./useControlledState-CS68R5UU.js";import"./Collection-TTOn1B46.js";import"./index-DU0eoAI4.js";import"./Separator-DCFolOPa.js";import"./SelectionManager-CBeYtRWI.js";import"./useEvent-z1bYF1OT.js";import"./scrollIntoView-BAiEh8sy.js";import"./SelectionIndicator-CsFMiP1E.js";import"./useDescription-DcDlBbEU.js";import"./ListKeyboardDelegate-CP17FQUZ.js";import"./PressResponder-CcYMnq3L.js";import"./useLocalizedStringFormatter-Ciz81QXa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-2W37j7Q_.js";import"./VisuallyHidden-5KJu7kOB.js";import"./Button-DCIYWzuo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-MF-hbWH5.js";import"./createLucideIcon-pE-zvx_b.js";import"./x-Pt19ZRNN.js";import"./Heading-BCcfcevL.js";import"./info-CFlLveLQ.js";import"./Popover-D9kDRdmu.js";import"./useFormValidation-BUtm3X4O.js";import"./useField-oSSv-SCK.js";import"./Form-CQm0xKb3.js";import"./check-D5AbUs6y.js";import"./useToggleState-C2jd5qyM.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
