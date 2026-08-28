import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{t as r}from"./iframe-Czu7RkGO.js";import{bt as i,t as a}from"./exports-DQ3o3p5J.js";import{t as o}from"./Button-njKEBaMO.js";import{t as s}from"./button-CajW6jKy.js";import{n as c,t as l}from"./modal-Cpq1lbav.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./TabList-Bq9tr1Av.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{a(),v=t(n(),1),d(),l(),s(),p(),m(),f(),y=r(),b=[{title:`Processen`,content:`Processen går till såhär Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores expedita, excepturi, hic modi tenetur maxime dicta omnis aliquam quas doloremque cumque repellendus iure. Eveniet reprehenderit sapiente quidem culpa nam? Vel?`},{title:`Viktigt`,content:`Det är viktigt att veta att Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis quisquam amet, rem aperiam error nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit.`},{title:`Ansök`,content:(0,y.jsxs)(y.Fragment,{children:[`Ansök här: `,(0,y.jsx)(o,{children:`Ansök`})]})}],x={component:g,title:`Components/Tabs`,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`large`,`medium`]}},args:{orientation:`horizontal`,variant:`uncontained`,size:`large`},render:e=>(0,y.jsxs)(g,{...e,children:[(0,y.jsx)(_,{children:b.map(({title:e,isDisabled:t})=>(0,y.jsx)(u,{id:e,isDisabled:t,children:e},e))}),b.map(({title:e,content:t})=>(0,y.jsx)(h,{id:e,children:(0,y.jsx)(`div`,{children:t})},e))]})},S={},C={args:{size:`medium`}},w={args:{variant:`contained`}},T={args:{orientation:`vertical`}},E={render:e=>(0,y.jsxs)(g,{...e,children:[(0,y.jsx)(_,{children:b.map(({title:e,isDisabled:t},n)=>(0,y.jsx)(u,{id:e,isDisabled:t||!!n,children:e},e))}),b.map(({title:e,content:t})=>(0,y.jsx)(h,{id:e,children:(0,y.jsx)(`div`,{children:t})},e))]})},D={decorators:e=>(0,y.jsxs)(i,{children:[(0,y.jsx)(o,{children:`Open`}),(0,y.jsx)(c,{title:`A modal with tabs`,children:(0,y.jsx)(e,{})})]})},O={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},args:{defaultSelectedKey:`Ansök`}},k={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>{let[t,n]=v.useState(`Processen`);return(0,y.jsxs)(g,{...e,selectedKey:t,onSelectionChange:n,children:[(0,y.jsx)(_,{children:b.map(({title:e,isDisabled:t})=>(0,y.jsx)(u,{id:e,isDisabled:t,children:e},e))}),b.map(({title:e,content:t})=>(0,y.jsx)(h,{id:e,children:(0,y.jsx)(`div`,{children:t})},e))]})}},A={tags:[`!dev`,`!autodocs`,`!snapshot`],parameters:{chromatic:{disableSnapshot:!0}},render:e=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{...e,children:(0,y.jsx)(`div`,{children:`1`})}),`derp`]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: Story => <DialogTrigger>
      <Button>Open</Button>
      <Modal title='A modal with tabs'>
        <Story />
      </Modal>
    </DialogTrigger>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    defaultSelectedKey: 'Ansök'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Primary`,`Medium`,`Contained`,`Vertical`,`DisabledTabs`,`InModal`,`DefaultSelectedKey`,`Controlled`,`MoreItemsThanChildren`]}))();export{w as Contained,k as Controlled,O as DefaultSelectedKey,E as DisabledTabs,D as InModal,C as Medium,A as MoreItemsThanChildren,S as Primary,T as Vertical,j as __namedExportsOrder,x as default};