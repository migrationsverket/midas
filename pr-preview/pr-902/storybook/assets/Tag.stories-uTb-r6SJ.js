import{j as a}from"./iframe-Bp-pD0w1.js";import{T as o,a as i,s as D}from"./Tag-D0I9FuN9.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D4SztGvn.js";import"./utils-BxnV4jlN.js";import"./clsx-B-dksMZM.js";import"./Hidden-BTb4tLnk.js";import"./useFocusRing-CiVgTPi_.js";import"./index-DpyuvwJ5.js";import"./index-LY3Qa6S-.js";import"./useLabels-CpXQzU3Y.js";import"./useButton-B2vaFTwe.js";import"./Collection-ZIFwBlRd.js";import"./index-BRzD5AiL.js";import"./ListBox-BeAeAz2K.js";import"./DragAndDrop-C1x9cPsn.js";import"./getScrollParent-BF1K-qo6.js";import"./scrollIntoView-jUiEJZ2a.js";import"./Separator-BjHgPc3t.js";import"./SelectionManager-CuyW13bq.js";import"./useEvent-DO8XKx6v.js";import"./SelectionIndicator-BihdcvMA.js";import"./useDescription-C_Ri3rYu.js";import"./useControlledState-B3ZfgfGP.js";import"./ListKeyboardDelegate-C31i-lO6.js";import"./RSPContexts-DqCmoure.js";import"./Text-1OQJfeZb.js";import"./inertValue-BkPXrgaS.js";import"./useListState-3jNzkTea.js";import"./useHighlightSelectionDescription-BzRf5yqs.js";import"./useUpdateEffect-Df6a2Ay5.js";import"./useLocalizedStringFormatter-CHxkUX5M.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BVONIOje.js";import"./useField-COmhyvun.js";import"./clsx-Ciqy0D92.js";import"./Button-DRxsMWZ8.js";import"./Button.module-CcWMkJAG.js";import"./x-tcTIV9ER.js";import"./createLucideIcon-C7VDgqjn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
