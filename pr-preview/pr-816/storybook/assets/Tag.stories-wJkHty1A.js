import{j as a}from"./iframe-CqqRRFTT.js";import{T as o,a as i,s as D}from"./Tag-DKu3qk6I.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Kq9pdSfk.js";import"./utils-ygEBsfuH.js";import"./clsx-B-dksMZM.js";import"./Hidden-BVbALqcM.js";import"./useFocusRing-BrurhblR.js";import"./index-DAk3CCY1.js";import"./index-COLs0XuS.js";import"./useLabels-DCUPBKgC.js";import"./useButton-CvE-jl3X.js";import"./Collection-EKJ5r9Wg.js";import"./index-CR8iMyua.js";import"./ListBox-KF9z8dxI.js";import"./DragAndDrop-Bug8k3Zi.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Dn2lbCi0.js";import"./SelectionManager-Dd7ReQGT.js";import"./useEvent-B0p0t61l.js";import"./FocusScope-BpqERJDz.js";import"./useDescription-5iWC-GMM.js";import"./useControlledState-COdh_jrB.js";import"./ListKeyboardDelegate-D0fx8wLZ.js";import"./Text-Jo3tLCNQ.js";import"./inertValue-B9ZrrsKd.js";import"./useListState-DNesXqs8.js";import"./useHighlightSelectionDescription-DcYiVye0.js";import"./useUpdateEffect-3pnKUcPg.js";import"./useLocalizedStringFormatter-DfTerQmH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DbRxLwFg.js";import"./useField-D3GiTajm.js";import"./Button-BjNVoodo.js";import"./Button.module-DRhvPh0f.js";import"./x-Bt5q2dFZ.js";import"./createLucideIcon-CGsn94Wv.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
