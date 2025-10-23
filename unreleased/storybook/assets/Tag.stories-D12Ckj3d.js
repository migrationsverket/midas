import{j as a}from"./iframe-BkRCtzLE.js";import{T as o,a as i,s as D}from"./Tag-Bj66yJle.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-8uKKZ7fL.js";import"./utils-BorA7_aK.js";import"./clsx-B-dksMZM.js";import"./Hidden-ByT-BA9Q.js";import"./useFocusRing-C2ELTq5K.js";import"./index-CCNL-m0Y.js";import"./index-DCx-fHrh.js";import"./useLabels-CJs_6swF.js";import"./useButton-BZ1Bpjt0.js";import"./Collection-BPNS8DEv.js";import"./index-C8lUQFCj.js";import"./ListBox-D8AD5ytP.js";import"./DragAndDrop-CfqK5faw.js";import"./getScrollParent-IAO2K3oG.js";import"./scrollIntoView-HOzW4w2M.js";import"./Separator-cdwXHSHZ.js";import"./SelectionManager-IjyYZG1X.js";import"./useEvent-nZLoFQs9.js";import"./SelectionIndicator-BZ_egCct.js";import"./useDescription-9_tCBmmv.js";import"./useControlledState-BCtaC2xk.js";import"./ListKeyboardDelegate-DQvMTcWs.js";import"./RSPContexts-DMyWqTZT.js";import"./Text-baqn8Eqb.js";import"./inertValue-BmGGfILM.js";import"./useListState-BA6-rmwP.js";import"./useHighlightSelectionDescription-DSK3T_nH.js";import"./useUpdateEffect-zH_1-JrU.js";import"./useLocalizedStringFormatter-DqHRFXpC.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BydXThTj.js";import"./useField-BiL60XQ0.js";import"./clsx-Ciqy0D92.js";import"./Button-2crTYjPf.js";import"./Button.module-CcWMkJAG.js";import"./x-CVQFyjAZ.js";import"./createLucideIcon-D-Yxj5dk.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
