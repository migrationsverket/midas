import{j as a}from"./iframe-B5ntgTD2.js";import{T as o,a as i,s as D}from"./Tag-DsfED4KR.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BvMiRG8k.js";import"./utils-BtbY4MNm.js";import"./clsx-B-dksMZM.js";import"./Hidden-lT_VliGD.js";import"./useFocusRing-BCeWc4Ui.js";import"./index-D_hYc8yX.js";import"./index-DHyi_Sp2.js";import"./useLabels-BJ7ZjIL5.js";import"./useButton-CEt4XObF.js";import"./Collection-BIREOE6Y.js";import"./index-sn_SQbdk.js";import"./ListBox-DxmCJ5wc.js";import"./DragAndDrop-BPzQRwWJ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CPu4lA-W.js";import"./SelectionManager-BoRsjytr.js";import"./useEvent-B51eQ3Rt.js";import"./FocusScope-B-FfsYn8.js";import"./useDescription-BW5rO9lw.js";import"./useControlledState-CMNw8rH0.js";import"./context-D2ra5iKy.js";import"./Text-gs_xu_Jf.js";import"./inertValue-6fM3PVGS.js";import"./useListState-DASLcDxn.js";import"./useHighlightSelectionDescription-BuKq2g7u.js";import"./useUpdateEffect-BmeMyNsd.js";import"./useLocalizedStringFormatter-BRLbBeqY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-zNaOj9po.js";import"./useField-B9RjW3SF.js";import"./clsx-Ciqy0D92.js";import"./Button-i7zsU2HF.js";import"./Button.module-CcWMkJAG.js";import"./x-DXss9rl3.js";import"./createLucideIcon-Bmzq-KQx.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
