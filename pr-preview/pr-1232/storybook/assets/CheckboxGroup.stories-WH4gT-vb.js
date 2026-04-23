import{j as e}from"./iframe-BYwHSihz.js";import{C as m}from"./CheckboxGroup-BOAuu2Pf.js";import{C as p}from"./Checkbox-C99bZHKh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BWBSyxmE.js";import"./utils-Dh-IoFbm.js";import"./clsx-B-dksMZM.js";import"./Text-DJX_2QXd.js";import"./useFocusRing-DxmY0qcu.js";import"./index-CpfVIqpP.js";import"./index-d1liSO_o.js";import"./clsx-Ciqy0D92.js";import"./Text-BHNKCnwU.js";import"./Label-B2rCp1Xp.js";import"./Button-DOnb1gUF.js";import"./Hidden-DpptCkiu.js";import"./useLabel-AYJIbpQy.js";import"./useLabels-C66ukF51.js";import"./useButton-xvHSlbxN.js";import"./Dialog-CrSFGI4p.js";import"./RSPContexts-BAR4w1ha.js";import"./OverlayArrow-r7TCtT7t.js";import"./useResizeObserver-APOBPQ6V.js";import"./useControlledState-CJUIxKhT.js";import"./Collection-Bo1oU8IZ.js";import"./index-Cu1eBBaC.js";import"./Separator-DCA-sdeI.js";import"./SelectionManager-iLot_8Vm.js";import"./useEvent-CBrs3Ilv.js";import"./scrollIntoView-D2NUCauH.js";import"./SelectionIndicator-jYxL6MKO.js";import"./useDescription-CMXfddmg.js";import"./ListKeyboardDelegate-Dk9ALlMi.js";import"./PressResponder-LcoGqm7p.js";import"./useLocalizedStringFormatter-CIU3iXEN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dz0orPwe.js";import"./getScrollParent-DQgl8KcT.js";import"./VisuallyHidden-2UqtjUFf.js";import"./ModalOverlay-DXb41Uo_.js";import"./x-CQCbnBEa.js";import"./createLucideIcon-COPS1n-B.js";import"./useLocalizedStringFormatter-7gjKuEfr.js";import"./Heading-CGdHWwLi.js";import"./Button-crEn75HL.js";import"./Button.module-BB7N-cLd.js";import"./info-C6ypPFRL.js";import"./Popover-JkrvUn9z.js";import"./Form-xzTb284W.js";import"./useField-Civc57Hk.js";import"./check-Br9RrXoj.js";import"./useToggleState-Lt0Ew-TP.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
