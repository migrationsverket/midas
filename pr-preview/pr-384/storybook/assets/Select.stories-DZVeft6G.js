import{S as R}from"./Select-jl8stEaI.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-B2aR51FI.js";import"./utils-BYZtxgnE.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-Ce7Ytruc.js";import"./Label-B20XR-5d.js";import"./Hidden-DizQ9ce0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-D0L8qOPf.js";import"./context-DlPnyEqv.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-DcG3_cox.js";import"./useFocusRing-BVR65GV4.js";import"./focusSafely-CCsE9NOP.js";import"./index-cpIEhwLo.js";import"./useFocusable-ByeJrHLx.js";import"./Tag-CAINtki4.js";import"./Collection-B3BuMPYM.js";import"./index-DwWe6W7f.js";import"./ListBox-CVMk47TD.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CcSwDo7v.js";import"./SelectionManager-BjEm6zKp.js";import"./useEvent-CYKx4DfG.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-Cto1rr90.js";import"./useDescription-BK8-bxoY.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-CMNZAwbS.js";import"./useCollator-CdnSoI7T.js";import"./Text-DGqKDvoY.js";import"./useListState-CODvMJBP.js";import"./useField-BP5oohdv.js";import"./useHighlightSelectionDescription-D7Z_gmS2.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-CYf1eOAG.js";import"./useHasTabbableChild-CsFoJaFG.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-B2hgcsAr.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-C7ELEjva.js";import"./Form-B__7jCkU.js";import"./useFormValidation-CzFHg574.js";import"./Input-DnZ0R0Vm.js";import"./TextArea-CkA1rbIb.js";import"./useTextField-fBNe8t4t.js";import"./useOverlayTriggerState-BfOBJM5F.js";import"./DismissButton-Gx2e4RHd.js";import"./VisuallyHidden-CQ87MyWU.js";import"./useModal-DnV8xhqI.js";import"./useMenuTrigger-Dp1uffK3.js";import"./useMenuTriggerState-CkPUiTEn.js";import"./FieldError-jQHHKhki.js";import"./chevron-down-U1dNK9nR.js";const Qe={component:R,title:"Components/Select",tags:["autodocs"]},_=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],F=_.map(p=>({name:p,id:p.toLocaleLowerCase()})),e={args:{label:"Label",selectionMode:"single",options:F,isDisabled:!1,isClearable:!0,isSelectableAll:!1,description:"Description",showTags:!1,placeholder:"Select an option"}},s={args:{...e.args,description:"Kiwi is pre-selected",defaultSelectedKeys:["kiwi"]}},o={args:{...e.args,selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"}},a={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{...e.args,isDisabled:!0}},t={args:{...e.args,description:"Kiwi is disabled",disabledKeys:["kiwi"]}},i={args:{...e.args,isInvalid:!0,errorMessage:"Error msg"}},l={args:{...e.args,selectionMode:"multiple",showTags:!0,defaultSelectedKeys:["apple","kiwi"]}},n={args:{...e.args,selectionMode:"multiple",isSelectableAll:!0}},r={args:{...e.args,selectionMode:"multiple",isClearable:!1}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    description: 'Kiwi is pre-selected',
    defaultSelectedKeys: ['kiwi']
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,S,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultSelectedKeys: 'all'
  }
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,K,A;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
  args: {
    ...Normal.args,
    isDisabled: true
  }
}`,...(A=(K=a.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var D,M,N;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,E,L;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    showTags: true,
    defaultSelectedKeys: ['apple', 'kiwi']
  }
}`,...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var P,T,O;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    isSelectableAll: true
  }
}`,...(O=(T=n.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var I,x,B,W,G;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    isClearable: false
  }
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(G=(W=r.parameters)==null?void 0:W.docs)==null?void 0:G.description}}};const Ue=["Normal","DefaultSelectedKey","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable"];export{o as AllKeysSelected,s as DefaultSelectedKey,a as Disabled,t as DisabledOption,i as Invalid,e as Normal,r as NotClearable,n as SelectAllEnabled,l as WithTags,Ue as __namedExportsOrder,Qe as default};
