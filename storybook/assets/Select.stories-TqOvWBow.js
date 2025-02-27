import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{S as i,I as s}from"./Select-DntfPfuV.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-QmryGY2x.js";import"./useFocusable-DvoOiisW.js";import"./clsx-B-dksMZM.js";import"./Hidden-C-pamdWU.js";import"./index-cpIEhwLo.js";import"./ListBox-BnUq6QMY.js";import"./Collection-DXjGeaiG.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DXcJoRg9.js";import"./SelectionManager-CrjNvHpx.js";import"./useEvent-CA0YFu_S.js";import"./FocusScope-BEpvNgc1.js";import"./context-DFhOKXSg.js";import"./useDescription-Ct3UQeSC.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-Qpuh_B0q.js";import"./Text-EJwwmz-7.js";import"./useListState-Dn23sehL.js";import"./useField-RzOmeqWZ.js";import"./useLabels-CtxEn0bM.js";import"./Dialog-Dd-vX3nh.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-ErOZPrpP.js";import"./PressResponder-zWEAS-O-.js";import"./useLocalizedStringFormatter-m925tTwS.js";import"./VisuallyHidden-DXoeczHE.js";import"./Form-Co3XUpyT.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-BJ100_Bu.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-sUviJwNe.js";import"./TextField.module-B2RiHuHW.js";import"./Button-Dji9XSlS.js";const oe={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
