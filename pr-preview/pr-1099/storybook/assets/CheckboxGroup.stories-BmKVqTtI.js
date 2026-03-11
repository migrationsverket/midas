import{j as e}from"./iframe-DnruN8Hi.js";import{C as m}from"./CheckboxGroup-C65bvotG.js";import{C as p}from"./Checkbox-BSEHoJ2x.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CR8f1e8f.js";import"./utils-BX8UrSvi.js";import"./clsx-B-dksMZM.js";import"./Text-DCNJHhrE.js";import"./useFocusRing-CIcdEl5_.js";import"./index-pkhbjMNc.js";import"./index-D9PIboWj.js";import"./clsx-Ciqy0D92.js";import"./Text-CtjP_E78.js";import"./Label-DVYppc8e.js";import"./Button-DqyDElzI.js";import"./Hidden-BPKBd4kU.js";import"./useLabels-CTW32vH1.js";import"./useButton-vQ4A074D.js";import"./Dialog-BWtCZrJw.js";import"./RSPContexts-BxvIfT03.js";import"./OverlayArrow-Cb9dHmex.js";import"./useResizeObserver-BPPmjVNZ.js";import"./useControlledState-BjH9byFR.js";import"./Collection-DGrZmIuz.js";import"./index-DR5KhNk9.js";import"./Separator-BjG1YRRW.js";import"./SelectionManager-B7BjE4GX.js";import"./useEvent-YY42qbpM.js";import"./scrollIntoView-BcsYkCDN.js";import"./SelectionIndicator-_pZBO5h1.js";import"./useDescription-C5Ac6ktb.js";import"./ListKeyboardDelegate-BvW4EyKb.js";import"./PressResponder-WSTnp2SS.js";import"./useLocalizedStringFormatter-CClWoe23.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGaWSl1a.js";import"./getScrollParent-iZijDBuV.js";import"./VisuallyHidden-G4dK4wUP.js";import"./Button-DqZTSrsn.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-y9TFNf60.js";import"./createLucideIcon-Bmpp_QRu.js";import"./x-DJw_asIB.js";import"./Heading-CtJEqhzp.js";import"./info-DJH8vqDN.js";import"./Popover-BVVElmy_.js";import"./useFormValidation-CDj0Szad.js";import"./useField-pLHgFybq.js";import"./Form-CdmVZ8o7.js";import"./check-unCgwiez.js";import"./useToggleState-CdPXTkOR.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
