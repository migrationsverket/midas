import{j as a}from"./iframe-CYvJGSmS.js";import{T as o,a as i,s as D}from"./Tag-DqBUxQLp.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-jGSKpEK5.js";import"./utils-CuWAxdzP.js";import"./clsx-B-dksMZM.js";import"./Hidden-AGpPWuyb.js";import"./useFocusRing-FTbe-l_H.js";import"./index-DXQ02lBx.js";import"./index-D45n5wsY.js";import"./useLabels-Bjotf5pP.js";import"./useButton-CycCzzfg.js";import"./Collection-CMI13eT6.js";import"./index-C2wJ9VDx.js";import"./ListBox-CVw1MmwZ.js";import"./DragAndDrop-CRM7uQ2s.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-Adu_s4u0.js";import"./SelectionManager-wCE--O93.js";import"./useEvent-CsvSC4Gc.js";import"./FocusScope-MsEvOe3x.js";import"./useDescription-Cx2mZSeI.js";import"./useControlledState-DiLnGB4z.js";import"./context-QFnjSo_z.js";import"./Text-yj0MqBpC.js";import"./inertValue-DoQDQEjH.js";import"./useListState-DVyyyygw.js";import"./useHighlightSelectionDescription-Cz2JhU1S.js";import"./useUpdateEffect-DDP4JM50.js";import"./useLocalizedStringFormatter-D0YvmEjF.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-BH_5oCoT.js";import"./useField-BPRGfX_v.js";import"./Button-BbYBHHtu.js";import"./Button.module-DRhvPh0f.js";import"./x-BI1qJUp3.js";import"./createLucideIcon-__qkpVwx.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
