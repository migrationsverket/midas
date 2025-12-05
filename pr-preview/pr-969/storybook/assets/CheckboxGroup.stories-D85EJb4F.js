import{j as e}from"./iframe-qDdxYEqa.js";import{C as m}from"./CheckboxGroup-C1HOQcpW.js";import{C as p}from"./Checkbox-Bi3RX4kP.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BwMuefB_.js";import"./utils-BM4vGe7B.js";import"./clsx-B-dksMZM.js";import"./Text-bywFbAb4.js";import"./useFocusRing-B6vuZu2_.js";import"./index-DzlCj9Y4.js";import"./index-BVyj6e23.js";import"./clsx-Ciqy0D92.js";import"./Text-WW175J0Z.js";import"./Label-DF3OtJmd.js";import"./Button-B6p9EZnf.js";import"./Hidden-DtSTyAaE.js";import"./useLabels-xEn6R_2b.js";import"./useButton-5HeDBVBJ.js";import"./Dialog-Eqalv399.js";import"./RSPContexts-D7OWPLkC.js";import"./OverlayArrow-DjOJ1kKX.js";import"./useResizeObserver-CV1JOXVl.js";import"./useControlledState-0uhYfAk6.js";import"./Collection-B60oJRdy.js";import"./index-RB1hbU1x.js";import"./Separator-D0zma50k.js";import"./SelectionManager-DEex84lG.js";import"./useEvent-BfpnWR31.js";import"./scrollIntoView-HxGvSmTa.js";import"./SelectionIndicator-DDjrOMDd.js";import"./useDescription-CKkIcbk2.js";import"./ListKeyboardDelegate-CVi4IbZo.js";import"./PressResponder-KMkNkSXb.js";import"./useLocalizedStringFormatter-DIrmbVtk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-pPUmGKBq.js";import"./VisuallyHidden-CKY1T34r.js";import"./Button-Cs7TGJjB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D8GJkiEc.js";import"./createLucideIcon-G8J66sNp.js";import"./x-CLUEOlar.js";import"./Heading-C-pdQTkz.js";import"./info-BeLQrudJ.js";import"./Popover-DXxmk8LO.js";import"./useFormValidation-Bfy44XK_.js";import"./useField-CJ3GOAY5.js";import"./Form-DHIfqyz9.js";import"./check-D2Guhoz1.js";import"./useToggleState-NiFDyzbp.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
