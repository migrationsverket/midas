import{j as a}from"./iframe-Cif939ts.js";import{T as o,a as i,s as D}from"./Tag-42VoQvRd.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-kA5DkZD5.js";import"./utils-DGKC4KnZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BIjVzOas.js";import"./useFocusRing-Cb9MFAQY.js";import"./index-zyxs31yL.js";import"./index-CKwdvuGa.js";import"./useLabels-wGctBs-u.js";import"./useButton-DFharAGW.js";import"./Collection-B1Gw7Jvs.js";import"./index-BPYI9sPb.js";import"./ListBox-B-_dkWEM.js";import"./DragAndDrop-B21G61KC.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DnaezyJr.js";import"./SelectionManager-DWHin1x8.js";import"./useEvent-858-F0O0.js";import"./FocusScope-DTLLmBKO.js";import"./useDescription-BVHpZl_F.js";import"./useControlledState-B-POSexH.js";import"./context-DePEtQsg.js";import"./Text-BhnthrOD.js";import"./inertValue-C2vfFRRZ.js";import"./useListState-BI-JSCQC.js";import"./useHighlightSelectionDescription-D7YQi47X.js";import"./useUpdateEffect-5n8rQrZM.js";import"./useLocalizedStringFormatter-4b181Skx.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B29Cc7Q_.js";import"./useField-8RQCdl2I.js";import"./clsx-Ciqy0D92.js";import"./Button-Cbj_pobW.js";import"./Button.module-DRhvPh0f.js";import"./x-CVeEvuis.js";import"./createLucideIcon-BHz3sezW.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
