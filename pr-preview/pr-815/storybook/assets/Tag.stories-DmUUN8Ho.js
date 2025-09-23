import{j as a}from"./iframe-CZMU-d-C.js";import{T as o,a as i,s as D}from"./Tag-B3FfFwez.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CQJI0lPe.js";import"./utils-0vyF8Uvf.js";import"./clsx-B-dksMZM.js";import"./Hidden-CcxOsUjT.js";import"./useFocusRing-BkGUeev8.js";import"./index-mt08pHjx.js";import"./index-DhUuosiI.js";import"./useLabels-BQR7hWQl.js";import"./useButton-CT0O94HX.js";import"./Collection-D9DWt1a5.js";import"./index-Cu5btwEW.js";import"./ListBox-CzFj1Kye.js";import"./DragAndDrop-COruk8Lw.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B6ts5dTN.js";import"./SelectionManager-DDNa3TB0.js";import"./useEvent-DXSKo_g7.js";import"./FocusScope-DVrxh941.js";import"./useDescription-DV1bc_WG.js";import"./useControlledState-B_XrwgYS.js";import"./ListKeyboardDelegate-b5wy3bwX.js";import"./Text-Ba3maOKa.js";import"./inertValue-C-TZhPzi.js";import"./useListState-DvWGjoux.js";import"./useHighlightSelectionDescription-BL3ZOYs-.js";import"./useUpdateEffect-C72DcCNI.js";import"./useLocalizedStringFormatter-UHruE0Wp.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DktMDPoh.js";import"./useField-QjPQ163I.js";import"./Button-AFygZI4L.js";import"./Button.module-DRhvPh0f.js";import"./x-CsrDwsrq.js";import"./createLucideIcon-BJGWvH8U.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
