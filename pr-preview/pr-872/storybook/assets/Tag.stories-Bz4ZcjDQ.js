import{j as a}from"./iframe-Bn3xRNaf.js";import{T as o,a as i,s as D}from"./Tag-SyvZbI3r.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B4kIRaE5.js";import"./utils-BaJJv61G.js";import"./clsx-B-dksMZM.js";import"./Hidden-eyOlQ1uF.js";import"./useFocusRing-C30jweh6.js";import"./index-DSVBqemO.js";import"./index-Dvpegeq1.js";import"./useLabels-Sc4X7zF3.js";import"./useButton-DjcrQKq6.js";import"./Collection-vJFidWJF.js";import"./index-DXbH3Tv5.js";import"./ListBox-BulxxhRL.js";import"./DragAndDrop-DDwtEdiF.js";import"./getScrollParent-DiI3TsD3.js";import"./scrollIntoView-_XsCinXj.js";import"./Separator-bUCWfCOB.js";import"./SelectionManager-POPvj1WF.js";import"./useEvent-BQQAiQAZ.js";import"./SelectionIndicator-94dXyLpF.js";import"./useDescription-CTLsIuOy.js";import"./useControlledState-CucW-hP-.js";import"./ListKeyboardDelegate-Dxw9fsam.js";import"./RSPContexts-DtdsYyqN.js";import"./Text-DdUMXt92.js";import"./inertValue-DH4B_Zuc.js";import"./useListState-DoZl5CTD.js";import"./useHighlightSelectionDescription-5ra7lfEZ.js";import"./useUpdateEffect-CrLpRDGh.js";import"./useLocalizedStringFormatter-2RJ3Blsl.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BNo6NLKf.js";import"./useField-DH8TWbJR.js";import"./clsx-Ciqy0D92.js";import"./Button-ClCVfJWm.js";import"./Button.module-CcWMkJAG.js";import"./x-CMu102-U.js";import"./createLucideIcon-CaqZ7qCT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
