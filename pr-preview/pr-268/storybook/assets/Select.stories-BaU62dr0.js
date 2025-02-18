import{j as r}from"./jsx-runtime-CBDCb4rg.js";import{S as i,I as s}from"./Select-B2_q70hm.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BeKNHBLF.js";import"./useFocusable-BFvoMS9y.js";import"./clsx-B-dksMZM.js";import"./Hidden-DWlCxbq5.js";import"./index-D2jEcJry.js";import"./ListBox-Bqd_jMsd.js";import"./Collection-BhSMiv7E.js";import"./index-Btf1eDe9.js";import"./DragAndDrop-Bfvg-Q35.js";import"./Separator-Bd4vkn40.js";import"./SelectionManager-DRRiPKTi.js";import"./useEvent-D6jxNLXQ.js";import"./FocusScope-2XdeF7h-.js";import"./context-DFvSrY_x.js";import"./useDescription-DRw803pY.js";import"./useControlledState-BgxdDqm0.js";import"./ListKeyboardDelegate-Lv1vouSK.js";import"./Text-BvZdlzFi.js";import"./useField-BVKRIrPf.js";import"./useLabels-slPl-z-z.js";import"./useListState-BtOFoHoC.js";import"./Dialog-BjTCWXX6.js";import"./RSPContexts-BT50PPhj.js";import"./PressResponder-DFXhZkop.js";import"./useLocalizedStringFormatter-CABpxIsR.js";import"./VisuallyHidden-Bqo5Lliv.js";import"./Form-DKIud6kt.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-SN9L5I06.js";import"./chevron-down-DOK0m5UE.js";import"./createLucideIcon-DjmUzaoT.js";import"./TextField-CEBpLkqm.js";import"./TextField.module-Nb1XZxae.js";import"./Button-dZcdrYJ-.js";const te={component:i,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},I=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],S=I.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(i,{label:"Välj en frukt",items:S,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},a={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:e=>r.jsx(i,{...e,children:r.jsx(s,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
