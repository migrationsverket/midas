import{j as a}from"./iframe-WtsYdCWW.js";import{T as o,a as i,s as D}from"./Tag-tNErbJZq.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dw5t929x.js";import"./utils-BhLUzB4t.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cq67l1g2.js";import"./useFocusRing-YNAQVWv4.js";import"./index-DvYAB5y-.js";import"./index-B-26v8AG.js";import"./useLabels-BkXxXUDx.js";import"./useButton-DXRyWe1d.js";import"./Collection-BBufFjvI.js";import"./index-CuAsNJCg.js";import"./ListBox-CB08oVy2.js";import"./DragAndDrop-CIC0pg_0.js";import"./getScrollParent-CtNN17mL.js";import"./scrollIntoView-BVffQGeS.js";import"./Separator-ZiVGXDH9.js";import"./SelectionManager-fGJBSrZL.js";import"./useEvent-CpoFQjgs.js";import"./SelectionIndicator-D1fYHp8r.js";import"./useDescription-DkWnRf10.js";import"./useControlledState-DokJvM9_.js";import"./ListKeyboardDelegate-C50OJK3c.js";import"./RSPContexts-B6qF0TLC.js";import"./Text-CpDHZS2x.js";import"./inertValue-BAUISpcr.js";import"./useListState-BlIanRBS.js";import"./useHighlightSelectionDescription-BjrOjRiy.js";import"./useUpdateEffect-BAF8Dxum.js";import"./useLocalizedStringFormatter-BDWUvifl.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C5DtDIkp.js";import"./useField-B9klEWdf.js";import"./clsx-Ciqy0D92.js";import"./Button-BEjjtwQx.js";import"./Button.module-CcWMkJAG.js";import"./x-BhCrKy2Z.js";import"./createLucideIcon-6hMoTMF9.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
