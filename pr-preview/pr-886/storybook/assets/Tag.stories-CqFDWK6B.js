import{j as a}from"./iframe-7u0dyzmM.js";import{T as o,a as i,s as D}from"./Tag-Cy0bmImv.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D2ox7fmR.js";import"./utils-DlKeC_wY.js";import"./clsx-B-dksMZM.js";import"./Hidden-9uIU_xnA.js";import"./useFocusRing-BKAWpehY.js";import"./index-BGNhFqDX.js";import"./index-BQkj4YBM.js";import"./useLabels-CxDjVDsQ.js";import"./useButton-CkipRFbc.js";import"./Collection-d6QZJlU4.js";import"./index-DTSq7p8I.js";import"./ListBox-BTRcRsWW.js";import"./DragAndDrop-DQFgBsIw.js";import"./getScrollParent-DpdBnh_t.js";import"./scrollIntoView-qAs7qZJb.js";import"./Separator-6JO9T_OZ.js";import"./SelectionManager-BpEt2XtE.js";import"./useEvent-uMhplNue.js";import"./SelectionIndicator-B9WqZUm6.js";import"./useDescription-CasTk3LW.js";import"./useControlledState-ChDJL78O.js";import"./ListKeyboardDelegate-j5BgHi8H.js";import"./RSPContexts-DhzeblSu.js";import"./Text-BIieQ0Ym.js";import"./inertValue-pSEqToZE.js";import"./useListState-BHFkoXDr.js";import"./useHighlightSelectionDescription-BulLkq0m.js";import"./useUpdateEffect-DVntQfUm.js";import"./useLocalizedStringFormatter-D3d8wPmJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-rI5324QI.js";import"./useField-DjLhajCl.js";import"./clsx-Ciqy0D92.js";import"./Button-BYmQpgdG.js";import"./Button.module-CcWMkJAG.js";import"./x-B6yzltLC.js";import"./createLucideIcon-BDGWcqXf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
