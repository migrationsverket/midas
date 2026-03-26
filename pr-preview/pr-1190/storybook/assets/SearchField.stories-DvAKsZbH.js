import{r as m,f as l,j as t}from"./iframe-CcR8w04L.js";import{S as d}from"./SearchField-Bfyo5jlH.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CCdn-mqU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-af0tYTw3.js";import"./clsx-B-dksMZM.js";import"./Form-dCKfEOqU.js";import"./useFocusRing-D1A2CEDA.js";import"./index-DRTGbyk6.js";import"./index-cXkWMWCH.js";import"./Input-CbOBMUTC.js";import"./Hidden-DwthtQe9.js";import"./Button-DiPSkE8a.js";import"./useLabel-D1-RwtiE.js";import"./useLabels-B6AFz8zN.js";import"./useButton-BOkIyd3s.js";import"./FieldError-htExcrgg.js";import"./Text-aSsPMv-x.js";import"./clsx-Ciqy0D92.js";import"./Text-BOLbzqGN.js";import"./RSPContexts-D6Nmnt3c.js";import"./Group-COYcyvYX.js";import"./useControlledState-CEdHUrMX.js";import"./useLocalizedStringFormatter-CgjdUKuv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DW_FOim-.js";import"./useField-CK1CEvDx.js";import"./TextField.module-DdivwlC8.js";import"./search-9mr2mGVf.js";import"./createLucideIcon-Bth_BE09.js";import"./x-DuzdHKBG.js";import"./useLocalizedStringFormatter-DATZ4L6m.js";import"./Button-BiOwK_dU.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BpOhFVs3.js";import"./Collection-Bkz2Ue8x.js";import"./index-B2xZ7LZU.js";import"./DragAndDrop-DiEMuE58.js";import"./getScrollParent-C12n-Bvt.js";import"./scrollIntoView-B7qNvkQR.js";import"./SelectionIndicator-c_eTMs6v.js";import"./SelectionManager-Ig_Qb5vq.js";import"./useEvent-CEJe_3LM.js";import"./useDescription-Cu4rveQh.js";import"./inertValue-BdSMqbYK.js";import"./useHighlightSelectionDescription-axHF1BcD.js";import"./useUpdateEffect-Be1droyQ.js";import"./ListKeyboardDelegate-D0dJW87p.js";import"./useHasTabbableChild-DEg8XVq8.js";import"./Checkbox-BPgXq276.js";import"./check-e4v_QP_h.js";import"./useToggleState-CUbxCNJr.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
