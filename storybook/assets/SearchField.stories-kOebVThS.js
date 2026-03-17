import{r as m,f as l,j as t}from"./iframe--IbK7uvL.js";import{S as d}from"./SearchField-DYySuNF_.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DtD7bMEE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-xHQ8O9W1.js";import"./utils-CA7lVtot.js";import"./useLocalizedStringFormatter-Dg5HXGYt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CjddA_Zz.js";import"./useFocusRing-D2xoM2VM.js";import"./index-BZz7yXlj.js";import"./index-CXKCK8P0.js";import"./useFormValidation-CKM46q2q.js";import"./useField-CsTm_RNd.js";import"./Button-Re0Yy6Pp.js";import"./Hidden-BExZVod8.js";import"./useLabels-rslA135_.js";import"./useButton-Cojk1q0i.js";import"./search-D5S8-feP.js";import"./createLucideIcon-CZI6jzSG.js";import"./ClearButton-KZ3k3KFN.js";import"./x-CRmhj2OD.js";import"./Button-BYHfDOH9.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Dr2L-_6O.js";import"./VisuallyHidden-CYG4Jpuo.js";import"./FieldError-C7TTOr5D.js";import"./Text-fLskqfUb.js";import"./Text-qvWOJ16d.js";import"./RSPContexts-CuIQ88x9.js";import"./Collection-DYP0TvTP.js";import"./index-DQ8CC9Ma.js";import"./DragAndDrop--28UDswJ.js";import"./getScrollParent-BemRRphk.js";import"./scrollIntoView-DpbtecG_.js";import"./SelectionIndicator-BVtUFBWh.js";import"./SelectionManager-hB9sSLiJ.js";import"./useEvent-C2aKNcd9.js";import"./useDescription-C_IbgAiL.js";import"./inertValue-B1UVi7tr.js";import"./useHighlightSelectionDescription-Djkygu2j.js";import"./useUpdateEffect-CEMWzQl_.js";import"./ListKeyboardDelegate-CIOrWFjf.js";import"./useHasTabbableChild-DYr7WT5y.js";import"./Checkbox-Blc3GeQn.js";import"./Form-SHW1w9sE.js";import"./check-Btzl49pF.js";import"./useToggleState-BSsCBfRe.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
