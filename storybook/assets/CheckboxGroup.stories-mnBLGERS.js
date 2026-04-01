import{j as e}from"./iframe-BBdvX6q7.js";import{C as m}from"./CheckboxGroup-DOruLJzK.js";import{C as p}from"./Checkbox-aTLwBEWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-W4WIQ6PE.js";import"./utils-BhM9cLZz.js";import"./clsx-B-dksMZM.js";import"./Text-DFmdAipG.js";import"./useFocusRing-CiIiFeie.js";import"./index-C0SO2SJv.js";import"./index-Dr2k3dKm.js";import"./clsx-Ciqy0D92.js";import"./Text-DZB5jszh.js";import"./Label-CKm7X-rQ.js";import"./Button-Dzf67HgD.js";import"./Hidden-BOrCZM9C.js";import"./useLabel-yXobHl3x.js";import"./useLabels-CYBypbHC.js";import"./useButton-CExlMDMj.js";import"./Dialog-BK86ItUw.js";import"./RSPContexts-Dhr-dkrR.js";import"./OverlayArrow-BLmQcFmh.js";import"./useResizeObserver-B1PgOilW.js";import"./useControlledState-DuJYRQSo.js";import"./Collection-CnZYrlip.js";import"./index-BoRceWYL.js";import"./Separator-bIr9biPg.js";import"./SelectionManager-CUppn1fa.js";import"./useEvent-ByURV-nf.js";import"./scrollIntoView-VD24PgV1.js";import"./SelectionIndicator-BHjSx8yF.js";import"./useDescription-CRjQLCoE.js";import"./ListKeyboardDelegate-D7hgOMLG.js";import"./PressResponder-CzjJsA8A.js";import"./useLocalizedStringFormatter-Be9Ugeet.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C0vu237c.js";import"./getScrollParent-Cpdl4rHQ.js";import"./VisuallyHidden-BUp-onp8.js";import"./x-KAA9DnbB.js";import"./createLucideIcon-Bf-KaMYu.js";import"./useLocalizedStringFormatter-J63fVK0g.js";import"./Heading-CR2vJkXf.js";import"./Button-DCS9i38V.js";import"./Button.module-BB7N-cLd.js";import"./info-C4IiL-WK.js";import"./Popover-C1CZ9jh7.js";import"./Form-BdaOdDWJ.js";import"./useField-cJot5tll.js";import"./check-DFyXqa_H.js";import"./useToggleState-CAcVlSW9.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
