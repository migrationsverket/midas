import{j as e}from"./iframe-CdnIBaQS.js";import{C as m}from"./CheckboxGroup-CBdfspLy.js";import{C as p}from"./Checkbox-BQXjb4Sw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BBRMXocd.js";import"./utils-BGCpfP4A.js";import"./clsx-B-dksMZM.js";import"./Text-63jd4RMf.js";import"./useFocusRing-B26JkukS.js";import"./index-Bwdat55Z.js";import"./index-CjlGMBtV.js";import"./clsx-Ciqy0D92.js";import"./Text-C8pnIfab.js";import"./Label-CythG5IS.js";import"./Button-BDoCnzr3.js";import"./Hidden-CJwsmdM9.js";import"./useLabels-DTSKd8To.js";import"./useButton-Cggmn0OU.js";import"./Dialog-m1tY80DB.js";import"./RSPContexts-BMRzhgaP.js";import"./OverlayArrow-Cgr1kfwB.js";import"./useResizeObserver-G2Ku3nSv.js";import"./useControlledState-BEJy-MfI.js";import"./Collection-DoWuqJ9n.js";import"./index-m2mBe-xg.js";import"./Separator-C-WC961N.js";import"./SelectionManager--54cfGjY.js";import"./useEvent-BaBw_pLs.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BZfVsEb-.js";import"./useDescription-DeseOWEz.js";import"./ListKeyboardDelegate-DfcwVj2G.js";import"./PressResponder-D05sv4-3.js";import"./useLocalizedStringFormatter-Cr8jltsa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTM8Mo62.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D-XS7clw.js";import"./Button-DHAriHpj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CVE7y_HC.js";import"./createLucideIcon-KCWMli3b.js";import"./x-DD461jHE.js";import"./Heading-CiOBs6Yz.js";import"./info-DzD3qv-_.js";import"./Popover-S04rwLpq.js";import"./useFormValidation-CiZggeAv.js";import"./useField-B4Vh62Mt.js";import"./Form-B1aKtSg3.js";import"./check-DoYXfMZv.js";import"./useToggleState-Cnm_II5z.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
