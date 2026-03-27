import{r as m,f as l,j as t}from"./iframe-Csz20ARP.js";import{S as d}from"./SearchField-Ja4R47Z4.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C_L5aYhQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CLTlmF8J.js";import"./clsx-B-dksMZM.js";import"./Form-BfSRrjfS.js";import"./useFocusRing-86VLoSnj.js";import"./index-DgqWrau-.js";import"./index-8BKLnV0B.js";import"./Input-D6Coi_9K.js";import"./Hidden-Be3C43tB.js";import"./Button-kUaaPtXV.js";import"./useLabel-B-St2Amk.js";import"./useLabels-ChCuyKnh.js";import"./useButton-DECUyEyv.js";import"./FieldError-DCrfS5vQ.js";import"./Text-C-Hcl69m.js";import"./clsx-Ciqy0D92.js";import"./Text--2gnQNTy.js";import"./RSPContexts-CleR7f2E.js";import"./Group-BE_iKPcJ.js";import"./useControlledState-C0z1d-QQ.js";import"./useLocalizedStringFormatter-l_-wyep1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DhB9rdcz.js";import"./useField-DIH099Vh.js";import"./TextField.module-DdivwlC8.js";import"./search-CzNtenPQ.js";import"./createLucideIcon-BQ-CV6Lk.js";import"./x-BnuAwExu.js";import"./useLocalizedStringFormatter-B7OoXNKl.js";import"./Button-CwrtXb_B.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5NA-uw_.js";import"./Collection-C1RlERD9.js";import"./index-DsHRxv5I.js";import"./DragAndDrop-Cx907zZs.js";import"./getScrollParent-CETkwjQI.js";import"./scrollIntoView-CF0w4XnJ.js";import"./SelectionIndicator-D3inM4um.js";import"./SelectionManager-CZkyF8t-.js";import"./useEvent-BW8WGxtg.js";import"./useDescription-D_Cu_EP8.js";import"./inertValue-BOdj8C4G.js";import"./useHighlightSelectionDescription-DvcTq0Ot.js";import"./useUpdateEffect-Dz_71V4R.js";import"./ListKeyboardDelegate-Bqu8vzp_.js";import"./useHasTabbableChild-Bn6zbXO2.js";import"./Checkbox-9W6fyOQS.js";import"./check-Cqig4paI.js";import"./useToggleState-BnST2m_4.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
