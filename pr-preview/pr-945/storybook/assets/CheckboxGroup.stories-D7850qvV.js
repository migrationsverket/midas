import{j as e}from"./iframe-qwwZM-tE.js";import{C as m}from"./CheckboxGroup-B8Qy_D7w.js";import{C as p}from"./Checkbox-CjCTtCHT.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C6s0Sgvs.js";import"./utils-CE0AWIm4.js";import"./clsx-B-dksMZM.js";import"./Text-CjDFFRcJ.js";import"./useFocusRing-DVEbG0UH.js";import"./index-CUgyb0mk.js";import"./index-B0QkTLut.js";import"./clsx-Ciqy0D92.js";import"./Text-C5yJLujA.js";import"./Label-CnT1N-ZH.js";import"./Button-LMtqtR6P.js";import"./Hidden-nIEH3jLZ.js";import"./useLabels-ygVPKbju.js";import"./useButton-BG0hBHNu.js";import"./Dialog-Cwr08cpl.js";import"./RSPContexts-DxRUGpXJ.js";import"./OverlayArrow-DQ541iri.js";import"./useResizeObserver-Ksii_YAo.js";import"./useControlledState-B1hjZKLN.js";import"./Collection-BsSMrTsh.js";import"./index-gjAEOKfl.js";import"./Separator-Ch2diD89.js";import"./SelectionManager-D0h4RoSA.js";import"./useEvent-BKT-lAgU.js";import"./scrollIntoView-D6_LqhvJ.js";import"./SelectionIndicator-fFcChirv.js";import"./useDescription-txzcDlxe.js";import"./ListKeyboardDelegate-ZTI_j1GM.js";import"./PressResponder-DS5LOVuL.js";import"./useLocalizedStringFormatter-C0HEB4Rj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-vP69cu3n.js";import"./VisuallyHidden-DuWmqszT.js";import"./Button-D_l512WF.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BG4Ct8V8.js";import"./createLucideIcon-DdrXPP-v.js";import"./x-dLBUgrRX.js";import"./Heading-DtQJHb5j.js";import"./info-DSfQR85G.js";import"./Popover-R1R2hb2u.js";import"./useFormValidation-Z7RuVEfw.js";import"./useField-CrXgM-h6.js";import"./Form-34dXS4qq.js";import"./check-CFwkP_Cm.js";import"./useToggleState-BZAYERNx.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
