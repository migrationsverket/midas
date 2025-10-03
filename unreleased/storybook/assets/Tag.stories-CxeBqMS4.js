import{j as a}from"./iframe-BflIqvE6.js";import{T as o,a as i,s as D}from"./Tag-GbQrGasz.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CdJt7WIE.js";import"./utils-ylbj5vL5.js";import"./clsx-B-dksMZM.js";import"./Hidden-C1UzRk0g.js";import"./useFocusRing-DrDxscJM.js";import"./index-Br-uEwzo.js";import"./index-Dx7Btq4b.js";import"./useLabels-CTD0nf31.js";import"./useButton-Q7IzlQM_.js";import"./Collection-Dg8-4AhQ.js";import"./index-ByuRkrFE.js";import"./ListBox-DwsDs7xx.js";import"./DragAndDrop-wRj4yGgp.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-27e1b02U.js";import"./SelectionManager-CR5KozjG.js";import"./useEvent-D0_cf-Vk.js";import"./FocusScope-BNZiqYbh.js";import"./useDescription-iMT9PnYW.js";import"./useControlledState-yTdqFspJ.js";import"./context-LP_PzFA0.js";import"./Text-BTus72kF.js";import"./inertValue-CJHUFQxV.js";import"./useListState-ChXkstn0.js";import"./useHighlightSelectionDescription-DGbOfQI6.js";import"./useUpdateEffect-etx3jtv3.js";import"./useLocalizedStringFormatter-CbT76VeL.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-z2yd20ln.js";import"./useField-DF-FRna8.js";import"./clsx-Ciqy0D92.js";import"./Button-BZ6BUQvd.js";import"./Button.module-DRhvPh0f.js";import"./x-DNxtkk9S.js";import"./createLucideIcon-BgeUGhPA.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
