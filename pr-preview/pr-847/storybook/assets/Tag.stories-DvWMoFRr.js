import{j as a}from"./iframe-tg55KViq.js";import{T as o,a as i,s as D}from"./Tag-CqklaZ6M.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C8wh5iYF.js";import"./utils-CW23PGLJ.js";import"./clsx-B-dksMZM.js";import"./Hidden-t_I5kgNB.js";import"./useFocusRing-DAVsqA2_.js";import"./index-RaVpyZeL.js";import"./index-DEkcVeXa.js";import"./useLabels-CMBzL3Yz.js";import"./useButton-BTqK5PhC.js";import"./Collection-C4yYvTM7.js";import"./index-CIxrrJVu.js";import"./ListBox-CwrKgQNO.js";import"./DragAndDrop-DYxwWhmY.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B68VJ_7f.js";import"./SelectionManager-DP3mfqkV.js";import"./useEvent-DynGVtM5.js";import"./FocusScope-Dlb_b-Ls.js";import"./useDescription-CDWPKTRT.js";import"./useControlledState-Cenfy3mE.js";import"./context-CmFyHkf2.js";import"./Text-BsSqP69q.js";import"./inertValue-BmiNbdI6.js";import"./useListState-B2-kCYgU.js";import"./useHighlightSelectionDescription-CkI_GsaG.js";import"./useUpdateEffect-CoNNkxs6.js";import"./useLocalizedStringFormatter-CMsoCMeI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-7N8ZFPWs.js";import"./useField-ALlqamVs.js";import"./clsx-Ciqy0D92.js";import"./Button-CbjeGp8I.js";import"./Button.module-DRhvPh0f.js";import"./x-Cp3u6xzP.js";import"./createLucideIcon-sJqR73sg.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
