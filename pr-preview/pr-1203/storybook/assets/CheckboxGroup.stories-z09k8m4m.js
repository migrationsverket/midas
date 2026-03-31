import{j as e}from"./iframe-BAIFV8Yb.js";import{C as m}from"./CheckboxGroup-uS1b8Y_a.js";import{C as p}from"./Checkbox-CkbrAgQP.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Y1vkCgJL.js";import"./utils-C4qL7h-Q.js";import"./clsx-B-dksMZM.js";import"./Text-CmPtR76W.js";import"./useFocusRing-btLeUPqX.js";import"./index-mpJUQRSx.js";import"./index-Baj0KArx.js";import"./clsx-Ciqy0D92.js";import"./Text-ygME-eTj.js";import"./Label-BeEM7kKm.js";import"./Button-F9PaMeiW.js";import"./Hidden-I3OO9ryl.js";import"./useLabel-BgyZguEJ.js";import"./useLabels-CWgWqrCK.js";import"./useButton-CcTZ9cV8.js";import"./Dialog-DcU8VZcA.js";import"./RSPContexts-0G2A7Cpm.js";import"./OverlayArrow-D1lOvgYd.js";import"./useResizeObserver-C8d4LO5z.js";import"./useControlledState-CleADvs5.js";import"./Collection-BD2NM9el.js";import"./index-BgNa46qe.js";import"./Separator-CDG0v0GQ.js";import"./SelectionManager-BLAgjyob.js";import"./useEvent-VqD0bu_T.js";import"./scrollIntoView-ChGKlCh8.js";import"./SelectionIndicator-D4XjwJOB.js";import"./useDescription-OhYwP_vB.js";import"./ListKeyboardDelegate-BGul-hJ7.js";import"./PressResponder-C-IVpSMt.js";import"./useLocalizedStringFormatter-B_HxKguN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-COpf6ecM.js";import"./getScrollParent-Dq1fMLPX.js";import"./VisuallyHidden-FRjMpRtC.js";import"./x-BbXy3uH4.js";import"./createLucideIcon-CRLMORiX.js";import"./useLocalizedStringFormatter-geOfM1X1.js";import"./Heading-BKllsz58.js";import"./Button-CqpMDFXh.js";import"./Button.module-BB7N-cLd.js";import"./info-DojpgFR3.js";import"./Popover-cRiDaPUy.js";import"./Form-Ck4aH0QB.js";import"./useField-BY0XbHIO.js";import"./check-Bkhvl8Tz.js";import"./useToggleState-CAibhu_f.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
