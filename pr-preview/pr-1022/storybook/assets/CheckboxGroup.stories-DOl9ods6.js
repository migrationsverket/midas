import{j as e}from"./iframe-D2QiFl1Q.js";import{C as m}from"./CheckboxGroup-DlJJ8ojX.js";import{C as p}from"./Checkbox-1nb9OyPr.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DzMY0KoY.js";import"./utils-C8ZbQkE7.js";import"./clsx-B-dksMZM.js";import"./Text-BwutiQ1I.js";import"./useFocusRing-CBM371L3.js";import"./index-Cl8hPLRd.js";import"./index-McmNB2RO.js";import"./clsx-Ciqy0D92.js";import"./Text-Czz1G82J.js";import"./Label-BTksugbp.js";import"./Button-jwqYg1go.js";import"./Hidden-Ec0HhwAs.js";import"./useLabels-By_yzmZ7.js";import"./useButton-q6SL79uh.js";import"./Dialog-CgGE3fg-.js";import"./RSPContexts-CrDf2hpR.js";import"./OverlayArrow-BU4YOGz4.js";import"./useResizeObserver-D4Y8n76L.js";import"./useControlledState-l7K5Cl0t.js";import"./Collection-Dj5rVQCZ.js";import"./index-D8q3UKih.js";import"./Separator-CPq-byW8.js";import"./SelectionManager-4_hx7v1F.js";import"./useEvent-KlMFWHnu.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CdqppYXN.js";import"./useDescription-BCN90KGy.js";import"./ListKeyboardDelegate-bQekQHSh.js";import"./PressResponder-BpYoU1QI.js";import"./useLocalizedStringFormatter-AJrWLMlk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BoeTLxfz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-LF61GAgF.js";import"./Button-fUVp2AkT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-lXxhePp3.js";import"./createLucideIcon-D1IpgdG_.js";import"./x-CxsNPW5G.js";import"./Heading-CVxW4iun.js";import"./info-vEMoj0J0.js";import"./Popover-cIm5tBYf.js";import"./useFormValidation-BbQ0GoQK.js";import"./useField-CSsZ2u1C.js";import"./Form-xBEu3dY3.js";import"./check-D6CX_mmE.js";import"./useToggleState-BSzGDfSw.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
