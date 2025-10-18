import{j as a}from"./iframe-DapivupZ.js";import{T as o,a as i,s as D}from"./Tag-Da5Lqa9p.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Dztfav2l.js";import"./utils-DWraxdk1.js";import"./clsx-B-dksMZM.js";import"./Hidden-DvaOjjJt.js";import"./useFocusRing-CKzzQLSb.js";import"./index-CPtDH7eg.js";import"./index-B9WfmP1n.js";import"./useLabels-DRXZbGoD.js";import"./useButton-Bfwhg8rx.js";import"./Collection-vPlvGAzi.js";import"./index-Bk5SGYqY.js";import"./ListBox-wwtczCEw.js";import"./DragAndDrop-BDz1Z7Qq.js";import"./getScrollParent-BYqAh_rH.js";import"./scrollIntoView-Df3NUc2P.js";import"./Separator-DFZIPjDy.js";import"./SelectionManager-9tsQ_ODc.js";import"./useEvent-BOYIqVsD.js";import"./SelectionIndicator-CHTSC_3H.js";import"./useDescription-BT2rNaF1.js";import"./useControlledState-ClOgn8Bl.js";import"./ListKeyboardDelegate-u7IQiEki.js";import"./RSPContexts-C5StW7Ap.js";import"./Text-B2UjeluG.js";import"./inertValue-Dz4ZfaQ4.js";import"./useListState-CsVtfbp-.js";import"./useHighlightSelectionDescription-DBxQmb7p.js";import"./useUpdateEffect-CwlpK2Ut.js";import"./useLocalizedStringFormatter-vcaShVoe.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-3P4yROEw.js";import"./useField-1ZNc3HPh.js";import"./clsx-Ciqy0D92.js";import"./Button-BzYqC1v1.js";import"./Button.module-CcWMkJAG.js";import"./x-BUT45eYt.js";import"./createLucideIcon-DTj-GsSF.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
