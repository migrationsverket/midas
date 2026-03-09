import{j as e}from"./iframe-CcSZizfH.js";import{C as m}from"./CheckboxGroup-PTfcVGAp.js";import{C as p}from"./Checkbox-Zhb0wDLw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cco9xgcd.js";import"./utils-C8tqShtU.js";import"./clsx-B-dksMZM.js";import"./Text-JtTDVkrn.js";import"./useFocusRing-BV9r26_i.js";import"./index-DDpsSQPb.js";import"./index-BLMh0pMH.js";import"./clsx-Ciqy0D92.js";import"./Text-CD36Kyta.js";import"./Label-BkuVXHgp.js";import"./Button-AvjZljXr.js";import"./Hidden-DB8IdLZR.js";import"./useLabels-B5_NTSEx.js";import"./useButton-CZz_VRDR.js";import"./Dialog-BASDs-UC.js";import"./RSPContexts-Qm85TxzY.js";import"./OverlayArrow-DQ2lhK0n.js";import"./useResizeObserver-CBbmuXbv.js";import"./useControlledState-Cjje-kqG.js";import"./Collection-DE1aY-u9.js";import"./index-Ct1je5wM.js";import"./Separator--mz551Ul.js";import"./SelectionManager-CMDEmKzQ.js";import"./useEvent-DS9IArxR.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DEZcm3gk.js";import"./useDescription-BOky4ElQ.js";import"./ListKeyboardDelegate-ByyUBW-Y.js";import"./PressResponder-B1ShGaSV.js";import"./useLocalizedStringFormatter-VCKLQeQ3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BEETce1I.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DtOJH9kD.js";import"./Button-u3SbUu_V.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CYEHmnz_.js";import"./createLucideIcon-qYjCz2jy.js";import"./x-B1Gc0sgF.js";import"./Heading-2dQov4Rq.js";import"./info-D9fE9Nux.js";import"./Popover-CrrHlO-9.js";import"./useFormValidation-DLSKiRYE.js";import"./useField-B3CUWj3-.js";import"./Form-Dz6sYPKN.js";import"./check-CkcOQG3W.js";import"./useToggleState-E0JKR-xh.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
