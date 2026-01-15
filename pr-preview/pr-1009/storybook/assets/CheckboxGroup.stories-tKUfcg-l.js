import{j as e}from"./iframe-D7pn65HD.js";import{C as m}from"./CheckboxGroup-DBccycY_.js";import{C as p}from"./Checkbox-CAOj39nM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CDBZhnFy.js";import"./utils-gkLu2Q80.js";import"./clsx-B-dksMZM.js";import"./Text-CMQOGgUM.js";import"./useFocusRing-BRQN0HVs.js";import"./index-B0zKztvS.js";import"./index-CABcdHYW.js";import"./clsx-Ciqy0D92.js";import"./Text-BoHU8OeY.js";import"./Label-CRf-9xcj.js";import"./Button--lRgnSCB.js";import"./Hidden-CqqsxRSw.js";import"./useLabels-e3eqZc1V.js";import"./useButton-BtvyslLl.js";import"./Dialog-CQ-vtgp9.js";import"./RSPContexts-BiIeKPVo.js";import"./OverlayArrow-CS1O52d7.js";import"./useResizeObserver-2EUM9m3y.js";import"./useControlledState-DyV8n_wu.js";import"./Collection-Bw8YLpyL.js";import"./index-CS4RSD2-.js";import"./Separator-DC0OgbDN.js";import"./SelectionManager-CZBRL3Fv.js";import"./useEvent-CFzcDuTK.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C9yAklod.js";import"./useDescription-R-m8v4zo.js";import"./ListKeyboardDelegate-BmLHcRFS.js";import"./PressResponder-BnLM6qpa.js";import"./useLocalizedStringFormatter-DbF5DsVQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DP_6AQ0a.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cjr7sTkY.js";import"./Button-_4N2Tdvz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CFmBjBoC.js";import"./createLucideIcon-B4o84bfn.js";import"./x-CSD6cUrJ.js";import"./Heading-CI-0x4tv.js";import"./info-BMpDQggb.js";import"./Popover-CbpVQe_S.js";import"./useFormValidation-dgDhPSYS.js";import"./useField-BMGySlzI.js";import"./Form-DjYfCbKz.js";import"./check-B8FzUGVx.js";import"./useToggleState-CeXb9jii.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
