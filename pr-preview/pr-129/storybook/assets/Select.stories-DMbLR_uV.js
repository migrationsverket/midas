import{j as r}from"./jsx-runtime-CfatFE5O.js";import{S as i,I as s}from"./Select-DHAqq2R7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DT7GP9cZ.js";import"./useFocusable-CumRtMek.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Hidden-BDrfkcGl.js";import"./ListBox-DEmAVjdW.js";import"./useLocalizedStringFormatter-CJQ2YW_-.js";import"./context-B-CHLIzY.js";import"./SelectionManager-Dlj1OP5g.js";import"./FocusScope-ZIzs6o6Q.js";import"./scrollIntoView-CCa98SRG.js";import"./isScrollable-Bts8_1NI.js";import"./useDescription-Byi79ULz.js";import"./useControlledState-CgO2nQJG.js";import"./Dialog-ClSuYuGc.js";import"./RSPContexts-HQcWPJyv.js";import"./PressResponder-C2B0xc3M.js";import"./getScrollParent-yMl4gzwT.js";import"./VisuallyHidden-C-zzsA_l.js";import"./Collection-Ds_E47gG.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-B3iapMmU.js";import"./Form-s_XHPtuD.js";import"./useCollator-BUqXk6ex.js";import"./useSingleSelectListState-BJpJhJaz.js";import"./intlStrings-ZMTSFH_M.js";import"./TextField-RnBweoew.js";import"./triangle-alert-BtsNBhJc.js";import"./createLucideIcon-DQK9Z80p.js";import"./chevron-down-CVNiYbvV.js";const te={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}};function I(e){const n=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"];return Array.from({length:e},(j,b)=>{const y=n[Math.floor(Math.random()*n.length)];return{id:b+1,name:y}})}const S=I(300),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const oe=["Default","Invalid","disabled"];export{t as Default,o as Invalid,oe as __namedExportsOrder,te as default,a as disabled};
