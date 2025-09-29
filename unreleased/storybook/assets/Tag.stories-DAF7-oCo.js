import{j as a}from"./iframe-kMiknBC6.js";import{T as o,a as i,s as D}from"./Tag-PBzKNsyl.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-C8N6PLYK.js";import"./utils-s8mL8uTY.js";import"./clsx-B-dksMZM.js";import"./Hidden-j1TTdwqM.js";import"./useFocusRing-BY5A72sR.js";import"./index-D9HDOR5h.js";import"./index-7kcFapoJ.js";import"./useLabels-FtQppIax.js";import"./useButton-CudOwWW-.js";import"./Collection-D36ANUYx.js";import"./index-C3NMqKkD.js";import"./ListBox-DXD3B10A.js";import"./DragAndDrop-DeCTLQWB.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-iuK5bHK7.js";import"./SelectionManager-B94FVNls.js";import"./useEvent-BqMjVULP.js";import"./FocusScope-D9rN8LWv.js";import"./useDescription-BB3NlvVi.js";import"./useControlledState-sRsSmndr.js";import"./context-CZKrlXan.js";import"./Text-BFay74Hc.js";import"./inertValue-D2ckDrQj.js";import"./useListState-DVTmr58j.js";import"./useHighlightSelectionDescription-D0qCI745.js";import"./useUpdateEffect-qZG5B1YC.js";import"./useLocalizedStringFormatter-D3_H7fpb.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useHasTabbableChild-DDbytNml.js";import"./useField-DS83mhDo.js";import"./Button-CafKZZUh.js";import"./Button.module-DRhvPh0f.js";import"./x-agcOxfko.js";import"./createLucideIcon-CC-uhS2x.js";const{expect:_}=__STORYBOOK_MODULE_TEST__,y="test",os={component:i,subcomponents:{TagGroup:o},title:"Components/Tag",tags:["autodocs"],args:{children:"Title",textValue:"Title",dismissable:!0,className:"test-class"},render:s=>a.jsx(o,{"aria-label":"Taggar",children:a.jsx(i,{...s,"data-testid":y,children:s.children})})},t={play:async({canvas:s,step:b,args:{className:x}})=>{await b("it should preserve its classNames when being passed new ones",async()=>{_(s.getByTestId(y)).toHaveClass(D.tag,x)})}},e={args:{type:"success"}},r={args:{isDisabled:!0}};var p,m,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
