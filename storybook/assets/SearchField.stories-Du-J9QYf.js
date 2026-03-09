import{r as m,f as l,j as t}from"./iframe-kd_AoAeF.js";import{S as d}from"./SearchField-nryNRSBS.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BbXt3BrS.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BFxViZ9m.js";import"./utils-rNhv6-p5.js";import"./useLocalizedStringFormatter-B8gC_nki.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSiKOPgr.js";import"./useFocusRing-DAtTESdQ.js";import"./index-Co1AZiIR.js";import"./index-C8QvYmrM.js";import"./useFormValidation-CrHP7G67.js";import"./useField-D1DMzf98.js";import"./Button-DeJMe7Hb.js";import"./Hidden-CVTUXncE.js";import"./useLabels-0qTjz8uQ.js";import"./useButton-CrwZeUwe.js";import"./search-CeLq2ojX.js";import"./createLucideIcon-DYqnFHX_.js";import"./ClearButton-_FpoNXdR.js";import"./Button-CGXac9yi.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DfD4_B_y.js";import"./VisuallyHidden-DSv4Z3AK.js";import"./x-BKJs55h2.js";import"./FieldError-n3fvYIN_.js";import"./Text-0B35jr2S.js";import"./Text-DhCHaZIC.js";import"./RSPContexts-Dduov18O.js";import"./Collection-CElgCNYt.js";import"./index-CR_QTErF.js";import"./DragAndDrop-_eFwOkDq.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BafoNrVj.js";import"./SelectionManager-CXzDYAc2.js";import"./useEvent-ClTqOmjP.js";import"./useDescription-XJhiBPR3.js";import"./inertValue-SEnZDqJX.js";import"./useHighlightSelectionDescription-dwmbKFpV.js";import"./useUpdateEffect-BLWRZr-q.js";import"./ListKeyboardDelegate-DG2LI3S1.js";import"./useHasTabbableChild-BTosfFfQ.js";import"./Checkbox-BNhg3aBv.js";import"./Form-B0g7hQdX.js";import"./check-DTDEobiG.js";import"./useToggleState-mjVjjFbJ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
