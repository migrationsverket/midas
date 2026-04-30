import{j as e}from"./iframe-CZvMPihu.js";import{C as m}from"./CheckboxGroup-BdtKmf9S.js";import{C as p}from"./Checkbox-BPih_xCD.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BTAbwmK2.js";import"./utils-Cqj1DeIe.js";import"./clsx-B-dksMZM.js";import"./Text-Dw0gnghQ.js";import"./useFocusRing-B8JnrIcb.js";import"./index-GihrdCeH.js";import"./index-BkbhKg_o.js";import"./clsx-Ciqy0D92.js";import"./Text-DgbEXfJ4.js";import"./Label-Cwwy-uVX.js";import"./Button-cyaqw3RD.js";import"./Hidden-DWCJo24h.js";import"./useLabel-CaU9RgyQ.js";import"./useLabels-DwUdsAUl.js";import"./useButton-DBJlOvpF.js";import"./Dialog-D8ZYrMfm.js";import"./RSPContexts-rKUrJdMM.js";import"./OverlayArrow-289ws-2M.js";import"./useResizeObserver-CCIHhEzp.js";import"./useControlledState-FTjsg_U3.js";import"./Collection-Bc6fSmVS.js";import"./index-DYYCl4w-.js";import"./Separator-C0Jwfzsf.js";import"./SelectionManager-BO7qKHfi.js";import"./useEvent-CdJapIWn.js";import"./scrollIntoView-DuwlJzJe.js";import"./SelectionIndicator-DoPI1KKj.js";import"./useDescription-Di037rLQ.js";import"./ListKeyboardDelegate-DhhwE-OE.js";import"./PressResponder-DGNkfhIq.js";import"./useLocalizedStringFormatter-DcVcSICC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C0DkVVOH.js";import"./getScrollParent-CWdG5ZLM.js";import"./VisuallyHidden-CgB8hx88.js";import"./ModalOverlay-rg8WRRv_.js";import"./x-COwp3eV_.js";import"./createLucideIcon-w0hL8zu1.js";import"./useLocalizedStringFormatter-CQr6tlIE.js";import"./Heading-ViyAyNFK.js";import"./Button-DHBiSvIz.js";import"./Button.module-BB7N-cLd.js";import"./info-U2EGid5T.js";import"./Popover-Dd-0iVOw.js";import"./Form-o2rb1jhL.js";import"./useField-Ce8tB8jB.js";import"./check-DTmnps9K.js";import"./useToggleState-Bocde2Yu.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
