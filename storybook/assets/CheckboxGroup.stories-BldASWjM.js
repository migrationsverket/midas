import{j as e}from"./iframe-DQ8MWDzl.js";import{C as m}from"./CheckboxGroup-_VUkMmXl.js";import{C as p}from"./Checkbox-BTkCb0MC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BbsiMUDV.js";import"./utils-MUondYLm.js";import"./clsx-B-dksMZM.js";import"./Text-B7FL6X4L.js";import"./useFocusRing-OnsEPzNC.js";import"./index-CWjVL5dm.js";import"./index-pN5S6Ptu.js";import"./clsx-Ciqy0D92.js";import"./Text-DZRYbZpm.js";import"./Label-Buj55ddc.js";import"./Button-C6oyl_qC.js";import"./Hidden-BFm8JVh5.js";import"./useLabels-v8Ev80De.js";import"./useButton-DHWmFvz2.js";import"./Dialog-Cmu4GjVU.js";import"./RSPContexts-DuvxmCvc.js";import"./OverlayArrow-Cidfy_ws.js";import"./useResizeObserver-CUs-YIhO.js";import"./useControlledState-DLe-crj8.js";import"./Collection-CHWjj3pz.js";import"./index-BiiJUMlY.js";import"./Separator-lkR-B1Y9.js";import"./SelectionManager--WVYRdwt.js";import"./useEvent-LiCRS7cz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-I5GQXWq9.js";import"./useDescription-DlClEnzw.js";import"./ListKeyboardDelegate-JeH3KL6j.js";import"./PressResponder-CnBBkPfP.js";import"./useLocalizedStringFormatter-CfUu-qj4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-JNJHjPum.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CYOdgqsq.js";import"./Button-lMIcCMmO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DopWcpGf.js";import"./createLucideIcon-BgRpLVeX.js";import"./x-B_gkLLTD.js";import"./Heading-BWnhyVKJ.js";import"./info-B1V3XFmD.js";import"./Popover-CdqC2Mtl.js";import"./useFormValidation-DoUO8THk.js";import"./useField--phBsH06.js";import"./Form-CbJ9UDZ3.js";import"./check-CeaqFALW.js";import"./useToggleState-DVPLAu_I.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
