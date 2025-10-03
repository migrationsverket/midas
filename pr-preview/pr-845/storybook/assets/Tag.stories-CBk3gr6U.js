import{j as a}from"./iframe-YLTEByFC.js";import{T as o,a as i,s as D}from"./Tag-D-RWYkKg.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CUqTEBaI.js";import"./utils-0jz0K6yl.js";import"./clsx-B-dksMZM.js";import"./Hidden-Bhm-tVR7.js";import"./useFocusRing-WaUjoUNI.js";import"./index-CZXU0okl.js";import"./index-Ct3h-LI4.js";import"./useLabels-B8e0krXc.js";import"./useButton-DQj7L-kV.js";import"./Collection-D76t9DIi.js";import"./index-Ian_nPyn.js";import"./ListBox-1XyBY6MQ.js";import"./DragAndDrop-CBV8g4mU.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Dfs_jIlq.js";import"./SelectionManager-D_laF1QZ.js";import"./useEvent-DV9dNlxO.js";import"./FocusScope-sOpG_eJ6.js";import"./useDescription-CXARpGdn.js";import"./useControlledState-CWIFwOHN.js";import"./context-CqJCq0Ys.js";import"./Text-JD6CJeM-.js";import"./inertValue-Bnx036f2.js";import"./useListState-DCC4P2et.js";import"./useHighlightSelectionDescription-DzY27k7X.js";import"./useUpdateEffect-Bo3coRHQ.js";import"./useLocalizedStringFormatter-NAIoPHOn.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BXHQcwKw.js";import"./useField-Dw9imAgb.js";import"./clsx-Ciqy0D92.js";import"./Button-DiFbwi4J.js";import"./Button.module-DRhvPh0f.js";import"./x-C4yHjSu9.js";import"./createLucideIcon-D0obo_vA.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
