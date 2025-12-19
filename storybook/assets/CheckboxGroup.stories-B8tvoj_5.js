import{j as e}from"./iframe-hiMgqW0o.js";import{C as m}from"./CheckboxGroup-CvArof2J.js";import{C as p}from"./Checkbox-PuDcJOI0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CYiGGuhL.js";import"./utils-bOnY6DnA.js";import"./clsx-B-dksMZM.js";import"./Text-Cs9T2I4A.js";import"./useFocusRing-DgygcgT4.js";import"./index-EY6_MA1c.js";import"./index-CZjbkyzZ.js";import"./clsx-Ciqy0D92.js";import"./Text-BiYaIxZf.js";import"./Label-Cw4FHS5Q.js";import"./Button-Nx19MEw4.js";import"./Hidden-BwH6JGlk.js";import"./useLabels-CZOrLkCJ.js";import"./useButton-jWlGAFFg.js";import"./Dialog-CdxWOMeL.js";import"./RSPContexts-Bv08kDFB.js";import"./OverlayArrow-B2MH2h_R.js";import"./useResizeObserver-2nRjoHwy.js";import"./useControlledState-nqlfkxpV.js";import"./Collection--Cr6p3A_.js";import"./index-Bo0FTuaT.js";import"./Separator-Bz7MglOI.js";import"./SelectionManager-BMgFHoZb.js";import"./useEvent-CLzxZrGf.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-zyWPfFRK.js";import"./useDescription-BS7dus5h.js";import"./ListKeyboardDelegate-GTM4GyCw.js";import"./PressResponder-BuXRs-Y5.js";import"./useLocalizedStringFormatter-CNGHg5CX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-4zJnIxaj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BQSRSjgI.js";import"./Button-BlGZsutW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CLWDM17i.js";import"./createLucideIcon-D6WxDmvc.js";import"./x-s42iZrY-.js";import"./Heading-C4aZzm39.js";import"./info-CMNp_Gnb.js";import"./Popover-C3A9HBq_.js";import"./useFormValidation-CBe-85YS.js";import"./useField-XdbO1scp.js";import"./Form-BktoSPgT.js";import"./check-UBGezpjp.js";import"./useToggleState-D0Wnun0R.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
