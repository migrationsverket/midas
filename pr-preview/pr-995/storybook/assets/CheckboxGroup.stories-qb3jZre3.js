import{j as e}from"./iframe-DSpa0ZJj.js";import{C as m}from"./CheckboxGroup-CKuYLX7A.js";import{C as p}from"./Checkbox-DcMTKE9s.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D4Zul2ht.js";import"./utils-W7NKEzNd.js";import"./clsx-B-dksMZM.js";import"./Text-B4__o0ew.js";import"./useFocusRing-CHFIxq0S.js";import"./index-Bm634ACX.js";import"./index-JwgIIJLt.js";import"./clsx-Ciqy0D92.js";import"./Text-CuC4lmi7.js";import"./Label-CLdqKwxR.js";import"./Button-Cz-z0Ko6.js";import"./Hidden-Bn_hIWKG.js";import"./useLabels-CCN5xeFd.js";import"./useButton-Cu2rmCSH.js";import"./Dialog-CMq55Z-e.js";import"./RSPContexts-2cznPi_5.js";import"./OverlayArrow-CLQA0CkX.js";import"./useResizeObserver-DgjxG9y-.js";import"./useControlledState-BWGhdnzP.js";import"./Collection-CEfcI50-.js";import"./index-NlZ_eQUJ.js";import"./Separator-Bnm9Uc2X.js";import"./SelectionManager-BYs5lwPs.js";import"./useEvent-DSFx2P8Q.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DuprrKW2.js";import"./useDescription-Q359T3QE.js";import"./ListKeyboardDelegate-Bo5tVIdv.js";import"./PressResponder-MvkeKqfc.js";import"./useLocalizedStringFormatter-20jVmx8j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BRkukhdB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-8eYS4FK5.js";import"./Button-Cdop71cL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DPq-0JGc.js";import"./createLucideIcon-DKtiU0kB.js";import"./x-CuWMoefh.js";import"./Heading-PeB1jTB-.js";import"./info-DbyNtn0b.js";import"./Popover-D_e9Y71-.js";import"./useFormValidation-CjcOfkDV.js";import"./useField-9lqyMP1q.js";import"./Form-Dv_gbss9.js";import"./check-CTluUwjw.js";import"./useToggleState-BqrS2Hj3.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
