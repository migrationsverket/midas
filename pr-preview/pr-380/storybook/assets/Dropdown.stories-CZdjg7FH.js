import{j as p}from"./jsx-runtime-DtgEGaVE.js";import{D as x,a as f}from"./Dropdown-P7cS1YAJ.js";import{u as h,e as T}from"./index-DtSMq7G1.js";import{L as v}from"./LinkButton-CIjQqcpw.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-BX5bMd1M.js";import"./Button-CIzcTr1X.js";import"./utils-B5vVULSi.js";import"./clsx-B-dksMZM.js";import"./ProgressBar-C-2ZZqws.js";import"./Label-DK2CQORK.js";import"./Hidden-lswqw32w.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-XbSNQJBa.js";import"./context-B5OQOlVG.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./focusSafely-DzEZeR8D.js";import"./useFocusRing-7U1UHDTh.js";import"./index-cpIEhwLo.js";import"./useFocusable-CmauVdlQ.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-hTXX6Kkh.js";import"./Collection-DSX7ksCA.js";import"./index-DwWe6W7f.js";import"./Separator--jQ6KEKV.js";import"./SelectionManager-CH_UAKbc.js";import"./useEvent--bAfsHDR.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-BDcaQnsV.js";import"./useDescription-C_qiR2pz.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-C7MmOkhr.js";import"./useCollator-DECUsGSp.js";import"./Text-BfWS687k.js";import"./useOverlayTriggerState-M63CoC7R.js";import"./PressResponder-oTlg6SaQ.js";import"./useMenuTriggerState-kdzSkoqF.js";import"./useLocalizedStringFormatter-BsPioxkm.js";import"./VisuallyHidden-CpkOB4Ig.js";import"./getScrollParent-CrrBdd7g.js";import"./Button-CVbiQUXU.js";import"./createLucideIcon-8wDOqnHv.js";import"./Link-CG-gacPq.js";import"./chevron-right-CjCwHShF.js";const yr={component:x,title:"Components/Dropdown",args:{title:"Meny",children:["Ett","Två","Tre"].map((r,i)=>p.jsx(f,{children:p.jsx(v,{variant:"tertiary",children:r})},"dropdown_"+i))}},t={},o={play:async({canvas:r,step:i,args:{title:g}})=>{await i("It should render successfully",async()=>{const w=r.getByText(g);await h.click(w),T(r).toBeTruthy()})}},e={args:{title:void 0,label:"Meny"}};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  play: async ({
    canvas,
    step,
    args: {
      title
    }
  }) => {
    await step('It should render successfully', async () => {
      const dropdown = canvas.getByText(title as string);
      await userEvent.click(dropdown);
      expect(canvas).toBeTruthy();
    });
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,y;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: undefined,
    label: 'Meny'
  }
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const gr=["Primary","Open","WithoutTitle"];export{o as Open,t as Primary,e as WithoutTitle,gr as __namedExportsOrder,yr as default};
