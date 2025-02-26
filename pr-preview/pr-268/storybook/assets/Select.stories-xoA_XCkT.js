import{j as r}from"./jsx-runtime-CBDCb4rg.js";import{S as i,I as s}from"./Select-BPy7E2lW.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-ojkDv_BK.js";import"./useFocusable-B8HhqQIl.js";import"./clsx-B-dksMZM.js";import"./Hidden-C-kiqh_I.js";import"./index-D2jEcJry.js";import"./ListBox-DoA6ZTAv.js";import"./Collection-DVrKtIZX.js";import"./index-Btf1eDe9.js";import"./DragAndDrop-Bfvg-Q35.js";import"./Separator-CNfBi8L5.js";import"./SelectionManager-BrHtouv1.js";import"./useEvent-BzCFeyOM.js";import"./FocusScope-hGcwqkni.js";import"./context-e_uznqlg.js";import"./useDescription-Dx2tUlT3.js";import"./useControlledState-BgxdDqm0.js";import"./ListKeyboardDelegate-JdsgzHfV.js";import"./Text-Bxg5Zhzp.js";import"./useField-Dt29Lb0W.js";import"./useLabels-BiAlD12e.js";import"./useListState-DzqfRXv-.js";import"./Dialog-C28rmmUa.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-CuCbQGRr.js";import"./PressResponder-CtzAwrCi.js";import"./useLocalizedStringFormatter-4pChcv_1.js";import"./VisuallyHidden-DjSI67in.js";import"./Form-3nrIbYVr.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-DnJtv4Od.js";import"./chevron-down-DOK0m5UE.js";import"./createLucideIcon-DjmUzaoT.js";import"./TextField-Cjoe213B.js";import"./TextField.module-DSYGJTmY.js";import"./Button-9KeTfxY-.js";const oe={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const ae=["Default","Invalid","disabled"];export{t as Default,o as Invalid,ae as __namedExportsOrder,oe as default,a as disabled};
