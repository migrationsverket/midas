import{j as e}from"./iframe-C-K27eAl.js";import{C as m}from"./CheckboxGroup--_EqFrDC.js";import{C as p}from"./Checkbox-CeCDsFgO.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BgyRuz1D.js";import"./utils-CJaZGGf7.js";import"./clsx-B-dksMZM.js";import"./Text-CDT_NlP5.js";import"./useFocusRing-DxSA2Sop.js";import"./index-BKKwvpcz.js";import"./index-DBCMJ7yJ.js";import"./clsx-Ciqy0D92.js";import"./Text-BSrzc_20.js";import"./Label-CskIca_U.js";import"./Button-BT6WGe3E.js";import"./Hidden-Vwjx6V0Q.js";import"./useLabels-bQBwCpKg.js";import"./useButton-UoBuyatd.js";import"./Dialog-Ws6tUo5c.js";import"./RSPContexts-BEdbbOnm.js";import"./OverlayArrow-DsVxBLVn.js";import"./useResizeObserver-dFxkq4bC.js";import"./useControlledState-BS7oDD3M.js";import"./Collection-BB-uLGwY.js";import"./index-Dm9DVMB2.js";import"./Separator-De9YM2Zt.js";import"./SelectionManager-Xw2EnXx2.js";import"./useEvent-BZmViZJ-.js";import"./scrollIntoView-DCPl_J-b.js";import"./SelectionIndicator-zsTHTAds.js";import"./useDescription-xQJDPJMa.js";import"./ListKeyboardDelegate-Dy1D5xdS.js";import"./PressResponder-7pDQ6t4z.js";import"./useLocalizedStringFormatter-Cnb01dil.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-2g1vnqBv.js";import"./getScrollParent-DeiG1Qzx.js";import"./VisuallyHidden-u6B1l6x2.js";import"./x-BOs9pbax.js";import"./createLucideIcon-3jo47RrT.js";import"./useLocalizedStringFormatter-CVaM3I0e.js";import"./Heading-Bop2F2Rg.js";import"./Button-BIatrZTr.js";import"./Button.module-BB7N-cLd.js";import"./info-83jj1lSj.js";import"./Popover-C9MSxNZ2.js";import"./Form-CLe3G_DV.js";import"./useField-FtvPERgc.js";import"./check-Cbg_QcCC.js";import"./useToggleState-DrLLh-3c.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
