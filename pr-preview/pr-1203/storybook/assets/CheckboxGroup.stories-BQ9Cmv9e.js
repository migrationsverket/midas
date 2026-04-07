import{j as e}from"./iframe-QwZUgaLO.js";import{C as m}from"./CheckboxGroup-CyNoGNQh.js";import{C as p}from"./Checkbox-CxUFjKdr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-vnsH4bsL.js";import"./utils-C5PAaS6l.js";import"./clsx-B-dksMZM.js";import"./Text-CjsrR6_S.js";import"./useFocusRing-DCV7Bvm3.js";import"./index-CU2b6dbl.js";import"./index-DwVC30Wi.js";import"./clsx-Ciqy0D92.js";import"./Text-XaIsUgQ9.js";import"./Label-H9_HPKA9.js";import"./Button-D9S27FhL.js";import"./Hidden-qsgafZIY.js";import"./useLabel-JXRtA5SB.js";import"./useLabels-BoIdpiTR.js";import"./useButton-CvKomkMU.js";import"./Dialog-BdWTsjfQ.js";import"./RSPContexts-CRJgyFJK.js";import"./OverlayArrow-B7eG3oQS.js";import"./useResizeObserver-De-tLFoa.js";import"./useControlledState-DGCNkOh1.js";import"./Collection-BWpKskv2.js";import"./index-C5wuU4_V.js";import"./Separator-pmSVmgMf.js";import"./SelectionManager-C_b-UP1r.js";import"./useEvent-DoVh1qxn.js";import"./scrollIntoView-CcRWGSSD.js";import"./SelectionIndicator-CCJXiU-C.js";import"./useDescription-BLH5SCIP.js";import"./ListKeyboardDelegate-BDdbKLH6.js";import"./PressResponder-C-d46iSj.js";import"./useLocalizedStringFormatter-B8e3KCPt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C89c8p4C.js";import"./getScrollParent-DxQpJ7qd.js";import"./VisuallyHidden-B7afogpp.js";import"./x-CLIz2YWd.js";import"./createLucideIcon-BN5DVyg5.js";import"./useLocalizedStringFormatter-C0ixRk9u.js";import"./Heading-DzTzoC4y.js";import"./Button-CEqP3wI_.js";import"./Button.module-BB7N-cLd.js";import"./info-BHpLtMkv.js";import"./Popover-BG1RISgy.js";import"./Form-B3ZZchXU.js";import"./useField-D8U6vQ86.js";import"./check-C7NsAe8s.js";import"./useToggleState-B59JPmDj.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
