import{j as a}from"./iframe-DHe7O3YB.js";import{T as o,a as i,s as D}from"./Tag-OqpM8DJf.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BQbFjbVy.js";import"./utils-uG4DrbYs.js";import"./clsx-B-dksMZM.js";import"./Hidden-BwKN-Ct7.js";import"./useFocusRing-DNdg1RO0.js";import"./index-BpDGib3c.js";import"./index-BzXfAI-e.js";import"./useLabels-ByK8mPta.js";import"./useButton-CTl0n0ca.js";import"./Collection-Bdgm8S0Q.js";import"./index-DZlkqf27.js";import"./ListBox-C6UU2QM2.js";import"./DragAndDrop-CrHMTc0a.js";import"./getScrollParent-CvBDZYkN.js";import"./scrollIntoView-BfnXnyY_.js";import"./Separator-DPgq4WUN.js";import"./SelectionManager-DQc8Lfz5.js";import"./useEvent-dyC_FZrC.js";import"./SelectionIndicator-BgrmwFuS.js";import"./useDescription-BnPwjth8.js";import"./useControlledState-Cr1hZmrx.js";import"./ListKeyboardDelegate-CvIzD7Zk.js";import"./RSPContexts-BqA7yCGR.js";import"./Text-fzIvjG6X.js";import"./inertValue-DSW7U0kP.js";import"./useListState-DAdbgnQR.js";import"./useHighlightSelectionDescription-BavXuzNp.js";import"./useUpdateEffect-3f09mw3i.js";import"./useLocalizedStringFormatter-s0APVaC7.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-gt8XyaSa.js";import"./useField-D9UztZcR.js";import"./clsx-Ciqy0D92.js";import"./Button-zyoNupAk.js";import"./Button.module-CcWMkJAG.js";import"./x-DcZTwviR.js";import"./createLucideIcon-BLSjYB_Y.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
