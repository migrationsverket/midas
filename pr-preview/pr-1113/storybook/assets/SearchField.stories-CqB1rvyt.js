import{r as m,f as l,j as t}from"./iframe-DmYAiZdS.js";import{S as d}from"./SearchField-zQdhd1e1.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DWnz2bOX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ce8T3nBz.js";import"./clsx-B-dksMZM.js";import"./Form-MQFNPBez.js";import"./useFocusRing-uVSx56YJ.js";import"./index-Clg0oazY.js";import"./index-BekCUKef.js";import"./Input-Lx8fWuo8.js";import"./Hidden-DSqyIKF7.js";import"./Button-B_13vb86.js";import"./useLabels-o8QMpPqb.js";import"./useButton-DhL-fajU.js";import"./FieldError-UD24mey6.js";import"./Text-Cpi_AAzk.js";import"./clsx-Ciqy0D92.js";import"./Text-DrUi_0Jd.js";import"./RSPContexts-6HyyfxyX.js";import"./Group-CDnaQ8lB.js";import"./useControlledState-C0DEKgGJ.js";import"./useLocalizedStringFormatter-BxKtkIxd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUFV13OO.js";import"./useField-BQBCqG7h.js";import"./TextField.module-DdivwlC8.js";import"./search-jr1Wzets.js";import"./createLucideIcon-Cd1S2Ifo.js";import"./x-BXdaKO9_.js";import"./useLocalizedStringFormatter-BrrMXkxk.js";import"./Button-CF56JNsj.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-HoFr5-6u.js";import"./Collection-0fQlzL78.js";import"./index-CQQkbUYQ.js";import"./DragAndDrop-Cyf2JFh7.js";import"./getScrollParent-Bu3T6bJu.js";import"./scrollIntoView-7nJ5XGAi.js";import"./SelectionIndicator-CMBrlIkZ.js";import"./SelectionManager-BVp_eIxO.js";import"./useEvent-BzBaGFQj.js";import"./useDescription-Bg_KyiAu.js";import"./inertValue-DCZ6kvrx.js";import"./useHighlightSelectionDescription-BjuFKQ2c.js";import"./useUpdateEffect-BZ7Dl93C.js";import"./ListKeyboardDelegate-CCjCEqng.js";import"./useHasTabbableChild-NkJVEwj1.js";import"./Checkbox-Sl9syU6C.js";import"./check-Bw_ThLBT.js";import"./useToggleState-BkT2Pvk_.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
