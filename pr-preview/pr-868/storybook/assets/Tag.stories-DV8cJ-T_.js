import{j as a}from"./iframe-vK_zrr8c.js";import{T as o,a as i,s as D}from"./Tag-CSMHLclb.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DHyHo-nz.js";import"./utils-3usXSbtA.js";import"./clsx-B-dksMZM.js";import"./Hidden-B8q8suFx.js";import"./useFocusRing-CmogVtNQ.js";import"./index-DLF1i13v.js";import"./index-B3e2Zh-Y.js";import"./useLabels-DjeW_8GI.js";import"./useButton-BBoVHDyZ.js";import"./Collection-BzO_AnhV.js";import"./index-DJUndCjh.js";import"./ListBox-BRqxIeAE.js";import"./DragAndDrop-D7vh9Ibr.js";import"./getScrollParent-BQ-Sd5uD.js";import"./scrollIntoView-BiOi2oIr.js";import"./Separator-DjgNhgM7.js";import"./SelectionManager-CB4wcBvP.js";import"./useEvent-OmDiknTn.js";import"./SelectionIndicator-ttYkp9p_.js";import"./useDescription-Cqaa8jNy.js";import"./useControlledState-BCdcgfKt.js";import"./ListKeyboardDelegate-BHjj6a5V.js";import"./RSPContexts-Lejb1V-w.js";import"./Text-DL49pQ8W.js";import"./inertValue-D5vm6USt.js";import"./useListState-DAcyaPMO.js";import"./useHighlightSelectionDescription-Dfn7xx6f.js";import"./useUpdateEffect-BLMRokIT.js";import"./useLocalizedStringFormatter-8aS9Jnuq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-xgWB69Dz.js";import"./useField-yZ8xKHJq.js";import"./clsx-Ciqy0D92.js";import"./Button-Cl1vPh_a.js";import"./Button.module-CcWMkJAG.js";import"./x-BTeUWtcp.js";import"./createLucideIcon-Cfi54wU0.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
