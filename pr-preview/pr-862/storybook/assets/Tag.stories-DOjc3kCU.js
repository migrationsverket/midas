import{j as a}from"./iframe-DjblUb4f.js";import{T as o,a as i,s as D}from"./Tag-ee6Dy7Qx.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B9zochEP.js";import"./utils-CCs0666b.js";import"./clsx-B-dksMZM.js";import"./Hidden-BHPryOw3.js";import"./useFocusRing-kWeS4kYG.js";import"./index-BRUBfIwz.js";import"./index-CX_tGf-y.js";import"./useLabels-BA1x20eC.js";import"./useButton-Gy64vn3J.js";import"./Collection-Do-Q1XEi.js";import"./index-BHfYTd6D.js";import"./ListBox-CSVlMhuA.js";import"./DragAndDrop-C9JHBqNt.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DTzXMfqC.js";import"./SelectionManager-YMB34XXr.js";import"./useEvent-D9BEd9jQ.js";import"./FocusScope-DAGwEA8m.js";import"./useDescription-DugSly09.js";import"./useControlledState-C6VV_tYe.js";import"./context-B_puAPyU.js";import"./Text-CQ-HTbSR.js";import"./inertValue-ClbzTva-.js";import"./useListState-CY-YdkS9.js";import"./useHighlightSelectionDescription-pEafrzko.js";import"./useUpdateEffect-Cz2fZmFn.js";import"./useLocalizedStringFormatter-Bgxg-DI8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Caw7C_YD.js";import"./useField-Dl2T9VxX.js";import"./clsx-Ciqy0D92.js";import"./Button-jqem5o_e.js";import"./Button.module-DRhvPh0f.js";import"./x-DF7gtUUi.js";import"./createLucideIcon-Ds5JUCEV.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
