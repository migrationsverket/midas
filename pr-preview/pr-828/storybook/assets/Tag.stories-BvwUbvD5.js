import{j as a}from"./iframe-D0xpa7RE.js";import{T as o,a as i,s as D}from"./Tag-BSEiYiYQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-PY3oMzb6.js";import"./utils-CuucEP8w.js";import"./clsx-B-dksMZM.js";import"./Hidden-C3glJuSc.js";import"./useFocusRing-BSWOzTkh.js";import"./index-BTC6yrvg.js";import"./index-CAJYf0tX.js";import"./useLabels-CgQIywqP.js";import"./useButton-D5L5lRz0.js";import"./Collection-DF5iS38G.js";import"./index-feO3MqPj.js";import"./ListBox-Cnff4LCn.js";import"./DragAndDrop-xpEAOPjh.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DpCYXI0s.js";import"./SelectionManager-BPXnEWwA.js";import"./useEvent-yJitzbNp.js";import"./FocusScope-BXvZ8Scb.js";import"./useDescription-Cpi_X6rk.js";import"./useControlledState-CqWoAegy.js";import"./ListKeyboardDelegate-DnHIgacG.js";import"./Text-5_-qCR72.js";import"./inertValue-BYaUXjiL.js";import"./useListState-CaGwzwBn.js";import"./useHighlightSelectionDescription-KdA-6-F6.js";import"./useUpdateEffect-DEYwDeJu.js";import"./useLocalizedStringFormatter-B5mlJPaI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DP-GjJQc.js";import"./useField-C7zlFtSk.js";import"./Button-DPudEbdP.js";import"./Button.module-DRhvPh0f.js";import"./x-LgA7B8Nx.js";import"./createLucideIcon-D1NZhtWJ.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
