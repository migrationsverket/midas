import{r as m,f as l,j as t}from"./iframe-D0l--c6C.js";import{S as d}from"./SearchField-CiB0uzD_.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CDF7MxV_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DG9hXw45.js";import"./utils-VeCz3m0s.js";import"./useLocalizedStringFormatter-DPchQlap.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D1yyU7Zd.js";import"./useFocusRing-TJh2D1Hm.js";import"./index-DoExQatV.js";import"./index-RphitS5C.js";import"./useFormValidation-DKycCepU.js";import"./useField-CkNB1FqH.js";import"./Button-BerIw-Lw.js";import"./Hidden-BF6VB1MU.js";import"./useLabels-CSsYCRJ9.js";import"./useButton-Dk6hNhi1.js";import"./search-spSWilSq.js";import"./createLucideIcon-DBbK9uba.js";import"./ClearButton-Yq_w5BcC.js";import"./Button-D47vYwiU.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BVxlra1v.js";import"./VisuallyHidden-EuNheofa.js";import"./x-CMJI3hQn.js";import"./FieldError-Bk0AsuFn.js";import"./Text-BpMUK5iu.js";import"./Text-evSykvIm.js";import"./RSPContexts-OtAouDzC.js";import"./Collection-Fbt71xYE.js";import"./index-CAkoeHbW.js";import"./DragAndDrop-Cbds776s.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D_FwF8a6.js";import"./SelectionManager-DneqIR5T.js";import"./useEvent-G9uvljhU.js";import"./useDescription-Dv4NgNk6.js";import"./inertValue-CwIGvIHB.js";import"./useHighlightSelectionDescription-B2V1igzi.js";import"./useUpdateEffect-BOa_4-hC.js";import"./ListKeyboardDelegate-VEziE7E2.js";import"./useHasTabbableChild-HSgvgMj4.js";import"./Checkbox-Co0s2Za5.js";import"./Form-D7_1EBwv.js";import"./check-BiT50775.js";import"./useToggleState-DVw3E8e2.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
