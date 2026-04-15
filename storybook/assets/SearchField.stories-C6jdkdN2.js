import{r as m,f as l,j as t}from"./iframe-th_azU5_.js";import{S as d}from"./SearchField-DRVe70zN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-hcVLQ6wA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C4VuU2um.js";import"./clsx-B-dksMZM.js";import"./Form-1MLn5vCf.js";import"./useFocusRing-BDcpBQzO.js";import"./index-CzrHA3v-.js";import"./index-BbA8n6Hq.js";import"./Input-CFo7PPij.js";import"./Hidden-BFds7gf1.js";import"./Button-wk7uPRGE.js";import"./useLabel-CYIQyZrD.js";import"./useLabels-BxY9CSFr.js";import"./useButton-u6wZaZk_.js";import"./FieldError-AfpWYpbz.js";import"./Text-hdNvr6U4.js";import"./clsx-Ciqy0D92.js";import"./Text-DELoTx3Q.js";import"./RSPContexts-DcQ_ZJZT.js";import"./Group-D0UGm2Gt.js";import"./useControlledState-kFNWgpP8.js";import"./useLocalizedStringFormatter-C0jZ500X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DPUSE9Dm.js";import"./useField-Bo84Watr.js";import"./TextField.module-DdivwlC8.js";import"./search-CbGOtHVK.js";import"./createLucideIcon-Bv08NMl0.js";import"./x-D7gAiSiz.js";import"./useLocalizedStringFormatter-Bei2ateM.js";import"./Button-CauCyY5i.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CkdA4sJp.js";import"./Collection-DVMWuvit.js";import"./index-BidItgYC.js";import"./DragAndDrop-Cz8ZsT04.js";import"./getScrollParent-BHVOeKIe.js";import"./scrollIntoView-D5fKhQtx.js";import"./SelectionIndicator-6zlY6cYw.js";import"./SelectionManager-CpaghZcb.js";import"./useEvent-tLzXOHdh.js";import"./useDescription-D59bYXVd.js";import"./inertValue-DGaZy6by.js";import"./useHighlightSelectionDescription-CEtabNVh.js";import"./useUpdateEffect-HN_jwC-A.js";import"./ListKeyboardDelegate-BScei23V.js";import"./useHasTabbableChild-BnyG_adb.js";import"./Checkbox-DFLmqaLN.js";import"./check-DuZ4pphq.js";import"./useToggleState-CVejDwO2.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
