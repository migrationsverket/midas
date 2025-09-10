import{j as a}from"./iframe-DnI-QKbS.js";import{T as o,a as i,s as D}from"./Tag-_ruguAG0.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-PR9lUSrP.js";import"./utils-jRaMmY8n.js";import"./clsx-B-dksMZM.js";import"./Hidden-BmAJEf2m.js";import"./useFocusRing-wycQuoRu.js";import"./index-D82oNEbF.js";import"./index-BbRr_N3Y.js";import"./useLabels-B28QLeVn.js";import"./useButton-CvBOhAwP.js";import"./Collection-cK-LQI_t.js";import"./index-DKgCW7T6.js";import"./ListBox-BN7dzO0y.js";import"./DragAndDrop-B471gwhQ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-llETwDWq.js";import"./SelectionManager-CQPlqOy5.js";import"./useEvent-CSxKpqvk.js";import"./FocusScope-8W4p0Ww6.js";import"./useDescription-C8QPUKpY.js";import"./useControlledState-BMgCKjyf.js";import"./ListKeyboardDelegate-Dp3gjU-Q.js";import"./Text-YNvCfLHr.js";import"./inertValue-B4wkeBlR.js";import"./useListState-Dwd8zM_n.js";import"./useHighlightSelectionDescription-B163Upob.js";import"./useUpdateEffect-E-lA4dUW.js";import"./useLocalizedStringFormatter-DSAfbMP1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CAYV4d6N.js";import"./useField-CWfe1gHR.js";import"./Button-UIQQGwLE.js";import"./Button.module-GuOSDIYz.js";import"./x-B3mCuLar.js";import"./createLucideIcon-DRwI5X3r.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
