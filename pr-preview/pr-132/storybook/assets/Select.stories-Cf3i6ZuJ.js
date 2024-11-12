import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{S as s,I as i}from"./Select-DAXtt8sP.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-qWGkjEjQ.js";import"./useFocusable-DjeXhjfY.js";import"./index-Drt3gf4w.js";import"./clsx-B-dksMZM.js";import"./Hidden-mTViOgbj.js";import"./ListBox-Co7CTmJx.js";import"./Collection-C6PWZuN1.js";import"./index-Bb28N59q.js";import"./DragAndDrop-BDFo6_gz.js";import"./isScrollable-Bts8_1NI.js";import"./Text-DKPe_caT.js";import"./useControlledState-DK-fUnpa.js";import"./SelectionManager-CRq7ipwK.js";import"./FocusScope-B5i0-YrV.js";import"./scrollIntoView-Csfem_pY.js";import"./context-DxE0kdpO.js";import"./useDescription-DdGCa4C_.js";import"./useCollator-6hwkwygX.js";import"./useListState-DWRPznFH.js";import"./Dialog-DOLxOzIg.js";import"./RSPContexts-Bc9pl35m.js";import"./PressResponder--Ku2YYes.js";import"./getScrollParent-yMl4gzwT.js";import"./useLocalizedStringFormatter-57JI9Dsv.js";import"./VisuallyHidden-CewjJGy9.js";import"./Form-C2wKEvlV.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-CS72DfVB.js";import"./useMenuTrigger-CDW-9GQw.js";import"./TextField-CdgN15En.js";import"./Button-d63trt-j.js";import"./triangle-alert-BkMwT_kE.js";import"./createLucideIcon-WuqQdmgs.js";import"./chevron-down-FOu3nidH.js";const sr={component:s,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}};function I(r){const n=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"];return Array.from({length:r},(j,b)=>{const y=n[Math.floor(Math.random()*n.length)];return{id:b+1,name:y}})}const S=I(300),t={args:{placeholder:"Many items..."},render:()=>e.jsx(s,{label:"Välj en frukt",items:S,children:r=>e.jsx(i,{children:r.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:r=>e.jsxs(s,{...r,children:[e.jsx(i,{children:"Apple"}),e.jsx(i,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:r=>e.jsx(s,{...r,children:e.jsx(i,{children:"Hej"})})};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
