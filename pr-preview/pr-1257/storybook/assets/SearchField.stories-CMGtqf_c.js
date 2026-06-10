import{r as m,f as l,j as t}from"./iframe-BEEFzEsx.js";import{S as d}from"./SearchField-TQC0fvyW.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-9MtHWZpJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BVGeTo1z.js";import"./clsx-B-dksMZM.js";import"./Form-BGu38tuQ.js";import"./useFocusRing-DayYpa6h.js";import"./index-8CayshPQ.js";import"./index-icYaoe9T.js";import"./Input-DVbGj_jy.js";import"./Hidden-C5MrPpGY.js";import"./Button-DEUQgxtQ.js";import"./useLabel-BuYW4wvI.js";import"./useLabels-B32s2Ncd.js";import"./useButton-lpD_KbJB.js";import"./FieldError-HGo-eDX1.js";import"./Text-C3TPO5Ck.js";import"./clsx-Ciqy0D92.js";import"./Text-UbV7blhr.js";import"./RSPContexts-BmjfNHwO.js";import"./Group-4XxyF67-.js";import"./useControlledState-DWXRJogA.js";import"./useLocalizedStringFormatter-CLVweFRJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSz5zs0C.js";import"./useField-BfF4G1fX.js";import"./TextField.module-DdivwlC8.js";import"./search-Mlwmisgi.js";import"./createLucideIcon-DyvpJvxd.js";import"./x-BRbO8G8P.js";import"./useLocalizedStringFormatter-BOrzEOxe.js";import"./Button-BTzHjp2C.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CkEbrnwS.js";import"./Collection-Dr9ShMWk.js";import"./index-DtekuTHO.js";import"./DragAndDrop-CNHko37p.js";import"./getScrollParent-DF6Cs9JC.js";import"./scrollIntoView-z3uFmj1G.js";import"./SelectionIndicator-CBUlw6yG.js";import"./SelectionManager-Bxd3V494.js";import"./useEvent-DC72q5eP.js";import"./useDescription-Cvt0OA1S.js";import"./inertValue-nNkpz4vq.js";import"./useHighlightSelectionDescription-C8UBnLjj.js";import"./useUpdateEffect-dwDNTmeU.js";import"./ListKeyboardDelegate-DP9rBTKu.js";import"./useHasTabbableChild-DT7WHojm.js";import"./Checkbox-prY499pT.js";import"./check-g9NruDIn.js";import"./useToggleState-D8TQhNXl.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
