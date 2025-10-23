import{j as a}from"./iframe-C_oaO8K2.js";import{T as o,a as i,s as D}from"./Tag-CFsNy3UN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-fKVsp6JG.js";import"./utils-Dt7r4kNf.js";import"./clsx-B-dksMZM.js";import"./Hidden-Cc0Pqpey.js";import"./useFocusRing-DZbqZYxB.js";import"./index-CUwbXbQD.js";import"./index-CsyRuhys.js";import"./useLabels-B4UhSxD0.js";import"./useButton-CY1xPKNy.js";import"./Collection-BfZIKEkn.js";import"./index-CaK6v3aa.js";import"./ListBox-CDiWK0Xm.js";import"./DragAndDrop-w9PeTECx.js";import"./getScrollParent-BQzzDHRG.js";import"./scrollIntoView-B4XXr6xG.js";import"./Separator-C-hU3UAl.js";import"./SelectionManager-BZ4JSpeq.js";import"./useEvent-CuZr8IVR.js";import"./SelectionIndicator-DXYaa6SJ.js";import"./useDescription-BJvJHEng.js";import"./useControlledState-Ccx6cekP.js";import"./ListKeyboardDelegate-Clefyohj.js";import"./RSPContexts-B2sz8VDB.js";import"./Text-a05SF89s.js";import"./inertValue-BOk11jLs.js";import"./useListState-ABwO4C22.js";import"./useHighlightSelectionDescription-CjEaQDUn.js";import"./useUpdateEffect-DQ7pjxKd.js";import"./useLocalizedStringFormatter-D0UJW2TN.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CmVhHSDB.js";import"./useField-CHXn4nw6.js";import"./clsx-Ciqy0D92.js";import"./Button-qrJ1hA52.js";import"./Button.module-CcWMkJAG.js";import"./x-Dr-dgEk1.js";import"./createLucideIcon-C4HgwNjm.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
