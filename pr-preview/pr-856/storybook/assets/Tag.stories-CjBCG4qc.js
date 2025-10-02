import{j as a}from"./iframe-KK8Sh2Uf.js";import{T as o,a as i,s as D}from"./Tag-DE9kRlyV.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DeP1_ECF.js";import"./utils-BoXavaCT.js";import"./clsx-B-dksMZM.js";import"./Hidden-DYrSaFoI.js";import"./useFocusRing-fXN6flG0.js";import"./index-iEYYH4Q2.js";import"./index-C-FgRbIA.js";import"./useLabels-BapDTyZc.js";import"./useButton-BwmLXyqh.js";import"./Collection-B6PZnkq1.js";import"./index-CJMcLWzs.js";import"./ListBox-Vz1X9Ek8.js";import"./DragAndDrop-ts1fzMjo.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CwcRh7yc.js";import"./SelectionManager-DU5rOvQm.js";import"./useEvent-DtI-D5qX.js";import"./FocusScope-DXITwzrb.js";import"./useDescription-CONIV47f.js";import"./useControlledState-BUc9U0OQ.js";import"./context-fBSpRggg.js";import"./Text-CkDfen1V.js";import"./inertValue-fTi68e_v.js";import"./useListState-DbsuJ8z0.js";import"./useHighlightSelectionDescription-Dfo6zpxR.js";import"./useUpdateEffect-kxy9mIei.js";import"./useLocalizedStringFormatter-DJ6Ir6JS.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BtQ9IQju.js";import"./useField-5eGNBzMu.js";import"./clsx-Ciqy0D92.js";import"./Button-De9_OUoM.js";import"./Button.module-DRhvPh0f.js";import"./x-CGRDhh4A.js";import"./createLucideIcon-DDOzHclT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
