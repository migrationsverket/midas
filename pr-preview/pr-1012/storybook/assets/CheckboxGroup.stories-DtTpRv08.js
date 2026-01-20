import{j as e}from"./iframe-qoW9tZaT.js";import{C as m}from"./CheckboxGroup-DHc61Aae.js";import{C as p}from"./Checkbox-7jsngdVH.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DE19xuEt.js";import"./utils-CTxYHgfD.js";import"./clsx-B-dksMZM.js";import"./Text-DwKAJAla.js";import"./useFocusRing-B6LARHo7.js";import"./index-bWzt5b9S.js";import"./index-BiO5NgKw.js";import"./clsx-Ciqy0D92.js";import"./Text-CYhV6FXp.js";import"./Label-fjZFM601.js";import"./Button-B0Fu5HXr.js";import"./Hidden-BS4srMlH.js";import"./useLabels-B9eAX_KZ.js";import"./useButton-C2Ne_uvp.js";import"./Dialog-D-9AEPg-.js";import"./RSPContexts-DxChSUOo.js";import"./OverlayArrow-CCAwihsK.js";import"./useResizeObserver-CjlNJV09.js";import"./useControlledState-C0UVa0XM.js";import"./Collection-BVbkFK2L.js";import"./index-C0fhMHrq.js";import"./Separator-Cru_BpWB.js";import"./SelectionManager-zjIT78cX.js";import"./useEvent-DDnu5cND.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cy56j8FR.js";import"./useDescription-5krC5hm9.js";import"./ListKeyboardDelegate-C967icmU.js";import"./PressResponder-DHwVYLfF.js";import"./useLocalizedStringFormatter-D4YZU2AG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CHc5UgF5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BRq5SFSs.js";import"./Button-CPAvH5KE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZDYT37P.js";import"./createLucideIcon-BjNk3Fmr.js";import"./x-DguWE13t.js";import"./Heading-Ds5MlqHc.js";import"./info-Dhd9HzUF.js";import"./Popover-BxOOkRRk.js";import"./useFormValidation-BnwIZj_P.js";import"./useField-DngBv23z.js";import"./Form-BQeevNnQ.js";import"./check-Cwc62J8M.js";import"./useToggleState-CxwX6hE5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
