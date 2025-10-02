import{j as a}from"./iframe-BBe4OvBS.js";import{T as o,a as i,s as D}from"./Tag-BwBKWwWA.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DmC_zcW9.js";import"./utils-B6_ytkBX.js";import"./clsx-B-dksMZM.js";import"./Hidden-B2rZGYtO.js";import"./useFocusRing-DOj2ldSr.js";import"./index-DkUZrDy7.js";import"./index-BW_fnelA.js";import"./useLabels-BI3h2n1y.js";import"./useButton-BlPdrvSM.js";import"./Collection-BZrp0gp7.js";import"./index-A8jfBO70.js";import"./ListBox-tFNyghXU.js";import"./DragAndDrop-BI3AqPCa.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DXZB_Md-.js";import"./SelectionManager-Y4rE1GmY.js";import"./useEvent-jny-MK4P.js";import"./FocusScope-vV1nB2in.js";import"./useDescription-h0NshSzT.js";import"./useControlledState-ChadYGIB.js";import"./context-OTBYVMIL.js";import"./Text-CN-PwnKw.js";import"./inertValue-DDATNn2n.js";import"./useListState-B4qwkaCw.js";import"./useHighlightSelectionDescription-C4skbRwM.js";import"./useUpdateEffect-DWvv3NGt.js";import"./useLocalizedStringFormatter-QRfnD-OF.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-B284daVC.js";import"./useField-DRLldKop.js";import"./clsx-Ciqy0D92.js";import"./Button-Cbq-hdAP.js";import"./Button.module-DRhvPh0f.js";import"./x-pooviTky.js";import"./createLucideIcon-D_DAlWAx.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
