import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{S as i,I as s}from"./Select-XNcU5QV6.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BzJaSZRM.js";import"./useFocusable-CksQMUge.js";import"./clsx-B-dksMZM.js";import"./Hidden-lNm2kOvW.js";import"./index-i7ZvCR4f.js";import"./ListBox-CHo5cvnG.js";import"./Collection-CK2ynvrh.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-LJWPx31W.js";import"./SelectionManager-AgpWWGw5.js";import"./useEvent-Dai_kuU3.js";import"./FocusScope-DAbLQFiD.js";import"./context-CKCbQYCl.js";import"./useDescription-DExh6MlB.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-D5wf4s7-.js";import"./Text-CLew4G9p.js";import"./useListState-MzPB0mDW.js";import"./useField-DBAwgFPt.js";import"./useLabels-ChllpMGt.js";import"./Dialog-DQYxKsVU.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-t3ozUHtu.js";import"./PressResponder-D3_6-BOs.js";import"./useLocalizedStringFormatter-tao21eyt.js";import"./VisuallyHidden-DVuqn1m6.js";import"./Form-00Vp9xmy.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-BDF5soEj.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-5CLZQ--7.js";import"./TextField.module-Br9hgrKB.js";import"./Button-DLOYNcU_.js";const oe={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const ae=["Default","Invalid","disabled"];export{t as Default,o as Invalid,ae as __namedExportsOrder,oe as default,a as disabled};
