import{r as m,f as l,j as t}from"./iframe-DsyUTAcE.js";import{S as d}from"./SearchField-Bt-ncPOw.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DMkmvN0E.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BnWDXxML.js";import"./clsx-B-dksMZM.js";import"./Form-CGaVeMLz.js";import"./useFocusRing-Cx6ToNCy.js";import"./index-Cm0emSOI.js";import"./index-DUe59CJc.js";import"./Input-Cmaom0ys.js";import"./Hidden-C6TlAeVz.js";import"./Button-CyvfdMVt.js";import"./useLabel-BZ281jnk.js";import"./useLabels-B-uO_ouR.js";import"./useButton-zhU8f6Q9.js";import"./FieldError-CUL53TAh.js";import"./Text-BcSWoPTn.js";import"./clsx-Ciqy0D92.js";import"./Text-BbelKnYK.js";import"./RSPContexts-Bq3W9l8U.js";import"./Group-fE0kJLiO.js";import"./useControlledState-CUD0SDj1.js";import"./useLocalizedStringFormatter-Bt27mnVB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CXj02fYa.js";import"./useField-CZQg1P7z.js";import"./TextField.module-DdivwlC8.js";import"./search-BzLI8Z_u.js";import"./createLucideIcon-BXEX14cZ.js";import"./x-zGwK5Qc9.js";import"./useLocalizedStringFormatter-d708RcER.js";import"./Button-D3VEHZPU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-hue3FDJw.js";import"./Collection-BkFaDfpb.js";import"./index-DKebHK_B.js";import"./DragAndDrop-CcN1KA_p.js";import"./getScrollParent-dZX6mtkV.js";import"./scrollIntoView-C7SZHVqe.js";import"./SelectionIndicator-jhAgBAsJ.js";import"./SelectionManager-DWstKPeT.js";import"./useEvent-CSHJ_TNr.js";import"./useDescription-umLegZgN.js";import"./inertValue-CWbSluor.js";import"./useHighlightSelectionDescription-DyKgUkQO.js";import"./useUpdateEffect-CUPD6Q02.js";import"./ListKeyboardDelegate-Cof7SJue.js";import"./useHasTabbableChild-Baa8wt9N.js";import"./Checkbox-_ebYPoxD.js";import"./check-Do4XVmm2.js";import"./useToggleState-Cluwmvkg.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
