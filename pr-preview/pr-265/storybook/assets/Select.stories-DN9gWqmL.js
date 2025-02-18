import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{S as i,I as s}from"./Select-CXmAgS8d.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-PMtIgk3z.js";import"./useFocusable-BTV2lCc9.js";import"./clsx-B-dksMZM.js";import"./Hidden-BxZRcyi_.js";import"./index-i7ZvCR4f.js";import"./ListBox-B-q0TaH8.js";import"./Collection-CP0FkJ5j.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Z3nJnnSt.js";import"./SelectionManager-CiLjFixb.js";import"./useEvent-CfffaCDc.js";import"./FocusScope-BeeEVvPP.js";import"./context-DC_sGW0u.js";import"./useDescription-c_sn7U9n.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-VWRpf7NQ.js";import"./Text-DrzpM1Jb.js";import"./useListState-CmrCNl7S.js";import"./useField-DN-D1gXY.js";import"./useLabels-BlF-T0UY.js";import"./Dialog-CmDJib1-.js";import"./RSPContexts-CeCCo7XS.js";import"./PressResponder-DzydwzD8.js";import"./useLocalizedStringFormatter-BrmR15lP.js";import"./VisuallyHidden-CK0-3K8r.js";import"./Form-CdOY3XQC.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-xLg9a9Jp.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-DjUf-eJX.js";import"./TextField.module-Cq1EB13r.js";import"./Button-DeVX-GBX.js";const te={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const oe=["Default","Invalid","disabled"];export{t as Default,o as Invalid,oe as __namedExportsOrder,te as default,a as disabled};
