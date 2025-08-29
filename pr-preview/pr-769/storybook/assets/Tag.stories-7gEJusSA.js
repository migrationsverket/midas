import{j as a}from"./iframe-CaEkMUDz.js";import{T as o,a as i,s as _}from"./Tag-5S0aTuQV.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CS45EYvF.js";import"./utils-Da0SHqjH.js";import"./clsx-B-dksMZM.js";import"./Hidden-k4I1Jvb9.js";import"./useFocusRing-CgJAwe9O.js";import"./index-aA2e8oZU.js";import"./index-C5b2PewP.js";import"./useLabels-DRnbZ2Bl.js";import"./useButton-BnCjDBTO.js";import"./Collection-ZgpVB1Bs.js";import"./index-DT3-MqC5.js";import"./ListBox-Dw3Qq0kT.js";import"./DragAndDrop-DYs6UwpF.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CO9bzFH4.js";import"./SelectionManager-CWXoWHLd.js";import"./useEvent-BXrRAOMA.js";import"./FocusScope-DGJqKNJA.js";import"./useDescription-Dyy1VfWp.js";import"./useControlledState-BqQ-eXuC.js";import"./ListKeyboardDelegate-Bjt3yb7k.js";import"./Text-DYcD4RBt.js";import"./inertValue-g6yL9lb_.js";import"./useListState-vT0Bwm7s.js";import"./useField-HypY0bfK.js";import"./useHighlightSelectionDescription-BnyPGrFf.js";import"./useUpdateEffect-C21v4yTj.js";import"./useLocalizedStringFormatter-D9jviQcg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-g7hySgax.js";import"./Button-BeBSHCem.js";import"./Button.module-CF2bVDCq.js";import"./x-0vHvKiNi.js";import"./createLucideIcon-DzkhmYjn.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,T="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":T,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:D}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{h(s.getByTestId(T)).toHaveClass(_.tag,D)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
