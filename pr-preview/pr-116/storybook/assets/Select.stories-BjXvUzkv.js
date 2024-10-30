import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{S as i,I as s}from"./Select-B8go8tS2.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-DPHeQjfs.js";import"./useFocusable-oEo1n-jK.js";import"./index-Drt3gf4w.js";import"./clsx-B-dksMZM.js";import"./Hidden-CeomKQRv.js";import"./ListBox-EV5pEwkC.js";import"./useLocalizedStringFormatter-Cah0Scr7.js";import"./context-CTzaVcmG.js";import"./SelectionManager-NtlNGHh6.js";import"./FocusScope-B0iEahOm.js";import"./scrollIntoView-D_tcupIM.js";import"./useDescription-DqB6if4d.js";import"./useControlledState-CktEcWfI.js";import"./Dialog-_mMpTr4W.js";import"./RSPContexts-DD7oPhfd.js";import"./useCollator-CmOnbdDs.js";import"./VisuallyHidden-BgAYQwv3.js";import"./PressResponder-BOK4ApId.js";import"./Collection-BN912an0.js";import"./index-Bb28N59q.js";import"./DragAndDrop-BEwgP_ES.js";import"./Form-BnF4q38W.js";import"./useSingleSelectListState-DmcIQ02l.js";import"./intlStrings-ZMTSFH_M.js";import"./TextField-ih472eXk.js";import"./triangle-alert-BkMwT_kE.js";import"./createLucideIcon-WuqQdmgs.js";import"./chevron-down-FOu3nidH.js";const ee={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}};function I(e){const n=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"];return Array.from({length:e},(j,b)=>{const y=n[Math.floor(Math.random()*n.length)];return{id:b+1,name:y}})}const S=I(300),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const re=["Default","Invalid","disabled"];export{t as Default,o as Invalid,re as __namedExportsOrder,ee as default,a as disabled};
