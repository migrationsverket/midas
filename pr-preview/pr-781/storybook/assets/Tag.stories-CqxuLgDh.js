import{j as a}from"./iframe-WQ1lsKcr.js";import{T as o,a as i,s as D}from"./Tag-bxNT92mt.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BDwDasQj.js";import"./utils-CHlCFsGs.js";import"./clsx-B-dksMZM.js";import"./Hidden-BNrx2ueH.js";import"./useFocusRing-CBMtx5yy.js";import"./index-BJtq6oOm.js";import"./index-B8NyoKSS.js";import"./useLabels-DJC3Yq0T.js";import"./useButton-z9_YOEOm.js";import"./Collection-BB10YKry.js";import"./index-BYah2PgG.js";import"./ListBox-Bd--StdP.js";import"./DragAndDrop-WlIwY8QG.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BzB7cahw.js";import"./SelectionManager-5m0qvuA6.js";import"./useEvent-CyYrFPZv.js";import"./FocusScope-HrK9_yZK.js";import"./useDescription-D4AMVWeE.js";import"./useControlledState-DyrxLvoj.js";import"./ListKeyboardDelegate-CFf-iVE5.js";import"./Text-DTlPm7j0.js";import"./inertValue-DLsEkSiT.js";import"./useListState-CKuGdbap.js";import"./useHighlightSelectionDescription-C9cF6h5x.js";import"./useUpdateEffect-BV6cyibX.js";import"./useLocalizedStringFormatter-G83BjFFi.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BdpIiRd3.js";import"./useField-lUPJrWK_.js";import"./Button-DU8tpnuI.js";import"./Button.module-CF2bVDCq.js";import"./x-MqgoWOKa.js";import"./createLucideIcon-BwQv0LNn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
