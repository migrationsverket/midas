import{j as a}from"./iframe-D-4hYGhm.js";import{T as o,a as i,s as D}from"./Tag-C4W6i3fn.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Czm5JDUd.js";import"./utils-PPVwsd6f.js";import"./clsx-B-dksMZM.js";import"./Hidden-B33uzZwQ.js";import"./useFocusRing-g24tRaBc.js";import"./index-Cl9LkdyV.js";import"./index-BZppoS0L.js";import"./useLabels-B57XBD92.js";import"./useButton-BnjDvuvv.js";import"./Collection-DUNlvezB.js";import"./index-BQ-X0zrZ.js";import"./ListBox-kvh00Qvg.js";import"./DragAndDrop-D7Q9cQeZ.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CPgR1anc.js";import"./SelectionManager-HXoNJTqC.js";import"./useEvent-AdSOq1sc.js";import"./FocusScope-i_FOofVw.js";import"./useDescription-DsaB28f1.js";import"./useControlledState-Dop_bXLo.js";import"./ListKeyboardDelegate-CFkEcJ1a.js";import"./Text-BdSK7M9l.js";import"./inertValue-BcqI2yMH.js";import"./useListState-UoUph8oI.js";import"./useHighlightSelectionDescription-Due0xQes.js";import"./useUpdateEffect-7f69SE8k.js";import"./useLocalizedStringFormatter-BhoP_Rk9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-rS3K0yS1.js";import"./useField-D6Z2Wbe2.js";import"./Button-D-SvKu1F.js";import"./Button.module-GuOSDIYz.js";import"./x-Cog_7ngM.js";import"./createLucideIcon-DUsOhZgj.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
