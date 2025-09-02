import{j as a}from"./iframe-Cg8p5A7h.js";import{T as o,a as i,s as D}from"./Tag-_OtO_Nhj.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DeIhqKFB.js";import"./utils-DqWd7jdc.js";import"./clsx-B-dksMZM.js";import"./Hidden-B_w65fFm.js";import"./useFocusRing-cQN_Zdfy.js";import"./index-8FyyBTVh.js";import"./index-Bt9MJrzz.js";import"./useLabels-B3LSmuof.js";import"./useButton-DvSlZoGX.js";import"./Collection-DGnHvId2.js";import"./index-B6E16G6R.js";import"./ListBox-BQOb6Ac2.js";import"./DragAndDrop-Dk_FsdWn.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DdrI4Kg1.js";import"./SelectionManager-DWrI5i-g.js";import"./useEvent-CiH5Y2ti.js";import"./FocusScope-DBeppB5M.js";import"./useDescription-QGjNPp3n.js";import"./useControlledState-CgxfEPxb.js";import"./ListKeyboardDelegate-lCUnUTZS.js";import"./Text-Bm-1jYXF.js";import"./inertValue-DZfcG0M7.js";import"./useListState-C8o8xfIt.js";import"./useHighlightSelectionDescription-B3TVEd-H.js";import"./useUpdateEffect-BLMOhH3t.js";import"./useLocalizedStringFormatter-C0nB_sgu.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DpyiAX6F.js";import"./useField-Do-f86aO.js";import"./Button-D4_iLJHL.js";import"./Button.module-CF2bVDCq.js";import"./x-B3tqIUq_.js";import"./createLucideIcon-NwE9vuSB.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
