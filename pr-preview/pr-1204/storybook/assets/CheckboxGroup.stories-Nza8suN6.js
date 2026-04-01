import{j as e}from"./iframe-TDsHiw9c.js";import{C as m}from"./CheckboxGroup-DkTXDsaP.js";import{C as p}from"./Checkbox-DfyQNT3M.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D00axG9h.js";import"./utils-DFK3ftG0.js";import"./clsx-B-dksMZM.js";import"./Text-BDcQTCXw.js";import"./useFocusRing-D-BQBv-v.js";import"./index-CWZOiNf1.js";import"./index-Cblya1pl.js";import"./clsx-Ciqy0D92.js";import"./Text-BTMF7VME.js";import"./Label-BwnMJc7J.js";import"./Button-BZ0QUIXr.js";import"./Hidden-aVRRAvvd.js";import"./useLabel-De4TtVrY.js";import"./useLabels-z_MUf0yQ.js";import"./useButton-Be-gBZL5.js";import"./Dialog-qMjiv4bh.js";import"./RSPContexts-CLirld8T.js";import"./OverlayArrow-CYgQE5Xt.js";import"./useResizeObserver-CQI0GqMi.js";import"./useControlledState-BONMuXu4.js";import"./Collection-C4PnsAov.js";import"./index-Bo4e0FZp.js";import"./Separator-DXywdoRS.js";import"./SelectionManager-D8wsNBur.js";import"./useEvent-DTTf9n44.js";import"./scrollIntoView-BIDXO_TJ.js";import"./SelectionIndicator-DNnBNT-w.js";import"./useDescription-DSTFIc6A.js";import"./ListKeyboardDelegate-BKyE-KHP.js";import"./PressResponder-nJAdhEbF.js";import"./useLocalizedStringFormatter-Da5BvhPv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DaCaqu8C.js";import"./getScrollParent-_JGFcv3G.js";import"./VisuallyHidden-CpvkWfyr.js";import"./x-DlwJGxMz.js";import"./createLucideIcon-Diz4XGXj.js";import"./useLocalizedStringFormatter-DxUswB7b.js";import"./Heading-XOk9SPrR.js";import"./Button-BFdMqc_h.js";import"./Button.module-BB7N-cLd.js";import"./info-DnXOmueI.js";import"./Popover-b6qpYjCO.js";import"./Form-DrGj5S3q.js";import"./useField-Djaz5aQj.js";import"./check-B1b286Wz.js";import"./useToggleState-PcwM832p.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
