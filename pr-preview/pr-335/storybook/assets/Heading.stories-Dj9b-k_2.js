import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{c as Q}from"./clsx-B-dksMZM.js";import{e as t}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const W='"../theme/tokens.css"',X="#000000",Y='"Inter", sans-serif',Z="_h1_ozm69_5",$="_h1External_ozm69_6",ee="_h2_ozm69_8",ne="_h2External_ozm69_9",ae="_h3_ozm69_11",te="_h3External_ozm69_12",se="_h4_ozm69_14",re="_h4External_ozm69_15",oe="_h5_ozm69_17",ie="_h5External_ozm69_18",a={tokens:W,black:X,display:Y,h1:Z,h1External:$,h2:ee,h2External:ne,h3:ae,h3External:te,h4:se,h4External:re,h5:oe,h5External:ie},v=({children:e,...n})=>r.jsx(le,{...n,children:e}),le=({component:e,children:n,className:M,variant:s="h3",isExternal:o=!1,...i})=>{const P={h1:o?a.h1External:a.h1,h2:o?a.h2External:a.h2,h3:o?a.h3External:a.h3,h4:o?a.h4External:a.h4,h5:o?a.h5External:a.h5},l=Q(P[s],M);return[e,s].includes("h1")?r.jsx("h1",{className:l,...i,children:n}):[e,s].includes("h2")?r.jsx("h2",{className:l,...i,children:n}):[e,s].includes("h3")?r.jsx("h3",{className:l,...i,children:n}):[e,s].includes("h4")?r.jsx("h4",{className:l,...i,children:n}):[e,s].includes("h5")?r.jsx("h5",{className:l,...i,children:n}):null};try{v.displayName="Heading",v.__docgenInfo={description:"",displayName:"Heading",props:{variant:{defaultValue:{value:"h3"},description:"The heading element to render",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},component:{defaultValue:null,description:"Override the semantic element of the component but keep the look of the variant property",name:"component",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},isExternal:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExternal",required:!1,type:{name:"boolean"}}}}}catch{}const xe={component:v,title:"Components/Heading",tags:["autodocs"],args:{isExternal:!1}},h={args:{variant:"h1",children:"Sapindales"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400})}},p={args:{...h.args,isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"44px","font-weight":400})}},c={args:{variant:"h2",children:"Rutaceae"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400})}},g={args:{...c.args,isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"36px","font-weight":500})}},d={args:{variant:"h3",children:"Citrus"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},x={args:{variant:"h3",children:"Citrus",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"24px","line-height":"32px","font-weight":600})}},u={args:{variant:"h4",children:"C. reticulata",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600})}},m={args:{variant:"h5",children:"Clementin",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"24px","font-weight":600})}},y={args:{variant:"h3",component:"h1",children:"A h1 that looks just like a h3"},play:async({canvas:e,args:{isExternal:n}})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":n?"24px":"16px","line-height":n?"32px":"24px","font-weight":600})}};var f,E,H;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(H=(E=h.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var _,S,z;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...InternalHeading1.args,
    isExternal: true
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
}`,...(z=(S=p.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var R,w,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var k,C,j;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...InternalHeading2.args,
    isExternal: true
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
}`,...(j=(C=g.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var I,N,b;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(b=(N=d.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var q,V,A;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'Citrus',
    isExternal: true
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
}`,...(A=(V=x.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var O,T,U;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'h4',
    children: 'C. reticulata',
    isExternal: true
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
}`,...(U=(T=u.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var D,F,G;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'h5',
    children: 'Clementin',
    isExternal: true
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
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,L;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    component: 'h1',
    children: 'A h1 that looks just like a h3'
  },
  play: async ({
    canvas,
    args: {
      isExternal
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': isExternal ? '24px' : '16px',
      'line-height': isExternal ? '32px' : '24px',
      'font-weight': 600
    });
  }
}`,...(L=(K=y.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const ue=["InternalHeading1","ExternalHeading1","InternalHeading2","ExternalHeading2","InternalHeading3","ExternalHeading3","ExternalHeading4","ExternalHeading5","ChangeSemanticElement"];export{y as ChangeSemanticElement,p as ExternalHeading1,g as ExternalHeading2,x as ExternalHeading3,u as ExternalHeading4,m as ExternalHeading5,h as InternalHeading1,c as InternalHeading2,d as InternalHeading3,ue as __namedExportsOrder,xe as default};
