import{j as e}from"./iframe-BtMwOEiM.js";import{C as m}from"./CheckboxGroup-CpRtcMEa.js";import{C as p}from"./Checkbox-DsyIqB0T.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D_5OLq9A.js";import"./utils-BoP-oma8.js";import"./clsx-B-dksMZM.js";import"./Text-BIvd2lWW.js";import"./useFocusRing-Cle0ZmwX.js";import"./index-BBjSt18z.js";import"./index-YFvqANbg.js";import"./clsx-Ciqy0D92.js";import"./Text-Blq4VDAx.js";import"./Label-DY5S-zxp.js";import"./Button-DpK-_iud.js";import"./Hidden-4SQq7b_R.js";import"./useLabels-6uMyjyEX.js";import"./useButton-D4UG4PHy.js";import"./Dialog-B9C9duPY.js";import"./RSPContexts-DnH5Czok.js";import"./OverlayArrow-CfUGNIky.js";import"./useResizeObserver-DWfhUb69.js";import"./useControlledState-4eQ4VJ_x.js";import"./Collection-DSw0Co_i.js";import"./index-3O6tGQUW.js";import"./Separator-CqzvGCIB.js";import"./SelectionManager-DuSnioHk.js";import"./useEvent-Bpvasb0c.js";import"./scrollIntoView-7ZxtPAx0.js";import"./SelectionIndicator-t4ESMKeX.js";import"./useDescription-larqa2bq.js";import"./ListKeyboardDelegate-Prucwfh4.js";import"./PressResponder-DpSlFNy6.js";import"./useLocalizedStringFormatter-DCuMM2e9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent--egNNwF2.js";import"./VisuallyHidden-DmeEZsXF.js";import"./Button-Bs1OmtnK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DETAsxuF.js";import"./createLucideIcon-C3W8dNhU.js";import"./x-BtjPiESg.js";import"./Heading-B4LhT9pb.js";import"./info-DvZlWYzP.js";import"./Popover-CFi8PJaH.js";import"./useFormValidation-C0gaMIqj.js";import"./useField-DWqLAcPx.js";import"./Form-DVMMKosO.js";import"./check-u1_5_ilx.js";import"./useToggleState-_4itN8Ok.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
