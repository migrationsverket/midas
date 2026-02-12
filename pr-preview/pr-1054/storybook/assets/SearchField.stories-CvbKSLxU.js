import{r as m,f as l,j as t}from"./iframe-CYK4t1Gh.js";import{S as d}from"./SearchField-CrO9tGKc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cw8St9qG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D_0fPRZq.js";import"./utils-DBHsElOT.js";import"./useLocalizedStringFormatter-BN4ru8sL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-7nuyCBDw.js";import"./useFocusRing-DWc7f6DB.js";import"./index-BosHGsFI.js";import"./index-CUCu8Kx5.js";import"./useFormValidation-BM9SNmH0.js";import"./useField-BNsk_9RN.js";import"./Button-DECZbtu5.js";import"./Hidden-Dhsxn_Nf.js";import"./useLabels-Dbxh0r6V.js";import"./useButton-O6-M5fpP.js";import"./search-Dba_thpj.js";import"./createLucideIcon-C53JEkqI.js";import"./ClearButton-F7rNhDnY.js";import"./Button-BE1wltEw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZIAFqP_.js";import"./VisuallyHidden-4kkr3OtB.js";import"./x-DW5q0vat.js";import"./FieldError-BeOTnay7.js";import"./Text-Ch4tHKq-.js";import"./Text-B_DUIRzD.js";import"./RSPContexts-BcM39O5Y.js";import"./Collection-DVFlaGY-.js";import"./index-BVtMdV-Z.js";import"./DragAndDrop-DQn2Qj1u.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DzLatRQE.js";import"./SelectionManager-Cq6Z9nU1.js";import"./useEvent-GOx7wBQE.js";import"./useDescription-BiSEYNrX.js";import"./inertValue-BPdk2VYL.js";import"./useHighlightSelectionDescription-D4GM-v72.js";import"./useUpdateEffect-Co--t0vY.js";import"./ListKeyboardDelegate-Dof0oKnX.js";import"./useHasTabbableChild-KLBhPfiT.js";import"./Checkbox-B7OxZ6kJ.js";import"./Form-H-NWp1S4.js";import"./check-ojENnnzk.js";import"./useToggleState-DulFlVjF.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
