import{j as a}from"./iframe-9uQMLEFM.js";import{T as o,a as i,s as D}from"./Tag-Dbs5zS7i.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DrXrkuug.js";import"./utils-BTOY5Iih.js";import"./clsx-B-dksMZM.js";import"./Hidden-BTU3AIr-.js";import"./useFocusRing-DtXZYfkl.js";import"./index-DgFVapif.js";import"./index-Df1glY4P.js";import"./useLabels-DLG53fh7.js";import"./useButton-75obCxYN.js";import"./Collection-CZdwJHh_.js";import"./index-DspnS8tx.js";import"./ListBox-C0bq4av8.js";import"./DragAndDrop-B5mRtPnf.js";import"./getScrollParent-CahOKOB-.js";import"./scrollIntoView-vBuhCpjm.js";import"./Separator-QAWhojjB.js";import"./SelectionManager-BzX7Eq0U.js";import"./useEvent-q0OGT-rN.js";import"./SelectionIndicator-DLZeUbzB.js";import"./useDescription-DcsJqhyO.js";import"./useControlledState-BmSrYQ_d.js";import"./ListKeyboardDelegate-Hl33qIAd.js";import"./RSPContexts-CYTowsZL.js";import"./Text-Bkm9Piv0.js";import"./inertValue-CQniBizu.js";import"./useListState-C20iS2v1.js";import"./useHighlightSelectionDescription-DOZQVbPU.js";import"./useUpdateEffect-Bf5AthLJ.js";import"./useLocalizedStringFormatter-DGeAdmak.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DVObzgEB.js";import"./useField-Dd--JJsU.js";import"./clsx-Ciqy0D92.js";import"./Button-1uSs5kk_.js";import"./Button.module-CcWMkJAG.js";import"./x-CoAx-43h.js";import"./createLucideIcon-CRMHsM6N.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
