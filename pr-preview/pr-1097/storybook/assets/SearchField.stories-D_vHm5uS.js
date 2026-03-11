import{r as m,f as l,j as t}from"./iframe-D381uj8d.js";import{S as d}from"./SearchField-Byqy-cqc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DrgKijWL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dxnyxp1Q.js";import"./utils-BSviX3Ff.js";import"./useLocalizedStringFormatter-DU6NoriM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-svZv-tlQ.js";import"./useFocusRing-XLKEWfrJ.js";import"./index-BKX3b3m1.js";import"./index-C8AAmpqg.js";import"./useFormValidation-CPd1nK5K.js";import"./useField-C5hK99RZ.js";import"./Button-Blu5st7x.js";import"./Hidden-DtUrHuzu.js";import"./useLabels-D6WYJJ-R.js";import"./useButton-BNKAP6aC.js";import"./search-CiIgWtQK.js";import"./createLucideIcon-vVf7zZDS.js";import"./ClearButton-RRmjFfVl.js";import"./Button-BPKQXIdy.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DHOXMFVV.js";import"./VisuallyHidden-CbbcMkM6.js";import"./x-v6DOAZ4H.js";import"./FieldError-DuxnDAnQ.js";import"./Text-D3f-LNKt.js";import"./Text-DGswq3xo.js";import"./RSPContexts-CxY0kGcY.js";import"./Collection-Kmko7bqY.js";import"./index-fq6l2ph1.js";import"./DragAndDrop-Ho0xmOfJ.js";import"./getScrollParent-DpoWOL0W.js";import"./scrollIntoView-BI2NKYX3.js";import"./SelectionIndicator-Ah-ZWmU0.js";import"./SelectionManager-DLehPUhj.js";import"./useEvent-BaQbryFM.js";import"./useDescription-BQBcT-qS.js";import"./inertValue-CA98zwCD.js";import"./useHighlightSelectionDescription-DhRKN-Y2.js";import"./useUpdateEffect-B96vznzF.js";import"./ListKeyboardDelegate-BhSBcbbc.js";import"./useHasTabbableChild-7oWYkA5Q.js";import"./Checkbox-DplrDJc7.js";import"./Form-CbNo86oI.js";import"./check-D_axndaK.js";import"./useToggleState-CADrkc9w.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
