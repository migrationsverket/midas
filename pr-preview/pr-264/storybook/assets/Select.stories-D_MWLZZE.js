import{S as _}from"./Select-Biqcxdk8.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-OpOVPQEK.js";import"./useFocusable-CHclY7qY.js";import"./clsx-B-dksMZM.js";import"./Hidden-DgLkUl0S.js";import"./index-cpIEhwLo.js";import"./useField-Dy969mYx.js";import"./useLabels-NU5OlLNk.js";import"./Tag-DzcujD7R.js";import"./Collection-BI0jT7py.js";import"./index-DwWe6W7f.js";import"./ListBox-ovBu6abB.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DvR_ryLT.js";import"./SelectionManager-D5wjtbJU.js";import"./useEvent-BEEjl705.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CnLJ4Sss.js";import"./context-DRbXrThh.js";import"./useDescription-C2gAlpY9.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-DVtjuLGg.js";import"./Text-8acfy1XY.js";import"./useListState-PbxkRQgQ.js";import"./useHighlightSelectionDescription-XwQ3FTaW.js";import"./useLocalizedStringFormatter-DQ49o7SX.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-DthDI6f-.js";import"./Button-Dbz_De9D.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-DBXJ8YG2.js";import"./Form-D7PG-gdY.js";import"./useFormValidation-Bn6j9spX.js";import"./useTextField-BYI_gS3H.js";import"./useOverlayTriggerState-DUrERALe.js";import"./DismissButton-BpDDjnBb.js";import"./VisuallyHidden-DbUQ2u6f.js";import"./useModal-BafWInih.js";import"./useMenuTrigger-D8FDfUme.js";import"./useMenuTriggerState-C7EZ_QrZ.js";import"./chevron-down-U1dNK9nR.js";const Oe={component:_,title:"Components/Select",tags:["autodocs"]},F=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],R=F.map(p=>({name:p,id:p.toLocaleLowerCase()})),e={args:{label:"Label",selectionMode:"single",options:R,isDisabled:!1,isClearable:!0,isSelectableAll:!1,description:"Description",showTags:!1,placeholder:"Select an option"}},a={args:{...e.args,description:"Kiwi is pre-selected",defaultSelectedKeys:["kiwi"]}},s={args:{...e.args,selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"}},o={args:{...e.args,isDisabled:!0}},t={args:{...e.args,description:"Kiwi is disabled",disabledKeys:["kiwi"]}},i={args:{...e.args,isInvalid:!0,errorMessage:"Error msg"}},l={args:{...e.args,selectionMode:"multiple",showTags:!0,defaultSelectedKeys:["apple","kiwi"]}},n={args:{...e.args,selectionMode:"multiple",isSelectableAll:!0}},r={args:{...e.args,selectionMode:"multiple",isClearable:!1}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    description: 'Kiwi is pre-selected',
    defaultSelectedKeys: ['kiwi']
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,f,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultSelectedKeys: 'all'
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,K,A;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    isDisabled: true
  }
}`,...(A=(K=o.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var D,M,N;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi']
  }
}`,...(N=(M=t.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var C,h,k;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    isInvalid: true,
    errorMessage: 'Error msg'
  }
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var E,L,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    showTags: true,
    defaultSelectedKeys: ['apple', 'kiwi']
  }
}`,...(P=(L=l.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var T,v,I;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var O,x,B,W,G;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(G=(W=r.parameters)==null?void 0:W.docs)==null?void 0:G.description}}};const xe=["Normal","DefaultSelectedKey","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable"];export{s as AllKeysSelected,a as DefaultSelectedKey,o as Disabled,t as DisabledOption,i as Invalid,e as Normal,r as NotClearable,n as SelectAllEnabled,l as WithTags,xe as __namedExportsOrder,Oe as default};
