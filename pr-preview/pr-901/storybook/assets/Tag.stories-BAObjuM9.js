import{j as a}from"./iframe-DGZzIj8a.js";import{T as o,a as i,s as D}from"./Tag-cmahHOYm.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-k2Mv_w_V.js";import"./utils-qpY-PvHO.js";import"./clsx-B-dksMZM.js";import"./Hidden-ky3FyvE6.js";import"./useFocusRing-0x3dFUKq.js";import"./index-BLHGpJ25.js";import"./index-MzO9IoRB.js";import"./useLabels-b0evDY_M.js";import"./useButton-CfCbovoG.js";import"./Collection-BXDtvww3.js";import"./index-CISDiG0U.js";import"./ListBox-BYukEynM.js";import"./DragAndDrop-yQI82iKX.js";import"./getScrollParent-CaqcTV0x.js";import"./scrollIntoView-BfcJL7D_.js";import"./Separator-VOsyzNa6.js";import"./SelectionManager-KBEQS8z3.js";import"./useEvent-DCVHbVts.js";import"./SelectionIndicator-D9jlfIzJ.js";import"./useDescription-e6rYXjZ8.js";import"./useControlledState-YXdFeN2G.js";import"./ListKeyboardDelegate-DhrNZmny.js";import"./RSPContexts-BlLhAMsI.js";import"./Text-DzXzJKwW.js";import"./inertValue-CEqqZ_6x.js";import"./useListState-Cwg8sZCQ.js";import"./useHighlightSelectionDescription-wQaqaqwq.js";import"./useUpdateEffect-B2EoX9yh.js";import"./useLocalizedStringFormatter-BrpkFdxe.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-cr8xtC5K.js";import"./useField-Du2nJeMa.js";import"./clsx-Ciqy0D92.js";import"./Button-BAskP0uh.js";import"./Button.module-CcWMkJAG.js";import"./x-rH8-6n7S.js";import"./createLucideIcon-CIqho_dT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
