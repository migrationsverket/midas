import{j as e}from"./iframe-BDAeyV_L.js";import{C as m}from"./CheckboxGroup-W8XTz-BX.js";import{C as p}from"./Checkbox-CnHqE8jH.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-nYxCLXng.js";import"./utils-QbpHp2iH.js";import"./clsx-B-dksMZM.js";import"./Text-CuLPV3Pn.js";import"./useFocusRing-DZ9oxgDy.js";import"./index-bebXLijF.js";import"./index-BxXpe6Uv.js";import"./clsx-Ciqy0D92.js";import"./Text-CgZVKuAu.js";import"./Label-natk6EPf.js";import"./Button-hcT7fu5t.js";import"./Hidden-CWKhTNWg.js";import"./useLabels-CJ7PqtrQ.js";import"./useButton-yTtoFlYV.js";import"./Dialog-o3tFSf8d.js";import"./RSPContexts-uVPcO6CS.js";import"./OverlayArrow-BVayRGDK.js";import"./useResizeObserver-2N3Ozx5o.js";import"./useControlledState-B4b2AaJr.js";import"./Collection-y60iSVfC.js";import"./index-It1jGq4A.js";import"./Separator-DfoJ1Y5j.js";import"./SelectionManager-_BpQMH4s.js";import"./useEvent-DCC2o4ue.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D2sLS2N5.js";import"./useDescription-BsNFz1-d.js";import"./ListKeyboardDelegate-DrX08Zf9.js";import"./PressResponder-CUy93U5r.js";import"./useLocalizedStringFormatter-BWgc5TPM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTtP-AWM.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C7amzv03.js";import"./Button-CzvpZwUk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEJ4AsDN.js";import"./createLucideIcon-DrPkV-uJ.js";import"./x-Bo3luZEL.js";import"./Heading-CR3sFUYz.js";import"./info-BgnmUpVy.js";import"./Popover-MkmEChob.js";import"./useFormValidation-DaMPzBFa.js";import"./useField-C7GoH2ks.js";import"./Form-DfB0YOFw.js";import"./check-DQ3XE-pE.js";import"./useToggleState-C-1GHaBB.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
