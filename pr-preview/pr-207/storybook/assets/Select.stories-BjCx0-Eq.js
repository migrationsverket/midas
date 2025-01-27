import{j as r}from"./jsx-runtime-CfatFE5O.js";import{S as i,I as s}from"./Select-PhckAau2.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-2KCD5_KE.js";import"./useFocusable-D_XT9yGL.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Hidden-BAsLqWFN.js";import"./ListBox-DGh8ahDr.js";import"./Collection-B-efTaNC.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-DA-Ld4HW.js";import"./Separator-0tySCNVb.js";import"./SelectionManager-DnXZ6a4a.js";import"./FocusScope-DET1Ddde.js";import"./context-dgBkp4xb.js";import"./useDescription-h6ucxGnb.js";import"./useControlledState-D4tkfNix.js";import"./ListKeyboardDelegate-D1r6xHoY.js";import"./Text-BU-eztOh.js";import"./Label-C8twjpZa.js";import"./useListState-D-u_TPDy.js";import"./Dialog-0tKFQKsB.js";import"./RSPContexts-Djf1EgA4.js";import"./PressResponder-kwyxQayG.js";import"./useLocalizedStringFormatter-HXVaNQBz.js";import"./VisuallyHidden-Q_EkBmK7.js";import"./Form-Co9Hp48n.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-BP8IYww0.js";import"./chevron-down-CVNiYbvV.js";import"./createLucideIcon-DQK9Z80p.js";import"./TextField-DMtjTUXl.js";import"./TextField.module-B0Qpd840.js";import"./Button-BB3MClES.js";const ee={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const re=["Default","Invalid","disabled"];export{t as Default,o as Invalid,re as __namedExportsOrder,ee as default,a as disabled};
