import{j as a}from"./iframe-FqP1J2Fz.js";import{T as o,a as i,s as D}from"./Tag-B6Vl1cSi.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Ds5Adzrx.js";import"./utils-BqRDW_yM.js";import"./clsx-B-dksMZM.js";import"./Hidden-AUuO_5iE.js";import"./useFocusRing-D6_PmBav.js";import"./index-C-ezx-Vd.js";import"./index-BX5Qnhkm.js";import"./useLabels-Cau7NAwr.js";import"./useButton-BNlKRWgq.js";import"./Collection-DpPElJMl.js";import"./index-BYk2ylW1.js";import"./ListBox-0-K3C_sn.js";import"./DragAndDrop-7QFDdmG0.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DbQRY9tb.js";import"./SelectionManager-CVAz4rhC.js";import"./useEvent-ew2dVZQO.js";import"./FocusScope-BnZYoCWc.js";import"./useDescription-BVPmHKMj.js";import"./useControlledState-89eyTkOS.js";import"./context-CfYqWiuS.js";import"./Text-CD7BO4if.js";import"./inertValue-D3LG_NRN.js";import"./useListState-DVM_bKzg.js";import"./useHighlightSelectionDescription-DyF59N_u.js";import"./useUpdateEffect-CxQQJ7-k.js";import"./useLocalizedStringFormatter-C3UxObPt.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-jW3lfJzs.js";import"./useField-DNtzAHTg.js";import"./clsx-Ciqy0D92.js";import"./Button-BRpYT7XU.js";import"./Button.module-CcWMkJAG.js";import"./x-CAbDAhpu.js";import"./createLucideIcon-VeiM7GV8.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
