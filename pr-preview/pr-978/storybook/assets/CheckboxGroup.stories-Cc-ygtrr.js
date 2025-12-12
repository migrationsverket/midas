import{j as e}from"./iframe-ByNEmIOU.js";import{C as m}from"./CheckboxGroup-BoBreaAI.js";import{C as p}from"./Checkbox-xwRym-Gb.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-3BzwtZU_.js";import"./utils-DTOyoAZG.js";import"./clsx-B-dksMZM.js";import"./Text-BNZ-1xk8.js";import"./useFocusRing-CytbFWM3.js";import"./index-DBfj5PxR.js";import"./index-CGNcjuez.js";import"./clsx-Ciqy0D92.js";import"./Text-D_4I_8jd.js";import"./Label-D1vIF0mY.js";import"./Button-CZ3GNczv.js";import"./Hidden-D8ivFDCG.js";import"./useLabels-lfHEtpRl.js";import"./useButton-DMFyreMT.js";import"./Dialog-rhS8pjjc.js";import"./RSPContexts-BsQr0774.js";import"./OverlayArrow-Cdo_-urs.js";import"./useResizeObserver-BvWv9OXJ.js";import"./useControlledState-BenzJtep.js";import"./Collection-ZYN-xnvk.js";import"./index-8PBKq18y.js";import"./Separator-Bo1xWXSP.js";import"./SelectionManager-Dc_WBs_T.js";import"./useEvent-C5ByhIa5.js";import"./scrollIntoView-BsCZGpGi.js";import"./SelectionIndicator-3-Vz_rSI.js";import"./useDescription-BQ4qbpcd.js";import"./ListKeyboardDelegate-C1GO73cs.js";import"./PressResponder-CkYRdWz_.js";import"./useLocalizedStringFormatter-YRte3exA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DTrxB9eS.js";import"./VisuallyHidden-B2loE3ZQ.js";import"./Button-BZj1eUaG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-WWUimbhC.js";import"./createLucideIcon-HuBhSAyF.js";import"./x-BC2uLgth.js";import"./Heading-B9sYL-oJ.js";import"./info-BJwkolSj.js";import"./Popover-XMptSfTl.js";import"./useFormValidation-HiFPBIvf.js";import"./useField-zV-3UPg2.js";import"./Form-DTzydRAf.js";import"./check-B1Yr3h9i.js";import"./useToggleState-BoLiy2gX.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
