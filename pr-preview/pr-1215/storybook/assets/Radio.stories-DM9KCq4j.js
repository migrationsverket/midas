import{j as e}from"./iframe-DagPb3DG.js";import{R as a,a as c}from"./Radio-mFNT3z5K.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DEIIZrT8.js";import"./clsx-B-dksMZM.js";import"./Group-Dxyy6nmS.js";import"./useFocusRing-DV81koGP.js";import"./index-X3kKW3OI.js";import"./index-B3KKDvTU.js";import"./FieldError-DRukOLZw.js";import"./Text-DrUxMYO_.js";import"./clsx-Ciqy0D92.js";import"./Text-DqORZFkZ.js";import"./Form-B9MvElX0.js";import"./Button-Ckt0c6HW.js";import"./Hidden-BaZDL4oi.js";import"./useLabel-DEs8DT9p.js";import"./useLabels-mT4eX36O.js";import"./useButton-BMw6H5IS.js";import"./SelectionIndicator-DfCL_lJp.js";import"./useField-ZI9WuaQD.js";import"./VisuallyHidden-BiE9yBGm.js";import"./useControlledState-CD6VDT_E.js";import"./Label-DKIpbmdG.js";import"./Dialog-ieL7gfDy.js";import"./RSPContexts-BcGBAh60.js";import"./OverlayArrow-BzpP4f-U.js";import"./useResizeObserver-Bk7CYcnR.js";import"./Collection-DeRVKKKm.js";import"./index-CBRKms-h.js";import"./Separator-BSe9V6Ej.js";import"./SelectionManager-B5aNGbbs.js";import"./useEvent-Cclj6Db-.js";import"./scrollIntoView-C3PoXb1x.js";import"./useDescription-BqZkbbJU.js";import"./ListKeyboardDelegate-Ui_fhppm.js";import"./PressResponder-CCFfMcT7.js";import"./useLocalizedStringFormatter-B_hF3Aaq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjzPeBlF.js";import"./getScrollParent-CH3EMup_.js";import"./Dialog-Dyiitimk.js";import"./x-DDrUqxbS.js";import"./createLucideIcon-KVoeMAdo.js";import"./useLocalizedStringFormatter-C9lWcR8U.js";import"./Heading-g3dzpiDw.js";import"./Button-DeUqMdFb.js";import"./Button.module-BB7N-cLd.js";import"./info-D8dy8uKY.js";import"./Popover-DTk7zRne.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => <Radio key={fruit} value={fruit} id={fruit.toLowerCase()} className='test-radio-class'>
        {fruit}
      </Radio>),
    className: 'test-class'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isReadOnly: true,
    value: 'Kiwi'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    isRequired: true
  },
  render: args => <form>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    errorMessage: undefined,
    validate: value => value?.includes('Äpple') ? 'Inga äpplen är tillåtna' : true
  },
  render: args => <form>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <>
        <Radio key='radio-apple' value='apple'>
          Äpple
        </Radio>
        <Radio key='radio-banan' value='banan'>
          Banan
        </Radio>
      </>,
    orientation: 'horizontal'
  }
}`,...m.parameters?.docs?.source}}};const cr=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,cr as __namedExportsOrder,mr as default};
