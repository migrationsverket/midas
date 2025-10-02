import{j as a}from"./iframe-Bimco4S_.js";import{T as o,a as i,s as D}from"./Tag-Cpbudeqe.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CXnM8Jpf.js";import"./utils-DWBDv0Rx.js";import"./clsx-B-dksMZM.js";import"./Hidden-46Bg087-.js";import"./useFocusRing-BGj381WY.js";import"./index-CkBjpd_l.js";import"./index-2qtrhRxk.js";import"./useLabels-BKBXRZE4.js";import"./useButton-BhvWxOqD.js";import"./Collection-B53DfjRC.js";import"./index-C2HsfADz.js";import"./ListBox-BgRcFJE-.js";import"./DragAndDrop-BgXMgK7U.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-2h3LsHrb.js";import"./SelectionManager-D_ZGWzP8.js";import"./useEvent-Dn25ydrv.js";import"./FocusScope-DA3WATXG.js";import"./useDescription-i35dMHBx.js";import"./useControlledState-BSGQonPU.js";import"./context-0QlGrMCa.js";import"./Text-Bd80722c.js";import"./inertValue-DwW4Ep73.js";import"./useListState-BJ2TyfB1.js";import"./useHighlightSelectionDescription-BFFBL5LS.js";import"./useUpdateEffect-Bh8o9a1r.js";import"./useLocalizedStringFormatter-Ofh10Bqq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BnYA_WvQ.js";import"./useField-BKqUU-Qn.js";import"./clsx-Ciqy0D92.js";import"./Button-8wWSLn63.js";import"./Button.module-DRhvPh0f.js";import"./x-Bb30d9DC.js";import"./createLucideIcon-Cdo5tDwC.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
