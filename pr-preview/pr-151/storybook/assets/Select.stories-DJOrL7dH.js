import{j as r}from"./jsx-runtime-CfatFE5O.js";import{S as i,I as s}from"./Select-Bxyxi4by.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CzNY3qi3.js";import"./useFocusable-ByLM5O5C.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bxls36u3.js";import"./ListBox-DsU7CrKu.js";import"./Collection-Dn-gE2FZ.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-Dr3ByzFu.js";import"./scrollIntoView-D9xnEt38.js";import"./Text-Co9214ok.js";import"./useControlledState--51_K5zJ.js";import"./SelectionManager-C5nYy_WJ.js";import"./FocusScope-BSY4Zh8-.js";import"./context-DDnqLcyX.js";import"./useDescription-Dw4F0l5g.js";import"./useCollator-D9qAE6tY.js";import"./useListState-DCWipFRX.js";import"./Dialog-DBLZ0hCE.js";import"./RSPContexts-Djf1EgA4.js";import"./PressResponder-CfqlYSS9.js";import"./useLocalizedStringFormatter-WdMhSU39.js";import"./VisuallyHidden-BaXIMSs1.js";import"./Form-51MLUZf-.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-BdQttHQL.js";import"./useMenuTrigger-fAjkoFlW.js";import"./TextField-D2-rM2Si.js";import"./ButtonGroup-Duds0FV0.js";import"./chevron-down-CVNiYbvV.js";import"./createLucideIcon-DQK9Z80p.js";const $={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const ee=["Default","Invalid","disabled"];export{t as Default,o as Invalid,ee as __namedExportsOrder,$ as default,a as disabled};
