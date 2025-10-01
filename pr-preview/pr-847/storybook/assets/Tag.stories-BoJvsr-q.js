import{j as a}from"./iframe-BxHqCU2u.js";import{T as o,a as i,s as D}from"./Tag-B1ZQoKfM.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-ibvlP6vr.js";import"./utils-BS0Ytho5.js";import"./clsx-B-dksMZM.js";import"./Hidden-BDZrU9Kf.js";import"./useFocusRing-DhiYaB0Q.js";import"./index-CwQtN2vM.js";import"./index-CDIrfYxL.js";import"./useLabels-Y8RB1b2m.js";import"./useButton-D329u3yQ.js";import"./Collection-COd-09w7.js";import"./index-DiBI6CnM.js";import"./ListBox-Dzn1lbZS.js";import"./DragAndDrop-BYQnONQj.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-B1NYQSPc.js";import"./SelectionManager-DJ_Fooa-.js";import"./useEvent-Bf6cTY-U.js";import"./FocusScope-DGo5Xwy9.js";import"./useDescription-y2wCJUjw.js";import"./useControlledState-BayoQJEG.js";import"./context-Tx_d3J08.js";import"./Text-DhvUwSIq.js";import"./inertValue-Z2WgZjWp.js";import"./useListState-pXav3C_q.js";import"./useHighlightSelectionDescription-EMgmG-0y.js";import"./useUpdateEffect-BQcaj0IR.js";import"./useLocalizedStringFormatter-DzkHTui5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BjTg8W1f.js";import"./useField-BH0R5rVt.js";import"./Button-CB1wrnsH.js";import"./Button.module-DRhvPh0f.js";import"./x-B6-RsHPU.js";import"./createLucideIcon-d1ullI0J.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const is=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,is as __namedExportsOrder,os as default};
