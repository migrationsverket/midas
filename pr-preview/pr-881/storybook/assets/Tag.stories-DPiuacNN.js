import{j as a}from"./iframe-D7qSfnUE.js";import{T as o,a as i,s as D}from"./Tag-CbBRU4FU.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D26x-hX0.js";import"./utils-CeNm5Tih.js";import"./clsx-B-dksMZM.js";import"./Hidden-Jowmf4f0.js";import"./useFocusRing-qSh-9R1P.js";import"./index-BMQPrinf.js";import"./index-DTrZGXsA.js";import"./useLabels-BKQNgdG2.js";import"./useButton-DVaHBh8l.js";import"./Collection-DHLWoQ48.js";import"./index-X-gr_rP2.js";import"./ListBox-CDB4g5XB.js";import"./DragAndDrop-BmqDgulE.js";import"./getScrollParent-jITrOnkM.js";import"./scrollIntoView-Bs2AzVDZ.js";import"./Separator-DTvYfEn-.js";import"./SelectionManager--E9pRHoE.js";import"./useEvent-CbWTIfAc.js";import"./SelectionIndicator-r7h1dqT9.js";import"./useDescription-CwhIqzOE.js";import"./useControlledState-Bz1sBQKS.js";import"./ListKeyboardDelegate-Bhu3w5IK.js";import"./RSPContexts-Bv8uCkvn.js";import"./Text-BMCR77k8.js";import"./inertValue-CVOlM9hF.js";import"./useListState-Dpr8Lupf.js";import"./useHighlightSelectionDescription-BBDIXVkN.js";import"./useUpdateEffect-DPwsXt9j.js";import"./useLocalizedStringFormatter-bG5WwUlH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-5zpXEPEe.js";import"./useField-BIiuZqbD.js";import"./clsx-Ciqy0D92.js";import"./Button-CjV73bUl.js";import"./Button.module-CcWMkJAG.js";import"./x-3RiAvjY-.js";import"./createLucideIcon-z_R_CK7D.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
