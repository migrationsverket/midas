import{j as e}from"./iframe-zfNSE992.js";import{C as m}from"./CheckboxGroup-DxuX0Icn.js";import{C as p}from"./Checkbox-CdVOkr_J.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-tjW0lz2J.js";import"./utils-B2SfFvVK.js";import"./clsx-B-dksMZM.js";import"./Text-Bl3fcot9.js";import"./useFocusRing-CI59KcKl.js";import"./index-CnTZzMrs.js";import"./index-D3448pLr.js";import"./clsx-Ciqy0D92.js";import"./Text-CHvMVhnB.js";import"./Label-tGIiThem.js";import"./Button-DC5DfWyL.js";import"./Hidden-DgIIwhxN.js";import"./useLabels-CjQ9ItwL.js";import"./useButton-DIQ3lO2m.js";import"./Dialog-D8-e6XCB.js";import"./RSPContexts-CPw4lDId.js";import"./OverlayArrow-diGZdjTK.js";import"./useResizeObserver-DBO1Nm8L.js";import"./useControlledState-CIBWwPsl.js";import"./Collection-CNmZWZMw.js";import"./index-CeZtCSPC.js";import"./Separator-Cha28dSh.js";import"./SelectionManager-BL7qS2k3.js";import"./useEvent-BF95CLEW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B2KX-6U1.js";import"./useDescription-CxH9sory.js";import"./ListKeyboardDelegate-BcysRdmZ.js";import"./PressResponder-DA6YHTJ4.js";import"./useLocalizedStringFormatter-CJ_FBxg6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bkh2xnu2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-wYdlkGlt.js";import"./Button-DBGCil-H.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BJ90h7Po.js";import"./createLucideIcon-BiSgLEsQ.js";import"./x-ahQW_gYz.js";import"./Heading-in0uxqkQ.js";import"./info-CTFYqTck.js";import"./Popover-BmxvQgJ2.js";import"./useFormValidation-K1-ScRZ6.js";import"./useField-CONU5j_T.js";import"./Form-6PQG0HwU.js";import"./check-B5-vy8LJ.js";import"./useToggleState-Dct0pTav.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
