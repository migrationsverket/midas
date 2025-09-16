import{j as a}from"./iframe-DK_5C_ta.js";import{T as o,a as i,s as D}from"./Tag-BeueJ4FK.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CigQbRL4.js";import"./utils-Dq2AXRwi.js";import"./clsx-B-dksMZM.js";import"./Hidden-D1vgsL83.js";import"./useFocusRing-D5jk5K46.js";import"./index-BSFYr4Kn.js";import"./index-DtGmqQLg.js";import"./useLabels-D88rkdYs.js";import"./useButton-D6fbe5pn.js";import"./Collection-BV4oN34C.js";import"./index-D1gJwysV.js";import"./ListBox-DF5PQQUl.js";import"./DragAndDrop-Cmx0JL1f.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DbPtD3gn.js";import"./SelectionManager-DtlOyqHF.js";import"./useEvent-Cenk9aXC.js";import"./FocusScope-FCioJjdL.js";import"./useDescription-Dj5Lb6iJ.js";import"./useControlledState-BAvy61Vb.js";import"./ListKeyboardDelegate-CjiowGtm.js";import"./Text-D_hmtZjD.js";import"./inertValue-D7I_3Hfq.js";import"./useListState-C8EsqjCy.js";import"./useHighlightSelectionDescription-CE2QWons.js";import"./useUpdateEffect-DY6fUu8t.js";import"./useLocalizedStringFormatter-BSTlPq_4.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BZmHnMl5.js";import"./useField-0JJVLGui.js";import"./Button-DhBUu0Zw.js";import"./Button.module-DRhvPh0f.js";import"./x-CmIS_C-r.js";import"./createLucideIcon-D45fJSNn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
