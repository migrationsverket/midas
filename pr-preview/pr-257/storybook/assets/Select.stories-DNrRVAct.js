import{S as B}from"./Select-DEJGoAb0.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-QjS3GA-B.js";import"./useFocusable-CD-koIwE.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dq_nQgIS.js";import"./index-i7ZvCR4f.js";import"./Form-BfpKtXjF.js";import"./Text-DcjMt-Li.js";import"./useField-DtOnK51m.js";import"./useLabels-B6-QSSXo.js";import"./Tag-CDAaWaRI.js";import"./Collection-DZnsYLBa.js";import"./index-DwWe6W7f.js";import"./ListBox-CDrqQmjC.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Dk3iDfC9.js";import"./SelectionManager-BLUZsctv.js";import"./useEvent-BMdKW5kW.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DMgXehbl.js";import"./context-BZ3sRE81.js";import"./useDescription-D-cWy0W_.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-D6uckuoG.js";import"./useListState-Bi7JdD2y.js";import"./useHighlightSelectionDescription-BKgki8fK.js";import"./useLocalizedStringFormatter-kgc-se6z.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-U81ut5JF.js";import"./Button-e4wmZZGd.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-Nxx7sP73.js";import"./Input-C70qVu7X.js";import"./useOverlayTriggerState-BhC3EiyM.js";import"./VisuallyHidden-CkHCoHQ6.js";import"./useMenuTrigger-DsTCxScT.js";import"./useMenuTriggerState-Cjn-Ui2X.js";import"./chevron-down-U1dNK9nR.js";import"./Checkbox-D5UZFY_T.js";import"./RSPContexts-CeCCo7XS.js";const Le={component:B,title:"Components/NEWSelect",tags:["autodocs"]},x=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],G=x.map(n=>({name:n,id:n.toLocaleLowerCase()})),e={args:{label:"Label",selectionMode:"single",options:G,isDisabled:!1,isClearable:!0,isSelectableAll:!1,description:"Description",showTags:!1,placeholder:"Select an option"}},s={args:{...e.args,description:"Kiwi is pre-selected",defaultSelectedKeys:["kiwi"]}},a={args:{...e.args,selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"}},o={args:{...e.args,isDisabled:!0}},t={args:{...e.args,description:"Kiwi is disabled",disabledKeys:["kiwi"]}},r={args:{...e.args}},i={args:{...e.args,selectionMode:"multiple",showTags:!0,defaultSelectedKeys:["apple","kiwi"]}},l={args:{...e.args,selectionMode:"multiple",isSelectableAll:!0}};var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    description: 'Kiwi is pre-selected',
    defaultSelectedKeys: ['kiwi']
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,b,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultSelectedKeys: 'all'
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,w,K;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    isDisabled: true
  }
}`,...(K=(w=o.parameters)==null?void 0:w.docs)==null?void 0:K.source}}};var D,A,N;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(N=(A=t.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var h,M,k,C,T;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Normal.args
  }
}`,...(k=(M=r.parameters)==null?void 0:M.docs)==null?void 0:k.source},description:{story:"TODO!",...(T=(C=r.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};var L,O,P;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    showTags: true,
    defaultSelectedKeys: ['apple', 'kiwi']
  }
}`,...(P=(O=i.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var E,W,v;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...(v=(W=l.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};const Oe=["Normal","DefaultSelectedKey","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled"];export{a as AllKeysSelected,s as DefaultSelectedKey,o as Disabled,t as DisabledOption,r as Invalid,e as Normal,l as SelectAllEnabled,i as WithTags,Oe as __namedExportsOrder,Le as default};
