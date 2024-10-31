import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{S as i,I as s}from"./Select-CKTjj3Ng.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-Dha_4XyB.js";import"./useFocusable-VocBF6K7.js";import"./index-Drt3gf4w.js";import"./clsx-B-dksMZM.js";import"./Hidden-C_TSN0PF.js";import"./ListBox-D9TPZaWR.js";import"./useLocalizedStringFormatter-BTb93L0a.js";import"./context-Cc6IY3a2.js";import"./SelectionManager-CB8s_d_z.js";import"./FocusScope-5QBoAiD_.js";import"./scrollIntoView-CFUY1OLg.js";import"./isScrollable-Bts8_1NI.js";import"./useDescription--GocBrNn.js";import"./useControlledState-DEtK-NO6.js";import"./Dialog-Dq1NNyUA.js";import"./RSPContexts-Bc9pl35m.js";import"./PressResponder-BFAFWwt3.js";import"./getScrollParent-yMl4gzwT.js";import"./VisuallyHidden-DkAe6xi1.js";import"./Collection-TFJR_E55.js";import"./index-Bb28N59q.js";import"./DragAndDrop-BDFo6_gz.js";import"./Form-CM4H1VDM.js";import"./useCollator-CwU9GkQ-.js";import"./useSingleSelectListState-DdQ6dRSd.js";import"./intlStrings-ZMTSFH_M.js";import"./TextField-C8PLR2fl.js";import"./triangle-alert-BkMwT_kE.js";import"./createLucideIcon-WuqQdmgs.js";import"./chevron-down-FOu3nidH.js";const te={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}};function I(e){const n=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"];return Array.from({length:e},(j,b)=>{const y=n[Math.floor(Math.random()*n.length)];return{id:b+1,name:y}})}const S=I(300),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
