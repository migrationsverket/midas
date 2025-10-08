import{j as a}from"./iframe-B5kjlt00.js";import{T as o,a as i,s as D}from"./Tag-kUDk3I1O.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DQuN9Ypu.js";import"./utils-DaXSsFS_.js";import"./clsx-B-dksMZM.js";import"./Hidden-BWbRNOmI.js";import"./useFocusRing-CrCnyjMu.js";import"./index-BzHVhXj3.js";import"./index-CUWxs64Z.js";import"./useLabels-oCxSA0Aa.js";import"./useButton-DVsH_58h.js";import"./Collection-DgVJrIva.js";import"./index-3cg_L_0y.js";import"./ListBox-BvRjGB7l.js";import"./DragAndDrop-BX5O6T04.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-fgVbrKCh.js";import"./SelectionManager-kIiqRuEH.js";import"./useEvent-DuPZnwWW.js";import"./FocusScope-D7g8XjQw.js";import"./useDescription-DTVL6hy_.js";import"./useControlledState-ucOzuNrg.js";import"./context-thYLAn5P.js";import"./Text-DUWTNUVN.js";import"./inertValue-Cr9p9TmP.js";import"./useListState-DvVYwpsJ.js";import"./useHighlightSelectionDescription-DxRZIY-a.js";import"./useUpdateEffect-DgHptY8F.js";import"./useLocalizedStringFormatter-Bk6stZq0.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DbWw4Mq5.js";import"./useField-CSw6THuR.js";import"./clsx-Ciqy0D92.js";import"./Button-Be69WMbm.js";import"./Button.module-CcWMkJAG.js";import"./x-DDwp76MK.js";import"./createLucideIcon-CibuQtRT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",is={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const ps=["Default","Status","Disabled"];export{t as Default,r as Disabled,e as Status,ps as __namedExportsOrder,is as default};
