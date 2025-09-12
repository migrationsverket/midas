import{j as a}from"./iframe-CM3oN2dr.js";import{T as o,a as i,s as D}from"./Tag-DblzZ-Wx.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BZYWOmyz.js";import"./utils-Dzv0-fLb.js";import"./clsx-B-dksMZM.js";import"./Hidden-Tr1R8MsL.js";import"./useFocusRing-CBvluQlZ.js";import"./index-qqWX3WAO.js";import"./index-BT0mdDVT.js";import"./useLabels-C-xDaekP.js";import"./useButton-BCw86qyz.js";import"./Collection-Duk75lqG.js";import"./index-rk16mOcs.js";import"./ListBox-C9QQTV5n.js";import"./DragAndDrop-DxLmGy6L.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BrMToWMW.js";import"./SelectionManager-UTSCnVka.js";import"./useEvent-CI47BNZE.js";import"./FocusScope-BouEOcMc.js";import"./useDescription-m8JZeCQl.js";import"./useControlledState-Wda8hfoo.js";import"./ListKeyboardDelegate-CT8eTZLw.js";import"./Text-BHtPwPs2.js";import"./inertValue-BStylUEq.js";import"./useListState-Y3j9r0Jp.js";import"./useHighlightSelectionDescription-BzRyuLz8.js";import"./useUpdateEffect-B1304N0v.js";import"./useLocalizedStringFormatter-BRgo2fFK.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DeBsmh_9.js";import"./useField-r_VRbRq1.js";import"./Button-CaHswAOD.js";import"./Button.module-DRhvPh0f.js";import"./x-CJiovE9U.js";import"./createLucideIcon-D92znVG0.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
