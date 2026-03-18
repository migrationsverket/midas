import{j as e}from"./iframe-C_3vuCKG.js";import{C as m}from"./CheckboxGroup-BBFlArhC.js";import{C as p}from"./Checkbox-j4GLHtm9.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bjas0Mhs.js";import"./utils-CTZ-lGkv.js";import"./clsx-B-dksMZM.js";import"./Text-7oa-kXNm.js";import"./useFocusRing-Bim_lF4S.js";import"./index-YuVOA9gI.js";import"./index-C8YVmd9h.js";import"./clsx-Ciqy0D92.js";import"./Text-DKTyWkTk.js";import"./Label-xlDvx5ZJ.js";import"./Button-wKa-_VCA.js";import"./Hidden-kaOVIzje.js";import"./useLabels-zSAz4c3a.js";import"./useButton-DoN6A2i0.js";import"./Dialog-D8fnfdC3.js";import"./RSPContexts-Chkf77Qe.js";import"./OverlayArrow-ZE9kod3l.js";import"./useResizeObserver-CgSz6iR7.js";import"./useControlledState-B6_sgsXL.js";import"./Collection-9hvmOY0B.js";import"./index-DDTtUNBm.js";import"./Separator-B7JY1WJc.js";import"./SelectionManager-FTUJlAns.js";import"./useEvent-DKEMayTQ.js";import"./scrollIntoView-DcoQ6KWY.js";import"./SelectionIndicator-DnCLE3ip.js";import"./useDescription-D545sxms.js";import"./ListKeyboardDelegate-CTFzEWto.js";import"./PressResponder-BX8v4oF2.js";import"./useLocalizedStringFormatter-DxLulngP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dk9SmqUj.js";import"./getScrollParent-gVSPKYUW.js";import"./VisuallyHidden-BW8k_cqp.js";import"./x-Bp5i4qjM.js";import"./createLucideIcon-Czsnz6Io.js";import"./useLocalizedStringFormatter-Bo6l1f_2.js";import"./Heading-CecS6_nO.js";import"./Button-YkrHmIdv.js";import"./Button.module-BB7N-cLd.js";import"./info-B7mtHfrz.js";import"./Popover-oF-nTXdo.js";import"./useFormValidation-Cnq1Qu61.js";import"./useField-C3BtkGOu.js";import"./Form-DsFznF04.js";import"./check-TF_0rXXk.js";import"./useToggleState-mKqN8lWu.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
