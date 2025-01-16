import{j as r}from"./jsx-runtime-CfatFE5O.js";import{S as i,I as s}from"./Select-B3IqcSGI.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BvTLClQx.js";import"./useFocusable-CI7IKKVh.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cj803rEv.js";import"./ListBox-DyeJLwWs.js";import"./Collection-C4MnC92I.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-DA-Ld4HW.js";import"./Separator-CIU4dNV7.js";import"./SelectionManager-DRGqbt9A.js";import"./FocusScope-DXS1oVaO.js";import"./context-WoXASG7e.js";import"./useDescription-g1HYx49D.js";import"./useControlledState-CccRFgkZ.js";import"./ListKeyboardDelegate-DaTzZypo.js";import"./Text-B5xeh108.js";import"./Label-CyV7_vzg.js";import"./useListState-Cs8bU5OO.js";import"./Dialog-BP7SazX_.js";import"./RSPContexts-Djf1EgA4.js";import"./PressResponder-B8JDidd-.js";import"./useLocalizedStringFormatter-B63kKuQ6.js";import"./VisuallyHidden-CLrU_C9N.js";import"./Form-Bv9Hrtjx.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-5KHe4aPU.js";import"./TextField-BxaIloLM.js";import"./ButtonGroup-Duds0FV0.js";import"./chevron-down-CVNiYbvV.js";import"./createLucideIcon-DQK9Z80p.js";const $={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
