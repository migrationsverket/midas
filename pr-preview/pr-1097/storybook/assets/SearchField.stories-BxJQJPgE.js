import{r as m,f as l,j as t}from"./iframe-BwuZ39Vz.js";import{S as d}from"./SearchField-qi_nkRlR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BjIrnkwI.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CNRISZnR.js";import"./utils-Dazgo93a.js";import"./useLocalizedStringFormatter-Dlk9HRO-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-SBNGNCLl.js";import"./useFocusRing-DWqwuqDQ.js";import"./index-BYlaNIkZ.js";import"./index-Db__52FI.js";import"./useFormValidation-uPUxiMCI.js";import"./useField-Dq1pou23.js";import"./Button-Cn77Lxgi.js";import"./Hidden-C8O8FPO6.js";import"./useLabels-D0VSRyAt.js";import"./useButton-C25K8Bao.js";import"./search-BEf58DtE.js";import"./createLucideIcon-B-TCaGAA.js";import"./ClearButton-DrxjMDnw.js";import"./Button-BINP1rbK.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Ni97qJq4.js";import"./VisuallyHidden-3B0Aqf7R.js";import"./x-CW77mceo.js";import"./FieldError-6yyVufrl.js";import"./Text-zo_PZ5oe.js";import"./Text-D0CV2pqO.js";import"./RSPContexts-BQCBl8jV.js";import"./Collection-BBh9BIJ-.js";import"./index-QD538Rki.js";import"./DragAndDrop-pWVoc-EW.js";import"./getScrollParent-BDOGEtvC.js";import"./scrollIntoView-B2yrEsZZ.js";import"./SelectionIndicator-CkdMDAOI.js";import"./SelectionManager-D5lKj6m4.js";import"./useEvent-BNfr9VP-.js";import"./useDescription-DmBSG3eh.js";import"./inertValue-DBUfpJKV.js";import"./useHighlightSelectionDescription-Dm1hE6OT.js";import"./useUpdateEffect-B3YJl6kx.js";import"./ListKeyboardDelegate-B3XWqZCP.js";import"./useHasTabbableChild-Dwj-345U.js";import"./Checkbox-CG9DOk7n.js";import"./Form-Bozi1n90.js";import"./check-Bnfp9U30.js";import"./useToggleState-CkyvC_ow.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
