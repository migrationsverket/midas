import{j as e}from"./iframe-BQVZAmhX.js";import{C as m}from"./CheckboxGroup-CwPLD8kK.js";import{C as p}from"./Checkbox-CzUucJGY.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dvo9z3NV.js";import"./utils-DBGKxhvy.js";import"./clsx-B-dksMZM.js";import"./Text-Cl7VN2WD.js";import"./useFocusRing-CZ1ppHUm.js";import"./index-DhVWvG0v.js";import"./index-jPah0Wh4.js";import"./clsx-Ciqy0D92.js";import"./Text-BDOgt3-X.js";import"./Label-CF2NRSGZ.js";import"./Button-DaQviGRz.js";import"./Hidden-uNYSXgwc.js";import"./useLabels-C7gSAdoi.js";import"./useButton-BLpyZZ6H.js";import"./Dialog-BDiy--GU.js";import"./RSPContexts-cGmYjQmV.js";import"./OverlayArrow-4ksf4kwc.js";import"./useResizeObserver-DsSDP_Tb.js";import"./useControlledState-BzTnjfw8.js";import"./Collection-diItfcvf.js";import"./index-N78jcChP.js";import"./Separator-BVGvLdtd.js";import"./SelectionManager-BPdPsoew.js";import"./useEvent-BA49tokg.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DiiBswTs.js";import"./useDescription-BP2VHTY6.js";import"./ListKeyboardDelegate-BuF3a5u0.js";import"./PressResponder-BLPZ0Rie.js";import"./useLocalizedStringFormatter-D1gRfOcs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-v-Lvarn9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CKyjCtbn.js";import"./Button-CFZ90YqT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-sLwEt4tr.js";import"./createLucideIcon-BEZFPsZb.js";import"./x-B89X9bd_.js";import"./Heading-CExc05Da.js";import"./info-BRRNj8dv.js";import"./Popover--ysAXKcV.js";import"./useFormValidation-DdOFiruI.js";import"./useField-CXEJuOSd.js";import"./Form-B41ZDlT2.js";import"./check-SQjBCchm.js";import"./useToggleState-ctf3huNm.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
