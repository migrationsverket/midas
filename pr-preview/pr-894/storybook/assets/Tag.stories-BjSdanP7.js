import{j as a}from"./iframe-BUv19Pfm.js";import{T as o,a as i,s as D}from"./Tag-phd__SSQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bnuz47IZ.js";import"./utils-wWdqzEgH.js";import"./clsx-B-dksMZM.js";import"./Hidden-ibpybbWV.js";import"./useFocusRing-BLpf4bXn.js";import"./index-Oaftp3y1.js";import"./index-C0mmQlW6.js";import"./useLabels-8eOjNWa3.js";import"./useButton-DTRM6duW.js";import"./Collection-DeB8TAUW.js";import"./index-B5yu0L8Q.js";import"./ListBox-DFa8_B5R.js";import"./DragAndDrop-Doz6ZDLQ.js";import"./getScrollParent-BYz-ejQ6.js";import"./scrollIntoView-CBbya3YB.js";import"./Separator-DhqU9bgi.js";import"./SelectionManager-CoNEjUPJ.js";import"./useEvent-CChhRtjC.js";import"./SelectionIndicator-CyQwPxO9.js";import"./useDescription-L2Otz7rx.js";import"./useControlledState-D20wQpuO.js";import"./ListKeyboardDelegate-DDFdbo7s.js";import"./RSPContexts-oPcm55Gc.js";import"./Text-DqfUBUk_.js";import"./inertValue-DtmBromy.js";import"./useListState-DKeldJzT.js";import"./useHighlightSelectionDescription-Bn2ULeOh.js";import"./useUpdateEffect-BHub5D10.js";import"./useLocalizedStringFormatter-BEZuMr3D.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BFWdYEJD.js";import"./useField-Dla95OlV.js";import"./clsx-Ciqy0D92.js";import"./Button-DW5K109X.js";import"./Button.module-CcWMkJAG.js";import"./x-Bys3oTSS.js";import"./createLucideIcon-Dr9gusPm.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
