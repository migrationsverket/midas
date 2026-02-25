import{j as e}from"./iframe-pduEcsSH.js";import{C as m}from"./CheckboxGroup-tlWtrLKw.js";import{C as p}from"./Checkbox-4RsUh7Rv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-NJ_dGOmM.js";import"./utils-BDr4Ozea.js";import"./clsx-B-dksMZM.js";import"./Text-rxoULlv-.js";import"./useFocusRing-DIwubJgO.js";import"./index-CLoMZda8.js";import"./index-BcjOI7az.js";import"./clsx-Ciqy0D92.js";import"./Text-CSwEFBIi.js";import"./Label-DjLBvEdr.js";import"./Button-C9Zkv-mX.js";import"./Hidden-CcVqblB0.js";import"./useLabels-vBTL4yFU.js";import"./useButton-CrWzEdIJ.js";import"./Dialog-CadUvqs2.js";import"./RSPContexts-sVFmam6L.js";import"./OverlayArrow-DhmkHveD.js";import"./useResizeObserver-CPrsykkS.js";import"./useControlledState-BOnL6wJ7.js";import"./Collection-kYIQkrfn.js";import"./index-BhxNLflr.js";import"./Separator-0deFmAkJ.js";import"./SelectionManager-mJ_b45K5.js";import"./useEvent-DIbok-p1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DSmbPReq.js";import"./useDescription-DMdZFyiC.js";import"./ListKeyboardDelegate-Bhxs3C87.js";import"./PressResponder-GpeM64gV.js";import"./useLocalizedStringFormatter-DvjpYU0E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DAAIuDXT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-g_-Wgf1Q.js";import"./Button-ZdIQo3Zg.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CWZjMemu.js";import"./createLucideIcon-CqNy4haF.js";import"./x-BXHSIKq2.js";import"./Heading-BBhzrPee.js";import"./info-D0OJy1pr.js";import"./Popover-CoYaOIFS.js";import"./useFormValidation-DEYOuSXO.js";import"./useField-C535uo8a.js";import"./Form-CsCBj_Pu.js";import"./check-DA-ISeKA.js";import"./useToggleState-BPpZTMCO.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
