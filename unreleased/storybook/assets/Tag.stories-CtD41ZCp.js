import{j as a}from"./iframe-DtjCgqza.js";import{T as o,a as i,s as D}from"./Tag-BC0AjtYs.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BqOjoNsE.js";import"./utils-Cha6kLgl.js";import"./clsx-B-dksMZM.js";import"./Hidden-CRj6NndL.js";import"./useFocusRing-CI5qpwpq.js";import"./index-B3PG3-n7.js";import"./index-nqg460ar.js";import"./useLabels-BGPH4aE1.js";import"./useButton-DNATHxRl.js";import"./Collection-B_sz5aoB.js";import"./index-tFcE_ZxB.js";import"./ListBox-1E4dXR6W.js";import"./DragAndDrop-D--phGTB.js";import"./getScrollParent-BymkegHI.js";import"./scrollIntoView-CytdFAcY.js";import"./Separator-8ZCNogqD.js";import"./SelectionManager-DeTUKaf9.js";import"./useEvent-BV4EStL3.js";import"./SelectionIndicator-DuyIN4K2.js";import"./useDescription-B8dFVPAD.js";import"./useControlledState-GqZQGFoa.js";import"./ListKeyboardDelegate-CHlfL73v.js";import"./RSPContexts-BeUyIULA.js";import"./Text-D_VJcFwR.js";import"./inertValue-DBDq-pmp.js";import"./useListState-BbjzpXKJ.js";import"./useHighlightSelectionDescription-B11457VU.js";import"./useUpdateEffect-CRwHoqTQ.js";import"./useLocalizedStringFormatter-if4RDlvk.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-C_KiH0ra.js";import"./useField-C9P0xQDd.js";import"./clsx-Ciqy0D92.js";import"./Button-DTKe7IW5.js";import"./Button.module-CcWMkJAG.js";import"./x-DfOJvFgC.js";import"./createLucideIcon-DMHZBbDS.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
