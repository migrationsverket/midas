import{j as a}from"./iframe-C3NgjWPG.js";import{T as o,a as i,s as D}from"./Tag-DGU9rBvf.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DyEZNMrw.js";import"./utils-pTe0koiI.js";import"./clsx-B-dksMZM.js";import"./Hidden-8Krv5kVC.js";import"./useFocusRing-03Jg4s-S.js";import"./index-BGktG_m9.js";import"./index-ChLPNIiH.js";import"./useLabels-DgMQ9At_.js";import"./useButton-CRLgBjsC.js";import"./Collection-eKV6t0FV.js";import"./index-Ccl-FE8R.js";import"./ListBox-DkvcqEmD.js";import"./DragAndDrop-iPS45aA-.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DT31b_O9.js";import"./SelectionManager-B9A-IyM-.js";import"./useEvent-B-CVOPWH.js";import"./FocusScope-B3ke_mDL.js";import"./useDescription-7D7H_5pc.js";import"./useControlledState-D1AmCwxF.js";import"./ListKeyboardDelegate-DgHdRo7E.js";import"./Text-D6XnmBCx.js";import"./inertValue-DYWK8XVw.js";import"./useListState-B0S32Na4.js";import"./useHighlightSelectionDescription-D9BZTTG8.js";import"./useUpdateEffect-Dm7J7et3.js";import"./useLocalizedStringFormatter-htlZTB_-.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CS86cIxc.js";import"./useField-CxOT1al4.js";import"./Button-lbR5UR8y.js";import"./Button.module-DRhvPh0f.js";import"./x-D3KJtbaR.js";import"./createLucideIcon-CYxkTfJs.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
