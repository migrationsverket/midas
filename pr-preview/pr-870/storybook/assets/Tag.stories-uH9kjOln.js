import{j as a}from"./iframe-Ba9_UfAn.js";import{T as o,a as i,s as D}from"./Tag-DaGzjCRw.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-B_LfXixk.js";import"./utils-DCV_pphF.js";import"./clsx-B-dksMZM.js";import"./Hidden-D8tnEORn.js";import"./useFocusRing-BmV2Fy5v.js";import"./index-DRMEo0Ef.js";import"./index-Db-MctpW.js";import"./useLabels-DYbpgbcJ.js";import"./useButton-CnFgRwZQ.js";import"./Collection-7cFODetE.js";import"./index-BmoFMNzo.js";import"./ListBox-Da5NgOkX.js";import"./DragAndDrop-UMH4HZwT.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DTlCcAQK.js";import"./SelectionManager-DGtY0xu2.js";import"./useEvent-DcGQoRmU.js";import"./FocusScope-CzCol33a.js";import"./useDescription-lvmx85Ns.js";import"./useControlledState-0xWW39q8.js";import"./context-C8FR6Ls9.js";import"./Text-B8HF9lWY.js";import"./inertValue-DZf2ikA_.js";import"./useListState-DoL3POes.js";import"./useHighlightSelectionDescription-DZSMlkkr.js";import"./useUpdateEffect-Cp9MB76L.js";import"./useLocalizedStringFormatter-DHgN3hdg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-oqKRTG2Y.js";import"./useField-ZfUjX0sA.js";import"./clsx-Ciqy0D92.js";import"./Button-DMSzS5Jl.js";import"./Button.module-CJwbz1YD.js";import"./useLocalizedStringFormatter-CBqAXEWe.js";import"./createLucideIcon-UyVqdr43.js";import"./VisuallyHidden-w94wuX5D.js";import"./x-BjPPcCNJ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ms={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},r={args:{type:"success"}},e={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,T;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(T=(g=e.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ns=["Default","Status","Disabled"];export{t as Default,e as Disabled,r as Status,ns as __namedExportsOrder,ms as default};
