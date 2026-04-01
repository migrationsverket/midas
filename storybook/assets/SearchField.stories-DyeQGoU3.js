import{r as m,f as l,j as t}from"./iframe-C_2Po1qD.js";import{S as d}from"./SearchField-SVUH6y5B.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D54o5loZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BoKSmqfj.js";import"./clsx-B-dksMZM.js";import"./Form-DF4m-Gx4.js";import"./useFocusRing-BUXHOBJT.js";import"./index-D4Zi599j.js";import"./index-CUY9Xica.js";import"./Input-CXKYEgFS.js";import"./Hidden-JqaEh-jr.js";import"./Button-B4BJcFaK.js";import"./useLabel-ZZAqWazw.js";import"./useLabels-DTlsntHT.js";import"./useButton-C9tFcCTE.js";import"./FieldError-g89TDsVb.js";import"./Text-CSVa2wh5.js";import"./clsx-Ciqy0D92.js";import"./Text-DCF_RRxK.js";import"./RSPContexts-BAtJ9VDW.js";import"./Group-B6-48JTq.js";import"./useControlledState-DD8Y7tdb.js";import"./useLocalizedStringFormatter-DG7dszbR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DA4h2RDb.js";import"./useField-Q_sOPIFc.js";import"./TextField.module-DdivwlC8.js";import"./search-95RBC2F9.js";import"./createLucideIcon-Cz_UZZWy.js";import"./x-BojtU4Mi.js";import"./useLocalizedStringFormatter-DvhmujFD.js";import"./Button-BV8yLb9D.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BezuJMNy.js";import"./Collection-sgi7VjZW.js";import"./index-YV5ItWK0.js";import"./DragAndDrop-hU41cGX5.js";import"./getScrollParent-D4y-S3mv.js";import"./scrollIntoView-BtZvMRNg.js";import"./SelectionIndicator-EiKEOgFF.js";import"./SelectionManager-ChdUGaRL.js";import"./useEvent-BbapqdAS.js";import"./useDescription-01jD8vLc.js";import"./inertValue-DLLSpNEw.js";import"./useHighlightSelectionDescription-B2WB4cTs.js";import"./useUpdateEffect-CK89GVp1.js";import"./ListKeyboardDelegate-CjdNNn88.js";import"./useHasTabbableChild-frxa-WhG.js";import"./Checkbox-Br3MoC4h.js";import"./check-BrK2Yjp4.js";import"./useToggleState-DW4lN63t.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
