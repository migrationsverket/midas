import{j as a}from"./iframe-CZZaz4aQ.js";import{T as o,a as i,s as D}from"./Tag-B6xsd-ot.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CPJUmwGP.js";import"./utils-bu1qjtfK.js";import"./clsx-B-dksMZM.js";import"./Hidden-THVeQKKV.js";import"./useFocusRing-DXsO1wBV.js";import"./index-C1wfxGWx.js";import"./index-zefJuJQa.js";import"./useLabels-_EhmeHn4.js";import"./useButton-DbeQ-ehZ.js";import"./Collection-BJ-Pi7gr.js";import"./index-BUPR1rHK.js";import"./ListBox-DV7-P5K1.js";import"./DragAndDrop-CTM1wh5F.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-C4I3GRF-.js";import"./SelectionManager-Bkyga52J.js";import"./useEvent-ClaeTsJb.js";import"./FocusScope-BQYYYEzI.js";import"./useDescription-VsmdxEgU.js";import"./useControlledState-BcZPU1cj.js";import"./context-CV0kMQfb.js";import"./Text-CGoj8yKW.js";import"./inertValue-Cc7X7Jaj.js";import"./useListState-B4J5GPf0.js";import"./useHighlightSelectionDescription-CBba18DK.js";import"./useUpdateEffect-CJFXG62q.js";import"./useLocalizedStringFormatter-DMxKoo3C.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cjz35fhY.js";import"./useField-SSjs7dEC.js";import"./clsx-Ciqy0D92.js";import"./Button-BJcVLZ-Q.js";import"./Button.module-DRhvPh0f.js";import"./x-7cTU7970.js";import"./createLucideIcon-NKf3auQr.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
