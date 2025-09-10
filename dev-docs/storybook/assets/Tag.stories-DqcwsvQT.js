import{j as a}from"./iframe-BlLk1VyU.js";import{T as o,a as i,s as D}from"./Tag-DjU_N1Cw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D1aJnJI-.js";import"./utils-BMIAgU5v.js";import"./clsx-B-dksMZM.js";import"./Hidden-JZWJ_5vv.js";import"./useFocusRing-D8E6mRpR.js";import"./index-4SRLjcVj.js";import"./index-BtDCmG82.js";import"./useLabels-Dnu8IOVr.js";import"./useButton-DAzZRw5B.js";import"./Collection-aHKvBhrz.js";import"./index-bmnj5EFr.js";import"./ListBox-1vBwp2mp.js";import"./DragAndDrop-CRwl9qmX.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BvS3gepe.js";import"./SelectionManager-Bf9tOt-A.js";import"./useEvent-AnR5J6S_.js";import"./FocusScope-CyqYCPxV.js";import"./useDescription-CAWnRg-q.js";import"./useControlledState-BN1j5LX2.js";import"./ListKeyboardDelegate-uUg_tTyg.js";import"./Text-DhD9pX_N.js";import"./inertValue-Cg0csU2_.js";import"./useListState-DoG4Fy93.js";import"./useHighlightSelectionDescription-DPhjyVS-.js";import"./useUpdateEffect-CeDOXu3t.js";import"./useLocalizedStringFormatter-CR34bLQ9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DT8kUtb8.js";import"./useField-Cf77YSv9.js";import"./Button-BrFWd1-E.js";import"./Button.module-GuOSDIYz.js";import"./x-Dy43kM-n.js";import"./createLucideIcon-D6lR4S6t.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
