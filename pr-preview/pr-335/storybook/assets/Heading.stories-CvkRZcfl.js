import{j as G}from"./jsx-runtime-DtgEGaVE.js";import{c as P}from"./clsx-B-dksMZM.js";import{$ as Q}from"./Heading-Bx0h7_1c.js";import{e as a}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./RSPContexts-CeCCo7XS.js";import"./utils-DdXLQA3f.js";const W=({component:e,variant:s="h3"})=>{const o={h1:1,h2:2,h3:3,h4:4,h5:5};return e?o[e]:o[s]},X='"../theme/tokens.css"',Y="#000000",Z='"Inter", sans-serif',ee="_h1_1ovvz_5",ne="_h1Expressive_1ovvz_6",ae="_h2_1ovvz_8",se="_h2Expressive_1ovvz_9",te="_h3_1ovvz_11",re="_h3Expressive_1ovvz_12",ie="_h4_1ovvz_14",oe="_h4Expressive_1ovvz_15",pe="_h5_1ovvz_17",he="_h5Expressive_1ovvz_18",n={tokens:X,black:Y,display:Z,h1:ee,h1Expressive:ne,h2:ae,h2Expressive:se,h3:te,h3Expressive:re,h4:ie,h4Expressive:oe,h5:pe,h5Expressive:he},x=({children:e,...s})=>G.jsx(ce,{...s,children:e}),ce=({component:e,children:s,className:o,variant:y="h3",isExpressive:t=!1,...J})=>{const K={h1:t?n.h1Expressive:n.h1,h2:t?n.h2Expressive:n.h2,h3:t?n.h3Expressive:n.h3,h4:t?n.h4Expressive:n.h4,h5:t?n.h5Expressive:n.h5},M=P(K[y],o);return G.jsx(Q,{level:W({component:e,variant:y}),className:M,...J,children:s})};try{x.displayName="Heading",x.__docgenInfo={description:"",displayName:"Heading",props:{variant:{defaultValue:{value:"h3"},description:"The heading element to render",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},component:{defaultValue:null,description:"Override the semantic element of the component but keep the look of the variant property",name:"component",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},isExpressive:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExpressive",required:!1,type:{name:"boolean"}}}}}catch{}const fe={component:x,title:"Components/Typography/Heading",tags:["autodocs"],args:{isExpressive:!1}},r={args:{variant:"h1",children:"Sapindales"},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400})}},p={args:{...r.args,isExpressive:!0},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"44px","font-weight":400})}},i={args:{variant:"h2",children:"Rutaceae"},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400})}},h={args:{...i.args,isExpressive:!0},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"36px","font-weight":500})}},c={args:{variant:"h3",children:"Citrus"},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},l={args:{variant:"h3",children:"Citrus",isExpressive:!0},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"24px","line-height":"32px","font-weight":600})}},g={args:{variant:"h4",children:"C. reticulata",isExpressive:!0},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600})}},v={args:{variant:"h5",children:"Clementin",isExpressive:!0},play:async({canvas:e})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"24px","font-weight":600})}},d={args:{variant:"h3",component:"h1",children:"A h1 that looks just like a h3"},play:async({canvas:e,args:{isExpressive:s}})=>{a(e.getByRole("heading")).toHaveStyle({"font-size":s?"24px":"16px","line-height":s?"32px":"24px","font-weight":600})}};var u,m,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var E,H,_;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(H=p.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var S,z,R;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(z=i.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var w,B,k;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(B=h.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var C,j,b;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var N,$,q;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=($=l.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var V,A,I;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(I=(A=g.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,T,L;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(T=v.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var U,D,F;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(F=(D=d.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const Ee=["Heading1","ExpressiveHeading1","Heading2","ExpressiveHeading2","Heading3","ExpressiveHeading3","ExpressiveHeading4","ExpressiveHeading5","ChangeSemanticElement"];export{d as ChangeSemanticElement,p as ExpressiveHeading1,h as ExpressiveHeading2,l as ExpressiveHeading3,g as ExpressiveHeading4,v as ExpressiveHeading5,r as Heading1,i as Heading2,c as Heading3,Ee as __namedExportsOrder,fe as default};
