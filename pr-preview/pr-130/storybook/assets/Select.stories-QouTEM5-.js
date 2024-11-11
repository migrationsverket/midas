import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{S as i,I as s}from"./Select-DLuysXio.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-CFI5xjAF.js";import"./useFocusable-C3Zwbx3S.js";import"./index-Drt3gf4w.js";import"./clsx-B-dksMZM.js";import"./Hidden-BkVGwKza.js";import"./ListBox-DXIOu1yG.js";import"./Collection-CKcZJKgp.js";import"./index-Bb28N59q.js";import"./DragAndDrop-D1my3whc.js";import"./isScrollable-Bts8_1NI.js";import"./Text-CYGrO2MJ.js";import"./useControlledState-AHXFv9X8.js";import"./SelectionManager-C4CZJXbT.js";import"./FocusScope-DI20Bbtn.js";import"./scrollIntoView-DUcd1lYg.js";import"./context-C8hDq7-P.js";import"./useDescription-BubdPxWs.js";import"./useCollator-D6c6TZtq.js";import"./useListState-DjCLJrex.js";import"./Dialog-BH7dEMoU.js";import"./RSPContexts-Bc9pl35m.js";import"./PressResponder-CPELVzzG.js";import"./getScrollParent-yMl4gzwT.js";import"./useLocalizedStringFormatter-CxeZs8NQ.js";import"./VisuallyHidden-Booyl0mQ.js";import"./Form-BjuKzKLB.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-Dxunz62G.js";import"./useMenuTrigger-DDeUv1gI.js";import"./TextField-BJXgRXB4.js";import"./triangle-alert-BkMwT_kE.js";import"./createLucideIcon-WuqQdmgs.js";import"./chevron-down-FOu3nidH.js";const re={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
