import{j as a}from"./iframe-ClGvGk2X.js";import{T as o,a as i,s as D}from"./Tag-DPfj0Cbp.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-TVtqFvMt.js";import"./utils-CgmobTVV.js";import"./clsx-B-dksMZM.js";import"./Hidden-BpA4d8wj.js";import"./useFocusRing-D42m8tvY.js";import"./index-BaB2Lhq_.js";import"./index-Du5Ynjy_.js";import"./useLabels-CAJfzx4r.js";import"./useButton-BcRyu3C4.js";import"./Collection-BBKVIIv7.js";import"./index-CWFadM5b.js";import"./ListBox-K5G2WEea.js";import"./DragAndDrop-CoO1GeMH.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Duz7gQJR.js";import"./SelectionManager-B2qdQQPO.js";import"./useEvent-Dh1pQxCz.js";import"./FocusScope-BnetrWPY.js";import"./useDescription-Cz2XRQtx.js";import"./useControlledState-D-5RoRoq.js";import"./context-C209Dcud.js";import"./Text-Dpjnjp04.js";import"./inertValue-BH5rSFq_.js";import"./useListState-CXg86Hns.js";import"./useHighlightSelectionDescription-DI1-6qGZ.js";import"./useUpdateEffect-CIhDqE4b.js";import"./useLocalizedStringFormatter-CK6CoG3I.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DWUD3kdw.js";import"./useField-BWoM1pdN.js";import"./clsx-Ciqy0D92.js";import"./Button-W6YY0Grr.js";import"./Button.module-DRhvPh0f.js";import"./x-iCFSaXEE.js";import"./createLucideIcon-Cbf2I8xR.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
