import{j as a}from"./iframe-CHS4RN63.js";import{T as o,a as i,s as D}from"./Tag-DTeOUhTj.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BVFUErST.js";import"./utils-C9FUpJsd.js";import"./clsx-B-dksMZM.js";import"./Hidden-D13Iof1p.js";import"./useFocusRing-DadIT-82.js";import"./index-BUG6HO4f.js";import"./index-0fDLrmo2.js";import"./useLabels-DZGktUCJ.js";import"./useButton-CV56huyL.js";import"./Collection-DL1NNrRI.js";import"./index-D2EBWdH_.js";import"./ListBox-_JtVZJg9.js";import"./DragAndDrop-C7X7N_FU.js";import"./getScrollParent-DsuttH3L.js";import"./scrollIntoView-DXM0IMwZ.js";import"./Separator-D0sgdlID.js";import"./SelectionManager-Dg_IZZ1F.js";import"./useEvent-BctQ_rte.js";import"./SelectionIndicator-Vv81cE6L.js";import"./useDescription-DvWtvxHM.js";import"./useControlledState-M019njO-.js";import"./ListKeyboardDelegate-DjbcKDKM.js";import"./RSPContexts-Beii1tWe.js";import"./Text-BuZnc4f2.js";import"./inertValue-DVWZIrqP.js";import"./useListState-CMutvTGS.js";import"./useHighlightSelectionDescription-DRDWftmH.js";import"./useUpdateEffect-Bh7XSisY.js";import"./useLocalizedStringFormatter-CJLqX_nt.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Gupu9DQi.js";import"./useField-DuzbSniv.js";import"./clsx-Ciqy0D92.js";import"./Button-1R-tY0ZE.js";import"./Button.module-CcWMkJAG.js";import"./x-Dg7dVyDN.js";import"./createLucideIcon-BXNEhWAf.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
