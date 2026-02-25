import{j as e}from"./iframe-C9ubgLgC.js";import{C as m}from"./CheckboxGroup-DsIQh2ML.js";import{C as p}from"./Checkbox-CykhvZlM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CVXyG8VI.js";import"./utils-DGXfXGIv.js";import"./clsx-B-dksMZM.js";import"./Text-DzDyHzow.js";import"./useFocusRing-4O8j9jv4.js";import"./index-BNV1MXTe.js";import"./index-Bwb2HpPH.js";import"./clsx-Ciqy0D92.js";import"./Text-CL8RRho7.js";import"./Label-BPDF15KZ.js";import"./Button-BlG7CmiH.js";import"./Hidden-Azh09GXQ.js";import"./useLabels-Df_ryvuT.js";import"./useButton-DfAsmtKq.js";import"./Dialog-C3BieIKE.js";import"./RSPContexts-Dm9gjtI5.js";import"./OverlayArrow-COpJvv1L.js";import"./useResizeObserver-o0TjWYde.js";import"./useControlledState-DqLuvFKD.js";import"./Collection-DTwVVniI.js";import"./index-D11ngsUp.js";import"./Separator-CcuL_uLD.js";import"./SelectionManager-D2OfJ91j.js";import"./useEvent-BMkaTr7g.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-tP0gd4qo.js";import"./useDescription-DsXkWwWK.js";import"./ListKeyboardDelegate-DEcFwDZ4.js";import"./PressResponder-DaCcp4oE.js";import"./useLocalizedStringFormatter-bbG7Wq0q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BjkY83sA.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BHt-U9wp.js";import"./Button-Dt-Z81qJ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bh2zxf8s.js";import"./createLucideIcon-SsBWnnbL.js";import"./x-BMYCRDHP.js";import"./Heading-DDcJA1Gn.js";import"./info-CcMvzH2B.js";import"./Popover-D7_SYJfl.js";import"./useFormValidation-XFKbkoIj.js";import"./useField-CbMf_VdX.js";import"./Form-DjrwUDpY.js";import"./check-DKUqkjmL.js";import"./useToggleState-CMSB8Xb-.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
