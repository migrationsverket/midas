import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-CP_JPyt4.js";import{t as r}from"./iframe-BFckmfv9.js";import{t as i}from"./Button-DbtsOwmM.js";import{t as a}from"./button-BzTJGtFD.js";import{a as o,c as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./TabList-PAAvTULD.js";var m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{m=t(n(),1),s(),a(),l(),u(),c(),h=r(),g=[{title:`Processen`,content:`Processen går till såhär Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores expedita, excepturi, hic modi tenetur maxime dicta omnis aliquam quas doloremque cumque repellendus iure. Eveniet reprehenderit sapiente quidem culpa nam? Vel?`},{title:`Viktigt`,content:`Det är viktigt att veta att Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis quisquam amet, rem aperiam error nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit.`},{title:`Ansök`,content:(0,h.jsxs)(h.Fragment,{children:[`Ansök här: `,(0,h.jsx)(i,{children:`Ansök`})]})}],_={component:f,title:`Components/Tabs`,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`large`,`medium`]}},args:{orientation:`horizontal`,variant:`uncontained`,size:`large`},render:e=>(0,h.jsxs)(f,{...e,children:[(0,h.jsx)(p,{children:g.map(({title:e,isDisabled:t})=>(0,h.jsx)(o,{id:e,isDisabled:t,children:e},e))}),g.map(({title:e,content:t})=>(0,h.jsx)(d,{id:e,children:(0,h.jsx)(`div`,{children:t})},e))]})},v={},y={args:{size:`medium`}},b={args:{variant:`contained`}},x={args:{orientation:`vertical`}},S={render:e=>(0,h.jsxs)(f,{...e,children:[(0,h.jsx)(p,{children:g.map(({title:e,isDisabled:t},n)=>(0,h.jsx)(o,{id:e,isDisabled:t||!!n,children:e},e))}),g.map(({title:e,content:t})=>(0,h.jsx)(d,{id:e,children:(0,h.jsx)(`div`,{children:t})},e))]})},C={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultSelectedKey:`Ansök`}},w={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=m.useState(`Processen`);return(0,h.jsxs)(f,{...e,selectedKey:t,onSelectionChange:n,children:[(0,h.jsx)(p,{children:g.map(({title:e,isDisabled:t})=>(0,h.jsx)(o,{id:e,isDisabled:t,children:e},e))}),g.map(({title:e,content:t})=>(0,h.jsx)(d,{id:e,children:(0,h.jsx)(`div`,{children:t})},e))]})}},T={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{...e,children:(0,h.jsx)(`div`,{children:`1`})}),`derp`]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <TabList>
        {data.map(({
        title,
        isDisabled
      }, i) => <Tab id={title} isDisabled={isDisabled || !!i} key={title}>
            {title}
          </Tab>)}
      </TabList>
      {data.map(({
      title,
      content
    }) => <TabPanel id={title} key={title}>
          <div>{content}</div>
        </TabPanel>)}
    </Tabs>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    defaultSelectedKey: 'Ansök'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => {
    const [selectedKey, setSelectedKey] = React.useState<Key>('Processen');
    return <Tabs {...args} selectedKey={selectedKey} onSelectionChange={setSelectedKey}>
        <TabList>
          {data.map(({
          title,
          isDisabled
        }) => <Tab id={title} isDisabled={isDisabled} key={title}>
              {title}
            </Tab>)}
        </TabList>
        {data.map(({
        title,
        content
      }) => <TabPanel id={title} key={title}>
            <div>{content}</div>
          </TabPanel>)}
      </Tabs>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: args => <>
      <Tabs {...args}>
        <div>1</div>
      </Tabs>
      derp
    </>
}`,...T.parameters?.docs?.source}}},E=[`Primary`,`Medium`,`Contained`,`Vertical`,`DisabledTabs`,`DefaultSelectedKey`,`Controlled`,`MoreItemsThanChildren`]}))();export{b as Contained,w as Controlled,C as DefaultSelectedKey,S as DisabledTabs,y as Medium,T as MoreItemsThanChildren,v as Primary,x as Vertical,E as __namedExportsOrder,_ as default};