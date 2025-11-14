import{j as e}from"./iframe-Dnj0zt3A.js";import{C as m}from"./CheckboxGroup-D8TiCUe0.js";import{C as p}from"./Checkbox-Dd56VKqo.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Ds1rpN1P.js";import"./utils-CZ7ujQb6.js";import"./clsx-B-dksMZM.js";import"./Text-BZcE4PZu.js";import"./useFocusRing-BJGbDr4g.js";import"./index-BZ5oXR7W.js";import"./index-w9N2b8_o.js";import"./clsx-Ciqy0D92.js";import"./Text-CUy2D1XG.js";import"./Label-7diI1UcW.js";import"./Button-BEMXi9hp.js";import"./Hidden-BdPJwGeM.js";import"./useLabels-DPkdJjpB.js";import"./useButton-DXRKrxCT.js";import"./Dialog-tO2RZT7d.js";import"./RSPContexts-CiYHqfM8.js";import"./OverlayArrow-CFaynpEm.js";import"./useResizeObserver--nBot81v.js";import"./useControlledState-BLnkZwm8.js";import"./Collection-CG7PYTDM.js";import"./index-CLdXDaJ0.js";import"./Separator-CUD5gTMq.js";import"./SelectionManager-BjshcM7f.js";import"./useEvent-nNccmmdj.js";import"./scrollIntoView-D8GpqHqj.js";import"./SelectionIndicator-ZZ1g1Bvd.js";import"./useDescription-BuSTaiIN.js";import"./ListKeyboardDelegate-BhP_UMyo.js";import"./PressResponder-BMPDHw7_.js";import"./useLocalizedStringFormatter-B0e0Ob-A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BUEVh28_.js";import"./VisuallyHidden-OA8MFr3H.js";import"./useLocalizedStringFormatter-7drUIReq.js";import"./Button-D037RcO0.js";import"./Button.module-CtQ1deO8.js";import"./x-DsZiGScE.js";import"./createLucideIcon-2omQZeFD.js";import"./Heading-B3Ef_nQn.js";import"./info-R0mXtk23.js";import"./Popover-DMYBnjwV.js";import"./useFormValidation-D-Igx394.js";import"./useField-BagSvq-O.js";import"./Form-cFHO0f2E.js";import"./check-D48QaGCX.js";import"./useToggleState-TkCurNCf.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
