import{r as m,f as l,j as t}from"./iframe-BUTiSP7z.js";import{S as d}from"./SearchField-DA115vEQ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DrLhktSI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BgvO5RRu.js";import"./clsx-B-dksMZM.js";import"./Form-B4-dBuGl.js";import"./useFocusRing-Ba-KD3wP.js";import"./index-xHN4e2Es.js";import"./index-DtSReIsm.js";import"./Input-45D5XBuv.js";import"./Hidden-ByRZ-jrH.js";import"./Button-Bo24jbF_.js";import"./useLabel-DayWlGa1.js";import"./useLabels-BFR96MD7.js";import"./useButton-DroPnLuM.js";import"./FieldError-CYEkkCc9.js";import"./Text-D5N8Dzak.js";import"./clsx-Ciqy0D92.js";import"./Text-LYM_b1_z.js";import"./RSPContexts-DLLJ83nY.js";import"./Group-CR6JA3qy.js";import"./useControlledState-BxwH6ylP.js";import"./useLocalizedStringFormatter-PGtNsfZM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-qftoGqFa.js";import"./useField-I3F-HNPn.js";import"./TextField.module-DdivwlC8.js";import"./search-CEks0ipO.js";import"./createLucideIcon-hh9ZE-Di.js";import"./x-BTgbWRg1.js";import"./useLocalizedStringFormatter-D6S3a2W6.js";import"./Button-Ktwig2Cy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-xIEwbCvt.js";import"./Collection-DeFuXwuS.js";import"./index-tTPz6UBg.js";import"./DragAndDrop-CpSHYqfz.js";import"./getScrollParent-UEEitPqy.js";import"./scrollIntoView-BjuxrAKf.js";import"./SelectionIndicator-DqHv8nAD.js";import"./SelectionManager-Brl3pYHf.js";import"./useEvent-2q7qEvPm.js";import"./useDescription-D2qADDFs.js";import"./inertValue-C_rW_iVE.js";import"./useHighlightSelectionDescription-BEY6Cc8L.js";import"./useUpdateEffect-snUxMld7.js";import"./ListKeyboardDelegate-B0dCPn5_.js";import"./useHasTabbableChild-4Fu395ND.js";import"./Checkbox-CpuicHZF.js";import"./check-B3f1FHAL.js";import"./useToggleState-CU8dj_UD.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
