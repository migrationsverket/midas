import{j as a}from"./iframe-DDu8DmeW.js";import{T as o,a as i,s as D}from"./Tag-Dak0GE5M.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-W_tVDnnM.js";import"./utils-gG0zFOus.js";import"./clsx-B-dksMZM.js";import"./Hidden-DbzT6Tb3.js";import"./useFocusRing-DE1dspJM.js";import"./index-9JF2JLNE.js";import"./index-oWOcmufG.js";import"./useLabels-oagClqW_.js";import"./useButton-CZnsZF0I.js";import"./Collection-BvyKS8Z0.js";import"./index-CCQ93eKI.js";import"./ListBox-C1bcUQ-T.js";import"./DragAndDrop-CSCzejMc.js";import"./getScrollParent-yMRnHreF.js";import"./scrollIntoView-BCYET4ie.js";import"./Separator-BLom6WfB.js";import"./SelectionManager-BFe9HRcv.js";import"./useEvent-Ctty1v25.js";import"./SelectionIndicator-BuEnQtR3.js";import"./useDescription-FC5Vttkq.js";import"./useControlledState-vyCKnSPc.js";import"./ListKeyboardDelegate-BLRl-bYm.js";import"./RSPContexts-CbaQoKER.js";import"./Text-Du8qLI1y.js";import"./inertValue-D_LlJpgZ.js";import"./useListState-CvAopeSh.js";import"./useHighlightSelectionDescription-D701crXe.js";import"./useUpdateEffect-CqU2OJ25.js";import"./useLocalizedStringFormatter-C0zPpO_M.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C_PyjcG7.js";import"./useField-CtlkLz9B.js";import"./clsx-Ciqy0D92.js";import"./Button-Db_GUMoi.js";import"./Button.module-CcWMkJAG.js";import"./x-C71oNwSO.js";import"./createLucideIcon-BjbUxzO6.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
