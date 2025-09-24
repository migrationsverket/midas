import{j as a}from"./iframe-DeK86jJP.js";import{T as o,a as i,s as D}from"./Tag-9DhdyDDW.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-hIojP0HX.js";import"./utils-CLOzdL9v.js";import"./clsx-B-dksMZM.js";import"./Hidden-k-e6MpDc.js";import"./useFocusRing-CwD8Waoq.js";import"./index-CGJBmdi_.js";import"./index-Cik-wDkC.js";import"./useLabels-BbR04L17.js";import"./useButton-BlpdOv7p.js";import"./Collection-D35c4y4W.js";import"./index-D6nNP4ZG.js";import"./ListBox-HfYtfzFu.js";import"./DragAndDrop-IdtPiXFp.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BRiccKOC.js";import"./SelectionManager-0K6a301x.js";import"./useEvent-Dabnq9hS.js";import"./FocusScope-DL781d3b.js";import"./useDescription-Raf8WUVC.js";import"./useControlledState-Y99N3e1Z.js";import"./ListKeyboardDelegate-CzsTmJKz.js";import"./Text-BSU2OLG0.js";import"./inertValue-D1mKID42.js";import"./useListState-DSD174iU.js";import"./useHighlightSelectionDescription-BiiEVuwW.js";import"./useUpdateEffect-D9OM9gei.js";import"./useLocalizedStringFormatter-D3WgUlPf.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CVIht1mQ.js";import"./useField-BzRSelSD.js";import"./Button-BVSUBuAC.js";import"./Button.module-DRhvPh0f.js";import"./x-B366ZlRx.js";import"./createLucideIcon-CMNDIdhZ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
