import{j as a}from"./iframe-BfY9NoNi.js";import{T as o,a as i,s as D}from"./Tag-WOJuDBuX.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BdsYfGRH.js";import"./utils-Dga5ZbNp.js";import"./clsx-B-dksMZM.js";import"./Hidden-CX9TQJf4.js";import"./useFocusRing-DXUVY-xe.js";import"./index-CqvVrVVj.js";import"./index-BrOw_v_J.js";import"./useLabels-BNi3UT4-.js";import"./useButton-SIyC6lTD.js";import"./Collection-BOeUIdJm.js";import"./index-D6pvSaq5.js";import"./ListBox-B9JYK2Ld.js";import"./DragAndDrop-BEYuWjS7.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-e5EKt6k2.js";import"./SelectionManager-BTPTuXF6.js";import"./useEvent-B4NkGWxl.js";import"./FocusScope-O0kS4DdR.js";import"./useDescription-BRPr8NIC.js";import"./useControlledState-DROty5Z6.js";import"./ListKeyboardDelegate-DjfYHaA5.js";import"./Text-DgMSgBZ8.js";import"./inertValue-BRdorDNO.js";import"./useListState-uGWqliJ7.js";import"./useHighlightSelectionDescription-CDk1LzQs.js";import"./useUpdateEffect-D1vlkZ4h.js";import"./useLocalizedStringFormatter-KT89JQEb.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-UbvtbSfO.js";import"./useField-CftE5LFl.js";import"./Button-BcV1F1TK.js";import"./Button.module-DWkXlqFG.js";import"./x-DkTPb604.js";import"./createLucideIcon-CRduVuQK.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
