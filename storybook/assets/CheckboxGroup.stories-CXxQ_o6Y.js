import{j as e}from"./iframe-DI52Qlo4.js";import{C as m}from"./CheckboxGroup-Bogix-cN.js";import{C as p}from"./Checkbox-uQauwIXh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CSuZWyFo.js";import"./utils-urtsDcnm.js";import"./clsx-B-dksMZM.js";import"./Text-C_RzDhoB.js";import"./useFocusRing-2JaqZA15.js";import"./index-BMA7stMc.js";import"./index-Dz8_67dy.js";import"./clsx-Ciqy0D92.js";import"./Text-D2edba9r.js";import"./Label-Hai3BT5e.js";import"./Button-eSR4bLK4.js";import"./Hidden-CscT1sly.js";import"./useLabel-Btef6QY2.js";import"./useLabels-DmZ1Q95o.js";import"./useButton-C_swT-ux.js";import"./Dialog-CRbXODQt.js";import"./RSPContexts-CrMRLfkl.js";import"./OverlayArrow-D7hD0gOc.js";import"./useResizeObserver-6WAybvcV.js";import"./useControlledState-CLoU2XYC.js";import"./Collection-hUB3sBJJ.js";import"./index-Bdpc1bHO.js";import"./Separator-kUMFISQV.js";import"./SelectionManager-CX4E6mov.js";import"./useEvent-BfgA6E-w.js";import"./scrollIntoView-hSq_mdzL.js";import"./SelectionIndicator-By0Zxqsk.js";import"./useDescription-58WIc14O.js";import"./ListKeyboardDelegate-H7rz5L58.js";import"./PressResponder-BhhTh5UN.js";import"./useLocalizedStringFormatter-C62DnPYV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCqfTzdf.js";import"./getScrollParent-BHx5XlTQ.js";import"./VisuallyHidden-Ct-vZpQ3.js";import"./x-B7Z7gY9k.js";import"./createLucideIcon-Bf3dyCX1.js";import"./useLocalizedStringFormatter-B0GJ_bM4.js";import"./Heading-B05gLXhy.js";import"./Button-3POgXEp-.js";import"./Button.module-BB7N-cLd.js";import"./info-D_f5mT_-.js";import"./Popover-Ci3NpRpo.js";import"./Form-BX2Kgv4V.js";import"./useField-Da8HQzfP.js";import"./check-DYdNmdYP.js";import"./useToggleState-CXZejuZp.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
