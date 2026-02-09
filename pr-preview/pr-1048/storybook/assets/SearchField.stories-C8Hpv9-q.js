import{r as m,f as l,j as t}from"./iframe-BOj75HPM.js";import{S as d}from"./SearchField-hodFznSs.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BRslPt_t.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-7gBIOf2A.js";import"./utils-DiwTvY5r.js";import"./useLocalizedStringFormatter-C6wF7Mfo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6X4K6aCh.js";import"./useFocusRing-BvD21wMG.js";import"./index-tbjRw6nF.js";import"./index-DauoXUb-.js";import"./useFormValidation-CR9InUTF.js";import"./useField-Dj0XVRBs.js";import"./Button-D1stJH9t.js";import"./Hidden-DX_ysAyq.js";import"./useLabels-BszWTWtA.js";import"./useButton-rMDDSnSZ.js";import"./search-DQn0ffmn.js";import"./createLucideIcon-BmLW6X-c.js";import"./ClearButton-Dbo_lkq4.js";import"./Button-CG3q9yng.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-iBqt7kI1.js";import"./VisuallyHidden-DRoRIbBJ.js";import"./x-DHOL_7dr.js";import"./FieldError-Dn9sUL3A.js";import"./Text-KcBRsMfX.js";import"./Text-y5UsFp3a.js";import"./RSPContexts-Dd30z721.js";import"./Collection-C9umSaxr.js";import"./index-CPEUDevc.js";import"./DragAndDrop-CDwym_BN.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BJEhgAnj.js";import"./SelectionManager-DKvFADB7.js";import"./useEvent-CEhlIHx6.js";import"./useDescription-CWm0ggy2.js";import"./inertValue-DohUZGKu.js";import"./useHighlightSelectionDescription-CuFAy-_u.js";import"./useUpdateEffect-B87Bnv_d.js";import"./ListKeyboardDelegate-BswjCwMk.js";import"./useHasTabbableChild-dpWZ9tWL.js";import"./Checkbox-COwFsKdb.js";import"./Form-CWKKuFQR.js";import"./check-BHG7kA68.js";import"./useToggleState-CDTDeBh8.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
