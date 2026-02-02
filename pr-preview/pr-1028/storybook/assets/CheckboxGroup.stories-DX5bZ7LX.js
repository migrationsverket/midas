import{j as e}from"./iframe-BhBYd-yz.js";import{C as m}from"./CheckboxGroup-CtSgUfq3.js";import{C as p}from"./Checkbox-D-ttFQS5.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-6GseZL7F.js";import"./utils-dKiMTOip.js";import"./clsx-B-dksMZM.js";import"./Text-Cnf9RaEJ.js";import"./useFocusRing-CTfHsPPf.js";import"./index-Bb1CvUWk.js";import"./index-4IMT8kge.js";import"./clsx-Ciqy0D92.js";import"./Text-DPMgLSbx.js";import"./Label-BoxF1uCt.js";import"./Button-BahhSbHm.js";import"./Hidden-rBTlH4Hd.js";import"./useLabels-WxFJLHTa.js";import"./useButton-CPG29_41.js";import"./Dialog-NyWuhiGL.js";import"./RSPContexts-Bop_NSvS.js";import"./OverlayArrow-kiakQklW.js";import"./useResizeObserver-D7VTZ66o.js";import"./useControlledState-BoIGYg0G.js";import"./Collection-BOgrKMsb.js";import"./index--BoD9glt.js";import"./Separator-CX1_cYEp.js";import"./SelectionManager-CwhmGt3D.js";import"./useEvent-B-Flje4X.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DwJ1FrM5.js";import"./useDescription-DJAzLegN.js";import"./ListKeyboardDelegate-Bw4fFRxE.js";import"./PressResponder-B43dxFmW.js";import"./useLocalizedStringFormatter-FWWM_265.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lIFkLz2v.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C_umXD1b.js";import"./Button-CltQ2OUe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxUWb3BW.js";import"./createLucideIcon-C3sGvf5y.js";import"./x-CK6S_-0Q.js";import"./Heading-ByYP2DRA.js";import"./info-ZJ0Hq9Us.js";import"./Popover-Cr6u0eyl.js";import"./useFormValidation-B4ppQ1b7.js";import"./useField-CGcAJZ4v.js";import"./Form-B7gnyP5J.js";import"./check-CYyt5Vv9.js";import"./useToggleState-CE_zRxyc.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
