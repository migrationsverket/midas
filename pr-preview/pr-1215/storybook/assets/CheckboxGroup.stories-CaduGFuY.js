import{j as e}from"./iframe-DagPb3DG.js";import{C as m}from"./CheckboxGroup-Dl1u4DU_.js";import{C as p}from"./Checkbox-CvQ68Pev.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DRukOLZw.js";import"./utils-DEIIZrT8.js";import"./clsx-B-dksMZM.js";import"./Text-DrUxMYO_.js";import"./useFocusRing-DV81koGP.js";import"./index-X3kKW3OI.js";import"./index-B3KKDvTU.js";import"./clsx-Ciqy0D92.js";import"./Text-DqORZFkZ.js";import"./Label-DKIpbmdG.js";import"./Button-Ckt0c6HW.js";import"./Hidden-BaZDL4oi.js";import"./useLabel-DEs8DT9p.js";import"./useLabels-mT4eX36O.js";import"./useButton-BMw6H5IS.js";import"./Dialog-ieL7gfDy.js";import"./RSPContexts-BcGBAh60.js";import"./OverlayArrow-BzpP4f-U.js";import"./useResizeObserver-Bk7CYcnR.js";import"./useControlledState-CD6VDT_E.js";import"./Collection-DeRVKKKm.js";import"./index-CBRKms-h.js";import"./Separator-BSe9V6Ej.js";import"./SelectionManager-B5aNGbbs.js";import"./useEvent-Cclj6Db-.js";import"./scrollIntoView-C3PoXb1x.js";import"./SelectionIndicator-DfCL_lJp.js";import"./useDescription-BqZkbbJU.js";import"./ListKeyboardDelegate-Ui_fhppm.js";import"./PressResponder-CCFfMcT7.js";import"./useLocalizedStringFormatter-B_hF3Aaq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjzPeBlF.js";import"./getScrollParent-CH3EMup_.js";import"./VisuallyHidden-BiE9yBGm.js";import"./Dialog-Dyiitimk.js";import"./x-DDrUqxbS.js";import"./createLucideIcon-KVoeMAdo.js";import"./useLocalizedStringFormatter-C9lWcR8U.js";import"./Heading-g3dzpiDw.js";import"./Button-DeUqMdFb.js";import"./Button.module-BB7N-cLd.js";import"./info-D8dy8uKY.js";import"./Popover-DTk7zRne.js";import"./Form-B9MvElX0.js";import"./useField-ZI9WuaQD.js";import"./check-DJH9QBHE.js";import"./useToggleState-CHbJBhc7.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
