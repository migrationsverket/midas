import{r as m,f as l,j as t}from"./iframe-B8dODSM7.js";import{S as d}from"./SearchField-D-GdEC0U.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C1cDjXBy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DKhPm4Nt.js";import"./clsx-B-dksMZM.js";import"./Form-fEW4gPte.js";import"./useFocusRing-DKQkST-P.js";import"./index-pILuv3eo.js";import"./index-DvxVvxvs.js";import"./Input-BX1nKMCU.js";import"./Hidden-DILkQdFQ.js";import"./Button-CEvb2_wi.js";import"./useLabel-CeFvsTDB.js";import"./useLabels-Cr6sIa7x.js";import"./useButton-C2UEY7aL.js";import"./FieldError-Cs03i1ku.js";import"./Text-CIOHcKum.js";import"./clsx-Ciqy0D92.js";import"./Text-DyDE_nMf.js";import"./RSPContexts-CqliKkX6.js";import"./Group-3gZKcWTc.js";import"./useControlledState-DhH3lMF6.js";import"./useLocalizedStringFormatter-ByMwlETP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BCIzyEOQ.js";import"./useField-BdHAuGxs.js";import"./TextField.module-DdivwlC8.js";import"./search-C0dwNN1Y.js";import"./createLucideIcon-7ECh1RW_.js";import"./x-DX19Ur0q.js";import"./useLocalizedStringFormatter-BpbsYO7v.js";import"./Button-BGOYT3gN.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Csntf2Wj.js";import"./Collection-DI0lZ1-t.js";import"./index-Fa2TZhX8.js";import"./DragAndDrop-MxMxcDac.js";import"./getScrollParent-aaxOorIB.js";import"./scrollIntoView-Dkn0W1jL.js";import"./SelectionIndicator-CEBIgYAc.js";import"./SelectionManager-DJWKkXrJ.js";import"./useEvent-DkI1NEZn.js";import"./useDescription-BO0eKfud.js";import"./inertValue-BqxU2OSZ.js";import"./useHighlightSelectionDescription-GY2wtC48.js";import"./useUpdateEffect-DPH9WA_z.js";import"./ListKeyboardDelegate-HodYo91a.js";import"./useHasTabbableChild-BuHjtqp-.js";import"./Checkbox-BQIEVqMG.js";import"./check-DqTzPJ7e.js";import"./useToggleState-ip32yeQs.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
