import{j as e}from"./jsx-runtime-BYYWji4R.js";import{D as u,F as h}from"./FileUpload-C01oxY6N.js";import{R as F}from"./index-ClcD9ViR.js";import{f as y,w as x,u as w,a as m,e as d,b as T}from"./index-Q7OVwvWC.js";import{B as S}from"./Button-bJ7RHpSk.js";import{T as j}from"./Text-BgvnLaBz.js";import"./utils-RHx87K0F.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./Text-CZ6zcozL.js";import"./useFocusRing-zhkOjX4v.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useLabels-FEgier_d.js";import"./useDescription-BqzP9r9Z.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./context-zNjZoWML.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./useButton-DQcVpLGQ.js";import"./VisuallyHidden-BekSNXsj.js";import"./Input-BMo7u0M7.js";import"./Hidden-BC9qER92.js";import"./PressResponder-DWi2SZR7.js";import"./Button.module-Bmb634uG.js";import"./Button-v_l_ujRb.js";const E=i=>{const[r,s]=F.useState([]),n=o=>{if(o){const t=Array.from(o);s(l=>[...l,...t]),i.onSelect(t)}},c=async o=>{const t=o.items.filter(a=>a.kind==="file"),l=await Promise.all(t.map(a=>a.getFile()));s(a=>[...a,...l]),i.onSelect(l)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(h,{onSelect:n,"data-testid":"file-trigger",children:e.jsx(S,{children:"Select files"})}),e.jsx(u,{...i,onDrop:c,"data-testid":"drop-zone",children:e.jsx(j,{children:"Drop files here"})}),r.length>0&&e.jsxs("div",{children:[e.jsx("h4",{children:"Selected files:"}),e.jsx("ul",{children:r.map((o,t)=>e.jsx("li",{children:o.name},t))})]})]})},Y={component:u,title:"Components/DropZone",tags:["!dev","!autodocs"],render:i=>e.jsx(E,{...i}),args:{onSelect:y()}},p={play:async({canvasElement:i,args:r})=>{const s=x(i),n=new File(["hello"],"hello.png",{type:"image/png"}),c=s.getByTestId("file-trigger");await w.upload(c,n),await m(()=>{d(r.onSelect).toHaveBeenCalledWith([n])});const o=s.getByTestId("drop-zone"),t=new Event("drop",{bubbles:!0});Object.defineProperty(t,"dataTransfer",{value:{files:[n],items:[{kind:"file",type:n.type,getAsFile:()=>n}],types:["Files"]}}),await T(o,t),await m(()=>{d(r.onSelect).toHaveBeenCalledTimes(2),d(r.onSelect).toHaveBeenLastCalledWith([n])})}};var f,g,v;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const testFile = new File(['hello'], 'hello.png', {
      type: 'image/png'
    });

    // Test 1: FileTrigger button click
    const fileTrigger = canvas.getByTestId('file-trigger');
    await userEvent.upload(fileTrigger, testFile);
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith([testFile]);
    });

    // Test 2: DropZone drop
    const dropZone = canvas.getByTestId('drop-zone');
    const dropEvent = new Event('drop', {
      bubbles: true
    });
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: [testFile],
        items: [{
          kind: 'file',
          type: testFile.type,
          getAsFile: () => testFile
        }],
        types: ['Files']
      }
    });
    await fireEvent(dropZone, dropEvent);
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledTimes(2);
      expect(args.onSelect).toHaveBeenLastCalledWith([testFile]);
    });
  }
}`,...(v=(g=p.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const $=["Default"];export{p as Default,$ as __namedExportsOrder,Y as default};
