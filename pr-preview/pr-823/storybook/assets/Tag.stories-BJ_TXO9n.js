import{j as a}from"./iframe-Bo4lnDpG.js";import{T as o,a as i,s as D}from"./Tag-DnfVUyGs.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BX8mlUWu.js";import"./utils-XsAfHkzq.js";import"./clsx-B-dksMZM.js";import"./Hidden-C06RgXOV.js";import"./useFocusRing-iMufwWq2.js";import"./index-DdC4ThzQ.js";import"./index-aZOIuZNj.js";import"./useLabels-DAqeTJvs.js";import"./useButton-CryB56Ou.js";import"./Collection-BgcHxdY5.js";import"./index-gu5OhMJT.js";import"./ListBox-RAVOm2iM.js";import"./DragAndDrop-HFBg-aBv.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-BIXhwAi6.js";import"./SelectionManager-BKpJWaau.js";import"./useEvent-CAE08aYB.js";import"./FocusScope-gwQ8bJVk.js";import"./useDescription-CNiTXxo9.js";import"./useControlledState-DlVTd5OH.js";import"./ListKeyboardDelegate-CuTVZ-46.js";import"./Text-zhhmoz-T.js";import"./inertValue-BmeRCpKx.js";import"./useListState-Bhg7gB3K.js";import"./useHighlightSelectionDescription-DY6O2p4Q.js";import"./useUpdateEffect-CM2-RI5T.js";import"./useLocalizedStringFormatter-DPxmIFuD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-aMrvJLeX.js";import"./useField-CU7IAoHr.js";import"./Button-DLnj1FtU.js";import"./Button.module-DRhvPh0f.js";import"./x-COip2SJi.js";import"./createLucideIcon-DvSDNJfv.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
