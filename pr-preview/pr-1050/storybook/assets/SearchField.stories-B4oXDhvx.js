import{r as m,f as l,j as t}from"./iframe-uFwHQTNd.js";import{S as d}from"./SearchField-DkoxglVs.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-YWYRLTfq.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAmouKKq.js";import"./utils-Cet0gmdV.js";import"./useLocalizedStringFormatter-CkgKWy3S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D4QrtLz3.js";import"./useFocusRing-DWJqR67C.js";import"./index-Cx3Wd4xN.js";import"./index-BfuYg2Hk.js";import"./useFormValidation-DQ0mQ44x.js";import"./useField-BnIohbzV.js";import"./Button-DCnsWAw_.js";import"./Hidden-DBwebcBs.js";import"./useLabels-CkeV1IcK.js";import"./useButton-DGskpFYY.js";import"./search-BQfdDcq9.js";import"./createLucideIcon-Bh2gVQle.js";import"./ClearButton-BZIT1DHj.js";import"./Button-LM3ov4QZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DzDR0k3O.js";import"./VisuallyHidden-D1ozFAVq.js";import"./x-F0i77h6j.js";import"./FieldError-Dm-69Wx0.js";import"./Text-DdRPQvtu.js";import"./Text-BPL1bQ16.js";import"./RSPContexts-C2ImaV6y.js";import"./Collection-Dd4cc-MY.js";import"./index-C3ZTFjKu.js";import"./DragAndDrop-BqRzzvQi.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-diRVmffe.js";import"./SelectionManager-BYMrJ6yE.js";import"./useEvent-CsuJfCqG.js";import"./useDescription-BQIjqc-M.js";import"./inertValue-C4ea7utY.js";import"./useHighlightSelectionDescription-Ch_7cUgp.js";import"./useUpdateEffect-DdaYlkO5.js";import"./ListKeyboardDelegate-DwVgXDPg.js";import"./useHasTabbableChild-Tp7_taW0.js";import"./Checkbox-BtuFiQ0l.js";import"./Form-CS9_f0fo.js";import"./check-DrZWBqnc.js";import"./useToggleState-HZnwEgT1.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
