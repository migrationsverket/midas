import{j as a}from"./iframe-BxN02fG5.js";import{T as o,a as i,s as D}from"./Tag-znnIofdI.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DL7reNRt.js";import"./utils-DNiWlLhS.js";import"./clsx-B-dksMZM.js";import"./Hidden-CszN_z70.js";import"./useFocusRing-CkJ8xgbS.js";import"./index-CsKFd6bt.js";import"./index-Ts9wpydp.js";import"./useLabels-Dm94oC0f.js";import"./useButton-B_39DARH.js";import"./Collection-CNqop7R7.js";import"./index-BSwxxkBy.js";import"./ListBox-YcfEHY5_.js";import"./DragAndDrop-D3JJsADk.js";import"./getScrollParent-UniuAyzg.js";import"./scrollIntoView-aYdBJlGo.js";import"./Separator-tCsVQVw6.js";import"./SelectionManager-D1NpoMOO.js";import"./useEvent-XS_DxB45.js";import"./SelectionIndicator-DNUOiUbQ.js";import"./useDescription-CduxJyJh.js";import"./useControlledState-Dzc7NhFq.js";import"./ListKeyboardDelegate-BeSlpi_9.js";import"./RSPContexts-CuevQr1D.js";import"./Text-CHt3qNlh.js";import"./inertValue-DJjNyVJ2.js";import"./useListState-CbSt2dHd.js";import"./useHighlightSelectionDescription-WMOSb6HV.js";import"./useUpdateEffect-DoMSANL1.js";import"./useLocalizedStringFormatter-CxLow131.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D4uA2IgL.js";import"./useField-DFmto85z.js";import"./clsx-Ciqy0D92.js";import"./Button-pZ5sJKIm.js";import"./Button.module-CcWMkJAG.js";import"./x-BJC_acg4.js";import"./createLucideIcon-ALbjxArz.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
