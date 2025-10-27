import{j as a}from"./iframe-y3W67OGZ.js";import{T as o,a as i,s as D}from"./Tag-fwvaEN-u.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CG2jxuqe.js";import"./utils-BJXuAV4-.js";import"./clsx-B-dksMZM.js";import"./Hidden-B1QYD1dw.js";import"./useFocusRing-CjSgtFIL.js";import"./index-C50br37e.js";import"./index-FvKmgXGU.js";import"./useLabels-CHJSanr2.js";import"./useButton-BFm8-BNg.js";import"./Collection-9d7mpX5q.js";import"./index-Dgew1csY.js";import"./ListBox-CfeFUNxE.js";import"./DragAndDrop-Bg7ruHwm.js";import"./getScrollParent-B_yF8BcH.js";import"./scrollIntoView-C9J0YPla.js";import"./Separator-Dn86Je3c.js";import"./SelectionManager-B8Qu-x4o.js";import"./useEvent-D1Zfzw6T.js";import"./SelectionIndicator-ovCaW42q.js";import"./useDescription-LWVTT3nE.js";import"./useControlledState-xJyf2_rp.js";import"./ListKeyboardDelegate-BApNGvcX.js";import"./RSPContexts-QoKXAlFb.js";import"./Text-po7vIW-q.js";import"./inertValue-BmFi9Dwp.js";import"./useListState-Bj26VOZb.js";import"./useHighlightSelectionDescription-BsKNuV9O.js";import"./useUpdateEffect-DGVjs2_1.js";import"./useLocalizedStringFormatter-CEoyBlv_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-SpwFg3FX.js";import"./useField-BWKjB-_N.js";import"./clsx-Ciqy0D92.js";import"./Button-CGW4uExF.js";import"./Button.module-CcWMkJAG.js";import"./x-pgjgEZ04.js";import"./createLucideIcon-CR3oL2jv.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
