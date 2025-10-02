import{j as a}from"./iframe-Bzcjlc7b.js";import{T as o,a as i,s as D}from"./Tag-D2QEh9ek.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CjwdaLE-.js";import"./utils-X60X_FVL.js";import"./clsx-B-dksMZM.js";import"./Hidden-BEi8Zsdq.js";import"./useFocusRing-BwjMICkC.js";import"./index-HxpR_cKB.js";import"./index-DZDm3azx.js";import"./useLabels-Csiq9DTZ.js";import"./useButton-DZhq6X0E.js";import"./Collection-B62UYSz_.js";import"./index-BSTN-crm.js";import"./ListBox-DZN57jH-.js";import"./DragAndDrop-CbVVYf0p.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CLNxqQ1I.js";import"./SelectionManager-D8UdNVM9.js";import"./useEvent-BmOkX8Gs.js";import"./FocusScope-Bf71ASSC.js";import"./useDescription-CPScKBmf.js";import"./useControlledState-BuuBhn-2.js";import"./context-ChdLe9JI.js";import"./Text-BdLSjUi2.js";import"./inertValue-0Ru8__Zh.js";import"./useListState-OEtFMA0X.js";import"./useHighlightSelectionDescription-BQwlknY2.js";import"./useUpdateEffect-_NW3XbBT.js";import"./useLocalizedStringFormatter-lEaDzWME.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DaiysZ8P.js";import"./useField-B_yABuqz.js";import"./clsx-Ciqy0D92.js";import"./Button-UIg-ITFk.js";import"./Button.module-DRhvPh0f.js";import"./x-CkHG_j5d.js";import"./createLucideIcon-Dz0pLxIa.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
