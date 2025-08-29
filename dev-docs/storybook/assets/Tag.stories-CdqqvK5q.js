import{j as a}from"./iframe-tFm0VM-K.js";import{T as o,a as i,s as _}from"./Tag-DQssJaBx.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B0epWB0S.js";import"./utils-DY70sTlo.js";import"./clsx-B-dksMZM.js";import"./Hidden-D6Lld1PQ.js";import"./useFocusRing-Co8vIkJA.js";import"./index-DAusX6h5.js";import"./index-8YvOezI5.js";import"./useLabels-CmEIHHMU.js";import"./useButton-Bu7whPwP.js";import"./Collection-Bxi8MuSS.js";import"./index-CNBhV3B0.js";import"./ListBox-yrs8L2qB.js";import"./DragAndDrop-Civb-mRd.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-D1AhTk1B.js";import"./SelectionManager-CbfCnbpf.js";import"./useEvent-CIYeRngj.js";import"./FocusScope-qPwZayfD.js";import"./useDescription-BGyabHqo.js";import"./useControlledState-Bw7VkNuk.js";import"./ListKeyboardDelegate-dkDtjMUC.js";import"./Text-BZ94on1H.js";import"./inertValue-CNbJugP7.js";import"./useListState-B8DGUgnB.js";import"./useField-BzMZExtV.js";import"./useHighlightSelectionDescription-DJ6KqGcf.js";import"./useUpdateEffect-DX4naP5r.js";import"./useLocalizedStringFormatter-LA2-Vf3Z.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-WXG55o71.js";import"./Button-BcKba_Ra.js";import"./Button.module-CF2bVDCq.js";import"./x-2OqQdXSU.js";import"./createLucideIcon-cUJ9SYEq.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'success'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const is=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,is as __namedExportsOrder,os as default};
