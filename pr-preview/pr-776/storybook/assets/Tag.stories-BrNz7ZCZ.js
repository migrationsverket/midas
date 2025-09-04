import{j as a}from"./iframe-Cg0ufsuZ.js";import{T as o,a as i,s as D}from"./Tag-D4WUqjDn.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-x4Gj6aY1.js";import"./utils-CtbsCbeQ.js";import"./clsx-B-dksMZM.js";import"./Hidden-CyW2atD4.js";import"./useFocusRing-BnATjMaU.js";import"./index-C-pGwklB.js";import"./index-CYU64Ftz.js";import"./useLabels-BQDbVKF9.js";import"./useButton-CdBxlWdT.js";import"./Collection-BzCpNjBE.js";import"./index-USwtbqDu.js";import"./ListBox-CiqTvbI1.js";import"./DragAndDrop-DKmiwfqn.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BRsiMVYr.js";import"./SelectionManager-BJUqwE0x.js";import"./useEvent-BdM6SDIZ.js";import"./FocusScope-Kqo4pkgP.js";import"./useDescription-BRcoOYdV.js";import"./useControlledState-BoUCgmoj.js";import"./ListKeyboardDelegate-B5fBTNVL.js";import"./Text-DtlCEfGo.js";import"./inertValue-BDkay3_w.js";import"./useListState-B1YoIaR2.js";import"./useHighlightSelectionDescription-D8QfoEhs.js";import"./useUpdateEffect-CrCC9Ufp.js";import"./useLocalizedStringFormatter-MP4Ox2lR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BRutanW7.js";import"./useField-BN1XJUpx.js";import"./Button-CiI-d9j7.js";import"./Button.module-DgYkWG2o.js";import"./x-4zrwyJBK.js";import"./createLucideIcon-CivItIyF.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
