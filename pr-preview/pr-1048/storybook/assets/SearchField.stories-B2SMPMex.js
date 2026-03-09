import{r as m,f as l,j as t}from"./iframe-izS6BN6y.js";import{S as d}from"./SearchField-C7ELoGlL.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B4MBWbjU.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ComdA_qm.js";import"./utils-Bas1Ofad.js";import"./useLocalizedStringFormatter-DFQ1l-q1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bye0e0Vn.js";import"./useFocusRing-B6uM1GPB.js";import"./index-Clqx6h6T.js";import"./index-2wZtggJW.js";import"./useFormValidation-DUyqthVL.js";import"./useField-BtyYT5I6.js";import"./Button-DjOmw-p7.js";import"./Hidden-DxoOFtw1.js";import"./useLabels-CepOd2Z4.js";import"./useButton-nZ9At_c5.js";import"./search-BgDmgXvX.js";import"./createLucideIcon-lSEbjSVl.js";import"./ClearButton-C40URNAV.js";import"./Button-BJYTdbg5.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CiJzgYQ0.js";import"./VisuallyHidden-C7bQWUTs.js";import"./x-CSJ_lR3e.js";import"./FieldError-CJZEulkW.js";import"./Text-B6_RlQWu.js";import"./Text-CJepktCx.js";import"./RSPContexts-CPQUc-c6.js";import"./Collection-BZZPf5u-.js";import"./index-D0u9tUkp.js";import"./DragAndDrop-DgOGgeO0.js";import"./getScrollParent-Dt0r2HDa.js";import"./scrollIntoView-geoDnyCX.js";import"./SelectionIndicator-DQamjTsW.js";import"./SelectionManager-BuiluRNF.js";import"./useEvent-CrtcwO7U.js";import"./useDescription-9nup2ndP.js";import"./inertValue-BaOhPyBj.js";import"./useHighlightSelectionDescription-7BNXzDmP.js";import"./useUpdateEffect-CJvcED0P.js";import"./ListKeyboardDelegate-MJ3MficC.js";import"./useHasTabbableChild-DCYMtO4z.js";import"./Checkbox-C16FtuC4.js";import"./Form-pZC3lHBv.js";import"./check-DZU9CKV0.js";import"./useToggleState-DcBtXzgJ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
