import{S as R}from"./Select-DHbOJ3Ft.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-BriKy1No.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-Cgq2ntZX.js";import"./Label-DO1wrnkN.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ClMtG9eF.js";import"./context-BSqmORe6.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusRing--RQdELqC.js";import"./index-cpIEhwLo.js";import"./useFocusable-5VAxOUE-.js";import"./Form-IDFMugM_.js";import"./Text-BkowhAon.js";import"./useFormValidation-BT6lxpQu.js";import"./Tag-BeCqy7bQ.js";import"./Collection-CC9oGC21.js";import"./index-DwWe6W7f.js";import"./ListBox-CKwgwK3H.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Q6oUd1rz.js";import"./SelectionManager-DeX5238t.js";import"./useEvent-Yxrkvbn7.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-B7ZOkgD-.js";import"./useDescription-CVNFK32G.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-xVJLa59h.js";import"./useCollator-C3PRVItH.js";import"./useListState-CMHXyEJa.js";import"./useField-9Cy_F6CL.js";import"./useHighlightSelectionDescription-CrqVFzKW.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./useHasTabbableChild-CW7EX7UL.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-8hJ9wCSu.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-lpZI7LZS.js";import"./Input-ivzFBLck.js";import"./useTextField-CYsm1yTN.js";import"./useOverlayTriggerState-cE6DaEBH.js";import"./useMenuTriggerState-D_6WADuW.js";import"./VisuallyHidden-DRXW-gYG.js";import"./useModal-BWKj4cMF.js";import"./chevron-down-U1dNK9nR.js";const Fe={component:R,title:"Components/Select",tags:["autodocs"]},_=["Apple","Banana","Kiwi","Elderflower","Nectarine","Watermelon","Pineapple","Apricot","Cloudberry","Mango","Strawberry","Blueberry","Raspberry","Blackberry","Cherry","Peach","Plum","Grape","Orange","Lemon","Lime","Coconut","Fig","Papaya","Guava","Pomegranate","Dragonfruit","Starfruit","Passionfruit"],F=_.map(p=>({name:p,id:p.toLocaleLowerCase()})),e={args:{label:"Label",selectionMode:"single",options:F,isDisabled:!1,isClearable:!0,isSelectableAll:!1,description:"Description",showTags:!1,placeholder:"Select an option"}},s={args:{...e.args,description:"Kiwi is pre-selected",defaultSelectedKeys:["kiwi"]}},a={args:{...e.args,selectionMode:"multiple",description:"All options are selected",defaultSelectedKeys:"all"}},o={parameters:{docs:{description:{story:"Avoid using disabled"}},a11y:{element:"body",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{rules:{"color-contrast":{enabled:!1}}}}},args:{...e.args,isDisabled:!0}},t={args:{...e.args,description:"Kiwi is disabled",disabledKeys:["kiwi"]}},i={args:{...e.args,isInvalid:!0,errorMessage:"Error msg"}},l={args:{...e.args,selectionMode:"multiple",showTags:!0,defaultSelectedKeys:["apple","kiwi"]}},n={args:{...e.args,selectionMode:"multiple",isSelectableAll:!0}},r={args:{...e.args,selectionMode:"multiple",isClearable:!1}};var c,m,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source},description:{story:"As default all options are clearable. `isClearable={false}` Experimental feature",...(G=(W=r.parameters)==null?void 0:W.docs)==null?void 0:G.description}}};const je=["Normal","DefaultSelectedKey","AllKeysSelected","Disabled","DisabledOption","Invalid","WithTags","SelectAllEnabled","NotClearable"];export{a as AllKeysSelected,s as DefaultSelectedKey,o as Disabled,t as DisabledOption,i as Invalid,e as Normal,r as NotClearable,n as SelectAllEnabled,l as WithTags,je as __namedExportsOrder,Fe as default};
