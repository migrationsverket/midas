import{j as e}from"./iframe-BJQsUCMR.js";import{C as m}from"./CheckboxGroup-DbxXU_zo.js";import{C as p}from"./Checkbox-C5Ftf7nc.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-zgxijUai.js";import"./utils-Cr7K8WJR.js";import"./clsx-B-dksMZM.js";import"./Text-Cc4_9gUZ.js";import"./useFocusRing-DlRtsXUX.js";import"./index-B-fdDFbP.js";import"./index-BHjUdtJS.js";import"./clsx-Ciqy0D92.js";import"./Text-BimK0k6U.js";import"./Label-BL_6rRp2.js";import"./Button-BQ9IF-8b.js";import"./Hidden-o6EY_DbG.js";import"./useLabels-BH12XE_O.js";import"./useButton-CrSiIYdq.js";import"./Dialog-BzC6JDiP.js";import"./RSPContexts-BI01sb8g.js";import"./OverlayArrow-CVLixwYq.js";import"./useResizeObserver-0JCOC-KO.js";import"./useControlledState-DJCuFP0v.js";import"./Collection-uC_HUdxp.js";import"./index-CgFsjumR.js";import"./Separator-DHPzP9m9.js";import"./SelectionManager-DAa-cbbJ.js";import"./useEvent-DG3fzSzi.js";import"./scrollIntoView-DB1hrIB-.js";import"./SelectionIndicator-BBOdvufD.js";import"./useDescription-CKj4G0W7.js";import"./ListKeyboardDelegate-Bka3ub3I.js";import"./PressResponder-D2a5bvYe.js";import"./useLocalizedStringFormatter-CePtc58O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DhO5ZbSM.js";import"./VisuallyHidden-CIBvHJ7K.js";import"./Button-Cuv97NKO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMFy_0c_.js";import"./createLucideIcon-DwyOL3g6.js";import"./x-DY2fwmz2.js";import"./Heading-puME5rnC.js";import"./info--lUqQmMo.js";import"./Popover-6d4uiwK_.js";import"./useFormValidation-BiEbn1a3.js";import"./useField-CaQW11iG.js";import"./Form-Cc0eM_JQ.js";import"./check-BPdW4aI6.js";import"./useToggleState-BX8cW40x.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
