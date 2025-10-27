import{j as a}from"./iframe-BwH-Lx90.js";import{T as o,a as i,s as D}from"./Tag-B0aWX9m7.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CEsLMfpT.js";import"./utils-BSoY4MwA.js";import"./clsx-B-dksMZM.js";import"./Hidden-D3dbG7PD.js";import"./useFocusRing-B_Nyktnx.js";import"./index-I6bFFxf8.js";import"./index-dwT5Nujc.js";import"./useLabels-vZhVJ9vJ.js";import"./useButton-PZzRaxvW.js";import"./Collection-DNJ61jis.js";import"./index-wZV9kEs1.js";import"./ListBox-BABhovG3.js";import"./DragAndDrop-B29saB1Y.js";import"./getScrollParent-Cb1Z8tsE.js";import"./scrollIntoView-CBoDrKk_.js";import"./Separator-MVG8Gxkd.js";import"./SelectionManager-Dr9N7oam.js";import"./useEvent-DI4G-SrA.js";import"./SelectionIndicator-CMPtY3RK.js";import"./useDescription-JivsosT5.js";import"./useControlledState-mOHJX8bF.js";import"./ListKeyboardDelegate-qbj0de_H.js";import"./RSPContexts-CQ6CkVKH.js";import"./Text-Dg0dTwoh.js";import"./inertValue-BBazVmYu.js";import"./useListState-C7Ucs9Jh.js";import"./useHighlightSelectionDescription-DwFkVA0j.js";import"./useUpdateEffect-BKYepvD4.js";import"./useLocalizedStringFormatter-DZht3deX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BSZCdGp3.js";import"./useField-CEBoLfFL.js";import"./clsx-Ciqy0D92.js";import"./Button-BizqGLk0.js";import"./Button.module-CcWMkJAG.js";import"./x-CVb0omP3.js";import"./createLucideIcon-DAPiy3s_.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
