import{j as e}from"./iframe-C2ifzLFW.js";import{C as m}from"./CheckboxGroup-B0FJ1fDH.js";import{C as p}from"./Checkbox-BQP8YS0j.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CG9ZMBd0.js";import"./utils-73qIUJkS.js";import"./clsx-B-dksMZM.js";import"./Text-CD2yXDFK.js";import"./useFocusRing-D5sowTP0.js";import"./index-D40BKMj1.js";import"./index-Cku3_zST.js";import"./clsx-Ciqy0D92.js";import"./Text-BHGhTSao.js";import"./Label-DH4DjrXM.js";import"./Button-DrEkBHNm.js";import"./Hidden-arruSKBU.js";import"./useLabel-BkkkauYh.js";import"./useLabels-BURtxaJp.js";import"./useButton-BQcZ3c2T.js";import"./Dialog-C0FA6Tsu.js";import"./RSPContexts-D7FudQaj.js";import"./OverlayArrow-B9UHKrkA.js";import"./useResizeObserver-BNAtunnU.js";import"./useControlledState-DIVk5_t_.js";import"./Collection-ChbGXkT5.js";import"./index-BueJca3e.js";import"./Separator-Dq4MbYrB.js";import"./SelectionManager-Blx_W2he.js";import"./useEvent-DOTctoG_.js";import"./scrollIntoView-Ch2TMXIT.js";import"./SelectionIndicator-BLMObCuw.js";import"./useDescription-CmVv1Pv8.js";import"./ListKeyboardDelegate-DyBYuJfv.js";import"./PressResponder-D9Jdrd3Y.js";import"./useLocalizedStringFormatter-Bfe8f42t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXuqJHQy.js";import"./getScrollParent-DnkUn25f.js";import"./VisuallyHidden-B1aqafDE.js";import"./ModalOverlay-BbpR61PI.js";import"./x-Dn6Rxjbp.js";import"./createLucideIcon-BoPfjMKr.js";import"./useLocalizedStringFormatter-BkkLiQpX.js";import"./Heading-C-leph9A.js";import"./Button-DtzYCx6b.js";import"./Button.module-BB7N-cLd.js";import"./info-Bm2CyIt9.js";import"./Popover-CTysr9eA.js";import"./Form-DaC6-Hhf.js";import"./useField-DcFwBOo5.js";import"./check-Dj0Arcqb.js";import"./useToggleState-DnDK2gca.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
