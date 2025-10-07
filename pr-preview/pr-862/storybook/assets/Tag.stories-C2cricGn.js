import{j as a}from"./iframe-DIlLPJuD.js";import{T as o,a as i,s as D}from"./Tag-CZvCTd7i.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Be6fkpnr.js";import"./utils-C90O06i_.js";import"./clsx-B-dksMZM.js";import"./Hidden-gB0YaM-W.js";import"./useFocusRing-HvaoKnuH.js";import"./index-D6xE_ouI.js";import"./index-DXjFZdVh.js";import"./useLabels-FG-IUQ4H.js";import"./useButton-ROD84DLe.js";import"./Collection-BQPY8kOR.js";import"./index-CISkeOs2.js";import"./ListBox-Cub0yq3A.js";import"./DragAndDrop-Cv8x9mLY.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C_lsgR-6.js";import"./SelectionManager-rGN1JuGs.js";import"./useEvent-BVgGdDuj.js";import"./FocusScope-fhbqbeqx.js";import"./useDescription-BwxdG25D.js";import"./useControlledState-DLDMOgvm.js";import"./context-DFNMyfvf.js";import"./Text-Ca9LQ_Le.js";import"./inertValue-DlKTffO1.js";import"./useListState--Mwd_teC.js";import"./useHighlightSelectionDescription-BuBppMaw.js";import"./useUpdateEffect-Pb1tV2dG.js";import"./useLocalizedStringFormatter-QTj1EJcJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Dzywhspq.js";import"./useField-CaAEAmMb.js";import"./clsx-Ciqy0D92.js";import"./Button-CT5mOxVb.js";import"./Button.module-CcWMkJAG.js";import"./x-C9TDGC81.js";import"./createLucideIcon-ClTEz4lj.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
