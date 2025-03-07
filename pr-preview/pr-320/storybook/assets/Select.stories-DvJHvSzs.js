import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{S as s,I as a}from"./Select-DeSJ6D-K.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CL48leFB.js";import"./useFocusRing-CinZsMjC.js";import"./clsx-B-dksMZM.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Hidden-Dygrn3i1.js";import"./index-cpIEhwLo.js";import"./useFocusable-97lfcaNr.js";import"./ListBox-i6fXzs5h.js";import"./Collection-C65DcC29.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-AK1ucJrY.js";import"./SelectionManager-DQmjKvEJ.js";import"./useEvent-D1vddV-I.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-Dim9Sv8E.js";import"./context-uaUAhjVA.js";import"./useDescription-CvItXi3E.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CY3z9i9U.js";import"./Text-BOP8hVNJ.js";import"./useListState-CA7sqsFs.js";import"./useField-D3fxL6w1.js";import"./useLabels-DK3-SUbo.js";import"./Dialog-DQ5JeYJ_.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CJX-muH8.js";import"./PressResponder-D8VDO3_G.js";import"./useLocalizedStringFormatter-CHyMmh6V.js";import"./getScrollParent-CrrBdd7g.js";import"./VisuallyHidden-jJNdpOK7.js";import"./Form-B4NAigXO.js";import"./useFormValidation-0O_oepKB.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-CobJKfWh.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-yEqZR0Xf.js";import"./Input-lj-4FkjZ.js";import"./TextField.module-4WLKcRib.js";import"./Button-BveQm2XV.js";const cr={component:s,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"},label:{control:"text"},description:{control:"text"}},parameters:{}},S=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],j=S.map(r=>({name:r,id:r.toLocaleLowerCase()})),t={args:{placeholder:"Many items...",label:"Välj en frukt"},render:r=>e.jsx(s,{...r,items:j,children:I=>e.jsx(a,{children:I.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:r=>e.jsxs(s,{...r,children:[e.jsx(a,{children:"Apple"}),e.jsx(a,{children:"Lemon"})]})},i={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}}},render:r=>e.jsx(s,{...r,children:e.jsx(a,{children:"Hej"})})};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Many items...',
    label: 'Välj en frukt'
  },
  render: args => <Select {...args} items={options}>
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const dr=["Default","Invalid","disabled"];export{t as Default,o as Invalid,dr as __namedExportsOrder,cr as default,i as disabled};
