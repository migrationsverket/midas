import{j as e}from"./iframe-BGJKVmf3.js";import{C as m}from"./CheckboxGroup-WrClXp9S.js";import{C as p}from"./Checkbox-Dfk4aXSS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Cw7h0kNs.js";import"./utils-CdECfOvA.js";import"./clsx-B-dksMZM.js";import"./Text-r6BcnIdd.js";import"./useFocusRing-DbrozJ_r.js";import"./index-pedBBgRE.js";import"./index-DRo8smSM.js";import"./clsx-Ciqy0D92.js";import"./Text-Bp3BbsoJ.js";import"./Label-WTBSOLOM.js";import"./Button-BnLvJykT.js";import"./Hidden-HQtC_o9a.js";import"./useLabels-DjNPyrwJ.js";import"./useButton-H76zVe9p.js";import"./Dialog-BkzjdUPZ.js";import"./RSPContexts-B4x9M34g.js";import"./OverlayArrow-CEhGYxVs.js";import"./useResizeObserver-U2HW7D5b.js";import"./useControlledState-CKSdrHFO.js";import"./Collection-BLiFri7p.js";import"./index-CXAwwT1a.js";import"./Separator-DJ3CyE4J.js";import"./SelectionManager-DLKSBW41.js";import"./useEvent-USaeSmTd.js";import"./scrollIntoView-Da0pxFKj.js";import"./SelectionIndicator-Dv9tLt5C.js";import"./useDescription-DXkPEcT2.js";import"./ListKeyboardDelegate-D0u_GLeO.js";import"./PressResponder--ZsFu1sS.js";import"./useLocalizedStringFormatter-DpbFwMiK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DfHGa-5w.js";import"./VisuallyHidden-G7JBO7ul.js";import"./Button-BoJn9f0V.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DljgyLYu.js";import"./createLucideIcon-Bvs4zFUu.js";import"./x-CgSSs-72.js";import"./Heading-DFG0pOTb.js";import"./info-Bsp46QLb.js";import"./Popover-BiIV6MRI.js";import"./useFormValidation-Dnh4rJxq.js";import"./useField-CwvTQ404.js";import"./Form-GVS1P4LC.js";import"./check-DIG5wB79.js";import"./useToggleState-Bn_Pr9Qx.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
