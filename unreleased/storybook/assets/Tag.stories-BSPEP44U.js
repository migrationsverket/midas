import{j as a}from"./iframe-0_gwTD1c.js";import{T as o,a as i,s as D}from"./Tag-B-rI58W1.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BgpQL2fm.js";import"./utils-D9Rxz40L.js";import"./clsx-B-dksMZM.js";import"./Hidden-DHc4ycpY.js";import"./useFocusRing-CtiO9zTs.js";import"./index-CciQTKca.js";import"./index-kkKaBsxW.js";import"./useLabels-B9qYN_H0.js";import"./useButton-Bj1mqcc1.js";import"./Collection-CyqKB_Dr.js";import"./index-ChuTVG2s.js";import"./ListBox-BfwOjsiU.js";import"./DragAndDrop-BxCEPgcn.js";import"./getScrollParent-DjElV_dA.js";import"./scrollIntoView-DrvHWDef.js";import"./Separator-djhPVUNM.js";import"./SelectionManager-tmsQuQJI.js";import"./useEvent-qf621vQd.js";import"./SelectionIndicator-CreVoWmz.js";import"./useDescription-6sNN-qxR.js";import"./useControlledState-S2fhhql7.js";import"./ListKeyboardDelegate-BtyknbeS.js";import"./RSPContexts-CRKvd2Bk.js";import"./Text-fVH0rgW6.js";import"./inertValue-CuTB4c7W.js";import"./useListState-Bs1VyA37.js";import"./useHighlightSelectionDescription-BzzkyCf8.js";import"./useUpdateEffect-B3fLNA69.js";import"./useLocalizedStringFormatter-DWumeBaA.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CJ7FpwsT.js";import"./useField-BOybvri7.js";import"./clsx-Ciqy0D92.js";import"./Button-SzzdHxwk.js";import"./Button.module-CcWMkJAG.js";import"./x-B6lg6xKx.js";import"./createLucideIcon-CX-ZLCYm.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
