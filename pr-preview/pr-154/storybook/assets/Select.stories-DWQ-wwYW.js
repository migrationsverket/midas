import{j as r}from"./jsx-runtime-CfatFE5O.js";import{S as i,I as s}from"./Select-BLNGmkj9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BbAQVKNP.js";import"./useFocusable-CBtYJN0G.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Hidden-BdUlZqv0.js";import"./ListBox-0A6wTr5z.js";import"./Collection-2vXA9U53.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-D_CtgD1w.js";import"./isScrollable-Bts8_1NI.js";import"./Text-tvqNwYMB.js";import"./useControlledState-nICLO8eb.js";import"./SelectionManager-Fpk2wWjy.js";import"./FocusScope-CQd3XFtb.js";import"./scrollIntoView-h4rVNS8Z.js";import"./context-DSPFb5Ny.js";import"./useDescription-DH96oKB5.js";import"./useCollator-D-4pNSNE.js";import"./useListState-DZnMna8T.js";import"./Dialog-C4OkTBCQ.js";import"./RSPContexts-HQcWPJyv.js";import"./PressResponder-CoilRp67.js";import"./getScrollParent-yMl4gzwT.js";import"./useLocalizedStringFormatter-C26rDIav.js";import"./VisuallyHidden-BTRt4CT8.js";import"./Form-BDgZm-Zm.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-BYU95GUG.js";import"./useMenuTrigger-Dpz6LkCD.js";import"./TextField-CsMr9uWN.js";import"./ButtonGroup-Duds0FV0.js";import"./chevron-down-CVNiYbvV.js";import"./createLucideIcon-DQK9Z80p.js";const re={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const te=["Default","Invalid","disabled"];export{t as Default,o as Invalid,te as __namedExportsOrder,re as default,a as disabled};
