import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{S as s,I as i}from"./Select-CdsbsK7T.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-yfKCtftD.js";import"./useFocusable-DASL9ZMT.js";import"./clsx-B-dksMZM.js";import"./Hidden-BuU8W4f_.js";import"./index-cpIEhwLo.js";import"./ListBox-BJu4B25V.js";import"./Collection-BwU2u2VA.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CCz1TW3i.js";import"./SelectionManager-D-t0nxvZ.js";import"./useEvent-DdIskmYv.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-ChnRxKGK.js";import"./context-Pt6elAMD.js";import"./useDescription-E6E6fNpx.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-BKqbUahT.js";import"./Text-DX8e4zrg.js";import"./useListState-9LC8J6OT.js";import"./useField-bJrG6qmG.js";import"./useLabels-MT93WuwX.js";import"./Dialog-TNqG-RMU.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CiLmTXSK.js";import"./PressResponder-CBO2T7iU.js";import"./useLocalizedStringFormatter-C4mPhEQp.js";import"./getScrollParent-CrrBdd7g.js";import"./VisuallyHidden-D11zA9Ye.js";import"./Form-BTz3WNf3.js";import"./useFormValidation-8Qy7QSzR.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-CK1scNUf.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-CWVrmXSV.js";import"./TextField.module-CBAfyb2u.js";import"./Button-PLn7YPfi.js";const sr={component:s,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(r=>({name:r,id:r.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>e.jsx(s,{label:"Välj en frukt",items:S,children:r=>e.jsx(i,{children:r.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:r=>e.jsxs(s,{...r,children:[e.jsx(i,{children:"Apple"}),e.jsx(i,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:r=>e.jsx(s,{...r,children:e.jsx(i,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const nr=["Default","Invalid","disabled"];export{t as Default,o as Invalid,nr as __namedExportsOrder,sr as default,a as disabled};
