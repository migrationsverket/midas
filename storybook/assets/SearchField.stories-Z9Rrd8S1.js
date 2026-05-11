import{r as m,f as l,j as t}from"./iframe-CxnkivWk.js";import{S as d}from"./SearchField-dhOKRkjF.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CsvslJ3I.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D9spTQed.js";import"./clsx-B-dksMZM.js";import"./Form-DkPx28L8.js";import"./useFocusRing-DuH0mTQw.js";import"./index-D6J4-gBr.js";import"./index-BAOnkMzS.js";import"./Input-D9JcCxco.js";import"./Hidden-DV_3dmeB.js";import"./Button-bNvppfaR.js";import"./useLabel-DAx5WPkE.js";import"./useLabels-Dvg-ZEsL.js";import"./useButton-C_SSCC3h.js";import"./FieldError-CXKQ23yv.js";import"./Text-C1PtMghN.js";import"./clsx-Ciqy0D92.js";import"./Text-DEFKyO3K.js";import"./RSPContexts-BoJ1S5Xk.js";import"./Group-BNGUzLFf.js";import"./useControlledState-DslVItvC.js";import"./useLocalizedStringFormatter-B8oxEIA6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BIzTlx2_.js";import"./useField-B3iEvv-2.js";import"./TextField.module-DdivwlC8.js";import"./search-vzbfH0Ob.js";import"./createLucideIcon-DTCD7Iny.js";import"./x-CesJmbak.js";import"./useLocalizedStringFormatter-Byuqcgqc.js";import"./Button-gL8l0gpP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CHjZ0tZh.js";import"./Collection-CXm-x1nl.js";import"./index-B3NRX8rx.js";import"./DragAndDrop-BSWvojsI.js";import"./getScrollParent-ClxdokLI.js";import"./scrollIntoView-CctMTOtZ.js";import"./SelectionIndicator-DnuaDN2e.js";import"./SelectionManager-Cl7E85EL.js";import"./useEvent-CQPjNeLr.js";import"./useDescription-DJZJclYp.js";import"./inertValue-BwBYHasu.js";import"./useHighlightSelectionDescription-wKujnCol.js";import"./useUpdateEffect-CpukhZt0.js";import"./ListKeyboardDelegate-1o8DOqqA.js";import"./useHasTabbableChild-BLeWALU-.js";import"./Checkbox-GNEh45uS.js";import"./check-CFYs0Agm.js";import"./useToggleState-rJ8EvEdc.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
