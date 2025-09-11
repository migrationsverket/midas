import{j as a}from"./iframe-PziQzjLy.js";import{T as o,a as i,s as D}from"./Tag-CQeveMlN.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-CqK5psxG.js";import"./utils-kgF4Z0H4.js";import"./clsx-B-dksMZM.js";import"./Hidden-tcrjPXId.js";import"./useFocusRing-DH6Di2KW.js";import"./index-DwxE06TF.js";import"./index-CdOlcchz.js";import"./useLabels-C9faUJhU.js";import"./useButton-BrtDBiaB.js";import"./Collection-DWrAxGG2.js";import"./index-B-nEYSsa.js";import"./ListBox-BiPYAGCG.js";import"./DragAndDrop-C68jDHz_.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DsNXqdhn.js";import"./SelectionManager-Br5R-cyE.js";import"./useEvent-BiuwVzFX.js";import"./FocusScope-BEdqQor8.js";import"./useDescription-ym9PWChI.js";import"./useControlledState-qUTcE_91.js";import"./ListKeyboardDelegate-CXW1u9bl.js";import"./Text-yxX512Ny.js";import"./inertValue-Dt47w8_t.js";import"./useListState-GjGnj1Pw.js";import"./useHighlightSelectionDescription-0TpLEzRv.js";import"./useUpdateEffect-BiyhEKw2.js";import"./useLocalizedStringFormatter-tItjUNDL.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DyaaxGeg.js";import"./useField-C3bE86F2.js";import"./Button-CpZxQ65s.js";import"./Button.module-DRhvPh0f.js";import"./x-CqaNCiSm.js";import"./createLucideIcon-DbrVSiBM.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
