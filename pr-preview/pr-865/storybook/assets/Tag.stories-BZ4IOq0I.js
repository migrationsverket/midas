import{j as a}from"./iframe-BBbn8fVZ.js";import{T as o,a as i,s as D}from"./Tag-31Izxfb7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-GwWg_MGj.js";import"./utils-9pHKKNJP.js";import"./clsx-B-dksMZM.js";import"./Hidden-DvUCWeJm.js";import"./useFocusRing-9jsVQyPx.js";import"./index-Dukmd-LY.js";import"./index-DGILqiJP.js";import"./useLabels-BKf6FV8B.js";import"./useButton-W3RUfK0-.js";import"./Collection-CygBQNjP.js";import"./index-D--zS7wx.js";import"./ListBox-B7ZZOMab.js";import"./DragAndDrop-CmmxtoJf.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DtdF4gCd.js";import"./SelectionManager-DcaZ_eNt.js";import"./useEvent-BPrR35c7.js";import"./FocusScope-rxhx3pvf.js";import"./useDescription-CJI3x2j3.js";import"./useControlledState-B9FtRg7z.js";import"./context-sTNDbUz_.js";import"./Text-C9RMenHw.js";import"./inertValue-CeixjRsZ.js";import"./useListState-DTR5Dp5D.js";import"./useHighlightSelectionDescription-BpVpIs7t.js";import"./useUpdateEffect-CZfQRfdj.js";import"./useLocalizedStringFormatter-DptexcKO.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CbO2ANxr.js";import"./useField-fW1KjMwR.js";import"./clsx-Ciqy0D92.js";import"./Button-B-bVjJ0f.js";import"./Button.module-CcWMkJAG.js";import"./x-Cb9DCAe6.js";import"./createLucideIcon-BUXSkqzc.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
