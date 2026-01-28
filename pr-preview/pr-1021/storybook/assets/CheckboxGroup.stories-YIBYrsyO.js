import{j as e}from"./iframe-aMoIVDeR.js";import{C as m}from"./CheckboxGroup-Bi5-LvKW.js";import{C as p}from"./Checkbox-kR-iWFxN.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D2QhEaby.js";import"./utils-CFxRfzzc.js";import"./clsx-B-dksMZM.js";import"./Text-p3-kB6K4.js";import"./useFocusRing-DlrmdZPs.js";import"./index-DBBzqi9Z.js";import"./index-srgIOSWI.js";import"./clsx-Ciqy0D92.js";import"./Text-BbmTTQ6z.js";import"./Label-Cr-RgogP.js";import"./Button-DiQ7-ULm.js";import"./Hidden-B6fG37sh.js";import"./useLabels-akov2npX.js";import"./useButton-CkIEgbAm.js";import"./Dialog-BZgDU0MB.js";import"./RSPContexts-CsPbAcKW.js";import"./OverlayArrow-DjyVFsBr.js";import"./useResizeObserver-Ch37w8wK.js";import"./useControlledState-CJ6hso62.js";import"./Collection-BRRSJjSx.js";import"./index-B-dZTbiu.js";import"./Separator-B1yutxcT.js";import"./SelectionManager-DfJKODKa.js";import"./useEvent-C22glenQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ZXABDpq1.js";import"./useDescription-DuoNJ0JY.js";import"./ListKeyboardDelegate-t-hrFPYX.js";import"./PressResponder-DWmFqZGG.js";import"./useLocalizedStringFormatter-A5HFr0Ya.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-1e2Ye0X0.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DdIi_TPZ.js";import"./Button-CD86P0d9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-L8R7Fq.js";import"./createLucideIcon-Bt3zLjO1.js";import"./x-7JaraCCs.js";import"./Heading-BfhUreNf.js";import"./info-Bfm3_TnE.js";import"./Popover-BwGpQo_H.js";import"./useFormValidation-BsUJefcp.js";import"./useField-OOJAedGL.js";import"./Form-vpgZxQyd.js";import"./check-DMb1vxPn.js";import"./useToggleState-2XUYBxOG.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
