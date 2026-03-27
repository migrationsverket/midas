import{r as m,f as l,j as t}from"./iframe-XIh9uYhW.js";import{S as d}from"./SearchField-BEqQmGLv.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DdUiz4F0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-QqHpIW-4.js";import"./clsx-B-dksMZM.js";import"./Form-uKASpG5T.js";import"./useFocusRing-BdFa1UIk.js";import"./index-BudLXS22.js";import"./index-BA9v5sbd.js";import"./Input-CRfLYA6t.js";import"./Hidden-l3oUe_Z9.js";import"./Button-BsucxUz-.js";import"./useLabel-bPnROONS.js";import"./useLabels-BwsWDKVI.js";import"./useButton-DN2W_ujz.js";import"./FieldError-CImeX3LJ.js";import"./Text-DrkaIHH8.js";import"./clsx-Ciqy0D92.js";import"./Text-FP4KMc3f.js";import"./RSPContexts-Bn8Ylugu.js";import"./Group-Bqm2qrBS.js";import"./useControlledState-CqcNfIKv.js";import"./useLocalizedStringFormatter-C8j3kjHh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-PrAZ5utE.js";import"./useField-DZimw16l.js";import"./TextField.module-DdivwlC8.js";import"./search-B7lGH4QG.js";import"./createLucideIcon-C-gCmxMp.js";import"./x-Drs9DY4g.js";import"./useLocalizedStringFormatter-BC9Xw6Ar.js";import"./Button-D1gmeqQE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C1E6EF0U.js";import"./Collection-BQotuCBv.js";import"./index-B-OkyOMa.js";import"./DragAndDrop-LsPFcnrr.js";import"./getScrollParent-COGKGPLi.js";import"./scrollIntoView-CUZdJYQn.js";import"./SelectionIndicator-C8nA4_hf.js";import"./SelectionManager-DXqANVb2.js";import"./useEvent-BJnJ7qkn.js";import"./useDescription-DhJgGo4l.js";import"./inertValue-C3K_SGAG.js";import"./useHighlightSelectionDescription-DAVxVL_0.js";import"./useUpdateEffect-MxP5rWbX.js";import"./ListKeyboardDelegate-9proyAMB.js";import"./useHasTabbableChild-VY-roxio.js";import"./Checkbox-Yk12GHn1.js";import"./check-BJpX-BVw.js";import"./useToggleState-C9aK7DLl.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
