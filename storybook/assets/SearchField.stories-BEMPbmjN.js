import{r as m,f as l,j as t}from"./iframe-CKu8C240.js";import{S as d}from"./SearchField-iywzue6X.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D1hKD59M.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CLX7J-q0.js";import"./clsx-B-dksMZM.js";import"./Form-2G0gdMs3.js";import"./useFocusRing-IcTt8PE9.js";import"./index-CxrKtYp1.js";import"./index-psXWBm0q.js";import"./Input-DurQgjTr.js";import"./Hidden-C6ArxBUW.js";import"./Button-IlsrLhR8.js";import"./useLabel-MFPilgOm.js";import"./useLabels-CRoKZlxn.js";import"./useButton-g3DD9S56.js";import"./FieldError-BcSOiHDV.js";import"./Text-BIK_Bqtk.js";import"./clsx-Ciqy0D92.js";import"./Text-B_i6Ec48.js";import"./RSPContexts-BYfsL_eH.js";import"./Group-Bha_k1zj.js";import"./useControlledState-DDnLcn-b.js";import"./useLocalizedStringFormatter-D8TEkIPn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BlKDdUv5.js";import"./useField-DqmtCAAT.js";import"./TextField.module-DdivwlC8.js";import"./search-DHZG3aPn.js";import"./createLucideIcon-B2wZBV1e.js";import"./x-BRw1fyzP.js";import"./useLocalizedStringFormatter-BcHgs7SS.js";import"./Button-OIliGZdS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DpKSD7VN.js";import"./Collection-DIgITLLQ.js";import"./index-X6seohsz.js";import"./DragAndDrop-B6Mt2P4K.js";import"./getScrollParent-BKhUwAVM.js";import"./scrollIntoView-BgJofm9P.js";import"./SelectionIndicator-BpVpDmUV.js";import"./SelectionManager-crKVw0Rp.js";import"./useEvent-yXAGKDbR.js";import"./useDescription-K8aGsr7r.js";import"./inertValue-CL9XV8eO.js";import"./useHighlightSelectionDescription-qYHd4tPk.js";import"./useUpdateEffect-DxvJCU41.js";import"./ListKeyboardDelegate-DLOXwcoE.js";import"./useHasTabbableChild-C5FhZttD.js";import"./Checkbox-DGkKekYK.js";import"./check-CDZcgSAc.js";import"./useToggleState-CZrGjpNx.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
