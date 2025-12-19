import{j as e}from"./iframe-CgGNk3rw.js";import{C as m}from"./CheckboxGroup-CkzpPsv6.js";import{C as p}from"./Checkbox-BqskeDJJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BGEe_2Lk.js";import"./utils-Bsla82oN.js";import"./clsx-B-dksMZM.js";import"./Text-CFQfYKY3.js";import"./useFocusRing-PEhcRx0f.js";import"./index-DCKR56k8.js";import"./index-BSP806VS.js";import"./clsx-Ciqy0D92.js";import"./Text-pXEnGwlG.js";import"./Label-CSPedpfh.js";import"./Button-BQUsf6YZ.js";import"./Hidden-YphN5jOW.js";import"./useLabels-CVmJxcvd.js";import"./useButton-Bxc6d1yq.js";import"./Dialog-jR3D-z7-.js";import"./RSPContexts-Dw10a7j-.js";import"./OverlayArrow-CsXCkWD1.js";import"./useResizeObserver-AfLQF_r4.js";import"./useControlledState-CsvnnSan.js";import"./Collection-2VUtJDr5.js";import"./index-IRZBR9PL.js";import"./Separator-e8twjvqy.js";import"./SelectionManager-C7V2VW_r.js";import"./useEvent-B-jnvtdK.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTFJtyNB.js";import"./useDescription-BqkAvqbm.js";import"./ListKeyboardDelegate-CrS6OjkH.js";import"./PressResponder-C2HhztG9.js";import"./useLocalizedStringFormatter-DHE3JpRj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DZrFgt0i.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dxo16egF.js";import"./Button-fl31v-Li.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C6Xrjd2_.js";import"./createLucideIcon-DHWtI_nR.js";import"./x-D2WM6JD2.js";import"./Heading-BwJP6vZg.js";import"./info-B4jFr6we.js";import"./Popover-BYeKEkQP.js";import"./useFormValidation-BKoqHlGb.js";import"./useField-Bz_rH_Qe.js";import"./Form-VRZWFTXK.js";import"./check-Blnc34UG.js";import"./useToggleState-CAQ7uauC.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
