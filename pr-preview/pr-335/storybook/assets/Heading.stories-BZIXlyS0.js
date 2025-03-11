import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{c as W}from"./clsx-B-dksMZM.js";import{$ as h}from"./Heading-Bx0h7_1c.js";import{e as s}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./RSPContexts-CeCCo7XS.js";import"./utils-DdXLQA3f.js";const c=({component:e,element:n,variant:E})=>e===n||!e&&E===n,X='"../theme/tokens.css"',Y="#000000",Z='"Inter", sans-serif',ee="_h1_1ovvz_5",ne="_h1Expressive_1ovvz_6",ae="_h2_1ovvz_8",se="_h2Expressive_1ovvz_9",te="_h3_1ovvz_11",re="_h3Expressive_1ovvz_12",ie="_h4_1ovvz_14",oe="_h4Expressive_1ovvz_15",pe="_h5_1ovvz_17",he="_h5Expressive_1ovvz_18",a={tokens:X,black:Y,display:Z,h1:ee,h1Expressive:ne,h2:ae,h2Expressive:se,h3:te,h3Expressive:re,h4:ie,h4Expressive:oe,h5:pe,h5Expressive:he},H=({children:e,...n})=>r.jsx(ce,{...n,children:e}),ce=({component:e,children:n,className:E,variant:t="h3",isExpressive:i=!1,...o})=>{const Q={h1:i?a.h1Expressive:a.h1,h2:i?a.h2Expressive:a.h2,h3:i?a.h3Expressive:a.h3,h4:i?a.h4Expressive:a.h4,h5:i?a.h5Expressive:a.h5},p=W(Q[t],E);return c({component:e,variant:t,element:"h1"})?r.jsx(h,{level:1,className:p,...o,children:n}):c({component:e,variant:t,element:"h2"})?r.jsx(h,{level:2,className:p,...o,children:n}):c({component:e,variant:t,element:"h3"})?r.jsx(h,{level:3,className:p,...o,children:n}):c({component:e,variant:t,element:"h4"})?r.jsx(h,{level:4,className:p,...o,children:n}):c({component:e,variant:t,element:"h5"})?r.jsx(h,{level:5,className:p,...o,children:n}):null};try{H.displayName="Heading",H.__docgenInfo={description:"",displayName:"Heading",props:{variant:{defaultValue:{value:"h3"},description:"The heading element to render",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},component:{defaultValue:null,description:"Override the semantic element of the component but keep the look of the variant property",name:"component",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},isExpressive:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExpressive",required:!1,type:{name:"boolean"}}}}}catch{}const fe={component:H,title:"Components/Typography/Heading",tags:["autodocs"],args:{isExpressive:!1}},l={args:{variant:"h1",children:"Sapindales"},play:async({canvas:e})=>{s(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400})}},v={args:{...l.args,isExpressive:!0},play:async({canvas:e})=>{s(e.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"44px","font-weight":400})}},g={args:{variant:"h2",children:"Rutaceae"},play:async({canvas:e})=>{s(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400})}},x={args:{...g.args,isExpressive:!0},play:async({canvas:e})=>{s(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"36px","font-weight":500})}},d={args:{variant:"h3",children:"Citrus"},play:async({canvas:e})=>{s(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},m={args:{variant:"h3",children:"Citrus",isExpressive:!0},play:async({canvas:e})=>{s(e.getByRole("heading")).toHaveStyle({"font-size":"24px","line-height":"32px","font-weight":600})}},u={args:{variant:"h4",children:"C. reticulata",isExpressive:!0},play:async({canvas:e})=>{s(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600})}},y={args:{variant:"h5",children:"Clementin",isExpressive:!0},play:async({canvas:e})=>{s(e.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"24px","font-weight":600})}},f={args:{variant:"h3",component:"h1",children:"A h1 that looks just like a h3"},play:async({canvas:e,args:{isExpressive:n}})=>{s(e.getByRole("heading")).toHaveStyle({"font-size":n?"24px":"16px","line-height":n?"32px":"24px","font-weight":600})}};var _,S,z;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'Sapindales'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '32px',
      'font-weight': 400
    });
  }
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var R,w,B;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Heading1.args,
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '36px',
      'line-height': '44px',
      'font-weight': 400
    });
  }
}`,...(B=(w=v.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var k,C,j;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'h2',
    children: 'Rutaceae'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 400
    });
  }
}`,...(j=(C=g.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var N,b,$;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Heading2.args,
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '36px',
      'font-weight': 500
    });
  }
}`,...($=(b=x.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var q,V,A;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'Citrus'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
      'font-weight': 600
    });
  }
}`,...(A=(V=d.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var I,O,T;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'Citrus',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '24px',
      'line-height': '32px',
      'font-weight': 600
    });
  }
}`,...(T=(O=m.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var U,D,F;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'h4',
    children: 'C. reticulata',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 600
    });
  }
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,J,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'h5',
    children: 'Clementin',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '18px',
      'line-height': '24px',
      'font-weight': 600
    });
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,P;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    component: 'h1',
    children: 'A h1 that looks just like a h3'
  },
  play: async ({
    canvas,
    args: {
      isExpressive
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': isExpressive ? '24px' : '16px',
      'line-height': isExpressive ? '32px' : '24px',
      'font-weight': 600
    });
  }
}`,...(P=(M=f.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Ee=["Heading1","ExpressiveHeading1","Heading2","ExpressiveHeading2","Heading3","ExpressiveHeading3","ExpressiveHeading4","ExpressiveHeading5","ChangeSemanticElement"];export{f as ChangeSemanticElement,v as ExpressiveHeading1,x as ExpressiveHeading2,m as ExpressiveHeading3,u as ExpressiveHeading4,y as ExpressiveHeading5,l as Heading1,g as Heading2,d as Heading3,Ee as __namedExportsOrder,fe as default};
