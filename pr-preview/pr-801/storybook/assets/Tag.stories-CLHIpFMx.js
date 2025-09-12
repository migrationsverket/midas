import{j as a}from"./iframe-Dydj_fc_.js";import{T as o,a as i,s as D}from"./Tag-CTNLyqH_.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Bn-OY-1H.js";import"./utils-BJp_gTQ0.js";import"./clsx-B-dksMZM.js";import"./Hidden-DMdBx9YZ.js";import"./useFocusRing-Cl-cgjAC.js";import"./index-CvKS-P4J.js";import"./index-D2SXu3hh.js";import"./useLabels-DjQ2Wpfm.js";import"./useButton-B9qGDT7J.js";import"./Collection-BxeNnFpU.js";import"./index-6k3MK4sp.js";import"./ListBox-djGFiSqa.js";import"./DragAndDrop-BNK5GNtN.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CL48PsEC.js";import"./SelectionManager-DWYGYrqc.js";import"./useEvent-BDJw71Ox.js";import"./FocusScope-DJ0SCkPH.js";import"./useDescription-cV6Ky1A0.js";import"./useControlledState-DuAZjhOM.js";import"./ListKeyboardDelegate-DRdGLf-H.js";import"./Text-Bq4JVDwh.js";import"./inertValue-B3WOaT0J.js";import"./useListState-BYKSXgXx.js";import"./useHighlightSelectionDescription-Dc9gQTIe.js";import"./useUpdateEffect-D34Min38.js";import"./useLocalizedStringFormatter-BFb7jt9V.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DwXReXyo.js";import"./useField-Dgw663X7.js";import"./Button-K4exUzmh.js";import"./Button.module-DRhvPh0f.js";import"./x-EH5wECIf.js";import"./createLucideIcon-BXRuxe2c.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
