import{j as e}from"./iframe-BusKbIuL.js";import{C as m}from"./CheckboxGroup-BpJHQeIe.js";import{C as p}from"./Checkbox-BrkKfbP0.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DYrJGow5.js";import"./utils-BLk-MBDB.js";import"./clsx-B-dksMZM.js";import"./Text-By1Rmolv.js";import"./useFocusRing-Bkm-baB3.js";import"./index-CnP2yi1p.js";import"./index-DAOAnwsN.js";import"./clsx-Ciqy0D92.js";import"./Text-BSlgEswi.js";import"./Label-TAC8RkyL.js";import"./Button-D16PjYbu.js";import"./Hidden-IsjPxMOX.js";import"./useLabel-RD_wy9US.js";import"./useLabels-Dzl_jQ3w.js";import"./useButton-BmGPf_ms.js";import"./Dialog-Bl6BPUcG.js";import"./RSPContexts-CMg-o8P6.js";import"./OverlayArrow-XVvRfD3R.js";import"./useResizeObserver-BmwpnOhf.js";import"./useControlledState-VeRXhIhk.js";import"./Collection-DZTceJ5c.js";import"./index-DlodUe4K.js";import"./Separator-Br0Bxz8Z.js";import"./SelectionManager-CZQO9iyQ.js";import"./useEvent-D1SRwD2V.js";import"./scrollIntoView-DVC3yEfE.js";import"./SelectionIndicator-DIVBfEpP.js";import"./useDescription-0cGLMs3d.js";import"./ListKeyboardDelegate-BhTo0HRI.js";import"./PressResponder-NQ2bsNbb.js";import"./useLocalizedStringFormatter-BzO50CYY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CLn9Imaq.js";import"./getScrollParent-BBgpxqF_.js";import"./VisuallyHidden-DfUkCTQh.js";import"./ModalOverlay-C6pC5Rcr.js";import"./x-BjSALVJQ.js";import"./createLucideIcon-CsIH265l.js";import"./useLocalizedStringFormatter-B0UBIKFs.js";import"./Heading-MC_GZ1Jp.js";import"./Button-CEECLnQG.js";import"./Button.module-BB7N-cLd.js";import"./info-BdG13eZS.js";import"./Popover-DcyZJrol.js";import"./Form-DVi0rKS7.js";import"./useField-TTAqEZ-L.js";import"./check-fBSzI3c7.js";import"./useToggleState-DhLY6quj.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
