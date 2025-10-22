import{j as a}from"./iframe-C0qjnZQt.js";import{T as o,a as i,s as D}from"./Tag-CSwn419a.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B6lg9fpk.js";import"./utils-CwN9tP57.js";import"./clsx-B-dksMZM.js";import"./Hidden-B1A_RSgm.js";import"./useFocusRing-D9qTVe5c.js";import"./index-DMYP8ta3.js";import"./index-CsGtJukt.js";import"./useLabels-By6CRBN6.js";import"./useButton-BCPQp4KX.js";import"./Collection-RY_dEOg6.js";import"./index-Dh0TypH1.js";import"./ListBox-DC1ZQMuZ.js";import"./DragAndDrop-CJ2HaGOF.js";import"./getScrollParent-78ZkeE43.js";import"./scrollIntoView-Dw6CQgS1.js";import"./Separator-Diw4AO0b.js";import"./SelectionManager-Czc-2ogj.js";import"./useEvent-C6wQZ5Tk.js";import"./SelectionIndicator-3xG18dlO.js";import"./useDescription-CS8KUcdz.js";import"./useControlledState-DtyvMnS5.js";import"./ListKeyboardDelegate-16-uQPQS.js";import"./RSPContexts-BymLFMOL.js";import"./Text-DSWkEYs0.js";import"./inertValue-DNeKBNt-.js";import"./useListState-Dh9CpWFa.js";import"./useHighlightSelectionDescription-Cq10b9P_.js";import"./useUpdateEffect-DPqXTz8p.js";import"./useLocalizedStringFormatter-DamENXUh.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BjfFBI3E.js";import"./useField-D27S4kcb.js";import"./clsx-Ciqy0D92.js";import"./Button-Bk2KIYy4.js";import"./Button.module-CcWMkJAG.js";import"./x-C4PXQM4X.js";import"./createLucideIcon-DSmXQr3a.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
