import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{S as s,I as i}from"./Select-DR5i4scC.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-yfKCtftD.js";import"./useFocusable-DASL9ZMT.js";import"./clsx-B-dksMZM.js";import"./Hidden-BuU8W4f_.js";import"./index-cpIEhwLo.js";import"./ListBox-_QlYZUep.js";import"./Collection-BwU2u2VA.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-d-7_urt1.js";import"./SelectionManager-XmkSC-nD.js";import"./useEvent-DdIskmYv.js";import"./FocusScope-ChnRxKGK.js";import"./context-Pt6elAMD.js";import"./useDescription-E6E6fNpx.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-giRuR5NM.js";import"./Text-DX8e4zrg.js";import"./useListState-SMYdBkRw.js";import"./useField-bJrG6qmG.js";import"./useLabels-MT93WuwX.js";import"./Dialog-CYSlf_Sz.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CiLmTXSK.js";import"./PressResponder-CBO2T7iU.js";import"./useLocalizedStringFormatter-C4mPhEQp.js";import"./VisuallyHidden-D11zA9Ye.js";import"./Form-BTz3WNf3.js";import"./useFormValidation-8Qy7QSzR.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-C7794JqY.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-CjPFS-OI.js";import"./TextField.module-CBAfyb2u.js";import"./Button-DXp0UpcS.js";const ae={component:s,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(s,{label:"Välj en frukt",items:S,children:e=>r.jsx(i,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(s,{...e,children:[r.jsx(i,{children:"Apple"}),r.jsx(i,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(s,{...e,children:r.jsx(i,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
