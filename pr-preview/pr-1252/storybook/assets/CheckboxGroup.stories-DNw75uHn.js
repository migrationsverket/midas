import{j as e}from"./iframe-DmMjYjLV.js";import{C as m}from"./CheckboxGroup-g7TyAELG.js";import{C as p}from"./Checkbox-DsqhFfOW.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dhwy9R14.js";import"./utils-C7Za6cav.js";import"./clsx-B-dksMZM.js";import"./Text-TBh7QsjQ.js";import"./useFocusRing-DNsXJifB.js";import"./index-MWmo0bvh.js";import"./index-Dtm98ubu.js";import"./clsx-Ciqy0D92.js";import"./Text-D1BlasEz.js";import"./Label-Cg8j5ntE.js";import"./Button-BoGHaXxS.js";import"./Hidden-C30O7ZZj.js";import"./useLabel-w1IJLBOX.js";import"./useLabels-KrUCHD9B.js";import"./useButton-Dmer3eRj.js";import"./Dialog-QxxpEwfY.js";import"./RSPContexts-CYlpwwtX.js";import"./OverlayArrow-FoDXdwa0.js";import"./useResizeObserver-QqaVn9XQ.js";import"./useControlledState-jKmX6mW8.js";import"./Collection-CQwAL6eH.js";import"./index-B_ond3mD.js";import"./Separator-ByeE83bT.js";import"./SelectionManager-CQ6A48ag.js";import"./useEvent-be-eSwO4.js";import"./scrollIntoView-BJKhh-O-.js";import"./SelectionIndicator-CspuSccB.js";import"./useDescription-2aTt99IB.js";import"./ListKeyboardDelegate-Cgn_BUdj.js";import"./PressResponder-CgluTvIq.js";import"./useLocalizedStringFormatter-Df1Z6d6Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2C9iwtv.js";import"./getScrollParent-iMMNoEOU.js";import"./VisuallyHidden-Bt6CiHI_.js";import"./ModalOverlay-sNrptj1Y.js";import"./x--G2PLC8C.js";import"./createLucideIcon-mwlEDpcM.js";import"./useLocalizedStringFormatter-Cacp7Pde.js";import"./Heading-CQ85-u0X.js";import"./Button-Pdwae4O6.js";import"./Button.module-BB7N-cLd.js";import"./info-Dpc101tS.js";import"./Popover-DEDjHU40.js";import"./Form-w1xpkiob.js";import"./useField-ykwfEeQx.js";import"./check-Cdg67bgk.js";import"./useToggleState-CBBhVQ_U.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
