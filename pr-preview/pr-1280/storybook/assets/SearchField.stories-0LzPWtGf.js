import{r as m,f as l,j as t}from"./iframe-dvXwWV4I.js";import{S as d}from"./SearchField-ChTJbmyU.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CLjCOA9B.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CSQgyNi0.js";import"./clsx-B-dksMZM.js";import"./Form-DVwVv6S8.js";import"./useFocusRing-CFfVe8sk.js";import"./index-BluzQUAG.js";import"./index-CbKl3GPI.js";import"./Input-gYxwRStd.js";import"./Hidden-BiX0nsQm.js";import"./Button-DtMCt8o7.js";import"./useLabel-DUS9osvw.js";import"./useLabels-CR4N-lVY.js";import"./useButton-DGlHeihW.js";import"./FieldError-C76blMz5.js";import"./Text-CQFRG3Bv.js";import"./clsx-Ciqy0D92.js";import"./Text-CqtbULFE.js";import"./RSPContexts-CrUawT1P.js";import"./Group-BV8wH11K.js";import"./useControlledState-zKncmKHQ.js";import"./useLocalizedStringFormatter-BZ3gM8Ke.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BkMuYRIu.js";import"./useField-oOkckiEp.js";import"./TextField.module-DdivwlC8.js";import"./search-BaQ_Lx-T.js";import"./createLucideIcon-Cuh90yXY.js";import"./x-BvR5c_PP.js";import"./useLocalizedStringFormatter-CE8NwZkm.js";import"./Button-DN_kkRXq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DTt1NZf8.js";import"./Collection-HMTWRzY6.js";import"./index-BSXZ-u45.js";import"./DragAndDrop-CwWIR4Nr.js";import"./getScrollParent-Bb4tqPd4.js";import"./scrollIntoView-DYF4SUsq.js";import"./SelectionIndicator-CPkYOcv2.js";import"./SelectionManager-D0zL9NsZ.js";import"./useEvent-CmLc8va6.js";import"./useDescription-DSgANlen.js";import"./inertValue-DIqvJfG6.js";import"./useHighlightSelectionDescription-DHz6EPdI.js";import"./useUpdateEffect-wgRow701.js";import"./ListKeyboardDelegate-CXITj8z1.js";import"./useHasTabbableChild-CCAN-Nmy.js";import"./Checkbox-D52Z25ZM.js";import"./check-2nNdDjSt.js";import"./useToggleState-DLHAieOC.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
