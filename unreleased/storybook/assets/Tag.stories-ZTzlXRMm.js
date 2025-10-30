import{j as a}from"./iframe-DxkxOiKP.js";import{T as o,a as i,s as D}from"./Tag-tWlxzAql.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DRgy13fC.js";import"./utils-GtJiqWXO.js";import"./clsx-B-dksMZM.js";import"./Hidden-DCnxb6gN.js";import"./useFocusRing-NzbD4KbX.js";import"./index-DRPTHEM9.js";import"./index-CW8xPpYI.js";import"./useLabels-CMm3Fwoy.js";import"./useButton-vHywEgZ-.js";import"./Collection-B_S71puD.js";import"./index-DVZ_zSqK.js";import"./ListBox-BuwRHTJ9.js";import"./DragAndDrop-DVVV-Pwj.js";import"./getScrollParent-gqBfSY8d.js";import"./scrollIntoView-yO_GxqDQ.js";import"./Separator-DvTLdJri.js";import"./SelectionManager-CDOWrXXG.js";import"./useEvent-BxMx9itd.js";import"./SelectionIndicator-BRaqcr2t.js";import"./useDescription-DJBS2ZMF.js";import"./useControlledState-krjy5Q4R.js";import"./ListKeyboardDelegate-Befz4h2t.js";import"./RSPContexts-gavh54ku.js";import"./Text-DhVB-qOP.js";import"./inertValue-CJ3EUuCE.js";import"./useListState-CAUQRDuU.js";import"./useHighlightSelectionDescription-BGVKBtP3.js";import"./useUpdateEffect-DW9F4w23.js";import"./useLocalizedStringFormatter-D9V2Fz7d.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D1JLDU8B.js";import"./useField-BzbKwU0y.js";import"./clsx-Ciqy0D92.js";import"./Button-7_wWUsTP.js";import"./Button.module-CcWMkJAG.js";import"./x-BaZS-vLJ.js";import"./createLucideIcon-D5f7oJCd.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
