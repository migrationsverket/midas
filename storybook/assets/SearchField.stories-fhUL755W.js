import{r as m,f as l,j as t}from"./iframe-iIM7yFlw.js";import{S as d}from"./SearchField-BUj_rzVR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C2Q2mZ5U.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DNy6buAm.js";import"./clsx-B-dksMZM.js";import"./Form-BThFu9wJ.js";import"./useFocusRing-CERt57Nt.js";import"./index-C-jrAZ8o.js";import"./index-DvWNh13S.js";import"./Input-B6Xwy6Dy.js";import"./Hidden-pJH8oqvO.js";import"./Button-XY1USx81.js";import"./useLabels-BYU3vliF.js";import"./useButton-BOKRtXXu.js";import"./FieldError-BJhyn0Bc.js";import"./Text-CpJA3Ugt.js";import"./clsx-Ciqy0D92.js";import"./Text-GrSmyAjf.js";import"./RSPContexts-83tn9EqZ.js";import"./Group--U88wz4S.js";import"./useControlledState-CjC15qhB.js";import"./useLocalizedStringFormatter-CVQ2svrB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B2mgeuZL.js";import"./useField-Df6YKAwX.js";import"./TextField.module-DdivwlC8.js";import"./search-Dnv3AO13.js";import"./createLucideIcon-BWICqhq6.js";import"./x-BJvrnR5U.js";import"./useLocalizedStringFormatter-CVsIIBgW.js";import"./Button-D34JSMMc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BIQkIPH_.js";import"./Collection-CyxkDkja.js";import"./index-CZ1Ul0RJ.js";import"./DragAndDrop-Bc3hycTq.js";import"./getScrollParent-LhiTx7mo.js";import"./scrollIntoView-DCsIsjsr.js";import"./SelectionIndicator-BVwb6FSQ.js";import"./SelectionManager-bMjJz1Tm.js";import"./useEvent-D1Z-PedL.js";import"./useDescription-CJa9wdXg.js";import"./inertValue-D3JkNa-m.js";import"./useHighlightSelectionDescription-DamoJUgT.js";import"./useUpdateEffect-B_A4rWYw.js";import"./ListKeyboardDelegate-8Cq9jrW8.js";import"./useHasTabbableChild-BlSt_IBm.js";import"./Checkbox-BWMnJYkd.js";import"./check-DtMTLYJr.js";import"./useToggleState-CATFmAx4.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
