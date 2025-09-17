import{j as a}from"./iframe-EA8DT7as.js";import{T as o,a as i,s as D}from"./Tag-BSSqqxm2.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B7ntt1Cy.js";import"./utils-DSPJdSsz.js";import"./clsx-B-dksMZM.js";import"./Hidden-BqjGC-QL.js";import"./useFocusRing-Bdeu5sav.js";import"./index-rmY5WH6Q.js";import"./index-DM-3mYeQ.js";import"./useLabels-DKGcY1O5.js";import"./useButton-BkY2lVGw.js";import"./Collection-D-nlIY9X.js";import"./index-DNGCppxt.js";import"./ListBox-CH2gG-8K.js";import"./DragAndDrop-DqkLG5pj.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Zbcoamob.js";import"./SelectionManager-B6HYgKe3.js";import"./useEvent-CUHz-bN7.js";import"./FocusScope-Cf-3zIHT.js";import"./useDescription-zx8PgnWr.js";import"./useControlledState-CW6AUFrU.js";import"./ListKeyboardDelegate-SpoQjLPd.js";import"./Text-j1RY8RT4.js";import"./inertValue-DP5IBvfW.js";import"./useListState-C33azEM8.js";import"./useHighlightSelectionDescription-D9KT_8r4.js";import"./useUpdateEffect-DbcBiskK.js";import"./useLocalizedStringFormatter-RzTUoYzJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CQGcTkpc.js";import"./useField-DdUJUdOt.js";import"./Button-BGiximTR.js";import"./Button.module-DRhvPh0f.js";import"./x-DZy7ioyX.js";import"./createLucideIcon-DT52Zx7i.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
