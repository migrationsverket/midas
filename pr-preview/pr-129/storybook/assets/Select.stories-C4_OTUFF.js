import{j as e}from"./jsx-runtime-CfatFE5O.js";import{S as s,I as i}from"./Select-CmF2Rd4Q.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DXFpw2KU.js";import"./useFocusable-B5I9Mbqb.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Hidden-Gy3GO5dR.js";import"./ListBox-DvLrMpeF.js";import"./Collection-BtHce7_i.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-B3iapMmU.js";import"./isScrollable-Bts8_1NI.js";import"./Text-DQL_qUAc.js";import"./useControlledState-D4qbXjzs.js";import"./SelectionManager-CCNC6skk.js";import"./FocusScope-DNSqUz2w.js";import"./scrollIntoView-BJOH5f2z.js";import"./context-B6q4sYiW.js";import"./useDescription-D_hncH71.js";import"./useCollator-CVNM6qS6.js";import"./useListState-DJzrjJHt.js";import"./Dialog-LHjsKVp2.js";import"./RSPContexts-HQcWPJyv.js";import"./PressResponder-BJgT4zxW.js";import"./getScrollParent-yMl4gzwT.js";import"./useLocalizedStringFormatter-D0BHcg8e.js";import"./VisuallyHidden-PZ3yCKRL.js";import"./Form-BsnM7wIB.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-CpBvmz1g.js";import"./useMenuTrigger-Bt1VAIkW.js";import"./TextField-CGuP3PZF.js";import"./Button-BxwB_ABT.js";import"./triangle-alert-BtsNBhJc.js";import"./createLucideIcon-DQK9Z80p.js";import"./chevron-down-CVNiYbvV.js";const sr={component:s,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}};function I(r){const n=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"];return Array.from({length:r},(j,b)=>{const y=n[Math.floor(Math.random()*n.length)];return{id:b+1,name:y}})}const S=I(300),t={args:{placeholder:"Many items..."},render:()=>e.jsx(s,{label:"Välj en frukt",items:S,children:r=>e.jsx(i,{children:r.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:r=>e.jsxs(s,{...r,children:[e.jsx(i,{children:"Apple"}),e.jsx(i,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:r=>e.jsx(s,{...r,children:e.jsx(i,{children:"Hej"})})};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Many items...'
  },
  render: () => <Select label="Välj en frukt" items={options}>
      {item => <Item>{item.name}</Item>}
    </Select>
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isInvalid: true,
    errorMessage: 'Fel!'
  },
  render: args => <Select {...args}>
      <Item>Apple</Item>
      <Item>Lemon</Item>
    </Select>
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const nr=["Default","Invalid","disabled"];export{t as Default,o as Invalid,nr as __namedExportsOrder,sr as default,a as disabled};
