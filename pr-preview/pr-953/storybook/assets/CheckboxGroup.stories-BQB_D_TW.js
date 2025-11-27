import{j as e}from"./iframe-krU3lnll.js";import{C as m}from"./CheckboxGroup-BpcQXT45.js";import{C as p}from"./Checkbox-B6FDwXRS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BZw0hilX.js";import"./utils-DnS0_qQ0.js";import"./clsx-B-dksMZM.js";import"./Text-DbFNQrMd.js";import"./useFocusRing-CWzVObSZ.js";import"./index-C3RV6eBu.js";import"./index-VFJCran0.js";import"./clsx-Ciqy0D92.js";import"./Text-CRDp8VCP.js";import"./Label-DCWCy9Nd.js";import"./Button-BU6Lkb_Z.js";import"./Hidden-VnIe4cgE.js";import"./useLabels-CUZsRNLj.js";import"./useButton-D0AxcNmg.js";import"./Dialog-Dl6ULBTo.js";import"./RSPContexts-CK5__bLT.js";import"./OverlayArrow-DZYqRZ0L.js";import"./useResizeObserver-BZbGIQoB.js";import"./useControlledState-BaSC3gVY.js";import"./Collection-SMI5ud3S.js";import"./index-BI9wnSMS.js";import"./Separator-Z9cKJYqT.js";import"./SelectionManager-1YUjXvJB.js";import"./useEvent-DlIKZhAG.js";import"./scrollIntoView-DmSwjTPb.js";import"./SelectionIndicator-CDrcvIKn.js";import"./useDescription-BPn6lxFJ.js";import"./ListKeyboardDelegate-DG_DvB0T.js";import"./PressResponder-jZ7-PsE5.js";import"./useLocalizedStringFormatter-DZ80bzWS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DN-of50m.js";import"./VisuallyHidden-C3s2Crnt.js";import"./Button-C-0GV_cb.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B3TpQ19y.js";import"./createLucideIcon-DPakKbXd.js";import"./x-C81gg8f4.js";import"./Heading-CWDBVfdi.js";import"./info-P1AvIU-w.js";import"./Popover-Cq24sl41.js";import"./useFormValidation-D2kRzjUH.js";import"./useField-D2HtNlVL.js";import"./Form-DF--Q7sV.js";import"./check-ByYlxscW.js";import"./useToggleState-DmGXIFA4.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
