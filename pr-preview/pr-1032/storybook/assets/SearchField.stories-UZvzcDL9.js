import{r as m,f as l,j as t}from"./iframe-DRirf2Ys.js";import{S as d}from"./SearchField-VAONe4AS.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BIUWwW3y.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CQDYwQIF.js";import"./utils-BC-9mfhg.js";import"./useLocalizedStringFormatter-Czvg_dgK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D0_G5bPN.js";import"./useFocusRing-CJQJQ7PW.js";import"./index-hP6JGvby.js";import"./index-Drx8rBd8.js";import"./useFormValidation-Dl6NIxjf.js";import"./useField-CZKO8xFK.js";import"./Button-kU1Por_z.js";import"./Hidden-lhPivziv.js";import"./useLabels-Ppos1hYn.js";import"./useButton-Dy4vSFCX.js";import"./search-YWjJfySP.js";import"./createLucideIcon-pFgQkBEQ.js";import"./ClearButton-Ck9FdSBw.js";import"./Button-Bbxz1V1l.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C7yUVNG5.js";import"./VisuallyHidden-DEc4J7Zj.js";import"./x-DfCsYV9b.js";import"./FieldError-Ciz7MEhw.js";import"./Text-haWdKGMd.js";import"./Text-Cz4JRdhg.js";import"./RSPContexts-BWwgVI6N.js";import"./Collection-BCdofZC4.js";import"./index-D1bX05Ry.js";import"./DragAndDrop-BoSl09Iv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-3e4FMOUn.js";import"./SelectionManager-Ba3R1H4j.js";import"./useEvent-D0f8TLM5.js";import"./useDescription-DxWGvbMR.js";import"./inertValue-ghvyC54Q.js";import"./useHighlightSelectionDescription-Ci79xVoA.js";import"./useUpdateEffect-C6xBX3q5.js";import"./ListKeyboardDelegate-BniJMMCb.js";import"./useHasTabbableChild-PFyOj284.js";import"./Checkbox-CIn_PaKR.js";import"./Form-DDOtMx66.js";import"./check-CjdLraVn.js";import"./useToggleState-BBu3mmRL.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
