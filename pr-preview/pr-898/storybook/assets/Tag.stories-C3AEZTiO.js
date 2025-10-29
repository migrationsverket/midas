import{j as a}from"./iframe-Ds31ZeCL.js";import{T as o,a as i,s as D}from"./Tag-D68B-COP.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BRYjs9ul.js";import"./utils-Ccb-PNwm.js";import"./clsx-B-dksMZM.js";import"./Hidden-BFTwVmEU.js";import"./useFocusRing-DbzGkd4o.js";import"./index-BMEMUeCF.js";import"./index-6VpT02pa.js";import"./useLabels-KFsfg27m.js";import"./useButton-DT_tDDmr.js";import"./Collection-0qCNzWif.js";import"./index-D5iN1b4W.js";import"./ListBox-sUXO_dAM.js";import"./DragAndDrop-BcxsXzer.js";import"./getScrollParent-DkASD-bu.js";import"./scrollIntoView-DMuJxCQU.js";import"./Separator-BsRfj5xx.js";import"./SelectionManager-BTwwYe54.js";import"./useEvent-CijTjvVA.js";import"./SelectionIndicator-356AV4Lk.js";import"./useDescription-DB1986lR.js";import"./useControlledState-CuKcqLW_.js";import"./ListKeyboardDelegate-DU0JLtZL.js";import"./RSPContexts-cRtmbRNp.js";import"./Text-BTsvF3LX.js";import"./inertValue-DuU6i-NN.js";import"./useListState-_V0oEcvj.js";import"./useHighlightSelectionDescription-CwirmxoB.js";import"./useUpdateEffect-uLGmI7Sv.js";import"./useLocalizedStringFormatter-D-nGrECy.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-93IEq6b0.js";import"./useField-BXrG_6LG.js";import"./clsx-Ciqy0D92.js";import"./Button-7Q0a2n2D.js";import"./Button.module-CcWMkJAG.js";import"./x-DR9Exe3k.js";import"./createLucideIcon-C-mc6mwp.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
