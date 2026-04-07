import{j as e}from"./iframe-C0gItKGI.js";import{C as m}from"./CheckboxGroup-DVZJK4P7.js";import{C as p}from"./Checkbox-nKYOKtnD.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-X-1CPtGa.js";import"./utils-C4BmiKeT.js";import"./clsx-B-dksMZM.js";import"./Text-CP3oPRRG.js";import"./useFocusRing-D6zHA-j4.js";import"./index-JTUL9Zza.js";import"./index-DYJlb7vK.js";import"./clsx-Ciqy0D92.js";import"./Text-COsMTm1B.js";import"./Label-DgEwD7Y0.js";import"./Button-o0QsNuSA.js";import"./Hidden-CxiPA8K1.js";import"./useLabel-DSorbXz4.js";import"./useLabels-B6zfi_e6.js";import"./useButton-Dx1KDGRQ.js";import"./Dialog-CmrXn1at.js";import"./RSPContexts-Cl1Py3Cy.js";import"./OverlayArrow-BHt5zAHy.js";import"./useResizeObserver-CuPc38Zl.js";import"./useControlledState-BBjdJp7n.js";import"./Collection-DnowcdnP.js";import"./index-CHNDbKyi.js";import"./Separator-F-oIn2Ic.js";import"./SelectionManager-D-bxzIQz.js";import"./useEvent-B1QAVb7V.js";import"./scrollIntoView-CsIkDecr.js";import"./SelectionIndicator-D3r10E2K.js";import"./useDescription-DN4iRcxV.js";import"./ListKeyboardDelegate-D4HGFgQm.js";import"./PressResponder-CsfYjE0W.js";import"./useLocalizedStringFormatter-CJETvB2q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDhOf0yB.js";import"./getScrollParent-FaTrNgdQ.js";import"./VisuallyHidden-B6iVGiF3.js";import"./x-BC7OWJ1B.js";import"./createLucideIcon-jAmYwIsU.js";import"./useLocalizedStringFormatter-CX1JQrfE.js";import"./Heading-D3BiTKui.js";import"./Button-ByBsZf-O.js";import"./Button.module-BB7N-cLd.js";import"./info-DetYqJur.js";import"./Popover-EkNhVWir.js";import"./Form-Dt3RCtH5.js";import"./useField-BOZozsGE.js";import"./check-o8WaH5iI.js";import"./useToggleState-DBDwDn_i.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
