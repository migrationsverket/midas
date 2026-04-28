import{j as e}from"./iframe-Cu_fcUaC.js";import{C as m}from"./CheckboxGroup-CXgkSiDb.js";import{C as p}from"./Checkbox-z3K_kshL.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CcL3qzc2.js";import"./utils-mLyOZ5qk.js";import"./clsx-B-dksMZM.js";import"./Text-BcWcM5HD.js";import"./useFocusRing-Dsj_Rw-j.js";import"./index-BAEOZiyy.js";import"./index-YTo08owu.js";import"./clsx-Ciqy0D92.js";import"./Text-CJt2oElV.js";import"./Label-jnUzBQy1.js";import"./Button-BJB-9Zcd.js";import"./Hidden-D1QpNxPu.js";import"./useLabel-Bo-LBJ9U.js";import"./useLabels-DuVjw0gV.js";import"./useButton-DbfMgMWW.js";import"./Dialog-C-EAIPxB.js";import"./RSPContexts-voJfQs_F.js";import"./OverlayArrow-DhYthxRu.js";import"./useResizeObserver-BN_fml5s.js";import"./useControlledState-Cc2dWwpP.js";import"./Collection-DgS7LPNV.js";import"./index-Bd3BSiq8.js";import"./Separator-oct6uH29.js";import"./SelectionManager-CrVTf4E_.js";import"./useEvent-CwEPxrZU.js";import"./scrollIntoView-ACzs8MHU.js";import"./SelectionIndicator-B3i_o2a7.js";import"./useDescription-BXNyutV1.js";import"./ListKeyboardDelegate-BaQ6if3w.js";import"./PressResponder-BV-_NXl-.js";import"./useLocalizedStringFormatter-DyfcmqRi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YFYmKfCX.js";import"./getScrollParent-DEJhUy4G.js";import"./VisuallyHidden-Bo9ouMME.js";import"./ModalOverlay-dJNPlfM6.js";import"./x-_aLctjLl.js";import"./createLucideIcon-B_FH30vd.js";import"./useLocalizedStringFormatter-Dtw-Zwnl.js";import"./Heading-11L4UqbI.js";import"./Button-DbgphF2R.js";import"./Button.module-BB7N-cLd.js";import"./info-Coc9VrCX.js";import"./Popover-yTDjeowR.js";import"./Form-Cpr59noW.js";import"./useField-Cl39vdxi.js";import"./check-BVAfz5sk.js";import"./useToggleState-CVKqooVN.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
