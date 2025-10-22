import{j as a}from"./iframe-BLomsHqF.js";import{T as o,a as i,s as D}from"./Tag-0Feooc2N.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C6eTL7QB.js";import"./utils-DGT1GrBW.js";import"./clsx-B-dksMZM.js";import"./Hidden-DMD08W8C.js";import"./useFocusRing-CkLGAV6r.js";import"./index-J6jC-Vw8.js";import"./index-DPSB-26T.js";import"./useLabels-BU6aKxrw.js";import"./useButton-BkJuWxM5.js";import"./Collection-gQ51q603.js";import"./index-Zc6nfJja.js";import"./ListBox-jy9zMOyt.js";import"./DragAndDrop-e-pbOUzH.js";import"./getScrollParent-DN9Ntiad.js";import"./scrollIntoView-ClHoN1e0.js";import"./Separator-6gx2Ww-1.js";import"./SelectionManager-CG1_uVZw.js";import"./useEvent-pdd0EWWi.js";import"./SelectionIndicator-CCDg9Uun.js";import"./useDescription-BUkjOik1.js";import"./useControlledState-CdbPSMf1.js";import"./ListKeyboardDelegate-BTQO5QOG.js";import"./RSPContexts-svT4R01i.js";import"./Text-D1taQYe6.js";import"./inertValue-BDF1rIe-.js";import"./useListState-DykjpWF6.js";import"./useHighlightSelectionDescription-B1nysh4O.js";import"./useUpdateEffect-DDuecV48.js";import"./useLocalizedStringFormatter-BHJpeyQV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DKoLMMhA.js";import"./useField-zJeNjXOl.js";import"./clsx-Ciqy0D92.js";import"./Button-DU-lypV0.js";import"./Button.module-CcWMkJAG.js";import"./x-D_Y49wtb.js";import"./createLucideIcon-DQlmmF2P.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
