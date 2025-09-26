import{j as a}from"./iframe-CivQ_qtW.js";import{T as o,a as i,s as D}from"./Tag-DjN8U1Ge.js";import"./preload-helper-Dp1pzeXC.js";import"./Button--uCOOfLy.js";import"./utils-DGRCb3Sb.js";import"./clsx-B-dksMZM.js";import"./Hidden-B-9TWLTz.js";import"./useFocusRing-C-Ks94XI.js";import"./index-jd9cWS7V.js";import"./index-AjZE1m6P.js";import"./useLabels-DPP6QVBd.js";import"./useButton-CPqQXKmH.js";import"./Collection-B_qu63lS.js";import"./index-DjZ991Ym.js";import"./ListBox-D_QKfUU9.js";import"./DragAndDrop-D1sS8RV2.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CbK9SQFQ.js";import"./SelectionManager-DJ6E3Km6.js";import"./useEvent-CCp8CUxm.js";import"./FocusScope-DatPzfhp.js";import"./useDescription-BSD7rVCF.js";import"./useControlledState-pnivq3ks.js";import"./context-Bei_9AF9.js";import"./Text-Doe2DhSF.js";import"./inertValue-Dg_IxVZ_.js";import"./useListState-BucaKAAc.js";import"./useHighlightSelectionDescription-CGKS0VC2.js";import"./useUpdateEffect-Dyh9Nmw_.js";import"./useLocalizedStringFormatter-CxxnIYYT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-6edxGgy5.js";import"./useField-LhdBmisM.js";import"./Button-C6P3w_uT.js";import"./Button.module-DRhvPh0f.js";import"./x-D88-DqDI.js";import"./createLucideIcon-CfrIUjdR.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
