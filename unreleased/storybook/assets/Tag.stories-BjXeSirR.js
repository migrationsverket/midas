import{j as a}from"./iframe-UlvxJood.js";import{T as o,a as i,s as D}from"./Tag-C6HUbMku.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BgTp1hzZ.js";import"./utils-CoItm-eA.js";import"./clsx-B-dksMZM.js";import"./Hidden-D6XxitME.js";import"./useFocusRing-aJCOnyIE.js";import"./index-Csb9xe30.js";import"./index-BkHBfB56.js";import"./useLabels-CM9IxHiV.js";import"./useButton-CmjOy3Ln.js";import"./Collection-D4hpJSl4.js";import"./index-C6ofTFvp.js";import"./ListBox-CokjSzGe.js";import"./DragAndDrop-D1impRBR.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DTXZtUd4.js";import"./SelectionManager-BDe-k5wp.js";import"./useEvent-Cu4XOLFB.js";import"./FocusScope-ekBdtuGa.js";import"./useDescription-CJo6AjJP.js";import"./useControlledState-DoYiY_Go.js";import"./context-BQV6GS6L.js";import"./Text-DGtEyKf9.js";import"./inertValue-NGxh2GB2.js";import"./useListState-C7611Kgh.js";import"./useHighlightSelectionDescription-vEbbA77l.js";import"./useUpdateEffect-DAYG81Xs.js";import"./useLocalizedStringFormatter-Dbn0SLmD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C6Uov_a6.js";import"./useField-B-vmYRgg.js";import"./clsx-Ciqy0D92.js";import"./Button-B9x_H2SA.js";import"./Button.module-DRhvPh0f.js";import"./x-Df3tD8jy.js";import"./createLucideIcon-ms5S0F-l.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
