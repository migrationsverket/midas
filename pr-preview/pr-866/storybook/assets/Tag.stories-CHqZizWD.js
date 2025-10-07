import{j as a}from"./iframe-BPyuKSpC.js";import{T as o,a as i,s as D}from"./Tag-CmD_WnUH.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-q7bM61nG.js";import"./utils-v025b4LB.js";import"./clsx-B-dksMZM.js";import"./Hidden-CXThwN6X.js";import"./useFocusRing-CmbQGn1o.js";import"./index-DVJ3qppZ.js";import"./index-MqFnWvKI.js";import"./useLabels-DYiCNBUI.js";import"./useButton-CehnNdw3.js";import"./Collection-C94mt2aW.js";import"./index-2WGvzAzh.js";import"./ListBox-Dffyev2m.js";import"./DragAndDrop-B2IczS8K.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BOhZTmaT.js";import"./SelectionManager-De8btYWL.js";import"./useEvent-BvrFo504.js";import"./FocusScope-C4L8TwmH.js";import"./useDescription-DNIx29ws.js";import"./useControlledState-BUFD4108.js";import"./context-J0_DAJoh.js";import"./Text-Cx0lu4Ci.js";import"./inertValue-1RCsV_yS.js";import"./useListState-xR3Ap1mw.js";import"./useHighlightSelectionDescription-B-LcNoP-.js";import"./useUpdateEffect-BNE0qO7Y.js";import"./useLocalizedStringFormatter-DUjLByC_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-38Shj8D-.js";import"./useField-DgfdB78s.js";import"./clsx-Ciqy0D92.js";import"./Button-B9Kwcc6D.js";import"./Button.module-DRhvPh0f.js";import"./x-Dz20i7NT.js";import"./createLucideIcon-C0QP_E4X.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
