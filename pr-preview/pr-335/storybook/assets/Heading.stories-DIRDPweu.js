import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{c as P}from"./clsx-B-dksMZM.js";import{e as t}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Q='"../theme/tokens.css"',W="#000000",X='"Inter", sans-serif',Y="_h1_ozm69_5",Z="_h1External_ozm69_6",$="_h2_ozm69_8",ee="_h2External_ozm69_9",ne="_h3_ozm69_11",ae="_h3External_ozm69_12",te="_h4_ozm69_14",se="_h4External_ozm69_15",re="_h5_ozm69_17",oe="_h5External_ozm69_18",a={tokens:Q,black:W,display:X,h1:Y,h1External:Z,h2:$,h2External:ee,h3:ne,h3External:ae,h4:te,h4External:se,h5:re,h5External:oe},y=({children:e,...n})=>r.jsx(ie,{...n,children:e}),ie=({component:e,children:n,className:L,variant:s="h3",isExternal:o=!1})=>{const M={h1:o?a.h1External:a.h1,h2:o?a.h2External:a.h2,h3:o?a.h3External:a.h3,h4:o?a.h4External:a.h4,h5:o?a.h5External:a.h5},i=P(M[s],L);return[e,s].includes("h1")?r.jsx("h1",{className:i,children:n}):[e,s].includes("h2")?r.jsx("h2",{className:i,children:n}):[e,s].includes("h3")?r.jsx("h3",{className:i,children:n}):[e,s].includes("h4")?r.jsx("h4",{className:i,children:n}):[e,s].includes("h5")?r.jsx("h5",{className:i,children:n}):null};try{y.displayName="Heading",y.__docgenInfo={description:"",displayName:"Heading",props:{variant:{defaultValue:{value:"h3"},description:"The heading element to render",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},component:{defaultValue:null,description:"Override the semantic element of the component but keep the look of the variant property",name:"component",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'}]}},isExternal:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExternal",required:!1,type:{name:"boolean"}}}}}catch{}const de={component:y,title:"Components/Heading",tags:["autodocs"],args:{isExternal:!1}},l={args:{variant:"h1",children:"Sapindales"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400})}},c={args:{...l.args,isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"44px","font-weight":400})}},h={args:{variant:"h2",children:"Rutaceae"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400})}},p={args:{...h.args,isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"36px","font-weight":500})}},g={args:{variant:"h3",children:"Citrus"},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},d={args:{variant:"h3",children:"Citrus",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"24px","line-height":"32px","font-weight":600})}},x={args:{variant:"h4",children:"C. reticulata",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600})}},u={args:{variant:"h5",children:"Clementin",isExternal:!0},play:async({canvas:e})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"24px","font-weight":600})}},m={args:{variant:"h3",component:"h1",children:"A h1 that looks just like a h3"},play:async({canvas:e,args:{isExternal:n}})=>{t(e.getByRole("heading")).toHaveStyle({"font-size":n?"24px":"16px","line-height":n?"32px":"24px","font-weight":600})}};var v,f,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(f=l.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var H,_,S;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(S=(_=c.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var z,R,w;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(R=h.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var B,k,C;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,I,N;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(I=g.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var b,q,V;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(V=(q=d.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var A,O,T;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(O=x.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var U,D,F;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const xe=["InternalHeading1","ExternalHeading1","InternalHeading2","ExternalHeading2","InternalHeading3","ExternalHeading3","ExternalHeading4","ExternalHeading5","ChangeSemanticElement"];export{m as ChangeSemanticElement,c as ExternalHeading1,p as ExternalHeading2,d as ExternalHeading3,x as ExternalHeading4,u as ExternalHeading5,l as InternalHeading1,h as InternalHeading2,g as InternalHeading3,xe as __namedExportsOrder,de as default};
