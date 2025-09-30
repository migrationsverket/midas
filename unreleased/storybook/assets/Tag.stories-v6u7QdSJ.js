import{j as a}from"./iframe-B8lneMeq.js";import{T as o,a as i,s as D}from"./Tag-BX8dUGIs.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CrmEsfFX.js";import"./utils-C5evpkXB.js";import"./clsx-B-dksMZM.js";import"./Hidden-Be_JlbAv.js";import"./useFocusRing-CDqWDoc4.js";import"./index-4Vfd46zx.js";import"./index-BeoiaLoD.js";import"./useLabels-D4krVW4Z.js";import"./useButton-bd9rWnIl.js";import"./Collection-ecSTnFoU.js";import"./index-ccwLqPax.js";import"./ListBox-D0Ffny2G.js";import"./DragAndDrop-CDhmcAzh.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BnMT5G1O.js";import"./SelectionManager-CTU_B9KK.js";import"./useEvent-DImuT7su.js";import"./FocusScope-QkOBWzYh.js";import"./useDescription-1wd8PR9j.js";import"./useControlledState-cZIS4plk.js";import"./context-Cyqr9JJn.js";import"./Text-C_5ry2cG.js";import"./inertValue-CZnKd62c.js";import"./useListState-BuK2yv-4.js";import"./useHighlightSelectionDescription-Cwm3BPTT.js";import"./useUpdateEffect-DDAmuIbE.js";import"./useLocalizedStringFormatter-Dj-77w5Z.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BCYVGT65.js";import"./useField-BYqof05M.js";import"./Button-DeIHVsUa.js";import"./Button.module-DRhvPh0f.js";import"./x-B9PaVkKg.js";import"./createLucideIcon-Df5LIiIg.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
