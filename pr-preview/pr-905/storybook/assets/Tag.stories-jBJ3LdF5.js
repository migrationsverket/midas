import{j as a}from"./iframe-H3-wEz0B.js";import{T as o,a as i,s as D}from"./Tag-DmHnR1ak.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CwtpNd9p.js";import"./utils-Dnpjq0PU.js";import"./clsx-B-dksMZM.js";import"./Hidden-nGKbQ2rW.js";import"./useFocusRing-B5Eh_Qjc.js";import"./index-CmFI1Ap2.js";import"./index-kqQKwGH8.js";import"./useLabels-Bc2MokDi.js";import"./useButton-BIDxGvR2.js";import"./Collection-BwFPEMS2.js";import"./index-B0FU-gk2.js";import"./ListBox-DvUTGtdE.js";import"./DragAndDrop-DdP7Miil.js";import"./getScrollParent-DPSDyyVG.js";import"./scrollIntoView-C_1Nwyc8.js";import"./Separator-BtEC0dKQ.js";import"./SelectionManager-WjBP5GR_.js";import"./useEvent--X4hBmhD.js";import"./SelectionIndicator-9AxasiDY.js";import"./useDescription-C2DPyfUt.js";import"./useControlledState-CwjOYoG-.js";import"./ListKeyboardDelegate-CGXk2snm.js";import"./RSPContexts-UF9Ru_Y8.js";import"./Text-CGcdQzTH.js";import"./inertValue-C46I_Lkn.js";import"./useListState-DHklCVEP.js";import"./useHighlightSelectionDescription-DswHZdmw.js";import"./useUpdateEffect-BPTeQU_-.js";import"./useLocalizedStringFormatter-fkqdAl6p.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-CmxAwJ65.js";import"./useField-DnWqUPMy.js";import"./clsx-Ciqy0D92.js";import"./Button-D3h5cpMX.js";import"./Button.module-CcWMkJAG.js";import"./x-CW1G1Trw.js";import"./createLucideIcon-Dn7pT9iy.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
