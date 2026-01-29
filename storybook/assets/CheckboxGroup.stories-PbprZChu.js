import{j as e}from"./iframe-DUaQtwZ4.js";import{C as m}from"./CheckboxGroup-jj8cHcOx.js";import{C as p}from"./Checkbox-B8_mTf0J.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CgUL0M8n.js";import"./utils-BxoSgS2M.js";import"./clsx-B-dksMZM.js";import"./Text-DKXG1-n8.js";import"./useFocusRing-rVgXHLOR.js";import"./index-DO5-fwSU.js";import"./index-BXP-Ly31.js";import"./clsx-Ciqy0D92.js";import"./Text-DnwjRhY6.js";import"./Label-wakP0reg.js";import"./Button-i4oaDduy.js";import"./Hidden-DsXdzH0m.js";import"./useLabels-BjsrSgf-.js";import"./useButton-D2Ahp_5H.js";import"./Dialog-D7msUOuK.js";import"./RSPContexts-cx-hrirP.js";import"./OverlayArrow-Cgx_lTMC.js";import"./useResizeObserver-BTEZv49F.js";import"./useControlledState-44ZtI1aY.js";import"./Collection-BMkQ_CeU.js";import"./index-CnROtLDA.js";import"./Separator-BLe0h5uq.js";import"./SelectionManager-pH20I5CF.js";import"./useEvent-CQ4rq9N1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CBJjSzW9.js";import"./useDescription-BvCGrAk0.js";import"./ListKeyboardDelegate-C1B-0Vfv.js";import"./PressResponder-DZmm_Vzc.js";import"./useLocalizedStringFormatter-Db2anq4e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D1oOPcGc.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dc19GMYo.js";import"./Button-DWqhmGVb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DIWwlROZ.js";import"./createLucideIcon-DySqv-QW.js";import"./x-D82uET-y.js";import"./Heading-EcPDRrsl.js";import"./info-CoP9QDrH.js";import"./Popover-WT0kta4A.js";import"./useFormValidation-Bt9ME4iF.js";import"./useField-hX13VR-a.js";import"./Form-jPX6pm2E.js";import"./check-C1mcACA6.js";import"./useToggleState-DDzryoms.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
