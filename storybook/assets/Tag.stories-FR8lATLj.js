import{j as a}from"./iframe-DGxmGm2k.js";import{T as o,a as i,s as D}from"./Tag-Bvh9867O.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cj8RLJ9E.js";import"./utils-CTJYw7xC.js";import"./clsx-B-dksMZM.js";import"./Hidden-DKWNQnBF.js";import"./useFocusRing-Ctph2xJj.js";import"./index-DtYTnSux.js";import"./index-Den8FIHV.js";import"./useLabels-DViJ-T_X.js";import"./useButton-BNBE4-uU.js";import"./Collection-VbYSEipo.js";import"./index-DgF27tkm.js";import"./ListBox-DRX4WEjL.js";import"./DragAndDrop-BN_QrG8u.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DhExJUxr.js";import"./SelectionManager-iP4KS2g7.js";import"./useEvent-6tfisfNt.js";import"./FocusScope-CnCOnwye.js";import"./useDescription-BQDlG5ov.js";import"./useControlledState-CFAmB_GJ.js";import"./ListKeyboardDelegate-BGoKWc32.js";import"./Text-CqgNvp--.js";import"./inertValue-CiYjdjpT.js";import"./useListState-C4bCs2JN.js";import"./useHighlightSelectionDescription-CB5VMxCu.js";import"./useUpdateEffect-BE4DYrr-.js";import"./useLocalizedStringFormatter-CVIZ2hSR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BwW6SxXO.js";import"./useField-B-eiGO04.js";import"./Button-DWM_iCLS.js";import"./Button.module-DRhvPh0f.js";import"./x-B2Ln-KY7.js";import"./createLucideIcon-Biu0nL5z.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      className
    }
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      expect(canvas.getByTestId(testID)).toHaveClass(styles.tag, className as string);
    });
  }
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
