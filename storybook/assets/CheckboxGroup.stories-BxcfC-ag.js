import{j as e}from"./iframe--7ouzhCF.js";import{C as m}from"./CheckboxGroup-DYIyiDCH.js";import{C as p}from"./Checkbox-BZvhv2Qb.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C9fNdBcq.js";import"./utils-CCrPRXFd.js";import"./clsx-B-dksMZM.js";import"./Text-_ylAafRx.js";import"./useFocusRing-VMBdHrfo.js";import"./index-7GfLKj_c.js";import"./index-C-Az-PCO.js";import"./clsx-Ciqy0D92.js";import"./Text-Dt6EjG80.js";import"./Label-DF6-G_IC.js";import"./Button-MMOZkiqP.js";import"./Hidden-DnK2cKnr.js";import"./useLabels-D2JG2NHF.js";import"./useButton-DUghFOmd.js";import"./Dialog-ovIFsnup.js";import"./RSPContexts-CaPUaSms.js";import"./OverlayArrow-BPOKBhVM.js";import"./useResizeObserver-DIFFWWTx.js";import"./useControlledState-WRN65Jvl.js";import"./Collection-Drg-t8dC.js";import"./index-4Zg9c3TK.js";import"./Separator-CSVyjKiY.js";import"./SelectionManager-D7-uU-_9.js";import"./useEvent-BabVHB3y.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CgFJ4ky6.js";import"./useDescription-XC1woF3d.js";import"./ListKeyboardDelegate-D6v7un4s.js";import"./PressResponder-exETk_hm.js";import"./useLocalizedStringFormatter-BqAS8Gzt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BIqYLGym.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DZP5hbvT.js";import"./Button-D_kviF_H.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CiDiFH31.js";import"./createLucideIcon-DMRXokTE.js";import"./x-ik0duNRE.js";import"./Heading-CBucoZUc.js";import"./info-CqhI6-dj.js";import"./Popover-Db6zLERG.js";import"./useFormValidation-CNRC9kel.js";import"./useField-IWBX-r2S.js";import"./Form-DACvBZcS.js";import"./check-B0IVbRVs.js";import"./useToggleState-BijhTd3x.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
