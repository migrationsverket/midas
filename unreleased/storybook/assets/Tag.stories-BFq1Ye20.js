import{j as a}from"./iframe-c-OTsSLB.js";import{T as o,a as i,s as D}from"./Tag-DpMCcP9x.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-eONtAglJ.js";import"./utils-DmSro83S.js";import"./clsx-B-dksMZM.js";import"./Hidden-rsYS1DNe.js";import"./useFocusRing-5X5X_HTM.js";import"./index-DGihLut6.js";import"./index-CBPMXLvZ.js";import"./useLabels-Bx-x79OI.js";import"./useButton-B64Vv4No.js";import"./Collection-CubMR1XY.js";import"./index-C2RfW0JG.js";import"./ListBox-CddH5CGP.js";import"./DragAndDrop-Ba1q-F9e.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-9hJv1ohr.js";import"./SelectionManager-DOF2WcxD.js";import"./useEvent-BoZFzAWv.js";import"./FocusScope-CPaxqP1h.js";import"./useDescription-A-7FZmQL.js";import"./useControlledState-Py_fFczF.js";import"./context-BnRsus0r.js";import"./Text-BkE6CLz1.js";import"./inertValue-D_tS31x-.js";import"./useListState-CBZ_5Yiv.js";import"./useHighlightSelectionDescription-BmS-5C-3.js";import"./useUpdateEffect-CHe7qX1i.js";import"./useLocalizedStringFormatter-BfDbnqcs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-8iRA5BKV.js";import"./useField-DBWN-y2k.js";import"./Button-DVVNT42z.js";import"./Button.module-DRhvPh0f.js";import"./x-CgK9iRJd.js";import"./createLucideIcon-ClmXRBho.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
