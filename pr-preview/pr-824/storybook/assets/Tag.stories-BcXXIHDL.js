import{j as a}from"./iframe-CzUxqGQ_.js";import{T as o,a as i,s as D}from"./Tag-CZbTFF_0.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-WcWYf_2Q.js";import"./utils-CbFm5p6y.js";import"./clsx-B-dksMZM.js";import"./Hidden-CE7sOSdQ.js";import"./useFocusRing-pKB-8gPX.js";import"./index-CaFRykAt.js";import"./index-5a-K3w4c.js";import"./useLabels-DB3FZw8d.js";import"./useButton-C-uZ1RA1.js";import"./Collection-C0NzHWtW.js";import"./index-B6h0Ee6I.js";import"./ListBox-Deoh3_dV.js";import"./DragAndDrop-BmYdfjsP.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CosWRunS.js";import"./SelectionManager-C7nGby3Y.js";import"./useEvent-HqvQtOch.js";import"./FocusScope-D2Itpa8i.js";import"./useDescription-BIkixasR.js";import"./useControlledState-CZAkS5LV.js";import"./ListKeyboardDelegate-CmQtuq6g.js";import"./Text-BFnJIp6t.js";import"./inertValue-D4yVEjYe.js";import"./useListState-Dbdus-6C.js";import"./useHighlightSelectionDescription-BPPFsBaj.js";import"./useUpdateEffect-2OGHQHtp.js";import"./useLocalizedStringFormatter-BHeZj5YN.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-yuf-WRoU.js";import"./useField-D_f1Z9bX.js";import"./Button-0wtjKFjf.js";import"./Button.module-DRhvPh0f.js";import"./x-1RnE9ahT.js";import"./createLucideIcon-Bmn1_La5.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
