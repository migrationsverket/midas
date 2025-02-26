import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{S as s,I as i}from"./Select-DxalAabi.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-OaHVYHGx.js";import"./useFocusable-3zbZ-RaT.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cu6-cfZ1.js";import"./index-i7ZvCR4f.js";import"./ListBox-B0H8Z5U7.js";import"./Collection-HK2tssQB.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DEsxS4wB.js";import"./SelectionManager-Bgt2CNIh.js";import"./useEvent-Cu7AZejT.js";import"./FocusScope-CrTiNxai.js";import"./context-QyyerVwU.js";import"./useDescription-CxmrmoDT.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-B8OEDIsW.js";import"./Text-DjlCanPO.js";import"./useListState-Dp7sQ2eW.js";import"./useField-BvVxJF6x.js";import"./useLabels-CouxmuYO.js";import"./Dialog-CvXv7k8g.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-DBU6oQr0.js";import"./PressResponder-DE9hv8BO.js";import"./useLocalizedStringFormatter-wW5sL_ZF.js";import"./VisuallyHidden-BfEDOqwV.js";import"./Form-CWi2Vnp4.js";import"./useFormValidation-CXImPhFu.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-kR3Sada0.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-D2RMsFeR.js";import"./TextField.module-DtPJIZYq.js";import"./Button-4ecjOv2K.js";const ae={component:s,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(s,{label:"Välj en frukt",items:S,children:e=>r.jsx(i,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(s,{...e,children:[r.jsx(i,{children:"Apple"}),r.jsx(i,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(s,{...e,children:r.jsx(i,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Many items...'
  },
  render: () => <Select label='Välj en frukt' items={options}>
      {item => <Item>{item.name}</Item>}
    </Select>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Fel!'
  },
  render: args => <Select {...args}>
      <Item>Apple</Item>
      <Item>Lemon</Item>
    </Select>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Avoid using disabled'
      }
    }
  },
  render: args => <Select {...args}>
      <Item>Hej</Item>
    </Select>
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const ie=["Default","Invalid","disabled"];export{t as Default,o as Invalid,ie as __namedExportsOrder,ae as default,a as disabled};
