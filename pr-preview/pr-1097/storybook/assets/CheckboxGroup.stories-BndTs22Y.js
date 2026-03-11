import{j as e}from"./iframe-BULWFXB5.js";import{C as m}from"./CheckboxGroup-lMd6AHZb.js";import{C as p}from"./Checkbox-k7mZfrEv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C4OBGurV.js";import"./utils-BypaegC2.js";import"./clsx-B-dksMZM.js";import"./Text--sxnixpG.js";import"./useFocusRing-BQjr63hK.js";import"./index-Bq_n1hpv.js";import"./index-CB-9tr3l.js";import"./clsx-Ciqy0D92.js";import"./Text-DuTR7tq0.js";import"./Label-C4aZ8uIP.js";import"./Button-DlgELQyz.js";import"./Hidden-iwjRZV6c.js";import"./useLabels-CYw97kiM.js";import"./useButton-CjhJKsMh.js";import"./Dialog-DgAdDjCQ.js";import"./RSPContexts-p83zhHcS.js";import"./OverlayArrow-D6Wvffju.js";import"./useResizeObserver-ccEFS9WT.js";import"./useControlledState-BW5BQp7c.js";import"./Collection-DBptuMbt.js";import"./index-HIf1MFds.js";import"./Separator-Dj4DC63K.js";import"./SelectionManager-Dv0G0Tlv.js";import"./useEvent-P8B_Gb_H.js";import"./scrollIntoView-DAGd27OM.js";import"./SelectionIndicator-bTKIb-VQ.js";import"./useDescription-DGIlMGbp.js";import"./ListKeyboardDelegate-CcolMQIW.js";import"./PressResponder-foLuIAeD.js";import"./useLocalizedStringFormatter-Eb1GNK_U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCQf3Ezu.js";import"./getScrollParent-BKMesRpb.js";import"./VisuallyHidden-D8sOhpgS.js";import"./Button-DuCjaiZE.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B5QzfwUv.js";import"./createLucideIcon-Ch4Yrygv.js";import"./x-oHK0ncrQ.js";import"./Heading-SCHH97H1.js";import"./info-BiZBGm_G.js";import"./Popover-D7OHo3Lj.js";import"./useFormValidation-BnhRbTsd.js";import"./useField-Da10gebg.js";import"./Form-GTo_fkTX.js";import"./check-DpQFVNoC.js";import"./useToggleState-DlXLfDmY.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
