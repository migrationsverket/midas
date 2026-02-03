import{j as e}from"./iframe-2JtjApPo.js";import{C as m}from"./CheckboxGroup-C0YJ_6Dl.js";import{C as p}from"./Checkbox-D8Hc6Ejn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dln1Os_1.js";import"./utils-CzNHZNuR.js";import"./clsx-B-dksMZM.js";import"./Text-DuXa3TNC.js";import"./useFocusRing-C0YicbWo.js";import"./index-CSBRpQP6.js";import"./index-BGdLG16e.js";import"./clsx-Ciqy0D92.js";import"./Text-BSc0SvwI.js";import"./Label-DgtDyFKu.js";import"./Button-ByCdtsdN.js";import"./Hidden-C9R9ag8Z.js";import"./useLabels-L4n1lfmV.js";import"./useButton-DQi2T4lG.js";import"./Dialog-CxggxWVD.js";import"./RSPContexts-CHZ5pSVJ.js";import"./OverlayArrow-h501cStw.js";import"./useResizeObserver-oqVDEmte.js";import"./useControlledState-Bc67AkWO.js";import"./Collection-qvAla_kv.js";import"./index-Bb5gds0q.js";import"./Separator-CbFxBL2h.js";import"./SelectionManager-9xpIiF7K.js";import"./useEvent-X2YyRtFg.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-gj1EUJNv.js";import"./useDescription-DTNf7b1X.js";import"./ListKeyboardDelegate-CG7ZMDhP.js";import"./PressResponder-BwJ2zlF9.js";import"./useLocalizedStringFormatter-DLo_dynU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CgKKh1MD.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BPqsl5RX.js";import"./Button-Cqjrp1pe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dm9cUQa8.js";import"./createLucideIcon-DDjq8OkZ.js";import"./x-BP08_jMZ.js";import"./Heading-BTo5mNK0.js";import"./info--lQn1qxa.js";import"./Popover-DBPB6Mx-.js";import"./useFormValidation-BCYtaxsj.js";import"./useField-DBBpCUIY.js";import"./Form-DKceiC0m.js";import"./check-BN4gFO1S.js";import"./useToggleState-MjVQcxmt.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
