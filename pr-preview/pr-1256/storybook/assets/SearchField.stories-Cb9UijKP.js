import{r as m,f as l,j as t}from"./iframe-DcpPkcOs.js";import{S as d}from"./SearchField-Bt8mI9lc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-mGrGRvoi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CXltNwJi.js";import"./clsx-B-dksMZM.js";import"./Form-B9OWvrpD.js";import"./useFocusRing-C7oRwYv0.js";import"./index-B5JE_P2G.js";import"./index-BObIBW6r.js";import"./Input-DTsEeFve.js";import"./Hidden-DC53IPGT.js";import"./Button-Ct2gBhbQ.js";import"./useLabel-CzBIgrEB.js";import"./useLabels-L34wTJFT.js";import"./useButton-1kWau5nf.js";import"./FieldError-Cl9GqMGN.js";import"./Text-gI7geXGi.js";import"./clsx-Ciqy0D92.js";import"./Text-BV9SFXbp.js";import"./RSPContexts-BUPHzZx4.js";import"./Group-CWGdMi5E.js";import"./useControlledState-CqQWqGWO.js";import"./useLocalizedStringFormatter-CuAPqpgo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6450-3pf.js";import"./useField-RZdE92CO.js";import"./TextField.module-DdivwlC8.js";import"./search-BMiBVHly.js";import"./createLucideIcon-CmxgNO3A.js";import"./x-CuQKBrfl.js";import"./useLocalizedStringFormatter-Dei12d-p.js";import"./Button-Bt5uFCnx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-WVnnRw_3.js";import"./Collection-rQ5njRkg.js";import"./index-nmIxaWMa.js";import"./DragAndDrop-C5Rv6tHL.js";import"./getScrollParent-Ck1J4Oi-.js";import"./scrollIntoView-DIZ8_NQ2.js";import"./SelectionIndicator-D1NBEiqF.js";import"./SelectionManager-BjMDwzbf.js";import"./useEvent-BNdFNVTO.js";import"./useDescription-BvGFSiIZ.js";import"./inertValue-DCedK7cF.js";import"./useHighlightSelectionDescription-Dy7VetfC.js";import"./useUpdateEffect-Bnr8u_MG.js";import"./ListKeyboardDelegate-DwdjdjQX.js";import"./useHasTabbableChild-hNnvCU20.js";import"./Checkbox-RHN-X6T0.js";import"./check-Cp2Ww4c6.js";import"./useToggleState-CrKKwboJ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
