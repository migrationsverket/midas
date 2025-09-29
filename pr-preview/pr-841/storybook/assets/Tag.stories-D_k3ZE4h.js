import{j as a}from"./iframe-D1LD4Tks.js";import{T as o,a as i,s as D}from"./Tag-YDA68X8Z.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DPahIHgQ.js";import"./utils-JoROItjW.js";import"./clsx-B-dksMZM.js";import"./Hidden-DdrKESqT.js";import"./useFocusRing-CgW2W6o7.js";import"./index-Bs1cGQij.js";import"./index-DLH4JUrF.js";import"./useLabels-BYpo9Rk4.js";import"./useButton-BIw3FYsh.js";import"./Collection-CwdKwyKK.js";import"./index-DoB3bCvi.js";import"./ListBox-CtPW6jkK.js";import"./DragAndDrop-BMT99FOZ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Cgo93Nkb.js";import"./SelectionManager-Cg6qZf9S.js";import"./useEvent-DQ8m34bj.js";import"./FocusScope-6y4D1TG2.js";import"./useDescription-CuA-8Wlr.js";import"./useControlledState-B3j8a0F9.js";import"./context-CBf5zn_m.js";import"./Text-BCb06VbB.js";import"./inertValue-BwzqUfOz.js";import"./useListState-CQUqo6Za.js";import"./useHighlightSelectionDescription-CxImDdid.js";import"./useUpdateEffect-CKeQkIIq.js";import"./useLocalizedStringFormatter-ZYu45CT_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DHp2DaCQ.js";import"./useField-Dchs1eZ3.js";import"./Button-jc0CXsSm.js";import"./Button.module-DRhvPh0f.js";import"./x-De2ZsV_g.js";import"./createLucideIcon-DRJ6nCYn.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
