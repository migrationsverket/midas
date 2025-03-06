import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{S as a,I as s}from"./Select-CWtAqrIh.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DlxIrWB_.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./ListBox-Crw63iPj.js";import"./Collection-B65vjQb4.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CFSVS3UH.js";import"./SelectionManager-Z9gqeiha.js";import"./useEvent-B_cSPOEW.js";import"./FocusScope-DWsZ07QH.js";import"./context-DVpahnpO.js";import"./useDescription-B0GcPv_I.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-dzYvetd0.js";import"./Text-BorP-jFP.js";import"./useListState-BmjFvOwc.js";import"./useField-lqkOjd2l.js";import"./useLabels-Dt0KIlgT.js";import"./Dialog-DJFaj5QY.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-B7QTCHgm.js";import"./PressResponder-DogE8OEY.js";import"./useLocalizedStringFormatter-BfPjM0Dg.js";import"./VisuallyHidden-3bHjY8GZ.js";import"./Form-Cq4QZx_r.js";import"./useFormValidation-D_zB_ZT8.js";import"./intlStrings-ZMTSFH_M.js";import"./Label-B23VYN9V.js";import"./useSingleSelectListState-CXyIvv2X.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-JCxAmMys.js";import"./TextField.module-BSzw7ps9.js";import"./Button-BuSdp1XZ.js";const se={component:a,title:"Components/Select",tags:["autodocs"],args:{label:"Etikett",description:"Beskrivning"},argTypes:{placeholder:{type:"string"}},parameters:{}},f=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],y=f.map(e=>({name:e,id:e.toLocaleLowerCase()})),t={args:{placeholder:"Many items..."},render:()=>r.jsx(a,{label:"Välj en frukt",items:y,children:e=>r.jsx(s,{children:e.name})})},o={args:{isInvalid:!0,errorMessage:"Fel!"},render:e=>r.jsxs(a,{...e,children:[r.jsx(s,{children:"Apple"}),r.jsx(s,{children:"Lemon"})]})},n={args:{isDisabled:!0},parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},render:e=>r.jsx(a,{...e,children:r.jsx(s,{children:"Hej"})})};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Avoid using disabled'
      }
    },
    a11y: {
      element: 'body',
      config: {
        rules: [{
          // Dont check for color contrast on disabled elements
          id: 'color-contrast',
          enabled: false
        }]
      },
      options: {
        rules: {
          'color-contrast': {
            enabled: false
          }
        }
      } satisfies RunOptions
    }
  },
  render: args => <Select {...args}>
      <Item>Hej</Item>
    </Select>
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const ae=["Default","Invalid","Disabled"];export{t as Default,n as Disabled,o as Invalid,ae as __namedExportsOrder,se as default};
