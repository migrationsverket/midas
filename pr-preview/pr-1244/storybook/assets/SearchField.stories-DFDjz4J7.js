import{r as m,f as l,j as t}from"./iframe-UnOrZDCo.js";import{S as d}from"./SearchField-Ce8ZIAq5.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CDEY2Jnx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DKy0aGzr.js";import"./clsx-B-dksMZM.js";import"./Form-Bt6GvUIb.js";import"./useFocusRing-Bp9IxzZX.js";import"./index-Bfrs3YKb.js";import"./index-DPXy1hV4.js";import"./Input-Cs81vcsg.js";import"./Hidden-BgWTJ4vd.js";import"./Button-Bxrzo9c5.js";import"./useLabel-De-33T0c.js";import"./useLabels-1WZ6CxHa.js";import"./useButton-BWTGB_Cp.js";import"./FieldError-BTGqp3OT.js";import"./Text-C6YEGwEA.js";import"./clsx-Ciqy0D92.js";import"./Text-BkvdwtUJ.js";import"./RSPContexts-B4tPHjXP.js";import"./Group-BljE0MsX.js";import"./useControlledState-DgxohqQv.js";import"./useLocalizedStringFormatter-lLy4v2xp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ByLEKpTJ.js";import"./useField-DLZ_5onF.js";import"./TextField.module-DdivwlC8.js";import"./search-D_8HMHSN.js";import"./createLucideIcon-A1bnhQ0L.js";import"./x-DWogN0h0.js";import"./useLocalizedStringFormatter-KbPyvbsO.js";import"./Button-DZKUgycP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ulNGrwFD.js";import"./Collection-C06BWKHu.js";import"./index-B8SNsTzv.js";import"./DragAndDrop-yw8rYTe4.js";import"./getScrollParent-BhH05UgX.js";import"./scrollIntoView-D4-k8RNQ.js";import"./SelectionIndicator-C80ridiA.js";import"./SelectionManager-CIl23jZ2.js";import"./useEvent-C-gMyQkY.js";import"./useDescription-CDMg63Ol.js";import"./inertValue-BVWDgwue.js";import"./useHighlightSelectionDescription-B4znxwxD.js";import"./useUpdateEffect-De277vo8.js";import"./ListKeyboardDelegate-DAEtZx3l.js";import"./useHasTabbableChild-Csu65WAl.js";import"./Checkbox-Biv20TKi.js";import"./check-9B5EUmdW.js";import"./useToggleState-CmTiOG-P.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
