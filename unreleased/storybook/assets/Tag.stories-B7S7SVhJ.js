import{j as a}from"./iframe-C3u4Zt4t.js";import{T as o,a as i,s as D}from"./Tag-DQiStqrk.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-nS0ezL3z.js";import"./utils-D4V0j6GN.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bm7whvQV.js";import"./useFocusRing-0YqJlFYp.js";import"./index-DOy70ALU.js";import"./index-C0a31YO4.js";import"./useLabels-CDS4LyKX.js";import"./useButton-CS3gOjex.js";import"./Collection-Bk6Deok5.js";import"./index-BDyj-gM1.js";import"./ListBox-Da4NpYYu.js";import"./DragAndDrop-Sif3W1X8.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DFE9rhlV.js";import"./SelectionManager-C9zNoa4B.js";import"./useEvent-Dl-OEi1q.js";import"./FocusScope-CL7ii6ev.js";import"./useDescription-BngDhVlE.js";import"./useControlledState-BGfE6l9Z.js";import"./context-CqDpIpUG.js";import"./Text-TIiAn7x7.js";import"./inertValue-DP5mWXxm.js";import"./useListState-Dle-yK6-.js";import"./useHighlightSelectionDescription-BgwWt4Bz.js";import"./useUpdateEffect-l5vK_aL_.js";import"./useLocalizedStringFormatter-CEWJjE4h.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C3uMH2q7.js";import"./useField-D6uSMR0J.js";import"./Button-DV9AGVX6.js";import"./Button.module-DRhvPh0f.js";import"./x-BhQnsLxs.js";import"./createLucideIcon-BaVLTAy7.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
