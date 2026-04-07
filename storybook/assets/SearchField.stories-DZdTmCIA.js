import{r as m,f as l,j as t}from"./iframe-C0gItKGI.js";import{S as d}from"./SearchField-Q5WKlAxm.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BQ7CXcwB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C4BmiKeT.js";import"./clsx-B-dksMZM.js";import"./Form-Dt3RCtH5.js";import"./useFocusRing-D6zHA-j4.js";import"./index-JTUL9Zza.js";import"./index-DYJlb7vK.js";import"./Input-CF3ebiYZ.js";import"./Hidden-CxiPA8K1.js";import"./Button-o0QsNuSA.js";import"./useLabel-DSorbXz4.js";import"./useLabels-B6zfi_e6.js";import"./useButton-Dx1KDGRQ.js";import"./FieldError-X-1CPtGa.js";import"./Text-CP3oPRRG.js";import"./clsx-Ciqy0D92.js";import"./Text-COsMTm1B.js";import"./RSPContexts-Cl1Py3Cy.js";import"./Group-BzsLEz3W.js";import"./useControlledState-BBjdJp7n.js";import"./useLocalizedStringFormatter-CJETvB2q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CW9mRz8n.js";import"./useField-BOZozsGE.js";import"./TextField.module-DdivwlC8.js";import"./search-osfdYjJg.js";import"./createLucideIcon-jAmYwIsU.js";import"./x-BC7OWJ1B.js";import"./useLocalizedStringFormatter-CX1JQrfE.js";import"./Button-ByBsZf-O.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B6iVGiF3.js";import"./Collection-DnowcdnP.js";import"./index-CHNDbKyi.js";import"./DragAndDrop-QGwyKZAZ.js";import"./getScrollParent-FaTrNgdQ.js";import"./scrollIntoView-CsIkDecr.js";import"./SelectionIndicator-D3r10E2K.js";import"./SelectionManager-D-bxzIQz.js";import"./useEvent-B1QAVb7V.js";import"./useDescription-DN4iRcxV.js";import"./inertValue-Bx1gSyfJ.js";import"./useHighlightSelectionDescription-C1e_kdAt.js";import"./useUpdateEffect-CpDruFW_.js";import"./ListKeyboardDelegate-D4HGFgQm.js";import"./useHasTabbableChild-BlEioy1b.js";import"./Checkbox-nKYOKtnD.js";import"./check-o8WaH5iI.js";import"./useToggleState-DBDwDn_i.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
