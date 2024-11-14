import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{S as i,I as s}from"./Select-CV_Se5lh.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-B9MIsjUE.js";import"./useFocusable-FXxCDyRU.js";import"./index-Drt3gf4w.js";import"./clsx-B-dksMZM.js";import"./Hidden-DXstef2u.js";import"./ListBox-q5ecyqAM.js";import"./Collection-Bd6nTHYz.js";import"./index-Bb28N59q.js";import"./DragAndDrop-D1my3whc.js";import"./isScrollable-Bts8_1NI.js";import"./Text-Cg4FgRI1.js";import"./useControlledState-CQzcaGwO.js";import"./SelectionManager-BjK4YV19.js";import"./FocusScope-DqX_BpuW.js";import"./scrollIntoView-BzRic4Uk.js";import"./context-DPkFGduH.js";import"./useDescription-D_qi9L6Z.js";import"./useCollator-DZ85_XvZ.js";import"./useListState-B-40T5bv.js";import"./Dialog-BSAjOKfg.js";import"./RSPContexts-Bc9pl35m.js";import"./PressResponder-CDFuA0gX.js";import"./getScrollParent-yMl4gzwT.js";import"./useLocalizedStringFormatter-CdgOzlVp.js";import"./VisuallyHidden-fcuevZ4j.js";import"./Form-UQcbmfMk.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-DLH-mkXm.js";import"./useMenuTrigger-DP7c_t0Z.js";import"./TextField-BWgo1AIs.js";import"./triangle-alert-BkMwT_kE.js";import"./createLucideIcon-WuqQdmgs.js";import"./chevron-down-FOu3nidH.js";const re={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
