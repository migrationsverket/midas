import{j as e}from"./iframe-BOj75HPM.js";import{C as m}from"./CheckboxGroup-D5L3pXM_.js";import{C as p}from"./Checkbox-COwFsKdb.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dn9sUL3A.js";import"./utils-DiwTvY5r.js";import"./clsx-B-dksMZM.js";import"./Text-KcBRsMfX.js";import"./useFocusRing-BvD21wMG.js";import"./index-tbjRw6nF.js";import"./index-DauoXUb-.js";import"./clsx-Ciqy0D92.js";import"./Text-y5UsFp3a.js";import"./Label-CSDBl07K.js";import"./Button-D1stJH9t.js";import"./Hidden-DX_ysAyq.js";import"./useLabels-BszWTWtA.js";import"./useButton-rMDDSnSZ.js";import"./Dialog-Bzd92NLg.js";import"./RSPContexts-Dd30z721.js";import"./OverlayArrow-CdSn3l12.js";import"./useResizeObserver-B0Vk_8hR.js";import"./useControlledState-7gBIOf2A.js";import"./Collection-C9umSaxr.js";import"./index-CPEUDevc.js";import"./Separator-Bo63Wbjo.js";import"./SelectionManager-DKvFADB7.js";import"./useEvent-CEhlIHx6.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BJEhgAnj.js";import"./useDescription-CWm0ggy2.js";import"./ListKeyboardDelegate-BswjCwMk.js";import"./PressResponder-Il8IXh95.js";import"./useLocalizedStringFormatter-C6wF7Mfo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-aYlr6XzC.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRoRIbBJ.js";import"./Modal-B86JywTt.js";import"./Button-CG3q9yng.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-iBqt7kI1.js";import"./createLucideIcon-BmLW6X-c.js";import"./x-DHOL_7dr.js";import"./Heading-j4po0ei9.js";import"./info-Dn4DwaoR.js";import"./Popover-DTMgA__S.js";import"./useFormValidation-CR9InUTF.js";import"./useField-Dj0XVRBs.js";import"./Form-CWKKuFQR.js";import"./check-BHG7kA68.js";import"./useToggleState-CDTDeBh8.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
