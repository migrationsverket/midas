import{j as a}from"./iframe-CsyUM_dO.js";import{T as o,a as i,s as D}from"./Tag-DkIZ6a4Q.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B4J62TqH.js";import"./utils-DBjV5ZD9.js";import"./clsx-B-dksMZM.js";import"./Hidden-CskUBx2b.js";import"./useFocusRing-TXhlCY-y.js";import"./index-wHIZo05y.js";import"./index-nbJSJWzZ.js";import"./useLabels-CuPICis9.js";import"./useButton-BEgJOHzg.js";import"./Collection-8eX08foB.js";import"./index-Ctw7utxx.js";import"./ListBox-BulXnAku.js";import"./DragAndDrop-CoI9rcOg.js";import"./getScrollParent-C-gvUTOO.js";import"./scrollIntoView-CjF_zG_N.js";import"./Separator-C9SQrC3I.js";import"./SelectionManager-1D_mR00R.js";import"./useEvent-CYdxg4jE.js";import"./SelectionIndicator-CpA1V_uO.js";import"./useDescription-BeWcUsF0.js";import"./useControlledState-BEiewpZS.js";import"./ListKeyboardDelegate-uUgJ213q.js";import"./RSPContexts-CpY7e89V.js";import"./Text-b8HSJf5z.js";import"./inertValue-CeZigrjP.js";import"./useListState-D39TfrL4.js";import"./useHighlightSelectionDescription-CEyiaAsb.js";import"./useUpdateEffect-hEOw_OO5.js";import"./useLocalizedStringFormatter-ClPXO1zz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CwpCaDCu.js";import"./useField-DHEZdH0o.js";import"./clsx-Ciqy0D92.js";import"./Button-Ba5-SQTK.js";import"./Button.module-CcWMkJAG.js";import"./x-DplAxxde.js";import"./createLucideIcon-J4nOcVk8.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
