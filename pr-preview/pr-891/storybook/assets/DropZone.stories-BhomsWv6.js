import{j as e,e as f}from"./iframe-CcqQFNZ4.js";import{D as g,F as v}from"./FileUpload-BJT42qR4.js";import{B as h}from"./Button-Bb_v90_P.js";import{T as u}from"./Text-XFg0ZgIN.js";import"./preload-helper-Ct5FWWRu.js";import"./utils-CzaLILIa.js";import"./clsx-B-dksMZM.js";import"./Text-CJ6eX-zL.js";import"./useFocusRing-BA6Kf1-f.js";import"./index-DuhG6G0z.js";import"./index-DovVAc5x.js";import"./useLabels-BZCRLtmz.js";import"./useDescription-4VoNSCjv.js";import"./useLocalizedStringFormatter-SKtJYtnG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useButton-3G_DPaEV.js";import"./VisuallyHidden-CkZ16q-g.js";import"./Input-CDVxcxSZ.js";import"./Hidden-_YiRnjLS.js";import"./PressResponder-Cg0zX3k1.js";import"./clsx-Ciqy0D92.js";import"./Button.module-CtQ1deO8.js";import"./Button-BwODYqP3.js";const{expect:d,fn:F,userEvent:y,within:x,fireEvent:T,waitFor:m}=__STORYBOOK_MODULE_TEST__,w=i=>{const[r,s]=f.useState([]),n=o=>{if(o){const t=Array.from(o);s(a=>[...a,...t]),i.onSelect(t)}},c=async o=>{const t=o.items.filter(l=>l.kind==="file"),a=await Promise.all(t.map(l=>l.getFile()));s(l=>[...l,...a]),i.onSelect(a)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(v,{onSelect:n,"data-testid":"file-trigger",children:e.jsx(h,{children:"Select files"})}),e.jsx(g,{...i,onDrop:c,"data-testid":"drop-zone",children:e.jsx(u,{children:"Drop files here"})}),r.length>0&&e.jsxs("div",{children:[e.jsx("h4",{children:"Selected files:"}),e.jsx("ul",{children:r.map((o,t)=>e.jsx("li",{children:o.name},t))})]})]})},q={component:g,title:"Components/DropZone",tags:["!dev","!autodocs"],render:i=>e.jsx(w,{...i}),args:{onSelect:F()}},p={play:async({canvasElement:i,args:r})=>{const s=x(i),n=new File(["hello"],"hello.png",{type:"image/png"}),c=s.getByTestId("file-trigger");await y.upload(c,n),await m(()=>{d(r.onSelect).toHaveBeenCalledWith([n])});const o=s.getByTestId("drop-zone"),t=new Event("drop",{bubbles:!0});Object.defineProperty(t,"dataTransfer",{value:{files:[n],items:[{kind:"file",type:n.type,getAsFile:()=>n}],types:["Files"]}}),await T(o,t),await m(()=>{d(r.onSelect).toHaveBeenCalledTimes(2),d(r.onSelect).toHaveBeenLastCalledWith([n])})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const G=["Default"];export{p as Default,G as __namedExportsOrder,q as default};
