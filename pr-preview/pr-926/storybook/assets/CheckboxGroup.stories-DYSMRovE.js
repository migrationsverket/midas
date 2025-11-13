import{j as e}from"./iframe-CwELpm8M.js";import{C as m}from"./CheckboxGroup-DjrJWsm-.js";import{C as p}from"./Checkbox-CFmhGeYw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BlDvxHZK.js";import"./utils-DK9hRE35.js";import"./clsx-B-dksMZM.js";import"./Text-DYkkk1QK.js";import"./useFocusRing-CwasRKhc.js";import"./index-CCt8ZrIH.js";import"./index-Bygjd08t.js";import"./clsx-Ciqy0D92.js";import"./Text-DWmt2BS8.js";import"./Label-B4muwmPb.js";import"./Button-sDGd8VvU.js";import"./Hidden-D5d1b3lW.js";import"./useLabels-I-6zbtHM.js";import"./useButton-BRLQrzoM.js";import"./Dialog-CL3DpwQG.js";import"./RSPContexts-CZlcr2p9.js";import"./OverlayArrow-B7Ss0Hdw.js";import"./useResizeObserver-CAwEzG77.js";import"./useControlledState-D5v3Kw8A.js";import"./Collection-PuC9r2Ir.js";import"./index-BHNGmdnS.js";import"./Separator-FNkj0YWe.js";import"./SelectionManager-BhEFA1ye.js";import"./useEvent-DyvSleUX.js";import"./scrollIntoView-CrUhpBNV.js";import"./SelectionIndicator-0kwibh9p.js";import"./useDescription-C9U_IM-m.js";import"./ListKeyboardDelegate-CXCDuUsS.js";import"./PressResponder-BKFrhZd5.js";import"./useLocalizedStringFormatter-B76o2d2j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DkQn_UqF.js";import"./VisuallyHidden-ChMxCmPy.js";import"./useLocalizedStringFormatter-BloNYZ0_.js";import"./Button-CUSbYPw5.js";import"./Button.module-CtQ1deO8.js";import"./x-C39WqzVu.js";import"./createLucideIcon-DWP8AM-1.js";import"./Heading-cNb5ch-4.js";import"./info-Dl46grYH.js";import"./Popover-DORfwghj.js";import"./useFormValidation-Bl1CCT6H.js";import"./useField-C5cGb6wM.js";import"./Form-DJWi7_Wz.js";import"./check-SHxmokbp.js";import"./useToggleState-3QZxMfiM.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
