import{j as e}from"./iframe-BMyiRd9K.js";import{C as m}from"./CheckboxGroup-N1ouv46q.js";import{C as p}from"./Checkbox-B5zWfDp6.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DXRdy55K.js";import"./utils-C26E_E_V.js";import"./clsx-B-dksMZM.js";import"./Text-BTUDznp2.js";import"./useFocusRing-KDIp_VHj.js";import"./index-DzAiOFl3.js";import"./index-BSTk-fI9.js";import"./clsx-Ciqy0D92.js";import"./Text-DkNX6WfN.js";import"./Label-BdWU5puH.js";import"./Button-CcqdNx43.js";import"./Hidden-CbMhbGj6.js";import"./useLabels-BskVawR9.js";import"./useButton-C7s-887l.js";import"./Dialog-BzEsiJXM.js";import"./RSPContexts-CBk9fMai.js";import"./OverlayArrow-DSIfRBcJ.js";import"./useResizeObserver-DMU7hmMI.js";import"./useControlledState-CG4KMb6R.js";import"./Collection-DhlHljiD.js";import"./index-B9caRvqr.js";import"./Separator-DwxvodNH.js";import"./SelectionManager-DB-NgXJU.js";import"./useEvent-CWlcVJ27.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-8OkqnOyG.js";import"./useDescription-BgY-hAhj.js";import"./ListKeyboardDelegate-Bwq4Qq2J.js";import"./PressResponder-DQWdEAyb.js";import"./useLocalizedStringFormatter-q3GhEdbW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1SLx_EV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-d5nRRxHR.js";import"./Button-EwGc72xf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3VS7mKox.js";import"./createLucideIcon-7JtAUgGZ.js";import"./x-D1zGWb4X.js";import"./Heading-D6NJUCLx.js";import"./info-hNGI0x4w.js";import"./Popover-BqQFbTVc.js";import"./useFormValidation-BDXHTcoF.js";import"./useField-ChfD_3VJ.js";import"./Form-u1pt3U45.js";import"./check-Dz0b2Arz.js";import"./useToggleState-DONFwRk5.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
