import{j as a}from"./iframe-q6EvYISq.js";import{T as o,a as i,s as D}from"./Tag-2ln6rK0l.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BC8mXYs5.js";import"./utils-BFgAViO1.js";import"./clsx-B-dksMZM.js";import"./Hidden-aiuwdG-m.js";import"./useFocusRing-DBP6GN0q.js";import"./index-ZOcFp13g.js";import"./index-Bvb7cimW.js";import"./useLabels-CwohMJ5y.js";import"./useButton-CMWBeodu.js";import"./Collection-3F6Hqco-.js";import"./index-BscJ6Klj.js";import"./ListBox-DaDVnDzi.js";import"./DragAndDrop-DNzjE8bI.js";import"./getScrollParent-BrXPHwHi.js";import"./scrollIntoView-PJKCG0-n.js";import"./Separator-CbyTy4yx.js";import"./SelectionManager-BGn0073S.js";import"./useEvent-BjM5OQ0P.js";import"./SelectionIndicator-DJ74DPez.js";import"./useDescription-CuX3lLLB.js";import"./useControlledState-CY7XcSWo.js";import"./ListKeyboardDelegate-DXnyHbb6.js";import"./RSPContexts-SvnOWZvi.js";import"./Text-xhXZPJVq.js";import"./inertValue-C54n9B_T.js";import"./useListState-B-p2jEL1.js";import"./useHighlightSelectionDescription-Dtt9pc62.js";import"./useUpdateEffect-D5TCZ7c9.js";import"./useLocalizedStringFormatter-B6CvtwpA.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DF_NfHfh.js";import"./useField-BNe4BU1i.js";import"./clsx-Ciqy0D92.js";import"./Button-Bp9AQWtA.js";import"./Button.module-CcWMkJAG.js";import"./x-BBsd-BbB.js";import"./createLucideIcon-CUEtauFX.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
