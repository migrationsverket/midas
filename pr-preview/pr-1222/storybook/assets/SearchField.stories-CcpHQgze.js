import{r as m,f as l,j as t}from"./iframe-BTaDbuxu.js";import{S as d}from"./SearchField-BPpzFPwN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-etToZKqA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-1uCA-_jS.js";import"./clsx-B-dksMZM.js";import"./Form-CRVSZQwH.js";import"./useFocusRing-BHhR7R8K.js";import"./index-Bb20tbAa.js";import"./index-D6fO5xxY.js";import"./Input-DrCdW5E2.js";import"./Hidden-DHaMiUFe.js";import"./Button-V9h2N0md.js";import"./useLabel-J_84CvRn.js";import"./useLabels-DegCLMnY.js";import"./useButton-S82UpuFO.js";import"./FieldError-BSmb6mHx.js";import"./Text-DMH4kU1u.js";import"./clsx-Ciqy0D92.js";import"./Text-BgkGdlQT.js";import"./RSPContexts-BHVdxW7V.js";import"./Group-Bofc7W_S.js";import"./useControlledState-CpRYTvJt.js";import"./useLocalizedStringFormatter-XUeJ46d1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DXtDSAZ5.js";import"./useField-12NpjcQ6.js";import"./TextField.module-DdivwlC8.js";import"./search-FIkKLxSG.js";import"./createLucideIcon-B7TgxeN_.js";import"./x--XPZcdcH.js";import"./useLocalizedStringFormatter-Bl_scK9Q.js";import"./Button-Cy0fOhbL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CqahcWwX.js";import"./Collection-DjeNEEmf.js";import"./index-DdZfCU1H.js";import"./DragAndDrop-Be43WoFX.js";import"./getScrollParent-D2rHfLmL.js";import"./scrollIntoView-BMucG0RA.js";import"./SelectionIndicator-lL4f1q1r.js";import"./SelectionManager-DeqISQES.js";import"./useEvent-DlwZgChj.js";import"./useDescription-DJkbGKg1.js";import"./inertValue-Be-OtQTr.js";import"./useHighlightSelectionDescription-Y_YPMbbi.js";import"./useUpdateEffect-DUYs8y4H.js";import"./ListKeyboardDelegate-Ddis9XgJ.js";import"./useHasTabbableChild-Chf1pm8f.js";import"./Checkbox-FIzzQDGi.js";import"./check-0Rjjnyk-.js";import"./useToggleState-DhqMLYue.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
