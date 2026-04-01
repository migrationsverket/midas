import{j as e}from"./iframe-BcVWnjiq.js";import{C as m}from"./CheckboxGroup-Bb_TjLn2.js";import{C as p}from"./Checkbox-7TaD0QSp.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-RgIIuEHk.js";import"./utils-BHfrMThS.js";import"./clsx-B-dksMZM.js";import"./Text-Cf3_Dpr9.js";import"./useFocusRing-Cr43T2xz.js";import"./index-Bf6BaTQp.js";import"./index-lTGn0qSi.js";import"./clsx-Ciqy0D92.js";import"./Text-aEiNTvlh.js";import"./Label-fjbbzU9N.js";import"./Button-X_O9ad-3.js";import"./Hidden-B1e2ot4t.js";import"./useLabel-CdT-X_Un.js";import"./useLabels-H_5_YSkD.js";import"./useButton-CJEr5rsL.js";import"./Dialog-DhZAIFeO.js";import"./RSPContexts-DwUzfd_N.js";import"./OverlayArrow-BhulQ_tx.js";import"./useResizeObserver-Ck_GSI3T.js";import"./useControlledState-BeIEKiqF.js";import"./Collection-BGh5CUSO.js";import"./index-DAeJWrLP.js";import"./Separator-DctYVSTw.js";import"./SelectionManager-y-xBPN-9.js";import"./useEvent-CtZW5Qvu.js";import"./scrollIntoView-CeKJisls.js";import"./SelectionIndicator-BxX3y6YC.js";import"./useDescription-cF75q-Hq.js";import"./ListKeyboardDelegate-C98MwhU0.js";import"./PressResponder-DN1lj42U.js";import"./useLocalizedStringFormatter-BzQp9VXy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYSUuiTn.js";import"./getScrollParent-dSYNY5k0.js";import"./VisuallyHidden-DQYzeIJf.js";import"./x-B_mInUxe.js";import"./createLucideIcon-DKRKL4qZ.js";import"./useLocalizedStringFormatter-BGPexIt5.js";import"./Heading-DzN1JGdH.js";import"./Button-aD9_wGcx.js";import"./Button.module-BB7N-cLd.js";import"./info-ELtIys0V.js";import"./Popover-Yn8LFCCD.js";import"./Form-Bki39RKU.js";import"./useField-Dhrmud0j.js";import"./check-CsvvCU4m.js";import"./useToggleState-xvRUJtpF.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
