import{j as e}from"./iframe-CKu8C240.js";import{C as m}from"./CheckboxGroup-CNeintG_.js";import{C as p}from"./Checkbox-DGkKekYK.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BcSOiHDV.js";import"./utils-CLX7J-q0.js";import"./clsx-B-dksMZM.js";import"./Text-BIK_Bqtk.js";import"./useFocusRing-IcTt8PE9.js";import"./index-CxrKtYp1.js";import"./index-psXWBm0q.js";import"./clsx-Ciqy0D92.js";import"./Text-B_i6Ec48.js";import"./Label-yhvRHLnp.js";import"./Button-IlsrLhR8.js";import"./Hidden-C6ArxBUW.js";import"./useLabel-MFPilgOm.js";import"./useLabels-CRoKZlxn.js";import"./useButton-g3DD9S56.js";import"./Dialog-BHEgxswy.js";import"./RSPContexts-BYfsL_eH.js";import"./OverlayArrow-BcnWWkWt.js";import"./useResizeObserver-N3DCOZNY.js";import"./useControlledState-DDnLcn-b.js";import"./Collection-DIgITLLQ.js";import"./index-X6seohsz.js";import"./Separator-BxU8eOti.js";import"./SelectionManager-crKVw0Rp.js";import"./useEvent-yXAGKDbR.js";import"./scrollIntoView-BgJofm9P.js";import"./SelectionIndicator-BpVpDmUV.js";import"./useDescription-K8aGsr7r.js";import"./ListKeyboardDelegate-DLOXwcoE.js";import"./PressResponder-B9hl0S5Z.js";import"./useLocalizedStringFormatter-D8TEkIPn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjpYCp_W.js";import"./getScrollParent-BKhUwAVM.js";import"./VisuallyHidden-DpKSD7VN.js";import"./ModalOverlay-COgAxzfv.js";import"./x-BRw1fyzP.js";import"./createLucideIcon-B2wZBV1e.js";import"./useLocalizedStringFormatter-BcHgs7SS.js";import"./Heading-BdP2SFj1.js";import"./Button-OIliGZdS.js";import"./Button.module-BB7N-cLd.js";import"./info-Bbg8-3uQ.js";import"./Popover-1iTyE8xt.js";import"./Form-2G0gdMs3.js";import"./useField-DqmtCAAT.js";import"./check-CDZcgSAc.js";import"./useToggleState-CZrGjpNx.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
