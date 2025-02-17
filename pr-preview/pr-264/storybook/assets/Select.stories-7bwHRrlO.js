import{S as I}from"./Select-BG-3j5Dd.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-CcMfRhGg.js";import"./useFocusable-l7NaYEdB.js";import"./clsx-B-dksMZM.js";import"./Hidden-CwiKxbZj.js";import"./index-i7ZvCR4f.js";import"./Form-BFUD2BQV.js";import"./Text-Dyiz11Ec.js";import"./useField-Cmo2p-9r.js";import"./useLabels-CDoWwmLU.js";import"./Tag-BNzoKy0O.js";import"./Collection-DX0cA8sv.js";import"./index-DwWe6W7f.js";import"./ListBox-eCYlcRDD.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-ZffSntDo.js";import"./SelectionManager-CjkpbfGY.js";import"./useEvent-BV3BzZuT.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DgqfYpIJ.js";import"./context-CdxgAzm-.js";import"./useDescription-DsCB0LkR.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-BTTIni_k.js";import"./useListState-DEF2mLLn.js";import"./useHighlightSelectionDescription-4zbLvDDH.js";import"./useLocalizedStringFormatter-Dg5by4KY.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-CJd1BsNz.js";import"./Button-CS2ZwkSb.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-BiaSnfe4.js";import"./Input-BPDe37i3.js";import"./useOverlayTriggerState-BEd1C1PF.js";import"./VisuallyHidden-BUQ17qE6.js";import"./useMenuTrigger-jUnj3pfE.js";import"./useMenuTriggerState-CYgKizc8.js";import"./chevron-down-U1dNK9nR.js";const Ne={component:I,title:"Components/Select",tags:["autodocs"]},O=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],B=O.map(n=>({name:n,id:n.toLocaleLowerCase()})),e={args:{label:"Label",selectionMode:"single",options:B,isDisabled:!1,isClearable:!0,isSelectableAll:!1,description:"Description",showTags:!1,placeholder:"Select an option"}},r={args:{...e.args,description:"Kiwi is pre-selected",defaultSelectedKeys:["kiwi"]}},s={args:{...e.args,selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"}},a={args:{...e.args,isDisabled:!0}},o={args:{...e.args,description:"Kiwi is disabled",disabledKeys:["kiwi"]}},t={args:{...e.args,isInvalid:!0,errorMessage:"Error msg"}},i={args:{...e.args,selectionMode:"multiple",showTags:!0,defaultSelectedKeys:["apple","kiwi"]}},l={args:{...e.args,selectionMode:"multiple",isSelectableAll:!0}};var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    selectionMode: 'single',
    options: options,
    isDisabled: false,
    isClearable: true,
    isSelectableAll: false,
    description: 'Description',
    showTags: false,
    placeholder: 'Select an option'
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    description: 'Kiwi is pre-selected',
    defaultSelectedKeys: ['kiwi']
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,b,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultSelectedKeys: 'all'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,w,K;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    isDisabled: true
  }
}`,...(K=(w=a.parameters)==null?void 0:w.docs)==null?void 0:K.source}}};var D,A,M;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(M=(A=o.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var h,N,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(k=(N=t.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var C,E,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    showTags: true,
    defaultSelectedKeys: ['apple', 'kiwi']
  }
}`,...(L=(E=i.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var P,T,v;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const ke=["Normal","DefaultSelectedKey","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled"];export{s as AllKeysSelected,r as DefaultSelectedKey,a as Disabled,o as DisabledOption,t as Invalid,e as Normal,l as SelectAllEnabled,i as WithTags,ke as __namedExportsOrder,Ne as default};
