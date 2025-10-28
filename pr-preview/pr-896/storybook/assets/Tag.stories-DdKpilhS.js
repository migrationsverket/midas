import{j as a}from"./iframe-CR_NPcMH.js";import{T as o,a as i,s as D}from"./Tag-D_1ioQpW.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-VjBNg5tX.js";import"./utils-bG_yEw10.js";import"./clsx-B-dksMZM.js";import"./Hidden-Dq_pEtWo.js";import"./useFocusRing-DDrHayGC.js";import"./index-CZmo9jod.js";import"./index-Djyrb7p8.js";import"./useLabels-TrP6y0gN.js";import"./useButton-CUqcDXS2.js";import"./Collection-Ds0OomEX.js";import"./index-CTmjG-tt.js";import"./ListBox-DKL9rzib.js";import"./DragAndDrop-Yraet3L6.js";import"./getScrollParent-buizY3n2.js";import"./scrollIntoView-CZ9XH2tz.js";import"./Separator-DxKQnEz8.js";import"./SelectionManager-DHDrk8TZ.js";import"./useEvent-BDh_IA_6.js";import"./SelectionIndicator-BY1g0_iJ.js";import"./useDescription-D4k7x5KJ.js";import"./useControlledState-XZOmdDak.js";import"./ListKeyboardDelegate-DMh0Acj1.js";import"./RSPContexts-JEWNwXAw.js";import"./Text-9zNrZ3VX.js";import"./inertValue-HGwqQx07.js";import"./useListState-CoHxfVVM.js";import"./useHighlightSelectionDescription-BlqJ_0Db.js";import"./useUpdateEffect-ZhjFkf6M.js";import"./useLocalizedStringFormatter-Bj-IvnvC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-pfDe8bdu.js";import"./useField-B6SeVNyR.js";import"./clsx-Ciqy0D92.js";import"./Button-D1Dd4G8J.js";import"./Button.module-CcWMkJAG.js";import"./x-Caef328x.js";import"./createLucideIcon-VXi916bY.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ms=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ms as __namedExportsOrder,ps as default};
