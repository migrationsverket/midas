import{j as e}from"./iframe-B_wOJzak.js";import{C as m}from"./CheckboxGroup-DSA76NC7.js";import{C as p}from"./Checkbox-CYNDVNqR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BQuMjgpB.js";import"./utils-CqdFBANG.js";import"./clsx-B-dksMZM.js";import"./Text-Bdvl2sVE.js";import"./useFocusRing-DoMqkbPM.js";import"./index-CY391PiH.js";import"./index-CXI-rU25.js";import"./clsx-Ciqy0D92.js";import"./Text-BdfzGXfI.js";import"./Label-CO6rcrcd.js";import"./Button--YbSiPHP.js";import"./Hidden-DVTPrRLd.js";import"./useLabels-DczO-y-_.js";import"./useButton-BIdPbjci.js";import"./Dialog-3JU20ovF.js";import"./RSPContexts-BZAsk-Iz.js";import"./OverlayArrow-BcJbbY_U.js";import"./useResizeObserver-DpCMZhvf.js";import"./useControlledState-CsUwFHf6.js";import"./Collection-CuQ8oPEC.js";import"./index-eYZA4XVd.js";import"./Separator-Bwe8r19Z.js";import"./SelectionManager-cP-W_LbB.js";import"./useEvent-D4_dQ-oV.js";import"./scrollIntoView-Bd8U5JDo.js";import"./SelectionIndicator-C1Il5AV0.js";import"./useDescription-DogmSaKs.js";import"./ListKeyboardDelegate-QPe1nmxo.js";import"./PressResponder-CNRjDx-C.js";import"./useLocalizedStringFormatter-C7fIyH4c.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-X93ZPV66.js";import"./VisuallyHidden-DvToQpL6.js";import"./useLocalizedStringFormatter-DpdUZ6AV.js";import"./Button-T6l_wraQ.js";import"./Button.module-CtQ1deO8.js";import"./x-DhCjNDOQ.js";import"./createLucideIcon-CrRdlSwf.js";import"./Heading-DFOhIGaT.js";import"./info-1rgM776K.js";import"./Popover-B0vlmQyA.js";import"./useFormValidation-D6Cow3X7.js";import"./useField-D9FdjpPa.js";import"./Form-CkkDfgTN.js";import"./check-1YAhfXH9.js";import"./useToggleState-BMsuqNsC.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
