import{j as r}from"./jsx-runtime-DH9XN8A8.js";import{S as i,I as s}from"./Select-Ctj5Rqxl.js";import"./index-v7USjxUg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-cy0YQPBK.js";import"./useFocusable-CqyV9KfR.js";import"./clsx-B-dksMZM.js";import"./Hidden-UyBzn3h3.js";import"./index-voQlCD4e.js";import"./ListBox-Dgd-qrsy.js";import"./Collection-8piRyjmC.js";import"./index-DrWyGVw-.js";import"./DragAndDrop-C6Riy_Nb.js";import"./Separator-Dtf2YJfv.js";import"./SelectionManager-BYD2QTVK.js";import"./FocusScope-G3ZLoSJ5.js";import"./context-DQYs1ISz.js";import"./useDescription-DUf1CfVo.js";import"./useControlledState-CKtJapZZ.js";import"./ListKeyboardDelegate-CXCmEo1-.js";import"./Text-DrJ9K20X.js";import"./useListState-DbBfC_EQ.js";import"./useField-B1pHB-Nx.js";import"./Dialog-CDeFJ-i8.js";import"./RSPContexts-DJmwAC-V.js";import"./PressResponder-ClJujesq.js";import"./useLocalizedStringFormatter-DLyzyrox.js";import"./VisuallyHidden-DuYW2rLE.js";import"./Form-6qhXXIxn.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-BrZOWkl1.js";import"./chevron-down-BUsHYY-S.js";import"./createLucideIcon-CwPnNAnq.js";import"./TextField-C1ZJdY04.js";import"./TextField.module-BQ_LG1IS.js";import"./Button-ky_ey7R1.js";const ee={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
