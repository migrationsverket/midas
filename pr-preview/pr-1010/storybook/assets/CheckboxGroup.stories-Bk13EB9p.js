import{j as e}from"./iframe-CdV99NDU.js";import{C as m}from"./CheckboxGroup-BKScXh9Q.js";import{C as p}from"./Checkbox-BBjbUG52.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CzkKIm6d.js";import"./utils-CMfRIaXv.js";import"./clsx-B-dksMZM.js";import"./Text-DrXygMM2.js";import"./useFocusRing-e9aHRU6a.js";import"./index-BzgysReL.js";import"./index-yHLZSSmE.js";import"./clsx-Ciqy0D92.js";import"./Text-C43rwyi-.js";import"./Label-CDwmSx2A.js";import"./Button-pO8fiD1O.js";import"./Hidden-B5huBJsQ.js";import"./useLabels-BD260d70.js";import"./useButton-KkSusS_w.js";import"./Dialog-CYr1tOJW.js";import"./RSPContexts-aiXnIDGZ.js";import"./OverlayArrow-DfWMMDPB.js";import"./useResizeObserver-Cbv0FbJp.js";import"./useControlledState-RbaACq8P.js";import"./Collection-DqZyFB69.js";import"./index-p-XLETit.js";import"./Separator-CMc22emk.js";import"./SelectionManager-DHJky9qJ.js";import"./useEvent-CUH_UTTo.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcarU12u.js";import"./useDescription-CMkoGRwr.js";import"./ListKeyboardDelegate-C05_rVzA.js";import"./PressResponder-CAYXo6yN.js";import"./useLocalizedStringFormatter-Bp1Nt6ma.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_Bxr_lht.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B5phWBq7.js";import"./Button-Dfhqrxs-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dbxw2dmh.js";import"./createLucideIcon-B6F2wH1H.js";import"./x-BA1eIH_o.js";import"./Heading-CJMyDpVX.js";import"./info-B3aMcGeP.js";import"./Popover-C6fv9dIY.js";import"./useFormValidation-KDukGO29.js";import"./useField-CYefFohu.js";import"./Form-CAqYEDpD.js";import"./check-Dgz6O7pt.js";import"./useToggleState-DKz-0Ski.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
