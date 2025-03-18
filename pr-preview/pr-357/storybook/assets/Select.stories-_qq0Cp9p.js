import{S as R}from"./Select-Cm4t_x7u.js";import"./jsx-runtime-CBDCb4rg.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-iL9IzHG8.js";import"./utils-CyugoGNF.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-B2jw0c1b.js";import"./Label-ByRA_SKm.js";import"./Hidden-B6il94lO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DbJIstGE.js";import"./context-BwmME58u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusRing-BODiw1iP.js";import"./index-BAyGJXOV.js";import"./useFocusable-CqLabGgp.js";import"./Form-B3zPBtl7.js";import"./Text-DnyJpj_W.js";import"./useFormValidation-B1oMw7Lv.js";import"./Tag-CzZXQbCq.js";import"./Collection-KpeOqn_K.js";import"./index-Btf1eDe9.js";import"./ListBox-DFhn37Qm.js";import"./DragAndDrop-Bfvg-Q35.js";import"./Separator-DuTifGF-.js";import"./SelectionManager-DRxs2Bqi.js";import"./useEvent-DrHgLB5Q.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Ded37Rd9.js";import"./useDescription-DZZa8B5b.js";import"./useControlledState-BgxdDqm0.js";import"./ListKeyboardDelegate-SnKTO46q.js";import"./useCollator-B0i4hO_n.js";import"./useListState-DFvoS08W.js";import"./useField-YKOABOJo.js";import"./useHighlightSelectionDescription-MBiDJdUj.js";import"./useUpdateEffect-Bs3_Kx5l.js";import"./useLocalizedStringFormatter-B6l6yPuV.js";import"./useHasTabbableChild-BMUHg4RC.js";import"./getScrollParent-CvodOSaS.js";import"./Button-BUv4L4FB.js";import"./x-CdHhRR78.js";import"./createLucideIcon-DjmUzaoT.js";import"./TextField-B4YrLK74.js";import"./Input-nkIej56h.js";import"./useTextField-DXYVxhqA.js";import"./useOverlayTriggerState-_3rNuFLY.js";import"./DismissButton-BaTbkvC9.js";import"./VisuallyHidden-Cx1OydyR.js";import"./useModal-DrHYqVUB.js";import"./useMenuTrigger-Ch8czL2s.js";import"./useMenuTriggerState-BHyXXjL7.js";import"./chevron-down-DOK0m5UE.js";const qe={component:R,title:"Components/Select",tags:["autodocs"]},_=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],F=_.map(p=>({name:p,id:p.toLocaleLowerCase()})),e={args:{label:"Label",selectionMode:"single",options:F,isDisabled:!1,isClearable:!0,isSelectableAll:!1,description:"Description",showTags:!1,placeholder:"Select an option"}},s={args:{...e.args,description:"Kiwi is pre-selected",defaultSelectedKeys:["kiwi"]}},a={args:{...e.args,selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"}},o={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{...e.args,isDisabled:!0}},t={args:{...e.args,description:"Kiwi is disabled",disabledKeys:["kiwi"]}},i={args:{...e.args,isInvalid:!0,errorMessage:"Error msg"}},l={args:{...e.args,selectionMode:"multiple",showTags:!0,defaultSelectedKeys:["apple","kiwi"]}},n={args:{...e.args,selectionMode:"multiple",isSelectableAll:!0}},r={args:{...e.args,selectionMode:"multiple",isClearable:!1}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,S,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultSelectedKeys: 'all'
  }
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,K,A;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(G=(W=r.parameters)==null?void 0:W.docs)==null?void 0:G.description}}};const ze=["Normal","DefaultSelectedKey","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable"];export{a as AllKeysSelected,s as DefaultSelectedKey,o as Disabled,t as DisabledOption,i as Invalid,e as Normal,r as NotClearable,n as SelectAllEnabled,l as WithTags,ze as __namedExportsOrder,qe as default};
