import{j as e}from"./iframe-CfzEJfTl.js";import{C as m}from"./CheckboxGroup-BvGhoRtp.js";import{C as p}from"./Checkbox-Pup1i5_Q.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CNWb36NS.js";import"./utils-DMT3jteK.js";import"./clsx-B-dksMZM.js";import"./Text-C2N2S6jp.js";import"./useFocusRing-5mlRQFlf.js";import"./index-CMLkFNUk.js";import"./index-DlHBYD_b.js";import"./clsx-Ciqy0D92.js";import"./Text-DMZehI1u.js";import"./Label-DwSB85mD.js";import"./Button-_yEl9m9t.js";import"./Hidden-CO_ry7Y6.js";import"./useLabels-DnN5Bi55.js";import"./useButton-DxBAtA7-.js";import"./Dialog-CHar3iRp.js";import"./RSPContexts-BRrdno09.js";import"./OverlayArrow-Cqd5StSd.js";import"./useResizeObserver-BIMmTIw9.js";import"./useControlledState-CiYq6-kc.js";import"./Collection-Ba8uBxyK.js";import"./index-BdOjyXga.js";import"./Separator-BlXWKXik.js";import"./SelectionManager-Bo9jaaWh.js";import"./useEvent-BW6_HwHq.js";import"./scrollIntoView-D7CVscOt.js";import"./SelectionIndicator-Bskb6dyx.js";import"./useDescription-BFDNZgK_.js";import"./ListKeyboardDelegate-DLATjNqf.js";import"./PressResponder-BD0BMPqD.js";import"./useLocalizedStringFormatter-8C8un9Z1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BjV0FuZW.js";import"./VisuallyHidden-DH1p0Y9r.js";import"./Button-qxfYGoKg.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CBKlJ1yT.js";import"./createLucideIcon-D2wUs9_7.js";import"./x-CIFy6nfS.js";import"./Heading-DTHxO0Gw.js";import"./info-Ct8OMXLr.js";import"./Popover-CSX2uwF8.js";import"./useFormValidation-arzJgOWK.js";import"./useField-gFr9eP0s.js";import"./Form-1YBoc813.js";import"./check-CCPj5-hO.js";import"./useToggleState-69wlWFco.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
