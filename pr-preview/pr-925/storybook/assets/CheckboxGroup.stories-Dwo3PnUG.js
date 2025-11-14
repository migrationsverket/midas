import{j as e}from"./iframe-vngjZ-4P.js";import{C as m}from"./CheckboxGroup-ybb1v2oA.js";import{C as p}from"./Checkbox-Dm66DBbe.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DztSinTd.js";import"./utils-DHeliekZ.js";import"./clsx-B-dksMZM.js";import"./Text-BbKxmc2D.js";import"./useFocusRing-DUbxX868.js";import"./index-CvXFvuDV.js";import"./index-ukHcnXjJ.js";import"./clsx-Ciqy0D92.js";import"./Text-By4ps0no.js";import"./Label-BwJNq3HW.js";import"./Button-BC9sg2r9.js";import"./Hidden-Bz5znElO.js";import"./useLabels-se4Xxikx.js";import"./useButton-Dc_1rKgZ.js";import"./Dialog-C4yb9t_s.js";import"./RSPContexts-1mbHIt5l.js";import"./OverlayArrow-B5NjMHxX.js";import"./useResizeObserver-ClSKlH08.js";import"./useControlledState-TuR8R_1y.js";import"./Collection-QNqKIXJO.js";import"./index-CaDPZtqS.js";import"./Separator-BCXWfzeX.js";import"./SelectionManager-CAQN8lul.js";import"./useEvent-DtJ9s--c.js";import"./scrollIntoView-3eYklhXT.js";import"./SelectionIndicator-D6kFnVhK.js";import"./useDescription-DyNeAMeF.js";import"./ListKeyboardDelegate-BjXp0VMi.js";import"./PressResponder-BJWrQB02.js";import"./useLocalizedStringFormatter-CZE4fUbg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BN7bdp6P.js";import"./VisuallyHidden-b4ZPYca2.js";import"./useLocalizedStringFormatter-CsTZX4GC.js";import"./Button-fRzOyLJW.js";import"./Button.module-CtQ1deO8.js";import"./x-dukuuXlu.js";import"./createLucideIcon-CJOpBfq1.js";import"./Heading-pu9kpDJD.js";import"./info-BmAtTYbP.js";import"./Popover-CLHREvEz.js";import"./useFormValidation-CWTit8yj.js";import"./useField-IYEadwcm.js";import"./Form-Bewd3abj.js";import"./check-uOhdjw70.js";import"./useToggleState-DOENc9w7.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
