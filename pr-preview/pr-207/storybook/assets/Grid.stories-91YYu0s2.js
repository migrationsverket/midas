import{j as t}from"./jsx-runtime-CfatFE5O.js";import{c as _}from"./clsx-B-dksMZM.js";import{C as n}from"./Card-BdIpZWCm.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Link-DibNbVRm.js";import"./Link-DqO9kW8W.js";import"./useFocusable-D_XT9yGL.js";import"./index-ZuzByk-F.js";import"./createLucideIcon-DQK9Z80p.js";const u='"../theme/tokens.css"',p="(min-width: 768px)",k="(min-width: 1200px)",x="(min-width: 1440px)",h="_container_1aupx_4",g="_grid_1aupx_16",G="_fluid_1aupx_45",j="_col_1aupx_52",i={tokens:u,mdBreakpoint:p,lgBreakpoint:k,xlBreakpoint:x,container:h,grid:g,fluid:G,col:j,"col-1":"_col-1_1aupx_58","col-2":"_col-2_1aupx_62","col-3":"_col-3_1aupx_66","col-4":"_col-4_1aupx_70","col-5":"_col-5_1aupx_74","col-6":"_col-6_1aupx_78","col-7":"_col-7_1aupx_82","col-8":"_col-8_1aupx_86","col-9":"_col-9_1aupx_90","col-10":"_col-10_1aupx_94","col-11":"_col-11_1aupx_98","col-12":"_col-12_1aupx_102","offset-1":"_offset-1_1aupx_106","offset-2":"_offset-2_1aupx_110","offset-3":"_offset-3_1aupx_114","offset-4":"_offset-4_1aupx_118","offset-5":"_offset-5_1aupx_122","offset-6":"_offset-6_1aupx_126","offset-7":"_offset-7_1aupx_130","offset-8":"_offset-8_1aupx_134","offset-9":"_offset-9_1aupx_138","offset-10":"_offset-10_1aupx_142","offset-11":"_offset-11_1aupx_146"},c=({children:r,fluid:l=!1,...o})=>t.jsx("div",{className:_(i.container,l&&i.fluid,o.className),...o,children:t.jsx("div",{className:i.grid,children:r})});try{c.displayName="Grid",c.__docgenInfo={description:`Grid based on display: grid;
Calculates breakpoints and distributes columns according to MV specifications

### Children
Use GridItem to manage each column.
GridItem accepts values of 1 through 12 and auto.`,displayName:"Grid",props:{fluid:{defaultValue:{value:"false"},description:"Removes outer margins for nested use. First Flex on a page should have outer margins.",name:"fluid",required:!1,type:{name:"boolean"}}}}}catch{}const e=({children:r,col:l,...o})=>{const f=l?`col-${l}`:"";return t.jsx("div",{className:_(i.col,i[f],o.className),...o,children:r})};try{e.displayName="GridItem",e.__docgenInfo={description:"",displayName:"GridItem",props:{col:{defaultValue:null,description:"Column size and behaviour",name:"col",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12'}}}}}catch{}const w={component:c,title:"Components/Grid",tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{fluid:{control:{type:"boolean"}}}},a={args:{},render:({...r})=>t.jsxs(c,{fluid:r.fluid,children:[t.jsx(e,{col:3,children:t.jsx(n,{title:"Ett kort",content:"Som är i tre kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:3,children:t.jsx(n,{title:"Ett kort",content:"Som är i tre kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:6,children:t.jsx(n,{title:"Ett kort",content:"Som är i sex kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(n,{title:"Ett kort",content:"Som är i fyra kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(n,{title:"Ett kort",content:"Som är i fyra kolumner",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:4,children:t.jsx(n,{title:"Ett kort",content:"Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.",link:{children:"Länk",href:"#"}})}),t.jsx(e,{col:10,children:t.jsx(n,{title:"Ett kort",content:"Som är utan kolumner",link:{children:"Länk",href:"#"}})})]})};var s,d,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => <Grid fluid={args.fluid}>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={3}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={6}>
        <Card title={'Ett kort'} content={'Som är i sex kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={4}>
        <Card title={'Ett kort'} content={'Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
      <GridItem col={10}>
        <Card title={'Ett kort'} content={'Som är utan kolumner'} link={{
        children: 'Länk',
        href: '#'
      }} />
      </GridItem>
    </Grid>
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const V=["Primary"];export{a as Primary,V as __namedExportsOrder,w as default};
