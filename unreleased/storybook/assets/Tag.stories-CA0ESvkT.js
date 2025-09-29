import{j as a}from"./iframe-C36llq95.js";import{T as o,a as i,s as D}from"./Tag-BpW6xbiD.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C51ZKMnE.js";import"./utils--zJHB-HO.js";import"./clsx-B-dksMZM.js";import"./Hidden-K6fp06nY.js";import"./useFocusRing-AQc39DTJ.js";import"./index-DHer5tgi.js";import"./index-CL00723S.js";import"./useLabels-CLEhXeMZ.js";import"./useButton-sjymwkpC.js";import"./Collection-C_0tfJaX.js";import"./index-DavKE8ez.js";import"./ListBox-BMPMoeGs.js";import"./DragAndDrop-C65C2Ryf.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CInbyPu1.js";import"./SelectionManager-BUXB5X9F.js";import"./useEvent-DA-Txpct.js";import"./FocusScope-BgxJ3mT9.js";import"./useDescription-CGY8C0U_.js";import"./useControlledState-CK1jlZai.js";import"./context-JuUZ_EaJ.js";import"./Text-CNurQksh.js";import"./inertValue-BPGuR0_Z.js";import"./useListState-Cr9lRX91.js";import"./useHighlightSelectionDescription-MnrSVgvv.js";import"./useUpdateEffect-PJ2XAYYr.js";import"./useLocalizedStringFormatter-BYuPpD4O.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cd5ft_pC.js";import"./useField-Cz3bkBxI.js";import"./Button-CJF9piv_.js";import"./Button.module-DRhvPh0f.js";import"./x-C03QP1Bk.js";import"./createLucideIcon-DQjC6GOo.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
