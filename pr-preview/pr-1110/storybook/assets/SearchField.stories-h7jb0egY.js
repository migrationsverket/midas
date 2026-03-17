import{r as m,f as l,j as t}from"./iframe-BLfzYH9C.js";import{S as d}from"./SearchField-CnSnwZnb.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-6-_wts_K.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BRpuf71A.js";import"./utils-D0dfH4vr.js";import"./useLocalizedStringFormatter-Cc04N7q5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CE_JM4y7.js";import"./useFocusRing-F01J-ZUp.js";import"./index-BEL0ZsXZ.js";import"./index-DhCXTl7z.js";import"./useFormValidation-YSQ6LHA7.js";import"./useField-DKtJjQd8.js";import"./Button-CMX4o17j.js";import"./Hidden-N269CFB0.js";import"./useLabels-Wx4YnUYv.js";import"./useButton-Bx_5EIaY.js";import"./search-DnVi2RWq.js";import"./createLucideIcon-CD_jUR-R.js";import"./ClearButton-CZ5y_Yw5.js";import"./x-C-j_grLj.js";import"./Button-sSCuqLNu.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-mYyUkQYg.js";import"./VisuallyHidden-_5qjtK7j.js";import"./FieldError-BSEuC_KV.js";import"./Text-Cc2e18q6.js";import"./Text-56NGX4CE.js";import"./RSPContexts-BNbJSQvo.js";import"./Collection-DFEsajZM.js";import"./index-DtV-80Z9.js";import"./DragAndDrop-DDw7peB6.js";import"./getScrollParent-pMGfvvbY.js";import"./scrollIntoView-B8nL968g.js";import"./SelectionIndicator-BfekULxp.js";import"./SelectionManager-qSVT5I_Q.js";import"./useEvent-xhNamUK9.js";import"./useDescription-Dwgsbzew.js";import"./inertValue-C2HNM4JU.js";import"./useHighlightSelectionDescription-OovWuj3K.js";import"./useUpdateEffect-SBRqOirX.js";import"./ListKeyboardDelegate-CaluARbj.js";import"./useHasTabbableChild-xGrYgkGi.js";import"./Checkbox-BQElW8sL.js";import"./Form-cxB3ur0K.js";import"./check-J-IiiAqD.js";import"./useToggleState-DMIXjiMK.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
