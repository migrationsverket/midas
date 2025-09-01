import{j as a}from"./iframe-D-XUKarW.js";import{T as o,a as i,s as D}from"./Tag-DonjD2aB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-PmSlHjst.js";import"./utils-Dn5tdD07.js";import"./clsx-B-dksMZM.js";import"./Hidden-L1dgoAKI.js";import"./useFocusRing-DOCDSF7O.js";import"./index-DDRU0T1j.js";import"./index-DMj_r2Nf.js";import"./useLabels-zudpO4yV.js";import"./useButton-DvdD4xbT.js";import"./Collection-GX30kGsU.js";import"./index-DGRwY5Ev.js";import"./ListBox-icD0enrt.js";import"./DragAndDrop-CSRuomwY.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-ChqhDeSG.js";import"./SelectionManager-YUf6EXU_.js";import"./useEvent-CBbgNG_6.js";import"./FocusScope-BpCr6pFs.js";import"./useDescription-DMMKjgB4.js";import"./useControlledState-BHnpsAQl.js";import"./ListKeyboardDelegate-B5mbMCqV.js";import"./Text-hTil108m.js";import"./inertValue-DadGpA58.js";import"./useListState-BY2jegwx.js";import"./useField-BnMXMpI0.js";import"./useHighlightSelectionDescription-DSqgKLU9.js";import"./useUpdateEffect-B_y-qhxf.js";import"./useLocalizedStringFormatter-BeNo_MtN.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-Cjzgrl6p.js";import"./Button-DcgbOV18.js";import"./Button.module-CF2bVDCq.js";import"./x-BYz21n0e.js";import"./createLucideIcon-DErrBIU1.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
