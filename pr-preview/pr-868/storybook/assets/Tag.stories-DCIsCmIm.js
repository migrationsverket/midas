import{j as a}from"./iframe-HgmhGHLl.js";import{T as o,a as i,s as D}from"./Tag-DIyJ2fHM.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DwzAcUmG.js";import"./utils-CziwxoXp.js";import"./clsx-B-dksMZM.js";import"./Hidden-gRQeZ2RV.js";import"./useFocusRing-BycvwXEz.js";import"./index-nOBLzIog.js";import"./index-Dl-UTAq4.js";import"./useLabels-BFJ3u6sq.js";import"./useButton-BRgJ0pNs.js";import"./Collection-DZjBQ_3v.js";import"./index-CiUPI1fO.js";import"./ListBox-iScCD58J.js";import"./DragAndDrop-dXMyIMqV.js";import"./getScrollParent-BGgRbsvT.js";import"./scrollIntoView-vb_XAWSY.js";import"./Separator-4NgbAsJX.js";import"./SelectionManager-CvHpzhSB.js";import"./useEvent-Bsjvu_tA.js";import"./SelectionIndicator-e2_54zKm.js";import"./useDescription-V43EqUT8.js";import"./useControlledState-DmDb1g5E.js";import"./ListKeyboardDelegate-DdSFwzQE.js";import"./RSPContexts-32ewsRzf.js";import"./Text-DiEZk_-X.js";import"./inertValue-C7HZ2QUu.js";import"./useListState-DALDYJ9x.js";import"./useHighlightSelectionDescription-Bw13ruac.js";import"./useUpdateEffect-DdsJGaEr.js";import"./useLocalizedStringFormatter-BX_5XxQM.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DFSa1BId.js";import"./useField-D4RGF1ty.js";import"./clsx-Ciqy0D92.js";import"./Button-BHFGsmXh.js";import"./Button.module-CcWMkJAG.js";import"./x-D5SIT5yy.js";import"./createLucideIcon-NgKMkvRv.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
