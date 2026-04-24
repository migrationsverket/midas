import{j as e}from"./iframe-EPbYJ3aH.js";import{C as m}from"./CheckboxGroup-CEI4xg8B.js";import{C as p}from"./Checkbox-C0IG6UXq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-QU59tQ0w.js";import"./utils-BFyuPOg-.js";import"./clsx-B-dksMZM.js";import"./Text-DXPQUnae.js";import"./useFocusRing-vFk-w4SV.js";import"./index-CMa-XrnA.js";import"./index-CEkD2vSE.js";import"./clsx-Ciqy0D92.js";import"./Text-DaRCpEpM.js";import"./Label-hTDzrJT1.js";import"./Button-D1GYvhMH.js";import"./Hidden-CHhsJSI8.js";import"./useLabel-Cb-B9e5n.js";import"./useLabels-bRXyuIVZ.js";import"./useButton-CS8vRMxU.js";import"./Dialog-n78VMrVu.js";import"./RSPContexts-BCgG5sDy.js";import"./OverlayArrow-CYxpLZMe.js";import"./useResizeObserver-BbDP_QOM.js";import"./useControlledState-B7DCF9AW.js";import"./Collection-BCcQ8_2d.js";import"./index-Cx30adBd.js";import"./Separator-ZzheoSvB.js";import"./SelectionManager-fY8UI5b1.js";import"./useEvent-DrVet--T.js";import"./scrollIntoView-DIrfA17L.js";import"./SelectionIndicator-Zdxp2d1B.js";import"./useDescription-B2aIStsg.js";import"./ListKeyboardDelegate-CBTehG4B.js";import"./PressResponder-CbR5kRKy.js";import"./useLocalizedStringFormatter-Bl42Cfqn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2RjG4Qj.js";import"./getScrollParent-IjDHduKu.js";import"./VisuallyHidden-CRUsIDEu.js";import"./ModalOverlay-Dmzx1hCu.js";import"./x-DpzpagIl.js";import"./createLucideIcon-CDlkFEI-.js";import"./useLocalizedStringFormatter-scKp9dSq.js";import"./Heading-Dg6ksqRs.js";import"./Button-CF00LYtn.js";import"./Button.module-BB7N-cLd.js";import"./info-Bz-zzsad.js";import"./Popover-OahhESU-.js";import"./Form-Bo93hY_x.js";import"./useField-Czz-xLhT.js";import"./check-p1RnRgI8.js";import"./useToggleState-30gFcbfu.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
