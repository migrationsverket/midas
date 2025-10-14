import{j as a}from"./iframe-Blm5w7T4.js";import{T as o,a as i,s as D}from"./Tag-BI8unjdo.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cp13vSns.js";import"./utils-B6oLcM2g.js";import"./clsx-B-dksMZM.js";import"./Hidden-BwX-9qzw.js";import"./useFocusRing-BYLUe5So.js";import"./index-Cw7TQbSF.js";import"./index-DBA3-Tu_.js";import"./useLabels-Daww6t1W.js";import"./useButton-DPeWkTid.js";import"./Collection-BU3IStq1.js";import"./index-CJAaMFOZ.js";import"./ListBox-BjHi46Is.js";import"./DragAndDrop-Drjck4Ud.js";import"./getScrollParent-DJL8FWt3.js";import"./scrollIntoView-CUaKuVky.js";import"./Separator-T6Oyi4Ag.js";import"./SelectionManager-Wq69EZ20.js";import"./useEvent-CFeT_YUa.js";import"./SelectionIndicator-V6eKEMa1.js";import"./useDescription-B3t1hbvJ.js";import"./useControlledState-Ccl0piJj.js";import"./ListKeyboardDelegate-DtSOkjM5.js";import"./RSPContexts-CGcByBC6.js";import"./Text-Ds5Z53Ia.js";import"./inertValue-ldsGHuEB.js";import"./useListState-BE-suE4G.js";import"./useHighlightSelectionDescription-MXtloo0Z.js";import"./useUpdateEffect-DzT6Mnp0.js";import"./useLocalizedStringFormatter-BrYZ9atr.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-D6H4VR6T.js";import"./useField-B5L9YfUg.js";import"./clsx-Ciqy0D92.js";import"./Button-MFb3Le1d.js";import"./Button.module-CcWMkJAG.js";import"./x-QNtpsj71.js";import"./createLucideIcon-VBWWIUeD.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",ps={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
