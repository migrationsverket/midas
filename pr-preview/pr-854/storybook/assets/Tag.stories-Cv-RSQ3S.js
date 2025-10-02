import{j as a}from"./iframe-C74ZGi4l.js";import{T as o,a as i,s as D}from"./Tag-BSnL7hkk.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CJtAocIv.js";import"./utils-Dvd-wukX.js";import"./clsx-B-dksMZM.js";import"./Hidden-ZH5jfTGk.js";import"./useFocusRing-CTUCgRrk.js";import"./index-Bd0R1P5o.js";import"./index-C3hJabdn.js";import"./useLabels-Ccr6k9sF.js";import"./useButton-egmdkDW8.js";import"./Collection-DcGqSFaG.js";import"./index-Dgcf1xmk.js";import"./ListBox-SYOeqBzp.js";import"./DragAndDrop-Gt5Wf20t.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CtV3GKek.js";import"./SelectionManager-C8nX4qW8.js";import"./useEvent-CGIcgErL.js";import"./FocusScope-cU6x_RvH.js";import"./useDescription-DsPtck5H.js";import"./useControlledState-D3_QAzCh.js";import"./context-BLtjZAfL.js";import"./Text-BV45PbaJ.js";import"./inertValue-BCj8_RGf.js";import"./useListState-BgNiwYox.js";import"./useHighlightSelectionDescription-D281jPvY.js";import"./useUpdateEffect-D4mzxUNf.js";import"./useLocalizedStringFormatter-BB-Z0UzN.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CseogRmA.js";import"./useField-CRhoIRI9.js";import"./clsx-Ciqy0D92.js";import"./Button-C652Sd8v.js";import"./Button.module-D4_3z1t-.js";import"./x-B1GQ0HiG.js";import"./createLucideIcon-Cx7zE77e.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
