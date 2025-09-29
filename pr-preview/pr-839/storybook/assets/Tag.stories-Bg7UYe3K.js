import{j as a}from"./iframe-jnlgsi9p.js";import{T as o,a as i,s as D}from"./Tag-C-NdBK57.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-BUM_H9uj.js";import"./utils-CJIIAbfy.js";import"./clsx-B-dksMZM.js";import"./Hidden-CGBdorFB.js";import"./useFocusRing-CduhpbzF.js";import"./index-hU9uh3Ty.js";import"./index-VDpn7ZN8.js";import"./useLabels-BYqPhjAl.js";import"./useButton-u4k2WJiq.js";import"./Collection-CF_DnWJS.js";import"./index-CO1f7Yh7.js";import"./ListBox-CKP-TiC5.js";import"./DragAndDrop-D5nCAUrT.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-CO1dhQBP.js";import"./SelectionManager-CE_VwxEo.js";import"./useEvent-nxTiz6Ut.js";import"./FocusScope-DFJfKqJg.js";import"./useDescription-C7X6UoWZ.js";import"./useControlledState-cdO1Ns9d.js";import"./context-DeYE0Lf6.js";import"./Text-CHDgcuVh.js";import"./inertValue-BLfVphNo.js";import"./useListState-C3K6wrtT.js";import"./useHighlightSelectionDescription-BR2QjXsC.js";import"./useUpdateEffect-C38ihp_j.js";import"./useLocalizedStringFormatter-C-YeUb4O.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-2udmq2Bx.js";import"./useField-CZUIT90o.js";import"./Button-C2vqzhjL.js";import"./Button.module-DRhvPh0f.js";import"./x-DFR31Uv3.js";import"./createLucideIcon-CHU8THTT.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
