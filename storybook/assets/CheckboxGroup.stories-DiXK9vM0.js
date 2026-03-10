import{j as e}from"./iframe-DEr5LyL9.js";import{C as m}from"./CheckboxGroup-Dh06brKm.js";import{C as p}from"./Checkbox-2RgZuw8d.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BdNVYVS1.js";import"./utils-DwL8W83g.js";import"./clsx-B-dksMZM.js";import"./Text-DAPFiM_T.js";import"./useFocusRing-DOTEBX87.js";import"./index-DExjCakj.js";import"./index-Nw0I9830.js";import"./clsx-Ciqy0D92.js";import"./Text-BfZUAwgB.js";import"./Label-BmdasFFR.js";import"./Button-CBWCdlEK.js";import"./Hidden-NLnfrHdz.js";import"./useLabels-h5iBdAs1.js";import"./useButton-CVEcfEQG.js";import"./Dialog-ZjhlH8TX.js";import"./RSPContexts-Bn2caes7.js";import"./OverlayArrow-BzVCgUDi.js";import"./useResizeObserver-B5Vgs11W.js";import"./useControlledState-h_6fbbYP.js";import"./Collection-wSsMWtTf.js";import"./index-WpBjSl2g.js";import"./Separator-DxFfrhUf.js";import"./SelectionManager-DLCRf5Wk.js";import"./useEvent-AcHiQLhX.js";import"./scrollIntoView-CKlviFsz.js";import"./SelectionIndicator-DbLggP3S.js";import"./useDescription-DigpKdML.js";import"./ListKeyboardDelegate-WHrWx2cP.js";import"./PressResponder-BARi5h15.js";import"./useLocalizedStringFormatter-7tBmCqt2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RzHdbGF3.js";import"./getScrollParent-Cud-L_Kq.js";import"./VisuallyHidden-CwaOa1m7.js";import"./Button-BTVP098H.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-55D9ueFU.js";import"./createLucideIcon-C7-8qsjG.js";import"./x-HYwHFMJh.js";import"./Heading-DPOfFdui.js";import"./info-EDrQ4EUZ.js";import"./Popover-BBpOhvfS.js";import"./useFormValidation-DZc-MdDk.js";import"./useField-DCYWYdaM.js";import"./Form-BlMDnRx9.js";import"./check-B_4LPuF8.js";import"./useToggleState-CvAeBqbG.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
