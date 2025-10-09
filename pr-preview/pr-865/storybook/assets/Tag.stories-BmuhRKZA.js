import{j as a}from"./iframe-C16BC-EX.js";import{T as o,a as i,s as D}from"./Tag-DVUk6lDT.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CE-YQcGX.js";import"./utils-BN0Byhqd.js";import"./clsx-B-dksMZM.js";import"./Hidden-BYB5JMlZ.js";import"./useFocusRing-CljPHE6f.js";import"./index-Cxp3rleg.js";import"./index-Jsw5gD3M.js";import"./useLabels-BCWozk5J.js";import"./useButton-D89Rou_L.js";import"./Collection-B-2eiFkC.js";import"./index-B0NYPvtr.js";import"./ListBox-CJrQ6_lc.js";import"./DragAndDrop-u_uA2OAJ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B0a2Y_ob.js";import"./SelectionManager-Bwvng_Ri.js";import"./useEvent-OcAhRaRl.js";import"./FocusScope-CWzaRcUa.js";import"./useDescription-B1dYiFpN.js";import"./useControlledState-DpVVsSHR.js";import"./context-B6lY7Xx9.js";import"./Text-CO5EQ1M9.js";import"./inertValue-C8dqVuKV.js";import"./useListState-D6lTjpFM.js";import"./useHighlightSelectionDescription-CEIqjai9.js";import"./useUpdateEffect-B8_n7iRZ.js";import"./useLocalizedStringFormatter-BbPrpatl.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-of6WlFwb.js";import"./useField-BSWW6E_y.js";import"./clsx-Ciqy0D92.js";import"./Button-DoJ2CrKj.js";import"./Button.module-CcWMkJAG.js";import"./x-BSQusL6g.js";import"./createLucideIcon-DwD6e9Xs.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
