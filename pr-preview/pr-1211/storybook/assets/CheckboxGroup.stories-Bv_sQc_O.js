import{j as e}from"./iframe-IoRZPpzT.js";import{C as m}from"./CheckboxGroup-CYlYQvvs.js";import{C as p}from"./Checkbox-D9E3JSMw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BWVbvEBE.js";import"./utils-BxE4vEtI.js";import"./clsx-B-dksMZM.js";import"./Text-Bm8kOdo3.js";import"./useFocusRing-Cfj0kgNA.js";import"./index-C3u5Wnjv.js";import"./index-CWXAEqH-.js";import"./clsx-Ciqy0D92.js";import"./Text-fDJLlYrf.js";import"./Label-iKyXcyVL.js";import"./Button-CVTJNyWz.js";import"./Hidden-wW-xxMhm.js";import"./useLabel-Cv3-1VeN.js";import"./useLabels-0sv1QR26.js";import"./useButton-BSTxFbL2.js";import"./Dialog-6AmIAoc6.js";import"./RSPContexts-BGd6R71q.js";import"./OverlayArrow-BrQpk8b0.js";import"./useResizeObserver-DbLAT6KP.js";import"./useControlledState-BGABXmqM.js";import"./Collection-PjH1GUxA.js";import"./index-BlQyREr_.js";import"./Separator-BoTsBsv-.js";import"./SelectionManager-BZO6tDgr.js";import"./useEvent-B1wVgNEN.js";import"./scrollIntoView-36gHvCrJ.js";import"./SelectionIndicator-D9ob4S69.js";import"./useDescription-BxymuZdi.js";import"./ListKeyboardDelegate-F-0GlIkm.js";import"./PressResponder-BvHiC6OZ.js";import"./useLocalizedStringFormatter-Dl-vCCz5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2b1p0I-.js";import"./getScrollParent-DwAHZWkX.js";import"./VisuallyHidden-DVgF-hYp.js";import"./x-BKVjaePe.js";import"./createLucideIcon-D_o_RWfS.js";import"./useLocalizedStringFormatter-DWwCwLPP.js";import"./Heading-CkL6u_jg.js";import"./Button-fE-_CYhO.js";import"./Button.module-BB7N-cLd.js";import"./info-DQDJ0BFx.js";import"./Popover-wn25MY2L.js";import"./Form-an_t5IvV.js";import"./useField-Vudx1VTG.js";import"./check-NQHBINng.js";import"./useToggleState-dQRid1G7.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
