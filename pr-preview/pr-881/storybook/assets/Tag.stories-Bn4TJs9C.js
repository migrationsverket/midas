import{j as a}from"./iframe-CV6D69rN.js";import{T as o,a as i,s as D}from"./Tag-Bjb46iV0.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CaHPonWk.js";import"./utils-CKHByqgZ.js";import"./clsx-B-dksMZM.js";import"./Hidden-BoxzXb92.js";import"./useFocusRing-CCiInLav.js";import"./index-OOrruJrH.js";import"./index-BMI-bX1r.js";import"./useLabels-CgeldylQ.js";import"./useButton-D0HcQPMI.js";import"./Collection-BIL80Rt6.js";import"./index-hjA5xk3Q.js";import"./ListBox-D1glRxkm.js";import"./DragAndDrop-DJO-Yq_R.js";import"./getScrollParent-fjDQJjcB.js";import"./scrollIntoView-B6XuVU3G.js";import"./Separator-BfRkh68f.js";import"./SelectionManager-4G46F4LF.js";import"./useEvent-BT5JGBkm.js";import"./SelectionIndicator-DXDwfq4F.js";import"./useDescription-CahuEqLm.js";import"./useControlledState-Cy4rarAg.js";import"./ListKeyboardDelegate-Bg6czyu9.js";import"./RSPContexts-D3NmVjZf.js";import"./Text-D1Ngmv5r.js";import"./inertValue-BHkNhMhS.js";import"./useListState-C8ZuTScU.js";import"./useHighlightSelectionDescription-S7I7IEod.js";import"./useUpdateEffect-BdbQzaLV.js";import"./useLocalizedStringFormatter-B_kJP8rr.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CACr0TIL.js";import"./useField-CV8mr7BQ.js";import"./clsx-Ciqy0D92.js";import"./Button-Dizi4_G8.js";import"./Button.module-CcWMkJAG.js";import"./x-CKg5TItV.js";import"./createLucideIcon-2hRCEgZR.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
